# Images (auto-loaded)

Drop image files into these folders and they show up on the site automatically — **no code
or filename lists to edit.** Loading is done with Vite `import.meta.glob` in
`src/lib/images.ts`.

```
src/assets/images/
  landing/              -> homepage "Impression" grid
  editions/
    2023/               -> Previous Editions page, 2023 tab
    2024/               -> 2024 tab
    2025/               -> 2025 tab
```

## How it works

- Any `*.jpg / *.jpeg / *.png / *.webp / *.avif` placed in a folder is picked up on the next
  build / dev reload.
- Images are sorted by filename (natural/numeric order), so prefix with numbers to control
  order, e.g. `01-winner.jpg`, `02-field.jpg`.
- The **alt text** is derived from the filename: `winning-team_2025.jpg` becomes
  "winning team 2025". Use descriptive, lowercase-kebab filenames.
- Until a folder has images, the page falls back to the placeholder caption tiles defined in
  `src/i18n/locales/{nl,en}.json` (`home.impressions` and each edition's `gallery`).

## Adding a new edition year

Create `src/assets/images/editions/<year>/`, drop images in, and add a matching entry (with
that `year`) to `editions.list` in both locale JSON files.

## Recommended

- Format: **JPG** or **WebP**; ~16:9 for editions, ~4:3 for landing; keep each **< 300 KB**.

> These are bundled by Vite (hashed + optimized), which is why they live under `src/assets`
> and not `public/`.
