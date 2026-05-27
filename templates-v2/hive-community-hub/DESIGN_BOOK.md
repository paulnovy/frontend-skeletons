# Hive Community Hub Design Book

## Concept

Hive Community Hub is a premium operating workspace for online communities that need forums, member discovery, events, resources, and moderation health in one calm interface.

## Visual System

- Typography: Manrope for headings and brand moments, Inter for navigation, metrics, forms, cards, and controls.
- Background: Cloud `#F6F8FC` keeps the product surface quiet and readable.
- Primary text and dark panels: Ink `#19212B` anchors contrast and creates command-center moments.
- Primary accent: Indigo `#4F46E5` marks main actions, category emphasis, and active navigation.
- Secondary accent: Cyan `#06B6D4` marks live activity, search focus, and healthy real-time signals.
- Healthy status: Lime `#A3E635` is used for moderation health, positive reputation movement, and OK states.
- Critical status: Coral `#FB7185` appears on notification badges and urgent forum labels.

All depth comes from the required palette through opacity, borders, and restrained gradients.

## Layout

- Sticky top navigation with brand, required nav links, search, notification badge, and mobile hamburger drawer.
- Hero operating panel paired with a live member activity card.
- KPI strip for total members, active discussions, events this month, and online members.
- Forum thread list with avatars, category tags, reply counts, and last active context.
- Searchable and role-filterable member directory grid.
- Sidebar event calendar, topic cloud, community guidelines accordion, and moderation health summary.
- Footer includes the visible studio credit line.

## Accessibility

- Semantic `header`, `nav`, `main`, `section`, `aside`, `article`, and `footer` landmarks are used throughout.
- A skip link lets keyboard users jump to the community hub.
- The mobile drawer updates `aria-expanded` and `aria-hidden`, closes on Escape and backdrop click, and returns focus to the hamburger control.
- Accordion buttons expose `aria-expanded` state.
- Focus-visible rings use cyan for strong contrast.
- `prefers-reduced-motion` removes drawer transitions and smooth scrolling.

## Responsive Behavior

Desktop uses a two-column workspace with a dense operational sidebar. Tablet collapses hero and workspace content into a single column while keeping KPI and member grids efficient. Mobile switches to the hamburger drawer, single-column cards, full-width actions, and compact thread metadata.
