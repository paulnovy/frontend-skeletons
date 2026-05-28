# Kairos Scheduling Flow — Design Book

## 1. Project Name
Kairos Scheduling Flow

## 2. Product Type
Scheduling and booking SaaS.

## 3. Intended Audience
Sales teams, consultants, freelancers, and teams that schedule meetings regularly.

## 4. User Problem
Scheduling is slow — too many emails, timezone confusion, and no-shows. Users need instant booking with timezone clarity and no-show prevention.

## 5. UX Concept
Make scheduling feel instant. Show timezone clarity, meeting buffers, and reschedule flow. One link replaces dozens of emails.

## 6. Layout Structure
- **Hero**: Split — left copy/CTAs, right interactive calendar widget with time slots
- **Features**: 3-column grid (timezone, buffers, reschedule, reminders, team pages, calendar sync)
- **Booking pages**: 2-column demo of 1-on-1 and group booking flows
- **No-show prevention**: Yellow card with prevention features
- **Integrations**: 6-column grid of connected tools
- **Team scheduling**: 4-column team cards with availability

## 7. Typography System
- **Headings**: Sora (600-800) — geometric, modern, confident
- **Body**: Inter (400-700) — clean, readable

## 8. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Snow | #F9FAFB | Page background |
| Ink | #0F172A | Primary text |
| Electric purple | #7C3AED | Primary accent, CTAs, selected states |
| Teal | #14B8A6 | Positive indicators, available slots |
| Sunny yellow | #FDE047 | No-show prevention, highlights |
| Cool gray | #CBD5E1 | Borders, inactive elements |

## 9. Component System
- **Calendar widget**: Month grid + time slot selector
- **Time slots**: Grid of selectable time buttons
- **Feature cards**: Icon + title + description
- **Booking page demos**: Step-by-step flow visualization
- **Integration cards**: Icon + name
- **Team cards**: Avatar + name + role + available slots

## 10. Interaction Rules
- Calendar day selection
- Time slot selection (toggle)
- Hover states on all interactive elements
- Focus-visible with purple outline
- Drawer navigation on mobile

## 11. Responsive Behavior
- **Desktop**: Full 2-column hero, 3-column features
- **Tablet (1024px)**: Single-column hero, stacked grids
- **Mobile (768px)**: Large time-slot buttons, compact date carousel, vertical flow

## 12. Accessibility Notes
- Semantic landmarks and ARIA labels
- Skip link to main content
- Calendar has proper ARIA labels
- prefers-reduced-motion support

## 13. Performance Notes
- Single HTML file, no external dependencies beyond Google Fonts
- CSS-only visual elements
- Minimal JS for drawer and time slot selection

## 14. Commercial Use Cases
- Scheduling SaaS (Calendly alternatives)
- Booking platform marketing pages
- Team scheduling tools
- Appointment management systems
