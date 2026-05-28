# Sentryline Cybersecurity Suite — Design Book

## 1. Project Name
Sentryline Cybersecurity Suite

## 2. Product Type
Cybersecurity platform landing page with dashboard preview.

## 3. Intended Audience
CISOs, security engineers, SOC analysts, and enterprise IT leaders.

## 4. User Problem
Security teams need to detect threats fast, contain them in seconds, and prove compliance to auditors. Existing tools are slow, noisy, and hard to audit.

## 5. UX Concept
Convey urgency without panic. Use clear "detect, contain, prove" flow. Show live threat data to demonstrate capability.

## 6. Layout Structure
- **Hero**: Split — left copy/CTAs, right live threat map with stats
- **Risk cards**: 4-column grid showing endpoint, network, data, compliance risk
- **Security timeline**: Vertical timeline with incident types and response times
- **Compliance modules**: 3-column cards with pass/fail/partial status
- **SOC dashboard preview**: Dark panel with 6 key metrics
- **Case studies**: 3-column metric-driven success stories

## 7. Typography System
- **Headings**: Archivo (600-800) — strong, authoritative, military feel
- **Body**: Inter (400-700) — clean, readable
- **Threat IDs**: IBM Plex Mono (400-600) — incident codes, timestamps, metrics

## 8. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Black | #050505 | Page background |
| Tactical gray | #18181B | Cards, panels |
| Acid green | #B6FF3B | Primary accent, positive states, active indicators |
| Alert red | #FF3B4F | Critical threats, high risk, alerts |
| Steel | #94A3B8 | Secondary text, labels |
| Ice | #E2E8F0 | Primary text, headings |

## 9. Component System
- **Threat map**: Dark panel with animated dots and stats grid
- **Risk cards**: Color-coded (red/yellow/green) with percentage changes
- **Timeline items**: Color-coded dots (critical/warning/info) + incident IDs
- **Compliance cards**: Status badges (pass/fail/partial) + descriptions
- **SOC metrics**: 6-card grid with key operational metrics
- **Case study cards**: Large metric + title + description

## 10. Interaction Rules
- Animated threat dots on map
- Hover states on all cards
- Focus-visible with acid green outline
- Drawer navigation on mobile
- Escape to close drawer

## 11. Responsive Behavior
- **Desktop**: Full 2-column hero with threat map, 4-column risk cards
- **Tablet (1024px)**: Threat map hidden, stacked sections
- **Mobile (768px)**: Compact hero, 2-column risk cards, single-column everything else

## 12. Accessibility Notes
- Semantic landmarks and ARIA labels
- Skip link to main content
- prefers-reduced-motion support (disables pulse animation)
- Color is not the only indicator (text labels accompany all states)

## 13. Performance Notes
- Single HTML file, no external dependencies beyond Google Fonts
- CSS-only animations (pulse on threat dot)
- Minimal JS for drawer only

## 14. Commercial Use Cases
- Enterprise cybersecurity platforms
- SOC dashboard interfaces
- Compliance monitoring tools
- Threat intelligence platforms
- Security operations centers
