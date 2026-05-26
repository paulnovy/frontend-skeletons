# Neurographic Knowledge System Design Book

## Project Name
Neurographic Knowledge System

## Product Type
Knowledge base visualized as neural pathways, built for complex topics where relationships, prerequisites, feedback loops, and conceptual drift matter as much as individual article pages.

## Positioning
This skeleton treats knowledge as a connected system. Articles are nodes, conceptual dependencies are pathways, and search returns a route through related articles instead of a flat list alone. The interface stays practical by always exposing a normal linear article list.

## Audience
Research teams, platform engineering groups, strategy teams, technical documentation owners, learning designers, policy groups, incident review teams, and complex-domain knowledge managers.

## UX Principles
- Route first: search should reveal the best learning path and highlight relevant article nodes.
- Never trap the reader: the complete linear article list remains visible for scanning, auditing, and accessibility.
- Relationship clarity: pathways are visible but restrained, with active routes highlighted in neuron gold.
- Reading quality: article previews use Atkinson Hyperlegible for long-form clarity.
- Technical orientation: node IDs, depths, article codes, and route hops use IBM Plex Mono.
- Mobile usefulness: the full neural map collapses into expandable learning path cards instead of shrinking into an unusable diagram.

## Layout System
- Sticky top header with brand, route search trigger, desktop navigation, and mobile hamburger menu.
- Two-column desktop shell:
  - Left: hero and neural map surface.
  - Right: active article reader, linear article list, mobile learning paths, and relationship intelligence cards.
- Neural map includes SVG pathways under absolutely positioned semantic button nodes.
- Route panel explains the current highlighted pathway and links to the linear list.
- Footer spans the full layout and includes the required credit.

## Typography
- Article text and interface copy: Atkinson Hyperlegible from Google Fonts.
- Node IDs, route hops, metadata, metrics, and controls: IBM Plex Mono from Google Fonts.
- Letter spacing is kept at zero for readable UI text, with only small uppercase metadata using mild spacing.

## Color Tokens
- Brain dark: `#0A0A0F` for the page background and primary dark base.
- Neuron gold: `#FBBF24` for selected routes, primary highlights, focus states, and active concepts.
- Synapse blue: `#60A5FA` for search, secondary nodes, and pathway details.
- Glial purple: `#A855F7` for advanced/resilience/governance nodes.
- White: `#F8FAFC` for primary foreground text.
- Supporting surfaces are translucent variants of the above colors to preserve the dark neural atmosphere without becoming monochrome.

## Component Notes
- Neural nodes are real buttons with article IDs, title, and concept type.
- SVG pathways use `data-edge` identifiers so route highlighting can target exact conceptual connections.
- Route search dialog supports `Ctrl K`, Escape, arrow navigation, and Enter selection.
- Filter chips switch between named learning routes and update the map, reader, and list state.
- The reader panel surfaces article summary, reading time, depth, link count, body excerpts, and concept tags.
- Linear article list is ordered, persistent, and interactive.
- Mobile learning cards expose route details through expandable relationship maps.
- Hamburger menu provides compact navigation for the standalone page.

## Accessibility
- Semantic `header`, `main`, `section`, `article`, `aside`, `footer`, and `nav` structure.
- Skip link targets the knowledge system content.
- Focus states use neuron gold and are visible on dark surfaces.
- Search and menu overlays use `role="dialog"` with `aria-modal`.
- Search results use listbox semantics and selected state.
- Route and menu controls expose state via `aria-pressed`, `aria-expanded`, and live text updates.
- Nodes are buttons, not decorative divs, so keyboard and screen-reader users can operate them.
- Reduced-motion preference disables transitions and smooth scrolling.

## Responsive Behavior
- Desktop: full neural pathway map, side reader, linear list, and relationship cards.
- Tablet: one-column stack with the map preserved above the reader.
- Mobile: neural map is hidden and replaced with expandable learning path cards; search, menu, reader, and linear list remain fully usable.

## Content Rules
- Avoid placeholder filler. Content should read like a real knowledge management product.
- Use concrete article IDs, concept types, reading depth, route labels, and realistic summaries.
- Search should never imply there is only one answer; it highlights a useful route while preserving the whole system.
- Keep the interface operational and calm. The visual metaphor should support comprehension, not become decoration.

## External Dependencies
Google Fonts CDN only:
- Atkinson Hyperlegible
- IBM Plex Mono
