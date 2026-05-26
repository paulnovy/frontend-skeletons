# Neurographic Knowledge System

## Category
Knowledge base / relationship map / learning path interface

## Description
Neurographic Knowledge System is a standalone premium frontend skeleton for complex knowledge bases. Articles appear as connected neural nodes, concept pathways show relationships, and search highlights a route through the knowledge system instead of returning only a flat list.

## Files
- `index.html`: Standalone HTML with inline CSS and JavaScript.
- `DESIGN_BOOK.md`: Design system, UX principles, layout, accessibility, and responsive behavior.
- `README.md`: Overview and usage notes.

## How to View
Open `index.html` directly in a browser, or serve the folder locally:

```bash
cd /home/marian/clawd/frontend-skeletons/templates-v2/neurographic-knowledge-system
python3 -m http.server 3026
```

Then visit:

```text
http://localhost:3026/
```

## Key Features
- Neural pathway article map with semantic button nodes.
- Route-based search with `Ctrl K`, arrow navigation, Enter selection, and Escape close.
- Search results update the highlighted learning route, active article reader, and linear article list.
- Persistent linear article list for scanning and accessibility.
- Mobile learning path cards with expandable relationship maps.
- Google Fonts CDN: Atkinson Hyperlegible for article text and IBM Plex Mono for node IDs.
- Required palette: brain dark `#0A0A0F`, neuron gold `#FBBF24`, synapse blue `#60A5FA`, glial purple `#A855F7`, and white `#F8FAFC`.
- Hamburger menu, visible focus states, semantic HTML5, CSS Grid/Flexbox, custom properties, and reduced-motion support.
- Footer credit: "Built with Frontend Skeletons".

## Recommended Screenshot
Use a desktop viewport around `1440x1100` to capture the hero, neural map, active route panel, reader card, and article list. Use a mobile viewport around `390x844` to verify the learning path cards and hamburger navigation.
