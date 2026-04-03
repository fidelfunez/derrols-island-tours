"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useHeroAmbientSetter } from "@/contexts/HeroAmbientContext";
import type { Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content";
import { useHeroIdleAmbient } from "@/hooks/useHeroIdleAmbient";
import { useParallaxAllowed } from "@/hooks/useParallaxAllowed";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Fallback still when reduced motion is on — WebP in /public/Photos */
const HERO_IMAGE = "/Photos/hero/roatan-hero-banner-derrol-island-tours.webp";

const HERO_VIDEO_WEBM = "/Videos/hero.webm";
const HERO_VIDEO_MP4 = "/Videos/hero.mp4";
const HERO_VIDEO_POSTER = "/Videos/hero-poster.jpg";

export function Hero({ locale, copy }: { locale: Locale; copy: Content["hero"] }) {
  const c = copy;
  const prefix = `/${locale}`;
  const ref = useRef<HTMLElement>(null);
  const parallaxOk = useParallaxAllowed();
  const reduced = useReducedMotion();
  const ambient = useHeroIdleAmbient(reduced);
  const setHeroAmbientGlobal = useHeroAmbientSetter();

  useEffect(() => {
    setHeroAmbientGlobal?.(ambient);
    return () => setHeroAmbientGlobal?.(false);
  }, [ambient, setHeroAmbientGlobal]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], parallaxOk ? ["0%", "40%"] : ["0%", "0%"]);

  const stagger = reduced ? 0 : 0.15;

  return (
    <section ref={ref} className="relative min-h-[100dvh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <div className="absolute inset-0">
          {reduced ? (
            <Image
              src={HERO_IMAGE}
              alt={c.backgroundImageAlt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          ) : (
            <video
              className={`absolute inset-0 h-full w-full object-cover transition-[filter] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                ambient
                  ? "brightness-100 contrast-100 saturate-100"
                  : "brightness-[0.88] contrast-[1.03] saturate-[0.95]"
              }`}
              poster={HERO_VIDEO_POSTER}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            >
              <source src={HERO_VIDEO_WEBM} type="video/webm" />
              <source src={HERO_VIDEO_MP4} type="video/mp4" />
            </video>
          )}
        </div>
      </motion.div>

      <div className="grain-overlay absolute inset-0 z-[1]" aria-hidden />

      <motion.div
        className="pointer-events-none absolute inset-0 z-[2]"
        aria-hidden
        initial={false}
        animate={{ opacity: ambient ? 0.2 : 1 }}
        transition={{ duration: reduced ? 0.35 : 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Base wash: anchors the bottom, keeps sky/video visible at top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(12,12,14,0.94) 0%, rgba(12,12,14,0.72) 28%, rgba(12,12,14,0.38) 52%, rgba(12,12,14,0.12) 72%, transparent 100%)",
          }}
        />
        {/* Radial read zone */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 115% 85% at 50% 44%, rgba(8,8,10,0.78) 0%, rgba(8,8,10,0.35) 45%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent" />
      </motion.div>

      {/* Full-viewport frost — lifts in “ambient” mode so the video reads clearly */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[3] bg-dark/[0.26] backdrop-blur-[2px] md:bg-dark/[0.22] md:backdrop-blur-[3px]"
        aria-hidden
        initial={false}
        animate={{ opacity: ambient ? 0 : 1 }}
        transition={{ duration: reduced ? 0.35 : 0.85, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-6 pb-24 pt-28 text-center md:px-10"
        initial={false}
        animate={{
          opacity: ambient ? 0 : 1,
          y: ambient && !reduced ? -14 : 0,
        }}
        transition={{ duration: reduced ? 0.35 : 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: ambient ? "none" : "auto" }}
      >
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: reduced ? 0 : 0 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-coral [text-shadow:0_1px_2px_rgba(0,0,0,0.85),0_2px_16px_rgba(0,0,0,0.5)] md:text-sm"
          >
            {c.label}
          </motion.p>
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: reduced ? 0 : stagger }}
            className="max-w-4xl font-display text-5xl font-medium leading-[1.05] text-light [text-shadow:0_2px_4px_rgba(0,0,0,0.55),0_6px_28px_rgba(0,0,0,0.5),0_1px_0_rgba(0,0,0,0.25)] md:text-7xl lg:text-8xl"
          >
            {c.headline}
          </motion.h1>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: reduced ? 0 : stagger * 2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.75),0_4px_20px_rgba(0,0,0,0.45)] md:text-lg"
          >
            {c.sub}
          </motion.p>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: reduced ? 0 : stagger * 3 }}
            className="mt-10"
          >
            <Link
              href={`${prefix}#tours`}
              tabIndex={ambient ? -1 : undefined}
              className="inline-block rounded-full bg-coral px-10 py-4 text-sm font-semibold text-light shadow-lg transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-light md:text-base"
            >
              {c.cta}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
