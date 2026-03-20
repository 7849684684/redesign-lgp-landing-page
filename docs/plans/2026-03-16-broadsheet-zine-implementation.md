# Broadsheet x Zine Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete ground-up rebuild of The Long Game Project landing page with a "Broadsheet x Zine" editorial aesthetic - typography-dominant, asymmetric, confident.

**Architecture:** Single-page Next.js app with 8 section components composed in `page.tsx`. Each component is a `"use client"` React component using GSAP for minimal scroll-triggered animations. Tailwind v4 with `@theme inline` tokens for design system. No test framework - visual verification via preview server.

**Tech Stack:** Next.js 16 + React 19, Tailwind CSS v4, TypeScript, GSAP + ScrollTrigger, Fraunces + Inter + JetBrains Mono fonts.

**Design doc:** `docs/plans/2026-03-16-broadsheet-zine-design.md`

---

### Task 1: Rewrite globals.css - Design Tokens and Base Styles

**Files:**
- Modify: `src/app/globals.css` (complete rewrite)

**Step 1: Rewrite the entire globals.css**

Replace all contents with:

```css
@import "tailwindcss";

@theme inline {
  --color-cream: #FAF8F5;
  --color-ink: #1A1A1A;
  --color-muted: #6B6560;
  --color-blue: #0080FF;
  --color-blue-hover: #0066CC;
  --color-terracotta: #C45A3C;
  --color-surface: #F0EDE8;
  --color-rule: #E0DBD4;
  --color-white: #FFFFFF;

  --font-display: "Fraunces", Georgia, serif;
  --font-body: var(--font-inter), system-ui, sans-serif;
  --font-mono: var(--font-mono), "JetBrains Mono", monospace;
}

:root {
  scroll-behavior: smooth;
}

html {
  overflow-x: hidden;
  background: var(--color-cream);
}

body {
  background: var(--color-cream);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.7;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: var(--color-blue);
  color: #fff;
}

/* Scrollbar */
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(--color-cream); }
::-webkit-scrollbar-thumb { background: var(--color-rule); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--color-muted); }
```

Key changes from previous version:
- Renamed tokens: `bg` -> `cream`, `text` -> `ink`, `accent` -> `blue`, `border` -> `rule`
- Added `terracotta` token
- Removed ALL utility classes (`.font-display`, `.section-label`, `.card-hover`, `.bg-number`, `.pull-quote`, etc.) - components use Tailwind classes directly
- No animation utilities - GSAP handles everything inline

**Step 2: Verify build**

Run: `npm run build` from `lgp-site/`
Expected: Compiles successfully

**Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: rewrite design tokens for broadsheet-zine theme"
```

---

### Task 2: Update layout.tsx - Add Fraunces 300 weight

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Update the Google Fonts link to include weight 300**

The existing link already includes weight 300 (`0,9..144,300`), so this is already correct. No changes needed to layout.tsx.

**Step 2: Commit** (skip if no changes)

---

### Task 3: Rewrite Navigation Component

**Files:**
- Modify: `src/components/Navigation.tsx` (complete rewrite)

**Design spec:**
- Fixed/sticky, transparent initially, white with border on scroll
- Logo: "THE LONG GAME" in Fraunces Bold (700), left
- Nav links: "About", "Method", "Services", "Results", "Contact" in Inter, right
- No blue anywhere in nav
- Mobile: hamburger, full-screen cream overlay with large Fraunces links
- GSAP: fade-in on mount

**Step 1: Write the complete Navigation component**

Component must:
- Use `"use client"`, `useState`, `useEffect` for scroll detection
- Scroll threshold: 50px adds `bg-white/95 backdrop-blur-sm border-b border-rule`
- Logo: `font-[Fraunces] font-bold text-ink tracking-tight`
- Links: `font-[var(--font-body)] text-sm text-muted hover:text-ink transition-colors`
- Mobile menu: full viewport overlay, links in Fraunces at large size
- Max content width: 1400px with px-6 md:px-10 padding

**Step 2: Verify in browser**

Check: Nav renders, scroll detection works, mobile hamburger opens/closes

**Step 3: Commit**

```bash
git add src/components/Navigation.tsx
git commit -m "feat: rewrite Navigation - minimal editorial sticky bar"
```

---

### Task 4: Rewrite Hero Component

**Files:**
- Modify: `src/components/Hero.tsx` (complete rewrite)

**Design spec:**
- Full viewport height, cream background
- Content left-aligned, max-width ~700px, sitting in left 60%
- Watermark "00" top-right: Fraunces 900, ~12rem, color `rule`, opacity 0.4
- Headline: two lines
  - "Your strategy is" - Fraunces 300, clamp(2.5rem, 7vw, 5rem)
  - "just a guess." - Fraunces 900, clamp(2.5rem, 7vw, 5rem)
  - Both lines in `ink` colour (NOT blue)
- Subtitle: Inter, muted, max-w-lg, 1-2 lines
- CTA: "Book a Strategy Call →" as blue text link (one of 5 blue uses), no button styling
- Bottom: full-width 1px horizontal rule in `rule` colour
- GSAP: timeline - rule draws (scaleX 0->1), headline fades up staggered, subtitle fades, CTA fades

**Step 1: Write the complete Hero component**

**Step 2: Verify in browser**

Check: Full viewport, left-aligned layout, weight contrast visible, no blue except CTA link

**Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: rewrite Hero - weight-contrast headline, asymmetric layout"
```

