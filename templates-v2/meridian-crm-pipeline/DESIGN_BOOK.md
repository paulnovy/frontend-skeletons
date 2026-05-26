# Meridian CRM Pipeline Design Book

## Concept

Meridian CRM Pipeline is a speed-first sales dashboard for account executives and revenue leaders. The first screen is the working surface: revenue summary, kanban pipeline, AI deal health, contact drawer, and a persistent activity composer.

## Design Tokens

- Background: `#F4F6F8`
- Ink: `#111827`
- Royal blue: `#315CFF`
- Green: `#2FBF71`
- Amber: `#F59E0B`
- Plum: `#7C3AED`
- UI font: Manrope
- Revenue font: Space Grotesk
- Radius: 6px, 8px, 12px, 16px
- Card surfaces: white and near-white panels with thin gray borders

## Layout

- Sticky top navigation keeps workspace switching close without stealing vertical space.
- Sticky revenue summary stays visible while sellers scan the board.
- Four-stage kanban board supports drag-and-drop and keyboard movement.
- Right contact drawer gives deal context, one-tap actions, and recent activity.
- Bottom activity composer is always reachable for quick notes and AI-polished follow-ups.

## UX Rules

- Put deal movement, follow-up, and note capture on the card itself.
- Keep AI health visible but concise: score, bar, and one next action.
- Use color as a secondary signal only; text labels carry the meaning.
- Keep mobile focused on one stage at a time with stage filters.
- Prefer short, action-oriented labels over explanatory copy.

## Accessibility

- Semantic landmarks and sections are used for navigation, pipeline, contact drawer, and footer.
- Deal cards are focusable and can be moved with left/right arrow keys.
- Focus states use high-contrast royal blue outlines.
- Toast messages use `role="status"` and `aria-live="polite"`.
- Reduced-motion preferences disable transitions and animations.

## Content Model

The skeleton includes realistic CRM content:

- Deal names such as "Regional ordering modernization" and "Carrier network command center"
- Company names such as Northstar Foods, Harborline Bank, and BluePeak Logistics
- Revenue values, close dates, buyer names, deal blockers, and next actions
- Activity notes tied to procurement, compliance, legal, and champion follow-up workflows

## Mobile Behavior

At narrow widths:

- Navigation collapses into a hamburger menu.
- Pipeline becomes a list with stage filter tabs.
- Contact drawer slides over the board.
- Composer stacks note input and actions for one-handed use.
