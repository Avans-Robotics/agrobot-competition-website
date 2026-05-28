# Achtergrondvideo

Plaats hier de achtergrondvideo voor de homepage.

## Verwacht bestand

- **Bestandsnaam:** `hero.mp4`
- Wordt in de code aangeroepen als `/videos/hero.mp4` (zie `src/components/VideoHero.tsx`).

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
ffmpeg -i bron.mp4 -vf "scale=1920:-2" -c:v libx264 -crf 26 -preset slow -an hero.mp4
```
