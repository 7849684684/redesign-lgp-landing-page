# LGP Facelift Audit Results + Agent Brief for Product Sites

**Date:** 2026-04-01
**Applies to:** All LGP product sites (Shortlist, InsightRPG, PRISM, Strategy Soup, Courses)
**Reference docs:** `LGP-designer/docs/strategy/design-system.md`, `platform-positioning.md`, `brand-assets.md`, `print-styleguide.md`

---

## What Was Done on longgameproject.org

### Code Fixes
- **Button border-radius:** Fixed broken Tailwind v4 class `rounded-[${var(--radius-sm)}]` - this template literal pattern does not work with Tailwind's JIT compiler. Replaced with `rounded-sm` which maps to the theme token. **All products using Tailwind v4 should audit for this pattern.**
- **Border widths:** `border-l-3` is not a valid Tailwind class. Use `border-l-[3px]` instead.
- **Internal vs external links:** ProductCard was applying `target="_blank"` to internal links (e.g. `/mastermind`). Links starting with `/` should use Next.js `<Link>` without `target="_blank"`.

### Accessibility (must-implement on all products)
- **Focus indicators:** Added `*:focus-visible { outline: 2px solid var(--color-brand-teal); outline-offset: 2px; }` to globals.css. **Every product must have visible focus indicators.** WCAG 2.4.7.
- **Skip-to-content link:** Added `<a href="#main-content" className="skip-to-content">Skip to content</a>` before the endorser bar, with `id="main-content"` on `<main>`. **Every product must implement this.** WCAG 2.4.1.
- **Heading hierarchy:** Ensured no heading levels are skipped (h1 > h2 > h3). Audit all products for `<p>` tags styled to look like headings - use semantic heading tags.

### Dark Mode
- **Implementation pattern:** System preference detection via `prefers-color-scheme` + manual toggle stored in `localStorage` + `data-theme="dark"` attribute on `<html>`.
- **FOUC prevention:** Inline script in `<head>` reads localStorage/system preference and sets `data-theme` before first paint. This is the standard Next.js pattern.
- **Toggle component:** `ThemeToggle.tsx` - sun/moon icon button in the site nav.
- **All products must support both light and dark modes** per design-system.md. Tokens for dark mode are defined in `lgp-tokens.css`.

### Design Changes
- **Section rhythm:** Replaced uniform `py-16 md:py-24 border-t border-surface-2` on every section with varied spacing. Hero gets the most breathing room, compact sections (social proof) are tighter, the ecosystem centrepiece section is generous.
- **Teal social proof band:** Stats and testimonials now sit on a `bg-brand-teal text-white` full-width band instead of another white section. This creates a visual break and gives stats authority.
- **Tiered ecosystem layout:** Products organised visually by tier (free = compact/no borders, paid = featured cards with borders, services = text with accent left-border). Not a flat grid of identical cards.
- **Cross-product CTAs:** Added `CrossProductCTA` component at natural exit points routing users between products.
- **Footer logo:** Changed from `lgp-horizontal-teal-solid.svg` (full wordmark) to `lgp-icon-teal-solid.svg` (28x28 icon) + "The Long Game Project" in Newsreader text, per brand-assets.md specification.

---

## What Other Product Sites Must Implement

### Required (blocking - do before next deploy)

1. **Endorser bar + shared footer**
   - Every product must have the endorser bar at the top and ecosystem footer at the bottom
   - Endorser bar icon: `lgp-icon-teal-solid.svg` at 20x20px
   - Footer: `lgp-icon-teal-solid.svg` at 28x28 + "The Long Game Project" in Newsreader text
   - Set `aria-current="page"` on the link matching the current product
   - HTML/CSS patterns: see `assets/lgp-endorser.html` and `assets/lgp-endorser.css`

2. **Design tokens**
   - Import or implement tokens from `assets/lgp-tokens.css`
   - Each product sets its own `--accent` and `--accent-lighter` after importing shared tokens
   - Product accent colours:
     - Shortlist: `#4A7C59`
     - InsightRPG: `#B45309`
     - PRISM: `#A0522D`
     - Strategy Soup: `#3D4F5F`
     - Courses: `#1A3A3A` (master brand)

