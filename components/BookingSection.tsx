"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content";
import { SITE, whatsappHref } from "@/lib/site";
import { SectionDivider } from "./SectionDivider";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Zoom 12 — island reads clearly; was z=10 (whole region). */
const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Roat%C3%A1n+Island%2C+Honduras&z=12&output=embed";

/** SEO-friendly filename — WebP from `ready-to-section.png` (2560×1440, q82). */
const BOOKING_SECTION_BG = "/Photos/booking/roatan-island-tours-booking-section-background.webp";

/** Matches `--color-sand` (#f2e9d8). Inline rgba — Tailwind `sand/xx` fails on CSS-variable colors. */
const BOOKING_OVERLAY =
  "linear-gradient(180deg, rgba(242,233,216,0.92) 0%, rgba(242,233,216,0.87) 45%, rgba(242,233,216,0.92) 100%)";

export function BookingSection({
  locale,
  copy,
}: {
  locale: Locale;
  copy: Content["booking"];
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [mapLoaded, setMapLoaded] = useState(false);

  const waMessage =
    locale === "es"
      ? "Hola Derrol, me gustaría reservar un tour."
      : "Hi Derrol, I'd like to book a tour.";

  return (
    <section id="book" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BOOKING_SECTION_BG})` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: BOOKING_OVERLAY }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <motion.div
          ref={ref}
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12 md:space-y-14"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-medium text-dark md:text-5xl">{copy.title}</h2>
            <SectionDivider />
            <p className="mx-auto mt-2 max-w-xl text-base leading-relaxed text-dark/75 md:text-lg">
              {copy.sub}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-dark/10 shadow-xl md:grid md:min-h-[22rem] md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <div className="flex flex-col justify-center gap-5 bg-light px-8 py-10 text-left text-dark md:px-10 md:py-12">
              <h3 className="font-display text-2xl font-medium leading-tight text-dark md:text-3xl">
                {copy.mapCardTitle}
              </h3>
              <p className="text-sm leading-relaxed text-dark/75 md:text-base">{copy.mapCardSub}</p>
              <a
                href={whatsappHref(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-white shadow-md ring-1 ring-dark/10 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean md:px-9 md:text-base"
              >
                {copy.waCta}
              </a>
              <p className="text-sm text-dark/80">
                <a
                  href={`tel:+${SITE.whatsappE164}`}
                  className="font-medium underline decoration-dark/30 underline-offset-4 transition hover:decoration-dark"
                >
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p className="text-xs text-dark/60 md:text-sm">{copy.locationLine}</p>
            </div>

            <div className="relative min-h-[280px] border-t border-dark/10 md:min-h-0 md:border-l md:border-t-0 md:border-dark/10">
              {mapLoaded ? (
                <iframe
                  title={locale === "es" ? "Mapa de Roatán" : "Map of Roatán"}
                  src={MAP_EMBED_SRC}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-sand/40 px-6">
                  <p className="text-center text-sm text-dark/60 md:text-base">
                    {locale === "es"
                      ? "Cargá el mapa cuando quieras — ahorra datos y carga más rápido."
                      : "Load the map when you’re ready — saves data and keeps the page snappy."}
                  </p>
                  <button
                    type="button"
                    onClick={() => setMapLoaded(true)}
                    className="rounded-full border-2 border-ocean bg-light px-6 py-3 font-sans text-sm font-medium text-ocean shadow-sm transition hover:bg-ocean/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean md:text-base"
                    aria-label={copy.mapLoadAria}
                  >
                    {copy.mapLoadCta}
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
