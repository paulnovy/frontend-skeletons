# Quant Business Intelligence Design Book

## Skeleton name and project type
Quant Business Intelligence is a premium business intelligence dashboard and report builder skeleton in the Analytics category.

## Intended audience
Analytics teams, revenue operations, product leaders, and data-informed executives.

## Main user problem solved
Lets teams assemble trusted reporting quickly while preserving lineage, connectors, and metric definitions.

## UX assumptions and user flow
The interface assumes users arrive with a concrete operational question. The page starts with orientation and trust signals, then moves into capabilities, current work cards, recent activity, flow health, and a concise philosophy section that explains why the product is structured this way.

## Page structure description
The page includes a sticky responsive header, hamburger navigation, large first-viewport brand signal, operational preview stage, metric grid, capability cards, workflow cards, activity log, chart panel, design philosophy quote, and footer credit.

## Key components list
- Responsive hamburger navigation
- Brand lockup with category caption
- Hero with product preview and realistic status rows
- Metric cards with domain-specific performance numbers
- Capability cards for core workflow areas
- Progress-enabled operational cards
- Activity feed with event history
- CSS-only workflow chart
- Footer with required credit

## Visual mood rationale
The visual system uses the requested white/blue palette and restrained agency-style spacing. The design avoids generic dashboard filler by presenting realistic content, strong information hierarchy, and product surfaces that can be adapted into a live prototype.

## Color usage description
Primary accent: `#2563eb`. Secondary accent: `#0ea5e9`. Background color: `#f7fbff`. Accent colors are reserved for progress, state, active controls, and navigational emphasis.

## Typography choices
Inter carries the main interface because it is crisp at dashboard sizes and polished at hero scale. JetBrains Mono is loaded for numeric or system-like fragments where a product team may want technical detail.

## Interaction rules
Cards lift subtly on hover, links and buttons expose visible focus states, menu state is announced through `aria-expanded`, and motion is short enough to feel responsive. Reduced motion preferences are respected.

## Responsiveness approach
The layout starts as a single-column mobile interface, expands card grids at tablet width, and switches to a two-column hero with desktop navigation above 980px. All major surfaces use CSS Grid or Flexbox with stable gaps and no fixed viewport-height traps.

## Accessibility notes
The skeleton uses semantic landmarks, descriptive labels, a skip link, keyboard-accessible navigation, visible focus styles, non-color status text, and large touch targets.

## Potential commercial use cases
- Agency concept presentation
- SaaS prototype starter
- Product discovery workshop
- Investor demo shell
- Internal product redesign reference
