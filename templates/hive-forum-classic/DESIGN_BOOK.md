# Design Book — Hive Forum Classic

## Positioning

- Category: Classic forum layout
- Mood: Nostalgic but modern, community-driven
- Audience: Product, operations, and domain teams evaluating a premium frontend direction.

## Visual System

- Background: `#f7f8fb`
- Surface: `#ffffff`
- Text: `#1f2a44`
- Accent: `#2563eb`
- Secondary accent: `#1d4ed8`
- Typography: Inter with JetBrains Mono for compact technical values.

## Interface Priorities

- **Thread list:** 87 unread — Avatars, tags, reply count, and last poster details.
- **User reputation:** Top 1% — Helpful answers, badges, and trusted member markers.
- **Trending topics:** 12 active — Hot threads ranked by velocity and recent replies.
- **Online users:** 318 now — Members, guests, moderators, and newest signup.

## Responsive Behavior

The desktop layout uses a three-column application shell with sticky navigation and context rail. Tablet width collapses the rail beneath the main content. Mobile width hides the sidebar behind a hamburger menu and stacks metrics, cards, tables, and command controls.

## Interaction Notes

Buttons, navigation links, cards, inputs, and selectors include visible hover and focus states. Cards use subtle pointer tilt and staged entrance motion. The command form simulates queued feedback without leaving the page.
