# Design Book — Cortex AI Chat

## Positioning

- Category: AI chat interface
- Mood: Modern, conversational, intelligent
- Audience: Product, operations, and domain teams evaluating a premium frontend direction.

## Visual System

- Background: `#070a18`
- Surface: `rgba(17, 24, 46, .82)`
- Text: `#f3f7ff`
- Accent: `#8b5cf6`
- Secondary accent: `#38bdf8`
- Typography: Inter with JetBrains Mono for compact technical values.

## Interface Priorities

- **Model selector:** Cortex Ultra 2.1 — Reasoning, retrieval, and tool use tuned for deep work.
- **Token counter:** 8,412 tokens — Context budget with per-message attribution.
- **Settings panel:** Temperature 0.4 — Response style, memory scope, and citation behavior.
- **Conversation history:** 24 threads — Pinned launches, support audits, and data reviews.

## Responsive Behavior

The desktop layout uses a three-column application shell with sticky navigation and context rail. Tablet width collapses the rail beneath the main content. Mobile width hides the sidebar behind a hamburger menu and stacks metrics, cards, tables, and command controls.

## Interaction Notes

Buttons, navigation links, cards, inputs, and selectors include visible hover and focus states. Cards use subtle pointer tilt and staged entrance motion. The command form simulates queued feedback without leaving the page.
