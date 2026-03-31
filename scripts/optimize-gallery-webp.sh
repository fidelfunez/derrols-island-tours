#!/usr/bin/env bash
# Batch-convert gallery images in public/Photos/gallery/ to WebP (quality 82).
# Run after adding new JPEG/PNG sources; update lib/gallery.ts paths to .webp.
#
# Usage (from project root): npm run optimize:gallery
#
# Requires: cwebp (brew install webp)

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIR="$ROOT/public/Photos/gallery"
Q="${GALLERY_WEBP_QUALITY:-82}"

if ! command -v cwebp >/dev/null 2>&1; then
  echo "cwebp not found. Install: brew install webp"
  exit 1
fi

if [[ ! -d "$DIR" ]]; then
  echo "Missing folder: $DIR"
  exit 1
fi

shopt -s nullglob
count=0
for src in "$DIR"/*.{jpg,jpeg,JPG,JPEG,png,PNG}; do
  [[ -f "$src" ]] || continue
  base="${src%.*}"
  out="${base}.webp"
  echo "→ $(basename "$src") → $(basename "$out")"
  cwebp -q "$Q" "$src" -o "$out"
  ((count++)) || true
done

if (( count == 0 )); then
  echo "No jpg/jpeg/png files in $DIR (already WebP-only is fine)."
else
  echo "Converted $count file(s). Remove originals when you are happy with output."
fi
