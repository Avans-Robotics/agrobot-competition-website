export type GalleryImage = { src: string; alt: string };

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Derive readable alt text from a filename, e.g. "winning-team_2025.jpg" -> "winning team 2025".
// Opaque names (UUIDs / random hashes) carry no meaning, so treat them as decorative (empty alt).
const toAlt = (path: string): string => {
  const base = path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "";
  if (UUID_RE.test(base) || /^[0-9a-f]{16,}$/i.test(base)) return "";
  return base.replace(/[-_]+/g, " ").trim();
};

const byPath = (a: [string, unknown], b: [string, unknown]) =>
  a[0].localeCompare(b[0], undefined, { numeric: true });

// All images dropped into src/assets/images/landing/ — shown in the homepage impression grid.
const landingModules = import.meta.glob("../assets/images/landing/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const landingImages: GalleryImage[] = Object.entries(landingModules)
  .sort(byPath)
  .map(([path, src]) => ({ src, alt: toAlt(path) }));

// All images dropped into src/assets/images/editions/<year>/ — shown on the editions page.
const editionModules = import.meta.glob("../assets/images/editions/*/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const editionImages = (year: string): GalleryImage[] =>
  Object.entries(editionModules)
    .filter(([path]) => path.includes(`/editions/${year}/`))
    .sort(byPath)
    .map(([path, src]) => ({ src, alt: toAlt(path) }));
