# Design Book — Lumen Crypto Exchange

## Positioning

- Category: Cryptocurrency exchange
- Mood: High-tech, data-dense, fast-feeling
- Audience: Product, operations, and domain teams evaluating a premium frontend direction.

## Visual System

- Background: `#05070a`
- Surface: `rgba(13, 18, 24, .88)`
- Text: `#eef8f4`
- Accent: `#22c55e`
- Secondary accent: `#ef4444`
- Typography: Inter with JetBrains Mono for compact technical values.

## Interface Priorities

- **Chart stage:** 1H candles — Responsive market visualization with volume rails.
- **Buy form:** Limit @ 108,412 — Fee estimate, size slider, and total preview.
- **Sell form:** Stop @ 107,900 — Risk controls and reduce-only switch.
- **Portfolio sidebar:** $248,902 — Allocation, margin, and available balance.

## Responsive Behavior

The desktop layout uses a three-column application shell with sticky navigation and context rail. Tablet width collapses the rail beneath the main content. Mobile width hides the sidebar behind a hamburger menu and stacks metrics, cards, tables, and command controls.

## Interaction Notes

Buttons, navigation links, cards, inputs, and selectors include visible hover and focus states. Cards use subtle pointer tilt and staged entrance motion. The command form simulates queued feedback without leaving the page.
