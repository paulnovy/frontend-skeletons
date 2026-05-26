# Glitch Diplomacy Newsroom Design Book

## Project Name
Glitch Diplomacy Newsroom

## Product Type
Experimental political and geopolitical newsroom interface for pressure-aware reporting.

## Intended Audience
Foreign-policy editors, OSINT analysts, diplomatic risk teams, embassy communications staff, security researchers, newsroom product leads, and policy readers who need clear uncertainty labels instead of a chronological feed.

## User Problem
Traditional news feeds sort by recency, which can over-promote noisy updates and bury slower but more consequential evidence shifts. Geopolitical reporting also contains conflicting official accounts, unnamed-source claims, corrections, and evolving confidence levels. Readers need to know what is tense, what is uncertain, and what is actually well supported.

## UX Concept
The newsroom is organized as a pressure desk. Stories are placed into lanes by diplomatic tension, uncertainty, and confidence rather than by publish time. Glitch treatments reveal competing narratives attached to a story, while responsible-reporting elements keep confidence, sources, timestamps, updates, and corrections visible.

## Layout Structure
- Desktop: left masthead/navigation, central newsroom workspace, and right inspection rail.
- Lead story: full-width editorial panel with dateline, confidence, tension label, and conflict reveal.
- Signal panel: tension, uncertainty, confidence bars, and correction callout.
- Filter bar: pressure, critical strain, uncertainty, high confidence, and corrections.
- Story lanes: critical strain, uncertainty front, and confidence ledger.
- Story cards: headline, update timestamp, tension label, source confidence meter, and source drawer.
- Inspect rail: selected brief, confidence metadata, update ledger, and source guardrails.
- Mobile: hamburger masthead, single-column story cards, persistent confidence meters, and expandable source drawers.

## Typography System
- Article typography: Newsreader for headlines, article summaries, and editorial copy.
- Source metadata: IBM Plex Mono for timestamps, confidence values, sources, updates, and correction notes.
- Tension labels: Archivo for labels, navigation, buttons, and compact editorial controls.
- Google Fonts CDN is the only external dependency.

## Color System
- Paper: `#F8F5EF`, the primary editorial background.
- Ink: `#111111`, primary text and high-contrast rules.
- Diplomatic blue: `#1D4ED8`, confidence, focus, source links, and diplomatic framing.
- Alert red: `#B91C1C`, critical tension, correction markers, and conflicting narrative tags.
- Uncertainty gray: `#71717A`, unresolved claims, secondary metadata, and ambiguity states.

## Explicit Design Tokens
- `--paper`: `#F8F5EF`
- `--paper-warm`: `#EFE9DE`
- `--paper-cool`: `#F1F3F5`
- `--ink`: `#111111`
- `--ink-soft`: `#303030`
- `--blue`: `#1D4ED8`
- `--red`: `#B91C1C`
- `--gray`: `#71717A`
- `--font-article`: `"Newsreader", Georgia, serif`
- `--font-mono`: `"IBM Plex Mono", ui-monospace, monospace`
- `--font-label`: `"Archivo", system-ui, sans-serif`
- `--radius-sm`: `6px`
- `--radius-md`: `8px`
- `--shadow-paper`: `0 20px 80px rgba(17, 17, 17, 0.11)`
- `--motion-fast`: `140ms ease`
- `--motion-med`: `220ms ease`

## Component System
- Masthead: brand, date, navigation counts, and verification status.
- Lead panel: large editorial headline with tension label and conflicting-narrative glitch.
- Signal map: three compact metrics for tension, uncertainty, and confidence.
- Correction box: visible correction with timestamp and plain-language explanation.
- Filter chips: accessible buttons for story groups.
- Story card: metadata, tension label, headline, summary, source confidence meter, and drawer.
- Source drawer: expandable source list optimized for mobile.
- Inspect rail: selected story details and update ledger.
- Responsibility note: editorial guardrail explaining confidence semantics and anonymous source handling.

## Interaction Rules
- Every interactive element has a visible focus state.
- Escape closes the mobile masthead drawer.
- Navigation links close the drawer on mobile.
- Story cards update the selected brief on click or focus.
- Filter chips hide nonmatching stories and select the first visible story.
- The lead story action scrolls to and selects the primary source-split card.
- Alt plus ArrowLeft or ArrowRight moves through currently visible story cards.
- Glitch effects reveal conflicting narratives without hiding source confidence.
- Reduced-motion users receive near-instant transitions and no persistent animation.

## Responsive Behavior
- Desktop uses three columns: masthead, newsroom, inspect rail.
- Tablet collapses the inspect rail below the main workspace.
- Mobile turns the masthead into a drawer controlled by a hamburger button.
- Mobile story cards become full-width and expose conflict text inline.
- Source drawers remain available on every card and are especially prominent on mobile.
- Buttons and cards maintain stable dimensions to avoid layout shift.

## Accessibility Notes
- Semantic landmarks are used for navigation, main content, aside, sections, articles, and footer.
- A skip link jumps directly to the newsroom workspace.
- Tension and confidence are shown with text, not color alone.
- Confidence meters include adjacent readable percentages.
- Source lists use text labels for source type and confidence quality.
- Focus states use diplomatic blue with sufficient contrast on paper.
- Contrast is tuned for the specified palette.

## Responsible Reporting Model
- Confidence percentages describe current evidentiary support, not prediction odds.
- Anonymous sources are labeled by role and paired with corroborating records.
- Corrections are placed in the story lane and in the update ledger.
- Update timestamps are visible but do not determine story priority.
- Contradictions are framed as claims requiring evidence, not as spectacle.

## Performance Notes
- Standalone `index.html` with inline CSS and JavaScript.
- No framework, build step, image dependency, or icon dependency.
- Google Fonts CDN is used for Newsreader, IBM Plex Mono, and Archivo.
- JavaScript is limited to menu control, story filtering, story selection, and keyboard navigation.

## Commercial Use Cases
- Premium geopolitical intelligence dashboards.
- Editorial products for foreign-policy publications.
- OSINT verification desks.
- Diplomatic risk monitoring portals.
- Civic information products focused on corrections and uncertainty.
