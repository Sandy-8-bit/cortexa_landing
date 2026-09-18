# Cortexa Website --- Design System & Theme Migration

## Purpose

Redesign the **existing Cortexa website** so its visual language matches
the parent company's Imaginext website shown in the provided reference
screenshots.

**Important:** This is a **visual/theme migration**, not a content or
functionality rewrite.

Codex should: - Keep all existing Cortexa content, routes, components,
API calls, interactions, forms, and functionality unless a visual change
requires a small structural adjustment. - Preserve the existing
responsive behavior. - Replace the current visual language with the
Imaginext-inspired design system below. - Do not invent new product
claims, statistics, testimonials, or marketing copy. - Use the existing
Cortexa copy wherever possible.

------------------------------------------------------------------------

# 1. Visual Direction

The reference website has a:

-   Premium technology / innovation feel
-   Minimal black-and-white visual system
-   Editorial typography
-   Large confident headlines
-   Strong whitespace
-   Very sharp rectangular geometry
-   Thin borders and dividers
-   Almost no rounded corners
-   Restrained use of color
-   Futuristic but sophisticated atmosphere
-   Technical / engineering aesthetic rather than a typical SaaS
    aesthetic

### Core visual idea

**Black + off-white + subtle electric blue**

The design should feel like:

> AI engineering + intellectual property + advanced technology + premium
> consulting

Avoid making Cortexa look like: - A generic SaaS dashboard - A colorful
startup landing page - A glassmorphism website - A purple AI template -
A heavily rounded Tailwind/shadcn website - A conventional corporate
website

------------------------------------------------------------------------

# 2. Color System

Use CSS variables so the entire theme can be changed centrally.

``` css
:root {
  --cx-black: #050505;
  --cx-black-soft: #0a0a0a;
  --cx-white: #f5f5f3;
  --cx-white-pure: #ffffff;
  --cx-gray-100: #eeeeec;
  --cx-gray-200: #dededb;
  --cx-gray-400: #999999;
  --cx-gray-500: #707070;
  --cx-gray-700: #303030;
  --cx-blue: #145cff;
  --cx-blue-soft: #164ea8;
  --cx-border-dark: rgba(255,255,255,0.18);
  --cx-border-light: rgba(0,0,0,0.16);
}
```

### Dark sections

Primary background:

``` css
background: #050505;
color: #f5f5f3;
```

Secondary dark surface:

``` css
background: #0a0a0a;
```

### Light sections

Primary light background:

``` css
background: #f5f5f3;
color: #050505;
```

Cards can use:

``` css
background: #e9e9e7;
```

Active/inverted card:

``` css
background: #151515;
color: #f5f5f3;
```

### Color usage rule

Blue should be an **accent**, not the dominant brand color.

Use blue primarily for: - Hero atmospheric glow - Thin horizon/light
effects - Hover states - Small active indicators - Very subtle
interactive highlights

Do NOT make large areas blue.

------------------------------------------------------------------------

# 3. Typography

The reference uses large, clean, modern sans-serif typography.

Prefer the existing project font if it is already close. Otherwise use a
modern grotesk/sans-serif.

Recommended stack:

``` css
font-family:
  "Inter",
  "Helvetica Neue",
  Helvetica,
  Arial,
  sans-serif;
```

If the project already has a suitable brand font, keep it.

## Typography hierarchy

### Hero eyebrow

``` css
font-size: 14px;
line-height: 1.3;
font-weight: 400;
letter-spacing: -0.01em;
```

### Hero headline

Desktop:

``` css
font-size: clamp(52px, 5.5vw, 96px);
line-height: 0.95;
font-weight: 400;
letter-spacing: -0.055em;
```

The headline should be visually dominant.

Avoid bold/heavy font weights unless already required by the content.

### Section headline

``` css
font-size: clamp(42px, 5vw, 76px);
line-height: 0.95;
font-weight: 400;
letter-spacing: -0.05em;
```

### Large statement text

``` css
font-size: clamp(36px, 4.5vw, 72px);
line-height: 0.98;
font-weight: 400;
letter-spacing: -0.045em;
```

