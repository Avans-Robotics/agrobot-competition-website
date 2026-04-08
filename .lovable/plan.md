

# Agrobotcompetitie Website

## Design Systeem
- **Kleuren**: Donkergroen (#1a3c2a), middengroen (#2d5a3d), mintgroen accent (#2dd4a8), lichtmint (#73ffb8), plus wit/lichtgrijs achtergronden
- **Typografie**: Sora voor koppen, Manrope voor bodytekst
- **Stijl**: Clean, moderne tech-uitstraling met groene natuur-accenten. Afgeronde hoeken, subtiele schaduwen, ruime whitespace. Full-width secties met zachte kleurovergangen.

## Pagina's

### 1. Homepage
- **Hero sectie**: Grote kop "Doe mee aan de Agrobotcompetitie", subtitel over innovatie in landbouw, CTA-knoppen ("Schrijf je in" / "Meer info"), achtergrondpatroon met subtiel groen gradient
- **Waarom meedoen**: 3-4 kaarten met iconen (teamwork, technologie, prijzen, ervaring)
- **Video sectie**: Embedded YouTube-videoplayer met placeholder (later te vullen met echte URLs)
- **Sfeerbeelden**: Stockfoto-secties met placeholder-afbeeldingen van robots/landbouw/studenten
- **CTA-banner**: Afsluiting met "Klaar om mee te doen?" en inschrijfknop

### 2. Regels & Programma
- **Programma-overzicht**: Tijdlijn/stappenplan van de competitie
- **Regels**: Overzichtelijke lijst met iconen
- **Downloads**: Sectie voor PDF-downloads (met placeholder download-knoppen)

### 3. Inschrijven (AIDA-opbouw)
- **Attention**: Pakkende hero met statistieken en visuele impact
- **Interest**: Uitleg over de competitie, wat je leert, wat je wint
- **Desire**: Testimonials/quotes, foto's van eerdere edities
- **Action**: 
  - Datums en deadlines duidelijk weergegeven
  - Uitleg over minoren (waarom via een minor, hoe het werkt)
  - Overzicht van relevante KOM-minoren met externe links
  - Inschrijfformulier: naam, e-mail, opleiding, geselecteerde minor (dropdown), motivatie (optioneel)
  - Formuliervalidatie met duidelijke foutmeldingen

### 4. Contact
- **Contactformulier**: Naam, e-mail, onderwerp, bericht met validatie
- **Contactgegevens**: Placeholder voor adres, e-mail, telefoonnummer
- **Kaart-placeholder**: Ruimte voor eventuele locatie-info

### 5. FAQ
- **Accordion-stijl FAQ**: Veelgestelde vragen in uitklapbare secties
- **Categorieën**: Doelen & thema's, Praktische info, Achtergrondinformatie
- **Inspiratie-sectie**: Ruimte voor extra video's/foto's van eerdere edities

## Navigatie & Layout
- **Vaste navbar**: Logo-placeholder links, navigatielinks rechts, "Inschrijven" als groene CTA-knop
- **Mobiel responsive**: Hamburger-menu op kleinere schermen
- **Footer**: Links naar alle pagina's, contactinfo, sociale media placeholders
- **Smooth scroll**: Vloeiende navigatie tussen secties

## Technisch
- React Router voor 5 pagina's (/, /regels, /inschrijven, /contact, /faq)
- Formuliervalidatie met Zod
- Responsive design (mobile-first)
- Toast-notificaties bij formulierinzendingen
- YouTube embed component (herbruikbaar)

