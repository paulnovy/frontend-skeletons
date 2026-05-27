# Flux Marketplace Design Book

Flux Marketplace is a premium digital goods marketplace skeleton for listings, seller profiles, reviews, category browsing, and cart preview flows.

## Design System

- Typography: Manrope for headings and Inter for interface text, loaded from the Google Fonts CDN.
- Palette: Cloud `#F6F8FC`, ink `#19212B`, indigo `#4F46E5`, cyan `#06B6D4`, lime `#A3E635`, and coral `#FB7185`.
- Shape: 8px cards, panels, buttons, thumbnails, and drawers.
- Motion: Subtle transform and drawer transitions with a `prefers-reduced-motion` branch.

## Structure

- Sticky top navigation with brand, links, search, cart action, and mobile menu trigger.
- Featured collection hero with gradient banner, item count action, stats, and layered product previews.
- Product grid with filter controls, CSS gradient thumbnails, seller avatars, rating stars, tags, and cart actions.
- Category sidebar on desktop and keyboard-friendly mobile drawer.
- Seller profile cards with sales metrics, ratings, specialties, and verified tags.
- Review cards with reviewer names, dates, ratings, review copy, and purchased product references.
- Cart drawer with selected items, quantities, subtotal, and checkout action.
- Footer credit: “Flux Marketplace — designed by Meridian Studio”.

## Accessibility Notes

- Semantic header, nav, main, aside, section, article, and footer landmarks are used.
- Drawer buttons expose `aria-controls`, `aria-expanded`, and `aria-hidden` state changes.
- Keyboard users can open, close, tab through, and escape from drawers.
- Focus-visible styling is explicit and high contrast.
- The product grid announces filter updates through `aria-live`.
