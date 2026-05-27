# Ember HR Talent OS Design Book

## Concept

Ember HR Talent OS is a calm recruiting command surface for teams that need fewer ambiguous hiring conversations. The first screen is the work product: candidate pipeline, interview schedule, scorecards, diversity guardrails, risk register, and headcount coverage.

## Design Tokens

- Milk: `#FFF9F0`
- Aubergine: `#3B1D54`
- Peach: `#FFB199`
- Lilac: `#D8B4FE`
- Sage: `#A7C957`
- Ink: `#24212A`
- Heading font: Outfit
- UI font: Inter
- Radius: 6px, 8px, 12px
- Cards: quiet milk and white surfaces with aubergine-tinted borders

## Layout

- Sticky top navigation keeps the workspace sections close.
- Summary grid leads with a strategic command panel and three operational metrics.
- Main workspace uses a wide candidate pipeline and a right-side intelligence column.
- Candidate details open in a right drawer with fit, stage, next step, risk, notes, and recommendation.
- Mobile collapses the workspace into one column and keeps today’s interviews and candidate action cards readable.

## UX Rules

- Every candidate card must expose fit, next step, and risk without opening the drawer.
- Color is a secondary signal; text labels carry the decision state.
- Scorecards show completion pressure, not vanity analytics.
- Hiring plan bars compare progress to forecast, keeping headcount risk visible.
- Diversity metrics are guardrails, not decorative badges.

## Accessibility

- Semantic landmarks are used for navigation, main content, sections, aside, footer, and candidate drawer.
- Candidate cards are real buttons and support keyboard focus.
- Left and right arrow keys move focus across candidate cards.
- The drawer exposes `aria-hidden` state and can be closed with Escape.
- Toasts use `role="status"` and `aria-live="polite"`.
- Reduced-motion preferences disable transitions and animations.

## Mobile Behavior

- Navigation collapses into a hamburger menu.
- Candidate stages stack vertically instead of forcing horizontal scanning.
- Side intelligence panels flow below the pipeline.
- Interview rows collapse cleanly without hiding readiness status.
- Drawer takes the full viewport width on small screens.

## Content Model

The skeleton includes realistic HR operating data:

- Candidate names, roles, fit scores, stages, risks, and next actions
- Interview packets with readiness states
- Scorecard completion for engineering, product, and operations loops
- Diversity guardrails tied to slate and interview structure
- Hiring plan progress by function
- Candidate detail notes and recommendations
