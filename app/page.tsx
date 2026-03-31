"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale } from "@/lib/i18n";
import { readStoredLocale } from "@/components/LocalePersistence";

/**
 * Root path: sends visitors to /en or /es (localStorage preference or default).
 * Crawlers that hit / still get links to both locales in the HTML.
 */
export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    const pref = readStoredLocale() ?? defaultLocale;
    router.replace(`/${pref}`);
  }, [router]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-sand px-6 text-center text-dark">
      <p className="text-sm text-dark/60">Redirecting…</p>
      <div className="flex gap-8 text-base font-semibold">
        <a href="/en" className="text-coral underline underline-offset-4" hrefLang="en">
          English
        </a>
        <a href="/es" className="text-coral underline underline-offset-4" hrefLang="es">
          Español
        </a>
      </div>
    </div>
  );
}
