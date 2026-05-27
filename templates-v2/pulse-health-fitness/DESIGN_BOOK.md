# Pulse Health & Fitness Design Book

## Concept

Pulse Health & Fitness is a premium consumer fitness tracker for people who want workout planning, nutrition logging, recovery signals, and progress visualization in one calm daily command center. The interface treats health data as actionable coaching, not a noisy spreadsheet.

## Palette

- Cloud `#F6F8FC` is the page background, card surface, drawer surface, and chart canvas.
- Ink `#19212B` anchors text, deep hero panels, timer surfaces, and high-contrast controls.
- Indigo `#4F46E5` is the primary action color, progress line, and plan emphasis.
- Cyan `#06B6D4` marks live sync, active indicators, activity bars, and strength trend points.
- Lime `#A3E635` signals healthy progress, streak state, recovery confidence, and positive goal status.
- Coral `#FB7185` marks elevated effort, attention states, and recovery targets that need action.

Only the required palette is used directly, with opacity-based tints for borders, shadows, surfaces, and muted interface states.

## Typography

Headings use Manrope for a strong fitness-product voice. Interface copy, metrics, navigation, chart labels, meal logs, and button text use Inter for clarity in dense tracking views. Both families load from the Google Fonts CDN.

## Structure

The skeleton includes every required health and fitness section:

- Sticky top navigation with brand, dashboard links, search, streak badge, and mobile hamburger.
- KPI strip for calories burned, active minutes, workouts this week, and current streak.
- Today's workout card with exercise list, sets and reps, rest timer, and completion button.
- Weekly activity CSS-only bar chart showing daily active minutes.
- Nutrition logger cards for Breakfast, Lunch, Dinner, and Snacks with food items and calorie totals.
- Progress chart section with CSS-only line visualizations for weight and strength trends over four weeks.
- Goal tracker with circular CSS progress indicators for steps, water, and sleep.
- Footer credit naming Pulse Health & Fitness and Kinetic North Studio.

## Accessibility

The page uses semantic header, nav, main, section, article, aside, and footer landmarks. The mobile drawer exposes `aria-controls`, `aria-expanded`, and `aria-hidden`, is keyboard navigable, closes on Escape, and returns focus to the hamburger button. Inputs have accessible labels, charts include descriptive `aria-label` text, and interactive elements use visible focus states.

## Responsive Behavior

Desktop presents a wide app-style dashboard with a premium hero, KPI strip, paired workout and activity panels, nutrition grid, trend charts, and goal cards. Tablet collapses the hero and dashboard panels while keeping two-column cards where space allows. Mobile switches to a slide-in drawer, stacks all major content, keeps controls tappable, and preserves chart readability without horizontal scrolling.
