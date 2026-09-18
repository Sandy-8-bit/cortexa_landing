# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> every route renders correctly at every required breakpoint
- Location: tests\site.spec.ts:4:5

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator:  locator('link[rel="canonical"]')
Expected: "https://cortexa.co/"
Received: "https://cortexa.co"
Timeout:  10000ms

Call log:
  - Expect "toHaveAttribute" locator('link[rel="canonical"]') with timeout 10000ms
  - waiting for locator('link[rel="canonical"]')
    22 × locator resolved to <link rel="canonical" href="https://cortexa.co"/>
       - unexpected value "https://cortexa.co"

```

```yaml
- link "Skip to content":
  - /url: "#main-content"
- banner:
  - link "Cortexa home":
    - /url: /
    - img "Cortexa"
  - navigation "Main navigation":
    - link "Product":
      - /url: /product
    - link "How it works":
      - /url: /how-it-works
    - link "Engines":
      - /url: /engines
    - link "Evidence":
      - /url: /evidence
    - link "For agencies":
      - /url: /agencies
    - link "Pricing":
      - /url: /pricing
    - link "Start with Cortexa":
      - /url: /contact
- main:
  - paragraph: INVENTION DISCOVERY, EVIDENCE FIRST
  - heading "Your research has more to say." [level=1]
  - paragraph: Find the inventions hiding inside it.
  - link "Explore Cortexa":
    - /url: /product
  - link "See how it works":
    - /url: /how-it-works
  - text: DISCOVERY ENGINE FIG. 01 anneal_study_v4.pdf PDF lab/anneal-ctl GIT cell_data.ipynb INVENTION IDENTIFIED 87
  - paragraph: Gradient-annealed electrolyte interface
  - text: SOURCE-LINKED · HIGH POTENTIAL 14 DOCUMENTS 12 POSSIBILITIES
  - link "SCROLL TO DISCOVER":
    - /url: "#research"
  - text: PDF · DOCX · LATEX · GIT REPOS USPTO · WIPO · EPO · ARXIV
  - navigation "Explore the four research passes":
    - link "01 Ingest":
      - /url: /how-it-works#stage-1
    - link "02 Extract":
      - /url: /how-it-works#stage-3
    - link "03 Evidence":
      - /url: /how-it-works#stage-4
    - link "04 Score":
      - /url: /how-it-works#stage-5
  - paragraph: 01 / THE UNTAPPED POTENTIAL
  - heading "Research is everywhere." [level=2]
  - paragraph: Your papers. Your code. Your half-finished notebooks and last year's grant report. Every one of them is a source of invention — and none of them are labelled that way.
  - text: thesis.pdf results_v3.docx train.py grant_report.pdf notes.tex cell_data.ipynb
  - heading "Upload your research. Cortexa listens. See what emerges." [level=2]
  - paragraph: Documents go in. Invention candidates come out — each one attached to the evidence that earned it a place on the list.
  - text: SOURCE DOCUMENTS CANDIDATES
  - img "Source documents flow through the Cortexa core into evidence-linked candidates": Papers & reports Candidate 01 Code & repos Candidate 02 Lab notebooks Candidate 03 CORTEXA
  - paragraph: 02 / THE PROCESS
  - heading "Cortexa looks deeper." [level=2]
  - paragraph: Four passes over the same material, each one asking a harder question.
  - navigation "Research passes":
    - link "01 Ingest ↗":
      - /url: "#pass-0"
    - link "02 Extract ↗":
      - /url: "#pass-1"
    - link "03 Evidence ↗":
      - /url: "#pass-2"
    - link "04 Score ↗":
      - /url: "#pass-3"
  - article:
    - paragraph: PASS 01 · Ingest
    - heading "Understand your source" [level=3]
    - paragraph: Domain, method, authorship, references, technical depth. Before anything is extracted, Cortexa works out what kind of document it is reading.
    - text: anneal_study_v4.pdf
    - term: Domain
    - definition: Materials science
    - term: Method
    - definition: Gradient annealing
    - term: References
    - definition: 412 resolved
    - text: OUTPUT · 14 documents classified · 3 domains · 412 references resolved
  - article:
    - paragraph: PASS 02 · Extract
    - heading "Find what's hidden inside" [level=3]
    - paragraph: Novel claims, unusual combinations of known elements, and unexpected applications. The text fragments, and the inventive parts surface with their source paragraph attached.
    - text: gradient anneal interface dendrite separator suppress layered boundary in-situ drift protocol lamination OUTPUT · 12 candidates · 38 claim fragments · each mapped to a page and line
  - article:
    - paragraph: PASS 03 · Evidence
    - heading "See what already exists" [level=3]
    - paragraph: "Three layers of prior art: patent families, published literature, and public code. Records that argue against a candidate surface as prominently as records that support it."
    - img "Evidence connected to USPTO, arXiv, WIPO and GitHub": EVIDENCE USPTO arXiv WIPO GitHub
    - text: OUTPUT · 11 records · 4 patents · 3 papers · 2 repos · 2 counter-records
  - article:
    - paragraph: PASS 04 · Score
    - heading "Turn evidence into insight" [level=3]
    - paragraph: Five dimensions, each scored against the retrieved records and each carrying its own citations. The number summarises the argument; it never replaces it.
    - text: "87"
    - paragraph: PATENTABILITY INDEX
    - paragraph: CONFIDENCE 0.86
    - text: "OUTPUT · index 87 · confidence 0.86 · limiting axis: scope"
  - paragraph: 03 / TWO ENGINES. ONE CORPUS.
  - heading "Two ways to read the same work." [level=2]
  - paragraph: Harvest looks backward at what you've already built. Seed looks forward at what it could become.
  - article:
    - text: ENGINE 01 Harvest
    - heading "What's already here?" [level=3]
    - list:
      - listitem: 01 Research — papers, code, reports
      - listitem: 02 Candidates — inventions identified
      - listitem: 03 Evidence — prior art retrieved
      - listitem: 04 Ranking — ordered by strength
    - link "Explore Harvest":
      - /url: /engines
  - article:
    - text: ENGINE 02 Seed
    - heading "What's possible next?" [level=3]
    - list:
      - listitem: 01 Research + roadmap
      - listitem: 02 Opportunity seeds — unclaimed directions
      - listitem: 03 Invention lattice — related filings
      - listitem: 04 Strategy — a portfolio, not a list
    - link "Explore Seed":
      - /url: /engines
  - paragraph: 04 / EVIDENCE, NOT GUESSWORK
  - heading "A number isn't the whole story." [level=2]
  - paragraph: Every axis carries its own evidence, and every piece of evidence points back to a source you can open.
  - text: 87 VERDICT · HIGH PATENTABILITY
  - paragraph: Scores are calibrated estimates, not legal opinions.
  - text: Novelty 92 Non-obviousness 84 Enablement 88 Scope 79 Commercial pull 90
  - paragraph: "LIMITING AXIS: SCOPE · CONFIDENCE 0.86"
  - link "Follow the evidence":
    - /url: /evidence
  - paragraph: 05 / FROM RESEARCH TO DIRECTION
  - heading "Meet your opportunity map." [level=2]
  - text: SAMPLE CORPUS · MATERIALS SCIENCE LAB
  - strong: "12"
  - text: Candidates found
  - strong: "4"
  - text: High potential
  - strong: "5"
  - text: Emerging
  - strong: "3"
  - text: Adjacent / defensive
  - button "All 12" [pressed]
  - button "High potential 4"
  - button "Emerging 5"
  - button "Adjacent 3"
  - status: 12 candidates shown
  - article:
    - text: CANDIDATE 01 87/100
    - heading "Gradient-annealed electrolyte interface" [level=3]
    - paragraph: A layered anneal that suppresses dendrite nucleation at the separator boundary.
    - text: High potential
    - link "Explore sample evidence for Gradient-annealed electrolyte interface":
      - /url: /evidence
  - article:
    - text: CANDIDATE 02 81/100
    - heading "Self-calibrating impedance probe" [level=3]
    - paragraph: In-situ probe that re-baselines against its own drift between cycles.
    - text: High potential
    - link "Explore sample evidence for Self-calibrating impedance probe":
      - /url: /evidence
  - article:
    - text: CANDIDATE 03 78/100
    - heading "Sparse-sampling cycling protocol" [level=3]
    - paragraph: Cuts qualification time by sampling where the degradation signal actually lives.
    - text: High potential
    - link "Explore sample evidence for Sparse-sampling cycling protocol":
      - /url: /evidence
  - article:
    - text: CANDIDATE 04 74/100
    - heading "Binder-free cathode lamination" [level=3]
    - paragraph: Mechanical interlock replaces polymer binder in thick-film cathodes.
    - text: High potential
    - link "Explore sample evidence for Binder-free cathode lamination":
      - /url: /evidence
  - article:
    - text: CANDIDATE 05 69/100
    - heading "Thermal runaway precursor signature" [level=3]
    - paragraph: Acoustic precursor detected 40 minutes before thermal event onset.
    - text: Emerging
    - link "Explore sample evidence for Thermal runaway precursor signature":
      - /url: /evidence
  - article:
    - text: CANDIDATE 06 66/100
    - heading "Electrode geometry search loop" [level=3]
    - paragraph: Closed-loop design search over rib spacing and channel depth.
    - text: Emerging
    - link "Explore sample evidence for Electrode geometry search loop":
      - /url: /evidence
  - article:
    - text: CANDIDATE 07 63/100
    - heading "Recycled-feedstock purity index" [level=3]
    - paragraph: A single index that predicts cell yield from reclaimed material.
    - text: Emerging
    - link "Explore sample evidence for Recycled-feedstock purity index":
      - /url: /evidence
  - article:
    - text: CANDIDATE 08 61/100
    - heading "Low-temperature formation cycle" [level=3]
    - paragraph: Formation at 12 °C with no capacity penalty across 400 cycles.
    - text: Emerging
    - link "Explore sample evidence for Low-temperature formation cycle":
      - /url: /evidence
  - article:
    - text: CANDIDATE 09 58/100
    - heading "Cross-chemistry state estimator" [level=3]
    - paragraph: One estimator that transfers between LFP and NMC packs.
    - text: Emerging
    - link "Explore sample evidence for Cross-chemistry state estimator":
      - /url: /evidence
  - article:
    - text: CANDIDATE 10 52/100
    - heading "Fixture for warped-cell testing" [level=3]
    - paragraph: Defensive filing around the test rig itself.
    - text: Adjacent
    - link "Explore sample evidence for Fixture for warped-cell testing":
      - /url: /evidence
  - article:
    - text: CANDIDATE 11 48/100
    - heading "Data schema for cell provenance" [level=3]
    - paragraph: Adjacent claim covering the traceability record format.
    - text: Adjacent
    - link "Explore sample evidence for Data schema for cell provenance":
      - /url: /evidence
  - article:
    - text: CANDIDATE 12 44/100
    - heading "Automated teardown labelling" [level=3]
    - paragraph: Vision-assisted labelling of teardown imagery.
    - text: Adjacent
    - link "Explore sample evidence for Automated teardown labelling":
      - /url: /evidence
  - paragraph: Every candidate is ranked by potential. Every score is traceable back to the paragraph it came from.
  - paragraph: 06 / BUILT FOR YOUR TEAM
  - heading "Built for people who turn research into what's next." [level=2]
  - article:
    - text: 01 /
    - heading "Researchers" [level=3]
    - paragraph: Find what your work could become. See patent angles in research you finished two years ago and filed away.
  - article:
    - text: 02 /
    - heading "Reviewers" [level=3]
    - paragraph: See the evidence behind every opportunity, so a decision to drop an idea is as defensible as a decision to file.
  - article:
    - text: 03 /
    - heading "Patent teams" [level=3]
    - paragraph: Automate first-pass screening across a whole department. Spend attorney hours on strategy instead of triage.
  - paragraph: THE NEXT CHAPTER
  - heading "Your next patent may already be in your research." [level=2]
  - link "Start with Cortexa":
    - /url: /contact
  - link "See how it works":
    - /url: /how-it-works
