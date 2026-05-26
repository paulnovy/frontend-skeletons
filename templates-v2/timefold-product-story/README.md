# Timefold Product Story

## Category
Product marketing / scroll-as-time storytelling / roadmap narrative

## Description
Timefold Product Story is a standalone premium frontend skeleton for product teams that want to explain where a product came from, why it matters now, and where it is going next. The page uses a folding timeline, era cards, and a persistent jump-to-present action to keep past, present, and future connected.

## Files
- `index.html`: Standalone HTML with inline CSS and JavaScript.
- `DESIGN_BOOK.md`: Visual system, interaction model, accessibility notes, and adaptation guidance.
- `README.md`: Overview and usage notes.

## How to View
Open `index.html` directly in a browser, or serve the folder locally:

```bash
cd /home/marian/clawd/frontend-skeletons/templates-v2/timefold-product-story
python3 -m http.server 3030
```

Then visit:

```text
http://localhost:3030/
```

## Key Features
- Scroll-as-time product story with origin, version, present, next, and future eras.
- Horizontal desktop timeline that folds inward through the hero composition.
- Clickable timeline nodes for direct navigation.
- Always-available jump-to-present controls.
- Mobile vertical timeline behavior with swipeable era cards and a clear era indicator.
- Keyboard navigation with `Alt + Arrow` movement and `Alt + Home` for present.
- Hamburger menu, semantic HTML5, CSS Grid/Flexbox, CSS custom properties, focus states, and reduced-motion support.
- Google Fonts CDN with Inter for product text and Space Grotesk for timeline labels.
- Required palette: Night `#18181B`, future blue `#3B82F6`, present white `#FFFFFF`, past amber `#D97706`, and subtle gray `#E4E4E7`.
- Footer credit: "Built with Frontend Skeletons".

## Recommended Screenshot
Use a desktop viewport around `1440x1100` to capture the folded hero panels and sticky timeline rail. Use a mobile viewport around `390x844` to verify the sticky era indicator, swipeable era cards, and Earlier/Later controls.
