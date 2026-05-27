# Zen HR Platform Design Book

## Concept

Zen HR Platform is a premium HR management skeleton for employee directories, leave workflows, performance cycles, org visibility, and HR announcements. The interface is calm, operational, and built for repeated daily use.

## Typography

- Headings use Manrope for a confident editorial rhythm.
- Interface text uses Inter for compact readability.
- Fonts are loaded from the Google Fonts CDN in `index.html`.

## Color System

- Cloud `#F6F8FC` for the page background and elevated surfaces.
- Ink `#19212B` for core text, dark panels, and structural lines.
- Indigo `#4F46E5` for primary actions and department emphasis.
- Cyan `#06B6D4` for live indicators and secondary status cues.
- Lime `#A3E635` for healthy or approved states.
- Coral `#FB7185` for alerts, critical items, and rejected states.

All supporting surfaces use opacity-based tints of the same palette.

## Layout

- Sticky top navigation with desktop links, search, and notification count.
- Mobile hamburger opens a keyboard-accessible slide-in drawer.
- KPI strip gives immediate HR operational context.
- Employee cards are designed for fast scanning and filtering.
- Leave table keeps approval actions close to each request.
- Review cards show due dates, participants, and progress.
- CSS org chart uses simple nested structure for hierarchy.
- Announcements sit beside the org chart to keep HR updates visible.

## Accessibility

- Semantic landmarks are used for header, main content, sections, aside, and footer.
- Focus-visible outlines use cyan for high-contrast keyboard navigation.
- Drawer state updates `aria-expanded` and `aria-hidden`.
- Escape closes the mobile drawer.
- Reduced-motion preferences are respected in CSS.
