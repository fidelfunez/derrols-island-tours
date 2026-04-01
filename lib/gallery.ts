/**
 * Gallery — WebP under `public/Photos/gallery/` (compressed for web; JPEG sources removed).
 *
 * Layout: uniform horizontal frames (`aspect-[4/3]`) + `object-cover` so mixed
 * portrait/landscape shots align in a clean grid (verticals are center-cropped).
 * Order = display order (row by row, left to right).
 *
 * Homepage: mobile shows `GALLERY_INITIAL_COUNT` first; “Load more” adds `GALLERY_LOAD_MORE_STEP`
 * (horizontal strip). Desktop shows the same initial count as a grid preview; full set opens in a lightbox.
 *
 * First entries are the original hero order; the rest follow alphabetically by filename.
 */
export const GALLERY_INITIAL_COUNT = 6;
export const GALLERY_LOAD_MORE_STEP = 6;

const curatedFirst = [
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
] as const;

const remainderAlphabetical = [
  "/Photos/gallery/antique-cannon-conch-shells-rusty-chain-wooden-deck.webp",
  "/Photos/gallery/captain-skeleton-pirate-photo-op-nautical-dock-roatan.webp",
  "/Photos/gallery/couples-bar-stools-international-flags-tropical-deck.webp",
  "/Photos/gallery/family-group-tour-boat-palapa-snorkel-excursion.webp",
  "/Photos/gallery/family-kids-boat-tour-palapa-microphone-caribbean.webp",
  "/Photos/gallery/fresh-watermelon-snacks-boat-turquoise-reef-island-view.webp",
  "/Photos/gallery/fried-seafood-platter-shrimp-fish-fries-caribbean-lunch.webp",
  "/Photos/gallery/friends-selfie-tropical-bar-bay-view-roatan.webp",
  "/Photos/gallery/grilled-lobster-shrimp-seafood-plates-group-island-lunch.webp",
  "/Photos/gallery/group-feeding-tarpon-shallow-water-wooden-dock.webp",
  "/Photos/gallery/group-tourists-observing-large-iguanas-sanctuary.webp",
  "/Photos/gallery/guest-and-staff-waterfront-deck-bay-view-roatan.webp",
  "/Photos/gallery/hole-in-the-wall-bar-conch-shells-pirate-flags-waterfront.webp",
  "/Photos/gallery/hole-in-the-wall-colorful-waterfront-restaurant-dock.webp",
  "/Photos/gallery/hole-in-the-wall-deck-docked-boat-turquoise-water.webp",
  "/Photos/gallery/hole-in-the-wall-pirate-party-flag-skull-crossbones.webp",
  "/Photos/gallery/large-group-snorkel-tour-palapa-boat-caribbean-ocean.webp",
  "/Photos/gallery/morning-coffee-dock-motorboats-mangrove-channel-roatan.webp",
  "/Photos/gallery/pirate-costume-group-drinks-wooden-deck-caribbean-flags.webp",
  "/Photos/gallery/pirate-costume-group-friends-wooden-deck-flags.webp",
  "/Photos/gallery/red-tour-boat-pirate-flags-yamaha-dock-overcast.webp",
  "/Photos/gallery/red-white-charter-boat-pirate-flags-wooden-pier-roatan.webp",
  "/Photos/gallery/roatan-overwater-bar-restaurant-stilts-tropical-water.webp",
  "/Photos/gallery/roatan-tiki-boat-group-shotski-caribbean-bar-tour.webp",
  "/Photos/gallery/seafood-boil-shrimp-crab-corn-spiced-platter.webp",
  "/Photos/gallery/skeleton-tropical-drink-hole-in-the-wall-roatan.webp",
  "/Photos/gallery/spicy-margarita-chili-salt-rim-lime-tropical-bar.webp",
  "/Photos/gallery/st-patricks-hole-in-the-wall-party-shirt-roatan.webp",
  "/Photos/gallery/tarpon-jumping-feeding-dock-tourists-guide-bucket.webp",
  "/Photos/gallery/tiki-boat-roatan-map-bar-shotski-tourists.webp",
  "/Photos/gallery/tour-boat-approaching-tropical-beach-passengers-canopy.webp",
  "/Photos/gallery/tour-guests-socializing-dock-dive-boat-tropical-drinks.webp",
  "/Photos/gallery/tour-guests-wooden-dock-snorkel-boat-honduras-flag-roatan.webp",
  "/Photos/gallery/tourist-captain-hat-roatan-honduras-souvenir-outfit.webp",
  "/Photos/gallery/tourists-couple-green-iguanas-feeding-sanctuary-roatan.webp",
  "/Photos/gallery/tourists-feeding-iguanas-group-leaves.webp",
  "/Photos/gallery/two-men-pirate-outfits-roatan-bar-chalkboard-menu.webp",
  "/Photos/gallery/waterfront-seafood-lunch-group-mangrove-view-restaurant.webp",
  "/Photos/gallery/welcome-aboard-chalkboard-sunny-sandy-people-sign.webp",
  "/Photos/gallery/white-tour-boat-suzuki-outboard-turquoise-harbor-roatan.webp",
  "/Photos/gallery/woman-iguana-on-back-wildlife-encounter-island-tour.webp",
  "/Photos/gallery/woman-relaxing-dock-sailboats-tropical-bay-roatan.webp",
  "/Photos/gallery/woman-sea-turtle-encounter-clear-turquoise-water.webp",
  "/Photos/gallery/woman-wading-large-fish-clear-shallow-water-dock.webp",
] as const;

export const galleryImages: readonly string[] = [
  ...curatedFirst,
  ...remainderAlphabetical,
];
