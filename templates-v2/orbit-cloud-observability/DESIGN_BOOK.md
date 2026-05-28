# Orbit Cloud Observability — Design Book

## 1. Project Name
Orbit Cloud Observability

## 2. Product Type
Cloud observability dashboard for SRE teams.

## 3. Intended Audience
Site reliability engineers, DevOps teams, platform engineers managing production services.

## 4. User Problem
When something breaks, operators need to see what changed, what broke, and what to do next — fast. No digging through logs or switching tabs.

## 5. UX Concept
Operators must see what changed, what broke, and what to do next. Include "probable cause" cards that correlate deploys with incidents.

## 6. Layout Structure
- **Service map**: Full-width top bar showing all services with health status
- **Incident queue**: Left column with severity-sorted incidents
- **Latency charts**: Center with p95 latency graph + probable cause card
- **Live logs**: Right column with color-coded log entries
- **Deployment timeline**: Full-width bottom bar with recent deploys

## 7. Typography System
- **Interface**: Inter (400-700) — clean, dense dashboard readability
- **Logs/Metrics**: JetBrains Mono (400-600) — log entries, timestamps, version numbers

## 8. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Midnight | #080C16 | Page background |
| Cloud navy | #111C2E | Cards, panels, service map |
| Violet | #8B5CF6 | Secondary chart line, accents |
| Cyan | #22D3EE | Primary chart line, info logs, links |
| Green | #34D399 | Healthy status, success |
| Rose | #FB7185 | Critical incidents, errors, alerts |

## 9. Component System
- **Service map nodes**: Color-coded pills with health status dots
- **Incident items**: Severity badge + title + affected services + timestamp
- **Latency chart**: SVG area chart with dual lines (p95 + p50)
- **Probable cause card**: Rose-tinted card with root cause analysis
- **Log entries**: Timestamp + level (color-coded) + message
- **Deploy items**: Version + time + status (success/failed/pending)

## 10. Interaction Rules
- Service map shows live health status
- Incidents sorted by severity
- Probable cause auto-correlated with deploys
- Focus-visible with cyan outline
- Drawer navigation on mobile

## 11. Responsive Behavior
- **Desktop (1400px+)**: Full 3-column layout with service map
- **Tablet (1024px)**: Single column, stacked sections
- **Mobile (768px)**: Incident triage mode — priority incidents, affected services, actions only

## 12. Accessibility Notes
- Semantic landmarks and ARIA labels
- Skip link to charts
- prefers-reduced-motion support
- Color is not the only indicator (text labels on all states)

## 13. Performance Notes
- Single HTML file, no external dependencies beyond Google Fonts
- SVG charts inline (no JS charting library)
- CSS-only visual elements
- Minimal JS for drawer only

## 14. Commercial Use Cases
- Cloud monitoring platforms (Datadog alternatives)
- SRE dashboards
- Incident management tools
- Deployment monitoring
- Infrastructure observability
