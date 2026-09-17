# Cortexa — Production Website Build Specification

## 0. Purpose

Build the complete Cortexa marketing/product website shown in the supplied `cortexa.html` reference, but rebuild it as a production-ready **Next.js + TypeScript + Tailwind CSS** application.

The supplied HTML is the source of truth for:
- page/content structure
- copy
- interaction concepts
- product-demo behavior
- evidence graph
- opportunity data
- agency docket
- pricing
- trust/data messaging
- FAQ
- footer/navigation
- animation intent

The supplied reference currently uses Newsreader, IBM Plex Sans, and IBM Plex Mono. For this rebuild, **use Poppins as the primary font throughout the website**, while retaining a monospace treatment where the reference uses technical labels.

Reference content includes the Cortexa title/tagline and dark visual system. The original page title is `Cortexa — Your research has more to say.`.

---

# 1. Required technology

Use:

- Next.js latest stable version
- App Router
- TypeScript
- Tailwind CSS
- GSAP
- GSAP ScrollTrigger
- `@gsap/react` where useful
- Lucide React or another lightweight icon library when an icon is required
- React 19-compatible patterns
- ESLint
- Prettier
- strict TypeScript
- semantic HTML
- accessible interactive controls

Do NOT use:
- plain HTML pages
- giant monolithic React components
- inline JavaScript copied from the original HTML
- inline `<style>` blocks for page styling
- hash-based routing
- one enormous `page.tsx`
- duplicated card markup when data-driven rendering is possible

The implementation must be component-based and maintainable.

---

# 2. Project architecture

Use this structure:

```text
cortexa/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── product/
│   │   └── page.tsx
│   ├── how-it-works/
│   │   └── page.tsx
│   ├── engines/
│   │   └── page.tsx
│   ├── evidence/
│   │   └── page.tsx
│   ├── agencies/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── trust/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx
│   │   ├── MobileNavigation.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── PageContainer.tsx
│   │   └── Section.tsx
│   │
│   ├── branding/
│   │   └── CortexaLogo.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── TechnicalLabel.tsx
│   │   ├── Metric.tsx
│   │   ├── Badge.tsx
│   │   ├── StatusBadge.tsx
│   │   ├── Divider.tsx
│   │   ├── Toast.tsx
│   │   ├── Reveal.tsx
│   │   └── ReducedMotion.tsx
│   │
│   ├── home/
│   │   ├── HomePage.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ResearchChaosSection.tsx
│   │   ├── TransformationSection.tsx
│   │   ├── PipelineSection.tsx
│   │   ├── PipelineNavigation.tsx
│   │   ├── PipelineVisual.tsx
│   │   ├── HarvestSeedSection.tsx
│   │   ├── VerdictSection.tsx
│   │   ├── OpportunityMapSection.tsx
│   │   ├── OpportunityFilters.tsx
│   │   ├── OpportunityCard.tsx
│   │   ├── PersonaSection.tsx
│   │   └── FinalCtaSection.tsx
│   │
│   ├── product/
│   │   ├── ProductPage.tsx
│   │   ├── ProductDemo.tsx
│   │   ├── ProductDemoHeader.tsx
│   │   ├── ProductDemoControls.tsx
│   │   ├── UploadStep.tsx
│   │   ├── ProcessingStep.tsx
│   │   ├── CandidatesStep.tsx
│   │   ├── EvidenceStep.tsx
│   │   ├── RadarVerdictStep.tsx
│   │   ├── HarvestSeedStep.tsx
│   │   ├── OpportunityMapStep.tsx
│   │   └── ExportStep.tsx
│   │
│   ├── how/
│   │   ├── HowItWorksPage.tsx
│   │   └── HowStage.tsx
│   │
│   ├── engines/
│   │   ├── EnginesPage.tsx
│   │   ├── HarvestEngine.tsx
│   │   ├── SeedEngine.tsx
│   │   └── EngineUseCases.tsx
│   │
│   ├── evidence/
│   │   ├── EvidencePage.tsx
│   │   ├── EvidenceGraph.tsx
│   │   ├── EvidencePanel.tsx
│   │   └── EvidenceConnection.tsx
│   │
│   ├── agencies/
│   │   ├── AgenciesPage.tsx
│   │   ├── AgencyDocket.tsx
│   │   ├── AgencyFilters.tsx
│   │   ├── MattersTable.tsx
│   │   ├── AgencyFeatureGrid.tsx
│   │   └── MatterLifecycle.tsx
│   │
│   ├── pricing/
│   │   ├── PricingPage.tsx
│   │   ├── PricingGrid.tsx
│   │   ├── PricingCard.tsx
│   │   └── DocumentDefinition.tsx
│   │
│   ├── trust/
│   │   ├── TrustPage.tsx
│   │   ├── TrustFeatureGrid.tsx
│   │   └── KnownLimits.tsx
│   │
│   ├── faq/
│   │   ├── FaqPage.tsx
│   │   └── FaqAccordion.tsx
│   │
│   ├── contact/
│   │   ├── ContactPage.tsx
│   │   └── ContactForm.tsx
│   │
│   └── animations/
│       ├── useGsapReveal.ts
│       ├── useGsapCounter.ts
│       ├── useGsapParallax.ts
│       ├── useGsapStagger.ts
│       ├── useReducedMotion.ts
│       └── gsapConfig.ts
│
├── data/
│   ├── candidates.ts
│   ├── pipeline.ts
│   ├── agencyMatters.ts
│   ├── faq.ts
│   ├── howItWorks.ts
│   ├── evidence.ts
│   ├── pricing.ts
│   └── navigation.ts
│
├── lib/
│   ├── utils.ts
│   └── metadata.ts
│
├── public/
│   ├── icons/
│   └── images/
│
├── styles/
│   └── globals.css
│
├── DESIGN.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

### Important architecture rule

The files inside `app/**/page.tsx` must be extremely small.

Example:

```tsx
import { HomePage } from '@/components/home/HomePage'

