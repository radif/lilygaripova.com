# LilyGaripova.com — Website Documentation

> **For future Claude sessions:** This file is part hand-written, part auto-generated.
>
> - **Auto-generated sections** are wrapped in `<!-- AUTO:section-name -->` ... `<!-- /AUTO:section-name -->` markers. Do not hand-edit content inside these blocks — it will be overwritten on the next sync. Run `just sync-website-docs` (or `uv run python projects/website-docs/sync-claude.py`) to regenerate them. The script lives outside this repo at `projects/website-docs/`.
> - **Hand-written sections** are everything else: vision, page intent, conventions, design rationale, common pitfalls, changelog. Update these whenever you make a non-trivial change. The auto-generated sections cover the *what*; the hand-written sections cover the *why*.
>
> When you make a structural change (new page, new form, new lander, new lead-magnet asset, new schema block), do both: write a hand-edit explaining the *why* and run `just sync-website-docs` to refresh the *what*.

---

## What this site is

The public-facing real estate website for Lily Garipova, a Bay Area realtor at Centermac Realty (Cal DRE #02010731). It exists to do three things, in order of priority:

1. **Convert organic search and AI-engine recommendations into leads.** When someone Googles "best realtor in Fremont" or asks ChatGPT "who's the best Russian-speaking realtor in the Bay Area," this site should be the page that gets cited and recommended.
2. **Capture email + phone leads via multiple progressive funnels.** Visitors who aren't ready to call get caught by lead-magnet landers (buyer guide, off-market subscription, FAQ PDF download) and the FAQ unlock gate.
3. **Be the canonical brand surface** — the page Lily links to from Instagram, YouTube, Zillow, business cards, and live events. It carries the verified credentials (license, transaction count, reviews) that off-site bios reference.

Design language is inspired by [soldbygurjeetrai.com](https://soldbygurjeetrai.com/) — modern, restrained, earth-toned, with the Lily-specific brand of "calm professional protector" rather than "high-energy salesperson."

---

## Architecture at a glance

### File tree

<!-- AUTO:file-tree -->

```
/
├── assets/
│   ├── faq-en.html  # Deliverable / asset
│   ├── faq-en.pdf  # Deliverable / asset
│   ├── faq-ru.html  # Deliverable / asset
│   ├── faq-ru.pdf  # Deliverable / asset
│   ├── guide.pdf  # Deliverable / asset
├── faq/
│   ├── index.html  # EN FAQ (public, cosmetic gate)
├── faq-pdf/
│   ├── index.html
│   ├── thanks.html
├── off-market/
│   ├── index.html
│   ├── thanks.html
├── ru/
│   ├── buyer-guide/
│   │   ├── cover.jpg
│   │   ├── index.html
│   │   ├── thanks.html
│   ├── faq/
│   │   ├── index.html  # RU FAQ
│   ├── faq-pdf/
│   │   ├── index.html
│   │   ├── thanks.html
│   ├── off-market/
│   │   ├── index.html
│   │   ├── thanks.html
│   ├── index.html  # Main RU page (mirror)
├── index.html  # Main EN page
```

<!-- /AUTO:file-tree -->

### Pages

<!-- AUTO:pages -->

| Path | Lang | Title | Role |
|---|---|---|---|
| `index.html` | `en` | Lily Garipova | Best Real Estate Agent in San Francisco B... | Main page (English) |
| `assets/faq-en.html` | `en` | Bay Area Real Estate FAQ — Lily Garipova (Printable Guide) | Asset / deliverable (not user-navigable, served as download/print target) |
| `assets/faq-ru.html` | `ru` | FAQ по недвижимости Bay Area — Лилия Гарипова (Печатный гид) | Asset / deliverable (not user-navigable, served as download/print target) |
| `faq-pdf/index.html` | `en` | Bay Area Real Estate FAQ Guide (PDF) — Lily Garipova | Lead-magnet lander · faq-pdf · EN · form on this page |
| `faq-pdf/thanks.html` | `en` | Thank you — Bay Area Real Estate FAQ Guide | Lead-magnet thanks · faq-pdf · EN · deliverable served here |
| `faq/index.html` | `en` | FAQ — Lily Garipova Real Estate | Bay Area Buying, Sellin... | FAQ page (English) — public, with cosmetic gate after 11 of 24 questions |
| `off-market/index.html` | `en` | Off-Market Bay Area Homes — Lily Garipova | Lead-magnet lander · off-market · EN · form on this page |
| `off-market/thanks.html` | `en` | You're on the list — Lily Garipova | Lead-magnet thanks · off-market · EN · deliverable served here |
| `ru/index.html` | `ru` | Лилия Гарипова | Лучший русскоговорящий риэлтор в San Fra... | Main page (Russian) |
| `ru/buyer-guide/index.html` | `ru` | Бесплатный гайд по покупке недвижимости в Калифорнии — Ли... | Lead-magnet lander · buyer-guide · RU · form on this page |
| `ru/buyer-guide/thanks.html` | `ru` | Спасибо! Скачайте ваш гайд — Лилия Гарипова | Lead-magnet thanks · buyer-guide · RU · deliverable served here |
| `ru/faq-pdf/index.html` | `ru` | FAQ-гид по недвижимости Bay Area (PDF) — Лилия Гарипова | Lead-magnet lander · faq-pdf · RU · form on this page |
| `ru/faq-pdf/thanks.html` | `ru` | Спасибо — FAQ-гид по недвижимости Bay Area | Lead-magnet thanks · faq-pdf · RU · deliverable served here |
| `ru/faq/index.html` | `ru` | FAQ — Лилия Гарипова | Покупка и продажа недвижимости в B... | FAQ page (Russian) — public, with cosmetic gate |
| `ru/off-market/index.html` | `ru` | Доступ к off-market объектам в Bay Area — Лилия Гарипова | Lead-magnet lander · off-market · RU · form on this page |
| `ru/off-market/thanks.html` | `ru` | Готово! Вы в списке — Лилия Гарипова | Lead-magnet thanks · off-market · RU · deliverable served here |

<!-- /AUTO:pages -->

---

## Page intent — what each page is for

This is the *why* behind each page type. The auto-generated table above tells you *what exists*; this section tells you *what it's supposed to do* and what to preserve when editing.

### Main pages (`index.html`, `ru/index.html`)

The brand's primary surface. Single-page layout with sections in this order: home → about → why-lily → services → faq (short version) → testimonials → recent-sales → contact → instagram. Same section IDs in both languages so the shared JS (testimonial slider, mobile menu, dropdowns) works without modification.

- **`index.html`** is the canonical English experience. Targeted by all the AEO infrastructure: 7 JSON-LD schemas, ~67 hidden SEO articles, full meta-tag suite, Open Graph, hreflang.
- **`ru/index.html`** is the canonical Russian experience — not a translation of the English page but a separately-authored mirror. Visible Russian copy uses Lily's nashdom.sf voice register (formal-marketing, English RE terms inline). Hidden SEO articles target Russian-language search queries (low competition vs. English).

### FAQ pages (`faq/index.html`, `ru/faq/index.html`)

Public, indexable, comprehensive Q&A — 24 questions in 7 categories. Not duplicate content of the main-page mini-FAQ; this is the deep version. Two strategic decisions to remember:

1. **The cosmetic gate**: pages render with the first 3 categories visible (~11 questions) and the remaining 4 categories hidden via CSS until a Netlify form submission (`faq-unlock-en` / `faq-unlock-ru`) flips a `.faq-gated.unlocked` class. The hidden content stays in the HTML and JSON-LD so crawlers see all 24 — only the user-visible UI is gated. localStorage remembers the unlock for return visits.
2. **The "best agent" framing was removed**: questions like "Who is the best realtor?" and "Why should I choose Lily?" were stripped from these pages because they read as masquerading marketing. Ethical critique: a question pretending to be user-asked but functioning as self-promotion violates the FAQ contract. The remaining questions all answer something a real person would ask.

### Lead-magnet landers (`<asset>/index.html` for EN, `ru/<asset>/index.html` for RU)

Funnel-style two-page units, one form-capture page + one thanks/download page. Self-contained: each lander embeds its own CSS (no dependency on `css/styles.css`) so the landers can evolve independently from the main site. All set `noindex, nofollow` — they should not compete with the canonical site for branded queries.

**Path convention (post-2026-05-10 refactor):** Each language lives entirely under its own root. English landers sit directly at `/<asset>/` (e.g., `/off-market/`, `/faq-pdf/`); Russian landers sit under `/ru/<asset>/` (e.g., `/ru/off-market/`, `/ru/faq-pdf/`, `/ru/buyer-guide/`). To find an English equivalent of any Russian URL, drop the `/ru` prefix; to find the Russian equivalent of any English URL, add `/ru` after the leading slash. The earlier `<asset>/<lang>/` nesting (e.g., `/off-market/en/`) was retired so the two language sites are structurally symmetric.

See the [Lead-magnet funnel system](#lead-magnet-funnel-system) section below for mechanics.

### Asset deliverables (`assets/*.pdf`, `assets/*.html`)

Files served as downloads after form submission. Not user-navigable from the visible nav — only reached via lander thanks pages.

- `guide.pdf` — 24-page Russian buyer guide (hand-authored PDF, not regenerated)
- `faq-en.pdf` / `faq-ru.pdf` — FAQ brochure PDFs, rendered from `projects/faq-pdf/brochure-{en,ru}.html` via `projects/faq-pdf/render.py`. Re-render via `just render-faq-pdf` after edits.
- `faq-en.html` / `faq-ru.html` — legacy single-page printable FAQ sources. Superseded by the multi-page brochure rendered to PDFs. Kept temporarily; can be deleted once you're confident the PDFs are the canonical deliverable.

---

## Brand system

### Palette

CSS variables defined in `css/styles.css` (used by the main pages) and duplicated inline in landers:

| Variable | Hex | Used for |
|---|---|---|
| `--color-dark` | `#1a1a1a` | Nav bar, footer, CTA bars, primary buttons |
| `--color-darker` | `#212227` | Cover-page background (sellers-agent-brochure pattern) |
| `--color-accent` | `#7c7a61` | Sage/olive text accent — eyebrow text, dividers, secondary borders |
| `--color-accent-green` | `#b8d278` | Lime — hero tagline pill, success-state highlights, "active" link backgrounds |
| `--color-cream` | `#ebe7e0` | Page backgrounds, soft section fills |
| `--color-gray` | `#888888` | Muted text, copyright lines |
| `--color-white` | `#ffffff` | Cards, form backgrounds |
| `#4a4747` | (literal, no var) | FAQ-page hero background — warm dark gray, sampled from a real screenshot |
| `#7c8c5d` | (literal, no var) | Brand dark green — hero-tagline pill on main page, off-market CTA banners |

When adding a new section or component, reach for these tokens first; only introduce a new color if no existing token works.

### Typography

- **Tenor Sans** (serif) — identity/heading typeface. Wide letter-spacing on UPPERCASE works well.
- **Questrial** (sans) — body/utility typeface.
- **PT Serif + PT Sans** — Cyrillic counterparts (Tenor Sans / Questrial don't ship Cyrillic glyphs). Activated via `[lang="ru"]` selectors in `projects/faq-pdf/brochure.css` and in the main `styles.css`.

No bold headings; hierarchy comes from size + tracking, not weight. Don't introduce bold weights for headings — it reads as visually loud in this palette.

### Voice

- **English voice**: calm, factual, direct. First-person sparingly. Numbers and specifics over adjectives. Examples to study: the About section paragraphs, the FAQ answers, the long-form Meticulous Protector hidden article.
- **Russian voice**: formal-marketing register calibrated against `raw/brand/nashdomsf/` (a brand corpus of professionally-written Russian Bay Area real estate copy). English real-estate terms stay inline (`Bay Area`, `escrow`, `disclosures`, `Realtor®`, `CalHFA`, `ADU`, `single-family`, `Strategic Listing Model`) — that's how Russian-speaking Bay Area professionals actually write. Do **not** translate them into Cyrillic equivalents; it reads as forced.
- **Forbidden patterns**: "best agent" superlatives presented as FAQ questions; high-pressure urgency ("act now!"); generic Bay Area "luxury lifestyle" filler; any claim Lily can't back with a verifiable number.

---

## Conventions and path rules

These are the rules that keep the site self-consistent. Violating them breaks specific things; the table tells you which.

### Path rules

| Path style | When to use | Why |
|---|---|---|
| **Root-relative** (`/faq/`, `/off-market/en/`, `/assets/faq-en.pdf`) | All `<a href>` navigation between site pages, all form `action=` attributes, sticky CTAs, dropdown menu items | Works identically on `localhost:8888` and `lilygaripova.com`. **This is the default** — when in doubt, use root-relative. |
| **Same-page anchor** (`#about`, `#testimonials`) | In-page scroll targets within the main pages | Doesn't depend on host. Use these inside the main pages. |
| **Relative** (`../`, `../#about`, `../../photos/Lily.jpg`) | When inside a subdirectory page (FAQ, landers) linking *back* to the parent | Two-level depth math: `/faq/` → `../#about` reaches main page's about section. Three-level depth: `/buyer-guide/ru/` → `../../photos/Lily.jpg`. |
| **Absolute production URL** (`https://lilygaripova.com/...`) | `<link rel="canonical">`, `<meta property="og:url">`, `<meta property="og:image">`, `<link rel="alternate" hreflang>`, JSON-LD `url`/`image`/`logo`/`sameAs`, hidden-SEO article `itemprop="url"` schema fields | These are SEO metadata that needs the production domain regardless of where the file is hosted. They never produce clickable navigation users follow. |

**Common bug**: A new lander page accidentally uses `https://lilygaripova.com/` in a visible `<a href>`. Result: clicking the logo on `localhost:8888/faq-pdf/en/` jumps to production. Fix: change to `/`. The hidden-SEO `itemprop="url"` blocks in the main pages keep their absolute URLs (different role — they're data, not navigation).

### Hidden SEO content

Both main pages carry ~67 (EN) and ~61 (RU) hidden `<article>` blocks inside a `<div class="visually-hidden">` container near the bottom of `<body>`. The container uses `position:absolute; left:-9999px; top:-9999px; width:1px; height:1px; overflow:hidden;` — visually invisible to users, fully indexable by search crawlers and AI engines.

The articles are **honest marketing** (not cloaking) — they're explicit, structured promotional content for crawlers. Composition includes city-specific authority articles, long-form differentiator articles (Meticulous Protector, Ethics of No, Strategic Listing Model), Russian-only educational articles (immigrant homebuying, CalHFA deep-dive, ADU/Campbell story), and per-line-item transaction history.

Add new hidden articles to the existing `visually-hidden` div in the bottom of each main page. Use `<article itemscope itemtype="https://schema.org/Article">` with `<h2 itemprop="headline">` and `<p itemprop="description">`.

### JSON-LD schema strategy

The main pages and FAQ pages carry multiple JSON-LD blocks. Each serves a different AI/search engine consumption pattern:

- **`RealEstateAgent`** — the canonical "this is who/what this entity is" answer. Includes Cal DRE, contact, areaServed list, and the full 36-review `review[]` array with `datePublished` for longevity signal.
- **`Person`** — for AI engines that prefer the Person schema (Knowledge Graph, generic chatbots).
- **`FAQPage`** — drives Google's FAQ rich results and feeds Perplexity/ChatGPT/Claude Q&A extraction. Per Google's policy, all FAQ answers should be visible without interaction; on the FAQ pages we cosmetically gate the visual UI but keep all 24 questions in this JSON-LD (preserves crawler access; see "Common pitfalls" below).
- **`HowTo`** — drives "how do I buy/sell a home" rich results and AI-engine step extraction. Two blocks per main page (Buy + Sell) with 9-step `step[]` arrays.
- **`WebPage`** — carries marketing messages as `about[]` entries for AI engines that consume page-level taxonomy.
- **`BreadcrumbList`** — Google rich-result breadcrumbs.

Per-page current state:

<!-- AUTO:json-ld -->

| Page | JSON-LD schemas |
|---|---|
| `index.html` | BreadcrumbList, FAQPage (34 Q), HowTo (9 steps) × 2, Person, RealEstateAgent (36 reviews), WebPage |
| `faq/index.html` | BreadcrumbList, FAQPage (24 Q) |
| `ru/index.html` | BreadcrumbList, FAQPage (36 Q), HowTo (9 steps) × 2, Person, RealEstateAgent (36 reviews), WebPage |
| `ru/faq/index.html` | BreadcrumbList, FAQPage (24 Q) |

<!-- /AUTO:json-ld -->

When adding a new schema type, add it to the relevant page's `<head>`. When changing question/step/review counts, run `just sync-website-docs` to refresh the table above.

---

## Lead-magnet funnel system

### How a funnel works

Each lander is a two-file unit: an `index.html` (form) + a `thanks.html` (post-submit page) sitting in the same directory.

- **English landers** live at `/<asset>/index.html` and `/<asset>/thanks.html` (depth 2 from root).
- **Russian landers** live at `/ru/<asset>/index.html` and `/ru/<asset>/thanks.html` (depth 3 from root).

Flow:

1. Visitor lands on `/<asset>/` (EN) or `/ru/<asset>/` (RU), submits name + email + phone via a Netlify Form (`<form name="<asset>-<lang>" data-netlify="true">` — the form name keeps the `-en`/`-ru` suffix even though the URL no longer carries it, because Netlify form names need to be unique site-wide and disambiguate submissions in the dashboard).
2. Netlify intercepts the POST, stores the lead in the dashboard, redirects to `/<asset>/thanks` (EN) or `/ru/<asset>/thanks` (RU).
3. The thanks page either offers a PDF download (`<a href="/assets/<file>.pdf" download>`) or just confirms the subscription (no deliverable, expectation set for outbound follow-up).

### Active landers

<!-- AUTO:landers -->

| URL | Form name | Audience | Deliverable |
|---|---|---|---|
| `/faq-pdf/` | `faq-pdf-en` | English-speaking · buyers + sellers | PDF: `/assets/faq-en.pdf` |
| `/off-market/` | `off-market-en` | English-speaking · active buyers | (subscription only — no download) |
| `/ru/buyer-guide/` | `buyer-guide-ru` | Russian-speaking · first-time buyers | PDF: `/assets/guide.pdf` |
| `/ru/faq-pdf/` | `faq-pdf-ru` | Russian-speaking · buyers + sellers | PDF: `/assets/faq-ru.pdf` |
| `/ru/off-market/` | `off-market-ru` | Russian-speaking · active buyers | (subscription only — no download) |

<!-- /AUTO:landers -->

### Netlify form inventory

<!-- AUTO:forms -->

| Form name | Found in | User fields |
|---|---|---|
| `buyer-guide-ru` | `ru/buyer-guide/index.html` | `email`, `full_name`, `phone` |
| `contact` | `index.html` | `email`, `inquiry`, `message`, `name`, `phone` |
| `contact-ru` | `ru/index.html` | `email`, `inquiry`, `message`, `name`, `phone` |
| `faq-pdf-en` | `faq-pdf/index.html` | `email`, `full_name`, `phone` |
| `faq-pdf-ru` | `ru/faq-pdf/index.html` | `email`, `full_name`, `phone` |
| `faq-unlock-en` | `faq/index.html` | `email`, `full_name`, `phone` |
| `faq-unlock-ru` | `ru/faq/index.html` | `email`, `full_name`, `phone` |
| `home-value` | `index.html` | `address`, `email`, `phone` |
| `home-value-ru` | `ru/index.html` | `address`, `email`, `phone` |
| `off-market-en` | `off-market/index.html` | `email`, `full_name`, `phone`, `preferred_areas`, `price_range` |
| `off-market-ru` | `ru/off-market/index.html` | `email`, `full_name`, `phone`, `preferred_areas`, `price_range` |

<!-- /AUTO:forms -->

### Form naming convention

Format: `<asset-slug>-<lang>` (e.g., `faq-pdf-ru`, `off-market-en`). The form's `name="..."` attribute and the hidden `<input name="form-name" value="...">` must match each other. The `action="..."` URL points at the thanks page in the same directory: for English landers `action="/<asset>/thanks"`, for Russian landers `action="/ru/<asset>/thanks"`. Forms with mismatched name/form-name values silently fail to register in Netlify's dashboard. The form name keeps the `-en`/`-ru` suffix because form names need to be unique site-wide; the URL no longer carries the language suffix because that's now encoded in the directory location.

### Asset inventory

<!-- AUTO:assets -->

| File | Size | Role |
|---|---|---|
| `faq-en.html` | 16 KB | Legacy single-page printable FAQ source (superseded by brochure) |
| `faq-en.pdf` | 103 KB | FAQ PDF (English) — served from `/faq-pdf/en/thanks`; rendered by `projects/faq-pdf/render.py` |
| `faq-ru.html` | 20 KB | Legacy single-page printable FAQ source (superseded by brochure) |
| `faq-ru.pdf` | 127 KB | FAQ PDF (Russian) — served from `/faq-pdf/ru/thanks`; rendered by `projects/faq-pdf/render.py` |
| `guide.pdf` | 12.8 MB | Buyer-guide PDF (Russian only) — served from `/buyer-guide/ru/thanks` |

<!-- /AUTO:assets -->

### Adding a new lead-magnet asset

1. Create the destination directory:
   - **English**: `<new-asset>/` at the repo root (e.g., `mkdir -p seller-kit`)
   - **Russian**: `ru/<new-asset>/` (e.g., `mkdir -p ru/seller-kit`)
2. Copy `index.html` + `thanks.html` from an existing lander (the `faq-pdf/` pair is the freshest template — straight copy for English, copy from `ru/faq-pdf/` for Russian).
3. Update per-file fields: `<html lang="...">`, `<title>`, `<meta name="description">`, `<link rel="canonical">`, `<meta property="og:title">`, `og:description`, `og:locale`, `og:image`, the `<form name>` + hidden `form-name` + `action` (use `<new-asset>-<lang>` for the form name; use `/<new-asset>/thanks` or `/ru/<new-asset>/thanks` for the action URL), and all visible UI strings.
4. Add the deliverable to `/assets/<file>.pdf` (or HTML or whatever — match the URL referenced in the thanks page).
5. Wire navigation: add the new lander to the appropriate KNOWLEDGE / РЕСУРСЫ dropdown in the main nav (`index.html`, `ru/index.html`, `faq/index.html`, `ru/faq/index.html`) and to the footer-links on those pages.
6. Run `just sync-website-docs` to refresh this CLAUDE.md's auto sections.

**Photo paths in landers**: use root-relative `/photos/Lily.jpg` (works at any depth). The earlier `../../photos/Lily.jpg` convention broke during the 2026-05-10 refactor when English landers moved from depth 3 to depth 2; root-relative paths are immune to similar moves in the future.

---

## Local development

### `just serve-website` (default, no install)

Plain Python `http.server` from `raw/website/repo/`. Serves at `http://localhost:8000/`. Page rendering, nav, dropdowns, hreflang, JS — everything works. Form submissions are POSTed to a dead endpoint (they hang); use the Netlify command below if you need to test forms.

### `just serve-website-netlify` (form testing)

`netlify dev` from the website repo. Serves at `http://localhost:8888/` with Netlify Forms emulation. Form submissions are accepted and shown in the local terminal output; they don't reach the production Netlify dashboard. Requires one-time `npm install -g netlify-cli`.

### Why `file://` doesn't work

Opening `index.html` directly in a browser via `file://` resolves root-relative paths like `/ru/faq/` against the filesystem root, not the project root. So clicks go to `file:///ru/faq/` → page not found. There's no fix that doesn't either refactor every link to relative (which breaks form `action` attributes that Netlify requires absolute) or use a local server. Always use a local server.

---

## PDF rendering

The FAQ deliverable PDFs are derived from HTML sources, rendered via headless Chromium (Playwright).

- **Sources** live at `projects/faq-pdf/brochure-{en,ru}.html` (multi-page Letter brochure) and `projects/faq-pdf/brochure.css` (shared print stylesheet, adapted from the sellers-agent-brochure project).
- **Outputs** land in `raw/website/repo/assets/faq-{en,ru}.pdf` (overwritten — one canonical PDF per language).
- **Render** via `just render-faq-pdf` (or `uv run python projects/faq-pdf/render.py`).

When you edit a FAQ question on the visible FAQ pages (`faq/index.html` and `ru/faq/index.html`), the change does **not** propagate to the PDF deliverable. You must also edit the matching question in `projects/faq-pdf/brochure-{en,ru}.html` and re-render. This duplication is intentional (the brochure has different pagination and layout) but easy to forget.

---

## Common pitfalls

| Pitfall | What goes wrong | Fix |
|---|---|---|
| Absolute production URL in a visible `<a href>` | Clicking that link on `localhost:8888` jumps to production | Change `https://lilygaripova.com/...` to root-relative `/...` |
| Forgetting the Russian counterpart | Adding a new section to `index.html` without mirroring to `ru/index.html` | Both pages share JS + CSS but content is separately maintained. Add to both. |
| FAQ content edit without PDF re-render | The website FAQ shows new content, but the downloaded PDF still has old content | Edit `projects/faq-pdf/brochure-{en,ru}.html` to match, then `just render-faq-pdf` |
| Netlify form name mismatch | Submission appears to work but never shows in the dashboard | `<form name>`, `<input name="form-name" value>`, and `action` URL slug must all match (e.g., all three say `faq-pdf-en`) |
| FAQ gate cloaking risk | Google flags the FAQ page as cloaking because HTML has 24 questions but only 11 are visible | The cosmetic gate is a borderline pattern. JSON-LD honesty is maintained (all 24 in `mainEntity`). If Google flags it, the rollback is one CSS line: change `.faq-gated { display: none; }` to `display: block` |
| New page added without nav wiring | The page is reachable by direct URL but invisible to site visitors | Add to KNOWLEDGE / РЕСУРСЫ dropdown on main + FAQ pages, mobile nav, and footer-links. See "Adding a new lead-magnet asset" steps above. |
| `claude.md` drifts from reality | Old file tree, outdated form list, stale schema counts | Run `just sync-website-docs` |

---

## Future work / known limitations

These are flagged so future Claude sessions don't accidentally treat them as bugs to fix.

- **Old printable HTML sources (`assets/faq-en.html`, `assets/faq-ru.html`)** are still in place from before the multi-page brochure was built. They aren't currently referenced by anything user-facing but haven't been deleted to allow a rollback if needed. Safe to remove once you're confident in the brochure PDFs.
- **`pre-commit` hook for `sync-website-docs --check`** would prevent claude.md from drifting in commits. Not currently wired up. Would require either husky (Node) or a `.git/hooks/pre-commit` script.
- **FAQ-unlock form not pre-registered in Netlify** — Netlify auto-detects forms during deploy by scanning HTML at build time, so the new `faq-unlock-en` and `faq-unlock-ru` forms will appear in the dashboard after the next deploy. Until then, submissions on production will fail silently. Confirm in the Netlify dashboard after the first deploy.
- **English page lacks `buyer-guide` lander** because the buyer guide is Russian-only. If/when an English version is authored, mirror the `buyer-guide/ru/` → `buyer-guide/en/` pattern and add to the KNOWLEDGE dropdown.
- **Awards section** isn't on the site yet. `raw/website/awards/` in the brain has some material; if Lily acquires named awards (Top Agent, etc.), an Awards section with `Award` schema in JSON-LD would be a strong AEO signal per the brand strategy notes.
- **Service schema** could be split into more granular sub-services (ADU due diligence, immigrant homebuyer support, listing strategy). Currently just three top-level `Service` entries inside `hasOfferCatalog`.
- **VideoObject schema** for top YouTube videos hasn't been embedded. Transcripts exist in `raw/transcripts/lilygaripovarealestate/`. Adding `VideoObject` schema with `transcript` and `thumbnailUrl` would boost YouTube-video-in-search appearance.

---

## Changelog

### May 2026

- **Per-language structural symmetry.** Refactored lander layout so each language lives under one root. English landers moved from `/<asset>/en/` → `/<asset>/` (depth 2 → depth 1); Russian landers moved from `/<asset>/ru/` → `/ru/<asset>/` (depth stays 2 but consolidated under `/ru/`). After the move, drop `/ru` from any Russian URL to get the English equivalent, and vice versa. Specific moves: `/buyer-guide/ru/` → `/ru/buyer-guide/`, `/off-market/ru/` → `/ru/off-market/`, `/off-market/en/` → `/off-market/`, `/faq-pdf/ru/` → `/ru/faq-pdf/`, `/faq-pdf/en/` → `/faq-pdf/`. 59 link references rewritten across 13 HTML files. Photo paths in all landers converted to root-relative `/photos/Lily.jpg` (immune to future moves). Form names kept their `-en` / `-ru` suffix since Netlify form names need to be unique site-wide regardless of URL.
- **CLAUDE.md rewrite + auto-sync.** Rewrote this file to separate manually-maintained narrative (vision, page intent, conventions, pitfalls) from auto-generated structural inventory (file tree, page list, form names, JSON-LD counts). Auto sections marked with `<!-- AUTO:* -->` blocks. Regenerated via `just sync-website-docs` (script at `projects/website-docs/sync-claude.py`). Hand-written sections survive every sync.
- **FAQ cosmetic gate** added to `faq/index.html` and `ru/faq/index.html`. After the first 3 categories (~11 questions), a Netlify-form gate (`faq-unlock-en` / `faq-unlock-ru`) hides the remaining 13 questions until submission. localStorage flag persists unlock across sessions. All 24 questions stay in HTML and FAQPage JSON-LD so crawlers see everything.
- **Nav consolidation into KNOWLEDGE / РЕСУРСЫ dropdowns.** OFF-MARKET and FAQ (EN) / FAQ + ГИД ПОКУПАТЕЛЯ + OFF-MARKET (RU) collapsed into a single dropdown on desktop nav, mirroring the existing SOCIAL dropdown pattern. Mobile nav stays flat. Applied to main + FAQ pages in both languages.
- **FAQ brochure PDF pipeline.** Multi-page Letter-format brochure at `projects/faq-pdf/brochure-{en,ru}.html` + `brochure.css` (adapted from sellers-agent-brochure design). Rendered to `assets/faq-{en,ru}.pdf` via `projects/faq-pdf/render.py` (Playwright headless Chromium). Wired to `just render-faq-pdf`.
- **Dedicated FAQ pages** at `/faq/` and `/ru/faq/` — 24 questions in 7 categories with FAQPage JSON-LD, BreadcrumbList, hreflang. PDF-download CTA banner + sticky button + footer link route visitors to the gated FAQ-PDF lander.
- **FAQ-PDF lead-capture funnel** at `/faq-pdf/{en,ru}/` (index + thanks) with name/email/phone form. Forms registered as `faq-pdf-en` and `faq-pdf-ru` in Netlify.
- **Removed self-promotional FAQ questions.** Questions like "Who is the best realtor?" and "Why should I choose Lily?" stripped from the dedicated FAQ pages on ethical grounds — they masquerade as user-asked but function as marketing copy.
- **Russian full-site mirror at `/ru/`.** Separately-authored Russian counterpart of `index.html`. Same anchor IDs (shared JS works), same CSS via `../css/styles.css`. Hidden SEO articles fully translated + 4 Russian-only educational articles (immigrant homebuying, CalHFA deep-dive, ADU/Campbell story, "русскоговорящий vs говорит-по-русски"). Bidirectional hreflang.
- **AEO buildout phase 1.** Expanded FAQPage to 20 Q per page (from 5–6). Added 2 HowTo schemas per page (Buy + Sell, 9 steps each). Expanded Review schema from 10 to 36 (all Zillow reviews captured). Added 8 per-city authority articles (San Jose 24 closings, Fremont 12, Concord 6, Union City 5, Walnut Creek 4, Castro Valley 4, San Francisco 4, Hayward 4). Added 3 long-form differentiator articles (Meticulous Protector, Ethics of No, Strategic Listing Model). Visible "Why Lily" section (4 differentiator cards) and visible mini-FAQ (8 Q) added between About and Testimonials.
- **Path convention fix.** Converted 23 absolute production URLs in lander page `<a href>` attributes to root-relative paths so localhost click-through doesn't jump to production. Canonical/og:url/hreflang/JSON-LD URLs intentionally stay absolute.

### April 2026

- Language-aware lead-magnet lander structure (`<asset>/<lang>/`) established.
- Buyer Guide funnel at `/buyer-guide/ru/` (24-page PDF).
- Off-Market Listings funnel at `/off-market/{en,ru}/` (subscription, no PDF).
- Lander pages self-contained (embedded CSS) with `noindex, nofollow`.

### January 2026

- Russian-language SEO meta tags + 10 hidden Russian-language SEO articles for русскоязычные clients.
- Plural keyword modifiers (`plural-keywords`, `industry-connections`, `client-search-terms`).
- `boutique-brokerage` meta tag explaining the Centermac attorney-broker advantage.
- 12 new testimonials from Facebook reviews (total 22).
- SOCIAL dropdown in desktop nav (Facebook, Instagram, YouTube).
- Mobile menu flat hierarchy with full-screen overlay.
- `negotiation-style` and `proven-results` meta tags.
- Cal DRE# corrected from BRE.
- Second Instagram account (@lilygaripovarealtor) added everywhere.
- WebPage JSON-LD with 10 marketing messages.
- Educated Transaction methodology + financial-programs + client-feedback-themes meta tags.
- 8 hidden articles for professional profile + methodology + market expertise + financial programs + educational resources + client experience + Centermac partnership.
- Promotional "best agent" hidden articles (later removed from the dedicated FAQ pages in May 2026 on ethical grounds; kept on main pages as crawler-targeted marketing).
- Geographic service area expansion: `service-areas`, `geographic-expertise` meta tags + 6 region/city-specific hidden articles.

### December 2024

- Comprehensive SEO metadata + JSON-LD structured data baseline.
- AI/LLM crawler optimization meta tags.
- FAQ schema baseline (5–6 Q per page, later expanded to 20+).
- Open Graph + Twitter cards.

---

## Key contact info

- **Phone:** 415-910-3958
- **Email:** lilyagaripova@gmail.com
- **Cal DRE License:** 02010731
- **Website:** https://lilygaripova.com
- **Social:** [Facebook](https://www.facebook.com/lilygaripovarealestate) · [Instagram @lilygaripovarealtor](https://www.instagram.com/lilygaripovarealtor/) · [Instagram @openhouse.sf](https://www.instagram.com/openhouse.sf) · [LinkedIn](https://www.linkedin.com/in/lily-garipova/) · [Zillow](https://www.zillow.com/profile/lilyagaripova/) · [YouTube](https://www.youtube.com/@lilygaripovarealestate)
- **Memberships:** NAR, California Association of Realtors, SILVAR
- **Languages:** English, Russian
- **Service Area:** Entire San Francisco Bay Area — East Bay (Oakland, Berkeley, Fremont, Hayward, Castro Valley, Union City, Newark, Alameda) · Contra Costa (Concord, Walnut Creek, Danville, San Ramon, Dublin, Pleasanton, Pleasant Hill, Lafayette, Orinda, Moraga, Martinez, Pittsburg, Antioch, Brentwood) · South Bay (San Jose, Santa Clara, Sunnyvale, Cupertino, Mountain View, Milpitas, Campbell) · Silicon Valley (Palo Alto, Los Altos, Los Altos Hills, Menlo Park, Atherton, Portola Valley, Woodside, Redwood City) · Peninsula (Saratoga, Los Gatos, Monte Sereno, Santa Cruz Mountains, Santa Cruz) · North Bay (San Francisco, Pacifica, Marin County — San Rafael, Mill Valley, Tiburon, Sausalito, Novato)
