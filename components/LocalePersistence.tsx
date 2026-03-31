"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

const STORAGE_KEY = "dit-lang";

export function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(STORAGE_KEY);
  if (v === "en" || v === "es") return v;
  return null;
}

/** Persists language choice for root redirect and returning visitors. */
export function LocalePersistence({ locale }: { locale: Locale }) {
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);
  return null;
}
