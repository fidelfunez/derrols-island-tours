"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Pixels from top — still “in the hero” while under this. */
const TOP_THRESHOLD = 80;
/** Time with no scroll at top before copy + heavy frost ease away. */
const IDLE_MS = 11_000;

/**
 * After `IDLE_MS` at the top of the page with no scroll, returns true (“ambient” hero).
 * Any scroll resets. Disabled when `disabled` (e.g. reduced motion).
 */
export function useHeroIdleAmbient(disabled: boolean) {
  const [ambient, setAmbient] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const scheduleAmbient = useCallback(() => {
    clearTimer();
    if (disabled) return;
    timerRef.current = setTimeout(() => {
      if (typeof window === "undefined") return;
      if (window.scrollY <= TOP_THRESHOLD) {
        setAmbient(true);
      }
    }, IDLE_MS);
  }, [clearTimer, disabled]);

  useEffect(() => {
    if (disabled) {
      setAmbient(false);
      clearTimer();
      return;
    }

    const onScroll = () => {
      setAmbient(false);
      if (window.scrollY <= TOP_THRESHOLD) {
        scheduleAmbient();
      } else {
        clearTimer();
      }
    };

    scheduleAmbient();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimer();
    };
  }, [disabled, scheduleAmbient, clearTimer]);

  return ambient;
}
