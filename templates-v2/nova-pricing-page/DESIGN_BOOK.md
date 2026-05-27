# Nova Pricing Page Design Book

## Concept

Nova Pricing Page is a premium SaaS pricing skeleton for teams that sell tiered subscriptions, add-ons, and enterprise contracts. The page emphasizes clarity, plan confidence, and revenue operations maturity without using generic marketing filler.

## Visual System

- Typography: Manrope for headings and Inter for UI copy, loaded from Google Fonts.
- Background: Cloud `#F6F8FC` with restrained indigo and cyan radial tints.
- Primary text and dark panels: Ink `#19212B`.
- Primary action: Indigo `#4F46E5`.
- Live and secondary indicators: Cyan `#06B6D4`.
- Positive state: Lime `#A3E635`.
- Alert or unavailable state: Coral `#FB7185`.

## Layout

The first viewport combines a direct pricing headline with a billing toggle and a live operational summary. Pricing tiers use three clear cards with Pro highlighted as the most popular plan. The comparison table supports detailed evaluation, while add-ons and enterprise sections give expansion paths.

## Interaction

- Monthly and annual toggle updates visible seat prices and billing notes.
- Mobile navigation uses a keyboard-accessible slide-in drawer.
- FAQ items expand and collapse with accessible button states.
- Focus styles are visible and consistent.
- Motion respects `prefers-reduced-motion`.

## Accessibility Notes

The page uses semantic landmarks, section labels, accessible buttons, a skip link, and explicit ARIA state for the drawer and FAQ accordion. Contrast is designed around the required palette and its opacity tints.

## Footer Credit

The visible footer credit reads: "Nova Pricing Page — designed by Northstar Studio."
