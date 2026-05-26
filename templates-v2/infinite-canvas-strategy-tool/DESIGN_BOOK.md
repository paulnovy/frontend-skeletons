# Infinite Canvas Strategy Tool Design Book

## Concept

StrataCanvas is a strategic planning tool for teams that think spatially before they write a memo. The core experience is an infinite canvas on desktop where strategy blocks sit in relation to each other: vision, values, positioning, pricing, and roadmap. Orange connections reveal explicit dependencies, while dashed connections become more legible as the user zooms in.

The mobile experience does not attempt to cram a canvas into a small screen. It switches to a structured list with expandable connection notes per block, preserving strategy comprehension without forcing awkward panning.

## Visual System

- Canvas: `#FAFAFA`
- Strategy block blue: `#2563EB`
- Connection orange: `#EA580C`
- Grid gray: `#E5E7EB`
- Dark ink: `#111827`

Typography uses Space Grotesk for strategy blocks and interface hierarchy. IBM Plex Mono is reserved for connection labels, metrics, tags, and export metadata.

## Layout Rules

Desktop uses a two-zone grid: the primary infinite canvas and a right-side intelligence/export panel. The canvas has no slide boundaries, no framed board, and no page metaphor. Blocks are positioned spatially, with SVG connection paths running behind them.

Mobile uses a single-column document model. The desktop canvas is intentionally hidden and replaced by semantic `details` accordions. Each block exposes its most important connections as expandable content.

## Interaction Model

- Zoom slider changes the canvas scale and increases hidden-link legibility.
- Clicking or focusing a strategy block updates the selected connection panel.
- `Alt + ArrowLeft` and `Alt + ArrowRight` cycle through blocks on desktop.
- Hamburger navigation opens mobile anchors.
- Escape closes the mobile menu.
- Linear document export is always visible on desktop and mobile.

## Accessibility Notes

The skeleton includes semantic landmarks, a skip link to the linear export, visible focus states, keyboard navigation, button labels, and reduced-motion handling. The export panel exists as an accessibility and stakeholder-review alternative, not as an afterthought.

## Content Direction

Use realistic strategic content with concrete market assumptions, pricing models, and roadmap decisions. Avoid generic "innovation platform" filler. A good implementation should feel like a real executive strategy workspace one step before a board memo.
