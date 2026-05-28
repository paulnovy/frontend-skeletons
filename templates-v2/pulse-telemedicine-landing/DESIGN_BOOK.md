# Pulse Telemedicine Landing — Design Book

## 1. Project Name
Pulse Telemedicine Landing

## 2. Product Type
Telemedicine service homepage with embedded booking.

## 3. Intended Audience
Patients seeking convenient, affordable healthcare — urgent care, mental health, primary care, dermatology.

## 4. User Problem
Patients wait days for appointments and spend hours in waiting rooms. They need fast access to board-certified doctors with transparent pricing and insurance verification.

## 5. UX Concept
The first CTA is "Book a visit," second CTA is "Check coverage." Use reassuring microcopy. The booking widget is embedded above the fold for immediate action.

## 6. Layout Structure
- **Hero**: Split layout — left copy/CTAs/trust badges, right booking widget (symptoms → time → insurance → find doctors)
- **Trust strip**: Insurance partner logos
- **Services**: 4-column grid with icon cards + split cards (patients vs employers)
- **Doctors**: 3-column doctor cards with avatar, name, specialty, rating
- **Testimonials**: 3-column quote cards
- **Pricing**: 3-column plans with emergency disclaimer

## 7. Typography System
- **Headings**: Plus Jakarta Sans (600-800) — modern, trustworthy, healthcare feel
- **Body**: DM Sans (400-700) — clean, readable, friendly

## 8. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Warm white | #FFFDF8 | Page background |
| Medical blue | #2563EB | Primary accent, CTAs, links |
| Aqua | #41D6C3 | Doctor avatars, secondary accent |
| Leaf | #7BC67E | Positive badges, availability |
| Graphite | #1E293B | Primary text |
| Blush | #FFE1E1 | Emergency disclaimer, alerts |

## 9. Component System
- **Booking widget**: Multi-step form (symptoms, time, insurance) with primary CTA
- **Service cards**: Icon + name + description
- **Doctor cards**: Avatar + name + specialty + rating
- **Testimonial cards**: Quote + author + metadata
- **Pricing cards**: Plan name + price + features + CTA
- **Trust badges**: Icon + text for HIPAA, board certified, wait time
- **Emergency disclaimer**: Blush background with clear warning

## 10. Interaction Rules
- Booking widget is interactive above the fold
- Hover states on all cards
- Focus-visible with blue outline
- Drawer navigation on mobile
- Escape to close drawer

## 11. Responsive Behavior
- **Desktop**: Full 2-column hero, 4-column services, 3-column doctors/pricing
- **Tablet (1024px)**: Single-column hero, 2-column services, stacked grids
- **Mobile (768px)**: Compact hero, single-column everything, vertical booking flow

## 12. Accessibility Notes
- Semantic landmarks and ARIA labels
- Skip link to main content
- Booking form has proper labels
- Emergency disclaimer is prominently styled
- prefers-reduced-motion support
- 44px minimum tap targets on mobile

## 13. Performance Notes
- Single HTML file, no external dependencies beyond Google Fonts
- CSS-only visual elements (SVG pulse icon inline)
- Minimal JS for drawer only

## 14. Commercial Use Cases
- Telemedicine startup landing pages
- Healthcare provider marketing sites
- Virtual care platform homepages
- Employer health benefit portals
