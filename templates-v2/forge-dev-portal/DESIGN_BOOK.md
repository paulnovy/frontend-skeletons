# Forge Dev Portal Design Book

Forge Dev Portal is a premium developer tools interface for teams managing APIs, webhooks, credentials, and usage analytics from one operational workspace.

## Visual System

- Typography: Manrope anchors headings and brand moments; Inter handles dense UI labels, tables, controls, and data.
- Colors: Cloud `#F6F8FC`, ink `#19212B`, indigo `#4F46E5`, cyan `#06B6D4`, lime `#A3E635`, and coral `#FB7185`.
- Shape language: compact 8px panels, crisp tables, monospaced API data, and strong focus states.
- Interaction: mobile navigation uses a keyboard-accessible drawer with escape-key dismissal and backdrop close.

## Sections

- Top navigation with brand, section links, documentation search, avatar, and mobile hamburger.
- KPI strip covering calls, active keys, webhook deliveries, and error rate.
- API playground with method selector, URL input, editable headers and body, request action, and response panel.
- Webhook table with endpoint URLs, event tags, delivery status, last delivery, and success rate.
- API key administration cards with prefixes, lifecycle dates, permissions, and revoke actions.
- CSS-only seven-day bar chart for usage analytics.
- Recent activity feed for requests, webhook deliveries, and credential events.

## Accessibility

The skeleton includes semantic landmarks, a skip link, visible focus styles, labeled controls, keyboard-operable drawer controls, and reduced-motion handling.
