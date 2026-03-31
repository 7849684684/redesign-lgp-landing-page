# LGP Product Site Design Alignment - Agent Brief

**Date:** 2026-04-01
**For:** Any agent managing an LGP product site (Shortlist, InsightRPG, PRISM, Strategy Soup, Courses)
**Context:** The master brand site (longgameproject.org) has been redesigned with a new design system. All product sites in the ecosystem need to align.

---

## Your Task

You are aligning this product site with The Long Game Project's unified design system. The goal is **family resemblance, not uniformity** - products share DNA but keep their own personality. A user should feel "this is an LGP thing" without every site looking identical.

---

## 1. Design Tokens

Import the shared design token file or implement these values in your CSS/Tailwind config.

**Source of truth:** `lgp-tokens.css` (available at the LGP-designer repo or copy the values below)

### Fonts

Load in your `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,300;1,6..72,400&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
```

Font weighting varies by product:

| Product | Primary font | Secondary font | Character |
|---------|-------------|----------------|-----------|
| **Shortlist** | Source Sans 3 | Newsreader | Data-forward, functional, clear |
| **InsightRPG** | Newsreader | Source Sans 3 | Narrative, analogue, approachable |
| **PRISM** | Newsreader | Source Sans 3 | Premium product, tactile, simple |
| **Strategy Soup** | Source Sans 3 | Newsreader | Technical, modern, analytical |
| **Courses** | Source Sans 3 | Newsreader | Instructional, clear, inviting |

**Space Grotesk** may be used on Strategy Soup and Shortlist only (as `--font-technical`). It must NOT appear on other products.

### Colours

Each product sets its own accent colour. All other colours are shared.

**Set your product accent:**
```css
:root {
  /* Override these for your product */
  --accent: #4A7C59;              /* Replace with your product colour */
  --accent-lighter: rgba(74, 124, 89, 0.1);
}
```

**Product accent colours:**

| Product | Accent | Lighter | Concept |
|---------|--------|---------|---------|
| Shortlist | `#4A7C59` | `rgba(74, 124, 89, 0.1)` | Sage/forest green - discovery, growth |
| InsightRPG | `#B45309` | `rgba(180, 83, 9, 0.1)` | Warm amber - analogue, crafted, firelight |
| PRISM | `#A0522D` | `rgba(160, 82, 45, 0.1)` | Rich copper/bronze - physical, tactile |
| Strategy Soup | `#3D4F5F` | `rgba(61, 79, 95, 0.1)` | Deep slate - analytical, precise |
| Courses | `#1A3A3A` | `rgba(26, 58, 58, 0.08)` | Master brand teal (subdomain of LGP) |

**Shared colours (do not change):**
```css
:root {
  /* Surfaces - warm stone, never cool/blue grey */
  --surface-0: #FAFAF8;     /* Page background */
  --surface-1: #F2F0EC;     /* Cards, elevated surfaces */
  --surface-2: #E5E2DC;     /* Borders, dividers */
  --surface-3: #D1CCC4;     /* Disabled, tertiary */

  /* Text - warm undertone, never pure black/white */
  --text-primary: #1C1917;
  --text-secondary: #57534E;
  --text-tertiary: #A8A29E;

  /* Master brand (for endorser bar, footer, cross-product elements) */
  --brand-teal: #1A3A3A;
  --brand-amber: #B8860B;
}
```

**Dark mode (required):**
```css
[data-theme="dark"] {
  --surface-0: #121210;
  --surface-1: #1C1A17;
  --surface-2: #2A2724;
  --surface-3: #3D3935;

  --text-primary: #F5F5F0;
  --text-secondary: #A8A29E;
  --text-tertiary: #78716C;

  --brand-teal: #3A7A7A;
  --brand-amber: #D4A017;

  /* Override your product accent for dark mode too */
  --accent: /* lighter version of your accent */;
  --accent-lighter: /* adjusted opacity */;
}
```

