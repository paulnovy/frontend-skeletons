# Cutpaste Editorial Zine

## Category
Digital Zine / Editorial Collage

## Description
Cutpaste Editorial Zine is a premium standalone frontend skeleton for a tactile digital publication. It uses paper cutouts, torn edges, taped CSS photos, red marker corrections, blue pen annotations, and typewriter-style article copy while preserving a strong editorial hierarchy.

## How to View
Open `index.html` directly in a browser, or serve the folder with a local HTTP server:

```bash
cd "/home/marian/clawd/frontend-skeletons/templates-v2/cutpaste-editorial-zine"
python3 -m http.server 3005
```

Then visit:

```text
http://localhost:3005/
```

## Key Features
- Standalone `index.html` with inline CSS and JavaScript.
- Google Fonts CDN only: Special Elite and Archivo.
- Palette: kraft paper `#D4A574`, newsprint `#F5F5F0`, ink `#1A1A1A`, red marker `#DC2626`, and blue pen `#1D4ED8`.
- Semantic HTML5 layout for cover, features, photo desk, departments, manifesto, letters, and footer.
- CSS Grid/Flexbox composition with overlapping desktop cutouts and mobile-safe stacked cutouts.
- Tactile paper details: torn edges, clipped paper shapes, tape strips, hard shadows, stamps, and desk-like texture.
- CSS-generated taped photos so no image files are required.
- Keyboard navigation for feature cards with Alt + ArrowLeft and Alt + ArrowRight.
- Hamburger menu, Escape close behavior, active nav styling, visible focus states, and reduced-motion support.
- Prototype reader signup form with local confirmation state.
- Footer credit: "Built with Frontend Skeletons".

## Interaction Notes
- Use the sticky navigation to jump between issue sections.
- On mobile, open the hamburger menu and tap a section link.
- Click or focus a feature cutout to bring it visually forward.
- Use Alt + ArrowLeft or Alt + ArrowRight to move through feature cutouts.
- Use "Shuffle cutouts" on the cover to create a temporary rearranged desk feel.
- Escape closes the mobile menu.
- The signup form is static and does not submit data.

## UX Principle
The publication should feel physically assembled, but editorial judgment still leads. The layout uses collage language to make the page memorable while keeping titles, article bodies, navigation, and calls to action readable.

## Content Notes
- All editorial copy is realistic sample content for a fictional independent design and culture zine.
- CSS photo panels are abstract field-study images and can be replaced with real photography.
- The table of contents, departments, correction note, manifesto, and reader form are intended as reusable editorial modules.

## Screenshot Reference
Recommended screenshot: desktop viewport at `1440x1200`, showing the cover spread, taped cover image, editor note, and issue index. A second mobile screenshot at `390x1100` should show stacked cutouts with reduced rotation and readable article surfaces.
