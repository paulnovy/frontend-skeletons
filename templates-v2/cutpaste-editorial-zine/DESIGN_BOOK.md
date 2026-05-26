# Cutpaste Editorial Zine Design Book

## Project Name
Cutpaste Editorial Zine

## Product Type
Digital zine and editorial microsite skeleton with a cut-paste collage aesthetic.

## Intended Audience
Independent publishers, arts organizations, editorial studios, culture newsletters, design schools, festival teams, and small creative brands that want a web publication to feel tactile without losing editorial clarity.

## User Problem
Digital publications often become sterile streams of cards, while expressive zine-inspired pages often sacrifice hierarchy and readability. This skeleton gives teams a physical, handmade visual language while preserving a clear cover, contents, feature hierarchy, departments, and reader signup flow.

## UX Concept
The interface behaves like a desk covered in assembled pages. Content blocks are paper cutouts with torn edges, slight rotations, taped photos, stamped labels, and overlapping spreads. The chaos is editorially controlled: readers can still scan the issue, follow section navigation, and read long copy on stable surfaces.

## Layout Structure
- Sticky masthead with brand, issue stamp, primary navigation, and hamburger menu.
- Cover spread with oversized Archivo headline, issue tags, editorial call to action, and taped cover image.
- Editor note and table-of-contents sidebar.
- Feature section with overlapping paper articles, pull quote, and focusable cutout cards.
- Photo desk with three taped CSS-built image studies.
- Department section for recurring modules such as tools, corrections, and margin notes.
- Manifesto block that explains the layout rules.
- Reader letters signup panel.
- Footer with required "Built with Frontend Skeletons" credit.

## Typography System
- Headlines: Archivo, bold and uppercase, with compact editorial impact.
- Body copy: Special Elite, typewriter style for articles, captions, notes, and forms.
- Labels: Archivo, uppercase, high-weight, used for issue stamps, buttons, tags, and section markers.
- Google Fonts CDN is the only external font dependency.

## Color System
- Kraft paper: `#D4A574`, base environment and tag surfaces.
- Newsprint: `#F5F5F0`, article paper, forms, panels, and reading surfaces.
- Ink: `#1A1A1A`, text, borders, shadows, hard rules, and primary buttons.
- Red marker: `#DC2626`, corrections, stamps, urgency marks, and selected editorial emphasis.
- Blue pen: `#1D4ED8`, annotations, focus states, interview labels, and secondary editorial emphasis.

## Explicit Design Tokens
- `--kraft`: `#D4A574`
- `--newsprint`: `#F5F5F0`
- `--ink`: `#1A1A1A`
- `--red`: `#DC2626`
- `--blue`: `#1D4ED8`
- `--font-head`: `"Archivo", system-ui, sans-serif`
- `--font-body`: `"Special Elite", "Courier New", monospace`
- `--paper-shadow`: `0 18px 42px rgba(26,26,26,0.2)`
- `--paper-shadow-hard`: `7px 8px 0 rgba(26,26,26,0.18)`
- `--tape`: `rgba(255,246,187,0.72)`
- `--radius-sm`: `2px`
- `--radius-md`: `6px`
- `--motion-fast`: `150ms ease`
- `--motion-med`: `260ms ease`

## Component System
- Header: sticky, high-contrast, with issue stamp and mobile hamburger fallback.
- Paper panel: newsprint surface with hard ink border, shadow, grid grain, and torn lower edge.
- Taped image: CSS art inside a bordered photo frame with semi-transparent tape.
- Cutout article: focusable editorial card with clipped polygon edges, slight rotation, and active elevation.
- Pull quote: red marker panel used to punctuate the feature grid.
- Table of contents: dark issue index with numbered links and short blurbs.
- Dispatch card: short department module for recurring editorial content.
- Manifesto block: full-width high-contrast explanation of editorial principles.
- Reader form: static signup skeleton with explicit labels and a prototype submit state.

## Interaction Rules
- Every link, button, form field, and focusable card has a visible blue focus state.
- Hamburger menu opens and closes with `aria-expanded` state.
- Escape closes the mobile menu.
- Navigation links close the menu and update active styling.
- Feature cards are focusable and become active on click or focus.
- Alt plus ArrowLeft or ArrowRight moves through feature cutouts.
- Shuffle cutouts applies a temporary desk-like rearrangement.
- Form submit is prototype-only and displays local confirmation text.

## Responsive Behavior
- Desktop uses an overlapping 12-column feature grid and angled photo/card treatments.
- Tablet reduces the feature grid to two columns and keeps moderate visual stagger.
- Mobile stacks all cutouts, removes most rotations, reduces overlap, and increases readable areas.
- Header navigation becomes a hamburger drawer under `1100px`.
- Feature cards, photos, departments, manifesto, and letter panel collapse to one column under `720px`.

## Accessibility Notes
- Semantic HTML5 landmarks are used for header, nav, main, section, article, aside, figure, form, and footer.
- A skip link jumps directly to the feature articles.
- Cards that behave as editorial objects are keyboard-focusable.
- Focus states use blue pen for strong contrast against paper surfaces.
- CSS art uses descriptive `role="img"` labels.
- Reduced-motion users get static rotations and minimal transitions.
- Mobile removes aggressive overlap so text does not collide or become hidden.

## Editorial Safety Rules
- Expressive collage styling must never obscure article titles, body copy, buttons, form labels, or navigation.
- Rotations should stay small enough to feel physical without reducing readability.
- At least one dominant headline must anchor every major view.
- Use red marker sparingly for corrections, emphasis, stamps, and calls for attention.
- Use blue pen for annotations, interviews, and focus states.

## Performance Notes
- Standalone `index.html` with inline CSS and JavaScript.
- No build step, framework, external script, image file, or icon dependency.
- Photo treatments are CSS-generated, making the skeleton portable.
- JavaScript is limited to menu behavior, active nav state, feature keyboard navigation, shuffle behavior, and prototype form feedback.

## Adaptation Ideas
- Culture magazine issue page.
- Festival newspaper microsite.
- Artist residency field report.
- Design school publication.
- Nonprofit campaign zine.
- Editorial product launch with handmade visual identity.