### Spacing, radius, containers

```css
:root {
  --radius-sm: 0.25rem;     /* Buttons, inputs */
  --radius-md: 0.5rem;      /* Cards, panels */
  --radius-lg: 0.75rem;     /* Modals, feature sections */

  --container-sm: 640px;    /* Focused reading */
  --container-md: 768px;    /* Standard content */
  --container-lg: 1024px;   /* Dashboard layouts */
  --container-xl: 1280px;   /* Max width */
}
```

Minimal rounding. This is not a playful consumer app. Slight rounding for warmth, predominantly rectangular.

---

## 2. Shared Components

### Endorser Bar (required - top of every page)

A thin sticky bar at the very top of the page, above your product's own navigation.

**Structure:**
```
[LGP icon] The Long Game Project    Shortlist  InsightRPG  PRISM  Strategy Soup  Courses
```

- LGP icon: `lgp-icon-teal-solid.svg` at 20x20px
- "The Long Game Project" text in Newsreader 400, text-sm
- Product links in Source Sans 3 400, text-xs, `--text-tertiary` colour
- Set `aria-current="page"` on the link matching YOUR product
- Background: `--surface-1`, border-bottom: `--surface-2`
- Sticky, z-index 9999
- On mobile (< 768px): hide product links, show only LGP brand

**HTML pattern:** See `lgp-endorser.html` in the LGP-designer assets folder.
**CSS:** See `lgp-endorser.css`.

### Shared Footer (required - bottom of every page)

**Structure:**
```
[LGP icon 28x28] The Long Game Project (in Newsreader)
Strategic thinking is a skill. Practice it.

Ecosystem           [Product]           Company
---------           ---------           -------
Shortlist           [Your product-      About
InsightRPG           specific links]    Team
PRISM                                   Blog
Strategy Soup                           Contact
Courses
Consulting

(c) 2026 The Long Game Project. Building better thinkers.
```

- LGP icon: `lgp-icon-teal-solid.svg` at 28x28px, paired with "The Long Game Project" in Newsreader 400
- Three columns on desktop, single column on mobile
- The middle column is product-specific - put your product's own navigation here
- All ecosystem links open in new tabs (`target="_blank"`)
- Internal company links go to longgameproject.org

### Dark Mode Toggle (required)

- Sun/moon icon button in your product's navigation
- Reads `localStorage` key `lgp-theme` on load
- Falls back to `prefers-color-scheme: dark` system preference
- Sets `data-theme="dark"` on `<html>` element
- Stores preference in `localStorage` as `lgp-theme`
- FOUC prevention: inline `<script>` in `<head>` that reads preference before first paint:

```js
(function(){try{var t=localStorage.getItem('lgp-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}})()
```

### Cross-Product CTA (recommended - at natural exit points)

Place at the bottom of pages where a user might want to explore adjacent products.

**Structure:**
```
[Go deeper]                              (label, uppercase, --text-tertiary)
Strategy Soup                            (product name, Newsreader)
Interrogate your own strategy. Argue with it.   (description, Source Sans 3)
Try it ->                                (link, --accent colour)
```

Background: `--surface-1`, border: `--surface-2`, rounded-md.

**Cross-product pathways (which product links to which):**
- Shortlist → PRISM ("Want cards to run better sessions?")
- InsightRPG → PRISM ("Want structured prompts for your exercises?")
- PRISM → Strategy Soup ("Want to simulate your actual strategy?")
- Strategy Soup → Consulting ("Want a facilitated deep-dive?")
- Any product → Masterminds ("Want ongoing practice with a group?")
- Consulting clients → Strategy Soup, PRISM, Masterminds ("Keep practising between engagements")

---

## 3. Accessibility Requirements

These are non-negotiable. Every product must implement all of these.

### Focus indicators
```css
*:focus-visible {
  outline: 2px solid var(--brand-teal);  /* or your --accent colour */
  outline-offset: 2px;
}
```

