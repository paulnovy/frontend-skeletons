# Ember HR Talent OS — Design Book

## 1. Project Name
Ember HR Talent OS

## 2. Product Type
Recruiting and HR platform dashboard.

## 3. Intended Audience
HR teams, recruiters, hiring managers managing candidate pipelines and hiring plans.

## 4. User Problem
Hiring is ambiguous — candidates move through stages without clear decision signals. Teams need to see role fit, next steps, interviewer notes, and risks at a glance.

## 5. UX Concept
Reduce hiring ambiguity. Candidate cards show role fit, next step, interviewer notes, and risks. Calm cards with clear decision states.

## 6. Layout Structure
- **KPI strip**: 4-column metrics (open roles, candidates, interviews, time-to-hire)
- **Candidate pipeline**: Kanban with 4 stages (Applied → Screening → Interview → Offer)
- **Scorecards**: Progress bars showing completion status
- **Sidebar**: Today's interviews, diversity snapshot, hiring plan

## 7. Typography System
- **Headings**: Outfit (600-800) — warm, approachable, modern
- **UI**: Inter (400-700) — clean, readable

## 8. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Milk | #FFF9F0 | Page background |
| Aubergine | #3B1D54 | Primary accent, interview times |
| Peach | #FFB199 | Action badges, risk indicators |
| Lilac | #D8B4FE | Secondary accent, avatars |
| Sage | #A7C957 | Strong fit, positive states |
| Ink | #24212A | Primary text |

## 9. Component System
- **KPI cards**: Label + value + change
- **Candidate cards**: Name + fit badge + role + next action + risk
- **Interview items**: Time block + candidate + type badge
- **Scorecard items**: Avatar + name + status + progress bar
- **Diversity cards**: Large number + label
- **Plan items**: Color dot + role + department + priority

## 10. Interaction Rules
- Pipeline cards show role fit and next steps
- Interview schedule highlights today's meetings
- Scorecards show completion progress
- Focus-visible with aubergine outline
- Drawer navigation on mobile

## 11. Responsive Behavior
- **Desktop**: 2-column layout (main + sidebar)
- **Tablet (1024px)**: Single column, stacked sections
- **Mobile (768px)**: Focus on today's interviews, candidates awaiting action, scorecard completion

## 12. Accessibility Notes
- Semantic landmarks and ARIA labels
- Skip link to main content
- prefers-reduced-motion support
- Color is not the only indicator (text labels on all states)

## 13. Performance Notes
- Single HTML file, no external dependencies beyond Google Fonts
- CSS-only visual elements
- Minimal JS for drawer only

## 14. Commercial Use Cases
- Recruiting platforms (Greenhouse alternatives)
- HR management systems
- Applicant tracking systems
- Hiring team dashboards
