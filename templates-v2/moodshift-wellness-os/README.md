# MoodShift Wellness OS

## Category
Adaptive wellness operating system

## Description
MoodShift Wellness OS is a premium standalone frontend skeleton for a wellness interface that shifts with the user's declared emotional state. It changes palette, density, click target size, journaling prompts, and visible modules while logging mood changes neutrally.

## Files
- `index.html`: Standalone semantic HTML file with inline CSS and JavaScript.
- `DESIGN_BOOK.md`: Design system, interaction model, accessibility notes, and safety rules.
- `README.md`: Project overview and usage instructions.

## How to View
Open `index.html` directly in a modern browser, or serve this folder locally:

```bash
cd /home/marian/clawd/frontend-skeletons/templates-v2/moodshift-wellness-os
python3 -m http.server 3013
```

Then visit:

```text
http://localhost:3013/
```

## Key Features
- Sticky mood selector for Stressed, Steady, Energized, and Grounded states.
- Stressed mode uses a muted palette, larger click targets, simplified cards, and hidden advanced modules.
- Energized mode uses brighter amber/sage accents and reveals more optional planning tools.
- Journaling is integrated into the hero flow, daily rhythm board, and workspace actions.
- Mood changes are logged as neutral interface preferences, never as judgments or diagnoses.
- Required typography: Cormorant Garamond for journaling and Inter for wellness UI through Google Fonts CDN.
- Required palette: neutral base `#F5F5F4`, calm blue `#93C5FD`, energy amber `#FCD34D`, grounding sage `#86EFAC`, focus charcoal `#1C1917`.
- Semantic HTML5, CSS Grid/Flexbox, custom properties, visible focus states, reduced-motion support, keyboard mood selection, keyboard tabs, hamburger menu, and mobile-first sticky state controls.
- Footer credit: "Built with Frontend Skeletons".

## Safety Position
MoodShift is not a diagnostic product. The copy avoids diagnosis, medical advice, treatment recommendations, or value judgments about emotions. It only adapts the interface to a state the user declares.

## Recommended Screenshot
Use a desktop viewport around `1440x1100` to capture the sticky mood selector, adaptive hero, journal panel, rhythm board, and mood log. Use a mobile viewport around `390x844` to verify the sticky mood selector, large tap targets, simplified stressed mode, and journal-first flow.
