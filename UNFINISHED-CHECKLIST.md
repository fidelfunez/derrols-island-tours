# Unfinished / before-launch checklist

Use this when you’re ready to polish or go live. Items are grouped by area.

---

## Domain & environment

- [ ] **Set `NEXT_PUBLIC_SITE_URL`** in your host (Vercel/Netlify env vars) and locally copy `.env.example` → `.env.local`.  
  - No trailing slash.  
  - Drives canonical URLs, Open Graph URLs, Twitter card URLs, and JSON-LD `url` in `lib/site.ts` (via build-time `process.env`).

- [x] **Align static SEO files with the real domain** (default production URL: `https://derrolsislandtours.com`):  
  - [x] `public/sitemap.xml` — every `<loc>` and `href` in `xhtml:link`  
  - [x] `public/robots.txt` — the `Sitemap:` line  

  (Dynamic `app/sitemap.ts` / `app/robots.ts` weren’t used because an apostrophe in the project folder path breaks Next’s metadata route build.)

---

## Images & media (replace `placehold.co`)

- [x] **Hero video** — Background uses `public/Videos/hero.webm` + `hero.mp4` + `hero-poster.jpg` (see `components/Hero.tsx`).  
  - **Re-encode after changing the source:** put `hero-source.mp4` in **`Videos/source/`** (not under `public/` — avoids copying 100MB+ into `out/` on deploy), then run `npm run encode:hero`.  
  - **Tune size vs quality:** edit `scripts/encode-hero-video.sh` (e.g. `scale` max width, `-crf` for VP9/H.264). Shorter loops or a 15–20s trim would shrink files further.

- [ ] **About / Derrol portrait** — `components/AboutSection.tsx`: replace `PORTRAIT` with a real photo.

- [ ] **Tour cards (×6)** — `components/ToursSection.tsx`: replace remote `placehold.co` URLs with real photos (local or CDN).

- [ ] **Open Graph / social preview** — `app/[locale]/layout.tsx`: today OG uses a remote placeholder image.  
  - [ ] Add a branded file e.g. `public/og.jpg` (about **1200×630**).  
  - [ ] Point `openGraph.images` / `twitter.images` at `${base}/og.jpg` (or your CDN URL).

---

## Content & business

- [ ] **Pricing** — `lib/content.ts`: `contactPricing` / `Consultar precio` are placeholders (`TODO` in file). Replace with real policy (fixed text, “from $X”, or keep “contact for quote”).

- [ ] **WhatsApp & phone** — confirm `lib/site.ts` (`whatsappE164`, `phoneDisplay`) matches how Derrol wants to be reached everywhere.

- [ ] **Google Maps** — `components/BookingSection.tsx`: iframe uses a generic Google Maps embed for Roatán. Optional: replace with an embed centered on a specific meeting point or business listing.

---

## Optional / nice-to-have

- [ ] **Analytics** — add Plausible, GA4, or similar if you want traffic data (not in the project yet).

- [ ] **Structured data** — `components/JsonLd.tsx`: review `LocalBusiness` fields (opening hours, `image`, `priceRange`, etc.) and extend if useful.

- [ ] **Security / deps** — run `npm audit` occasionally; upgrade Next/eslint stack when convenient.

- [ ] **Automate sitemap domain** — optional script in `package.json` to rewrite `public/sitemap.xml` / `robots.txt` from `NEXT_PUBLIC_SITE_URL` so you don’t maintain the domain in three places.

---

## Quick file map (where things live)

| What | Where |
|------|--------|
| Copy (EN/ES), pricing strings | `lib/content.ts` |
| Phone, WhatsApp, base URL | `lib/site.ts` |
| SEO title/description/OG per language | `app/[locale]/layout.tsx` |
| Sitemap / robots (static) | `public/sitemap.xml`, `public/robots.txt` |
| Env template | `.env.example` |

---

*Last aligned with the codebase TODOs: March 2026.*
