# Little Sprout Bakery — Website Design Spec

**Date:** 2026-06-20
**Status:** Approved design direction (Style A), pending spec review

## 1. Purpose

A marketing/showcase website for a home-based, mom-run bakery in West Los Angeles
specializing in **organic, low-sugar, all-natural birthday cakes and cupcakes for
children**. The brand is high-end but fresh and approachable ("小清新").

The site's job in v1 is simple: **show the work, show the menu and prices, and make
it easy to get in touch.** It is not an e-commerce / online-ordering platform.

## 2. Audience & Positioning

- Primary audience: parents in West LA planning kids' birthdays who care about
  organic / low-sugar / natural ingredients.
- Tone: warm, motherly, handcrafted, trustworthy — premium but not cold.
- Core selling points to surface everywhere: **Organic · Low-Sugar · All-Natural ·
  Made-Fresh / Small-Batch**.

## 3. Chosen Design Style — "Soft Organic" (Style A)

- **Palette:** cream/off-white background, apricot/oat warm tones, sage-green accents,
  warm brown ink text.
- **Typography:** elegant serif display (Fraunces) for headings + clean sans-serif
  (Nunito Sans) for body.
- **Feel:** rounded corners, generous whitespace, soft shadows, handcrafted warmth.
- Reference prototype: `prototypes/style-a.html` (this is the visual source of truth).

## 4. Scope (v1)

**In scope:**
- Single-page site with anchored sections (smooth-scroll nav).
- Sections, in order:
  1. **Header / Nav** — brand, links (Menu, Gallery, Our Story, Contact), "Order a Cake" CTA.
  2. **Hero** — headline, tagline, two CTAs, hero image, floating "100% Organic" badge.
  3. **Values strip** — 4 icons: Organic / Low-Sugar / No Artificial Anything / Small-Batch.
  4. **Menu** — 4 product cards (Birthday Cakes, Cupcakes, Smash Cakes, Cookies & Treats),
     each with description, a photo, and **a price list** (multiple size/price rows).
  5. **Gallery** — responsive image grid (8 tiles) for real product photos.
  6. **About / Our Story** — mama's story + portrait image.
  7. **Contact** — email, phone, location, social handles, and a **message form**.
  8. **Footer** — brand, tagline, copyright.
- Fully **responsive** (desktop / tablet / mobile).
- All content (text, prices, images) is easily editable in one place.

**Out of scope (v1) — possible later:**
- Online ordering / payments / cart.
- CMS / admin panel.
- Multi-language toggle (see Open Decisions).
- Blog / reviews / analytics.

## 5. Content & Data

- Content is **placeholder** for now (brand name *Little Sprout Bakery*, sample menu,
  sample prices, emoji+gradient image placeholders). Owner will supply real photos,
  final menu, prices, and contact details before launch.
- Menu prices are shown as "starting at" ranges since every order is custom.
- Images: placeholders are CSS gradient blocks; real photos drop into the same slots
  (kept as local files under an `images/` folder, no external image hosting).

## 6. Contact / "Leave a message" approach (v1)

- **No backend in v1.** The site is fully static.
- The message form uses a **`mailto:` submission** (opens the visitor's email client
  pre-filled to the bakery's address) — zero infrastructure, works offline-of-server.
- Alongside the form: a clearly displayed **email address**, **phone (text-friendly)**,
  **location note** (West LA · pickup & local delivery), and **social media handles**
  (Instagram, TikTok, Facebook, Pinterest) as direct links.
- A real server-side form (spam protection, stored submissions) is a documented future
  upgrade if/when the site is publicly hosted.

## 7. Technical Approach

- **Plain static site**: HTML + CSS + a few lines of vanilla JS (smooth scroll, mobile
  nav toggle, mailto form handling). No build step, no framework.
  - Rationale: tiny site, no dynamic data, easiest for the owner to host anywhere and
    for anyone to edit. YAGNI on frameworks.
- **Structure:**
  - `index.html` — the page.
  - `css/styles.css` — extracted stylesheet (moved out of inline `<style>` for maintainability).
  - `js/main.js` — nav toggle, smooth scroll, mailto form.
  - `images/` — product/hero/about photos (placeholders until real ones arrive).
  - Optional `content` kept inline in `index.html` (single source for text/prices).
- **Fonts:** Google Fonts (Fraunces + Nunito Sans) via `<link>`, with system-font
  fallbacks so it still renders offline.
- **Verification:** open `index.html` in a browser; check all sections, responsive
  breakpoints (≈375px, 768px, 1140px), nav anchors, and the mailto form.

## 8. Open Decisions (defaults chosen, easy to change)

| Decision | Default for now | Notes |
|---|---|---|
| Brand name | *Little Sprout Bakery* (placeholder) | Swap to real name anytime. |
| Language | English-primary | Bilingual (中/英) toggle is a future option. |
| Deployment | Local preview first | When ready to go public, choose a host then. |
| Contact backend | `mailto:` + direct email/social | Server-side form is a future upgrade. |

## 9. Success Criteria

- A visitor on phone or desktop can, within one scroll: understand it's an organic/
  low-sugar kids' birthday bakery in West LA, browse the menu **with prices**, see photos,
  read the story, and contact the owner (email / form / social) — with no broken links
  or layout, and a clean "Soft Organic" aesthetic matching the chosen prototype.
