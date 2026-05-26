# Design Book — Orbit Research Lab

## Positioning

- Category: Research collaboration platform
- Mood: Academic, organized, sophisticated
- Audience: Product, operations, and domain teams evaluating a premium frontend direction.

## Visual System

- Background: `#fbf7ef`
- Surface: `rgba(255,253,248,.94)`
- Text: `#15213a`
- Accent: `#1f3a66`
- Secondary accent: `#8a1538`
- Typography: Source Sans 3 with IBM Plex Mono for compact technical values.

## Interface Priorities

- **Paper card:** Adaptive trial networks — Abstract, authors, journal target, and confidence markers.
- **Citation graph:** 312 nodes — Clusters of related work with bridge citations.
- **Peer review:** Round 2 — Reviewer status, decision memo, and rebuttal notes.
- **Data repository:** DOI linked — Notebook, archive, license, and checksum details.

## Responsive Behavior

The desktop layout uses a three-column application shell with sticky navigation and context rail. Tablet width collapses the rail beneath the main content. Mobile width hides the sidebar behind a hamburger menu and stacks metrics, cards, tables, and command controls.

## Interaction Notes

Buttons, navigation links, cards, inputs, and selectors include visible hover and focus states. Cards use subtle pointer tilt and staged entrance motion. The command form simulates queued feedback without leaving the page.
