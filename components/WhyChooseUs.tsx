"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Content } from "@/lib/content";
import { SectionDivider } from "./SectionDivider";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const WHY_CARDS_TEXTURE =
  "/Photos/about/roatan-island-tours-why-choose-cards-texture.webp";

export function WhyChooseUs({ copy }: { copy: Content["why"] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <section
      id="why"
      className="relative overflow-hidden bg-ocean py-24 text-light md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.22] mix-blend-soft-light"
        style={{ backgroundImage: `url(${WHY_CARDS_TEXTURE})` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_90%_80%_at_50%_42%,transparent_0%,rgba(0,20,40,0.55)_78%,rgba(0,12,28,0.92)_100%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-ocean/70 via-transparent to-ocean/85" aria-hidden />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <motion.header
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-2xl text-center md:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coral">
            {copy.label}
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-light md:text-4xl lg:text-[2.5rem]">
            {copy.title}
          </h2>
          <div className="flex justify-center">
            <SectionDivider />
          </div>
          <p className="mt-2 text-base leading-relaxed text-light/75 md:text-lg">{copy.sub}</p>
        </motion.header>

        <div className="grid gap-8 md:grid-cols-3 md:gap-7">
          {copy.cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={reduced ? false : { opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: reduced ? 0 : 0.12 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduced
                  ? undefined
                  : { y: -4, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }
              }
              className="group relative rounded-2xl border border-white/[0.14] bg-[#042f4d] p-8 shadow-[0_16px_48px_-14px_rgba(0,0,0,0.55)] ring-1 ring-inset ring-white/[0.06] md:p-9"
            >
              <span
                className="mb-4 block font-sans text-[11px] font-semibold text-coral/90"
                aria-hidden
              >
                {i + 1}
              </span>
              <h3 className="font-display text-2xl font-medium leading-snug text-light md:text-[1.35rem] lg:text-2xl">
                {card.title}
              </h3>
              <SectionDivider align="start" />
              <p className="mt-1 text-sm leading-relaxed text-light/80 md:text-base">{card.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
