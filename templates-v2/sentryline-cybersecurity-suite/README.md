# Sentryline Cybersecurity Suite

## Category
Cybersecurity Platform Landing + Dashboard Preview

## Description
Sentryline Cybersecurity Suite is a standalone premium frontend skeleton for an enterprise security product. It combines a dark landing page, live threat map hero, risk score cards, incident timeline, SOC dashboard preview, compliance modules, and case studies around the operating flow "Detect, contain, prove."

## Files
- `index.html`: Standalone HTML file with inline CSS and JavaScript.
- `DESIGN_BOOK.md`: Design system, content rules, layout guidance, tokens, and accessibility notes.
- `README.md`: Project overview and viewing instructions.

## How to View
Open `index.html` directly in a browser, or serve this folder locally:

```bash
cd /home/marian/clawd/frontend-skeletons/templates-v2/sentryline-cybersecurity-suite
python3 -m http.server 3017
```

Then visit:

```text
http://localhost:3017/
```

## Key Features
- Premium dark enterprise cybersecurity visual system.
- Google Fonts CDN: Archivo, Inter, and IBM Plex Mono.
- Required palette: black, tactical gray, acid green, alert red, steel, and ice.
- Threat map hero with live-style nodes, scan animation, threat IDs, and incident metrics.
- Mobile replacement for the threat map using stacked threat cards.
- Risk score cards with realistic posture metrics and security explanations.
- Animated security timeline for detect, contain, hunt, and prove stages.
- SOC dashboard preview with watched assets, high-confidence alert queue, signal volume, and case owners.
- Compliance modules for SOC 2 Type II, ISO 27001:2022, NIST CSF 2.0, and PCI DSS 4.0.
- Realistic case studies with measurable outcomes and no filler copy.
- Semantic HTML5, CSS Grid/Flexbox, custom properties, focus states, reduced-motion support, keyboard-friendly hamburger menu, and accessible contrast.
- Footer credit: "Built with Frontend Skeletons".

## Recommended Screenshot
Use a desktop viewport around `1440x1100` to capture the split hero, threat console, and risk cards. Use a mobile viewport around `390x844` to verify the stacked threat cards and compact incident timeline.
