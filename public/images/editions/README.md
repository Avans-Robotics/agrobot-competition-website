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

> Note: the gallery currently renders placeholder caption tiles from each edition's
> `gallery` array in `src/i18n/locales/{nl,en}.json`. To show real images, the `gallery`
> entries (and the component) need to carry an image path (ask Claude to wire this up).
