#!/usr/bin/env python3
"""
One-time / repeatable: convert files in public/Photos/new pics/ to SEO-named WebP
in public/Photos/gallery/ (cwebp -q 82). Edit SOURCE_TO_STEM when adding a batch.

Run from project root: python3 scripts/import-new-pics-webp.py
Requires: cwebp (brew install webp)
"""
from __future__ import annotations

import os
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
NEW_PICS = ROOT / "public" / "Photos" / "new pics"
GALLERY = ROOT / "public" / "Photos" / "gallery"
QUALITY = os.environ.get("GALLERY_WEBP_QUALITY", "82")

# Source filename (exact) -> SEO slug (no extension)
SOURCE_TO_STEM: dict[str, str] = {
    "hole-in-the-wall-tour-cover.jpg": "hole-in-the-wall-tour-waterfront-restaurant-sign-roatan",
    "tiki boat adv.jpeg": "roatan-tiki-boat-tour-guests-rustic-bar-colorful-chairs",
    "WhatsApp Image 2026-04-01 aft 5.07.29 PM.jpeg": "hole-in-the-wall-bar-guest-capt-ed-sign-jonesville-roatan",
    "WhatsApp Image 2026-04-01 at 4.56.12 PM.jpeg": "roatan-tiki-boat-aerial-turquoise-reef-palapa",
    "WhatsApp Image 2026-04-01 at 4.56.12 PMff.jpeg": "roatan-floating-tiki-bar-snorkeling-tour-aerial",
    "WhatsApp Image 2026-04-01 at 4.56.12 PMs.jpeg": "roatan-tiki-boat-adventures-guests-bar-signs",
    "WhatsApp Image 2026-04-01 at 5.07.30 PM.jpeg": "hole-in-the-wall-restaurant-dock-honduras-flag-jonesville-roatan",
    "WhatsApp Image 2026-04-01 at 6.02.32 PMd.jpeg": "west-bay-roatan-turquoise-water-swimmers-beach",
    "WhatsApp Image 2026-04-01 at 6.02.32 PMo.jpeg": "roatan-tour-group-red-boat-white-sand-beach",
    "WhatsApp Image 2026-04-01 at 6.02.32 PMu.jpeg": "west-bay-roatan-caribbean-turquoise-water-sky",
    "WhatsApp Image 2026-04-g01 at 5.07.30 PM.jpeg": "hole-in-the-wall-group-bar-graffiti-jonesville-roatan",
    "WhatsApp Image 2026-04r-01 at 5.07.30 PM.jpeg": "hole-in-the-wall-michelada-cocktail-rustic-wood-table-roatan",
    "WhatsApp Image 2026-w04-01 at 5.07.30 PM.jpeg": "hole-in-the-wall-spicy-margarita-glass-chili-rim-roatan",
    "WhatsApp Imagte 2026-04-01 at 5.36.18 PM.jpeg": "roatan-wildlife-tour-capuchin-monkey-guest",
    "WhatsApyp Image 2026-04-01 at 6.02.32 PM.jpeg": "west-bay-beach-palms-turquoise-water-roatan",
    "WhatsAqpp Image 2026-04-01 at 5.36.18 PM.jpeg": "roatan-sloth-encounter-guest-wildlife-tour",
}


def main() -> int:
    if not shutil.which("cwebp"):
        print("cwebp not found. Install: brew install webp", file=sys.stderr)
        return 1
    if not NEW_PICS.is_dir():
        print(f"Missing folder: {NEW_PICS}", file=sys.stderr)
        return 1
    GALLERY.mkdir(parents=True, exist_ok=True)

    missing = [k for k in SOURCE_TO_STEM if not (NEW_PICS / k).is_file()]
    if missing:
        print("Missing expected source file(s):", file=sys.stderr)
        for m in missing:
            print(f"  {m!r}", file=sys.stderr)
        return 1

    for src_name, stem in SOURCE_TO_STEM.items():
        src = NEW_PICS / src_name
        out = GALLERY / f"{stem}.webp"
        print(f"→ {src_name} → {out.name}")
        subprocess.run(
            ["cwebp", "-q", QUALITY, str(src), "-o", str(out)],
            check=True,
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
