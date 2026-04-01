"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import type { Content } from "@/lib/content";
import {
  GALLERY_INITIAL_COUNT,
  GALLERY_LOAD_MORE_STEP,
  galleryImages,
} from "@/lib/gallery";
import { GalleryLightbox } from "./GalleryLightbox";
import { SectionDivider } from "./SectionDivider";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function galleryAlt(copy: Content["gallery"], src: string) {
  return `${copy.imageAlt} ${galleryImages.indexOf(src) + 1}`;
}

export function GallerySection({ copy }: { copy: Content["gallery"] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const total = galleryImages.length;
  const hasPhotos = total > 0;

  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(GALLERY_INITIAL_COUNT, total)
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const visibleImages = useMemo(
    () => galleryImages.slice(0, visibleCount),
    [visibleCount]
  );

  const desktopPreview = useMemo(
    () => galleryImages.slice(0, Math.min(GALLERY_INITIAL_COUNT, total)),
    [total]
  );

  const canLoadMore = visibleCount < total;
  const remaining = total - visibleCount;
  const nextStep = Math.min(GALLERY_LOAD_MORE_STEP, remaining);
  const hasMoreThanDesktopPreview = total > GALLERY_INITIAL_COUNT;

  const openLightboxAt = (i: number) => {
    setLightboxIndex(Math.min(Math.max(0, i), Math.max(0, total - 1)));
    setLightboxOpen(true);
  };

  const lightboxLabels = useMemo(
    () => ({
      closeAria: copy.lightboxCloseAria,
      prevAria: copy.lightboxPrevAria,
      nextAria: copy.lightboxNextAria,
      dialogLabel: copy.lightboxDialogLabel,
      counter: (current: number, countTotal: number) =>
        copy.lightboxCounter
          .replace("{current}", String(current))
          .replace("{total}", String(countTotal)),
    }),
    [copy]
  );

  return (
    <section id="gallery" className="bg-light py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-5 md:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-coral md:text-sm"
          >
            {copy.label}
          </motion.p>
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: reduced ? 0 : 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 font-display text-4xl font-medium text-dark md:text-5xl"
          >
            {copy.title}
          </motion.h2>
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: reduced ? 0 : 0.12 }}
            className="mt-2 flex justify-center"
          >
            <SectionDivider />
          </motion.div>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: reduced ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 text-base leading-relaxed text-dark/70 md:text-lg"
          >
            {copy.sub}
          </motion.p>
        </header>

        <div className="mt-14">
          {hasPhotos ? (
            <>
              {/* Mobile: same visible window as desktop — swipe + load more (fewer DOM nodes). */}
              <div className="md:hidden">
                <div
                  role="region"
                  aria-label={copy.label}
                  className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-5 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  {visibleImages.map((src) => (
                    <figure
                      key={src}
                      className="gallery-tile-cv m-0 w-[min(85vw,22rem)] shrink-0 snap-center snap-always"
                    >
                      <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_8px_40px_-12px_rgba(28,28,30,0.14)] ring-1 ring-dark/5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt={galleryAlt(copy, src)}
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                          className="absolute inset-0 h-full w-full object-cover object-center select-none"
                        />
                      </div>
                    </figure>
                  ))}
                </div>
                <p className="mt-4 text-center text-xs text-dark/50">{copy.swipeHint}</p>
                {canLoadMore ? (
                  <div className="mt-6 flex flex-col items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleCount((n) =>
                          Math.min(n + GALLERY_LOAD_MORE_STEP, total)
                        )
                      }
                      aria-label={`${copy.loadMore} (${nextStep})`}
                      className="cursor-pointer rounded-full border-2 border-[var(--color-coral-deep)] bg-transparent px-8 py-3 font-sans text-sm font-medium text-[var(--color-coral-deep)] transition hover:bg-[var(--color-coral-deep)] hover:text-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-coral-deep)]"
                    >
                      {copy.loadMore}
                    </button>
                    <p className="text-xs text-dark/45">
                      {visibleCount} / {total}
                    </p>
                  </div>
                ) : null}
              </div>

              {/* Desktop: fixed preview grid + lightbox for full collection */}
              <div className="hidden md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
                {desktopPreview.map((src, i) => (
                  <motion.figure
                    key={src}
                    initial={reduced ? false : { opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.45,
                      delay: reduced ? 0 : Math.min(i * 0.04, 0.45),
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="gallery-tile-cv m-0"
                  >
                    <button
                      type="button"
                      onClick={() => openLightboxAt(i)}
                      aria-label={`${copy.lightboxOpenPhoto} — ${lightboxLabels.counter(i + 1, total)}`}
                      className="group block w-full cursor-pointer rounded-2xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-coral-deep)]"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_8px_40px_-12px_rgba(28,28,30,0.14)] ring-1 ring-dark/5 transition duration-300 group-hover:shadow-[0_16px_48px_-12px_rgba(28,28,30,0.2)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt={galleryAlt(copy, src)}
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                          className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </button>
                  </motion.figure>
                ))}
              </div>

              {hasMoreThanDesktopPreview ? (
                <div className="mt-10 hidden flex-col items-center gap-2 md:flex">
                  <button
                    type="button"
                    onClick={() => openLightboxAt(0)}
                    aria-label={copy.viewAllPhotos.replace("{count}", String(total))}
                    className="cursor-pointer rounded-full border-2 border-[var(--color-coral-deep)] bg-transparent px-8 py-3 font-sans text-sm font-medium text-[var(--color-coral-deep)] transition hover:bg-[var(--color-coral-deep)] hover:text-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-coral-deep)] md:text-base"
                  >
                    {copy.viewAllPhotos.replace("{count}", String(total))}
                  </button>
                </div>
              ) : null}

              <GalleryLightbox
                open={lightboxOpen}
                images={galleryImages}
                index={lightboxIndex}
                onClose={() => setLightboxOpen(false)}
                onIndexChange={setLightboxIndex}
                getAlt={(s) => galleryAlt(copy, s)}
                labels={lightboxLabels}
              />
            </>
          ) : (
            <motion.p
              initial={reduced ? false : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-center text-sm text-dark/50 md:text-base"
            >
              {copy.empty}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