### Skip-to-content link
```html
<a href="#main-content" class="skip-to-content">Skip to content</a>
<!-- endorser bar -->
<!-- your nav -->
<main id="main-content">...</main>
```

With CSS:
```css
.skip-to-content {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 9999;
  padding: 0.5rem 1rem;
  background: var(--brand-teal);
  color: var(--surface-0);
  font-size: 0.875rem;
}
.skip-to-content:focus {
  left: 0.5rem;
  top: 0.5rem;
}
```

### Heading hierarchy
- Every page must have exactly one `<h1>`
- Headings must not skip levels (h1 > h2 > h3)
- Do not use `<p>` tags styled to look like headings - use semantic heading tags

### Touch targets
- All interactive elements must be at least 44x44px on mobile
- Endorser bar links can be smaller on desktop but must be hidden (not tiny) on mobile

### Colour contrast
- All text must meet WCAG AA contrast ratios in both light and dark mode
- `--text-primary` on `--surface-0`: passes
- `--text-secondary` on `--surface-0`: passes
- `--text-tertiary` on `--surface-0`: check carefully - may need adjustment for small text

---

## 4. Design Principles to Follow

From the LGP design system document:

1. **Confidence without arrogance.** Premium, worth paying for. Never cold, never corporate.
2. **Warmth without softness.** Approachable, human, but rigorous underneath.
3. **Clarity above all.** Strong hierarchy, obvious next steps, no visual noise.
4. **Editorial, not corporate.** Think quality magazine, not annual report. Varied rhythm, intentional whitespace. Not everything in cards. Not everything in grids.
5. **Family resemblance, not uniform.** Share DNA but keep your own personality.

### Anti-patterns to avoid
- Uniform section spacing (same padding on every section)
- Identical card grids (same-sized cards repeated endlessly)
- `#0080FF` (old LGP blue) - retired permanently
- Pure black (`#000`) or pure white (`#fff`) - always use tinted values
- Cool/blue greys - always use warm stone greys
- Generic corporate stock imagery
- Gradient text, glassmorphism, neon accents on dark backgrounds

---

## 5. Logo Assets

Available in the LGP-designer repo at `assets/logos/`.

| Context | File | Size |
|---------|------|------|
| Endorser bar | `lgp-icon-teal-solid.svg` | 20x20px |
| Footer | `lgp-icon-teal-solid.svg` | 28x28px |
| Dark mode endorser/footer | `lgp-icon-white.svg` | Same sizes |

Do NOT use:
- The old #0080FF blue logo variants
- The horizontal wordmark in the endorser bar (icon only)
- Any logo variant not from the current `assets/logos/` set

---

## 6. Verification Checklist

After implementing, verify all of the following:

- [ ] Endorser bar present at top of every page with correct icon and links
- [ ] `aria-current="page"` set on your product's endorser link
- [ ] Ecosystem footer present with three columns
- [ ] Footer uses icon (28x28) + Newsreader text, not horizontal wordmark SVG
- [ ] Dark mode toggle present and functional
- [ ] Dark mode respects system preference on first load
- [ ] Dark mode preference persists across page navigations
- [ ] No FOUC (flash of unstyled content) when loading in dark mode
- [ ] Focus indicators visible on all interactive elements (tab through entire page)
- [ ] Skip-to-content link present and functional
- [ ] Heading hierarchy is correct (inspect with browser dev tools)
- [ ] All touch targets >= 44x44px on mobile
- [ ] Fonts are Newsreader + Source Sans 3 (weighted per product table above)
- [ ] No #0080FF, no pure #000/#fff, no cool greys anywhere
- [ ] Product accent colour is correct per the table above
- [ ] At least one cross-product CTA at a natural exit point
- [ ] Production build passes without errors
- [ ] Site renders correctly at 375px, 768px, 1024px, 1440px viewports
- [ ] WCAG AA contrast met in both light and dark mode
