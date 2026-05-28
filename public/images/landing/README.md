# Landing page images

Drop photos for the homepage here. Files in `public/` are served from the site root, so a
file at `public/images/landing/field.jpg` is referenced in code as `/images/landing/field.jpg`.

These feed the **"Sfeerimpressie" / "Impression"** section on the homepage
(`src/pages/Index.tsx`).

## Recommended

- Format: **JPG** (photos) or **WebP** (smaller). PNG only for graphics/logos.
- Size: ~1200×900 px, keep each file **< 300 KB** (compress before committing).
- Use descriptive lowercase-kebab filenames, e.g. `students-building-robot.jpg`.

> Note: the homepage section currently renders placeholder caption tiles from the
> `home.impressions` array in `src/i18n/locales/{nl,en}.json`. To show real images instead,
> the component needs to be wired to render `<img>` (ask Claude to do this).
