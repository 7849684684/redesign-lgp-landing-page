# The Broadsheet x Zine - Design Document

## Date: 2026-03-16

## Concept
Editorial authority (FT Weekend, Monocle) with typographic guts (zine energy, Mork Borg-inspired weight contrast). The page reads like a beautifully typeset strategy article, not a SaaS landing page.

## Typography System
- **Fraunces Black (900)**: Hero headlines, massive statements
- **Fraunces Bold (700)**: Section headlines
- **Fraunces Light (300)**: Contrast word in mixed-weight headlines
- **Fraunces Regular Italic (400i)**: Pull quotes
- **Inter**: Body text, descriptions, nav links
- **JetBrains Mono**: Section markers, labels, metadata

Key technique: Mix weights within a single headline for energy. "Your strategy is" (300) / "just a guess." (900).

## Colour Palette
- `#FAF8F5` - Cream background (80% of page)
- `#1A1A1A` - Dark (inverted sections, text)
- `#0080FF` - Blue accent (max 5 uses on entire page)
- `#C45A3C` - Terracotta (1-2 moments: pull quote marks, a stat)
- `#F0EDE8` - Surface (subtle backgrounds)
- `#E0DBD4` - Border (rules, watermark numbers)
- `#6B6560` - Muted text

## Layout Principles
1. Asymmetric by default - left-heavy, text doesn't centre
2. Varied section heights - hero breathes, problem is tight
3. Break the column - pull quotes span wider, numbers bleed margins
4. No uniform card grids - editorial stacking instead
5. Dark/light rhythm: cream > dark > cream > cream > dark > cream

## Sections

### 1. Navigation
- Minimal sticky bar
- Logo: "THE LONG GAME" in Fraunces Bold, no icon
- Nav links in Inter, right-aligned
- Scrolled: white bar, subtle bottom border
- No blue in nav

### 2. Hero (full viewport)
- Left-aligned, 60% width
- Watermark "00" top-right, Fraunces Black, faded #E0DBD4
- Headline weight contrast: "Your strategy is" (300) / "just a guess." (900)
- Both lines in text colour, NOT blue
- Subtitle in Inter muted
- Single CTA: "Book a Strategy Call" - blue text link with arrow
- Bottom: full-width horizontal rule as section closer

### 3. Problem (dark, inverted)
- #1A1A1A background, cream text
- Marker "01" mono, top-left
- Headline: "Most strategies fail before they meet reality"
- 3 stats horizontal, Fraunces Black ~4rem, no cards
- Tyson pull quote, Fraunces Italic, terracotta quote mark

### 4. Method (cream, expansive)
- Watermark "02" massive faded number
- Mixed-weight headline: "How we" (300) + "pressure-test" (900) + "your thinking" (300)
- 4 methods as editorial rows (not cards):
  - Left: number + name (Fraunces Bold)
  - Right: description (Inter)
  - Thin rules between
- Vertical stacking, no horizontal scroll

### 5. Offerings (magazine feature stacks)
- Marker "03"
- Each offering = full-width block:
  - Large Fraunces headline
  - Blue subtitle (one of 5 blue uses)
  - Description paragraph
  - Feature bullets with em dashes
  - "Enquire" text link with arrow
  - Bold horizontal rules between

### 6. Proof (dark, inverted)
- 4 metrics, Fraunces Black, thin vertical dividers
- 2 testimonials staggered left/right, Fraunces Italic
- Attribution in mono

### 7. Contact (cream, warm)
- Marker "05"
- Mixed-weight headline: "Let's" (300) + "talk strategy" (900)
- Two-column: info left (mono), form right (name, email, textarea only)
- Submit: "Send" - small blue text button
- Form feels like writing a letter

### 8. Footer (dark, minimal)
- "The Long Game Project" Fraunces + one-line description
- Nav + email links
- Copyright in mono

## Animation (GSAP)
- Text: opacity 0->1, subtle 20px upward drift
- Horizontal rules: scaleX 0->1
- Stats: number count-up
- Nothing else. Invisible animation - page feels like it was always there.

## Responsive
- Mobile: everything single column
- Headlines scale down via clamp()
- Method rows stack vertically
- Stats stack 2x2 on mobile
- Testimonials stack vertically