export default function Page() {
  return <HomePage />
}
```

The same pattern applies to every route.

Business/data/content should live in `data/`.

Reusable visual components should live in `components/`.

Do not put large JSX sections directly inside route files.

---

# 3. Routes

Create these routes:

```text
/
 /product
 /how-it-works
 /engines
 /evidence
 /agencies
 /pricing
 /trust
 /faq
 /contact
```

Navigation:

```text
Product
How it works
Engines
Evidence
For agencies
Pricing
Start with Cortexa
```

Header must be fixed/sticky.

Desktop:
- logo left
- navigation right
- primary CTA at the end

Mobile:
- logo left
- MENU button right
- full-width dropdown/mobile navigation
- accessible `aria-expanded`
- close navigation after route navigation

---

# 4. Global visual direction

## Overall style

The website must feel:

- premium
- technical
- intelligent
- editorial
- sophisticated
- restrained
- research-oriented
- enterprise-ready
- dark
- modern
- highly polished

Do not make it look like a generic SaaS template.

Avoid:
- excessive rounded cards
- cartoonish illustrations
- giant gradients
- excessive glow
- excessive animation
- generic purple AI aesthetics
- stock photography
- unnecessary 3D

The reference is a dark technical/editorial product experience.

---

# 5. Color system

Use Tailwind theme tokens/CSS variables.

Suggested tokens:

```text
background:
#07090B

background-secondary:
#0C1013

panel:
#11161A

foreground:
#EEF2F4

foreground-secondary:
#9AA6AD

foreground-muted:
#6B767D

border:
rgba(255,255,255,0.10)

border-soft:
rgba(255,255,255,0.055)

seed:
#4FE3C1

harvest:
#F0A44A
```

Primary accent:
`#4FE3C1`

Secondary Harvest accent:
`#F0A44A`

Use Seed for:
- CTA
- active states
- evidence links
- scores
- progress
- important highlights

Use Harvest orange sparingly for:
- Harvest engine
- emerging opportunities
- agency/product concepts that specifically require Harvest

---

# 6. Typography

Use **Poppins**.

Import through `next/font/google`.

Primary:
```text
Poppins
```

Use:
- 300 for body/editorial text
- 400 for normal UI
- 500 for emphasized UI
- 600 only where necessary

Technical labels should use a monospace font such as:
```text
IBM Plex Mono
```
or a system monospace stack.

Do not use Newsreader from the source implementation.

The entire website should visually use Poppins.

Typography should be responsive using Tailwind clamp-style utilities or responsive classes.

Large headings should have:
- tight line-height
- slight negative tracking
- restrained width
- strong hierarchy

---

# 7. Global layout

Maximum content width:
approximately `1180px`.

Desktop horizontal padding:
approximately `28px`.

Mobile:
approximately `20px`.

Sections should have generous vertical spacing.

Use a reusable:

```tsx
<PageContainer />
```

and:

```tsx
<Section />
```

component rather than repeating container classes everywhere.

---

# 8. Accessibility

Production-ready accessibility is mandatory.

Implement:

- semantic HTML
- proper heading hierarchy
- keyboard navigation
- visible focus states
- accessible buttons
- `aria-expanded`
- `aria-controls`
- accessible accordion state
- accessible mobile menu
- descriptive labels
- form labels
- error messages
- sufficient contrast
- reduced motion support

Use:

```css
@media (prefers-reduced-motion: reduce)
```

and GSAP's media matching so animations are disabled/reduced.

Never make content dependent on animation.

---

# 9. Animation system

Use GSAP + ScrollTrigger.

Create centralized animation utilities.

Required animation principles:

- animations should be subtle
- animations should support comprehension
- animations should not slow navigation
- animation should not cause layout shift
- respect reduced motion
- use `gsap.context()` or `useGSAP`
- clean up ScrollTriggers when components unmount
- avoid global unmanaged timelines

Use `useGSAP` for client components.

---

# 10. Required animation behaviors

## 10.1 Header

On initial page load:
- subtle opacity/translate entrance
- backdrop blur
- fixed position

On scroll:
- header can become slightly more opaque
- no dramatic resizing

Mobile menu:
- animate height/opacity
- stagger links slightly
- use GSAP or CSS transition
- close cleanly

---

# 11. Home page

## Hero

Exact copy:

```text
Your research
has more
to say.
```

Subtitle:

```text
Find the inventions hiding inside it.
```

Buttons:

```text
Explore Cortexa
See how it works
```

Metadata:

```text
SCROLL
PDF · DOCX · LATEX · GIT REPOS
USPTO · WIPO · EPO · ARXIV
```

### Hero visual

Create a subtle grid background.

Use:
- thin grid lines
- radial mask/fade
- dark background
- no heavy gradient

### Hero animation

On load:

1. heading lines start below their visible position
2. each line rises into position
3. stagger around 100–150ms
4. subtitle fades/slides in
5. CTA fades/slides in
6. metadata appears last

Use GSAP timeline.

Suggested timing:
- heading: 0.8–1.0 sec
- stagger: 0.12–0.16 sec
- supporting elements: 0.6–0.8 sec

---

# 12. Research chaos section

Heading:

```text
Research is everywhere.
```

Paragraph:

```text
Your papers. Your code. Your half-finished notebooks and last year's grant report. Every one of them is a source of invention — and none of them are labelled that way.
```

Visualize floating documents:

```text
thesis.pdf
results_v3.docx
train.py
grant_report.pdf
notes.tex
cell_data.ipynb
review_2024.pdf
anneal_study_v4.pdf
repo/README
fig_final.pdf
```

Each document should look like a small technical paper/file card.

Animation:
- documents fade in with random stagger
- subtle floating motion
- slight rotation
- no excessive movement
- pause/disable motion for reduced-motion users

On mobile:
- fewer visible document cards
- smaller cards
- keep composition readable

---

# 13. Transformation section

Heading:

```text
Upload your research.
Cortexa listens.
See what emerges.
```

Paragraph:

```text
Documents go in. Invention candidates come out — each one attached to the evidence that earned it a place on the list.
```

