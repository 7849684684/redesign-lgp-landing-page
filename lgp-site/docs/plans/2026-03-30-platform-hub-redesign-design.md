# LGP Platform Hub Redesign - Design Document

## Context
Rebuilding longgameproject.org from a consulting brochure into the platform hub for the LGP product ecosystem. Full visual redesign with new brand identity (deep teal + amber), new fonts (Newsreader + Source Sans 3), and new positioning (product ecosystem, not consulting).

## Design System
- **Fonts:** Newsreader (editorial, 300-700) + Source Sans 3 (clear, 300-700)
- **Colours:** Deep teal (#1A3A3A) primary + amber (#B8860B) CTAs, warm white surfaces (#FAFAF8)
- **Dark mode:** Via `data-theme="dark"` attribute
- **Tokens:** Mapped from lgp-tokens.css into Tailwind v4 @theme inline block
- **No:** roughjs, hand-drawn effects, Caveat, Fraunces, Inter, JetBrains Mono, #0066FF blue

## Page Structure
- `/` - Homepage: endorser bar, hero, problem statement, product ecosystem grid, social proof, how-it-works, consulting preview
- `/consulting` - Full consulting sales page (replaces /services)
- `/mastermind` - Mastermind groups page (amber accent dominant)
- `/about` - Company philosophy (restyled from existing)
- `/team` - Team page (new, placeholder content)
- `/resources` - Blog/content hub (restyled from existing MDX system)
- `/resources/[slug]` - Individual articles (restyled)
- `/contact` - Contact page (restyled)

## Shared Chrome
- **Endorser bar:** Sticky top bar linking all LGP products (from lgp-endorser.html pattern)
- **Site nav:** Below endorser, with logo + page links
- **Ecosystem footer:** Three-column footer with Ecosystem/Services/Company columns

## Content Strategy
- Reuse existing copy from about, services, stats, testimonials
- Placeholder copy for new pages (consulting, mastermind, team)
- Keep MDX blog system and downloads manifest

## Tech
- Next.js 16 + React 19 + Tailwind v4 + TypeScript (keep)
- gray-matter + next-mdx-remote (keep)
- Remove: roughjs
- Logos from assets/logos/ copied to public/logos/
