# Forge Venture Capital Design Book

## Concept

Forge Venture Capital is a dense operating dashboard for venture partners. The screen prioritizes fund status, portfolio health, deal flow, round-level investment tracking, and LP-facing performance metrics.

## Typography

- Headings use Manrope for strong financial dashboard hierarchy.
- UI text uses Inter for readable tables, cards, navigation, and badges.

## Color System

- Cloud `#F6F8FC` is the application background.
- Ink `#19212B` anchors text, dark panels, and high-contrast controls.
- Indigo `#4F46E5` marks primary actions and fund performance emphasis.
- Cyan `#06B6D4` supports pipeline, climate, and signal states.
- Lime `#A3E635` highlights positive status and board-seat indicators.
- Coral `#FB7185` flags follow-on attention, trend overlays, and fintech accents.

## Layout

The dashboard is built as a single responsive HTML file with a sticky top navigation, KPI strip, portfolio card grid, horizontal Kanban pipeline, investment table, and CSS-only fund performance chart. Mobile uses a hamburger button with a slide-out drawer.

## Components

- Portfolio cards show company identity, sector, stage, amount invested, valuation, board status, and latest update.
- Deal flow lanes include Screening, DD, Term Sheet, Invested, and Passed stages.
- Investment tracking uses a table for round, date, amount, ownership, current value, and multiple.
- Performance metrics pair a CSS chart with DPI, TVPI, and IRR cards.

## Responsive Behavior

Desktop displays the portfolio grid in three columns and performance content in two columns. Tablet moves major panels into a single column and keeps the pipeline horizontally scrollable. Mobile collapses portfolio cards, KPIs, and footer content while navigation moves into the drawer.