### Body

``` css
font-size: 17px;
line-height: 1.45;
font-weight: 400;
```

### Small metadata

``` css
font-size: 13px;
line-height: 1.3;
letter-spacing: -0.01em;
```

------------------------------------------------------------------------

# 4. Geometry

The reference design is intentionally rigid.

## Border radius

Default:

``` css
border-radius: 0;
```

Avoid: - `rounded-xl` - `rounded-2xl` - pill buttons - circular cards

Small circles are allowed only for: - brand symbols - small navigation
marks - decorative system indicators

Buttons should generally be rectangular.

------------------------------------------------------------------------

# 5. Global Layout

Use a wide editorial grid.

Desktop:

``` css
padding-inline: clamp(24px, 3vw, 56px);
```

Content should generally use a 12-column grid.

``` css
display: grid;
grid-template-columns: repeat(12, minmax(0, 1fr));
gap: clamp(16px, 1.5vw, 28px);
```

Do not constrain every section to a small centered `max-width`.

The reference uses the full browser width aggressively.

------------------------------------------------------------------------

# 6. Navigation

The parent reference has an extremely minimal navigation system.

## Desktop

Header: - Black background - Thin bottom border - Logo centered -
Navigation distributed left/right - Small white typography - Generous
horizontal spacing - No large navigation container - No rounded
navigation pills

Example structure:

``` text
[Home / Product Links]             [CORTEXA LOGO]             [Get Started / About]
```

The exact Cortexa navigation labels should come from the existing
website.

### Header CSS direction

``` css
height: 64px;
background: #050505;
border-bottom: 1px solid rgba(255,255,255,0.12);
```

Navigation links:

``` css
font-size: 15px;
font-weight: 400;
color: rgba(255,255,255,0.92);
```

Hover: - Slight opacity change - Thin underline or very subtle
positional movement - No colorful glow

### Mobile

Use a compact hamburger menu.

The menu should retain the same black/off-white visual language.

------------------------------------------------------------------------

# 7. Hero Section

The hero should be the strongest expression of the new Cortexa theme.

Use a dark cinematic environment inspired by the first reference
screenshot.

## Hero background

Prefer: - Deep black - Subtle grain/noise - Very faint star/particle
texture if the existing project already has one - A soft blue
atmospheric glow - A thin blue/white horizon-like light band

Do not add a busy space illustration.

The effect should remain subtle.

Example:

``` css
background:
  radial-gradient(
    ellipse at 50% 35%,
    rgba(20, 92, 255, 0.18) 0%,
    rgba(20, 92, 255, 0.05) 28%,
    transparent 62%
  ),
  #050505;
```

For the horizon effect, use a pseudo-element or existing visual asset.

### Hero positioning

Content should sit toward the lower-left/mid-left rather than being
vertically centered like a conventional SaaS hero.

Structure:

``` text
Small eyebrow

Huge Cortexa headline
Huge Cortexa headline

Supporting description

[Get Started] [square icon action]
```

### Hero headline

Use short line lengths.

Do not put the entire headline into one tiny paragraph.

------------------------------------------------------------------------

# 8. Hero Buttons

The reference uses strong rectangular buttons.

Primary:

``` css
background: #f5f5f3;
color: #050505;
border: 1px solid #f5f5f3;
border-radius: 0;
padding: 18px 28px;
font-size: 16px;
font-weight: 600;
```

Hover:

``` css
background: #ffffff;
transform: translateY(-2px);
```

Secondary icon button:

``` css
width: 64px;
height: 64px;
background: #f5f5f3;
color: #050505;
border: 1px solid #f5f5f3;
border-radius: 0;
```

Keep transitions fast and precise.

------------------------------------------------------------------------

# 9. Hero Bottom Navigation / Capability Strip

The reference uses a horizontal strip at the bottom of the hero.

For Cortexa, use the **existing Cortexa capabilities / product
categories**.

Design:

``` text
01  CATEGORY        02  CATEGORY        03  CATEGORY        04  CATEGORY
```

Use thin separators and small uppercase or compact typography.

Do not invent categories.

