# Arcadia EdTech Campus — Design Book

## 1. Project Name
Arcadia EdTech Campus

## 2. Product Type
Online learning platform homepage.

## 3. Intended Audience
Career changers, upskillers, students seeking structured learning paths with mentorship.

## 4. User Problem
Online learning is overwhelming — too many courses, no clear path, no human guidance. Students need structured curricula with clear milestones and real mentors.

## 5. UX Concept
Make learning paths feel achievable. Add "start here" guidance and level labels. Show progress visually to keep students motivated.

## 6. Layout Structure
- **Hero**: Centered with search bar, stats, and badge
- **Learning Paths**: 3-column cards with level labels and "start here" guidance
- **Mentors**: 4-column grid with avatars and ratings
- **Progress Preview**: Dark navy split card showing current path progress
- **Course Marketplace**: 4-column filterable grid
- **Cohort Calendar**: List of upcoming class starts
- **Student Outcomes**: 4-column stats (completion, hiring, rating, salary)

## 7. Typography System
- **Headings**: Bricolage Grotesque (600-800) — friendly, approachable, modern
- **Body**: Inter (400-700) — clean, readable
- **Stats**: Roboto Mono (400-600) — completion rates, ratings, metrics

## 8. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Chalk | #FAF8F0 | Page background |
| Academy navy | #172554 | Primary accent, progress preview bg |
| Citrus | #FACC15 | Highlights, "start here", positive indicators |
| Sky | #38BDF8 | Beginner level, links |
| Raspberry | #E11D48 | Advanced level, alerts |
| Slate | #334155 | Primary text |

## 9. Component System
- **Path cards**: Icon + title + description + level badge + meta (courses, duration)
- **Mentor cards**: Avatar + name + role + rating
- **Progress preview**: Dark card with progress bar + module checklist
- **Marketplace cards**: Tag + title + meta (modules, hours, rating)
- **Calendar items**: Date block + cohort name + schedule info
- **Outcome cards**: Large mono number + label

## 10. Interaction Rules
- Search bar prominent in hero
- Level labels filter implicitly
- Hover states on all cards
- Focus-visible with navy outline
- Drawer navigation on mobile

## 11. Responsive Behavior
- **Desktop**: Full 4-column grids, 3-column paths
- **Tablet (1024px)**: 2-column grids
- **Mobile (768px)**: Single column, prominent search, stacked cards

## 12. Accessibility Notes
- Semantic landmarks and ARIA labels
- Skip link to main content
- prefers-reduced-motion support
- Level labels use color + text (not color alone)

## 13. Performance Notes
- Single HTML file, no external dependencies beyond Google Fonts
- CSS-only visual elements
- Minimal JS for drawer only

## 14. Commercial Use Cases
- Online course platforms (Coursera alternatives)
- Bootcamp marketing pages
- Corporate learning portals
- Mentorship platform homepages
