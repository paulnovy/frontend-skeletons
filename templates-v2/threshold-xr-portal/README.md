# Threshold XR Portal

## Category
XR / Spatial Computing Product Portal

## Description
Threshold XR Portal is a standalone premium frontend skeleton for an XR product gateway. It explains spatial computing concepts through browser-native depth layers, object previews, device compatibility cards, mobile fallback previews, and developer SDK snippets.

The page is designed for visitors who may not own a headset. Desktop users get layered spatial interactions; mobile users get clear stacked cards and video-preview style explanations.

## Files
- `index.html`: Standalone HTML file with inline CSS and JavaScript.
- `DESIGN_BOOK.md`: Design system, UX principles, tokens, component guidance, accessibility notes, and responsive behavior.
- `README.md`: Project overview and usage notes.

## How to View
Open `index.html` directly in a browser, or serve this folder locally:

```bash
cd /home/marian/clawd/frontend-skeletons/templates-v2/threshold-xr-portal
python3 -m http.server 3018
```

Then visit:

```text
http://localhost:3018/
```

## Key Features
- Google Fonts CDN: Sora headings, Inter interface, and JetBrains Mono SDK snippets.
- Required palette: void `#030712`, hologram blue `#38BDF8`, violet `#A78BFA`, glass white `#E0F2FE`, and graphite `#1F2937`.
- Interactive spatial layer stage for anchor, object, and guided overlay concepts.
- Desktop depth controls with keyboard layer cycling using `Alt+ArrowLeft` and `Alt+ArrowRight`.
- Object preview lab with selectable realistic product states.
- Device compatibility filter for no-headset and immersive paths.
- Developer docs panel with tabbed snippets and copy interaction.
- Mobile fallback section with layered cards and video-preview cards.
- Semantic HTML5, CSS Grid/Flexbox, CSS custom properties, visible focus states, reduced-motion fallback, and hamburger navigation.
- Footer credit: "Built with Frontend Skeletons".

## Recommended Screenshot
Use a desktop viewport around `1440x1100` to capture the hero depth stage, object lab, and compatibility grid. Use a mobile viewport around `390x844` to confirm the hamburger menu, flattened spatial layers, stacked object controls, and mobile preview cards.
