# Sonic Data Dashboard

## Category
WebAudio-enabled analytics dashboard

## Description
Sonic Data Dashboard is a standalone premium frontend skeleton for analytics products that combine visual metrics with optional sonic previews. It lets users inspect revenue, latency, retention, and risk while listening to short trend cues only when they explicitly enable audio.

## Files
- `index.html`: Standalone HTML file with inline CSS and JavaScript.
- `DESIGN_BOOK.md`: Design system, sonification rules, layout guidance, and accessibility notes.
- `README.md`: Project overview and viewing instructions.

## How to View
Open `index.html` directly in a browser, or serve this folder locally:

```bash
cd /home/marian/clawd/frontend-skeletons/templates-v2/sonic-data-dashboard
python3 -m http.server 3012
```

Then visit:

```text
http://localhost:3012/
```

## Key Features
- WebAudio-enabled metric previews with audio off by default.
- Captions for every sonic state, including muted and preview states.
- Google Fonts CDN: IBM Plex Mono for data, Inter for controls, and Space Grotesk for section headings.
- Required palette: deep navy, waveform cyan, resonance purple, signal green, and white.
- Realistic analytics content for revenue velocity, checkout latency, retention, and fraud risk.
- Metric cards with SVG sparklines and mobile-friendly preview buttons.
- Listening controls with trend, variance, and alert modes.
- Semantic HTML5, CSS Grid/Flexbox, custom properties, focus states, keyboard navigation, reduced-motion support, and hamburger navigation.
- Footer credit: "Built with Frontend Skeletons".

## Audio Notes
The browser will not create or play audio until a user enables the audio toggle. Preview buttons still update captions when audio is off, so the dashboard remains fully usable without sound.

## Recommended Screenshot
Use a desktop viewport around `1440x1100` to capture the hero sound stage, listening controls, metric cards, and analyst notes. Use a mobile viewport around `390x844` to verify the hamburger menu, stacked metric cards, and full-width audio preview buttons.
