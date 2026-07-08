from __future__ import annotations

from pathlib import Path

from PIL import Image


def strip_bottom(p: Path, keep_ratio: float) -> None:
    im = Image.open(p).convert("RGBA")
    w, h = im.size
    new_h = max(1, int(h * keep_ratio))
    im = im.crop((0, 0, w, new_h))
    im.save(p)


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    logos = root / "logos"

    # These 2 logos have the "uma iniciativa..." tagline baked into the image.
    # Cropping the bottom removes the tagline while keeping the mark readable.
    strip_bottom(logos / "logo-cuidar-mais.png", keep_ratio=0.78)
    strip_bottom(logos / "logo-amparo.png", keep_ratio=0.78)


if __name__ == "__main__":
    main()

