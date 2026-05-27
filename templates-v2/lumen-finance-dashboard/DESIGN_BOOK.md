# Lumen Finance Dashboard Design Book

## Concept

Lumen Finance Dashboard is a premium personal finance workspace for consumer fintech users who want spending, budgets, investments, and savings goals in one scanning surface. The page behaves like an active dashboard rather than a marketing landing page, with the first viewport immediately showing account health and net worth context.

## Palette

- Cloud `#F6F8FC` is the page base, card surface, chart interior, and drawer background.
- Ink `#19212B` anchors text, the dark hero finance card, footer, and the final donut segment.
- Indigo `#4F46E5` marks primary action, brand identity, high-value chart segments, and allocation bars.
- Cyan `#06B6D4` marks live sync, positive movement emphasis, secondary chart data, and focus states.
- Lime `#A3E635` marks healthy cashflow, savings progress, and income bars.
- Coral `#FB7185` marks expense bars, credit-card caution, and budget pressure.

Only these six colors are used, with opacity variants for borders, muted text, and layered surfaces.

## Typography

Headings use Manrope for large financial totals and confident dashboard hierarchy. Inter handles navigation, labels, transaction metadata, and dense UI text because the numerals remain clear across compact cards. Both fonts load from the Google Fonts CDN.

## Layout

The skeleton follows the required structure:

- Sticky top nav with brand, section links, search, profile avatar, and mobile hamburger.
- Hero section with a dark live wallet panel and clear consumer finance positioning.
- Account summary strip for total balance, checking, savings, and credit-card movement.
- Dashboard grid for spending insights, budget progress, and six-month cashflow.
- Recent transactions beside investment portfolio holdings.
- Savings goal cards with target, current amount, and visual progress.
- Footer with visible Lumen Finance Dashboard studio credit.

Cards use restrained borders, 8px radius, stable chart dimensions, and dense but breathable spacing so the dashboard feels operational and premium.

## Accessibility

The page uses semantic landmarks, descriptive section labels, accessible chart summaries, `focus-visible` styles, keyboard-operable drawer controls, Escape-to-close behavior, and `prefers-reduced-motion` support. The mobile drawer updates `aria-expanded` and `aria-hidden` state as it opens and closes.
