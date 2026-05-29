# Navigation partials

Source of truth for the top navigation across the entire site. Edit these files; never hand-edit `<nav>` HTML inside individual pages.

## Files

- `nav-desktop-en.html` — canonical English desktop nav (the `<ul class="nav-menu nav-desktop">` block)
- `nav-mobile-en.html` — canonical English mobile nav (the `<ul class="nav-mobile">` block)
- `nav-desktop-ru.html` — Russian desktop nav
- `nav-mobile-ru.html` — Russian mobile nav

## Tokens

The partials contain Mustache-style placeholders the build script substitutes per page:

- `{{ANCHOR_PREFIX}}` — `/` on EN pages, `/ru/` on RU pages. Used for anchor-to-home links (e.g., `{{ANCHOR_PREFIX}}#about` → `/#about` on EN pages, `/ru/#about` on RU pages).
- `{{LANG_URL}}` — mirror URL in the other language. `cities/hayward-realtor/` resolves to `/ru/cities/hayward-realtor/` on the EN page; the RU mirror resolves to `/cities/hayward-realtor/`.
- `{{ARIA_FAQ}}` / `{{ARIA_CITIES}}` / `{{ARIA_HV}}` / `{{ARIA_OM}}` / `{{ARIA_FO}}` / `{{ARIA_BG}}` — substituted with ` aria-current="page"` on the page whose URL matches that dropdown entry, empty string everywhere else.

## How pages consume the partials

Each page has two marker pairs:

```html
<!-- NAV-DESKTOP-START -->
... build script writes the rendered partial here ...
<!-- NAV-DESKTOP-END -->
```

```html
<!-- NAV-MOBILE-START -->
... build script writes the rendered partial here ...
<!-- NAV-MOBILE-END -->
```

`just build-nav` walks every HTML file under `raw/website/repo/`, detects the markers, and writes the rendered partial into them.

## Workflow

Editing the menu is a two-step process:

1. Edit the partial (add/remove entries, change labels, etc.)
2. Run `just build-nav` from the content-repo root to regenerate every page's nav

If you forget step 2, pages ship with stale nav. The CLAUDE.md rule enforces this for agent-driven changes.

## Why these files are not publicly served

The `_partials/` directory is listed in `_redirects` to return 404 for any request, so search engines and visitors can't reach them. They are build-time inputs only.
