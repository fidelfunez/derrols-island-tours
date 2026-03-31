"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

const PARALLAX_MIN_WIDTH = 1024;

/** Parallax only on large viewports and when reduced motion is off. */
export function useParallaxAllowed() {
  const reducedMotion = useReducedMotion();
  const [wideEnough, setWideEnough] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${PARALLAX_MIN_WIDTH}px)`);
    setWideEnough(mq.matches);
    const onChange = () => setWideEnough(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return wideEnough && !reducedMotion;
}
