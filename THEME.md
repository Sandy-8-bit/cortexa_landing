# Cortexa — line and pixel

The active visual reference is `cortexa-landing_sabari_theme`. It applies to all ten routes and the not-found page.

- One bordered 1360px sheet on a dotted drafting table, with registration crosses where section rules meet the frame. White sections, near-black (#0c0c0e) contrast sections, one blue (#1a4bff).
- Inter for all text (nothing under 13px); IBM Plex Mono only for the `[ 02 ]` numbers in section index rows. Both are self-hosted through `next/font`.
- Isometric line drawings of research sheets and files, blue pixel cubes for inventions, flat pixel bar charts for timelines and scores. No architectural drawings, few icons.
- Graphite represents existing research. Solid blue pixels represent discovered inventions; outlined periwinkle pixels represent Seed opportunities.
- The hero scan runs once. Other content stays static until interaction. Reduced motion immediately presents the completed drawing.

`app/sabari-theme.css` owns the active tokens and shared styling. `components/ui/Primitives.tsx` owns page introductions, section headings, buttons, tiles, and closing calls to action. `components/visuals/DrawingSheet.tsx` and `ScorePortico.tsx` contain the SVG illustrations. Existing layout rules and product interactions are retained.

The draft's unverified metrics and investor-link placeholders are deliberately not published. Product examples retain their sample labels. The original routes and interactive product walkthrough remain available.

Verification: `npm run lint`, `npm run build`, and `npx playwright test`. Browser checks cover all routes at widths from 320px through 1440px, plus menus, filters, the walkthrough, evidence records, FAQs, and form validation.
