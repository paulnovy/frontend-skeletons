# Bolt Booking Engine Design Book

## Concept

Bolt Booking Engine is a premium service booking workspace for teams that manage appointments, provider capacity, client confirmations, and daily schedule pressure. It opens directly into the operating console instead of a sales page.

## Palette

- Cloud `#F6F8FC` is the page ground, control surface, drawer, calendar cells, and quiet panel color.
- Ink `#19212B` anchors type, the hero panel, calendar headers, and high-contrast summary surfaces.
- Indigo `#4F46E5` drives primary actions, selected times, booked slots, and brand emphasis.
- Cyan `#06B6D4` marks live sync, available slots, search affordances, and focus treatment.
- Lime `#A3E635` communicates healthy capacity, ready appointments, and positive KPI states.
- Coral `#FB7185` signals urgent calendar pressure, notification counts, and cancelled status treatment.

All borders, muted text, panels, shadows, and softer states use opacity or color-mix treatments derived from the required colors.

## Typography

Headings and brand moments use Manrope for a confident operational tone. Navigation, forms, tables, badges, and all interface copy use Inter for compact readability. Both families load from the Google Fonts CDN.

## Structure

- Sticky top navigation with brand, Bookings/Providers/Services/Calendar/Settings links, search, notifications badge, and mobile hamburger.
- Hero dispatch area with live capacity message and next appointment queue.
- KPI strip for bookings today, upcoming this week, cancellation rate, and average rating.
- Weekly calendar grid with booked, urgent, ready, and available slot treatments.
- Provider profile grid with avatars, specialties, ratings, and next available times.
- Service catalog with duration, price, category tag, and book action.
- Three-step booking flow for service selection, time selection, and client confirmation.
- Recent bookings table with confirmed, pending, and cancelled badges.
- Footer credit line: Bolt Booking Engine — designed by Northline Studio.

## Accessibility

The page uses semantic header, nav, main, section, aside, form, table, and footer landmarks. The mobile drawer exposes `aria-controls`, `aria-expanded`, and `aria-hidden`, supports Escape to close, traps Tab focus while open, closes from backdrop or links, and returns focus to the hamburger. Interactive elements receive visible focus treatment, the booking summary uses `aria-live`, and reduced-motion preferences shorten transitions.

## Responsive Behavior

Desktop presents the hero and dispatch queue side by side, with four-column KPIs and provider cards. Tablet collapses the hero and booking flow while keeping dense operational cards readable. Mobile switches to a keyboard-friendly slide-in drawer, stacks KPIs, providers, service rows, and booking panels, and keeps the calendar/table horizontally scrollable for data integrity.
