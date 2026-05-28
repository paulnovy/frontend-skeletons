# Northstar Project Board — Design Book

## 1. Project Name
Northstar Project Board

## 2. Product Type
Project management app with Kanban and timeline views.

## 3. Intended Audience
Project managers, engineering leads, product teams managing sprints and dependencies.

## 4. User Problem
Teams lose alignment when work is scattered. They need to see dependencies visually, highlight blocked work, and track team workload in one view.

## 5. UX Concept
Focus on alignment. Show dependencies visually and highlight blocked work. Make it clear what's on track, at risk, or blocked.

## 6. Layout Structure
- **Project health bar**: Full-width top bar with project name + health metrics (on track/at risk/blocked)
- **Spaces nav**: Left sidebar with project spaces and views
- **Sprint board**: Center Kanban with 4 columns (To Do → In Progress → In Review → Done)
- **Team workload**: Right rail showing assignee workload bars

## 7. Typography System
- **Headings**: Plus Jakarta Sans (600-800) — modern, confident
- **Body**: Inter (400-700) — clean, readable
- **Deadlines/IDs**: Roboto Mono (400-600) — stable alignment for dates and task IDs

## 8. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| White | #FFFFFF | Cards, backgrounds |
| Graphite | #111827 | Primary text |
| Indigo | #4F46E5 | Primary accent, active states |
| Coral | #FB7185 | Blocked tasks, overdue, alerts |
| Lime | #A3E635 | On track, healthy workload |
| Gray | #E5E7EB | Borders, dividers |

## 9. Component System
- **Health metrics**: Color-coded dots with counts
- **Kanban columns**: Header + scrollable task cards
- **Task cards**: ID + title + assignee avatar + deadline + dependency warning
- **Workload items**: Avatar + name + task count + progress bar (normal/heavy/overloaded)
- **View toggles**: Board/Timeline switcher

## 10. Interaction Rules
- Blocked tasks have coral left border + dependency warning
- Overdue deadlines shown in coral
- Workload bars color-coded by load level
- Focus-visible with indigo outline
- Drawer navigation on mobile

## 11. Responsive Behavior
- **Desktop**: Full 3-column layout
- **Tablet (1024px)**: Tabs for Board/Timeline/People, sidebar hidden
- **Mobile (768px)**: Vertical task lists with filters

## 12. Accessibility Notes
- Semantic landmarks and ARIA labels
- Skip link to board content
- prefers-reduced-motion support
- Blocked status uses color + text + icon

## 13. Performance Notes
- Single HTML file, no external dependencies beyond Google Fonts
- CSS-only visual elements
- Minimal JS for drawer only

## 14. Commercial Use Cases
- Project management tools (Linear/Jira alternatives)
- Sprint planning interfaces
- Team collaboration dashboards
- Engineering management tools
