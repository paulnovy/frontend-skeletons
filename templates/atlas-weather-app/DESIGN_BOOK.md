# Design Book — Atlas Weather App

## Positioning

- Category: Weather application
- Mood: Beautiful, atmospheric, informative
- Audience: Product, operations, and domain teams evaluating a premium frontend direction.

## Visual System

- Background: `#0f4c81`
- Surface: `rgba(255,255,255,.14)`
- Text: `#ffffff`
- Accent: `#fde68a`
- Secondary accent: `#7dd3fc`
- Typography: Inter with JetBrains Mono for compact technical values.

## Interface Priorities

- **Current temp:** 22°C — Partly sunny with clean visibility.
- **Radar map:** Regional sweep — Animated precipitation bands and wind layers.
- **7-day grid:** Mild week — Daily highs, lows, and weather icons.
- **Severe alerts:** None active — Warnings appear with priority color and expiry.

## Responsive Behavior

The desktop layout uses a three-column application shell with sticky navigation and context rail. Tablet width collapses the rail beneath the main content. Mobile width hides the sidebar behind a hamburger menu and stacks metrics, cards, tables, and command controls.

## Interaction Notes

Buttons, navigation links, cards, inputs, and selectors include visible hover and focus states. Cards use subtle pointer tilt and staged entrance motion. The command form simulates queued feedback without leaving the page.
