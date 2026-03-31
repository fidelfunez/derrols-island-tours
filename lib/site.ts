/**
 * Site-wide constants — single place to update contact & URLs.
 * When you change the production domain, also update `public/sitemap.xml` and `public/robots.txt`
 * (Next metadata routes are avoided here because apostrophes in the project folder path break the build).
 */

/** Footer “Tera” link — used if NEXT_PUBLIC_TERA_URL is not set. */
const TERA_PORTFOLIO_URL_FALLBACK = "https://teralatam.co";

export const SITE = {
  whatsappE164: "50489725123",
  phoneDisplay: "+504 8972-5123",
  /** Footer social — replace with Derrol’s real profile URLs. */
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    tiktok: "https://www.tiktok.com/",
  },
  /** Set NEXT_PUBLIC_SITE_URL in production for canonical URLs, OG tags, and JSON-LD. */
  get baseUrl() {
    if (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) {
      return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
    }
    return "https://derrolsislandtours.com";
  },
  /**
   * Footer “Tera” credit link. Set NEXT_PUBLIC_TERA_URL or `TERA_PORTFOLIO_URL_FALLBACK` above.
   */
  get teraPortfolioUrl() {
    const fromEnv =
      typeof process !== "undefined" ? process.env.NEXT_PUBLIC_TERA_URL?.trim() : "";
    if (fromEnv) return fromEnv.replace(/\/$/, "");
    return TERA_PORTFOLIO_URL_FALLBACK.replace(/\/$/, "");
  },
} as const;

export function whatsappHref(text?: string) {
  const base = `https://wa.me/${SITE.whatsappE164}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
