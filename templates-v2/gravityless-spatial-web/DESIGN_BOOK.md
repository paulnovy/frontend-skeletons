# Gravityless Spatial Web Design Book

## Project Name
Gravityless Spatial Web

## Product Type
Premium spatial website skeleton for product launches, founder-led brands, experimental SaaS narratives, and campaign hubs that need a non-linear discovery model.

## Positioning
Gravityless Spatial Web replaces conventional page hierarchy with a navigable value field. The visitor moves between five labeled value clouds: product, proof, pricing, team, and contact. The experience feels exploratory, but every cloud also appears in a command menu and grounded fallback list.

## Audience
Product marketing teams, creative technology studios, AI and infrastructure startups, brand systems teams, and agencies building high-impact websites where ordinary section scrolling feels too flat.

## UX Principles
- Spatial first, usable always: the 3D field is the primary desktop experience, while command search and list view provide fast access.
- Labels never disappear: every floating object has a clear text label, index, and action.
- One active decision: selecting a cloud updates a readable detail panel so exploration does not fragment the message.
- Fallback parity: the list view contains the same product, proof, pricing, team, and contact paths.
- Mobile honesty: small screens disable free spatial navigation and become guided story cards.

## Layout System
- Sticky header with brand mark, desktop anchors, command menu trigger, booking action, and hamburger menu.
- Hero combines positioning copy with a CSS 3D spatial field.
- Value clouds float around a central value core and connect with orbit lines.
- Control dock lets desktop users switch clouds with buttons, arrows, number keys, or field tilt.
- Selected cloud panel anchors the current narrative in a conventional readable layout.
- Fallback list view provides a linear version for accessibility, speed, and low-confidence visitors.
- Mobile story cards turn the same cloud sequence into a guided tabbed journey.
- Footer includes the required credit: "Built with Frontend Skeletons".

## Typography
- Spatial labels: Space Grotesk from Google Fonts, using the variable-weight family for large cloud labels, hero headline, and panel titles.
- Readable panels: Inter from Google Fonts for body copy, navigation, controls, and fallback cards.
- Letter spacing remains `0` to keep labels clean and avoid cramped futuristic cliches.

## Color Tokens
- `--cosmic`: `#020617`, primary cosmic black background.
- `--violet`: `#7C3AED`, nebula violet for secondary energy and depth.
- `--cyan`: `#22D3EE`, plasma cyan for focus, active states, and command affordances.
- `--white`: `#F8FAFC`, star white for high-contrast foreground text.
- `--gray`: `#64748B`, orbit gray for secondary interface language.

## Component Notes
- The spatial field uses CSS `perspective`, `transform-style: preserve-3d`, and cloud-specific `translateZ` transforms.
- The command menu opens with visible buttons or `Ctrl/Cmd+K`, filters cloud destinations, and returns focus to useful content.
- Keyboard navigation supports `ArrowLeft`, `ArrowRight`, and number keys `1` through `5`.
- The selected detail panel uses `aria-live="polite"` so cloud changes are announced without interrupting.
- Mobile story tabs map exactly to the five desktop clouds.
- Reduced motion disables animation and flattens cloud transforms.

## Accessibility
- Semantic header, nav, main, section, article, aside, and footer landmarks.
- Skip link targets the main spatial content.
- Visible focus states use plasma cyan.
- Hamburger button exposes `aria-expanded`.
- Command menu uses `role="dialog"` and supports Escape close.
- Floating clouds are interactive through buttons, not pointer-only transforms.
- Fallback list view is available from the hero and primary navigation.

## Responsive Behavior
- Desktop: free spatial field, floating clouds, control dock, keyboard navigation, and tilt control.
- Tablet: layout stacks while preserving the spatial field.
- Mobile: the 3D field is hidden and replaced by guided story cards with the same content order.

## Content Rules
- Use realistic startup and product-launch content, not abstract filler copy.
- Keep each cloud focused on a buyer question: what it is, why to trust it, what it costs, who ships it, and how to engage.
- Avoid hiding pricing or contact behind mystery interactions.
- Keep fallback copy useful enough to stand alone if the spatial field is never used.

## External Dependencies
Google Fonts CDN only:
- Space Grotesk
- Inter
