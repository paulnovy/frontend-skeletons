# Nova Health Patient Portal

## Category
Healthtech patient portal

## Description
Nova Health Patient Portal is a premium standalone frontend skeleton for a patient-first care portal. It brings care status, appointments, medications, lab results, secure messages, and care plans into one calm dashboard with human labels and clear next steps.

## Files
- `index.html`: Standalone semantic HTML file with inline CSS and JavaScript.
- `DESIGN_BOOK.md`: Design system, layout rationale, accessibility notes, and implementation guidance.
- `README.md`: Project overview and usage instructions.

## How to View
Open `index.html` directly in a modern browser, or serve this folder locally:

```bash
cd /home/marian/clawd/frontend-skeletons/templates-v2/nova-health-patient-portal
python3 -m http.server 3012
```

Then visit:

```text
http://localhost:3012/
```

## Key Features
- Patient-first app shell with sticky top navigation and care-status banner.
- Required Google Fonts CDN: Atkinson Hyperlegible for all interface text and Source Serif 4 for reassuring editorial explanations.
- Required palette: clinical white `#FAFCFF`, deep teal `#0A5C5A`, sky `#BDEBFF`, lavender `#E8E2FF`, soft red `#FFB4A8`, and navy `#182333`.
- Upcoming appointments with mobile-prioritized actions for joining, preparing, and rescheduling.
- Prescription cards with realistic medication names, doses, refill status, and dose-change language.
- Lab result cards with values, units, trend explanations, and keyboard-accessible tabs.
- Secure messages with previews, sender names, timestamps, and reply state.
- Care plan cards with small practical steps instead of alarming warnings.
- Semantic HTML5, CSS Grid/Flexbox, custom properties, visible focus states, reduced-motion support, hamburger menu, and keyboard navigation.
- Footer credit: "Built with Frontend Skeletons".

## Recommended Screenshot
Use a desktop viewport around `1440x1100` to capture the care banner, priorities, appointment card, labs, and medication rail. Use a mobile viewport around `390x844` to verify appointment, medication, and message actions appear before deeper detail and remain large enough to tap comfortably.
