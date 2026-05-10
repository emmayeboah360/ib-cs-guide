# Design Brief: IB Computer Science Study Hub

## Direction

Cool Serene Academic Tech — professional, authoritative study platform with modern geometric typography and intuitive navigation hierarchy.

## Tone

Refined minimalism with intentional depth. Deep ocean blue conveys academic trust; cool undertones maintain student-friendly clarity without cuteness.

## Differentiation

Card-based structure with intentional surface treatments for every zone creates distinctive visual rhythm—header elevated with border, content sectioned with teal accents, footer grounded.

## Color Palette

| Token              | OKLCH           | Role                                    |
| ------------------ | --------------- | --------------------------------------- |
| background         | 0.98 0.008 230  | Cool off-white, spacious content area   |
| foreground         | 0.18 0.015 230  | Deep navy text, high contrast           |
| card               | 1.0 0.004 230   | Pure white surfaces, elevated content   |
| primary            | 0.42 0.14 240   | Deep ocean blue, trust & authority      |
| accent             | 0.6 0.15 170    | Teal highlight, student engagement      |
| muted              | 0.94 0.01 230   | Light gray, background alternation      |
| destructive        | 0.55 0.22 25    | Warm red, error states only             |

## Typography

- Display: Space Grotesk — modern, geometric, tech-forward headings
- Body: Figtree — warm, readable, approachable paragraphs and labels
- Mono: JetBrains Mono — code snippets and technical content
- Scale: Hero `text-5xl md:text-7xl font-bold tracking-tight`, Section `text-3xl md:text-5xl font-bold`, Label `text-sm font-semibold tracking-widest uppercase`, Body `text-base md:text-lg`

## Elevation & Depth

Subtle shadow hierarchy: `shadow-subtle` (1–3px, 8% opacity) for cards, `shadow-elevated` (4–12px, 12% opacity) for popovers. No shadows on primary surfaces; depth through background color layering and borders.

## Structural Zones

| Zone    | Background        | Border              | Notes                                           |
| ------- | ----------------- | ------------------- | ----------------------------------------------- |
| Header  | card bg-card      | border-b border-b   | Elevated navigation with logo, nav links, CTA   |
| Content | bg-background     | —                   | Main content, alternates with muted sections    |
| Sections| bg-muted/40       | —                   | Every other section for visual rhythm           |
| Footer  | bg-card           | border-t border-t   | Copyright, links, grounded bottom anchor        |

## Spacing & Rhythm

Spacious density with intentional micro-spacing. Section gaps `gap-12 md:gap-16`, content grouping `p-6 md:p-8`, micro-spacing `gap-2`. Vertical rhythm guides reader flow; card padding creates breathing room.

## Component Patterns

- **Buttons**: Primary (`bg-primary text-primary-foreground rounded-md`), secondary (`bg-secondary text-secondary-foreground`), outline (`border border-border`). Hover: `opacity-90 transition-opacity duration-200`
- **Cards**: `rounded-lg bg-card shadow-subtle border border-border`, padding `p-6`. Hover: subtle scale lift via `shadow-elevated`
- **Badges**: SL badge (`badge-sl bg-accent text-accent-foreground rounded-full`), HL badge (`badge-hl bg-primary text-primary-foreground rounded-full`), pill-shaped `px-2.5 py-0.5 text-xs font-semibold`
- **Links**: `text-primary hover:text-primary/80 underline underline-offset-2 transition-colors`

## Motion

- **Entrance**: Page fade-in on load (`fade-in 0.4s ease-out`), cards fade-up staggered (`fade-in-up 0.5s ease-out both`)
- **Hover**: Button opacity shift `opacity-90 duration-200`, link underline color shift, card shadow lift
- **Decorative**: None—motion is purposeful and sparse to maintain academic focus

## Constraints

- **No gradients**: Solid OKLCH colors only; gradients dilute authority
- **No animations in critical content**: Motion reserved for navigation and CTAs
- **Maximum 3 interactive colors**: Primary, accent, destructive; secondary is structural
- **Accessibility first**: WCAG AA+ contrast on all text/backgrounds; focus states on links via focus ring

## Signature Detail

Elsewhere-inspired card-based grid with alternating background colors (`bg-muted/40`) creates distinctive visual rhythm—immediately recognizable as professional, educational, and modern without feeling generic.
