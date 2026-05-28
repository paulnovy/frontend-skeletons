# Tempo Productivity Suite — Design Book

## 1. Project Name
Tempo Productivity Suite

## 2. Product Type
Productivity app landing page with app preview.

## 3. Intended Audience
Individuals and teams seeking calmer, more focused productivity — freelancers, remote workers, small teams.

## 4. User Problem
Productivity tools make people feel busier, not calmer. Users need a system that organizes tasks, habits, and focus time without adding noise.

## 5. UX Concept
Present productivity as calmer, not busier. Use "less noise, more momentum" structure. Show the app in action through timeline preview, habit streaks, and focus mode.

## 6. Layout Structure
- **Hero**: Split — left copy/CTAs, right task timeline preview + habit streak card
- **Features**: 3-column grid with icons and descriptions
- **Focus Mode**: Dark split card with timer and task list
- **Integrations**: 6-column grid of connected tools
- **Pricing**: 3-column plan cards

## 7. Typography System
- **Headings**: Fraunces (600-800) — warm, editorial, inviting
- **Body**: DM Sans (400-700) — clean, friendly, readable

## 8. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Oat | #F8F1E7 | Page background |
| Espresso | #2A1E17 | Primary text, dark sections, CTAs |
| Cobalt | #2563EB | Links, accent |
| Apricot | #FDBA74 | Highlights, streaks, warm accents |
| Mint | #A7F3D0 | Done states, positive indicators |
| Muted clay | #C08457 | Secondary accent, streak value |

## 9. Component System
- **Timeline list**: Color-coded dots (done/current/upcoming) + task + time
- **Streak card**: Apricot background with day dots
- **Feature cards**: Icon + title + description
- **Focus mode timer**: Large time display + task checklist
- **Integration cards**: Icon + name
- **Pricing cards**: Plan name + price + features + CTA

## 10. Interaction Rules
- Hover states on all cards
- Focus-visible with cobalt outline
- Drawer navigation on mobile
- Escape to close drawer

## 11. Responsive Behavior
- **Desktop**: Full 2-column hero, 3-column features/pricing
- **Tablet (1024px)**: Single-column hero, stacked grids
- **Mobile (768px)**: Compact hero with sticky "Start planning" CTA, vertical cards

## 12. Accessibility Notes
- Semantic landmarks and ARIA labels
- Skip link to main content
- prefers-reduced-motion support
- Timeline uses color + text labels

## 13. Performance Notes
- Single HTML file, no external dependencies beyond Google Fonts
- CSS-only visual elements
- Minimal JS for drawer only

## 14. Commercial Use Cases
- Productivity app landing pages
- Task management tool marketing
- Habit tracking app interfaces
- Team coordination platforms
