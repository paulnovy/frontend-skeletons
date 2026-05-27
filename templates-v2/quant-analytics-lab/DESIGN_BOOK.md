# Quant Analytics Lab Design Book

## Concept

Quant Analytics Lab is a premium analytics workspace for teams that need a focused surface for query writing, dashboard review, report generation, and source reliability monitoring. The experience is dense, operational, and built for repeated use by analysts rather than casual browsing.

## Palette

- Cloud `#F6F8FC` provides the page background, panels, inputs, and drawer surface.
- Ink `#19212B` anchors text, dark console areas, icon blocks, and the footer.
- Indigo `#4F46E5` is the primary action color and the main analytical chart accent.
- Cyan `#06B6D4` marks live data, secondary chart motion, and focus feedback.
- Lime `#A3E635` represents healthy source status and successful freshness checks.
- Coral `#FB7185` marks critical signals, review states, and elevated attention.

Only these colors are used directly, with opacity variants for borders, shadows, fills, and muted interface text.

## Typography

Headings use Manrope for a crisp analytical identity. Interface copy, tables, forms, metrics, and navigation use Inter for legibility in dense data workflows. Both families load from the Google Fonts CDN.

## Structure

The skeleton includes:

- Top navigation with brand, section links, search, avatar, and accessible mobile drawer.
- KPI strip with query volume, active dashboards, connected sources, and average query time.
- SQL-like query builder with syntax hint chips, editable statement, run action, and results preview table.
- CSS-only visualization area with bar chart and operational insight cards.
- Dashboard library cards with names, modification times, chart counts, and owners.
- Report generator with report type selector, date range fields, metric checkboxes, generate action, and live preview copy.
- Data source list with type icon, status badge, sync recency, and row count.
- Footer credit for the template and studio.

## Accessibility

Semantic landmarks are used for header, navigation, main content, sections, aside panels, tables, forms, and footer. The hamburger button exposes `aria-controls` and `aria-expanded`; the drawer updates `aria-hidden`, can be closed with Escape, and returns focus to the opener. Form controls have visible labels, focus-visible states are high contrast, and reduced-motion preferences are respected.

## Responsive Behavior

Desktop uses a two-column workspace for high density and fast scanning. Tablet collapses core analytical sections to one column while keeping KPI and dashboard grids efficient. Mobile switches to a keyboard-navigable slide-in drawer, single-column panels, horizontally scrollable table results, stacked source rows, and compact report controls.
