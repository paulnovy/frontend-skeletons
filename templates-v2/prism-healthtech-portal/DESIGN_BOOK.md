# Prism Healthtech Portal Design Book

## Concept

Prism Healthtech Portal is a premium patient management workspace for clinical operations teams. It brings appointment scheduling, patient panel review, chart activity, telehealth rooms, and vital-sign monitoring into one calm dashboard.

## Palette

- Cloud `#F6F8FC` is the page base, panel surface, and primary workspace color.
- Ink `#19212B` anchors text, the hero console, insight cards, navigation, and footer actions.
- Indigo `#4F46E5` marks primary actions, records, and scheduling focus.
- Cyan `#06B6D4` marks live telehealth state, active intake, and remote monitoring.
- Lime `#A3E635` marks stable patient status and healthy readings.
- Coral `#FB7185` marks lab review, consent needs, and critical follow-ups.

Only these colors are used, with opacity variants for borders, soft backgrounds, shadows, and muted UI states.

## Typography

Headings use Manrope for a polished clinical product voice. Interface text uses Inter for dense tables, controls, metrics, and care-team labels. Both typefaces load from the Google Fonts CDN.

## Layout

The skeleton follows the required healthcare portal structure:

- Sticky top navigation with brand, section links, portal search, notification badge, and mobile hamburger.
- Hero section with a clinical command board and live telehealth preview.
- KPI strip for patients today, appointments scheduled, pending lab results, and active video sessions.
- Appointment scheduler with today's calendar slots and patient names.
- Searchable and status-filterable patient table.
- Medical records preview with record type icons, dates, patient names, and quick actions.
- Telehealth panel with active and upcoming sessions plus join actions.
- Vital signs overview with CSS-only mini charts for blood pressure, heart rate, and temperature.
- Footer with visible studio credit.

## Accessibility

The page uses semantic landmarks, labelled search controls, a skip link, keyboard-visible focus states, accessible drawer state attributes, Escape-to-close behavior, and reduced-motion support. The mobile hamburger opens a slide-in drawer that can be navigated by keyboard and closed through the close button, backdrop, Escape key, or section links.
