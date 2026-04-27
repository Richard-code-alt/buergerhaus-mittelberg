# Bürgerhaus Mittelberg — Website

Statische Hochzeits- und Eventlocation-Website. Astro 5, Vanilla CSS, gehostet auf Vercel.

## Tech-Stack

- **Framework**: Astro 5 (statisch, kein JS im Output außer kleinen Inline-Scripts)
- **Styling**: Vanilla CSS mit Custom Properties (kein Tailwind, kein Framework)
- **Fonts**: Anton, Fraunces, Caveat — selfhosted via @fontsource (DSGVO-konform)
- **Sitemap**: @astrojs/sitemap (automatisch generiert)
- **Tracking**: GA4 mit Consent Mode v2, lazy-loaded nach User-Einwilligung
- **Cookie-Consent**: eigener, schlanker Banner-Code (kein 3rd-party-Tool)
- **Karte**: OpenStreetMap, Click-to-Load (DSGVO)
- **Formular**: Jotform-iframe-Embed (lazy)

## Lokal entwickeln

Voraussetzung: Node.js ≥ 20.

```bash
npm install
npm run dev
```

Server läuft auf <http://localhost:4321>.

## Build & Preview

```bash
npm run build     # Static export nach ./dist
npm run preview   # Preview des Builds
```

## Deployment auf Vercel

1. GitHub-Repo erstellen, Code pushen.
2. Auf vercel.com mit GitHub einloggen, „New Project" → Repo wählen.
3. Framework: Astro (autodetect).
4. Environment Variables setzen (siehe `.env.example`):
   - `PUBLIC_GA4_ID` — Measurement-ID aus Google Analytics 4
   - `PUBLIC_JOTFORM_ID` — Form-ID aus Jotform
5. Deploy klicken.
6. Custom Domain anbinden:
   - In Vercel Project → Settings → Domains → `www.buergerhaus-mittelberg.de` und `buergerhaus-mittelberg.de` hinzufügen.
   - Bei IONOS DNS:
     - **CNAME** `www` → `cname.vercel-dns.com.`
     - **A-Record** `@` (Root) → Vercel-IP, die im Vercel-UI angezeigt wird (typischerweise `76.76.21.21`)
     - **MX-Records bleiben unverändert** (Microsoft 365 läuft weiter!)
   - Vercel verifiziert die Domain (5–60 Minuten), SSL-Zertifikat wird automatisch ausgestellt.

## Inhaltspflege

Ja, später per Decap CMS (`/admin/`). Aktuell sind die Texte hardcoded in den Astro-Pages
unter `src/pages/`. Änderungen → Code-Edit → commit → Vercel deployt automatisch.

### Platzhalter, die noch ersetzt werden müssen

Suche im Repo nach `{{` — alle Stellen mit Platzhaltern wie `{{PREIS_PAKET_FESTSAAL}}` oder
`{{FIRMENNAME_RECHTLICH}}` werden ersetzt, sobald die Inputs vom Inhaber vorliegen.

Komplette Liste siehe `docs/01-content.md` Abschnitt „To-Do-Liste — Inputs vom Freund".

## Brand

- Primary Blue: `#206090`
- Cream: `#faf7f2`
- Brass-Akzent: `#b8945a`
- Display-Font: Anton (matched dem Logo)
- Body-Font: Fraunces Variable (warm, Editorial-Serif)
- Skript-Akzent: Caveat Variable

CSS-Tokens in `src/styles/global.css`.

## Struktur

```
buergerhaus-mittelberg/
├── public/                 # Statische Assets
│   ├── logo.png
│   ├── favicon.svg
│   ├── robots.txt
│   └── humans.txt
├── src/
│   ├── components/         # Header, Footer, SEO, CookieBanner, ImagePlaceholder
│   ├── layouts/            # BaseLayout (HTML-Wrap, Meta, GA4)
│   ├── pages/              # Eine Datei pro Route
│   │   ├── index.astro
│   │   ├── raeume.astro
│   │   ├── hochzeit.astro
│   │   ├── catering.astro
│   │   ├── galerie.astro
│   │   ├── anfragen.astro
│   │   ├── anfahrt.astro
│   │   ├── ueber-uns.astro
│   │   ├── datenschutz.astro
│   │   └── impressum.astro
│   └── styles/
│       └── global.css      # Brand-Tokens, Typografie, Layout-Primitives
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## SEO

- Meta-Titles und -Descriptions in jeder Page-Frontmatter
- Open Graph & Twitter Cards
- JSON-LD Structured Data (LocalBusiness, EventVenue, FAQPage)
- Sitemap automatisch via `@astrojs/sitemap`
- Canonical URLs
- `robots.txt` und `humans.txt`

## Performance-Ziele

- Lighthouse: 95+ in allen vier Kategorien
- Core Web Vitals: alle grün
- Bundle-Größe: <50 KB JS pro Seite (nur Inline-Scripts)
- Static, keine SSR

## Lizenz & Urheber

Privater Code für Bürgerhaus Mittelberg. Logo und Bilder: © Bürgerhaus Mittelberg.
