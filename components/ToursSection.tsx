"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content";
import { tours, getTourTag } from "@/lib/content";
import { whatsappHref } from "@/lib/site";
import { SectionDivider } from "./SectionDivider";
import { useReducedMotion } from "@/hooks/useReducedMotion";

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
      </div>
    </section>
  );
}
