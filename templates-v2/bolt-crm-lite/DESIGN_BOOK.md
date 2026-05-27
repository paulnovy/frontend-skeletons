# Bolt CRM Lite Design Book

## Concept

Bolt CRM Lite is a compact sales operations screen for small teams. The layout focuses on scanning: KPI strip first, customer table next, then a Kanban pipeline and quick actions.

## Typography

- Headings: Manrope, 600-800 weights.
- Interface: Inter, 400-800 weights.
- Letter spacing stays neutral for crisp dashboard readability.

## Palette

- Cloud: `#F6F8FC`
- Ink: `#19212B`
- Indigo: `#4F46E5`
- Cyan: `#06B6D4`
- Lime: `#A3E635`
- Coral: `#FB7185`

## Layout

- Sticky top nav with desktop links and mobile hamburger drawer.
- KPI strip uses four equal cards on desktop and collapses to two columns, then one.
- Contact table scrolls horizontally on narrow screens.
- Pipeline uses fixed-width lanes on mobile for predictable Kanban behavior.
- Quick actions use icon-forward buttons with concise operational copy.

## Interaction

- Contact search filters by contact, company, segment, and owner.
- Segment and owner selects filter rows without navigation.
- Quick actions show lightweight toast feedback.
- Drawer closes on backdrop, Escape, or navigation selection.
