"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content";
import { BRAND } from "@/lib/brand";
import { whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useHeroAmbient } from "@/contexts/HeroAmbientContext";

type NavLabels = Content["nav"];

export function Navbar({
  locale,
  labels,
}: {
  locale: Locale;
  labels: NavLabels;
}) {
  const [open, setOpen] = useState(false);
  /** Frosted bar + border — same as before (any small scroll). */
  const [barPinned, setBarPinned] = useState(false);
  /**
   * Dark nav (text + hamburger) on light sections after #tours.
   * Stays light (hero-style white text) while the bar overlaps #why (ocean band).
   */
  const [darkNavText, setDarkNavText] = useState(false);
  /** Nav still over hero (before #tours reaches bar) — for Book Now outline timing. */
  const [inHeroNavZone, setInHeroNavZone] = useState(true);
  const navRowRef = useRef<HTMLElement>(null);
  const heroAmbient = useHeroAmbient();

  useEffect(() => {
    const update = () => {
      setBarPinned(window.scrollY > 24);

      const tours = document.getElementById("tours");
      const why = document.getElementById("why");
      const navRow = navRowRef.current;
      if (!navRow) return;
      if (!tours) {
        setDarkNavText(false);
        setInHeroNavZone(false);
        return;
      }
      const navRect = navRow.getBoundingClientRect();
      const navH = navRect.height;
      const toursTop = tours.getBoundingClientRect().top;
      const pastHeroBand = toursTop <= navH;

      let navOverlapsWhy = false;
      if (why) {
        const wr = why.getBoundingClientRect();
        navOverlapsWhy = wr.top < navRect.bottom && wr.bottom > navRect.top;
      }

      setDarkNavText(pastHeroBand && !navOverlapsWhy);
      setInHeroNavZone(toursTop > navH);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const prefix = `/${locale}`;
  /** True on hero + #why (white nav text): use `onLightBackground` asset (light mark). Scrolled light sections: `onDarkBackground` (dark mark). */
  const useLightMark = !darkNavText;
  const bookWhatsAppHref = whatsappHref(
    locale === "es"
      ? "Hola Derrol, me gustaría reservar un tour."
      : "Hi Derrol, I'd like to book a tour."
  );

  /** White outline only on hero, only after idle ambient (hero copy faded ~11s). */
  const bookNowOutline =
    !darkNavText && inHeroNavZone && heroAmbient;

  const links: { href: string; label: string; cta?: boolean }[] = [
    { href: prefix, label: labels.home },
    { href: `${prefix}#tours`, label: labels.tours },
    { href: `${prefix}#fleet`, label: labels.fleet },
    { href: `${prefix}#about`, label: labels.about },
    { href: bookWhatsAppHref, label: labels.bookNow, cta: true },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-300 ${
        barPinned
          ? "border-b border-dark/5 bg-light/75 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        ref={navRowRef}
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8"
        aria-label="Main"
      >
        <Link
          href={prefix}
          className={`flex items-center gap-2.5 font-display text-xl italic tracking-tight transition-colors md:gap-3 md:text-2xl ${
            darkNavText
              ? "text-dark"
              : `text-white drop-shadow-md${barPinned ? " [text-shadow:0_1px_2px_rgba(0,0,0,0.5),0_2px_12px_rgba(0,0,0,0.35)]" : ""}`
          }`}
        >
          <Image
            src={
              useLightMark ? BRAND.logo.onLightBackground : BRAND.logo.onDarkBackground
            }
            alt=""
            width={500}
            height={500}
            priority
            className={`h-9 w-9 shrink-0 object-contain md:h-10 md:w-10 ${
              useLightMark ? "" : "drop-shadow-md [filter:drop-shadow(0_2px_8px_rgba(0,0,0,0.35))]"
            }`}
          />
          <span>Derrol&apos;s Island Tours</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label, cta }) =>
            cta ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  darkNavText || !bookNowOutline
                    ? "inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-medium text-light shadow-md transition-colors duration-200 ease-out hover:bg-[#25D366] active:bg-[#25D366] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                    : "inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-5 py-2.5 text-sm font-medium text-white shadow-[0_2px_12px_rgba(0,0,0,0.25)] [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] transition-colors duration-200 ease-out hover:bg-white/15 active:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                }
              >
                {label}
                <WhatsAppIcon className="h-[1.05rem] w-[1.05rem] shrink-0" />
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean ${
                  darkNavText
                    ? "text-dark/80 hover:text-dark"
                    : barPinned
                      ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.45),0_2px_10px_rgba(0,0,0,0.3)] hover:text-white/90"
                      : "text-white drop-shadow-sm hover:text-white/90"
                }`}
              >
                {label}
              </Link>
            )
          )}
          <div
            className={`flex items-center gap-1 border-l pl-8 text-sm font-medium transition-colors ${
              darkNavText ? "border-dark/10" : barPinned ? "border-white/40" : "border-white/35"
            }`}
          >
            <Link
              href="/en"
              className={
                locale === "en"
                  ? "text-coral drop-shadow-sm"
                  : darkNavText
                    ? "text-dark/50 hover:text-dark"
                    : barPinned
                      ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.45)] hover:text-white/90"
                      : "text-white drop-shadow-sm hover:text-white/90"
              }
              hrefLang="en"
            >
              EN
            </Link>
            <span
              className={darkNavText ? "text-dark/30" : barPinned ? "text-white/55" : "text-white/50"}
              aria-hidden
            >
              |
            </span>
            <Link
              href="/es"
              className={
                locale === "es"
                  ? "text-coral drop-shadow-sm"
                  : darkNavText
                    ? "text-dark/50 hover:text-dark"
                    : barPinned
                      ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.45)] hover:text-white/90"
                      : "text-white drop-shadow-sm hover:text-white/90"
              }
              hrefLang="es"
            >
              ES
            </Link>
          </div>
        </div>

        <button
          type="button"
          className={`flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur md:hidden ${
            open
              ? darkNavText
                ? "border-dark/10 bg-light/90 text-dark"
                : "border-white/20 bg-dark/90 text-white"
              : barPinned && darkNavText
                ? "border-dark/10 bg-light/90 text-dark"
                : barPinned
                  ? "border-white/35 bg-black/35 text-white"
                  : "border-white/35 bg-black/25 text-white"
          }`}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span
              className={`block h-0.5 w-5 transition ${open ? (darkNavText ? "bg-dark" : "bg-white") : darkNavText ? "bg-dark" : "bg-white"} ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 transition ${open ? (darkNavText ? "bg-dark" : "bg-white") : darkNavText ? "bg-dark" : "bg-white"} ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 transition ${open ? (darkNavText ? "bg-dark" : "bg-white") : darkNavText ? "bg-dark" : "bg-white"} ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={`overflow-hidden border-b backdrop-blur-md md:hidden ${
              darkNavText
                ? "border-dark/5 bg-light/95"
                : "border-white/10 bg-dark/92"
            }`}
          >
            <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {links.map(({ href, label, cta }) =>
                cta ? (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral px-4 py-3 text-center font-medium text-light transition-colors duration-200 ease-out hover:bg-[#25D366] active:bg-[#25D366]"
                  >
                    {label}
                    <WhatsAppIcon className="h-5 w-5 shrink-0" />
                  </a>
                ) : (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={
                      darkNavText
                        ? "py-3 text-base font-medium text-dark/90 hover:text-dark"
                        : "py-3 text-base font-medium text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] hover:text-white/85"
                    }
                  >
                    {label}
                  </Link>
                )
              )}
              <div
                className={`mt-4 flex items-center justify-center gap-1 border-t pt-4 text-sm font-semibold ${
                  darkNavText ? "border-dark/10" : "border-white/15"
                }`}
              >
                <Link
                  href="/en"
                  hrefLang="en"
                  onClick={() => setOpen(false)}
                  className={
                    locale === "en"
                      ? "text-coral"
                      : darkNavText
                        ? "text-dark/50 hover:text-dark"
                        : "text-white/85 hover:text-white"
                  }
                >
                  EN
                </Link>
                <span
                  className={darkNavText ? "px-2 text-dark/30" : "px-2 text-white/40"}
                  aria-hidden
                >
                  |
                </span>
                <Link
                  href="/es"
                  hrefLang="es"
                  onClick={() => setOpen(false)}
                  className={
                    locale === "es"
                      ? "text-coral"
                      : darkNavText
                        ? "text-dark/50 hover:text-dark"
                        : "text-white/85 hover:text-white"
                  }
                >
                  ES
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
