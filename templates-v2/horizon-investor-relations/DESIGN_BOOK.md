# Horizon Investor Relations Design Book

## Concept

Horizon Investor Relations is a premium corporate IR page for a fintech issuer. The interface prioritizes speed, trust, and scanability: market data is visible immediately, reports are grouped by period, governance information is concise, and shareholder resources are one click away.

## Typography

- Headings use Manrope for a precise institutional voice.
- Interface text uses Inter for clear tables, cards, buttons, and navigation.
- Type scale stays restrained outside the opening statement so dense financial content remains easy to scan.

## Color System

- Cloud `#F6F8FC` creates the calm page surface.
- Ink `#19212B` anchors text, footer, and the market summary panel.
- Indigo `#4F46E5` marks primary actions and chart bars.
- Cyan `#06B6D4` signals live data, secondary badges, and chart accents.
- Lime `#A3E635` communicates healthy performance and positive movement.
- Coral `#FB7185` is reserved for critical states and alert-ready styling.

Only the required palette and transparent tints of those colors are used.

## Layout

- Sticky navigation keeps investor sections available while scrolling.
- The hero pairs a clear shareholder message with a dark market-data panel.
- KPI cards summarize the stock price, market cap, 52-week range, and dividend yield.
- Financial reports, governance cards, events, and resources use consistent compact cards with an 8px radius.
- The stock area uses a CSS bar chart and a key metrics table for a dependency-free presentation.

## Accessibility

- Semantic landmarks and section labels structure the document.
- A skip link supports keyboard users.
- The mobile drawer has explicit open and close buttons, Escape support, focus trapping, and aria state updates.
- Focus-visible styles use cyan outlines.
- Motion is reduced for users who prefer reduced animation.

## Responsive Behavior

- Desktop shows full navigation, search, paired hero columns, and multi-column data grids.
- Tablet collapses dense grids to two columns and keeps search visible.
- Mobile hides desktop links, activates a slide-in drawer, and stacks all investor content into a single column.
