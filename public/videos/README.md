# Achtergrondvideo

Plaats hier de achtergrondvideo voor de homepage.

## Verwacht bestand

- **Bestandsnaam:** `hero-web.mp4` (de voor het web gecomprimeerde versie).
- Wordt in de code aangeroepen als `/videos/hero-web.mp4` (zie `src/components/VideoHero.tsx`).

## Aanbevolen specificaties

- Formaat: **MP4 (H.264)** — breedst ondersteund door browsers.
- Resolutie: **1920×1080** (of 1280×720 voor een kleiner bestand).
- Duur: een **naadloze loop van ~10–30 seconden**.
- **Geen audio** (de video speelt automatisch en gedempt af).
- Houd het bestand klein (idealiter **< 10 MB**) zodat de pagina snel laadt.

## Optioneel: poster-afbeelding

Plaats een `hero-poster.jpg` (eerste frame van de video) en geef die mee aan de
component via de `poster`-prop. Deze wordt getoond terwijl de video laadt.

## Tips om te comprimeren (met ffmpeg)

```bash
ffmpeg -i bron.mp4 -vf "scale=1280:-2,fps=24" -c:v libx264 -crf 30 -preset slow -an -movflags +faststart hero-web.mp4
```
