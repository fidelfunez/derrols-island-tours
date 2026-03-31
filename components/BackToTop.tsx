"use client";

import { useEffect, useState } from "react";
import type { Content } from "@/lib/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Visible once #tours reaches the main nav row — same threshold as navbar dark text.
 * Hidden while the hero fills the scroll position above that point.
 */
export function BackToTop({ copy }: { copy: Content["backToTop"] }) {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const marker = document.getElementById("tours");
      const navRow = document.querySelector("header nav");
      if (!marker || !navRow) {
        setVisible(false);
        return;
      }
      const navH = navRow.getBoundingClientRect().height;
      setVisible(marker.getBoundingClientRect().top <= navH);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[60] md:bottom-8 md:right-8">
      <button
        type="button"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })
        }
        aria-label={copy.aria}
        aria-hidden={!visible}
        tabIndex={visible ? 0 : -1}
        className={`group relative flex h-11 w-11 items-center justify-center rounded-full bg-coral text-light shadow-md transition-[opacity,transform,box-shadow] duration-300 ease-out hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral md:h-12 md:w-12 ${
          visible
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <IconChevronUp className="h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]" />
        <span className="pointer-events-none absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg bg-dark px-2.5 py-1 text-[11px] font-medium text-light opacity-0 shadow-lg transition group-hover:opacity-100 md:text-xs">
          {copy.label}
        </span>
      </button>
    </div>
  );
}

function IconChevronUp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}
