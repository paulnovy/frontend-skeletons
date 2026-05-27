# Signal Team Analytics Design Book

## Concept

Signal Team Analytics is an operating health dashboard for leaders who need delivery visibility without turning people into vanity metrics. The first screen is the product: team health, delivery confidence, blockers, meeting load, risk heat, initiative scorecards, and recommended actions.

## Design Tokens

- Fog: `#F4F7FB`
- Ink: `#17202A`
- Signal blue: `#2563EB`
- Teal: `#14B8A6`
- Amber: `#F59E0B`
- Rose: `#F43F5E`
- Heading font: Sora
- UI font: Inter
- Radius: 6px, 8px, 12px
- Cards: white and fog surfaces with quiet ink borders

## Layout

- Sticky top navigation keeps overview, teams, delivery, and blockers close.
- Hero grid leads with executive signal and three operating metrics.
- Main workspace uses team health cards and delivery forecast panels.
- Right rail carries meeting load, risk heat, initiative progress, and action feed.
- Team detail opens in a right drawer with interpretation and next action.

## UX Rules

- Every metric must include an interpretation and a next useful action.
- Team health is phrased around operating conditions, not individual surveillance.
- Filters reveal risk groups without removing keyboard interaction.
- Blockers must show a named owner function and why the work is stuck.
- Meeting load should lead to concrete async recommendations.

## Accessibility

- Semantic landmarks are used for navigation, main content, sections, aside, footer, and drawer.
- Team cards are real buttons and support keyboard focus.
- Left and right arrow keys move focus across team cards.
- Drawer exposes `aria-hidden` state and closes with Escape.
- Toasts use `role="status"` and `aria-live="polite"`.
- Reduced-motion preferences disable transitions and animations.

## Mobile Behavior

- Navigation collapses into a hamburger menu.
- Team health cards become a single-column stack.
- Forecast and risk grids collapse to keep labels readable.
- Side panels flow below the primary team and blocker surfaces.
- Mobile prioritizes risk, blockers, overloaded teams, and recommended actions.

## Content Model

The skeleton includes realistic team operating data:

- Team health scores with state labels and next actions
- Delivery confidence, blockers, and meeting drag metrics
- Forecast groups for on-track, watch, and escalation work
- Blocker map with owner functions
- Risk heat map and meeting load visualization
- Initiative scorecards and recommended action feed
