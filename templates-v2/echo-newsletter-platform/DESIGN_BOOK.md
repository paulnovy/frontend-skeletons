# Echo Newsletter Platform Design Book
## Concept
Echo is a focused newsletter operations dashboard for teams managing publishing, subscribers, analytics, and campaign schedules. The interface favors dense but calm controls, clear section boundaries, and practical performance surfaces.
## Typography
- Headings: Manrope, weight 700-800.
- UI and body text: Inter, weight 400-800.
- Letter spacing remains neutral for legibility.
## Color System
- Cloud: `#F6F8FC` for the application background.
- Ink: `#19212B` for primary text.
- Indigo: `#4F46E5` for primary actions and key campaign data.
- Cyan: `#06B6D4` for secondary highlights and audience signals.
- Lime: `#A3E635` for positive status and growth accents.
- Coral: `#FB7185` for draft, winback, and review states.
## Layout
- Sticky top navigation with brand, section links, search, and primary CTA.
- Mobile navigation uses a hamburger button with a right-side drawer.
- KPI strip presents subscribers, open rate, click rate, and sent campaign totals.
- Main workflow sections cover campaign management, subscriber segments, builder preview, scheduling, and analytics.
## Components
- KPI cards use compact labels, large Manrope values, and concise deltas.
- Campaign table supports scan-friendly operational status.
- Subscriber cards combine identity, tags, and engagement bars.
- Builder preview includes side controls and a branded email mockup.
- Scheduler calendar displays campaign events with color-coded status.
- Analytics charts use CSS bars and a conic donut for standalone rendering.
## Responsive Behavior
- Desktop uses multi-column layouts for productivity.
- Tablet collapses major grids while preserving scan order.
- Mobile hides search and CTA from the top bar, replacing navigation with the drawer.
