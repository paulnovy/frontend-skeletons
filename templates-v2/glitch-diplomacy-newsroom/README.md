# Glitch Diplomacy Newsroom

## Category
Experimental Political / Geopolitical Newsroom Interface

## Description
Glitch Diplomacy Newsroom is a premium standalone frontend skeleton for a geopolitical newsroom that arranges stories by tension, uncertainty, and source confidence rather than chronology. It uses restrained glitch effects to reveal conflicting narratives while keeping responsible-reporting metadata visible.

## How to View
Open `index.html` directly in a browser, or serve the folder with a local HTTP server:

```bash
cd "/home/marian/clawd/frontend-skeletons/templates-v2/glitch-diplomacy-newsroom"
python3 -m http.server 3005
```

Then visit:

```text
http://localhost:3005/
```

## Key Features
- Standalone `index.html` with inline CSS and JavaScript.
- Google Fonts CDN only: Newsreader, IBM Plex Mono, and Archivo.
- Palette: paper `#F8F5EF`, ink `#111111`, diplomatic blue `#1D4ED8`, alert red `#B91C1C`, and uncertainty gray `#71717A`.
- News organized by critical strain, uncertainty front, and confidence ledger.
- Glitch effects reveal competing accounts attached to each story.
- Responsible labels for confidence, sources, updates, and corrections.
- Source drawers and confidence meters on every story card.
- Desktop three-column newsroom with masthead, story workspace, and inspect rail.
- Mobile hamburger navigation with single-column story cards and source drawers.
- Semantic HTML5, CSS Grid/Flexbox, custom properties, focus states, keyboard navigation, and reduced-motion support.
- Footer credit: "Built with Frontend Skeletons".

## Interaction Notes
- Use filter chips to show all pressure, critical strain, uncertain claims, high-confidence stories, or corrections.
- Click or focus a story card to update the selected brief in the inspection rail.
- Hover or focus story cards to reveal the competing narrative label.
- Use Alt + ArrowLeft or Alt + ArrowRight to move through visible stories.
- Use Escape to close the mobile masthead drawer.

## Content Notes
- All story text, source names, confidence percentages, update timestamps, and correction notes are realistic editorial placeholders.
- No generic filler text is used.
- Confidence percentages represent evidentiary support, not forecasts.

## Screenshot Reference
Recommended screenshot: desktop viewport at `1440x1100`, showing the masthead, lead story, signal panel, story lanes, and selected brief rail.
