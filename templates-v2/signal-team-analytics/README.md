# Signal Team Analytics

Standalone frontend skeleton for a team analytics and operating health dashboard.

## Files

- `index.html` - standalone HTML with inline CSS and JavaScript
- `DESIGN_BOOK.md` - design tokens, layout rules, and UX guidance
- `README.md` - usage notes

## Features

- Executive signal panel with delivery, blocker, and meeting load metrics
- Team health cards with risk, watch, and good states
- Filterable team grid and team detail drawer
- Delivery forecast cards and blocker map
- Meeting load visualization, risk heat map, initiative scorecards, and insight feed
- Keyboard movement across team cards
- Responsive hamburger navigation, visible focus states, and reduced-motion support

## Usage

Open `index.html` directly in a browser. The page uses Google Fonts for Sora and Inter; all styling and behavior is inline.

## Customization

- Edit CSS custom properties in `:root` to adjust palette, spacing, type, and motion.
- Duplicate `.team-card` elements to add teams or departments.
- Update the `details` object in the inline script to map drawer content to team cards.
- Tune delivery forecast, blocker rows, and initiative scorecards for your own operating model.

## Credit

Footer text is required: `Built with Frontend Skeletons`.
