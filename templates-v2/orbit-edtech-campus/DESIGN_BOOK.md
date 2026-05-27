# Orbit EdTech Campus Design Book

## Concept

Orbit EdTech Campus is a premium online learning platform interface for course discovery, progress tracking, interactive lesson work, and cohort community activity. It presents the product as a focused campus where learners can move from catalog exploration to active study without changing context.

## Palette

- Cloud `#F6F8FC` is the page background, card surface, drawer surface, and calm learning workspace base.
- Ink `#19212B` anchors text, the lesson stage, hero panel, footer copy, and high-contrast controls.
- Indigo `#4F46E5` is the primary accent for actions, course filters, charts, and active learning states.
- Cyan `#06B6D4` marks live indicators, secondary accents, cohort activity, and progress energy.
- Lime `#A3E635` represents healthy streaks, earned badges, positive coach guidance, and primary resume moments.
- Coral `#FB7185` flags attention states, advanced difficulty, and courses that need renewed momentum.

Only these colors are used directly, with opacity-based tints for borders, shadows, muted copy, and soft surfaces.

## Typography

Headings use Manrope for a confident education-product voice. Navigation, metrics, cards, controls, and dense UI labels use Inter for clear scanning. Both families load through the Google Fonts CDN.

## Structure

The skeleton includes every requested platform section:

- Sticky top navigation with brand, links, search, user avatar, and keyboard-accessible mobile drawer.
- KPI strip for courses enrolled, hours learned, streak days, and certificates earned.
- Filterable course catalog with gradient thumbnail areas, instructors, difficulty badges, ratings, and durations.
- My learning progress list with progress bars, last-accessed details, pacing status, and continue actions.
- Interactive lesson preview with media stage, lesson outline sidebar, bookmark and note actions.
- Community feed with discussion authors, timestamps, likes, and reply counts.
- Achievement badge grid covering earned and locked states with icon-style labels and requirements.
- Footer credit: Orbit EdTech Campus — designed by Meridian Learning Studio.

## Accessibility

The page uses semantic header, nav, main, section, article, aside, and footer landmarks. It includes a skip link, labeled search fields, visible focus states, `aria-expanded` and `aria-hidden` state on the drawer, Escape-to-close drawer behavior, and focus return to the hamburger button. Filter and lesson-action controls are keyboard reachable, and toggled lesson actions expose `aria-pressed`.

## Responsive Behavior

Desktop uses a two-column hero, multi-column KPI strip, three-column catalog and feed, and paired lesson/progress panels. Tablet collapses the hero and learning areas while keeping two-column cards. Mobile hides desktop navigation behind the slide-in drawer, stacks all major content, preserves button tap targets, and keeps text inside compact controls.
