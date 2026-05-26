# Design Book — Prism Legal Tech

## Positioning

- Category: Legal practice management
- Mood: Professional, trustworthy, organized
- Audience: Product, operations, and domain teams evaluating a premium frontend direction.

## Visual System

- Background: `#f7f8fb`
- Surface: `rgba(255,255,255,.95)`
- Text: `#111827`
- Accent: `#172554`
- Secondary accent: `#b68a2c`
- Typography: Inter with IBM Plex Mono for compact technical values.

## Interface Priorities

- **Case status:** Discovery — Matter owner, court date, risk badge, and latest filing.
- **Document timeline:** 124 docs — Chronology, signatures, privilege, and version control.
- **Client portal:** Preview ready — Messages, invoice state, secure files, and tasks.
- **Billing summary:** $84.2k WIP — Billable hours, trust ledger, invoices, and write-downs.

## Responsive Behavior

The desktop layout uses a three-column application shell with sticky navigation and context rail. Tablet width collapses the rail beneath the main content. Mobile width hides the sidebar behind a hamburger menu and stacks metrics, cards, tables, and command controls.

## Interaction Notes

Buttons, navigation links, cards, inputs, and selectors include visible hover and focus states. Cards use subtle pointer tilt and staged entrance motion. The command form simulates queued feedback without leaving the page.