3. **Typography**
   - Newsreader + Source Sans 3 on all products (see design-system.md for per-product weighting)
   - LGP main does NOT use Space Grotesk - that is for Strategy Soup and Shortlist only
   - Load via Google Fonts link in `<head>` (see lgp-tokens.css comments for exact URL)

4. **Dark mode support**
   - Implement `data-theme="dark"` pattern with system preference + manual toggle
   - Use the dark mode token values from lgp-tokens.css
   - Test that all text meets WCAG AA contrast in both modes

5. **Accessibility basics**
   - Focus indicators on all interactive elements
   - Skip-to-content link
   - Semantic heading hierarchy (no skipped levels)
   - Touch targets minimum 44x44px on mobile
   - Alt text on all images

### Recommended (do in next sprint)

6. **Cross-product CTAs** at natural exit points
   - "Want to go deeper?" component routing users to adjacent products
   - See `CrossProductCTA.tsx` for the pattern
   - Pathways are defined in platform-positioning.md under "Cross-Product Pathways"

7. **Section rhythm variation**
   - Avoid uniform spacing on every section
   - Vary padding: hero gets most, compact info sections get less, CTAs get generous space
   - Not every section needs a `border-top` divider

8. **Social proof**
   - If a product displays stats or testimonials, consider a teal band treatment
   - Stats use Source Sans 3 300 weight with `tabular-nums` (not the editorial font)

---

## What Was NOT Done on longgameproject.org (known gaps)

These items were identified in the audit but not addressed in this pass. Other agents should check for these on their sites too.

1. **Contact form uses `mailto:` action** - opens email client instead of submitting. Needs a proper form handler (Formspree, API route, or similar). All products with forms should use proper form submission.

2. **No loading/error states for dynamic content** - MDX article page has no loading skeleton or error boundary. Products with dynamic content should implement these.

3. **Hero headline wraps awkwardly at intermediate viewports (768-900px)** - The `<br>` forces desktop line breaks that don't work at tablet sizes. Use CSS `word-break` or fluid typography (`clamp()`) instead of hard breaks.

4. **ProductCard accent colours use inline styles** - `color-mix(in srgb, ${accentColor} 12%, transparent)` works but won't respect dark mode token overrides. Consider mapping to CSS custom properties per product.

5. **No animation/motion** - The design system doesn't mandate it, but purposeful entrance animations (staggered fade-in on scroll) would add editorial polish. Keep it subtle - exponential easing, opacity + transform only, respect `prefers-reduced-motion`.

6. **No imagery** - Brand-assets.md specifies photography direction (people thinking, tactile objects, warm tones) but no assets are available yet. When photography is commissioned, integrate per the style guide.

7. **Team page is sparse** - Single person card with placeholder content. Expand when team bios are available.

8. **No favicon manifest / apple-touch-icon** - Only SVG favicon exists. Add `manifest.json` and apple-touch-icon for PWA/mobile bookmark support.

9. **No `prefers-reduced-motion` handling** - When motion is added, wrap animations in `@media (prefers-reduced-motion: no-preference)`.

---

## Design System Compliance Checklist for Agents

Use this checklist when auditing any LGP product site:

- [ ] Uses Newsreader + Source Sans 3 (weighted per design-system.md table)
- [ ] Uses deep teal (#1A3A3A) as structural colour, amber (#B8860B) for CTAs/highlights
- [ ] Uses warm stone neutrals (surface-0 through surface-3) - never cool/blue greys
- [ ] Has endorser bar with `lgp-icon-teal-solid.svg` and ecosystem links
- [ ] Has ecosystem footer with three columns (Ecosystem, Product-specific, Company)
- [ ] Sets product-specific `--accent` and `--accent-lighter` CSS variables
- [ ] Supports dark mode via `data-theme="dark"` attribute
- [ ] Has visible focus indicators on all interactive elements
- [ ] Has skip-to-content link
- [ ] Has semantic heading hierarchy (h1 > h2 > h3, no skips)
- [ ] Touch targets >= 44x44px on mobile
- [ ] No #0080FF (old blue) anywhere
- [ ] No pure black (#000) or pure white (#fff) - always tinted
- [ ] No cool grey text on coloured backgrounds
- [ ] Border radius is minimal (rounded-sm for buttons, rounded-md for cards)
- [ ] Cross-product CTA at minimum one natural exit point
