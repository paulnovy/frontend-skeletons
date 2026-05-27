# Bolt Scheduler Pro Design Book

## Product Direction
Bolt Scheduler Pro is a premium productivity interface for teams that coordinate internal calendars, external invitees, meeting polls, and booking pages from one scheduling workspace.

## Visual System
- Typography: Manrope for headings and brand moments, Inter for interface text and dense controls.
- Cloud `#F6F8FC` sets the page background and quiet surfaces.
- Ink `#19212B` anchors text, dark panels, platform icons, and high-contrast actions.
- Indigo `#4F46E5` drives primary actions, booking options, and discovery meetings.
- Cyan `#06B6D4` signals live sync and secondary system activity.
- Lime `#A3E635` marks healthy connections and available slots.
- Coral `#FB7185` marks pending attention, blocked windows, and urgent review states.

## Interaction Notes
- The mobile hamburger opens a keyboard-accessible slide-in drawer with Escape and backdrop dismissal.
- Availability slots toggle directly in the weekly grid.
- Focus-visible styling uses the cyan accent for a clear keyboard path.
- Motion respects reduced-motion preferences.

## Layout Notes
- The first viewport leads with a dark scheduling command panel and live integration status.
- Calendar, meetings, polls, availability, booking, and integrations are all present as usable skeleton sections.
- Cards use an 8px radius, restrained borders, and compact controls suitable for repeated operational use.

## Accessibility Notes
- Semantic header, main, section, aside, nav, form, and footer landmarks are included.
- Navigation links target major sections.
- Form fields include labels.
- Drawer state updates `aria-hidden` and `aria-expanded`.