---

### Task 5: Rewrite Problem Component

**Files:**
- Modify: `src/components/Problem.tsx` (complete rewrite)

**Design spec:**
- Dark inverted section: bg `ink` (#1A1A1A), text `cream`
- Tighter vertical padding than hero: py-20 md:py-28
- Section marker "01" in JetBrains Mono, small, top of section, cream/muted
- Headline: "Most strategies fail before they meet reality" - Fraunces 700, cream
- Stats row: 3 stats horizontal (67%, 95%, 3x), Fraunces 900 at ~3.5rem, cream
  - Labels below each in Inter small, muted (cream/60)
  - No cards, no borders, no backgrounds - just numbers on dark
- Pull quote: Tyson quote in Fraunces 400 Italic, cream
  - Offset right (ml-auto, max-w-lg)
  - Large terracotta quotation mark (") before the quote, Fraunces 900, ~4rem
  - Attribution in JetBrains Mono, small, cream/40
- GSAP: ScrollTrigger - heading fades in, stats stagger in, quote fades in

**Step 1: Write the complete Problem component**

**Step 2: Verify in browser**

Check: Dark section, cream text, stats readable, terracotta quote mark visible

**Step 3: Commit**

```bash
git add src/components/Problem.tsx
git commit -m "feat: rewrite Problem - dark inverted section with stats and pull quote"
```

---

### Task 6: Rewrite Method Component

**Files:**
- Modify: `src/components/Method.tsx` (complete rewrite)

**Design spec:**
- Cream background, generous padding py-24 md:py-36
- Watermark "02" positioned absolute, Fraunces 900, ~15rem, color `rule`, opacity 0.15
- Headline with mixed weights:
  - "How we " (Fraunces 300) + "pressure-test " (Fraunces 900) + "your thinking" (Fraunces 300)
  - All in a single h2, using spans for weight changes
  - Size: clamp(2rem, 5vw, 3.5rem)
- Four methods as editorial rows (NOT cards, NOT horizontal scroll):
  - Each row: grid with left column (method number in mono + name in Fraunces Bold) and right column (description in Inter muted)
  - Thin 1px horizontal rule between each row
  - Method data: 1. Tabletop Exercises, 2. Red Team Thinking, 3. Strategic Wargaming, 4. Scenario Planning
- Max width 1000px for the rows (tighter than full width)
- GSAP: ScrollTrigger - heading fades in, rows stagger in, rules draw

**Step 1: Write the complete Method component**

**Step 2: Verify in browser**

Check: Watermark visible but subtle, mixed-weight headline works, rows cleanly separated

**Step 3: Commit**

```bash
git add src/components/Method.tsx
git commit -m "feat: rewrite Method - editorial rows with mixed-weight headline"
```

---

### Task 7: Rewrite Offerings Component

**Files:**
- Modify: `src/components/Offerings.tsx` (complete rewrite)

**Design spec:**
- Cream background, preceded by a bold 2px horizontal rule at top
- Section marker "03" in mono
- Three offerings stacked vertically as magazine feature blocks (NOT cards):
  1. Workshops (Tabletop Exercises)
  2. Masterminds (Peer Cohorts)
  3. Coaching (1:1 Strategic)
- Each offering block:
  - Fraunces 700 headline at ~2.5rem for the offering name
  - Subtitle in blue Inter (one of 5 blue uses) - the offering type
  - Description paragraph in Inter muted, max-w-2xl
  - 3-4 features as a list, each prefixed with an em dash, Inter
  - "Enquire →" text link in ink colour, hover:blue
  - 2px horizontal rule below each block
- No background colours on blocks, no borders, no cards
- Max width 900px for content (tight, editorial column)
- GSAP: ScrollTrigger - blocks stagger in

**Step 1: Write the complete Offerings component**

**Step 2: Verify in browser**

Check: Reads like magazine features, not product cards. Blue subtitle visible. Rules between.

**Step 3: Commit**

```bash
git add src/components/Offerings.tsx
git commit -m "feat: rewrite Offerings - magazine feature stacks"
```

---

### Task 8: Rewrite Proof Component

**Files:**
- Modify: `src/components/Proof.tsx` (complete rewrite)

**Design spec:**
- Dark inverted section: bg `ink`, text `cream`
- Section marker "04" mono, cream/40
- Metrics row: 4 stats (200+ leaders, 50+ organisations, 9.3/10 rating, 94% return)
  - Fraunces 900 at clamp(2.5rem, 5vw, 4rem), cream
  - Labels in Inter small, cream/50
  - Separated by thin vertical dividers (1px, cream/10)
  - Flex row on desktop, 2x2 grid on mobile
- Two testimonials below:
  - Staggered: first quote left-aligned (max-w-lg), second right-aligned (ml-auto max-w-lg)
  - Fraunces 400 Italic, cream, ~1.25rem
  - Attribution: name in Inter medium, role in mono small cream/40
  - No cards, no backgrounds, no borders
- GSAP: ScrollTrigger - metrics count up, quotes fade in staggered

**Step 1: Write the complete Proof component**

**Step 2: Verify in browser**

Check: Dark section, metrics readable, testimonials staggered left/right

**Step 3: Commit**

```bash
git add src/components/Proof.tsx
git commit -m "feat: rewrite Proof - dark section with staggered testimonials"
```

---

### Task 9: Rewrite Contact Component

**Files:**
- Modify: `src/components/Contact.tsx` (complete rewrite)

**Design spec:**
- Cream background, py-24 md:py-36
- Section marker "05" mono
- Headline mixed weight: "Let's " (Fraunces 300) + "talk strategy" (Fraunces 900)
- Two-column layout (lg:grid-cols-2, gap-16):
  - Left: 3 info items, each with label in JetBrains Mono uppercase and value in Inter
    - Based in: Australia (serving globally)
    - Response: Within 24 hours
    - First call: Always free
  - Right: Minimal form
    - Name input (text)
    - Email input (email)
    - Message textarea (no dropdown/select)
    - All inputs: border-b border-rule only (bottom border, no box), font-body, focus:border-blue
    - Submit: "Send →" as small blue text, not a big button
- Max width 1000px
- GSAP: ScrollTrigger - content fades in

**Step 1: Write the complete Contact component**

**Step 2: Verify in browser**

Check: Form inputs have bottom-border only, feels like writing a letter, info items clean

**Step 3: Commit**

```bash
git add src/components/Contact.tsx
git commit -m "feat: rewrite Contact - minimal letter-style form"
```

---

### Task 10: Rewrite Footer Component

**Files:**
- Modify: `src/components/Footer.tsx` (complete rewrite)

**Design spec:**
- Dark: bg `ink`, compact (py-12)
- Max width 1400px, px-6 md:px-10
- Two-column flex: left and right
  - Left: "The Long Game Project" in Fraunces Bold cream, one-line description in Inter cream/50
  - Right: flex row of links in Inter small cream/50, hover:cream
    - Links: About, Method, Services, Contact, Email
- Bottom: thin rule (cream/10), copyright in JetBrains Mono cream/30
- No green dot, no "accepting clients"
- No GSAP animation needed

**Step 1: Write the complete Footer component**

**Step 2: Verify in browser**

Check: Dark, compact, two-column, no decorative elements

**Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: rewrite Footer - minimal dark bar"
```

---

### Task 11: Polish Pass - Spacing and Responsive

**Files:**
- Modify: Any component that needs spacing adjustments

**Step 1: Review full page in browser at desktop width**

Check vertical rhythm between sections. The dark/light pattern should create natural breaks. Ensure:
- Hero has maximum breathing room
- Problem section is noticeably tighter
- Method and Offerings have generous but not excessive padding
- Contact matches Method padding

**Step 2: Review at mobile width (375px)**

Check:
- All text is readable without horizontal scroll
- Stats stack properly
- Method rows stack vertically
- Form is usable
- Navigation hamburger works

**Step 3: Fix any issues found**

**Step 4: Commit**

```bash
git add -A
git commit -m "fix: responsive and spacing polish pass"
```

---

### Task 12: Build and Deploy to Vercel

**Step 1: Run production build**

```bash
cd lgp-site && npm run build
```

Expected: Clean build, no errors

**Step 2: Deploy to Vercel preview**

```bash
npx vercel --yes
```

This deploys to a preview URL (not production). Record the URL.

**Step 3: Commit any build fixes if needed**

**Step 4: Share preview URL with user**
