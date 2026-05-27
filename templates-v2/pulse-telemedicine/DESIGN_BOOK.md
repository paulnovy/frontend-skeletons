# Pulse Telemedicine Design Book

## Direction
Pulse Telemedicine is a premium healthtech workspace for virtual care teams. The interface balances operational density with a calm clinical tone so clinicians can move from schedule review to patient intake, video consultation, and prescribing without losing context.

## Typography
- Headings use Manrope for a confident editorial rhythm.
- UI text uses Inter for high legibility in tables, forms, badges, and controls.
- Both families are loaded from the Google Fonts CDN in `index.html`.

## Color System
- Cloud `#F6F8FC` establishes the page background and quiet clinical surfaces.
- Ink `#19212B` anchors primary text and dark command panels.
- Indigo `#4F46E5` marks primary actions, video visits, and important navigation states.
- Cyan `#06B6D4` marks live connection states, phone consults, and secondary actions.
- Lime `#A3E635` signals healthy, active, or low-risk states.
- Coral `#FB7185` signals urgent queue priority, expired medication status, and stop actions.

## Components
- Sticky top navigation with search, notification badge, and mobile drawer.
- KPI strip for consultations today, queue pressure, wait time, and prescriptions issued.
- Calendar scheduler with visit type badges.
- Intake form with demographics, symptoms, vitals, and history checklist.
- Video consultation panel with active patient details and visit actions.
- Prescription table with status badges and refill controls.
- Patient queue ordered by priority and wait time.

## Accessibility
- Semantic landmarks define header, main, sections, aside, forms, tables, and footer.
- A skip link helps keyboard users move directly to the clinical workspace.
- The mobile drawer supports keyboard focus, Escape close, and focus return.
- Focus-visible states use cyan outlines for clear navigation.
- Reduced motion preferences shorten transitions.
