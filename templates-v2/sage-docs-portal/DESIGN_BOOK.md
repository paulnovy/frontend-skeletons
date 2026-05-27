# Sage Docs Portal Design Book

## Concept
Sage Docs Portal is a premium API documentation skeleton for developer tools teams that need reference content, SDK onboarding, interactive examples, and release history on one fast page.

## Visual System
- Headings use Manrope for a confident product-docs voice.
- Interface text uses Inter for clarity across dense navigation, tables, and code panels.
- The palette is intentionally restrained: Cloud `#F6F8FC`, ink `#19212B`, indigo `#4F46E5`, cyan `#06B6D4`, lime `#A3E635`, and coral `#FB7185` with transparent tints.
- Cards use tight 8px radii, light borders, and low shadow so the page feels polished without becoming decorative.

## Layout
- Sticky top navigation contains brand, primary links, search, and version selection.
- The desktop sidebar is a persistent hierarchical documentation tree.
- On mobile, the sidebar becomes a keyboard-accessible slide-in drawer with backdrop dismissal and Escape support.
- The hero prioritizes product status and direct documentation entry points instead of marketing filler.

## Interaction
- Documentation sections expand and collapse with accessible `aria-expanded` state.
- Code examples are organized in cURL, Python, and JavaScript tabs.
- The full-screen search overlay groups results by API reference, guides, and SDKs.
- Motion respects `prefers-reduced-motion`.

## Content Model
The skeleton includes endpoint cards, parameter tables, language snippets, SDK installation notes, a changelog timeline, support routing, and visible footer credit.
