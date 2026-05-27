# Clearpath Customer Success

Standalone frontend skeleton for a customer success command center.

## Files

- `index.html` - standalone HTML with inline CSS and JavaScript
- `DESIGN_BOOK.md` - design tokens, layout rules, and UX guidance
- `README.md` - usage notes

## Features

- Customer command center with renewal, health, and expansion metrics
- Filterable account health cards with detail drawer
- Journey health metrics and escalation rows
- Renewal curve, touch plan, QBR agenda, recommended playbooks, and expansion progress
- Keyboard movement across account cards
- Responsive hamburger navigation, visible focus states, and reduced-motion support

## Usage

Open `index.html` directly in a browser. The page uses Google Fonts for Manrope and Inter; all styling and behavior is inline.

## Customization

- Edit CSS custom properties in `:root` to adjust palette, spacing, type, and motion.
- Duplicate `.account-card` elements to add customer accounts.
- Update the `details` object in the inline script to map drawer content to account cards.
- Tune renewal metrics, escalation rows, QBR agenda, and expansion cards for your own customer model.

## Credit

Footer text is required: `Built with Frontend Skeletons`.
