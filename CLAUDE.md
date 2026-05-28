# CLAUDE.md

Context for AI agents working on this repo. Read this first — it should save you from re-reading every file.

## What this is

Marketing / informational website for the **Agrobotcompetitie** (Agrobot Competition), a
student competition to build autonomous agricultural robots. It is a static single-page
app (no backend); forms currently just show a toast and do not submit anywhere.

The site is **fully bilingual: Dutch (`nl`, default/fallback) and English (`en`)**.

## Tech stack

- **Vite 5** + **React 18** + **TypeScript**, SWC plugin (`@vitejs/plugin-react-swc`).
- **React Router v6** (`BrowserRouter`) for routing.
- **Tailwind CSS** + **shadcn/ui** (Radix primitives) for components.
- **react-i18next** for translations.
- **@tanstack/react-query** is wired up but barely used (no real data fetching yet).
- Tests: **Vitest** + Testing Library (only a placeholder test exists).

## Commands

```bash
npm run dev      # vite dev server on http://localhost:8080 (HMR error overlay is DISABLED)
npm run build    # production build (this is the real correctness gate: tsc + vite)
npm run lint     # eslint — NOTE: pre-existing errors/warnings live in src/components/ui/* and tailwind.config.ts
npm test         # vitest run
```

Heads-up: `vite.config.ts` sets `hmr.overlay: false`, so **runtime errors are silent in the
browser** — they won't pop a red overlay. Check the browser console, not just the page.

Lint is not clean out of the box: there are ~3 errors + ~7 warnings, all in generated
shadcn `ui/` files and `tailwind.config.ts`. Treat lint as "no NEW issues in files you
touched," not "zero issues."

## Architecture

- `src/main.tsx` → mounts `App`, imports `./i18n` for side-effect init.
- `src/App.tsx` → providers + `<BrowserRouter>` + `<Layout>` + `<Routes>`. **Add new routes here.**
- `src/components/Layout.tsx` → `Navbar` + `<main>` + `Footer` wrapper (fixed navbar, `pt-16`).
- `src/pages/*` → one component per route. Page file/component names are Dutch
  (e.g. `Regels` = Rules, `Inschrijven` = Register, `Edities` = Editions).
- `src/components/*` → app components; `src/components/ui/*` → shadcn primitives (don't hand-edit unless needed).
- `@/` is an alias for `src/` (see `vite.config.ts`).

### Routes / pages

| Route          | Page component        | Purpose                                                |
|----------------|-----------------------|--------------------------------------------------------|
| `/`            | `pages/Index.tsx`     | Home: `VideoHero` + why/video/impressions/CTA          |
| `/regels`      | `pages/Regels.tsx`    | Rules & programme: **Tracks**, timeline, rules, downloads |
| `/edities`     | `pages/Edities.tsx`   | Previous editions: year tabs (winner, teams, gallery)  |
| `/inschrijven` | `pages/Inschrijven.tsx` | Register (form + minors + testimonials)              |
| `/faq`         | `pages/FAQ.tsx`       | FAQ accordion (categories)                              |
| `/contact`     | `pages/Contact.tsx`   | Contact info + form                                     |
| `*`            | `pages/NotFound.tsx`  | 404                                                    |

Nav links live in **both** `src/components/Navbar.tsx` and `src/components/Footer.tsx`
(two separate `navLinks`/`pages` arrays — update both when adding a page).

## ⭐ The content model (most important thing to know)

**There is almost no hard-coded copy in the components.** All visible text lives in two
locale files that must be kept in sync key-for-key:

- `src/i18n/locales/nl.json`  (Dutch — default & i18next fallback)
- `src/i18n/locales/en.json`  (English)

Pages read copy with `useTranslation()`:

```tsx
const { t } = useTranslation();
t("rules.heroTitle")                                   // simple string
t("rules.tracks", { returnObjects: true }) as Track[]  // arrays/objects of structured content
```

So to change wording, edit the JSON — not the TSX. To add a structured section, add the
data (array/object) to **both** locale files under the same key and `map()` over it in the
page, casting with `as` to a local type (see `Edities.tsx` / `Regels.tsx` for the pattern).

`src/i18n/index.ts` configures languages (`nl`, `en`), localStorage persistence (key `lang`),
browser-language detection, and keeps `<html lang>` in sync. Language toggle UI is
`src/components/LanguageSwitcher.tsx`.

### Adding a page (checklist)

1. Create `src/pages/Foo.tsx`.
2. Add `<Route>` in `src/App.tsx` (+ import).
3. Add nav entry in `src/components/Navbar.tsx` AND `src/components/Footer.tsx`.
4. Add `nav.<key>` + any page content to **both** `nl.json` and `en.json`.
5. `npm run build` to confirm it compiles.

## Styling conventions

- Tailwind utility classes; section pattern is `py-20` with alternating `bg-background` /
  `bg-muted`, content in `.container`.
- Custom brand colors (defined in `tailwind.config.ts` / CSS vars): `agrobot-dark`,
  `agrobot-mid`, `agrobot-mint`, `agrobot-light`, `agrobot-glow`. The mint CTA button
  pattern is `bg-agrobot-mint text-agrobot-dark hover:bg-agrobot-light`.
- Headings use `font-heading`. Icons come from `lucide-react`.

## Notable current state / placeholders

- Home hero is a full-screen sticky background video (`VideoHero.tsx`) expecting
  `/public/videos/hero-web.mp4` (see `public/videos/README.md`).
- **Previous editions** (`/edities`) and the **two competition tracks** (Engineering / AI,
  on `/regels`) use **placeholder content** — fictional team names, winners, project
  descriptions and image-gallery captions. Replace with real data in the locale JSON.
- **Images (auto-loaded)**: drop files into `src/assets/images/landing/` or
  `src/assets/images/editions/<year>/` and they render automatically — no filename lists to
  maintain. `src/lib/images.ts` globs those folders via `import.meta.glob`; alt text is
  derived from the filename and images are ordered by filename (prefix with `01-`, `02-` to
  control order). When a folder has no images, the page falls back to the 📷 caption tiles in
  `home.impressions` / each edition's `gallery` (locale JSON). See
  `src/assets/images/README.md`. Images live under `src/assets` (not `public/`) because Vite
  only globs/bundles files in the module graph.
- The homepage impression images render through `src/components/LandingCarousel.tsx` — an
  Embla "coverflow" carousel (infinite loop; centre slide is full-size, neighbours scale
  down / fade / blur toward the edges). Click a side image to centre it; click the centre to
  open it large in a lightbox. The editions galleries still use a simple grid.
- Forms (register, contact) are front-end only — they show a toast, no submission backend.
