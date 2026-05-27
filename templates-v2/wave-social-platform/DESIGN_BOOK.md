# Wave Social Platform Design Book

## Concept
Wave is a premium social networking interface for creator-led communities. The skeleton focuses on fast posting, high-signal feeds, lightweight discovery, and always-available messaging.

## Visual System
- Typography: Manrope anchors brand and section headings, while Inter supports dense UI and readable feed content.
- Color palette: Cloud `#F6F8FC`, ink `#19212B`, indigo `#4F46E5`, cyan `#06B6D4`, lime `#A3E635`, and coral `#FB7185`.
- Shape language: Compact 8px radii, crisp panels, and restrained elevation keep the app feeling polished without becoming decorative.

## Sections
- Top navigation includes brand, core links, search, notifications, and avatar access.
- Composer supports text entry, character count, image action, and publish intent.
- Feed cards include author metadata, post text, abstract media areas, and social actions.
- Sidebar combines profile preview, trends, and suggested follows.
- Messaging drawer provides conversations, bubbles, and message input.
- Notification dropdown includes like, follow, and comment activity.

## Accessibility
- Semantic landmarks are used for header, main feed, aside, and footer.
- Drawer and dropdown controls expose `aria-controls`, `aria-expanded`, and `aria-hidden` state changes.
- Focus-visible styling is explicit.
- Motion is reduced for users who prefer less animation.

## Responsive Behavior
- Desktop uses a two-column layout with sticky sidebar.
- Tablet collapses navigation into a hamburger while keeping sidebar content available below the feed.
- Mobile uses a slide-in menu, single-column content, stacked social actions, and a full-height chat drawer.