Create an SVG-based transformation visualization:

```text
SOURCE DOCUMENTS
       ↓
   CORTEXA CORE
       ↓
CANDIDATES
```

Visual elements:
- document nodes
- connecting paths
- central orb/core
- output candidate cards

Animation:
- source-to-core paths draw using strokeDasharray/strokeDashoffset
- core pulses
- orbital points rotate slowly
- output cards appear after paths
- slight scale/bounce on candidate appearance

---

# 14. Pipeline / four-pass section

Heading:

```text
Cortexa looks deeper.
```

Supporting text:

```text
Four passes over the same material, each one asking a harder question.
```

Passes:

### PASS 01 · INGEST

Title:

```text
Understand your source
```

Description:

```text
Domain, method, authorship, references, technical depth. Before anything is extracted, Cortexa works out what kind of document it is reading.
```

Output:

```text
OUTPUT · 14 documents classified · 3 domains · 412 references resolved
```

Visual:
- document
- scanning line
- technical metadata

Animation:
- vertical scanline
- document appears
- metadata fades in

---

### PASS 02 · EXTRACT

Title:

```text
Find what's hidden inside
```

Description:

```text
Novel claims, unusual combinations of known elements, and unexpected applications. The text fragments, and the inventive parts surface with their source paragraph attached.
```

Output:

```text
OUTPUT · 12 candidates · 38 claim fragments · each mapped to a page and line
```

Visual:
show technical fragments such as:

```text
gradient
anneal
interface
dendrite
separator
suppress
layered
boundary
in-situ
drift
protocol
lamination
```

Some words should be highlighted with Seed.

Animation:
- fragments appear sequentially
- highlighted fragments float subtly
- avoid excessive movement

---

### PASS 03 · EVIDENCE

Title:

```text
See what already exists
```

Description:

```text
Three layers of prior art: patent families, published literature, and public code. Records that argue against a candidate surface as prominently as records that support it.
```

Output:

```text
OUTPUT · 11 records · 4 patents · 3 papers · 2 repos · 2 counter-records
```

Visual:
central node connected to:
- USPTO
- arXiv
- WIPO
- GitHub

Animate:
- edges draw
- nodes scale in
- nodes pulse very subtly

---

### PASS 04 · SCORE

Title:

```text
Turn evidence into insight
```

Description:

```text
Five dimensions, each scored against the retrieved records and each carrying its own citations. The number summarises the argument; it never replaces it.
```

Output:

```text
OUTPUT · index 87 · confidence 0.86 · limiting axis: scope
```

Show:
```text
87
PATENTABILITY INDEX · CONFIDENCE 0.86
```

Animate counter from `0` to `87`.

---

# 15. Pipeline interaction

Desktop:
- left side contains sticky navigation
- right side contains vertically stacked stages

Navigation:

```text
01 Ingest
02 Extract
03 Evidence
04 Score
```

Active item:
- Seed border
- Seed technical number
- foreground text

Clicking a navigation item should scroll to that stage.

ScrollTrigger should detect active stage.

Mobile:
- do not use sticky desktop navigation
- show each stage sequentially
- show stage number/title above each visual
- remove unnecessary sticky behavior

---

# 16. Harvest / Seed section

Heading:

```text
Two ways to read the same work.
```

Supporting text:

```text
Harvest looks backward at what you've already built. Seed looks forward at what it could become.
```

Two panels.

## HARVEST

```text
What's already here?
```

Steps:

```text
Research — papers, code, reports
Candidates — inventions identified
Evidence — prior art retrieved
Ranking — ordered by strength
```

## SEED

```text
What's possible next?
```

Steps:

```text
Research + roadmap
Opportunity seeds — unclaimed directions
Invention lattice — related filings
Strategy — a portfolio, not a list
```

Visual styling:
- Harvest uses orange accent
- Seed uses teal accent

Mobile:
- stack panels
- remove left border and use top divider

---

# 17. Verdict section

Display:

```text
87
VERDICT · HIGH PATENTABILITY
```

Heading:

```text
A number isn't the whole story.
```

Paragraph:

```text
Every axis carries its own evidence, and every piece of evidence points back to a source you can open.
```

Axes:

```text
Novelty              92
Non-obviousness      84
Enablement           88
Scope                79
Commercial pull      90
```

Create animated horizontal bars.

Animation:
- width starts at 0
- animate when entering viewport
- duration around 1.1–1.3 seconds

---

# 18. Opportunity map

Heading:

```text
Meet your opportunity map.
```

Metrics:

```text
12 Candidates found
4 High potential
5 Emerging
3 Adjacent / defensive
```

Filters:

```text
ALL
HIGH POTENTIAL
EMERGING
ADJACENT
```

Candidate data:

```text
1. Gradient-annealed electrolyte interface
Description: A layered anneal that suppresses dendrite nucleation at the separator boundary.
Score: 87
Category: high

2. Self-calibrating impedance probe
Description: In-situ probe that re-baselines against its own drift between cycles.
Score: 81
Category: high

3. Sparse-sampling cycling protocol
Description: Cuts qualification time by sampling where the degradation signal actually lives.
Score: 78
Category: high

4. Binder-free cathode lamination
Description: Mechanical interlock replaces polymer binder in thick-film cathodes.
Score: 74
Category: high

5. Thermal runaway precursor signature
Description: Acoustic precursor detected 40 minutes before thermal event onset.
Score: 69
Category: emerging

6. Electrode geometry search loop
Description: Closed-loop design search over rib spacing and channel depth.
Score: 66
Category: emerging

7. Recycled-feedstock purity index
Description: A single index that predicts cell yield from reclaimed material.
Score: 63
Category: emerging

8. Low-temperature formation cycle
Description: Formation at 12 °C with no capacity penalty across 400 cycles.
Score: 61
Category: emerging

9. Cross-chemistry state estimator
Description: One estimator that transfers between LFP and NMC packs.
Score: 58
Category: emerging

10. Fixture for warped-cell testing
Description: Defensive filing around the test rig itself.
Score: 52
Category: adjacent

11. Data schema for cell provenance
Description: Adjacent claim covering the traceability record format.
Score: 48
Category: adjacent

12. Automated teardown labelling
Description: Vision-assisted labelling of teardown imagery.
Score: 44
Category: adjacent
```

