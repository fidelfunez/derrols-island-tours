#!/usr/bin/env bash
# Compress Canva MP4 → WebM (VP9) + H.264 MP4 + poster JPG for the hero.
#
# Usage:
#   1. Save your export as: Videos/source/hero-source.mp4
#   2. From project root: npm run encode:hero
#
# Outputs go to public/Videos/ (organized + safe to deploy).
# Source stays OUTSIDE public/ so 100MB+ files are not copied into `out/`.
#
# Requires: ffmpeg (brew install ffmpeg)

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${1:-$ROOT/Videos/source/hero-source.mp4}"
OUT_DIR="$ROOT/public/Videos"

if [[ ! -f "$SRC" ]]; then
  echo "Missing source video: $SRC"
  echo "Save your Canva export as Videos/source/hero-source.mp4 or pass a path:"
  echo "  npm run encode:hero -- /path/to/your-video.mp4"
  exit 1
fi

mkdir -p "$OUT_DIR"

echo "Encoding hero assets from: $SRC"

# Web delivery: 60→30fps, cap width 1920 (1080p tier — sharper hero than 720p, still far smaller than 1440p60 source)
VF="scale='min(1920,iw)':-2,fps=30"

# WebM VP9 — primary. CRF: lower = better/larger (try 30–36). Short clips can use ~33–34 for a good balance.
ffmpeg -y -i "$SRC" -an -vf "$VF" \
  -c:v libvpx-vp9 -crf 33 -b:v 0 -row-mt 1 -threads 0 -deadline good -cpu-used 2 \
  "$OUT_DIR/hero.webm"

# H.264 MP4 fallback (Safari). CRF ~20–24 is typical for “good” web quality.
ffmpeg -y -i "$SRC" -an -vf "$VF" \
  -c:v libx264 -preset slow -crf 22 -pix_fmt yuv420p -movflags +faststart \
  "$OUT_DIR/hero.mp4"

# Poster matches video width cap
ffmpeg -y -i "$SRC" -vf "scale='min(1920,iw)':-2" -frames:v 1 -q:v 2 -update 1 \
  "$OUT_DIR/hero-poster.jpg"

echo "Done → public/Videos/hero.webm, hero.mp4, hero-poster.jpg"
