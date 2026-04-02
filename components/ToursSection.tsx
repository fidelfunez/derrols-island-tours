"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content";
import {
  getTagLabel,
  getTourTag,
  tourSpotlightSlides,
  tours,
} from "@/lib/content";
import { whatsappHref } from "@/lib/site";
import { SectionDivider } from "./SectionDivider";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const SPOTLIGHT_COUNT = tourSpotlightSlides.length;

function TourCard({
  locale,
  tour,
  sectionCopy,
  index,
  reduced,
}: {
  locale: Locale;
  tour: (typeof tours)[number];
  sectionCopy: Content["toursSection"];
  index: number;
  reduced: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const name = tour.names[locale];
  const desc = tour.desc[locale];
  const tag = getTourTag(tour, locale);
  const waMessage =
    locale === "es"
      ? `Hola Derrol, me interesa el tour: ${name}`
      : `Hi Derrol, I'm interested in the tour: ${name}`;

  return (
    <motion.article
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : reduced ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: reduced ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduced ? undefined : { y: -8, transition: { duration: 0.25 } }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-light shadow-[0_8px_40px_-12px_rgba(28,28,30,0.15)] transition-shadow duration-300 hover:shadow-[0_20px_50px_-12px_rgba(28,28,30,0.22)]"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={tour.coverImage}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
        {tour.id === "shark" && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-soft-light bg-ocean/35"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6 md:p-7">
        <span className="inline-flex w-fit rounded-full bg-turquoise/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-turquoise">
          {tag}
        </span>
        <h3 className="font-display text-2xl font-medium text-dark md:text-[1.65rem]">{name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-dark/75 md:text-base">{desc}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs text-dark/55 md:text-sm">
          <span className="inline-flex items-center gap-1" aria-hidden>
            <svg className="h-4 w-4 text-ocean" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <span>{sectionCopy.contactPricing}</span>
        </div>
        <a
          href={whatsappHref(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-turquoise/30 bg-turquoise/10 py-3 text-sm font-semibold text-turquoise transition hover:bg-turquoise/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise"
        >
          {sectionCopy.bookThisTour}
        </a>
      </div>
    </motion.article>
  );
}

function TourSpotlightCarousel({
  locale,
  sectionCopy,
  reduced,
}: {
  locale: Locale;
  sectionCopy: Content["toursSection"];
  reduced: boolean;
}) {
  const sc = sectionCopy.spotlight;
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const regionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(regionRef, { once: true, margin: "-40px" });

  const go = useCallback((delta: number) => {
    setIndex((i) => (i + delta + SPOTLIGHT_COUNT) % SPOTLIGHT_COUNT);
  }, []);

  const slide = tourSpotlightSlides[index];
  const name = slide.names[locale];
  const desc = slide.desc[locale];
  const tag = getTagLabel(slide.tagKey, locale);
  const waMessage =
    locale === "es"
      ? `Hola Derrol, me interesa el tour: ${name}`
      : `Hi Derrol, I'm interested in the tour: ${name}`;

  const dotArias = [sc.dotHoleAria, sc.dotTikiAria] as const;

  return (
    <div className="mt-20 md:mt-24">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral md:text-sm">{sc.eyebrow}</p>
        <h3 className="mt-3 font-display text-3xl font-medium text-dark md:text-4xl">{sc.title}</h3>
        <div className="mt-2 flex justify-center">
          <SectionDivider />
        </div>
        <p className="mt-3 text-base leading-relaxed text-dark/70 md:text-lg">{sc.sub}</p>
      </header>

      <div
        ref={regionRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={sc.title}
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
        className="mt-12 overflow-hidden rounded-3xl bg-light shadow-[0_12px_48px_-12px_rgba(28,28,30,0.18)] ring-1 ring-dark/8 outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2 focus-visible:ring-offset-sand"
      >
        <div className="grid lg:grid-cols-2 lg:gap-0">
          <div
            className="relative aspect-[4/3] min-h-[220px] touch-pan-y sm:aspect-[16/11] lg:aspect-auto lg:min-h-[min(420px,50vw)]"
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
                key={slide.id}
                initial={reduced ? false : { opacity: 0 }}
                animate={
                  inView ? { opacity: 1 } : reduced ? { opacity: 1 } : { opacity: 0 }
                }
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.coverImage}
                  alt={name}
                  fill
                  className="object-cover"
                  style={
                    "coverImageObjectPosition" in slide
                      ? { objectPosition: slide.coverImageObjectPosition }
                      : undefined
                  }
                  sizes="(max-width:1024px) 100vw, 50vw"
                  priority={false}
                />
              </motion.div>
            </AnimatePresence>
            <p className="sr-only" aria-live="polite">
              {name}
            </p>
            <p className="pointer-events-none absolute bottom-3 left-0 right-0 text-center text-xs text-light/90 drop-shadow-md md:hidden">
              {sc.swipeHint}
            </p>
          </div>

          <div className="flex flex-col justify-center gap-5 p-8 md:p-10 lg:pl-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex w-fit rounded-full bg-turquoise/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-turquoise">
                {tag}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={sc.prevAria}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-dark/15 text-lg text-dark transition hover:bg-dark/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={sc.nextAria}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-dark/15 text-lg text-dark transition hover:bg-dark/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise"
                >
                  ›
                </button>
                <div className="ml-2 flex gap-2" role="tablist" aria-label={sc.title}>
                  {tourSpotlightSlides.map((s, i) => (
                    <button
                      key={s.id}
                      type="button"
                      role="tab"
                      aria-selected={i === index}
                      aria-label={dotArias[i]}
                      onClick={() => setIndex(i)}
                      className={`h-2.5 w-2.5 rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise ${
                        i === index ? "scale-110 bg-coral" : "bg-dark/25 hover:bg-dark/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={slide.id}
                initial={reduced ? false : { opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : reduced ? { opacity: 1, y: 0 } : {}}
                exit={reduced ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <h4 className="font-display text-2xl font-medium text-dark md:text-3xl">{name}</h4>
                <p className="mt-3 text-sm leading-relaxed text-dark/75 md:text-base">{desc}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap items-center gap-2 text-xs text-dark/55 md:text-sm">
              <span className="inline-flex items-center gap-1" aria-hidden>
                <svg className="h-4 w-4 text-ocean" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span>{sectionCopy.contactPricing}</span>
            </div>
            <a
              href={whatsappHref(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-md items-center justify-center rounded-full border border-turquoise/30 bg-turquoise/10 py-3.5 text-sm font-semibold text-turquoise transition hover:bg-turquoise/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise md:text-base"
            >
              {sectionCopy.bookThisTour}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ToursSection({
  locale,
  copy,
}: {
  locale: Locale;
  copy: Content["toursSection"];
}) {
  const reduced = useReducedMotion();

  return (
    <section id="tours" className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-medium text-dark md:text-5xl">{copy.title}</h2>
          <SectionDivider />
          <p className="mt-2 text-base leading-relaxed text-dark/70 md:text-lg">{copy.sub}</p>
        </header>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, i) => (
            <TourCard
              key={tour.id}
              tour={tour}
              locale={locale}
              sectionCopy={copy}
              index={i}
              reduced={reduced}
            />
          ))}
        </div>

        <TourSpotlightCarousel locale={locale} sectionCopy={copy} reduced={reduced} />
      </div>
    </section>
  );
}