Supporting text:

```text
Every candidate is ranked by potential. Every score is traceable back to the paragraph it came from.
```

Interactions:
- filter buttons update cards
- cards animate when filter changes
- score confidence bar reflects score
- cards lift subtly on hover
- no layout-breaking animations

---

# 19. Persona section

Heading:

```text
Built for people who turn research into what's next.
```

Cards:

### Researchers

```text
Find what your work could become. See patent angles in research you finished two years ago and filed away.
```

### Reviewers

```text
See the evidence behind every opportunity, so a decision to drop an idea is as defensible as a decision to file.
```

### Patent teams

```text
Automate first-pass screening across a whole department. Spend attorney hours on strategy instead of triage.
```

---

# 20. Final home CTA

Heading:

```text
Your next patent may already be in your research.
```

Buttons:

```text
Start with Cortexa
See how it works
```

Animate:
- heading reveal
- CTA reveal
- subtle upward movement

---

# 21. Product page

Route:

```text
/product
```

Technical label:

```text
PRODUCT
```

Heading:

```text
Don't read about it. Run it.
```

Description:

```text
This is the actual sequence, with sample data from a materials-science lab. Start at upload and follow it through to export.
```

Build an interactive product demo.

Demo header:
```text
STEP 01 · UPLOAD
1 / 8
```

Steps:

```text
1 UPLOAD
2 PROCESS
3 CANDIDATES
4 EVIDENCE
5 FIVE-AXIS VERDICT
6 HARVEST vs SEED
7 OPPORTUNITY MAP
8 EXPORT
```

Controls:

```text
Back
Next step
Restart
```

---

# 22. Product upload step

Copy:

```text
Upload your research. Papers, code, everything.
```

Drop area:

```text
DROP FILES OR CLICK TO SIMULATE
PDF · DOCX · TEX · .ipynb · git remote — batches of 100+
```

Simulated files:

```text
anneal_study_v4.pdf
cell_data.ipynb
grant_report.pdf
repo: lab/anneal-ctl
thesis_ch3.tex
```

On click:
- display files
- show check marks
- highlight drop zone
- animate file rows in

This is a demo only.

---

# 23. Product processing step

Copy:

```text
Analysing 14 documents.
```

Progress messages:

```text
Parsing documents…
Extracting candidates…
Searching prior art…
Scoring five axes…
Building opportunity map…
```

At completion:

```text
Complete — 12 candidates.
```

Animate progress bar from 0 to 100%.

---

# 24. Product candidates step

Copy:

```text
Here's what we found — 12 candidates, ordered by confidence.
```

Show first four candidate cards from candidate data.

Animate cards sequentially.

---

# 25. Product evidence step

Copy:

```text
Here's why we think so. Candidate 01 — Gradient-annealed electrolyte interface
```

Evidence cards:

```text
PATENT
US 11,4xx,xxx B2
Stacked anneal without the gradient step — closest art.

LITERATURE
J. Power Sources, 2023
Gradient anneal in a different chemistry. Mixed signal.

CODE
lab/anneal-ctl
Controller implementing the ramp. Supports enablement.
```

---

# 26. Product five-axis verdict

Display radar chart with:

```text
Novelty 92
Non-obviousness 84
Enablement 88
Scope 79
Commercial 90
```

Overall:
```text
87
FIVE-AXIS VERDICT
```

Copy:

```text
Novelty 92 · Non-obviousness 84 · Enablement 88 · Scope 79 · Commercial 90. Weakest axis is scope: the claim as drafted reads narrowly on electrode geometry.
```

Use SVG or a lightweight chart implementation.

Animate radar polygon from center outward.

---

# 27. Harvest vs Seed product step

Tabs:

```text
HARVEST
SEED
```

Harvest:
- candidate list

Seed:
- invention lattice

Lattice nodes:

```text
CORE
CONTINUATION
PLATFORM
SYSTEM
ADJACENT
```

Draw SVG connections.

Animate nodes into place.

---

# 28. Opportunity map product step

Copy:

```text
Your complete invention landscape.
```

Metrics:

```text
12 Candidates
04 High potential
05 Emerging
03 Adjacent
```

Display opportunity cards.

---

# 29. Export step

Copy:

```text
Take it with you.
```

Export cards:

### PDF brief

```text
Ranked candidates, verdicts, and citations, formatted for review.
```

### JSON run

```text
Full analysis object including provenance and model versions.
```

### CSV table

```text
Flat scores for your own dashboards and portfolio tools.
```

These are demo interactions.

Clicking one should show a toast:

```text
Generated Patent brief.pdf
```

or the corresponding file name.

Do not pretend an actual backend export exists unless implemented.

---

# 30. How it works page

Technical label:

```text
HOW IT WORKS
```

Heading:

```text
Seven stages, start to strategy.
```

Seven stages:

### 01 — Bring your research

```text
Upload PDFs, DOCX, LaTeX projects, and Git repositories — in batches of a hundred or more. Nothing needs to be tidied first.
```

### 02 — We understand the source

```text
Each document is read for research type and domain, author context and references, technical depth, and early novelty signals.
```

### 03 — Find the inventions

```text
Novel claims and technical contributions, unusual combinations of known elements, and unexpected applications of existing work.
```

### 04 — What already exists?

```text
Three layers of prior art: patent databases (USPTO, WIPO, EPO), published literature (Crossref, arXiv, Scholar), and public code.
```

### 05 — Measure patentability

```text
Five dimensions — novelty, non-obviousness, enablement, scope, and commercial pull — each scored against the retrieved evidence.
```

### 06 — What comes next?

```text
Harvest ranks existing inventions by maturity. Seed proposes new directions from your roadmap and builds the invention lattice.
```

### 07 — Your opportunity map

