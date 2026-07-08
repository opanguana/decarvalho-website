from __future__ import annotations

from pathlib import Path

from PIL import Image


def main() -> None:
    p = Path(__file__).resolve().parents[1] / "partners" / "world-vision.png"
    im = Image.open(p).convert("RGBA")
    thr = 22  # remove only near-black pixels

    data = list(im.getdata())
    out = []
    for r, g, b, a in data:
        if a and r < thr and g < thr and b < thr:
            out.append((r, g, b, 0))
        else:
            out.append((r, g, b, a))

    im.putdata(out)
    im.save(p)


if __name__ == "__main__":
    main()

