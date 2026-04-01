/**
 * Gallery — WebP under `public/Photos/gallery/` (compressed for web; JPEG sources removed).
 *
 * Layout: uniform horizontal frames (`aspect-[4/3]`) + `object-cover` so mixed
 * portrait/landscape shots align in a clean grid (verticals are center-cropped).
 * Order = display order (row by row, left to right).
 *
 * Homepage: mobile shows `GALLERY_INITIAL_COUNT` first; “Load more” adds `GALLERY_LOAD_MORE_STEP`
 * (horizontal strip). Desktop shows the same initial count as a grid preview; full set opens in a lightbox.
 */
export const GALLERY_INITIAL_COUNT = 6;
export const GALLERY_LOAD_MORE_STEP = 6;

export const galleryImages: readonly string[] = [
  "/Photos/gallery/roatan-group-snorkeling-boat-tropical-water.webp",
  "/Photos/gallery/roatan-snorkeling-excursion-tour-guests.webp",
  "/Photos/gallery/roatan-private-tour-boat-turquoise-lagoon.webp",
  "/Photos/gallery/roatan-scenic-rock-islet-turquoise-water.webp",
  "/Photos/gallery/roatan-sunset-boat-caribbean-bay.webp",
  "/Photos/gallery/roatan-couple-waterfront-seafood-lunch-tour.webp",
  "/Photos/gallery/roatan-tour-guests-caribbean-lunch-drinks.webp",
  "/Photos/gallery/roatan-group-local-caribbean-lunch-tour.webp",
  "/Photos/gallery/roatan-fried-fish-rice-beans-local-plate.webp",
  "/Photos/gallery/roatan-family-seaside-restaurant-tour-lunch.webp",
];
