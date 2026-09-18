# Cortexa

The Cortexa marketing and product demonstration site, built with Next.js App Router, React, TypeScript, Tailwind CSS, and GSAP. The current visual system follows `DESIGN.md`: black and off-white editorial layouts, Inter typography, sharp geometry, and restrained blue atmosphere.

## Run locally

```sh
npm install
npm run dev
```

Open `http://localhost:3000`. All ten routes are implemented: `/`, `/product`, `/how-it-works`, `/engines`, `/evidence`, `/agencies`, `/pricing`, `/trust`, `/faq`, and `/contact`.

## Verify and build

```sh
npm run lint
npm run build
npx playwright test
```

The browser suite uses installed Google Chrome and starts its own production server on port 3100. It checks all ten routes at screen widths from 320px to 1440px, the product demo, filters, graph selections, forms, FAQ, mobile navigation, links, and metadata. Screenshots and failure traces go to `.playwright-artifacts/`.

## Production

```sh
npm run build
npm run start
```

The canonical production origin defaults to `https://cortexa.co`. Set `NEXT_PUBLIC_SITE_URL` before building if a different origin is needed. Deploy to a host supporting Next.js 16 and connect the domain there. This repository does not manage hosting or DNS.

The upload, analysis, exports, and contact submission remain explicitly labelled demonstrations as specified in the original product brief. No research files or contact details are transmitted. The site has no backend credentials or integrations.

## Design and content

- `app/globals.css`: centralized theme tokens, contrast for light/dark surfaces, component styling, and responsive layouts.
- `components/`: shared layout and page components; state remains in interactive components.
- `components/animations/PageAnimations.tsx`: scoped GSAP entrances and scroll reveals with reduced-motion support.
- `data/`: existing copy, sample records, pricing, and navigation.
- `lib/metadata.ts`: route metadata and production origin.

Keep text and interactions intact when changing the visual theme. SVG diagrams inherit theme tokens; blue is reserved for subtle atmospheric effects and active indicators.
