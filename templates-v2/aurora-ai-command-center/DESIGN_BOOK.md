# Aurora AI Command Center Design Book

## Concept

Aurora AI Command Center is a premium AI operations dashboard for teams running production model fleets. The screen prioritizes live monitoring, prompt governance, inference analytics, and cost visibility without leaning into marketing-page composition.

## Palette

- Cloud `#F6F8FC` is the page base, panel surface, and soft interface tint.
- Ink `#19212B` anchors text, the hero operations console, and footer.
- Indigo `#4F46E5` marks primary action, cost allocation, and model routing emphasis.
- Cyan `#06B6D4` marks live activity, search accents, and chart movement.
- Lime `#A3E635` marks healthy service states and confidence points.
- Coral `#FB7185` marks warning status and incident activity.

Only these six colors are used, with opacity variants for depth, borders, and muted states.

## Typography

Headings use Manrope for a precise, modern operations feel. Interface text uses Inter for dense dashboard readability, stable numeric scanning, and strong form control clarity. Both fonts load through the Google Fonts CDN.

## Layout

The page follows the required structure:

- Sticky top nav with brand, section links, search, environment/model selector, and mobile hamburger.
- Hero section that makes the product obvious in the first viewport and includes a dark live-ops console.
- KPI strip with four operational metrics.
- Dashboard grid pairing model health with cost and recent activity.
- Prompt management panel with version, token count, success rate, and recency.
- CSS-only inference analytics chart.
- Footer with visible studio credit.

The dashboard uses compact cards, restrained borders, and stable grid dimensions to feel like a real command center rather than a decorative landing page.

## Accessibility

The skeleton includes semantic landmarks, section labels, keyboard focus styles, accessible drawer state attributes, Escape-to-close drawer behavior, and `prefers-reduced-motion` support. Mobile navigation is keyboard reachable and closes after selection.
