"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Content } from "@/lib/content";
import { SectionDivider } from "./SectionDivider";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const PORTRAIT = "/Photos/about/roatan-tour-guide-derrol-jackson-portrait.webp";

export function AboutSection({ copy }: { copy: Content["about"] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  const stats = [copy.stats.years, copy.stats.private, copy.stats.boat];

  return (
    <section id="about" className="bg-light py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div
          ref={ref}
          className="flex flex-col-reverse items-center gap-14 lg:flex-row lg:items-start lg:gap-20"
        >
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative shrink-0"
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-[3px] border-coral bg-ocean shadow-xl md:h-80 md:w-80">
              <Image
                src={PORTRAIT}
                alt={copy.portraitAlt}
                fill
                className="origin-center scale-[1.24] object-cover object-[center_32%_center]"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: reduced ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl flex-1 text-center lg:text-left"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coral">{copy.label}</p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-dark md:text-4xl lg:text-[2.75rem]">
              {copy.headline}
            </h2>
            <SectionDivider />
            <p className="mt-6 text-base leading-relaxed text-dark/80 md:text-lg">{copy.body}</p>
            <ul className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {stats.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-sand px-4 py-2 text-xs font-medium text-dark/80 shadow-sm md:text-sm"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
