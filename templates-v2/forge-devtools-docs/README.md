# Forge DevTools Docs

## Category
Developer Tool Documentation Portal

## Description
Forge DevTools Docs is a standalone premium frontend skeleton for a developer documentation portal. It combines a three-pane desktop docs layout with a homepage-style article that includes a hero, 30-second quickstart terminal, SDK cards, REST API examples, event payload examples, deploy checks, observability guidance, changelog, and community links.

## Files
- `index.html`: Standalone HTML file with inline CSS and JavaScript.
- `DESIGN_BOOK.md`: Design system, UX principles, tokens, components, responsive behavior, and accessibility notes.
- `README.md`: Project overview and usage notes.

## How to View
Open `index.html` directly in a browser, or serve this folder locally:

```bash
cd /home/marian/clawd/frontend-skeletons/templates-v2/forge-devtools-docs
python3 -m http.server 3014
```

Then visit:

```text
http://localhost:3014/
```

## Key Features
- Three-pane docs layout with left docs nav, center article, and right in-page table of contents.
- Google Fonts CDN: Geist Sans UI, JetBrains Mono code, and Source Serif 4 long-form intros.
- Required palette: near black `#0B0F14`, code panel `#111827`, neon green `#6EE7B7`, blue `#60A5FA`, zinc `#D4D4D8`, and white `#F8FAFC`.
- Copy-pasteable quickstart designed to be useful within 30 seconds.
- Functional copy buttons for terminal blocks, SDK commands, and code examples.
- Realistic SDK versions, endpoint examples, event payloads, changelog entries, deploy checks, and support links.
- Mobile navigation collapses into a command palette plus section drawer.
- Keyboard support for `Ctrl K`, Escape, arrow navigation, and Enter activation in the command palette.
- Visible focus states, semantic HTML5, accessible contrast, and reduced-motion fallback.
- Footer credit: "Built with Frontend Skeletons".

## Recommended Screenshot
Use a desktop viewport around `1440x1100` to capture the three-pane documentation layout, hero, and quickstart terminal. Use a mobile viewport around `390x844` to verify the command palette and section drawer behavior.

