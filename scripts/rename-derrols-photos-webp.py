#!/usr/bin/env python3
"""
One-time mapping: WhatsApp JPEG order (sorted by filename) -> SEO WebP names.

Already applied: WebPs from this batch live in public/Photos/gallery/ (merged
from the old public/Photos/Derrols Island Tours staging folder).

For a new import: use a staging folder, set BASE below to that folder, update
NAMES, then move the WebPs into gallery when done.

Run from project root: python3 scripts/rename-derrols-photos-webp.py
Requires: cwebp (brew install webp)
"""
import os
import subprocess
import sys

# Future imports: create this folder, drop JPEGs, update NAMES, run, then move WebPs to gallery.
BASE = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "public",
    "Photos",
    "import-staging",
)

# Sorted list order must match sorted(os.listdir) of JPEGs — 44 files.
NAMES = [
    "roatan-overwater-bar-restaurant-stilts-tropical-water",
    "tourists-couple-green-iguanas-feeding-sanctuary-roatan",
    "woman-iguana-on-back-wildlife-encounter-island-tour",
    "tourists-feeding-iguanas-group-leaves",
    "group-tourists-observing-large-iguanas-sanctuary",
    "tour-guests-wooden-dock-snorkel-boat-honduras-flag-roatan",
    "fried-seafood-platter-shrimp-fish-fries-caribbean-lunch",
    "captain-skeleton-pirate-photo-op-nautical-dock-roatan",
    "tourist-captain-hat-roatan-honduras-souvenir-outfit",
    "guest-and-staff-waterfront-deck-bay-view-roatan",
    "morning-coffee-dock-motorboats-mangrove-channel-roatan",
    "antique-cannon-conch-shells-rusty-chain-wooden-deck",
    "skeleton-tropical-drink-hole-in-the-wall-roatan",
    "hole-in-the-wall-colorful-waterfront-restaurant-dock",
    "welcome-aboard-chalkboard-sunny-sandy-people-sign",
    "st-patricks-hole-in-the-wall-party-shirt-roatan",
    "hole-in-the-wall-bar-conch-shells-pirate-flags-waterfront",
    "woman-relaxing-dock-sailboats-tropical-bay-roatan",
    "hole-in-the-wall-deck-docked-boat-turquoise-water",
    "grilled-lobster-shrimp-seafood-plates-group-island-lunch",
    "pirate-costume-group-friends-wooden-deck-flags",
    "tour-guests-socializing-dock-dive-boat-tropical-drinks",
    "friends-selfie-tropical-bar-bay-view-roatan",
    "hole-in-the-wall-pirate-party-flag-skull-crossbones",
    "pirate-costume-group-drinks-wooden-deck-caribbean-flags",
    "two-men-pirate-outfits-roatan-bar-chalkboard-menu",
    "seafood-boil-shrimp-crab-corn-spiced-platter",
    "spicy-margarita-chili-salt-rim-lime-tropical-bar",
    "waterfront-seafood-lunch-group-mangrove-view-restaurant",
    "large-group-snorkel-tour-palapa-boat-caribbean-ocean",
    "roatan-tiki-boat-group-shotski-caribbean-bar-tour",
    "tiki-boat-roatan-map-bar-shotski-tourists",
    "couples-bar-stools-international-flags-tropical-deck",
    "family-group-tour-boat-palapa-snorkel-excursion",
    "woman-wading-large-fish-clear-shallow-water-dock",
    "tarpon-jumping-feeding-dock-tourists-guide-bucket",
    "woman-sea-turtle-encounter-clear-turquoise-water",
    "group-feeding-tarpon-shallow-water-wooden-dock",
    "family-kids-boat-tour-palapa-microphone-caribbean",
    "white-tour-boat-suzuki-outboard-turquoise-harbor-roatan",
    "red-tour-boat-pirate-flags-yamaha-dock-overcast",
    "fresh-watermelon-snacks-boat-turquoise-reef-island-view",
    "red-white-charter-boat-pirate-flags-wooden-pier-roatan",
    "tour-boat-approaching-tropical-beach-passengers-canopy",
]


def main() -> int:
    if not os.path.isdir(BASE):
        print(f"Missing folder: {BASE}", file=sys.stderr)
        return 1
    files = sorted(
        f
        for f in os.listdir(BASE)
        if f.lower().endswith((".jpeg", ".jpg", ".png", ".JPG", ".JPEG"))
    )
    if len(files) != len(NAMES):
        print(
            f"Expected {len(NAMES)} images, found {len(files)}. Update NAMES list.",
            file=sys.stderr,
        )
        for f in files:
            print(f"  {f!r}", file=sys.stderr)
        return 1
    for src_name, stem in zip(files, NAMES):
        src = os.path.join(BASE, src_name)
        dst = os.path.join(BASE, f"{stem}.webp")
        subprocess.run(
            ["cwebp", "-q", "82", src, "-o", dst],
            check=True,
        )
        os.remove(src)
        print(f"{src_name} -> {stem}.webp")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
