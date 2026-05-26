# Organism Portfolio Engine Design Book

## Project Name
Organism Portfolio Engine

## Product Type
Generative portfolio that behaves like a living organism. Projects are cells in a network, categories behave like tissue systems, and case studies open as membranes that expand around selected work.

## Positioning
This skeleton is for portfolios where the body of work is more interesting as an ecosystem than as a flat gallery. The interface should feel alive, responsive, and premium while staying calm enough for recruiters, clients, collaborators, and curators to scan work quickly.

## Audience
Independent creative technologists, interaction designers, computational artists, generative-design studios, bio-inspired product teams, research labs, and senior design engineers with complex project histories.

## UX Principles
- Alive, not chaotic: motion suggests respiration, pressure, and cellular response, but the fixed index keeps navigation predictable.
- Portfolio first: every organism element maps to a real project with year, discipline, collaborators, outcome, and case-study detail.
- Membrane disclosure: case studies expand from the selected cell, framing the work as a living specimen while preserving reading quality.
- Fixed orientation: the project index remains visible on desktop and becomes a stable list anchor on mobile.
- Motion consent: reduced-motion support is automatic through user preference and explicit through an in-page control.
- Keyboard parity: users can move through project cells with arrow keys and open or close case studies without a pointer.

## Layout System
- Sticky header with brand, desktop navigation, status capsule, and mobile hamburger menu.
- Main desktop layout uses a two-column grid:
  - Left: organism stage with SVG vessels, project cells, and active membrane.
  - Right: fixed project index, organism telemetry, and case-study reader.
- The organism stage is full-width within its column and remains visually dominant.
- Case study panel is a semantic article that receives active project content from JavaScript.
- Footer spans the layout and includes the required credit.

## Typography
- Interface, labels, buttons, metrics, and titles use Recursive from Google Fonts.
- Recursive variable settings shift subtly on hover and active states using `font-variation-settings`.
- Case-study paragraphs use Source Serif 4 for a more editorial reading texture.
- Letter spacing is zero for body and interface text; only small metadata receives light spacing for legibility.

## Color Tokens
- Bio black: `#050505` for the main page base.
- Membrane green: `#39FF88` for active vessels, focus states, living status, and primary action.
- Enzyme blue: `#22D3EE` for analytical metadata, secondary vessels, and research signals.
- Cell pink: `#FF4DA6` for project-cell nuclei, active details, and selected index states.
- Bone: `#F5F5DC` for primary text and warm biological contrast.
- Supporting surfaces use translucent variants of the required colors to avoid a flat neon look.

## Component Notes
- Project cells are real buttons, absolutely positioned on the organism stage with `data-project` identifiers.
- SVG vessels sit below cells and switch visual emphasis when a project is selected.
- The fixed project index mirrors every project and keeps users from getting lost in the metaphor.
- The membrane article uses project data for title, discipline, year, organism role, outcome metrics, narrative sections, and credits.
- The reduced-motion toggle applies a class immediately and updates its accessible pressed state.
- Mobile hides the dense organism map and uses project list cards with soft pulsing markers.

## Accessibility
- Semantic `header`, `main`, `section`, `article`, `aside`, `nav`, and `footer` structure.
- Skip link targets the portfolio organism.
- Project cells and index rows are buttons with visible focus states.
- Active project state is exposed with `aria-pressed`.
- Case-study changes are announced through an `aria-live` region.
- The membrane close button supports Escape as a global shortcut.
- Motion follows `prefers-reduced-motion` and the explicit in-page reduced-motion toggle.
- Mobile menu exposes `aria-expanded` and uses a dialog-like overlay panel.

## Responsive Behavior
- Desktop: living organism map, fixed index, telemetry, and expanded case study are visible together.
- Tablet: organism and details stack while preserving the index near the top.
- Mobile: organism becomes an animated list with project cards, clear labels, reduced motion control, and the same case-study content.

## Content Rules
- No filler copy. Use realistic case-study names, outcomes, roles, collaborators, and metrics.
- The portfolio should read like a credible senior creative technology practice, not a generic agency page.
- Motion should support selection, relationship, and hierarchy. Avoid random noise.
- The fixed index must remain useful even if all generative motion is disabled.

## External Dependencies
Google Fonts CDN only:
- Recursive
- Source Serif 4
