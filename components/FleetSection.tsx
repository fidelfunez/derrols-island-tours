"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Content } from "@/lib/content";
import { CardImageCarousel } from "./CardImageCarousel";
import { SectionDivider } from "./SectionDivider";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FleetSection({ copy }: { copy: Content["fleet"] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <section
      id="fleet"
      className="border-t border-dark/6 bg-light py-24 md:py-32"
      aria-labelledby="fleet-heading"
    >
      <div ref={ref} className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.header
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-2xl text-center md:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-coral">
            {copy.label}
          </p>
          <h2
            id="fleet-heading"
            className="mt-3 font-display text-3xl font-medium leading-tight text-dark md:text-4xl lg:text-[2.5rem]"
          >
            {copy.title}
          </h2>
          <div className="flex justify-center">
            <SectionDivider />
          </div>
          <p className="mt-2 text-base leading-relaxed text-dark/75 md:text-lg">{copy.sub}</p>
        </motion.header>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:gap-10">
          {copy.items.map((item, i) => {
            const images = item.cardSwipeImages;
            const firstAlt = item.imageAlts[0] ?? item.title;
            return (
              <motion.article
                key={item.title}
                initial={reduced ? false : { opacity: 0, y: 26 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.52,
                  delay: reduced ? 0 : 0.1 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-sand/80 shadow-[0_8px_40px_-12px_rgba(28,28,30,0.12)] ring-1 ring-dark/6 transition-shadow duration-300 hover:shadow-[0_16px_48px_-12px_rgba(28,28,30,0.18)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 hidden md:block">
                    <Image
                      src={images[0]}
                      alt={firstAlt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 md:hidden">
                    <CardImageCarousel
                      images={images}
                      imageAlts={item.imageAlts}
                      ariaLabel={item.title}
                      reduced={reduced}
                      swipeHint={copy.cardSwipeHint}
                      photoCounterTemplate={copy.cardPhotoCounter}
                      priority={i === 0}
                    />
                  </div>
                  <div className="pointer-events-none absolute left-3 top-3 z-20">
                    <span className="rounded-full bg-dark/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-light backdrop-blur-sm md:text-xs">
                      {item.kind === "boat" ? copy.kindLabels.boat : copy.kindLabels.land}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 p-6 md:p-7">
                  <h3 className="font-display text-xl font-medium text-dark md:text-[1.35rem]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-dark/75 md:text-base">{item.body}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