If Cortexa already has feature/category labels, reuse them.

------------------------------------------------------------------------

# 10. Light Editorial Sections

After the dark hero, introduce a strong light section.

Use:

``` css
background: #f5f5f3;
color: #050505;
```

This black-to-light transition is an important part of the reference
identity.

The light section should feel like a printed editorial page rather than
a SaaS feature grid.

------------------------------------------------------------------------

# 11. Section Heading Pattern

Use asymmetric editorial layouts.

Example:

``` text
The
Problem We
Solve.                         Large statement describing the problem.
                               Supporting text below.
```

The small section label should occupy approximately 20--30% width.

The main statement should occupy the remaining width.

Do not center everything.

------------------------------------------------------------------------

# 12. Feature / Problem Cards

Replace generic rounded feature cards with rigid editorial cards.

Reference behavior:

-   Large active black card
-   Smaller light gray cards
-   Thin borders
-   Large typography
-   Lots of empty vertical space
-   Small geometric brand mark near the top
-   Supporting information near the bottom

## Card

``` css
background: #e8e8e6;
border: 1px solid rgba(0,0,0,0.08);
border-radius: 0;
min-height: 360px;
padding: 30px;
```

## Active card

``` css
background: #151515;
color: #f5f5f3;
```

### Card typography

Title:

``` css
font-size: clamp(24px, 2vw, 34px);
line-height: 1.05;
font-weight: 400;
letter-spacing: -0.035em;
```

Do not use card shadows.

------------------------------------------------------------------------

# 13. Card Interaction

Cards should feel physical but minimal.

On hover:

``` css
transform: translateY(-4px);
transition: transform 350ms cubic-bezier(.22,1,.36,1);
```

Optional: - subtle border-color change - icon movement - text reveal

Avoid: - huge scaling - glowing cards - gradients - glass blur -
excessive parallax

------------------------------------------------------------------------

# 14. Product Showcase

Because this is the **Cortexa product website**, product sections should
feel like technology documentation presented as premium editorial
content.

Use: - Large product screenshots - Large labels - Thin dividers -
Technical metadata - Asymmetric grids - Dark/light alternation

Example:

``` text
CORTEXA

Large product visual

01
CAPABILITY NAME

Short existing description
```

Screenshots should be displayed prominently rather than hidden inside
small cards.

------------------------------------------------------------------------

# 15. Product UI Screenshots

If Cortexa already has UI screenshots:

### Dark section

Place screenshots inside dark environments with subtle borders.

``` css
border: 1px solid rgba(255,255,255,0.16);
```

### Light section

Use:

``` css
border: 1px solid rgba(0,0,0,0.14);
```

Avoid: - Drop shadows - Browser mockups with excessive chrome - Floating
rounded cards

The product itself should remain the visual focus.

------------------------------------------------------------------------

# 16. Data / Technical Sections

Cortexa should visually communicate engineering credibility.

Use a technical editorial layout:

``` text
01  SYSTEM
    Description

02  INTELLIGENCE
    Description

03  WORKFLOW
    Description

04  OUTPUT
    Description
```

Use numbers as visual anchors.

Numbers can be large and lightweight:

``` css
font-size: 13px;
letter-spacing: 0.08em;
```

Do not invent metrics.

------------------------------------------------------------------------

# 17. Dividers

Dividers are an important part of the visual language.

Use:

``` css
border-top: 1px solid rgba(0,0,0,0.16);
```

or on dark backgrounds:

``` css
border-top: 1px solid rgba(255,255,255,0.16);
```

Prefer dividers over shadows for hierarchy.

------------------------------------------------------------------------

# 18. Footer

Footer should return to the black theme.

Structure:

``` text
CORTEXA

Large closing statement

Navigation links

Contact / CTA

Copyright / legal
```

Use oversized typography for the closing statement.

Keep the footer spacious.

------------------------------------------------------------------------

# 19. Motion & Animation

Animations should feel like the reference: smooth, slow, intentional.

If GSAP is already installed, use GSAP/ScrollTrigger.

Otherwise use CSS transitions and IntersectionObserver.

