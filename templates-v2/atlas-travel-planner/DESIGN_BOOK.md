# Atlas Travel Planner Design Book

## Concept

Atlas Travel Planner is a premium travel planning workspace for building itineraries, discovering destinations, managing bookings, and tracking spend. The interface is calm and operational: it helps a traveler make decisions quickly without feeling like a marketing page.

## Visual System

- Typography: Manrope for headings and brand moments, Inter for interface text.
- Page background: Cloud `#F6F8FC`.
- Primary text and dark panels: Ink `#19212B`.
- Primary accent: Indigo `#4F46E5`.
- Secondary accent and live signals: Cyan `#06B6D4`.
- Healthy status: Lime `#A3E635`.
- Alerts and urgent booking states: Coral `#FB7185`.

The palette is intentionally narrow. Depth comes from opacity, soft borders, and gradients built from the approved colors.

## Layout

- Sticky top navigation with brand, route links, global search, notification badge, and mobile drawer.
- Hero workspace with trip search fields and a live route summary.
- Featured destination cards directly below the hero for fast discovery.
- Itinerary builder with day selectors and timeline activity cards.
- Destination discovery grid using approved gradient backgrounds.
- Booking management list with clear type markers, statuses, dates, and prices.
- Saved destinations in a horizontal scroll row with quick-add controls.
- Budget section with a CSS-only donut chart and itemized spend.

## Accessibility

- Semantic landmarks for header, main sections, and footer.
- Keyboard reachable mobile drawer with `aria-expanded`, `aria-hidden`, Escape close behavior, and focus management.
- Visible focus rings using the cyan accent.
- Reduced-motion media query keeps drawer transitions and scroll behavior comfortable for motion-sensitive users.

## Content Tone

The copy is practical and premium. It avoids filler and focuses on planning confidence: routes, reservations, timing, spend, and traveler preferences.
