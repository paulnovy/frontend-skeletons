# Echo Podcast Studio Design Book

## Concept

Echo Podcast Studio is a premium podcast operations dashboard for teams managing episode releases, analytics, listener engagement, and platform distribution from one focused workspace.

## Visual System

- Typography: Manrope for expressive headings and Inter for UI text.
- Background: Cloud `#F6F8FC` keeps the workspace bright and calm.
- Text and dark panels: Ink `#19212B` anchors the interface and gives the hero a studio-console feel.
- Primary accent: Indigo `#4F46E5` is used for key actions and selected states.
- Secondary accent: Cyan `#06B6D4` signals live recording, sync, and analytic energy.
- Health state: Lime `#A3E635` marks healthy trends and connected status.
- Alert state: Coral `#FB7185` marks churn, review queues, and attention states.

## Layout

The page opens directly into the usable product dashboard rather than a marketing landing page. The first viewport combines production status, a waveform studio board, navigation, search, and primary episode creation.

Required product surfaces are included:

- KPI strip for catalog and audience health.
- Episode management table with status badges and actions.
- Analytics bar chart for the last ten episodes.
- Calendar-style scheduler with platform badges.
- Listener engagement cards with comments, reviews, shares, and trend indicators.
- Platform distribution cards for Spotify, Apple, and Google.

## Accessibility

The skeleton uses semantic landmarks, a skip link, visible focus styles, accessible labels for controls, keyboard-operable drawer controls, Escape handling, and a reduced-motion media query.

## Responsive Behavior

The top navigation collapses into a hamburger drawer on smaller screens. Tables and calendar grids support horizontal overflow where dense operational data must remain readable.
