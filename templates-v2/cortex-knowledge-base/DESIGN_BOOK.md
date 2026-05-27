# Cortex Knowledge Base Design Book

## Positioning

Cortex Knowledge Base is a premium enterprise knowledge management surface for internal documentation, wikis, searchable policies, team spaces, and saved reference material.

## Visual System

- Typography: Manrope is used for the brand, headings, KPI figures, and major section labels. Inter is used for navigation, search fields, lists, buttons, metadata, and operational UI.
- Background: Cloud `#F6F8FC` creates a bright internal-tool canvas that keeps dense documentation content readable.
- Core text and dark knowledge surfaces: Ink `#19212B` anchors navigation, body text, and the hero search command surface.
- Primary accent: Indigo `#4F46E5` marks main actions, document trust markers, navigation emphasis, and premium interactive states.
- Live signal: Cyan `#06B6D4` indicates search activity, live knowledge graph status, and collaborative freshness.
- Healthy state: Lime `#A3E635` is reserved for trusted articles, healthy ownership coverage, and successful knowledge health signals.
- Critical state: Coral `#FB7185` highlights incident material, aging reviews, urgent gaps, and bookmark removal controls.

## Layout

The first viewport opens directly into a searchable knowledge workspace. The top navigation keeps major knowledge destinations visible, the hero search area makes discovery the primary action, and the KPI panel shows system health without turning the page into a marketing site.

The main body pairs a sticky hierarchical wiki browser with article recommendations, then moves into team workspaces and user bookmarks. This gives users three common entry points: direct search, structured browsing, and team ownership.

## Components

- Top navigation with brand, links, inline search, signed-in avatar, and keyboard-ready mobile drawer.
- KPI strip with total articles, active contributors, searches today, average read time, and live activity.
- Search hero with recent searches and popular tags.
- Article cards with category tags, author identity, read time, last-updated metadata, and trust status.
- Wiki tree with expand and collapse controls for hierarchical documentation spaces.
- Team workspace cards with member avatars, article counts, recent activity, and knowledge health indicators.
- Bookmark list with quick-remove controls and a session empty state.

## Accessibility

The skeleton uses semantic landmarks, labeled forms, descriptive aria labels, focus-visible outlines, keyboard-operable drawer controls, Escape-to-close behavior, and aria-expanded updates for the mobile menu and wiki tree. Motion is reduced through a `prefers-reduced-motion` media query.

## Responsive Behavior

Desktop uses a two-column knowledge workspace with sticky wiki and bookmark panels. Tablet collapses major panels into a single reading flow while preserving article grids. Mobile swaps the top navigation for a slide-in drawer, stacks cards, keeps controls tap-friendly, and preserves access to search, wikis, teams, and bookmarks.
