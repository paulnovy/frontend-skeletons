# Meridian CRM Pipeline — Design Book

## 1. Project Name
Meridian CRM Pipeline

## 2. Product Type
Sales CRM dashboard with Kanban pipeline.

## 3. Intended Audience
Sales teams, account executives, sales managers managing deal pipelines.

## 4. User Problem
Sales reps need to move fast — see deal health, log activities, and follow up without friction. Traditional CRMs are slow and require too many clicks.

## 5. UX Concept
Designed for sales speed. Drag cards, quick notes, next action prompts, and low-friction follow-ups. AI deal health overlay shows which deals are hot, warm, or cold.

## 6. Layout Structure
- **Revenue summary**: Sticky top bar with pipeline value, weighted forecast, win rate, avg deal size
- **Kanban pipeline**: 4-column board (Lead → Qualified → Proposal → Closed Won) with deal cards
- **Contact drawer**: Right-side drawer with contact details, deal info, and quick actions
- **Activity composer**: Fixed bottom bar for logging activities

## 7. Typography System
- **UI**: Manrope (400-800) — clean, modern, fast feel
- **Revenue headings**: Space Grotesk (600-700) — bold numbers, confident metrics

## 8. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Soft gray | #F4F6F8 | Page background |
| Ink | #111827 | Primary text |
| Royal blue | #315CFF | Primary accent, CTAs, deal values |
| Green | #2FBF71 | Hot deals, positive metrics |
| Amber | #F59E0B | Warm deals, warnings |
| Plum | #7C3AED | User avatar, secondary accent |

## 9. Component System
- **Revenue metrics**: Label + value + change indicator
- **Stage columns**: Header (name + count + value) + scrollable deal cards
- **Deal cards**: Company + health dot + value + contact + next action
- **Contact drawer**: Avatar + name + actions + details + deal info
- **Activity composer**: Input + log button

## 10. Interaction Rules
- Deal cards are clickable (open contact drawer)
- Activity composer for quick logging
- Hover states on cards
- Focus-visible with blue outline
- Drawer navigation on mobile

## 11. Responsive Behavior
- **Desktop**: Full Kanban pipeline, contact drawer overlay
- **Tablet (1024px)**: Vertical stacked stages
- **Mobile (768px)**: List pipeline with stage filters, one-tap contact actions

## 12. Accessibility Notes
- Semantic landmarks and ARIA labels
- Skip link to pipeline
- prefers-reduced-motion support
- Keyboard navigation for deal cards

## 13. Performance Notes
- Single HTML file, no external dependencies beyond Google Fonts
- CSS-only visual elements
- Minimal JS for drawers and card clicks

## 14. Commercial Use Cases
- Sales CRM platforms (HubSpot alternatives)
- Deal pipeline management tools
- Sales team dashboards
- Account management interfaces