- contentinfo:
  - paragraph: Evidence first, always.
  - link "Contact Cortexa":
    - /url: /contact
  - link "Cortexa home":
    - /url: /
    - img "Cortexa"
  - paragraph: Invention discovery for research teams. Evidence first, always.
  - text: RESEARCH → POSSIBILITY
  - heading "Product" [level=2]
  - link "Walkthrough":
    - /url: /product
  - link "How it works":
    - /url: /how-it-works
  - link "Harvest & Seed":
    - /url: /engines
  - link "Evidence graph":
    - /url: /evidence
  - heading "Company" [level=2]
  - link "For agencies":
    - /url: /agencies
  - link "Pricing":
    - /url: /pricing
  - link "Trust & data":
    - /url: /trust
  - link "FAQ":
    - /url: /faq
  - link "Contact":
    - /url: /contact
  - heading "Sources" [level=2]
  - paragraph: USPTO · EPO · WIPO arXiv · Crossref · Scholar GitHub · GitLab
  - text: © 2026 Cortexa. Concept site. Cortexa is not a law firm and does not provide legal advice.
  - link "Trust & data ↗":
    - /url: /trust
- alert
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { routes } from '../data/navigation';
  3   | 
  4   | test('every route renders correctly at every required breakpoint', async ({ page }) => {
  5   |   test.setTimeout(240_000);
  6   |   const errors: string[] = [];
  7   |   page.on('pageerror', error => errors.push(error.message));
  8   |   await page.emulateMedia({ reducedMotion: 'reduce' });
  9   |   for (const route of routes) {
  10  |     const response = await page.goto(route);
  11  |     expect(response?.status(), route).toBe(200);
  12  |     await expect(page.locator('h1'), route).toHaveCount(1);
  13  |     await expect(page.locator('h1'), route).toBeVisible();
  14  |     await expect(page).toHaveTitle(/Cortexa/);
> 15  |     await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://cortexa.co${route === '/' ? '/' : route}`);
      |                                                         ^ Error: expect(locator).toHaveAttribute(expected) failed
  16  |     for (const width of [320, 375, 390, 430, 640, 768, 900, 1024, 1280, 1440]) {
  17  |       await page.setViewportSize({ width, height: 900 });
  18  |       const sizes = await page.evaluate(() => ({ viewport: window.innerWidth, scroll: document.documentElement.scrollWidth }));
  19  |       expect(sizes.scroll, `${route} overflows at ${width}px`).toBeLessThanOrEqual(sizes.viewport);
  20  |     }
  21  |     await page.setViewportSize({ width: 1440, height: 1000 });
  22  |     await page.screenshot({ path: `test-results/screenshots/${route === '/' ? 'home' : route.slice(1)}-desktop.png`, fullPage: true });
  23  |     await page.setViewportSize({ width: 390, height: 844 });
  24  |     await page.screenshot({ path: `test-results/screenshots/${route === '/' ? 'home' : route.slice(1)}-mobile.png`, fullPage: true });
  25  |   }
  26  |   expect(errors).toEqual([]);
  27  | });
  28  | 
  29  | test('mobile menu supports keyboard dismissal and closes on navigation', async ({ page }) => {
  30  |   await page.setViewportSize({ width: 390, height: 844 });
  31  |   await page.goto('/');
  32  |   const toggle = page.getByRole('button', { name: 'MENU' });
  33  |   await toggle.click();
  34  |   await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  35  |   await page.keyboard.press('Escape');
  36  |   await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  37  |   await expect(toggle).toBeFocused();
  38  |   await toggle.click();
  39  |   await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Pricing' }).click();
  40  |   await expect(page).toHaveURL(/\/pricing$/);
  41  |   await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  42  | });
  43  | 
  44  | test('opportunity and agency filters return the correct records', async ({ page }) => {
  45  |   await page.emulateMedia({ reducedMotion: 'reduce' });
  46  |   await page.goto('/');
  47  |   await expect(page.locator('.candidate-card')).toHaveCount(12);
  48  |   await page.getByRole('button', { name: 'High potential 4' }).click();
  49  |   await expect(page.locator('.candidate-card')).toHaveCount(4);
  50  |   await page.getByRole('button', { name: 'Emerging 5' }).click();
  51  |   await expect(page.locator('.candidate-card')).toHaveCount(5);
  52  |   await page.getByRole('button', { name: 'Adjacent 3' }).click();
  53  |   await expect(page.locator('.candidate-card')).toHaveCount(3);
  54  |   await page.goto('/agencies');
  55  |   await expect(page.locator('tbody tr')).toHaveCount(8);
  56  |   await page.getByRole('button', { name: 'Awaiting your review' }).click();
  57  |   await expect(page.locator('tbody tr')).toHaveCount(4);
  58  |   await expect(page.locator('tbody')).not.toContainText('With client');
  59  |   await page.getByRole('button', { name: 'With client' }).click();
  60  |   await expect(page.locator('tbody tr')).toHaveCount(4);
  61  |   await expect(page.locator('tbody')).not.toContainText('Awaiting agent review');
  62  | });
  63  | 
  64  | test('product walkthrough works from upload to export and restarts cleanly', async ({ page }) => {
  65  |   await page.setViewportSize({ width: 390, height: 844 });
  66  |   await page.emulateMedia({ reducedMotion: 'reduce' });
  67  |   await page.goto('/product');
  68  |   const next = page.getByRole('button', { name: 'Next step' });
  69  |   await expect(page.getByRole('button', { name: 'Back', exact: true })).toBeDisabled();
  70  |   await page.getByRole('button', { name: /DROP FILES OR CLICK TO SIMULATE/ }).click();
  71  |   await expect(page.locator('.uploaded-files > div')).toHaveCount(5);
  72  |   await next.click();
  73  |   await expect(page.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
  74  |   await next.click();
  75  |   await expect(page.locator('.candidate-card')).toHaveCount(4);
  76  |   await next.click();
  77  |   await expect(page.locator('.demo-evidence-grid > article')).toHaveCount(3);
  78  |   await next.click();
  79  |   await expect(page.locator('.radar')).toBeVisible();
  80  |   await next.click();
  81  |   await page.getByRole('button', { name: 'Seed', exact: true }).click();
  82  |   await expect(page.locator('.lattice')).toBeVisible();
  83  |   await page.getByRole('button', { name: 'Harvest', exact: true }).click();
  84  |   await expect(page.locator('.candidate-card')).toHaveCount(4);
  85  |   await next.click();
  86  |   await expect(page.locator('.candidate-card')).toHaveCount(12);
  87  |   await next.click();
  88  |   await expect(next).toBeDisabled();
  89  |   await page.getByRole('button', { name: /PDF brief/ }).click();
  90  |   await expect(page.getByRole('status')).toContainText('Demo: Generated Patent brief.pdf');
  91  |   await page.getByRole('button', { name: 'Dismiss notification' }).click();
  92  |   await page.getByRole('button', { name: 'Back', exact: true }).click();
  93  |   await expect(page.locator('.candidate-card')).toHaveCount(12);
  94  |   await page.getByRole('button', { name: 'Restart' }).click();
  95  |   await expect(page.locator('.uploaded-files')).toHaveCount(0);
  96  |   await expect(page.getByRole('button', { name: /DROP FILES OR CLICK TO SIMULATE/ })).toBeVisible();
  97  | });
  98  | 
  99  | test('evidence nodes, accordion, and form validation are accessible and functional', async ({ page }) => {
  100 |   await page.emulateMedia({ reducedMotion: 'reduce' });
  101 |   await page.goto('/evidence');
  102 |   await page.getByRole('button', { name: /Patent match/ }).click();
  103 |   await expect(page.locator('#evidence-record')).toContainText('Claim 1');
  104 |   await page.getByRole('button', { name: /Publication/ }).focus();
  105 |   await page.keyboard.press('Enter');
  106 |   await expect(page.locator('#evidence-record')).toContainText('Fig. 3');
  107 |   await page.getByRole('button', { name: /Code repository/ }).click();
  108 |   await expect(page.locator('#evidence-record')).toContainText('ramp.py');
  109 |   await page.getByRole('button', { name: /Market signal/ }).click();
  110 |   await expect(page.locator('#evidence-record')).toContainText('Assignees');
  111 |   await page.goto('/faq');
  112 |   const first = page.getByRole('button', { name: /Does Cortexa file patents/ });
  113 |   const second = page.getByRole('button', { name: /How is this different/ });
  114 |   await expect(first).toHaveAttribute('aria-expanded', 'true');
  115 |   await second.click();
```