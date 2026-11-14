# UI DESIGN SYSTEM CONTRACT: PESANMOBIL.COM
> **INSTRUCTION FOR AI AGENT:** Strictly adhere to the visual direction, typography, spacing, component anatomy, and CSS custom properties defined below when creating or modifying UI files.

# Design System pesanmobil.com

> Category: Transportation & Vehicle Rental Catalog
> Clear editorial catalog, Helvetica typography, neutral canvas with logo-derived blue and orange accents.

## 1. Visual Theme & Atmosphere

Antarmuka `pesanmobil.com` dirancang sebagai etalase katalog sewa mobil dan motor yang cepat dipindai di ponsel maupun desktop. Latar belakang netral terang menjaga foto kendaraan dan informasi tarif tetap menjadi fokus utama, sementara warna merek dipakai secara terukur untuk navigasi, status fokus, dan satu tombol konversi WhatsApp.

**Key Characteristics:**
- Neutral light canvases (`#ffffff`, `#f8fafc`, `#fafafa`) for clean readability
- Brand blue family (`#0095d9`, `#0077ae`, `#38bdf8`) for brand identity, links, active chips, and keyboard focus
- High-contrast action orange (`#f97316` with `#1d1d1f` label, 6.00:1 WCAG AA) exclusively for WhatsApp conversion CTAs
- Clean `Helvetica` typography stack across display headings and UI controls
- Purposeful border radius tiers: `8px` inputs/controls, `12px` buttons/chips, `16px` cards, `9999px` pill CTAs
- React Bits interactive components (`@react-bits`) adapted to project tokens and `prefers-reduced-motion`

## 2. Color Palette & Roles

### Canvas & Neutrals
- **Pure White** (`#ffffff`): Primary surface, cards, and sticky bars.
- **Cool Canvas** (`#f8fafc`): Main page canvas for catalog, unit detail, and guide pages.
- **Neutral Surface** (`#fafafa`): Secondary calm sections and footer bands.
- **Charcoal Ink** (`#1d1d1f`): Primary headings, body text, secondary button fills, and label color on `#f97316`.
- **Secondary Charcoal** (`#424245`): Lead subtitles and supporting copy.
- **Muted Gray** (`#6e6e73`): Secondary metadata, price units, helper descriptions.
- **Control Border** (`#86868b`): Input outlines, active card borders, table dividers (3.46:1 non-text contrast).
- **Hairline Border** (`#d2d2d7`): Subtle decorative row dividers only.

### Brand & Action Accents
- **Cerulean Blue** (`#0095d9`): Primary brand color, focus ring, active section indicators.
- **Link Blue** (`#0077ae`): Darkened brand shade for accessible inline links and small blue labels (4.72:1 on `#f8fafc`).
- **Sky Blue** (`#38bdf8`): Secondary brand highlight for selected filter chips (pair only with `#1d1d1f` text, never white).
- **Vibrant Orange** (`#f97316`): Exclusive primary WhatsApp conversion CTA fill (`hover: #fb923c`, `active: #ea580c`), paired with `#1d1d1f` text.

## 3. Typography Rules

### Font Family
- **Primary Stack:** `Helvetica, "Helvetica Neue", Arial, sans-serif`
- **Monospace Stack:** `ui-monospace, Menlo, Monaco, Consolas, monospace`

### Hierarchy
| Role | Size | Weight | Line Height | Tracking | Notes |
|------|------|--------|-------------|----------|-------|
| Hero Display | 40px–80px | 600 | 1.05 | -0.015em | Homepage hero title |
| Section Display | 32px–48px | 600 | 1.08 | -0.01em | Major page headings |
| Card Title | 20px–28px | 600 | 1.15 | -0.005em | Unit titles |
| Body Primary | 17px | 400 | 1.47 | 0 | Readable baseline |
| Control Label | 14px–17px | 500–600 | 1.25 | 0 | Buttons, chips, nav links |
| Caption / Meta | 13px–15px | 400 | 1.35 | 0 | Specs, dates, helper text |

## 4. Component & Accessibility Rules
- Contrast minimum: `4.5:1` for normal text, `3:1` for large text and UI boundaries (WCAG AA).
- Never place white text over `#f97316` (2.80:1) or `#38bdf8` (2.14:1); pair both with `#1d1d1f`.
- Interactive components from React Bits (`@react-bits`) and `src/components/ui/` must inherit `--bg`, `--surface`, `--fg`, `--brand`, `--cta`, and respect `prefers-reduced-motion`.
- Respect the 30 anti-slop rules in `.agents/rules/anti-slop.md`.