## Recommended motion

### Page entrance

-   Opacity: 0 → 1
-   Y: 20px → 0
-   Duration: 0.7--1s
-   Ease: power3.out

### Headlines

Reveal line-by-line or word-by-word.

Avoid exaggerated text animations.

### Cards

Small vertical movement on hover.

### Section transitions

Use subtle scroll-triggered reveals.

### Hero atmospheric effect

A very slow horizontal/diagonal movement can be used for the blue
horizon.

Keep it extremely subtle.

------------------------------------------------------------------------

# 20. Do NOT Over-animate

Avoid: - Constant floating objects - Excessive cursor effects - RGB
effects - Neon cyberpunk effects - Large particle explosions - Fast
scroll-jacking - Excessive blur - 3D objects everywhere

The reference is futuristic because of **typography, composition,
contrast and restraint**, not because of lots of effects.

------------------------------------------------------------------------

# 21. Responsive Design

## Desktop

Target: - 1440px+ - 12-column layout - Large typography - Full-width
sections

## Tablet

Target: - 768px--1199px - 8-column or simplified grid - Reduce headline
size - Maintain large whitespace

## Mobile

Target: - 320px--767px - Single-column layout - Header becomes
hamburger - Hero typography approximately:

``` css
font-size: clamp(42px, 12vw, 64px);
line-height: 0.95;
```

Cards stack vertically.

Do not horizontally overflow.

Do not use `min-width` to force desktop layouts on mobile.

------------------------------------------------------------------------

# 22. Spacing

Use generous spacing.

Recommended scale:

``` css
--space-1: 8px;
--space-2: 12px;
--space-3: 16px;
--space-4: 24px;
--space-5: 32px;
--space-6: 48px;
--space-7: 64px;
--space-8: 96px;
--space-9: 128px;
--space-10: 180px;
```

Large editorial sections may use:

``` css
padding-block: clamp(96px, 12vw, 200px);
```

Do not compress sections just to fit more content on screen.

------------------------------------------------------------------------

# 23. Icons

Use the existing icon library if present.

Icon style: - geometric - minimal - mostly monochrome - thin or medium
stroke

Avoid: - colorful illustrations - emoji - oversized decorative icons -
mixed icon styles

The small geometric pixel/grid mark visible in the Imaginext reference
can be used as inspiration for Cortexa's decorative system, but do not
replace the actual Cortexa logo with it.

------------------------------------------------------------------------

# 24. Images & Backgrounds

Use existing Cortexa imagery where available.

Image treatment: - high contrast - dark environments - monochrome where
appropriate - technical/editorial crops

Avoid stock-photo-heavy layouts.

If there are no suitable images, prefer: - typography - product UI -
diagrams - abstract technical textures - subtle grain

over generic stock photography.

------------------------------------------------------------------------

# 25. Tailwind Guidance

If the project uses Tailwind, introduce theme tokens rather than
scattering arbitrary values.

Prefer:

``` tsx
bg-cx-black
text-cx-white
border-cx-border-dark
```

or CSS variables:

``` tsx
bg-[var(--cx-black)]
text-[var(--cx-white)]
```

Avoid repeatedly writing unrelated arbitrary colors such as:

``` tsx
bg-[#121212]
bg-[#171717]
bg-[#1b1b1b]
```

Centralize the palette.

------------------------------------------------------------------------

# 26. Remove / Replace Existing SaaS Patterns

During the redesign, identify and replace:

-   Excessive rounded corners
-   Purple/blue gradient backgrounds
-   Glassmorphism
-   Large box shadows
-   Pill-shaped buttons
-   Generic centered hero layouts
-   Repetitive 3-column SaaS cards
-   Excessive colored badges
-   Heavy card borders
-   Floating blobs
-   Generic AI sparkles
-   Excessive gradient text

Replace them with:

-   Sharp rectangles
-   Black/off-white contrast
-   Thin dividers
-   Editorial grids
-   Large typography
-   Asymmetric layouts
-   Subtle blue atmospheric effects
-   Product-focused visuals

------------------------------------------------------------------------

