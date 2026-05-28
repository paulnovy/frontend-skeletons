# Chargegrid EV Network - Design Book

## Project Name
Chargegrid EV Network

## Product Type
EV charging network app and fleet charging platform.

## Intended Audience
EV drivers, fleet managers, charging network operators, energy partners, and mobility product teams.

## User Problem
Drivers need to know whether a charger is open, fast enough, fairly priced, and reliable before they detour. Fleet teams need the same clarity at scale.

## UX Concept
Chargegrid is map-first, then decision-first: live station pins, availability cards, status chips, route planner, pricing, and fleet dashboard preview.

## Layout Structure
Sticky navigation, map-first hero, charger detail sheet, availability cards, route planner, pricing card, fleet dashboard metrics, mobile bottom sheet, and footer.

## Typography System
Rajdhani creates energetic EV-network headlines and metrics. Inter handles UI copy, forms, pricing, station details, and fleet controls.

## Color System
Asphalt `#101820`, electric green `#9DFF00`, charge blue `#00A3FF`, white `#F8FAFC`, gray `#64748B`, and amber `#FBBF24`.

## Component System
Core components include drawer navigation, map pins, charger bottom sheet, status chips, availability cards, route planner fields, pricing rows, and fleet metric cards.

## Interaction Rules
Map details and route CTA stay prominent. Drawer state updates `aria-expanded` and `aria-hidden`. Mobile exposes charger details through a sticky bottom sheet pattern.

## Responsive Behavior
Desktop uses a map-first layout with station cards. Tablet stacks map and panels. Mobile becomes map plus bottom sheet with charger details and route CTA.

## Accessibility Notes
Semantic landmarks, skip link, visible focus states, labeled route fields, clear status labels, accessible drawer state, and reduced-motion fallback are included.

## Performance Notes
Standalone HTML with inline CSS, minimal JavaScript, CSS-rendered map visuals, stable dimensions, and no heavy dependencies.

## Commercial Use Cases
EV charging app homepage, fleet charging dashboard, route planning prototype, network reliability page, pricing product page, and mobility startup landing page.
