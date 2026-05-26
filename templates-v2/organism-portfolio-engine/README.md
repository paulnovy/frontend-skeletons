# Organism Portfolio Engine

## Category
Generative portfolio / living project network / case study system

## Description
Organism Portfolio Engine is a standalone premium frontend skeleton for creative technologists, design engineers, studios, and researchers whose work benefits from a portfolio that feels alive. Projects appear as cells in a living network, hover states create subtle organic drift, and case studies open as expanding membranes without losing access to a fixed project index.

## Files
- `index.html`: Standalone HTML with inline CSS and JavaScript.
- `DESIGN_BOOK.md`: Design system, UX principles, motion rules, accessibility, and responsive behavior.
- `README.md`: Overview and usage notes.

## How to View
Open `index.html` directly in a browser, or serve the folder locally:

```bash
cd /home/marian/clawd/frontend-skeletons/templates-v2/organism-portfolio-engine
python3 -m http.server 3034
```

Then visit:

```text
http://localhost:3034/
```

## Key Features
- Generative organism map with SVG vessels, semantic project cells, and fixed project index.
- Hover and focus states create subtle organic motion without making the interface chaotic.
- Case studies open like membranes expanding from the selected project.
- Keyboard navigation with arrow keys, Enter or Space to open, Escape to close.
- Mobile mode turns the organism into an animated list with a persistent index and clear reduced-motion control.
- Google Fonts CDN: Recursive variable font for interface and organism labels, Source Serif 4 for case-study text.
- Required palette: bio black `#050505`, membrane green `#39FF88`, enzyme blue `#22D3EE`, cell pink `#FF4DA6`, and bone `#F5F5DC`.
- Semantic HTML5, CSS Grid/Flexbox, custom properties, focus states, hamburger menu, and reduced-motion support.
- Footer credit: "Built with Frontend Skeletons".

## Recommended Screenshot
Use a desktop viewport around `1440x1100` to capture the organism map, fixed index, membrane case-study panel, and research signals. Use a mobile viewport around `390x844` to verify the animated project list, reduced-motion toggle, and hamburger navigation.
