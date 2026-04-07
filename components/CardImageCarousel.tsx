"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";

function formatPhotoCounter(template: string, current: number, total: number) {
  return template.replace("{current}", String(current)).replace("{total}", String(total));
}

type Props = {
  images: readonly string[];
  /** Accessible name for the carousel region (e.g. tour or fleet card title). */
  ariaLabel: string;
  reduced: boolean;
  swipeHint: string;
  photoCounterTemplate: string;
  priority?: boolean;
  /** Optional per-slide alt; if omitted, alt is `${ariaLabel} — ${counter}`. */
  imageAlts?: readonly string[];
  /** Ocean tint overlay (shark tour). */
  sharkTint?: boolean;
};

/**
 * Mobile card photo stack: swipe / arrow keys, dots + hint. Matches tour cards.
 */
export function CardImageCarousel({
  images,
  ariaLabel,
  reduced,
  swipeHint,
  photoCounterTemplate,
  priority,
  imageAlts,
  sharkTint,
}: Props) {
  const [slideIndex, setSlideIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const count = images.length;

  const go = useCallback(
    (delta: number) => {
      setSlideIndex((i) => (i + delta + count) % count);
    },
    [count],
  );

  const src = images[slideIndex];
  const counter = formatPhotoCounter(photoCounterTemplate, slideIndex + 1, count);
  const alt =
    imageAlts && imageAlts[slideIndex] != null ? imageAlts[slideIndex]! : `${ariaLabel} — ${counter}`;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(-1);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          go(1);
        }
      }}
      className="relative isolate h-full w-full touch-pan-y outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2 focus-visible:ring-offset-light"
      onTouchStart={(e) => {
        touchStartX.current = e.targetTouches[0].clientX;
      }}
      onTouchEnd={(e) => {
        const start = touchStartX.current;
        touchStartX.current = null;
        if (start == null) return;
        const end = e.changedTouches[0].clientX;
        const dx = end - start;
        if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={src}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            priority={priority}
          />
        </motion.div>
      </AnimatePresence>
      {sharkTint && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] mix-blend-soft-light bg-ocean/35"
        />
      )}
      <p className="sr-only" aria-live="polite">
        {counter}
      </p>
      {count > 1 && (
        <div
          className="pointer-events-none absolute bottom-2 left-0 right-0 z-10 flex justify-center gap-1.5"
          aria-hidden
        >
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition ${
                i === slideIndex ? "bg-light" : "bg-light/40"
              }`}
            />
          ))}
        </div>
      )}
      {count > 1 && (
        <div className="pointer-events-none absolute bottom-8 left-0 right-0 z-10 flex justify-center px-3">
          <p
            className="max-w-[min(100%,18rem)] rounded-full px-3.5 py-1.5 text-center text-[0.7rem] font-medium leading-tight text-light shadow-[0_2px_14px_rgba(0,0,0,0.5)] ring-1 ring-black/50"
            style={{
              backgroundColor: "color-mix(in srgb, var(--color-dark) 80%, transparent)",
            }}
          >
            {swipeHint}
          </p>
        </div>
      )}
    </div>
  );
}
