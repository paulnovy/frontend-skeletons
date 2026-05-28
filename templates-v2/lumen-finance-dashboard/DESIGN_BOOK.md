# Lumen Finance Dashboard — Design Book

## 1. Project Name
Lumen Finance Dashboard

## 2. Product Type
Personal finance and wealth management dashboard.

## 3. Intended Audience
Individuals managing personal finances, savings goals, investments, and monthly budgets.

## 4. User Problem
People find money management intimidating and opaque. They need a calm, clear view of their financial health that makes complex numbers feel manageable and non-threatening.

## 5. UX Concept
Make money feel understandable and non-threatening. Use plain-language financial explanations. The dashboard opens with a health score, then shows where money is going and where it's headed.

## 6. Layout Structure
- **Left panel**: Financial health score (ring chart), account summary, monthly budget breakdown
- **Center**: Cashflow chart (income vs expenses over time), recent transactions list
- **Right panel**: Savings goals with progress bars, spending insights with actionable suggestions, upcoming bills

## 7. Typography System
- **Interface**: IBM Plex Sans (400-700) — clean, professional, trustworthy
- **Editorial insights**: Fraunces (500-800) — warm serif for money insights and large numbers
- **Numbers**: IBM Plex Mono (400-600) — stable numeric alignment for financial figures

## 8. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Warm ivory | #FBF7EE | Page background, warm neutral |
| Forest | #12372A | Primary accent, positive values, headings |
| Mint | #B8F2D0 | Positive indicators, chart fills, highlights |
| Gold | #D6A84F | Warnings, budget categories |
| Ink | #17201B | Primary text |
| Clay | #C9704A | Negative values, expenses, alerts |

## 9. Component System
- **Health score ring**: SVG circle with percentage overlay
- **Account rows**: Label + value with positive/negative coloring
- **Cashflow chart**: SVG area chart with income line + expense dashed line
- **Transaction list**: Icon + name + category + amount
- **Goal progress**: Name + percentage bar + current/target amounts
- **Insight cards**: Mint background with plain-language explanation + action button
- **Budget mini**: Color-coded dot + category + amount

## 10. Interaction Rules
- Time period toggle (1W, 1M, 3M, 1Y) for cashflow chart
- Hover states on all interactive elements
- Focus-visible with forest outline
- Drawer navigation on mobile
- Insight action buttons for quick transfers

## 11. Responsive Behavior
- **Desktop (1320px+)**: Full 3-column layout
- **Tablet (1024px)**: 2-column grid for side panels, stacked layout
- **Mobile (768px)**: Single column, "Today's money snapshot" first, then goals, then charts

## 12. Accessibility Notes
- Semantic landmarks (header, main, aside, footer)
- Skip link to main content
- ARIA labels on chart, goals, transactions
- Chart has text summary for screen readers
- prefers-reduced-motion support
- Color is not the only indicator (text labels accompany positive/negative)

## 13. Performance Notes
- Single HTML file, no external dependencies beyond Google Fonts
- SVG charts rendered inline (no JS charting library)
- CSS-only visual elements
- Minimal JS for drawer and period toggle

## 14. Commercial Use Cases
- Personal finance apps (Mint alternatives)
- Wealth management dashboards
- Banking UI concepts
- Financial planning tools
- Budgeting app interfaces
