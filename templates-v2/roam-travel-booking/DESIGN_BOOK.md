# Roam Travel Booking - Design Book

## Project Name
Roam Travel Booking

## Product Type
Travel booking platform for destination discovery, flexible search, and transparent trip checkout.

## Intended Audience
Travel startups, booking marketplaces, hospitality teams, tour operators, and agencies designing premium trip discovery flows.

## User Problem
Travelers want inspiration and booking confidence in one place. They need flexible dates, map context, fit signals, total price clarity, and protection details before committing.

## UX Concept
Roam connects an immersive destination hero to a practical booking module. Search results combine map/list browsing, confidence scores, flexible date hints, total prices, curated trips, social proof, and insurance comparison.

## Layout Structure
Sticky navigation, immersive coastal hero, search module, flexible date cards, map/list hybrid results, curated trip cards, social proof band, travel insurance upsell, sticky mobile search summary, and footer.

## Typography System
Plus Jakarta Sans is used for interface clarity and booking controls. Source Serif 4 is used for destination storytelling, large headers, and editorial travel moments.

## Color System
Sand `#F5E6CC`, ocean `#0E7490`, sunset `#F97316`, palm `#15803D`, night `#1E293B`, and cloud `#F8FAFC`.

## Component System
Core components include drawer navigation, destination illustration, search module, flexible date cards, trip result cards, map pins, curated trip cards, testimonials, insurance card, and sticky mobile search summary.

## Interaction Rules
Search fields are visible above the fold. Drawer state updates `aria-expanded` and `aria-hidden`. Mobile keeps the search summary sticky and replaces persistent map with a bottom filter-style control.

## Responsive Behavior
Desktop uses immersive hero plus map/list hybrid. Tablet stacks hero and results while keeping map accessible. Mobile prioritizes search summary, list results, and a sticky filter entry point.

## Accessibility Notes
Semantic landmarks, skip link, labeled controls, visible focus states, plain-language price labels, descriptive buttons, accessible drawer state, and reduced-motion fallback are included.

## Performance Notes
The skeleton is standalone HTML with inline CSS, no heavy scripts, and CSS-generated destination visuals instead of external image dependencies.

## Commercial Use Cases
Travel search homepage, OTA booking prototype, boutique trip marketplace, airline package booking, insurance upsell flow, and destination campaign landing page.
