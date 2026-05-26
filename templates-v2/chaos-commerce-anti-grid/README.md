# Chaos Commerce Anti Grid

## Category
Anti-grid Experimental E-commerce

## Description
Chaos Commerce Anti Grid is a premium standalone frontend skeleton for an e-commerce experience where product discovery deliberately breaks the grid while checkout remains stable, familiar, and clear.

## How to View
Open `index.html` directly in a browser, or serve the folder with a local HTTP server:

```bash
cd "/home/marian/clawd/frontend-skeletons/templates-v2/chaos-commerce-anti-grid"
python3 -m http.server 3005
```

Then visit:

```text
http://localhost:3005/
```

## Key Features
- Standalone `index.html` with inline CSS and JavaScript.
- Google Fonts CDN only: Unbounded, Inter, and IBM Plex Mono.
- Palette: white `#FFFFFF`, black `#000000`, hazard yellow `#FDE047`, glitch magenta `#FF00AA`, and raw blue `#0038FF`.
- Chaotic desktop product wall with irregular card placement, rotation, overlap, and scale.
- Mobile-safe staggered product cards that reduce layout chaos.
- Conventional slide-out cart with line items, remove controls, and totals.
- Clean checkout form with explicit labels, autocomplete fields, delivery choices, and order summary.
- Realistic product names, SKUs, prices, descriptions, shipping details, and cart behavior.
- Semantic HTML5, CSS Grid/Flexbox, custom properties, focus states, keyboard navigation, and reduced-motion support.
- Footer credit: "Built with Frontend Skeletons".

## Interaction Notes
- Use product filters to show all items, wear, carry, accessories, or low-stock items.
- Click or focus a product card to mark it active.
- Use Alt + ArrowLeft or Alt + ArrowRight to move through visible product cards.
- Add buttons update the cart count, cart lines, and cart total.
- Escape closes the mobile menu or cart panel.
- Delivery option buttons update the active shipping choice.
- Checkout submit displays a prototype confirmation without sending data.

## UX Principle
Browsing is allowed to be disruptive. Purchasing is not. The skeleton protects price visibility, product identity, cart state, order totals, form labels, and final action clarity.

## Content Notes
- All content is realistic sample commerce content for a fictional experimental streetwear store.
- CSS product shapes are intentionally abstract so the skeleton has no image dependency.

## Screenshot Reference
Recommended screenshot: desktop viewport at `1440x1200`, showing the hero, chaotic product wall, cart toggle, and the start of the manifesto strip.
