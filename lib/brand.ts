/**
 * Brand assets (WebP, compressed). Card variants = baked-in square backgrounds for social/print.
 */
export const BRAND = {
  logo: {
    /**
     * Light-colored mark (white) for dark backgrounds: hero, #why, footer wood.
     * Filename says “dark-on-light-bg”; the artwork is the light mark.
     */
    onLightBackground: "/Photos/Logos/roatan-derrol-island-tours-logo-dark-on-light-bg.webp",
    /**
     * Dark-colored mark for light backgrounds: nav on sand, pinned bar.
     * Filename says “light-on-dark-bg”; the artwork is the dark mark.
     */
    onDarkBackground: "/Photos/Logos/roatan-derrol-island-tours-logo-light-on-dark-bg.webp",
    cardDarkBackground: "/Photos/Logos/roatan-derrol-island-tours-logo-card-dark-background.webp",
    cardLightBackground: "/Photos/Logos/roatan-derrol-island-tours-logo-card-light-background.webp",
  },
} as const;
