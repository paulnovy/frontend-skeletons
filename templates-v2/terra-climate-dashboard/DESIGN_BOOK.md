# Terra Climate Dashboard Design Book

## Concept

Terra Climate Dashboard is a premium enterprise ESG reporting interface for carbon accounting teams. It presents live emissions monitoring, source-level variance, offset assurance, and sustainability target progress in a board-ready command center.

## Palette

- Cloud `#F6F8FC` is the page base, drawer surface, elevated panels, and chart interior.
- Ink `#19212B` anchors typography, the hero panel, footer text, controls, and deep contrast regions.
- Indigo `#4F46E5` is the primary action, Scope 1 chart segment, and strategic reporting accent.
- Cyan `#06B6D4` marks live telemetry, secondary chart motion, and operational sync states.
- Lime `#A3E635` represents healthy progress, verified status, and positive sustainability movement.
- Coral `#FB7185` marks critical alerts, Scope 3 pressure, and target-line attention.

Only these colors are used directly, with opacity-based tints for borders, shadows, muted copy, and layered surfaces.

## Typography

Headings use Manrope for a confident sustainability intelligence voice. Interface text, metrics, navigation, labels, and chart annotations use Inter for dense dashboard readability. Both families load from the Google Fonts CDN.

## Structure

The skeleton includes every required ESG reporting section:

- Sticky top navigation with brand, links, search, notification badge, and mobile hamburger.
- KPI strip covering monthly CO2e, offset coverage, target progress, and ESG score.
- CSS-only donut chart for Scope 1, Scope 2, and Scope 3 emissions with an accessible legend.
- CSS-only twelve-month bar chart with a dashed target line.
- Emission source tracker cards for Energy, Transport, Waste, and Supply Chain.
- Carbon offset panel with project status, credits purchased, verification status, and impact metrics.
- Sustainability target progress bars for net-zero, renewable electricity, waste reduction, and supplier targets.
- Footer credit naming Terra Climate Dashboard and Northstar Studio.

## Accessibility

The page uses semantic header, nav, main, section, article, aside, and footer landmarks. The mobile drawer is keyboard navigable, exposes `aria-controls`, `aria-expanded`, and `aria-hidden`, closes on Escape, and returns focus to the hamburger button. Interactive elements have visible focus states, search inputs have labels, and the interface respects reduced-motion preferences.

## Responsive Behavior

Desktop uses a broad executive dashboard composition with paired analytics panels and four-column KPI/source grids. Tablet collapses major regions into a single column while keeping dense two-column metric grids. Mobile hides desktop navigation behind a slide-in drawer, stacks cards, scales the donut chart, and keeps chart labels compact without horizontal scrolling.
