# Previous editions images

Footage/photos for the **Previous Editions** page (`/edities`, `src/pages/Edities.tsx`).

Files in `public/` are served from the site root. Organise per edition year so paths stay
predictable:

```
public/images/editions/2025/winner.jpg
public/images/editions/2025/field-1.jpg
public/images/editions/2024/...
public/images/editions/2023/...
```

A file at `public/images/editions/2025/winner.jpg` is referenced as
`/images/editions/2025/winner.jpg`.

## Recommended

- Format: **JPG** or **WebP**; ~1280×720 px (16:9 matches the gallery tiles); **< 300 KB** each.
- Descriptive lowercase-kebab filenames.

> To show a real image, set the `src` of an entry in that edition's `gallery` array in
> `src/i18n/locales/{nl,en}.json`, e.g.
> `{ "src": "/images/editions/2025/winner.jpg", "alt": "Winning team" }`.
> Leave `src` empty (`""`) to keep the placeholder caption tile.
