# Lumen Crypto Exchange Design Book

Lumen is a premium fintech trading skeleton for a cryptocurrency exchange. It emphasizes fast scanning, strong market hierarchy, and restrained visual density for active traders.

## Foundations

- Typography: Manrope is used for headings and product identity; Inter is used for UI controls, metrics, and tables.
- Palette: Cloud `#F6F8FC`, ink `#19212B`, indigo `#4F46E5`, cyan `#06B6D4`, lime `#A3E635`, and coral `#FB7185`.
- Layout: A sticky top navigation anchors the experience, followed by market metrics, a trading workspace, and portfolio tables.
- Shape: Panels and controls use 8px or smaller radii for a precise financial interface.

## Interface Notes

- The chart uses CSS candlesticks and volume bars to keep the template standalone.
- The order book uses proportional depth bands for bids and asks.
- Buy and sell controls are grouped as tabs with clear side color states.
- Tables remain horizontally scrollable on compact screens.
- Mobile navigation uses a keyboard-accessible slide-in drawer.

## Accessibility

- Semantic landmarks structure the page.
- Navigation and trading controls are keyboard reachable.
- Focus states are visible through `:focus-visible`.
- Motion respects `prefers-reduced-motion`.
- The drawer supports Escape close, overlay close, and link close behavior.
