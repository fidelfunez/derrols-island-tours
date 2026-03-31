export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];

export const defaultLocale: Locale = "en";

export function isLocale(s: string): s is Locale {
  return locales.includes(s as Locale);
}
