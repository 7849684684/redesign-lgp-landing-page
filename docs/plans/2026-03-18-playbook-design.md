# The Playbook - LGP Landing Page Redesign v3

## Design Concept: "The Playbook"

A beautifully typeset strategy document that someone has been *working in*. Clean editorial structure underneath, hand-drawn tactical annotations layered on top - circles, arrows, Xs and Os, crossouts, margin notes. The site feels like a coach's working playbook: premium paper stock, confident typography, with strategic marks scribbled in blue and ink.

## Visual System

### Paper Quality
- Subtle paper grain texture on cream background (CSS noise or SVG filter)
- Very faint fold line running vertically down centre (barely visible)
- Slight vignette/edge darkening
- Dark proof section has different, denser texture (card stock insert feel)

### Hand-drawn Marks (SVG paths, animated via GSAP stroke-dasharray)
- **Circles** - imperfect ovals around key words/stats (blue or ink)
- **Arrows** - connecting ideas, pointing to CTAs (ink or blue, angled)
- **X and O markers** - tactical symbols on service cards (blue)
- **Underlines** - wobbly lines beneath key phrases (blue)
- **Crossouts** - line through wrong idea with handwritten correction above
- **Margin annotations** - Caveat handwriting font, slightly rotated, muted colour

### Colour Palette
- Cream `#FAF8F5` - page base (the paper)
- Ink `#1A1A1A` - text and most hand-drawn marks (pencil)
- Blue `#0080FF` - key highlights, CTAs, important circles/underlines (blue marker)
- Blue hover `#0066CC` - button hover states
- Muted `#6B6560` - secondary text, lighter annotations
- Surface `#F0EDE8` - card backgrounds
- Rule `#E0DBD4` - borders, dividers
- White `#FFFFFF` - card backgrounds in some contexts

### Typography
- **Fraunces** (display) - headlines, provocative statements
- **Inter** (body) - explanatory text, paragraphs
- **JetBrains Mono** (mono) - section markers like "01 / THE PROBLEM"
- **Caveat** (handwriting) - margin annotations, corrections, notes

### Animation Rules
- Hand-drawn marks draw in on scroll (GSAP + stroke-dasharray/dashoffset)
- Counter stats animate up in proof section
- Blue rule draws left-to-right between sections on scroll
- Nothing else moves. No parallax, no fade-ins on text, no decorative motion.

## Page Sections

### 1. Navigation
- Fixed top, transparent on load, cream/paper bg + backdrop-blur on scroll
- Left: "THE LONG GAME PROJECT" in JetBrains Mono, tracked, small
- Right: section links (Inter, small) + "Book a Call" blue button
- Mobile: hamburger, slide-out panel
- No hand-drawn marks in nav

### 2. Hero (Section 01 / THE PROBLEM)
- Full viewport height, cream paper background with grain
- Headline (Fraunces, large): "Another offsite. Another strategy. Nothing changes."
- Hand-drawn blue circle animates around "Nothing changes" on load
- Subtitle (Inter, muted): "The Long Game Project is a strategy practice. We help teams and leaders get better at the decisions that matter most."
- Small ink arrow pointing toward CTA
- CTA: solid blue button "Find out how" (smooth scrolls down)
- Margin annotation (Caveat, muted, rotated): "sound familiar?"
- Generous whitespace - headline in upper third

### 3. Reframe (Section 02 / THE REFRAME)
- Cream background continues, blue rule draws in at top
- Opening (Fraunces, large): "The strategy was fine. Your team just never got to practise it."
- Body (Inter): two short paragraphs on practice gap - sport, surgery, military all practise, business strategy doesn't
- Hand-drawn crossout through "planning" in body text with "practice" written above in Caveat
- Blue underline draws in beneath "No reps. No rehearsal."

### 4. The Practice (Section 03 / THE PRACTICE)
- Cream background, blue rule draws in
- Statement (Fraunces, large): "We built The Long Game Project around a single idea: strategy is a skill, and skills need practice."
- Ink circle drawn around "skills need practice"
- Who-this-is-for line (Inter, muted): "We work with leadership teams, founders, and decision-makers who are done with strategy that lives in a slide deck."
- Client logos bar: CultureAmp, MARS, Deloitte, McKinsey, Monash, ALLFED - greyscale, small
- Caveat annotation above logos: "some of the teams we've worked with"

### 5. What We Build (Section 04 / WHAT WE BUILD)
- Cream background, blue rule draws in
- 2x2 grid of clean white cards on desktop, stacked on mobile
- Each card has: tactical marker (draws in), Fraunces title, Inter one-liner, blue "Learn more" link
- Exercise (O): "Rehearse decisions before they're real."
- Advisory (X): "Strategy that survives first contact."
- Tools (→): "Better decisions, daily."
- Products (◯): "Strategy you can pick up."

### 6. Proof (Section 05 / THE PROOF) - DARK SECTION
- Ink background, denser texture (card stock insert)
- Stats row: 134+ Scenarios | 10+ Years | $3.4B Marketcap | 74.9 NPS
- Fraunces, blue, counter-animated. Hand-drawn blue circles around each number.
- Arrow connecting "134+" to "74.9" with Caveat note: "volume drives quality"
- Three testimonial cards below with hand-drawn blue quotation marks
- Margin annotation: "the record speaks"

### 7. CTA (Section 06 / NEXT MOVE)
- Cream background, blue rule draws in
- Headline (Fraunces): "Let's talk about what's not working."
- Two paths side by side:
  - Left: "Book a discovery call" (solid blue button) + "No pitch. Just a conversation about your team."
  - Right: "Browse our tools and products" (outlined button) + "Self-serve resources for strategic practice."
- Hand-drawn arrow from headline toward primary CTA
- Caveat annotation: "start here"
- Email contact info below

### 8. Footer
- Ink background, clean, no hand-drawn marks
- Four columns: Brand, Navigate, Connect, Status
- JetBrains Mono blue headers
- "Accepting new clients" green pulse dot
- Copyright, privacy, terms

## Component Mapping (old -> new)
- Navigation.tsx -> Navigation (refactor)
- Hero.tsx -> Hero (rewrite)
- Problem.tsx -> Reframe (rewrite, rename)
- Method.tsx -> Practice (rewrite, rename)
- Offerings.tsx -> WhatWeBuild (rewrite, rename)
- Proof.tsx -> Proof (rewrite)
- Contact.tsx -> CTA (rewrite, rename)
- Footer.tsx -> Footer (refactor)
- NEW: HandDrawnMarks.tsx - shared SVG mark components
- NEW: PaperTexture.tsx or CSS-only paper grain effect

## New Dependency
- Google Font: Caveat (add to layout.tsx or via link tag)
