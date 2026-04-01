#!/usr/bin/env python3
"""
One-time: Derrol's website downloads -> SEO WebP in public/Photos/gallery.
Sorted filename order must match NAMES (28 files). Requires: magick, cwebp.

Run from project root:
  python3 scripts/process-derrols-website-downloads.py
"""
import os
import subprocess
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(ROOT, "public", "Photos", "derrols-website-dowloads")
OUT_DIR = os.path.join(ROOT, "public", "Photos", "gallery")

NAMES = [
    "two-snorkelers-nurse-shark-turquoise-shallow-water-roatan",
    "overhead-snorkelers-nurse-sharks-group-tropical-water",
    "snorkeler-reaching-nurse-shark-clear-turquoise-water",
    "snorkelers-nurse-sharks-stingrays-overhead-turquoise-water",
    "woman-snorkeling-nurse-shark-black-bikini-tropical-water",
    "nurse-shark-head-surface-closeup-turquoise-water",
    "nurse-shark-side-profile-gills-sandy-bottom-underwater",
    "nurse-shark-full-body-swimming-sandy-bottom-tropical-water",
    "stingray-dorsal-spotted-pattern-shallow-turquoise-water",
    "man-smiling-nurse-shark-foreground-clear-water-roatan",
    "woman-floating-nurse-shark-turquoise-water-overhead",
    "snorkeler-nurse-shark-diagonal-top-view-caribbean-water",
    "nurse-sharks-sunlight-ripples-shallow-turquoise-water",
    "nurse-shark-snout-closeup-surface-turquoise-water",
    "michelada-chili-rim-mug-waterfront-bar-roatan",
    "michelada-orange-cocktail-chili-salt-rim-wooden-bar",
    "green-cocktail-frosted-mug-hand-outdoor-tropical-bar",
    "group-four-friends-rustic-graffiti-bar-roatan",
    "atv-tour-group-staging-dirt-lot-tropical-hills-roatan",
    "atv-tour-line-riders-helmets-dirt-path-rainforest",
    "atv-group-gathering-dirt-lot-palm-trees-roatan",
    "atv-tour-riders-foreground-bearded-man-jungle-roatan",
    "atv-lineup-jungle-dirt-path-riders-helmets-roatan",
    "atv-group-nine-riders-smiling-dirt-road-tropical-forest",
    "atv-tour-muddy-clearing-group-riders-palm-trees",
    "st-patricks-day-party-hole-in-the-wall-poster-roatan",
    "atv-adventure-briefing-pavilion-international-flags-roatan",
    "atv-tour-welcome-briefing-area-lockers-tv-mural-roatan",
]


def sorted_sources() -> list[str]:
    files = sorted(
        f
        for f in os.listdir(SRC_DIR)
        if f.lower().endswith((".jpg", ".jpeg")) and not f.startswith(".")
    )
    return files


def identify_wh(path: str) -> tuple[int, int]:
    out = subprocess.check_output(
        ["magick", "identify", "-format", "%w %h", path], text=True
    )
    w, h = out.strip().split()
    return int(w), int(h)


def preprocess_to_temp(src: str, index: int) -> str:
    fd, tmp_path = tempfile.mkstemp(suffix=".jpg")
    os.close(fd)
    cmd: list[str] = ["magick", src]
    if index == 25:
        w, h = identify_wh(src)
        y = int(h * 0.065)
        nh = int(h * 0.83)
        cmd.extend(["-crop", f"{w}x{nh}+0+{y}", "+repage"])
    cmd.append(tmp_path)
    subprocess.run(cmd, check=True)
    return tmp_path


def main() -> int:
    if not os.path.isdir(SRC_DIR):
        print(f"Missing folder: {SRC_DIR}", file=sys.stderr)
        return 1
    files = sorted_sources()
    if len(files) != len(NAMES):
        print(
            f"Expected {len(NAMES)} images, found {len(files)}. Update NAMES.",
            file=sys.stderr,
        )
        for f in files:
            print(f"  {f!r}", file=sys.stderr)
        return 1
    os.makedirs(OUT_DIR, exist_ok=True)
    for i, name in enumerate(files):
        src = os.path.join(SRC_DIR, name)
        stem = NAMES[i]
        dst = os.path.join(OUT_DIR, f"{stem}.webp")
        tmp = preprocess_to_temp(src, i)
        try:
            subprocess.run(
                ["cwebp", "-q", "82", tmp, "-o", dst],
                check=True,
            )
        finally:
            os.remove(tmp)
        os.remove(src)
        print(f"{name} -> {stem}.webp")
    for leftover in os.listdir(SRC_DIR):
        if leftover == ".DS_Store":
            try:
                os.remove(os.path.join(SRC_DIR, leftover))
            except OSError:
                pass
    try:
        os.rmdir(SRC_DIR)
    except OSError as e:
        print(f"Note: could not remove {SRC_DIR}: {e}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
