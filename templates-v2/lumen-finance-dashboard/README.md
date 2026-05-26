# Lumen Finance Dashboard

## Category
Personal Finance and Wealth Dashboard

## Description
Lumen Finance Dashboard is a premium standalone frontend skeleton for a calm personal finance product. It presents a money snapshot, financial health score, cashflow chart, goals, account balances, spending categories, monthly timeline, and recent transactions with plain-language explanations.

## Files
- `index.html`: Standalone HTML file with inline CSS and JavaScript.
- `DESIGN_BOOK.md`: Design system, tokens, layout rules, accessibility notes, and content guidance.
- `README.md`: Project overview and viewing instructions.

## How to View
Open `index.html` directly in a browser, or serve this folder locally:

```bash
cd /home/marian/clawd/frontend-skeletons/templates-v2/lumen-finance-dashboard
python3 -m http.server 3011
```

Then visit:

```text
http://localhost:3011/
```

## Key Features
- Premium dashboard layout for personal finance, budgeting, and wealth tracking.
- Google Fonts CDN: IBM Plex Sans, Fraunces, and IBM Plex Mono.
- Required palette: warm ivory, forest, mint, gold, ink, and clay.
- Top account summary with "Today's money snapshot" as the first decision point.
- Left financial health score with account balances and factor bars.
- Center cashflow graph with accessible text summaries and swipeable mobile chart behavior.
- Right goals panel with realistic savings goals and plain-language insight.
- Monthly timeline for upcoming bills, deposits, card payments, and investing.
- Realistic transactions, account names, balances, spending categories, and goal names.
- Semantic HTML5, CSS Grid/Flexbox, custom properties, focus states, keyboard tab navigation, reduced-motion support, and mobile hamburger menu.
- Footer credit: "Built with Frontend Skeletons".

## Recommended Screenshot
Use a desktop viewport around `1440x1100` to capture the top snapshot, score card, cashflow graph, and goals rail. Use a mobile viewport around `390x844` to verify that the snapshot appears first, goals appear before charts, and chart panels can be swiped horizontally.
