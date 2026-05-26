# Duality Brand Lab

## Category
Brand Strategy Studio / Split Personality Interface

## Description
Duality Brand Lab is a standalone premium frontend skeleton for a brand strategy studio. The first screen is vertically split between a rational brand system and an emotional brand world. Desktop users drag the divider to reveal more of either side; mobile users toggle between **System** and **Story**.

## Files
- `index.html`: Standalone HTML with inline CSS and JavaScript.
- `DESIGN_BOOK.md`: Design system, interaction rules, accessibility notes, and content guidance.
- `README.md`: Project overview and usage notes.

## How to View
Open `index.html` directly in a browser, or serve the folder locally:

```bash
cd /home/marian/clawd/frontend-skeletons/templates-v2/duality-brand-lab
python3 -m http.server 3025
```

Then visit:

```text
http://localhost:3025/
```

## Key Features
- Google Fonts CDN: IBM Plex Sans, IBM Plex Mono, Cormorant Garamond, and Syne.
- Rational palette: white `#FFFFFF`, black `#111111`, and blue `#2563EB`.
- Emotional palette: wine `#6B1026`, blush `#FADADD`, gold `#D4AF37`, and deep plum `#2D102F`.
- Draggable desktop divider with keyboard support.
- Desktop split presets for Story first, Balanced, and System first.
- Mobile System / Story toggle.
- Semantic HTML5, CSS Grid/Flexbox, custom properties, focus states, reduced-motion support, hamburger menu, and realistic brand strategy content.
- Footer credit: "Built with Frontend Skeletons".

## Recommended Screenshot
Use a desktop viewport around `1440x1000` to capture the split interface with the divider near center. Use a mobile viewport around `390x844` to verify that the System / Story toggle replaces dragging cleanly.
