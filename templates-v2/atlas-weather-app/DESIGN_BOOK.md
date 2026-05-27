# Atlas Weather App Design Book

Atlas Weather App is a premium utility interface for fast weather awareness: current conditions, hourly forecasts, weekly planning, radar visualization, alerts, and air quality.

## Visual System

- Typography: Manrope for headings, Inter for interface text, loaded from Google Fonts CDN in the standalone HTML file.
- Palette: Cloud `#F6F8FC`, ink `#19212B`, indigo `#4F46E5`, cyan `#06B6D4`, lime `#A3E635`, and coral `#FB7185`.
- Layout: compact dashboard sections with clear hierarchy, dense forecast rows, and a radar panel sized for scanning.
- Shape: 8px radius panels and controls, with pill badges only where status labels benefit from fast recognition.

## Interaction

- Mobile navigation uses a keyboard-navigable hamburger button and slide-in drawer.
- Escape closes the drawer, focus is trapped while open, and focus returns to the opener.
- Reduced motion preferences disable animated transitions and radar sweep.

## Content Model

- Today: condition hero, large temperature, station status, and critical metrics.
- Hourly: horizontal scrolling forecast cards with precipitation signals.
- Weekly: seven daily rows with condition icons, high and low temperatures, precipitation, and wind.
- Radar: CSS gradient visualization with rain, snow, and cloud legend.
- Alerts: warning, watch, and advisory cards with area, description, and expiry.
- Air quality: circular AQI gauge and pollutant breakdown.

## Accessibility Notes

- Semantic landmarks and section headings organize the page.
- Search inputs and visual maps include accessible labels.
- Focus-visible styles use high contrast cyan outlines.
- The drawer exposes ARIA state through `aria-expanded` and `aria-hidden`.

