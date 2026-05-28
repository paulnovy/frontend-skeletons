# Nova Health Patient Portal — Design Book

## 1. Project Name
Nova Health Patient Portal

## 2. Product Type
Healthtech patient portal for managing care.

## 3. Intended Audience
Patients managing their healthcare — appointments, prescriptions, lab results, and communication with providers.

## 4. User Problem
Patient portals are often confusing and anxiety-inducing. Patients need a calm, clear interface that helps them manage care without feeling overwhelmed or alarmed.

## 5. UX Concept
Reduce anxiety. Use human labels like "Needs your attention" instead of alarming language. Prioritize what the patient needs to do next, not what's wrong.

## 6. Layout Structure
- **Top care-status banner**: Contextual reminder about upcoming care
- **Left/Main**: Appointments with confirm actions, lab results with clear status
- **Right sidebar**: Prescriptions with refill status, secure messages with unread indicators, care plan with checkable tasks

## 7. Typography System
- **All text**: Atkinson Hyperlegible (400, 700) — designed for maximum legibility, especially for visually impaired users
- **Editorial explanations**: Source Serif 4 (400-700) — warm, reassuring serif for care descriptions

## 8. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Clinical white | #FAFCFF | Page background |
| Deep teal | #0A5C5A | Primary accent, positive states, CTAs |
| Sky | #BDEBFF | Highlights, secondary backgrounds |
| Lavender | #E8E2FF | Prescription icons, info badges |
| Soft red | #FFB4A8 | Attention needed, refill alerts |
| Navy | #182333 | Primary text |

## 9. Component System
- **Appointment cards**: Date block + info + action button (44px min tap target)
- **Prescription list**: Icon + name/dose + status badge (active/refill)
- **Lab results**: Icon + test name/date + result status (normal/review)
- **Messages**: Avatar + from/preview + unread dot + timestamp
- **Care plan**: Checklist with done/pending states
- **Status badges**: attention (red), ok (teal), info (lavender)

## 10. Interaction Rules
- Large tap areas (44px minimum) for all actions
- Confirm/join actions on appointments
- Drawer navigation on mobile
- Escape to close drawer
- Focus-visible with teal outline

## 11. Responsive Behavior
- **Desktop**: 2-column layout (main + sidebar)
- **Tablet (1024px)**: Single column, sidebar below main
- **Mobile (768px)**: Full-width cards, large tap targets, compact banner

## 12. Accessibility Notes
- Atkinson Hyperlegible font designed for low vision
- Semantic landmarks and ARIA labels
- Skip link to main content
- prefers-reduced-motion support
- Color is not the only indicator (text labels on all states)
- Care banner uses "needs your attention" not "warning" or "alert"

## 13. Performance Notes
- Single HTML file, no external dependencies beyond Google Fonts
- CSS-only visual elements
- Minimal JS for drawer only

## 14. Commercial Use Cases
- Hospital patient portals
- Telemedicine platforms
- Health insurance member portals
- Clinic management systems
- Wellness app dashboards