```text
Explore, filter, drill down, export. The end state is a prioritised set of decisions, ready for patent strategy.
```

Each stage:
- two-column desktop layout
- text left
- visual right
- one-column mobile
- reveal on scroll

---

# 31. Engines page

Technical label:

```text
ENGINES
```

Heading:

```text
Two ways to explore your innovation.
```

## Engine One — Harvest

Heading:

```text
What's already inside?
```

Description:

```text
Find the inventions hiding in research you've already done, understand how mature each one is, and prioritise by impact.
```

Steps:

```text
Research
Candidates
Evidence
Ranking
```

Additional copy:

```text
Maturity runs from early signal to filing-ready. Ranking weighs patentability, commercial pull, and freedom to operate. Output is a prioritised report your review board can work from.
```

## Engine Two — Seed

Heading:

```text
What's possible next?
```

Description:

```text
Point Cortexa at your roadmap as well as your archive, and it proposes directions worth inventing into.
```

Steps:

```text
Research + roadmap
Opportunity seeds
Invention lattice
Strategy
```

Additional copy:

```text
Seeds are generated where your capabilities meet an unclaimed region of the art. The lattice shows how a core filing could extend into continuation, platform, and system claims.
```

---

# 32. Engine use cases

Heading:

```text
When to reach for which
```

Rows:

```text
Use Harvest
before a review cycle, after a grant closes, or when onboarding a new portfolio you've inherited.

Use Seed
during roadmap planning, when entering a new market, or when a competitor's filing changes the landscape.

Use both
on the same corpus — Harvest sets the floor, Seed sets the direction, and the lattice ties them together.
```

---

# 33. Evidence page

Technical label:

```text
EVIDENCE
```

Heading:

```text
Don't just get an answer. Trace it.
```

Supporting copy:

```text
Select any node to open the record behind it.
```

Desktop layout:
- large evidence graph on left
- sticky selected-node panel on right

Mobile:
- graph should remain usable
- panel moves below graph
- SVG must scale correctly
- allow horizontal scrolling only if absolutely necessary; preferably make graph responsive

Root node:

```text
VERDICT · 87
High patentability
```

Description:

```text
The verdict node. Everything below it is what produced this conclusion. Pick a branch to go one level deeper.
```

---

# 34. Evidence graph data

### Patent match

Label:

```text
PATENT MATCH
```

Title:

```text
US 11,4xx,xxx B2
```

Body:

```text
Closest art in the family: a stacked anneal without the gradient step. Cortexa treats the gradient as the distinguishing feature and flags claim 1 as the point of comparison.
```

Meta:

```text
Confidence 0.91 · Retrieved from USPTO full-text · 2026-04-02
```

Sub-records:

```text
Claim 1
Stacked anneal, fixed temperature.

§0042
Describes separator boundary handling.
```

### Publication

Title:

```text
J. Power Sources, 2023
```

Body:

```text
Reports gradient annealing in a different cell chemistry. Supports enablement, weakens novelty slightly — Cortexa scores it as mixed and shows it either way.
```

Meta:

```text
Confidence 0.84 · DOI resolved · Cited 41 times
```

Sub-records:

```text
Fig. 3
Dendrite density vs anneal profile.

Methods
Anneal ramp described in full.
```

### Code repository

Title:

```text
github.com/lab/anneal-ctl
```

Body:

```text
Public controller implementing the ramp. Reduction to practice is documented in commit history and test fixtures, which strengthens the enablement axis.
```

Meta:

```text
Confidence 0.78 · 214 commits · Last push 2026-01-19
```

Sub-records:

```text
ramp.py
Gradient profile implementation.

tests/
Cycle-life regression fixtures.
```

### Market signal

Title:

```text
Three filings in 18 months
```

Body:

```text
Competitor activity in adjacent art is accelerating. This lifts commercial pull and shortens the useful window for filing.
```

Meta:

```text
Confidence 0.72 · Derived from family filing dates
```

Sub-records:

```text
Timeline
Filings clustered Q3 2025 onward.

Assignees
Two cell makers, one supplier.
```

---

# 35. Evidence page closing content

Heading:

```text
The verdict is never isolated.
```

Copy:

```text
Every conclusion connects to evidence. Every piece of evidence traces to a source. Every source is verifiable, dated, and yours to check. That's the whole point — an analysis you can argue with is worth more than one you have to believe.
```

---

# 36. Agencies page

Technical label:

```text
FOR PATENT AGENCIES & IP FIRMS
```

Heading:

```text
Run discovery for every client from one desk.
```

Description:

```text
Separate workspaces per client, a shared docket across all of them, and usage that rolls straight into what you bill. Cortexa does the first pass; your agents spend their hours on the filings worth drafting.
```

Buttons:

```text
Request agency access
See agency pricing
```

---

# 37. Agency docket

Demo heading:

```text
MERIDIAN IP PARTNERS · DOCKET
```

Period:

```text
BILLING PERIOD · SEP 2026
```

Metrics:

```text
9 Active clients
23 Open matters
147 Candidates in review
$18.4k Billable this period
```

Filters:

```text
ALL MATTERS
AWAITING YOUR REVIEW
WITH CLIENT
```

Table columns:

```text
Client / matter
Corpus
Candidates
Top score
Status
Billable
```

Data:

```text
Helion Cell Systems
HCS-2026-014 · Electrolyte interface
48 docs
12
87
Awaiting agent review
$2,880

Helion Cell Systems
HCS-2026-011 · Pack thermal management
31 docs
7
74
With client
$1,860

Northvale University TTO
NV-TTO-0392 · Sparse cycling protocol
120 docs
19
81
Awaiting agent review
$4,100

Northvale University TTO
NV-TTO-0388 · Teardown vision
22 docs
5
52
With client
$980

Praxis Materials
PRX-44 · Binder-free lamination
63 docs + 2 repos
14
78
Awaiting agent review
$3,240

Orbital Sense
OS-2026-07 · Self-calibrating probe
29 docs
9
81
With client
$1,740

Kestrel Robotics
KR-118 · Cross-chemistry estimator
84 docs + 1 repo
11
69
Awaiting agent review
$2,620

Aldine Chemical
ALD-2026-03 · Recycled feedstock index
37 docs
8
63
With client
$1,020
```

