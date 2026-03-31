"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

/** Syncs document.documentElement.lang with the active route locale. */
export function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
