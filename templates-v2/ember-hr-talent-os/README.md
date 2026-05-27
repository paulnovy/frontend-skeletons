# Ember HR Talent OS

Standalone frontend skeleton for a recruiting and HR platform dashboard.

## Files

- `index.html` - standalone HTML with inline CSS and JavaScript
- `DESIGN_BOOK.md` - design tokens, layout rules, and UX guidance
- `README.md` - usage notes

## Features

- Candidate pipeline with role filters and decision stages
- Candidate drawer with fit, next step, interviewer notes, risks, and recommendation
- Interview schedule focused on today’s readiness
- Scorecard completion tracking
- Diversity snapshot and hiring plan coverage
- Keyboard focus movement across candidate cards
- Responsive hamburger navigation, visible focus states, and reduced-motion support

## Usage

Open `index.html` directly in a browser. The page uses Google Fonts for Outfit and Inter; all styling and behavior is inline.

## Customization

- Edit CSS custom properties in `:root` to adjust palette, spacing, type, and motion.
- Duplicate `.candidate-card` elements to add candidate records.
- Update the `details` object in the inline script to map drawer content to candidate cards.
- Tune hiring plan rows and scorecards for your own recruiting model.

## Credit

Footer text is required: `Built with Frontend Skeletons`.