Small note:

```text
Sample docket. Matter numbers follow your own scheme; Cortexa never renumbers them.
```

Mobile:
- table becomes horizontally scrollable
- preserve all columns
- do not crush typography

---

# 38. Agency feature cards

### Walled client workspaces

```text
Each client gets its own corpus, key, and audit log. Nothing crosses between them, and a conflict check runs before a new matter can be opened against an existing party.
```

### Usage becomes a line item

```text
Documents analysed, runs completed, and reviewer hours saved are tracked per matter and export as a billing CSV your practice-management system can read.
```

### Reports in your name

```text
Put your firm's mark on the candidate brief. Clients see your analysis and your recommendations, with the evidence trail attached underneath.
```

### Client-facing review links

```text
Send an inventor a single link to confirm or reject candidates. Their responses land back on the matter without another email thread.
```

### Docketing integrations

```text
Two-way sync with common IP management systems, so a candidate promoted to a filing keeps its evidence trail attached to the matter record.
```

### Privilege-aware retention

```text
Set retention per client, purge on matter close, and export the full provenance log if the analysis is ever questioned.
```

---

# 39. Agency lifecycle

Heading:

```text
How a matter moves through the firm
```

Steps:

```text
1 Intake
The client drops a corpus into their workspace, or you connect their Drive or repository.

2 First pass
Harvest runs overnight. Candidates arrive ranked, with prior art already pulled.

3 Agent review
Your agent keeps, parks, or kills each candidate. Every decision is recorded against the matter.

4 Client confirmation
The inventor confirms scope and enablement gaps through a review link.

5 Draft and bill
Survivors go to drafting; the period's usage exports as a billing line per client.
```

Closing CTA:

```text
Bring one client's back catalogue. We'll run it before you sign anything.
```

Button:

```text
Request agency access
```

---

# 40. Pricing page

Technical label:

```text
PRICING
```

Heading:

```text
Priced per corpus, not per seat.
```

Description:

```text
Reviewers, attorneys, and PIs all need to see the same evidence. Charging them each to look at it made no sense to us.
```

Plans:

## LAB

```text
$0
First 25 documents, one run
```

Features:

```text
Harvest engine
Full evidence trail
PDF and CSV export
Single workspace
```

CTA:

```text
Run a corpus
```

## DEPARTMENT

```text
$1,900 /mo
Up to 2,000 documents per month
```

Features:

```text
Harvest and Seed engines
Unlimited reviewers
Roadmap ingestion and invention lattice
Provenance log and audit export
Git and Drive connectors
```

CTA:

```text
Start with Cortexa
```

This is the featured plan.

## AGENCY

```text
$3,400 /mo
Up to 10 client workspaces
```

Features:

```text
Everything in Department
Walled workspaces and conflict checks
Shared docket across all clients
White-label candidate briefs
Per-client billing export
Client review links
```

CTA:

```text
See the agency view
```

## ENTERPRISE

```text
Talk to us
Portfolio scale, private deployment
```

Features:

```text
Private or on-prem deployment
Custom prior-art sources
Docketing and IP-management integrations
SSO, retention controls, DPA
Named support engineer
```

CTA:

```text
Contact sales
```

---

# 41. Pricing explanation

Heading:

```text
What counts as a document?
```

Copy:

```text
One PDF, one DOCX, one LaTeX project, or one repository snapshot. A 400-page thesis counts once. Re-running the same corpus after you've added new material only charges for what's new.
```

---

# 42. Trust page

Technical label:

```text
TRUST & DATA
```

Heading:

```text
Unpublished research needs a careful host.
```

Description:

```text
Most of what you'll upload isn't public yet. Here is exactly what happens to it.
```

Cards:

### Never used for training

```text
Your documents, extracted candidates, and scores are never added to any training set, ours or a vendor's. This is contractual, not a setting.
```

### Encrypted in transit and at rest

```text
TLS 1.3 on the wire, AES-256 on disk, with per-workspace key separation.
```

### You set retention

```text
Keep a corpus indefinitely, or have source files purged the moment a run completes and only the evidence trail retained.
```

### Disclosure-safe by default

```text
Nothing is published, shared, or sent to a patent office by Cortexa. Prior-art searches are issued without exposing your text.
```

### Full provenance log

```text
Every run records source hashes, retrieval queries, sources returned, model versions, and timestamps — exportable for review boards and counsel.
```

### Human judgement stays yours

```text
Cortexa produces evidence and a ranking. It does not file, does not advise, and is not a substitute for a patent attorney.
```

---

# 43. Trust known limits

Heading:

```text
Known limits
```

Copy:

```text
Prior-art coverage is strong for USPTO, EPO, and WIPO, and thinner for some national offices and for non-English filings before 2005. Scores are calibrated estimates, not legal opinions. Where confidence is low, Cortexa says so on the card rather than rounding the number up.
```

---

# 44. FAQ page

Technical label:

```text
QUESTIONS
```

Heading:

```text
Questions worth asking first.
```

FAQ:

### Does Cortexa file patents?

```text
No. It produces candidates, evidence, and rankings. Drafting and filing stay with your attorneys — Cortexa's job is to make sure the right ideas reach them.
```

### How is this different from a prior-art search tool?

```text
A search tool answers a query you already wrote. Cortexa reads your corpus to work out what the queries should be, then runs them and keeps the trail.
```

### What if my research is confidential?

```text
That's the normal case. Uploads are never used for training, prior-art queries don't expose your text, and you can have source files purged after each run.
```

### Can it read code?

```text
Yes. Point it at a repository and it treats commits, tests, and documentation as evidence of reduction to practice alongside the papers.
```

### How accurate are the scores?

```text
They are calibrated estimates, not legal opinions. Treat 87 as 'read this one first', not as 'this will be granted'. Every axis links to the records behind it so you can disagree with the number.
```

