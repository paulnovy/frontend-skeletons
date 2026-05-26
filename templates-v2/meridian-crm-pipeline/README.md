# Meridian CRM Pipeline

Premium standalone frontend skeleton for a sales CRM dashboard.

## Files

- `index.html` - standalone HTML with inline CSS and JavaScript
- `DESIGN_BOOK.md` - design tokens, layout rules, and UX guidance
- `README.md` - usage notes

## Features

- Kanban pipeline with draggable deal cards
- AI deal health overlay with score, progress bar, and next action prompt
- Sticky revenue summary with Space Grotesk revenue headings
- Right-side contact drawer with contact actions and recent activity
- Bottom activity composer for quick notes and AI-polished follow-ups
- Mobile stage filters and one-tap contact actions
- Keyboard support for opening cards and moving deals across stages
- Accessible focus states, semantic HTML5, and reduced-motion support

## Usage

Open `index.html` directly in a browser. The page uses Google Fonts for Manrope and Space Grotesk; all other styling and behavior is inline.

## Customization

- Edit CSS custom properties in `:root` to adjust color, spacing, and type tokens.
- Duplicate or modify `.deal-card` elements to change pipeline content.
- Update `contactData` in the inline script to map cards to contact drawer details.
- Replace the revenue summary values with live CRM metrics when integrating with an application.

## Interaction Notes

- Drag cards between stages with a mouse or trackpad.
- Focus a deal card and press `Enter` to open its contact drawer.
- Focus a deal card and press left/right arrows to move it between adjacent stages.
- On mobile, use stage filters to switch pipeline views.

## Credit

Footer text is required: `Built with Frontend Skeletons`.
