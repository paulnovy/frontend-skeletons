# Muse Design System Design Book

Muse Design System is a documentation-first frontend skeleton for teams that need a polished component library, token reference, usage guidance, and release history in one standalone page.

## Identity

- Purpose: design system documentation for product teams.
- Tone: precise, calm, confident, and editorial.
- Typography: Manrope for headings and Inter for interface text.
- Palette: Cloud, Ink, Indigo, Cyan, Lime, and Coral with light opacity tints for surfaces and states.

## Structure

- Top navigation anchors the main documentation areas and includes search plus a version badge.
- Token sections show name, hex value, CSS variable, and practical usage.
- Components pair a live preview with a concise code example.
- Guidelines use do and don't cards to make product decisions easy to scan.
- Changelog entries keep design and engineering release context visible.

## Accessibility

- Semantic landmarks are used throughout the page.
- A skip link appears on keyboard focus.
- The mobile drawer uses `aria-expanded`, `aria-hidden`, Escape close behavior, and focus movement.
- Focus states are high contrast and visible.
- Motion is reduced when the user prefers reduced motion.

## Implementation Notes

- The skeleton is a single standalone HTML file.
- The only external request is the Google Fonts CDN for Manrope and Inter.
- Color usage is intentionally constrained to the approved palette and opacity tints.
- Text is production-style documentation copy with no filler language.