### What languages does it handle?

```text
English, German, Japanese, Korean, and Chinese source documents. Prior-art coverage is thinner for non-English filings before 2005.
```

### How long does a run take?

```text
A 25-document corpus finishes in a few minutes. A 2,000-document portfolio usually completes overnight.
```

Accordion:
- one question opens at a time if possible
- plus/minus indicator
- keyboard accessible
- smooth height animation
- reduced motion fallback

---

# 45. Contact page

Technical label:

```text
GET STARTED
```

Heading:

```text
Bring one corpus. We'll show you what's in it.
```

Description:

```text
Send us a folder — a thesis, a year of lab reports, a repository — and we'll run Harvest on it and walk you through the evidence trail.
```

Supporting links:

```text
how it works
data handling notes
```

Form:

```text
Name
Work email
What are you working with?
Anything we should know?
```

Dropdown options:

```text
Academic research group
Corporate R&D
Patent or IP team
Tech transfer office
Something else
```

Textarea placeholder:

```text
Roughly 60 papers and two repos from the last three years.
```

Button:

```text
Request a run
```

Demo note:

```text
This is a demo page — nothing is sent anywhere.
```

Implement proper client-side validation.

Required:
- name
- valid email
- accessible error state

On successful demo submission:
- show toast
- clear relevant fields

Toast:

```text
Request received — we'd be in touch within a day.
```

Do not send data anywhere unless a real backend is intentionally added later.

---

# 46. Footer

Brand:

```text
Cortexa
```

Description:

```text
Invention discovery for research teams. Evidence first, always.
```

Product links:

```text
Walkthrough
How it works
Harvest & Seed
Evidence graph
```

Company links:

```text
For agencies
Pricing
Trust & data
FAQ
Contact
```

Sources:

```text
USPTO · EPO · WIPO
arXiv · Crossref · Scholar
GitHub · GitLab
```

Bottom:

```text
© 2026 Cortexa. Concept site.
Cortexa is not a law firm and does not provide legal advice.
```

---

# 47. Navigation behavior

Use real Next.js routes.

Do NOT reproduce the original hash routing.

Use:

```tsx
<Link href="/product">
```

etc.

Active navigation:
- detect current pathname
- visually highlight current route
- CTA should not appear as ordinary active nav item

Mobile navigation:
- open/close state
- ESC closes menu
- clicking a link closes menu
- clicking outside can close menu
- body scroll should be locked while menu is open if necessary

---

# 48. Reusable Button component

Create:

```tsx
<Button variant="primary" />
<Button variant="ghost" />
<Button size="sm" />
```

Primary:
- Seed background
- dark text
- subtle hover glow
- 1px upward hover transform

Ghost:
- transparent
- border
- Seed border/text on hover

Avoid huge rounded-pill buttons.

Use a small radius, approximately 2–4px, matching the reference.

---

# 49. Cards

Cards should use:
- panel background
- subtle border
- small radius
- generous but controlled padding

Hover:
- border becomes slightly brighter
- translateY approximately -2px to -4px
- no excessive shadow

Cards should be reusable.

---

# 50. Responsive behavior

Breakpoints must cover:

```text
320px
375px
390px
430px
640px
768px
900px
1024px
1280px
1440px+
```

At mobile:
- one-column layouts
- readable typography
- buttons wrap
- graphs scale
- tables scroll horizontally
- sticky desktop interactions become normal flow
- no horizontal page overflow
- nav becomes hamburger
- cards stack
- SVG visuals remain visible
- touch targets minimum approximately 44px

Test at:
- iPhone-sized viewport
- Android-sized viewport
- tablet
- laptop
- large desktop

---

# 51. Performance

Production requirements:

- use `next/font`
- use optimized images
- avoid unnecessary client components
- only components requiring state/browser APIs should use `"use client"`
- lazy-load heavy visual components where appropriate
- clean up GSAP contexts
- avoid continuous expensive animations
- avoid unnecessary rerenders
- use data-driven components
- use `useMemo` only where it actually helps
- do not over-engineer

The marketing text pages should remain mostly server rendered.

Interactive components can be client components.

---

# 52. SEO

Every route needs metadata.

Homepage title:

```text
Cortexa — Your research has more to say.
```

Use suitable descriptions for every page.

Add:
- canonical metadata
- Open Graph metadata
- Twitter/X metadata
- robots metadata
- sitemap
- robots.txt

Create metadata centrally in `lib/metadata.ts`.

---

# 53. Security and production readiness

Do not:
- expose secrets
- hard-code API keys
- pretend demo actions are real backend operations
- use unsafe `dangerouslySetInnerHTML`
- trust form input
- create fake external integrations

If a backend is added later:
- validate inputs server-side
- use environment variables
- rate-limit forms
- sanitize inputs
- add CSRF protection where applicable
- implement proper logging

---

# 54. GSAP implementation rules

All GSAP code must live inside animation hooks/utilities or the component that owns the animation.

Prefer:

```tsx
useGSAP(() => {
  const ctx = gsap.context(() => {
    // animation
  }, containerRef)

  return () => ctx.revert()
}, { scope: containerRef })
```

Use ScrollTrigger for:
- reveal animations
- counters
- pipeline stage activation
- evidence graph entrance
- radar animation
- opportunity card entrance

Do not create animations in render.

Do not manipulate React state on every animation frame unless absolutely necessary.

---

# 55. Reduced motion

If:

```text
prefers-reduced-motion: reduce
```

then:
- disable floating documents
- disable continuous orb rotation
- disable pulses
- disable parallax
- replace complex entrance animations with instant or very short fades
- keep content fully visible
- disable smooth scrolling where appropriate

The website must remain fully usable.

---

# 56. SVG guidelines

Use SVG for:
- transformation graph
- evidence graph
- radar
- invention lattice
- technical visualizations

SVGs should:
- use responsive `viewBox`
- scale with container
- have accessible labels where meaningful
- not overflow viewport
- use currentColor/CSS variables where possible
- animate using GSAP

