# Cortexa — line and pixel

The active visual reference is `cortexa-landing_sabari_theme`. It applies to all ten routes and the not-found page.

- Pure white drawing sheets, 24px dot grids, graphite line art, cyanotype accents, and navy blueprint sections.
- Newsreader for headings, body copy, and controls; IBM Plex Mono for annotations and values. Both are self-hosted through `next/font`.
- A fluid, full-width content field with responsive side padding, thin rules, square tiles, blue primary buttons, and underlined secondary actions.
- Graphite represents existing research. Solid blue pixels represent discovered inventions; outlined periwinkle pixels represent Seed opportunities.
- The hero scan runs once. Other content stays static until interaction. Reduced motion immediately presents the completed drawing.

`app/sabari-theme.css` owns the active tokens and shared styling. `components/ui/Primitives.tsx` owns page introductions, section headings, buttons, tiles, and closing calls to action. `components/visuals/DrawingSheet.tsx` and `ScorePortico.tsx` contain the SVG illustrations. Existing layout rules and product interactions are retained.

The draft's unverified metrics and investor-link placeholders are deliberately not published. Product examples retain their sample labels. The original routes and interactive product walkthrough remain available.

Verification: `npm run lint`, `npm run build`, and `npx playwright test`. Browser checks cover all routes at widths from 320px through 1440px, plus menus, filters, the walkthrough, evidence records, FAQs, and form validation.
