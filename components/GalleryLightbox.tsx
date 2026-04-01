"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type LightboxLabels = {
  closeAria: string;
  prevAria: string;
  nextAria: string;
  dialogLabel: string;
  counter: (current: number, total: number) => string;
};

type Props = {
  open: boolean;
  images: readonly string[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
  getAlt: (src: string) => string;
  labels: LightboxLabels;
};

export function GalleryLightbox({
  open,
  images,
  index,
  onClose,
  onIndexChange,
  getAlt,
  labels,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const count = images.length;
  const safeIndex =
    count === 0 ? 0 : Math.min(Math.max(0, index), count - 1);
  const src = images[safeIndex];

  const goPrev = useCallback(() => {
    if (count <= 1) return;
    onIndexChange(safeIndex <= 0 ? count - 1 : safeIndex - 1);
  }, [count, onIndexChange, safeIndex]);

  const goNext = useCallback(() => {
    if (count <= 1) return;
    onIndexChange(safeIndex >= count - 1 ? 0 : safeIndex + 1);
  }, [count, onIndexChange, safeIndex]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, goPrev, goNext]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 0);
    const el = containerRef.current;
    if (!el) {
      return () => window.clearTimeout(t);
    }
    const selector =
      'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const list = el.querySelectorAll<HTMLElement>(selector);
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    el.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(t);
      el.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && count > 0 ? (
        <motion.div
          key="gallery-lightbox"
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-label={labels.dialogLabel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100]"
        >
          <motion.div
            role="presentation"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 cursor-default bg-dark/88 backdrop-blur-[2px]"
            onClick={onClose}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto relative flex max-h-[min(90vh,920px)] w-full max-w-5xl flex-col gap-3"
            >
              <div className="flex shrink-0 items-center justify-between gap-4 px-1 text-light drop-shadow-md">
                <p className="text-sm font-medium tabular-nums text-light/95">
                  {labels.counter(safeIndex + 1, count)}
                </p>
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={onClose}
                  aria-label={labels.closeAria}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-light/10 text-2xl leading-none text-light ring-1 ring-light/25 transition hover:bg-light/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
                >
                  ×
                </button>
              </div>
              <div className="relative flex min-h-0 flex-1 items-center justify-center gap-2 md:gap-4">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={count <= 1}
                  aria-label={labels.prevAria}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-light/10 text-xl text-light ring-1 ring-light/25 transition hover:bg-light/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light disabled:pointer-events-none disabled:opacity-35 md:h-12 md:w-12 md:text-2xl"
                >
                  ‹
                </button>
                <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden rounded-2xl bg-dark/40 shadow-2xl ring-1 ring-light/15">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={getAlt(src)}
                    className="mx-auto block max-h-[min(72vh,780px)] w-full object-contain"
                    draggable={false}
                  />
                </div>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={count <= 1}
                  aria-label={labels.nextAria}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-light/10 text-xl text-light ring-1 ring-light/25 transition hover:bg-light/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light disabled:pointer-events-none disabled:opacity-35 md:h-12 md:w-12 md:text-2xl"
                >
                  ›
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
