# Clearpath Customer Success Design Book

## Concept

Clearpath Customer Success is a command center for customer-facing teams that need to convert account telemetry into the next useful action. The first screen is the product: renewal risk, account health, onboarding milestones, escalations, QBR agenda, expansion signals, and recommended playbooks.

## Design Tokens

- Cloud: `#F6F8FC`
- Ink: `#19212B`
- Indigo: `#4F46E5`
- Cyan: `#06B6D4`
- Lime: `#A3E635`
- Coral: `#FB7185`
- Heading font: Manrope
- UI font: Inter
- Radius: 6px, 8px, 12px
- Cards: cloud and white surfaces with quiet ink borders

## Layout

- Sticky navigation keeps overview, accounts, journey, and escalations available.
- Hero grid leads with customer command center and three account metrics.
- Main workspace uses account health cards, journey metrics, and escalation rows.
- Right rail carries renewal curve, touch plan, QBR agenda, playbooks, and expansion signals.
- Account detail opens in a right drawer with health, impact, owner, and next action.

## UX Rules

- Every account card must expose health, commercial impact, owner context, and next customer touch.
- Renewal risk is framed as a save motion, not a static red score.
- Escalations must show customer pain and internal owner function.
- Expansion signals need proof points before they become opportunities.
- QBR prep should surface missing narrative or champion evidence.

## Accessibility

- Semantic landmarks are used for navigation, main content, sections, aside, footer, and drawer.
- Account cards are real buttons and support keyboard focus.
- Left and right arrow keys move focus across account cards.
- Drawer exposes `aria-hidden` state and closes with Escape.
- Toasts use `role="status"` and `aria-live="polite"`.
- Reduced-motion preferences disable transitions and animations.

## Mobile Behavior

- Navigation collapses into a hamburger menu.
- Account cards become a single-column stack.
- Journey and touch grids collapse to keep labels readable.
- Side panels flow below the account and escalation surfaces.
- Mobile prioritizes renewal risks, escalations, customer touches, and active playbooks.

## Content Model

The skeleton includes realistic customer success operating data:

- Account health scores with risk, watch, and good states
- Renewal value, healthy account percentage, and expansion signal metrics
- Journey milestones tied to retention
- Escalations with owner functions and customer pain
- Touch plan, QBR agenda, playbooks, and expansion progress