Do not use huge raster images for diagrams that can be SVG.

---

# 57. Data separation

Do not hard-code arrays directly into presentation components.

For example:

```ts
export const candidates = [...]
```

in:

```text
data/candidates.ts
```

Then:

```tsx
candidates.map(...)
```

in the component.

Create proper TypeScript types:

```ts
type CandidateCategory = 'high' | 'emerging' | 'adjacent'

interface Candidate {
  title: string
  description: string
  score: number
  category: CandidateCategory
}
```

Do the same for:
- FAQ
- pipeline
- evidence nodes
- agency matters
- pricing
- navigation
- how-it-works stages

---

# 58. Component rules

Components should have one responsibility.

Bad:

```text
HomePage.tsx = 1500 lines
```

Good:

```text
HomePage
 ├── HeroSection
 ├── ResearchChaosSection
 ├── TransformationSection
 ├── PipelineSection
 ├── HarvestSeedSection
 ├── VerdictSection
 ├── OpportunityMapSection
 ├── PersonaSection
 └── FinalCtaSection
```

Reusable components should be reused across pages.

---

# 59. Visual quality requirements

Before declaring the site complete, compare the implementation visually against the supplied Cortexa reference.

Check:

- spacing
- typography
- hierarchy
- dark background
- borders
- accent colors
- card density
- section widths
- CTA positioning
- mobile layout
- animation timing
- graph composition
- navigation
- footer
- table
- pricing cards
- FAQ
- contact form

Do not settle for a basic functional implementation.

The final result should feel like a polished premium product website.

---

# 60. Testing checklist

Run:

```bash
npm run lint
npm run build
```

or equivalent package-manager commands.

Fix all:
- TypeScript errors
- ESLint errors
- build errors
- hydration warnings
- missing keys
- accessibility issues
- responsive overflow

Then run:

```bash
npm run dev
```

Manually inspect every route.

Test:
- desktop navigation
- mobile navigation
- every CTA
- every route
- filters
- product demo
- product demo back/next
- restart
- Harvest/Seed tabs
- evidence graph node selection
- FAQ accordion
- contact validation
- toast
- reduced motion

---

# 61. Initial setup commands

If creating from scratch:

```bash
npx create-next-app@latest cortexa --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
cd cortexa
npm install gsap @gsap/react lucide-react
```

Then create the component/data architecture specified above.

If the project already exists, inspect it first and preserve useful existing configuration.

---

# 62. Copilot implementation instructions

You are GitHub Copilot working in VS Code.

Treat this file as the primary implementation specification.

First:
1. inspect the entire repository
2. inspect package.json
3. inspect existing Next.js/Tailwind configuration
4. inspect existing source files
5. identify what can be reused
6. do not destroy working code unnecessarily

Then implement the website incrementally.

Recommended order:

```text
1. project configuration
2. global fonts/theme
3. layout/header/footer
4. reusable UI
5. data files/types
6. home page
7. product page
8. how-it-works
9. engines
10. evidence
11. agencies
12. pricing
13. trust
14. FAQ
15. contact
16. GSAP polish
17. responsive polish
18. accessibility
19. SEO
20. lint/build fixes
```

After each major page:
- run TypeScript/build checks
- fix errors immediately
- do not leave TODO placeholders

---

# 63. Copilot visual implementation rule

When implementing the supplied design:

Do not simply translate the old CSS into Tailwind class names.

Instead:
- understand the visual system
- create reusable Tailwind primitives
- create components
- preserve the visual behavior
- improve responsiveness
- use modern React patterns
- use GSAP for animation

The old HTML/JS is a visual and content reference, not an architecture to copy.

---

# 64. Content fidelity

Do not invent new marketing claims.

Keep the provided Cortexa copy exactly unless a technical change is required for grammar/formatting.

The following content is especially important and must remain:

```text
Your research has more to say.

Find the inventions hiding inside it.

Upload your research.
Cortexa listens.
See what emerges.

Cortexa looks deeper.

Two ways to read the same work.

A number isn't the whole story.

Meet your opportunity map.

Built for people who turn research into what's next.

Your next patent may already be in your research.
```

All detailed copy elsewhere in this document should also be preserved.

---

# 65. Important legal/content presentation rule

The site contains patent-related language.

Do not transform marketing copy into stronger legal claims.

Preserve the provided disclaimer:

```text
Cortexa is not a law firm and does not provide legal advice.
```

Also preserve:

```text
Scores are calibrated estimates, not legal opinions.
```

---

# 66. Final definition of done

The website is complete only when:

- every route works
- every page is component-based
- route files only call page components
- TypeScript is strict and clean
- Tailwind is used for styling
- Poppins is used globally
- GSAP + ScrollTrigger are used for animations
- reduced motion is supported
- mobile layout is polished
- desktop layout is polished
- all source content is represented
- interactive demos work locally
- filters work
- graph interactions work
- FAQ works
- contact validation works
- toast works
- navigation works
- SEO metadata exists
- lint passes
- production build passes
- no obvious visual regressions remain
- no horizontal overflow exists
- no fake backend behavior is represented as real functionality

---

# 67. Copilot final prompt

After reading this entire file, implement the website.

Start by inspecting the repository.

Do not ask me to manually create each component.

Create the complete architecture yourself.

Use:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Poppins
- GSAP
- ScrollTrigger
- accessible React components

Build every route and every interaction specified here.

Keep route files minimal.

Put reusable implementation inside `components/`.

Put content/data inside `data/`.

Use server components by default and client components only where interaction/browser APIs require them.

Use GSAP responsibly and clean up animations.

Make the website production-ready, responsive from 320px upward, accessible, SEO-friendly, and visually polished.

After implementation run the project's lint and production build commands.

Fix every error you encounter.

Then inspect the final implementation for:
- missing content
- incorrect spacing
- incorrect typography
- animation problems
- mobile issues
- overflow
- hydration problems
- accessibility problems
- broken links
- broken interactions

Do not stop at scaffolding. Finish the actual website.
