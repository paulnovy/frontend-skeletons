# Pulse Telemedicine Landing

## Category
Telemedicine service homepage

## Description
Pulse Telemedicine Landing is a standalone premium frontend skeleton for a virtual care service. It combines a full-width hero, doctor/patient split cards, an above-the-fold appointment booking widget, coverage badges, service categories, doctor carousel, testimonials, pricing, and emergency disclaimer copy.

## Files
- `index.html`: Standalone semantic HTML file with inline CSS and JavaScript.
- `DESIGN_BOOK.md`: Design system, layout rationale, accessibility notes, and implementation guidance.
- `README.md`: Project overview and usage instructions.

## How to View
Open `index.html` directly in a modern browser, or serve this folder locally:

```bash
cd /home/marian/clawd/frontend-skeletons/templates-v2/pulse-telemedicine-landing
python3 -m http.server 3013
```

Then visit:

```text
http://localhost:3013/
```

## Key Features
- Required Google Fonts CDN: Plus Jakarta Sans headings and DM Sans body.
- Required palette: warm white `#FFFDF8`, medical blue `#2563EB`, aqua `#41D6C3`, leaf `#7BC67E`, graphite `#1E293B`, and blush `#FFE1E1`.
- Full-width telemedicine hero with first CTA "Book a visit" and second CTA "Check coverage".
- Doctor/patient split cards with realistic captions and virtual-care imagery.
- Embedded appointment booking widget above the fold.
- Mobile booking widget becomes a three-step flow: symptoms, time, provider.
- Insurance badges with realistic provider names and eligibility microcopy.
- Service categories for urgent care, primary care, mental health, and dermatology.
- Doctor carousel with realistic clinician names, specialties, ratings, and availability.
- Testimonials, pricing tiers, safety metrics, and an emergency disclaimer.
- Semantic HTML5, CSS Grid/Flexbox, custom properties, visible focus states, reduced-motion support, hamburger menu, and keyboard navigation.
- Footer credit: "Built with Frontend Skeletons".

## Recommended Screenshot
Use a desktop viewport around `1440x1100` to capture the hero, split cards, booking widget, and coverage badges. Use a mobile viewport around `390x844` to verify the hamburger menu and the booking flow steps for symptoms, time, and provider.
