# Spark Event Platform Design Book

Spark Event Platform is a premium frontend skeleton for event management, ticket sales, speaker programming, schedules, and venue operations.

## Visual System

- Typography: Manrope for headings, Inter for interface text, loaded through Google Fonts.
- Background: Cloud `#F6F8FC`.
- Text and dark panels: Ink `#19212B`.
- Primary accent: Indigo `#4F46E5`.
- Secondary and live states: Cyan `#06B6D4`.
- Healthy states: Lime `#A3E635`.
- Attention states: Coral `#FB7185`.

The interface uses strict color discipline with opacity-based tints only. Cards keep an 8px radius, restrained borders, and focused shadows.

## Interaction Model

- Desktop navigation exposes section links, search, and the main creation action.
- Mobile navigation uses a keyboard-accessible slide-in drawer with Escape and scrim close behavior.
- Event listings filter instantly by event type.
- Schedule tabs switch day panels with ARIA tab semantics.

## Layout Notes

- The hero presents a featured event with a CSS gradient banner, date, location, and sales pulse panel.
- Event cards prioritize date, title, venue, event type, and ticket status.
- Speaker cards use CSS gradient avatars and compact social actions.
- Ticket tiers emphasize price, inclusion hierarchy, and purchase action.
- Venue mapping is built with CSS grid rooms and live markers.

## Accessibility

- Semantic landmarks are used for header, nav, main, sections, aside, and footer.
- A skip link appears on focus.
- Keyboard focus uses a visible cyan outline.
- Motion is reduced for users who prefer reduced animation.
- Drawer state is reflected with `aria-expanded` and `aria-hidden`.
