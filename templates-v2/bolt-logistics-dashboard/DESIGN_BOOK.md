# Bolt Logistics Dashboard Design Book

## Concept
Bolt Logistics Dashboard is a premium logistics control tower for supply chain teams who need shipment tracking, warehouse capacity, lane health, and exception response in one screen.

## Typography
- Headings use Manrope.
- Interface text uses Inter.
- Both families load from the Google Fonts CDN in `index.html`.

## Color System
- Cloud `#F6F8FC`: page background and soft operational surfaces.
- Ink `#19212B`: text, navigation, and dark command panels.
- Indigo `#4F46E5`: primary accent for active views and route energy.
- Cyan `#06B6D4`: secondary accent for live network indicators.
- Lime `#A3E635`: healthy and on-track signals.
- Coral `#FB7185`: critical alerts and late delivery signals.

## Layout
- Sticky top navigation with brand, section anchors, shipment search, alert badge, and mobile drawer.
- KPI strip exposes fleet-level operating metrics.
- Shipment table, warehouse grid, route map, analytics chart, and exceptions list are organized for quick dispatcher scanning.

## Accessibility
- Semantic landmarks are used for header, main, sections, aside, navigation, and footer.
- Keyboard focus is visible across controls.
- Mobile drawer supports Escape, backdrop close, link close, and simple focus wrapping.
- Motion is reduced when `prefers-reduced-motion` is enabled.

## Responsive Behavior
- Desktop uses two-column operations grids for dense monitoring.
- Tablet collapses major panels into a single column.
- Mobile replaces primary navigation with a hamburger-triggered slide-in drawer.
