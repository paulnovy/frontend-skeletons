# Design Book — Forge Dev Portal

## Positioning

- Category: Developer portal with playground
- Mood: Technical, clean, powerful
- Audience: Product, operations, and domain teams evaluating a premium frontend direction.

## Visual System

- Background: `#061013`
- Surface: `rgba(9, 22, 28, .86)`
- Text: `#eafffb`
- Accent: `#2dd4bf`
- Secondary accent: `#38bdf8`
- Typography: Inter with JetBrains Mono for compact technical values.

## Interface Priorities

- **API key management:** prod_sk_live_••••92 — Scoped keys with rotation reminders.
- **Language selector:** JavaScript — SDK examples stay pinned beside docs.
- **Response viewer:** 200 OK — Pretty JSON, headers, and request timing.
- **Webhook logs:** 18 deliveries — Signed payloads with replay controls.

## Responsive Behavior

The desktop layout uses a three-column application shell with sticky navigation and context rail. Tablet width collapses the rail beneath the main content. Mobile width hides the sidebar behind a hamburger menu and stacks metrics, cards, tables, and command controls.

## Interaction Notes

Buttons, navigation links, cards, inputs, and selectors include visible hover and focus states. Cards use subtle pointer tilt and staged entrance motion. The command form simulates queued feedback without leaving the page.
