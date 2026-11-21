# TechDometz brand colours

The three core colours are the brand. Everything else is a shade or tint of them, used only where a core colour would be hard to read.

## Core colours

| Name | HEX | RGB | CMYK (approx.) | Use it for |
|------|-----|-----|------|-----------|
| **Orange**     | `#F58220` | 245, 130, 32 | 0, 47, 87, 4  | The "T" in the logo, "Dometz" in the name, buttons, highlights |
| **Light Blue** | `#75C8ED` | 117, 200, 237 | 51, 16, 0, 7 | The "D" in the logo, accents, icons, text on dark backgrounds |
| **Deep Navy**  | `#123B56` | 18, 59, 86 | 79, 31, 0, 66 | "Tech" in the name, headings, dark backgrounds, header |

## Supporting shades (derived from the core colours)

| Name | HEX | RGB | Use it for |
|------|-----|-----|-----------|
| Navy Deep         | `#0A2638` | 10, 38, 56   | Page background on dark designs, footer, text on orange buttons |
| Navy Light        | `#1C5175` | 28, 81, 117  | Borders and hover states on navy |
| Orange Light      | `#FF9640` | 255, 150, 64 | Button hover |
| Orange Text       | `#B35A0B` | 179, 90, 11  | Small orange text on white (the core orange is too light to read there) |
| Light Blue Mid    | `#BEE5F7` | 190, 229, 247 | Borders on white |
| Light Blue Soft   | `#E8F6FC` | 232, 246, 252 | Tinted backgrounds on white |
| White             | `#FFFFFF` | 255, 255, 255 | Backgrounds, text on navy |

## Readability rules

Contrast ratios measured against WCAG (4.5 : 1 is the minimum for normal text).

| Combination | Ratio | OK for text? |
|-------------|:-----:|:------------:|
| Deep Navy on White            | 11.8 | Yes |
| White on Deep Navy            | 11.8 | Yes |
| Light Blue on Navy Deep       | 8.3  | Yes |
| Light Blue on Deep Navy       | 6.3  | Yes |
| Navy Deep on Orange (buttons) | 6.0  | Yes |
| Orange on Navy Deep           | 6.0  | Yes |
| Orange Text on White          | 4.8  | Yes |
| White on Orange               | 2.6  | **No.** Use Navy Deep text on orange buttons |
| Light Blue on White           | 1.9  | **No.** Light blue is decoration only on white |

## Typeface

**Space Grotesk**: Bold for the name and headings, Medium for the tagline and labels. Free under the SIL Open Font License (Google Fonts).

## Where these live in code

- Company site, `techdometz.github.io/index.html`: CSS variables at the top of the `<style>` block (`--orange`, `--blue`, `--navy`, `--ink` …).
- Portfolio, `mwinamijr.github.io/src/index.css`: Tailwind theme colours `orange`, `lightblue`, `navy` (use as `bg-orange`, `text-navy`, `border-lightblue` …).
- Logo generator, `brand/tools/gen.py` and `brand/tools/logo.js`: `BLUE`, `ORANGE`, `NAVY` constants.
