# Implementation Plan: The Playbook Redesign

## Phase 1: Foundation
1. Update globals.css - paper grain texture, fold line, vignette, Caveat font tokens, mark animation utilities
2. Update layout.tsx - add Caveat font import
3. Create HandDrawnMarks.tsx - shared SVG components (Circle, Arrow, Cross, Underline, XMark, OMark) with GSAP stroke animation
4. Update page.tsx - rename component imports to match new structure

## Phase 2: Components (can be parallelised)
5. Rewrite Navigation.tsx - clean nav on cream, scroll state, mobile menu
6. Rewrite Hero.tsx - headline, circle mark on "Nothing changes", arrow to CTA, margin note
7. Create Reframe.tsx (replaces Problem.tsx) - practice argument, crossout mark, underline
8. Create Practice.tsx (replaces Method.tsx) - positioning statement, circle mark, logos bar
9. Create WhatWeBuild.tsx (replaces Offerings.tsx) - four lane cards with tactical markers
10. Rewrite Proof.tsx - dark section, counter stats with circles, testimonials with drawn quotes
11. Create CTA.tsx (replaces Contact.tsx) - dual CTA paths, arrow, annotation
12. Rewrite Footer.tsx - clean four-column footer

## Phase 3: Polish & Deploy
13. Build and fix any TypeScript errors
14. Verify all sections render and animations work
15. Deploy to Vercel preview
16. Update session log

## Stop-safe notes
- Each component is independently buildable
- Phase 1 must complete before Phase 2
- Phase 2 components can be built in any order
- If stopping mid-Phase 2, committed components will render, uncommitted ones will show old versions
- Commit after each component completion
