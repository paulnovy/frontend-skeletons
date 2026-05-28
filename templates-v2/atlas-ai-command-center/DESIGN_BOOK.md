# Atlas AI Command Center — Design Book

## 1. Project Name
Atlas AI Command Center

## 2. Product Type
AI operations dashboard for enterprise teams managing production model fleets.

## 3. Intended Audience
ML engineers, AI operations leads, CTOs, and data science managers running AI systems at scale.

## 4. User Problem
Teams running multiple AI models in production lack a unified view of mission status, risk, cost, and agent health. They need to see what changed, what broke, and what to do next — fast.

## 5. UX Concept
Prioritize fast scanning. Every card has a clear state: healthy, warning, critical, or pending. The hero area is not a marketing hero but a live operational summary with status chips, risk scores, and next-best actions. AI recommendations are contextual and include confidence scores.

## 6. Layout Structure
Desktop uses a three-column command center:
- **Left**: Persistent sidebar navigation with grouped sections (Operations, Intelligence, Settings)
- **Center**: Bento grid with KPI strip, mission status, risk overview, agent fleet table, cost allocation
- **Right**: Activity rail with health score, AI recommendations, next best actions, recent activity

Tablet collapses to two columns with a sticky top status bar. Mobile becomes a vertical sequence of priority cards with bottom navigation and horizontally scrollable metrics.

## 7. Typography System
- **Headings**: Space Grotesk (500, 600, 700) — precise, modern operations feel
- **Body/UI**: Inter (400, 500, 600) — dense dashboard readability
- **Metrics/Logs**: IBM Plex Mono (400, 500, 600) — stable numeric scanning

## 8. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Deep graphite | #070A0F | Page background, primary dark |
| Cloud slate | #1B2333 | Cards, panels, sidebar |
| Electric cyan | #4DE3FF | Primary accent, active states, links |
| Signal lime | #C7FF6B | Healthy status, positive metrics |
| Warning amber | #FFB84D | Warning status, medium risk |
| Soft white | #F4F7FB | Text, icons on dark backgrounds |

Additional semantic colors:
- Critical red: #FF6B6B (critical status, high risk)

## 9. Component System
- **KPI Cards**: 4-column grid, label + value + change indicator
- **Status Chips**: Rounded pills with color-coded backgrounds (healthy/warning/critical/pending)
- **Mission List**: Row-based with status chip, name, and risk score
- **Risk Bars**: Horizontal progress bars with color-coded fills
- **Agent Table**: Dense data table with status, metrics, uptime
- **Recommendation Cards**: Title, description, confidence score
- **Action Items**: Priority badge + action text
- **Health Score**: Large centered number with color coding

## 10. Interaction Rules
- Drawer opens from left on mobile with overlay
- Escape key closes drawer
- All interactive elements have visible focus states (2px cyan outline)
- Status chips are color-only (accessible via text labels)
- Links and buttons have hover states

## 11. Responsive Behavior
- **Desktop (1440px+)**: Full 3-column layout
- **Tablet (1024px)**: Sidebar hidden, drawer navigation, 2-column grid
- **Mobile (768px)**: Single column, stacked cards
- **Small mobile (480px)**: 2-column KPI grid, smaller typography

## 12. Accessibility Notes
- Semantic HTML: header, main, aside, nav, footer
- Skip link to main content
- ARIA labels on all regions and navigation
- aria-current on active navigation
- Drawer has role="dialog" and aria-hidden toggling
- Keyboard navigation: Tab order, Escape to close
- prefers-reduced-motion support
- Color is not the only indicator (text labels accompany all states)

## 13. Performance Notes
- Single HTML file, no external dependencies beyond Google Fonts
- CSS custom properties for efficient theming
- No JavaScript frameworks, minimal vanilla JS for drawer only
- No images — all visual elements are CSS
- Lazy animation (transitions only on hover/interaction)

## 14. Commercial Use Cases
- AI platform dashboards (MLOps, LLMOps)
- Enterprise AI monitoring tools
- Model governance and compliance dashboards
- AI cost management platforms
- Multi-agent orchestration UIs
