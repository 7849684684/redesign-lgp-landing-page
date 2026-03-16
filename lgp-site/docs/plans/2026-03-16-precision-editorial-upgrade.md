# Precision Editorial Upgrade - Design Document

**Date:** 2026-03-16
**Status:** Approved

## Problem

The current broadsheet-zine rebuild has good structure and content but reads like a minimalist blog template. Zero visual authority, no brand personality, no "these people are elite" energy. A consulting firm that sells high-performance strategic thinking needs a site that demonstrates high performance.

## Design Direction

Both visual boldness AND interaction polish. A confident visual system with purposeful animation that reinforces the "pressure-tested" brand.

## Changes

### 1. globals.css

- Add CSS grid texture utility (fine lines, near-invisible, for dark sections)
- Add `clipPath` reveal animation keyframes
- Add gradient bleed utility for section transitions
- Add counter animation support
- Add pulsing dot animation for footer status

### 2. Hero (dark, full impact)

- Switch to `bg-ink` with cream/white text
- Push headline to `clamp(3rem, 8vw, 6rem)` - much bigger
- Add 4px blue accent line that draws across before headline (GSAP timeline)
- Add subtle CSS grid texture background
- Subtitle in `text-cream/70`
- CTA: "Book a Strategy Call" as a proper button (`bg-blue text-white px-6 py-3`)
- Hero watermark "00" gets parallax scroll offset via GSAP ScrollTrigger
- Bottom rule: 2px blue instead of 1px rule colour

### 3. Navigation

- Add "Get in Touch" CTA button (blue, small) on desktop
- Add active section indicator (blue underline that follows scroll position via IntersectionObserver)

### 4. Problem (stays dark - bg-ink)

- Stats numbers: massive (`clamp(3rem, 6vw, 5rem)`), blue colour, counter animation counting up on scroll
- Pull quote: oversized blue opening quotation mark, offset positioning
- Section entry: thick 4px blue top rule that draws in on scroll

### 5. Method (cream section)

- Section entry: thick 4px ink top rule draws in
- Method rows: hover state adds blue left border (3px, slides in)
- Watermark gets parallax
- `clipPath` reveal on heading instead of simple fade

### 6. Offerings (switch to dark - bg-ink)

- Dark section with cream text for visual rhythm
- Offering blocks: cream text, blue subtitles
- Features: blue em-dash bullets
- "Enquire" links: blue with arrow
- Dividers between offerings: cream/20 opacity

### 7. Proof (cream section)

- Section entry: thick blue top rule draws in
- Metrics: massive blue numbers with counter animation
- Testimonial cards: white background, subtle shadow, blue top accent (3px)
- Staggered layout preserved but cards get more visual weight

### 8. Contact (dark section)

- Dark background for penultimate punch
- Form inputs: transparent with cream bottom borders
- Submit: proper blue button, not text link
- Section entry: blue top rule

### 9. Footer

- Bring back "Accepting new clients" with pulsing green dot
- Richer 4-column layout: brand, navigate, connect, status
- Slightly more padding

### Section Rhythm

```
Hero        → dark  (ink)
Problem     → dark  (ink) - continuous dark block with hero
Method      → cream (light)
Offerings   → dark  (ink)
Proof       → cream (light)
Contact     → dark  (ink)
Footer      → dark  (ink) - continuous with contact
```

### Animation Approach

- GSAP ScrollTrigger for all scroll-based animations
- `clipPath: inset(0 100% 0 0)` → `clipPath: inset(0 0% 0 0)` for text reveals
- Counter animation via GSAP `textContent` tween for stat numbers
- Parallax via ScrollTrigger `scrub: true` on watermark elements
- Hover transitions via CSS `transition` (not GSAP) for performance
- Section top rules: `scaleX(0)` → `scaleX(1)` on scroll trigger

### What stays the same

- Typography: Fraunces (display), Inter (body), JetBrains Mono (labels)
- Colour tokens: cream, ink, blue, muted, rule, terracotta, surface
- Content: all copy, stats, testimonials, offerings data unchanged
- Tech stack: Next.js 16, Tailwind v4, GSAP, TypeScript
- Page structure: same 8 components, same order
