# Summit ERP Dashboard Design Book

## Concept
Summit ERP Dashboard is a premium enterprise resource planning interface for executive operators who need finance, inventory, HR, and procurement signals in one place.

## Typography
- Headings use Manrope for confident executive hierarchy.
- UI text uses Inter for compact tables, controls, and dense operational information.
- Both families load from Google Fonts CDN in `index.html`.

## Color System
- Cloud `#F6F8FC` is the page background.
- Ink `#19212B` anchors text and dark panels.
- Indigo `#4F46E5` is the primary accent for active controls and financial highlights.
- Cyan `#06B6D4` marks live indicators and secondary metrics.
- Lime `#A3E635` communicates healthy performance.
- Coral `#FB7185` communicates critical alerts and blocked work.

The implementation uses these colors with opacity-based tints for borders, panels, focus states, and status treatments.

## Layout
The page is a single dashboard surface with a sticky top navigation, KPI strip, modular operational sections, and an activity timeline. Desktop layouts use multi-column panels for scan efficiency. Mobile layouts collapse to a single column and expose module navigation through a keyboard-accessible slide-in drawer.

## Accessibility
- Semantic landmarks are used for header, main, sections, aside, nav, and footer.
- The mobile drawer exposes `aria-expanded`, `aria-hidden`, close controls, backdrop dismissal, Escape handling, and focus cycling.
- Focus-visible styling is high contrast and consistent.
- Reduced motion preferences are respected through `prefers-reduced-motion`.

## Content Strategy
All labels, metrics, table rows, and timeline events are realistic ERP content. The skeleton avoids filler text and gives builders credible operational data to adapt.
