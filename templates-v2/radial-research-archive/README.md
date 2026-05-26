# Radial Research Archive

## Category
Research archive / insight library / relationship browser

## Description
Radial Research Archive is a standalone premium frontend skeleton for teams that browse knowledge by relationship rather than chronology. Topics orbit around a central search object, and selecting a topic expands related reports as curved cards around the active research thread.

## Files
- `index.html`: Standalone HTML with inline CSS and JavaScript.
- `DESIGN_BOOK.md`: Visual system, interaction principles, accessibility notes, and responsive behavior.
- `README.md`: Overview and usage notes.

## How to View
Open `index.html` directly in a browser, or serve the folder locally:

```bash
cd /home/marian/clawd/frontend-skeletons/templates-v2/radial-research-archive
python3 -m http.server 3026
```

Then visit:

```text
http://localhost:3026/
```

## Key Features
- Radial topic navigation around a central semantic search object.
- Related reports expand as curved insight cards for the active topic.
- Realistic research archive content for climate adaptation, AI governance, public health, and urban systems.
- Desktop orbit with SVG relationship rings and semantic topic buttons.
- Mobile stacked constellations with horizontal swiping.
- Keyboard navigation: arrow keys move between topics, Enter activates, Escape closes menus/search, and Ctrl K opens search.
- Google Fonts CDN: Space Grotesk for topic labels and Source Serif 4 for summaries.
- Required palette: deep navy `#0B1120`, star blue `#60A5FA`, soft violet `#C4B5FD`, pale yellow `#FEF3C7`, and white `#F8FAFC`.
- Hamburger menu, focus states, semantic HTML5, CSS Grid/Flexbox, custom properties, reduced-motion support, and footer credit.

## Recommended Screenshot
Use a desktop viewport around `1440x1100` to capture the orbit, central search object, curved report cards, and context rail. Use a mobile viewport around `390x844` to verify the stacked constellations and horizontal swiping behavior.
