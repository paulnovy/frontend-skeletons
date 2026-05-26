# Design Book — Echo Podcast Studio

## Positioning

- Category: Podcast management platform
- Mood: Creative, audio-focused, modern
- Audience: Product, operations, and domain teams evaluating a premium frontend direction.

## Visual System

- Background: `#130b1f`
- Surface: `rgba(30, 18, 48, .86)`
- Text: `#fff7ed`
- Accent: `#f97316`
- Secondary accent: `#a855f7`
- Typography: Inter with JetBrains Mono for compact technical values.

## Interface Priorities

- **Waveform editor:** 42:18 runtime — Chapter markers, ads, transcript confidence, and loudness.
- **Analytics chart:** +18% WoW — Retention curve, source attribution, and episode cohorts.
- **Recording scheduler:** 3 sessions — Remote links, prep notes, and studio checklist.
- **Guest management:** 46 contacts — Bio, release form, talking points, and follow-up queue.

## Responsive Behavior

The desktop layout uses a three-column application shell with sticky navigation and context rail. Tablet width collapses the rail beneath the main content. Mobile width hides the sidebar behind a hamburger menu and stacks metrics, cards, tables, and command controls.

## Interaction Notes

Buttons, navigation links, cards, inputs, and selectors include visible hover and focus states. Cards use subtle pointer tilt and staged entrance motion. The command form simulates queued feedback without leaving the page.
