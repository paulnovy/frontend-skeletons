# Lumen Finance Dashboard Design Book

## Project Name
Lumen Finance Dashboard

## Product Type
Premium personal finance and wealth dashboard.

## Product Positioning
Lumen Finance is a calm financial planning surface for people who want to understand their money without feeling judged by it. The interface translates accounts, cashflow, goals, and recurring obligations into plain-language guidance.

## Intended Audience
Professionals, couples, and households who track cashflow, savings goals, spending categories, retirement contributions, and short-term decisions in one place. The dashboard should feel serious enough for wealth tracking and approachable enough for monthly budgeting.

## User Problem
Most personal finance tools turn money into noise: too many charts, alarming colors, or raw transaction tables without context. Lumen reduces stress by leading with the answer: what is safe, what needs attention, and what can wait.

## UX Concept
The page opens with "Today's money snapshot" so users immediately know whether they are okay. Desktop uses a calm three-part dashboard: left financial health score, center cashflow graph and timeline, right goals and explanations. Mobile prioritizes the money snapshot first, goals second, and swipeable charts after the key decision context.

## Layout Structure
- Sticky top navigation with brand, section links, account alert button, transfer action, and hamburger drawer on mobile.
- Top account summary with editorial money insight, net worth, available cash, and monthly spending.
- Left column: financial health score and account balances.
- Center column: cashflow chart with accessible summary, spending breakdown, and monthly timeline.
- Right column: goals panel, plain-language financial insight, and recent transactions.
- Footer includes the required credit: "Built with Frontend Skeletons".

## Typography System
- Interface: IBM Plex Sans for labels, body text, navigation, buttons, and cards.
- Editorial insights: Fraunces for the large money headline and section headlines.
- Numbers: IBM Plex Mono for balances, dates, scores, cash values, and chart labels.
- Type avoids negative letter spacing and keeps money values stable with mono figures.

## Color System
- Warm ivory `#FBF7EE`: primary page background.
- Forest `#12372A`: trusted financial anchor, primary actions, score surfaces, and income bars.
- Mint `#B8F2D0`: positive progress, calm highlights, and low-stress status.
- Gold `#D6A84F`: goal progress, savings emphasis, and timeline accents.
- Ink `#17201B`: primary text.
- Clay `#C9704A`: spending, warning accents, and focus rings.

## Explicit Design Tokens
- `--color-ivory`: `#FBF7EE`
- `--color-ivory-2`: `#FFFDF7`
- `--color-forest`: `#12372A`
- `--color-forest-2`: `#1B4C3A`
- `--color-mint`: `#B8F2D0`
- `--color-mint-2`: `#E5F9ED`
- `--color-gold`: `#D6A84F`
- `--color-gold-2`: `#F1DCA4`
- `--color-ink`: `#17201B`
- `--color-ink-soft`: `#4D5B52`
- `--color-clay`: `#C9704A`
- `--color-clay-2`: `#F3D0BE`
- `--font-ui`: `"IBM Plex Sans", system-ui, sans-serif`
- `--font-editorial`: `"Fraunces", Georgia, serif`
- `--font-mono`: `"IBM Plex Mono", monospace`
- `--radius-sm`: `8px`
- `--radius-md`: `14px`
- `--radius-lg`: `20px`
- `--radius-xl`: `28px`
- `--shadow-card`: `0 18px 45px rgba(18, 55, 42, 0.08)`

## Component System
- Snapshot hero: large editorial statement that explains the current money position in plain English.
- Metric cards: net worth, available cash, and monthly spending with mono numeric values and short explanations.
- Financial health score: conic progress ring with supporting factor bars.
- Account cards: realistic account names, balances, and purpose labels.
- Cashflow tabs: keyboard-accessible tablist for flow and spending views.
- Swipeable chart: monthly cashflow chart uses horizontal overflow and accessible summaries.
- Goal panel: funded percentages, target dates, and a transfer action.
- Plain-language insight: explains abnormal spending without blame.
- Timeline cards: upcoming money events with dates, account actions, and expected amounts.
- Transaction list: realistic merchants, deposits, transfers, and category notes.

## Interaction Rules
- Primary money action stays visible in the header on desktop.
- Escape closes the mobile navigation drawer.
- Mobile navigation links close the drawer after activation.
- Cashflow tabs support click and left/right arrow keyboard navigation.
- Goal transfer button gives immediate, stable feedback without shifting layout.
- Focus states are high-contrast and visible on all interactive elements.

## Responsive Behavior
- Desktop uses a top summary plus three-column dashboard.
- Tablet collapses the right rail below the main columns while preserving the score and cashflow emphasis.
- Mobile orders content as snapshot, goals, charts, then health and accounts.
- Cashflow charts become horizontally swipeable on narrow screens.
- Metric cards keep stable heights to avoid layout shift.

## Accessibility Notes
- Semantic landmarks are used for header, navigation, main content, sections, aside, and footer.
- Skip link jumps directly to the money snapshot.
- Charts provide plain-language text summaries before visual data.
- Color is never the only signal; labels and amounts describe state.
- Focus styles use clay against ivory and forest backgrounds.
- Motion respects `prefers-reduced-motion`.

## Content Rules
- Use realistic account names, merchant descriptions, timelines, savings goals, and transaction details.
- Use plain language before technical detail.
- Avoid shame language around spending.
- Treat financial warnings as planning guidance, not emergencies.
- No filler copy.

## Commercial Use Cases
- Personal finance SaaS dashboards.
- Wealth planning portals.
- Banking app concept screens.
- Household budgeting products.
- Advisor client portals.
- Financial wellness benefits dashboards.