# 27. Design Tokens --- Final Reference

``` css
:root {
  /* Colors */
  --cx-black: #050505;
  --cx-black-soft: #0a0a0a;
  --cx-white: #f5f5f3;
  --cx-white-pure: #ffffff;

  --cx-gray-100: #eeeeec;
  --cx-gray-200: #dededb;
  --cx-gray-400: #999999;
  --cx-gray-500: #707070;
  --cx-gray-700: #303030;

  --cx-blue: #145cff;
  --cx-blue-soft: #164ea8;

  --cx-border-dark: rgba(255,255,255,0.16);
  --cx-border-light: rgba(0,0,0,0.14);

  /* Typography */
  --cx-font-sans:
    "Inter",
    "Helvetica Neue",
    Helvetica,
    Arial,
    sans-serif;

  /* Radius */
  --cx-radius: 0px;

  /* Motion */
  --cx-ease: cubic-bezier(.22,1,.36,1);
  --cx-duration: 350ms;

  /* Layout */
  --cx-page-padding: clamp(24px, 3vw, 56px);
}
```

------------------------------------------------------------------------

# 28. Implementation Order

Codex should implement the redesign in this order:

### Step 1 --- Audit

Inspect the existing Cortexa project.

Identify: - App/router structure - Main page - Shared layout - Navbar -
Footer - Existing design tokens - Existing fonts - Existing animation
system - Existing UI components - Existing images/assets

### Step 2 --- Global Theme

Update: - Colors - Typography - Body background - Selection color -
Scrollbar if already customized - Buttons - Borders - Radius

### Step 3 --- Navigation

Rebuild the navbar using the new editorial black theme while preserving
all existing links.

### Step 4 --- Hero

Transform the existing hero into the large cinematic Imaginext-inspired
layout.

### Step 5 --- Content Sections

Convert existing sections into: - Editorial split layouts - Large
statements - Sharp cards - Technical feature sections - Product showcase
sections

### Step 6 --- Motion

Add subtle scroll reveals and hover transitions.

### Step 7 --- Responsive

Check: - 1440px - 1280px - 1024px - 768px - 430px - 390px - 320px

### Step 8 --- Cleanup

Remove old theme remnants: - Old gradients - Old radius values - Old
shadows - Old colors - Old component styles that conflict with the new
theme

------------------------------------------------------------------------

# 29. Important Constraints

**Do not change product functionality.**

**Do not change API behavior.**

**Do not change existing routes.**

**Do not delete working sections just because they do not exist in the
reference.**

**Do not invent Cortexa content.**

**Do not invent statistics.**

**Do not invent testimonials.**

**Do not replace existing product screenshots unless there is a clear
existing asset available.**

**Do not turn the website into an exact clone of Imaginext.**

The goal is to create a **Cortexa-branded website using the same design
language**:

> Minimal. Technical. Editorial. Black and off-white. Large typography.
> Sharp geometry. Subtle blue atmosphere. Premium AI engineering
> aesthetic.

------------------------------------------------------------------------

# 30. Final Visual Checklist

Before finishing, verify:

-   [ ] Black/off-white visual system is dominant
-   [ ] Blue is used only as a subtle accent
-   [ ] Typography is large and lightweight
-   [ ] Hero feels cinematic
-   [ ] Layout uses wide editorial grids
-   [ ] Cards have sharp corners
-   [ ] No unnecessary gradients
-   [ ] No excessive shadows
-   [ ] No glassmorphism
-   [ ] Buttons are rectangular
-   [ ] Sections have generous whitespace
-   [ ] Thin dividers are used for hierarchy
-   [ ] Product screenshots are visually prominent
-   [ ] Animations are subtle and smooth
-   [ ] Mobile layout has no horizontal overflow
-   [ ] Existing Cortexa content and functionality remain intact
-   [ ] Design feels like the same company ecosystem as Imaginext
    without copying it

## Target impression

When someone opens Cortexa, it should visually feel like:

**"This is an advanced product from the same technology and innovation
ecosystem as Imaginext."**

Not:

**"This is a completely different generic SaaS template."**
