# Gravityless Spatial Web

## Category
Spatial Website / Non-Linear Product Narrative

## Description
Gravityless Spatial Web is a standalone premium frontend skeleton for a website with no conventional page hierarchy. Desktop visitors navigate a gravityless 3D value field with five labeled clouds: product, proof, pricing, team, and contact.

The design keeps the experimental interaction usable with keyboard navigation, a command menu fallback, and a grounded list view. On mobile, free 3D navigation is disabled and the same content becomes guided spatial story cards.

## Files
- `index.html`: Standalone HTML file with inline CSS and JavaScript.
- `DESIGN_BOOK.md`: Design system, UX principles, tokens, component guidance, accessibility notes, and responsive behavior.
- `README.md`: Project overview and usage notes.

## How to View
Open `index.html` directly in a browser, or serve this folder locally:

```bash
cd /home/marian/clawd/frontend-skeletons/templates-v2/gravityless-spatial-web
python3 -m http.server 3024
```

Then visit:

```text
http://localhost:3024/
```

## Key Features
- Google Fonts CDN: Space Grotesk for spatial labels and Inter for readable panels.
- Required palette: cosmic black `#020617`, nebula violet `#7C3AED`, plasma cyan `#22D3EE`, star white `#F8FAFC`, and orbit gray `#64748B`.
- Floating value clouds for product, proof, pricing, team, and contact.
- Command menu fallback with cloud filtering and `Ctrl/Cmd+K` shortcut.
- Fallback list view that mirrors every spatial cloud.
- Keyboard navigation with arrow keys and number keys `1` through `5`.
- Mobile guided story cards instead of free 3D movement.
- Semantic HTML5, CSS Grid/Flexbox, CSS custom properties, visible focus states, reduced-motion support, and hamburger navigation.
- Footer credit: "Built with Frontend Skeletons".

## Recommended Screenshot
Use a desktop viewport around `1440x1100` to capture the gravityless field, selected cloud panel, and fallback controls. Use a mobile viewport around `390x844` to confirm the guided story cards, hamburger menu, and command menu remain usable without 3D navigation.
