# Radial Research Archive Design Book

## Concept
Radial Research Archive treats the library as a living relationship map. The interface does not begin with a reverse-chronological feed. It begins with a central search object and a ring of topics that imply adjacency, influence, and cross-disciplinary movement.

## Experience Principle
The primary UX rule is browsing knowledge by relationship, not chronology. A researcher should be able to start with one topic, see the nearest evidence clusters, and move into adjacent reports without losing the system-level picture.

## Visual Language
- Background: deep navy field with subtle radial light, star grid texture, and restrained constellation lines.
- Navigation: orbiting topic chips arranged around a central search object.
- Reports: curved cards that fan out from the selected topic, using layered transforms and soft borders.
- Information density: premium but operational. The screen exposes reports, metrics, and adjacent ideas without becoming a marketing landing page.

## Typography
- Space Grotesk is used for topic labels, UI controls, navigation, and compact metadata.
- Source Serif 4 is used for report summaries and longform descriptive text.
- Letter spacing is kept at `0` except small uppercase metadata where readability benefits from a slight increase.

## Palette
- Deep navy: `#0B1120`
- Star blue: `#60A5FA`
- Soft violet: `#C4B5FD`
- Pale yellow: `#FEF3C7`
- White: `#F8FAFC`

Supporting alpha values are derived from the required colors. The palette intentionally avoids a one-note blue surface by using violet for relationship depth and pale yellow for evidence highlights.

## Layout
- Header: sticky application bar with brand, primary nav, search trigger, and hamburger menu.
- Main archive: CSS Grid splits the radial orbit and the insight rail on wide screens.
- Orbit: central search object sits in the middle of a circular stage, with topic buttons positioned via custom properties.
- Curved cards: selected-topic reports appear in an arc along the lower-right quadrant.
- Context rail: active topic narrative, evidence metrics, linked methods, and saved research trail.
- Footer: required credit, archive metadata, and compact navigation.

## Interactions
- Selecting a topic updates the active title, route line, report cards, metrics, and related topic trail.
- Arrow keys move focus through topic buttons.
- Enter or Space activates the focused topic.
- Ctrl K opens search.
- Escape closes the search dialog or mobile menu.
- Search filters topics and reports by title, domain, summary, methods, and tags.

## Mobile
The orbit becomes stacked topic constellations. Each constellation is a horizontally swipeable card that preserves the relationship model without forcing a tiny circular diagram onto a small screen. The report cards remain readable and use snap scrolling.

## Accessibility
- Semantic landmarks: header, main, sections, aside, footer.
- Topic controls are buttons with `aria-pressed`.
- Search uses a dialog pattern with labelled input.
- Focus states are visible and use pale yellow.
- Motion is disabled or shortened under `prefers-reduced-motion`.
- The mobile constellation list is keyboard reachable and does not depend on drag-only interaction.

## Content Model
The skeleton ships with realistic research content:
- Civic climate adaptation
- Responsible AI governance
- Health equity signals
- Urban mobility futures
- Food system resilience
- Energy transition finance

Each topic includes domain, report count, confidence, summary, methods, related topics, and three report cards.
