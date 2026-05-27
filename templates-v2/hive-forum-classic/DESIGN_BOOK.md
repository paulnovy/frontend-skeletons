# Hive Forum Classic Design Book

Hive Forum Classic is a premium community skeleton for an online forum with familiar threaded discussion patterns, visible reputation, and practical moderation workflows.

## Direction

- Type: Classic forum layout
- Category: Community
- Use case: Online forum
- Personality: structured, credible, active, and moderator-friendly

## Typography

- Headings use Manrope from Google Fonts.
- Interface text uses Inter from Google Fonts.
- Letter spacing stays natural, with compact uppercase labels only for metadata and badges.

## Color System

- Cloud `#F6F8FC` for the page background and soft panels
- Ink `#19212B` for text and dark operational panels
- Indigo `#4F46E5` for primary actions and selected states
- Cyan `#06B6D4` for live status and activity accents
- Lime `#A3E635` for healthy states and positive reputation signals
- Coral `#FB7185` for alerts, reports, and moderation risk

The interface uses these colors with opacity and CSS color mixing for tints.

## Components

- Sticky top navigation with desktop links and account actions
- Keyboard-accessible mobile drawer with scrim and Escape support
- Category cards with icon, topic count, post count, and last activity
- Sortable thread table with pinned, locked, and activity badges
- Thread reply cards with nested replies, reputation labels, voting, and moderation actions
- Sidebar panels for contributor reputation and community health
- Moderation panel with report queue, ban list, and bulk action buttons
- New thread form with title, category, editor controls, content, tags, and publish action

## Accessibility

- Semantic landmarks are used for header, main, sections, aside, navigation, and footer.
- The drawer exposes `aria-expanded` and `aria-hidden` state.
- Interactive controls use visible focus states.
- Motion is reduced through `prefers-reduced-motion`.
