# The Strategy Journal - Design Document

**Date:** 2026-03-13
**Project:** The Long Game Project - Website Redesign
**Approach:** Warm editorial with zine energy

## Colour Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#FAF8F5` | Page background |
| `--text` | `#1A1A1A` | Body text, headings |
| `--muted` | `#6B6560` | Secondary text |
| `--accent` | `#0080FF` | Links, CTAs, brand |
| `--surface` | `#F0EDE8` | Card backgrounds |
| `--border` | `#E0DBD4` | Rules, dividers |
| `--dark` | `#1A1A1A` | Footer, inverted sections |
| `--highlight` | `#FFF3E0` | Callout blocks |

## Typography

| Role | Font | Size | Weight |
|------|------|------|--------|
| Display H1 | Fraunces | 72-96px | 900 |
| Section H2 | Fraunces | 48-64px | 700 |
| Subhead H3 | Inter | 24-32px | 600 |
| Body | Inter | 17px/1.7 | 400 |
| Label | JetBrains Mono | 11px | 400, uppercase |
| Pull quote | Fraunces | 28-36px | 400 italic |

## Design Principles

1. **Warm authority** - cream backgrounds, serif display type, editorial spacing
2. **Zine confidence** - dramatic weight mixing, oversized numbers, slight rotations on labels
3. **Strategic restraint** - blue accent used sparingly for maximum impact
4. **Content-first** - generous whitespace, readable body text, clear hierarchy

## Page Structure

### Home (Landing)
- Hero: Large Fraunces headline, editorial subtitle, single blue CTA
- Problem: Editorial stat blocks with pull quotes
- Method: Horizontal card scroll (desktop), stacked (mobile)
- Offerings: Three editorial cards with warm surface backgrounds
- Proof: Testimonial pull quotes with attribution, metrics bar
- Contact: Split layout - editorial text left, form right
- Footer: Dark inverted section with warm grey text

### About (future)
### Services x3 (future)
### Case Studies (future)
### Blog (future)
### Contact (standalone, future)

## Animation Approach
- GSAP ScrollTrigger for reveal animations
- Subtle fade-up (30-60px) with stagger
- No glitch, no noise, no brutalism effects
- Smooth transitions, editorial feel

## Responsive Strategy
- Mobile-first with breakpoints at 768px and 1024px
- Single column mobile, multi-column desktop
- Touch-friendly targets (min 44x44px)
- Horizontal scroll converts to vertical stack on mobile
