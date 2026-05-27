# Lumen Finance Dashboard

Standalone premium frontend skeleton for a personal finance management dashboard with spending insights, budget tracking, cashflow visualization, investment portfolio cards, recent transactions, and savings goals.

## Files

- `index.html` contains the complete standalone page with inline CSS and inline JavaScript.
- `DESIGN_BOOK.md` documents the visual system, typography, layout, and accessibility decisions.
- `README.md` records usage, structure, and verification notes.

## Usage

Open `index.html` directly in a browser. There is no build step for this template, and the only external request is the Google Fonts CDN load for Manrope and Inter.

## Structure

The page includes a sticky top navigation, mobile slide-in drawer, hero finance overview, account summary strip, CSS-only spending donut, budget progress bars, CSS-only six-month cashflow chart, scrollable transaction list, investment portfolio cards, savings goals, and footer credit.

## Verification

The required HTML parser, line count, font, palette, and forbidden-text checks were run after creation. Responsive verification was performed with Playwright at desktop `1440`, tablet `768`, and mobile `390`, including a mobile screenshot for visual inspection.
