# Clarity Analytics Studio — Design Book

## 1. Project Name
Clarity Analytics Studio

## 2. Product Type
Analytics dashboard and BI product.

## 3. Intended Audience
Business analysts, data teams, and decision-makers who need insights without SQL.

## 4. User Problem
Analytics is intimidating — dashboards are complex, charts lack context, and non-technical users can't explore data freely.

## 5. UX Concept
Make analytics less intimidating. Every chart has a plain-English insight summary. Users can ask questions in natural language.

## 6. Layout Structure
- **Hero**: Centered with badge, title, CTAs
- **KPI strip**: 4-column metrics with mono values and change indicators
- **Dashboard preview**: 3-column modular grid with charts and insight cards
- **Chart gallery**: 3-column showcase of chart types (bar, heatmap, funnel)
- **AI panel**: Dark split card with question input and example queries
- **Governance**: 3-column cards (access, audit, lineage)

## 7. Typography System
- **UI**: IBM Plex Sans (400-700) — clean, professional, readable
- **Values**: IBM Plex Mono (400-600) — stable numeric alignment for metrics
- **Narrative insights**: Source Serif 4 (400-700) — warm serif for story-driven insights

## 8. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Paper | #FAFAF5 | Page background |
| Ink | #18181B | Primary text |
| Data blue | #2563EB | Primary accent, charts, CTAs |
| Violet | #A855F7 | Secondary chart color, accents |
| Emerald | #10B981 | Positive metrics, retention |
| Warm gray | #D6D3D1 | Borders, neutral elements |

## 9. Component System
- **KPI cards**: Label + mono value + change indicator
- **Dashboard widgets**: Chart + insight card with plain-English summary
- **Chart cards**: Title + type label + SVG visualization
- **AI input**: Question field + ask button + example queries
- **Governance cards**: Icon + title + description

## 10. Interaction Rules
- AI input accepts natural language questions
- Hover states on all cards
- Focus-visible with blue outline
- Drawer navigation on mobile

## 11. Responsive Behavior
- **Desktop**: Full 4-column KPIs, 3-column charts
- **Tablet (1024px)**: 2-column KPIs, stacked sections
- **Mobile (768px)**: Insight cards prioritized over charts, expandable visualizations

## 12. Accessibility Notes
- Semantic landmarks and ARIA labels
- Skip link to dashboard content
- prefers-reduced-motion support
- Charts have text-based insight summaries

## 13. Performance Notes
- Single HTML file, no external dependencies beyond Google Fonts
- SVG charts inline (no JS charting library)
- CSS-only visual elements
- Minimal JS for drawer only

## 14. Commercial Use Cases
- BI platform marketing pages
- Analytics product homepages
- Data visualization tool interfaces
- Business intelligence dashboards
