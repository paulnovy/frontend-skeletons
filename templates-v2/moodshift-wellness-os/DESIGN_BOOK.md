# MoodShift Wellness OS Design Book

## Project Name
MoodShift Wellness OS

## Product Type
Premium wellness operating system with an adaptive emotional-state interface.

## Product Positioning
MoodShift is a calm personal operating system for daily planning, reflection, and lightweight routines. Its defining behavior is interface adaptation: the user declares a current emotional state, and the surface changes density, color, target size, and visible modules without judging or interpreting that state.

## Intended Audience
Wellness product teams, journaling app founders, digital-life OS concepts, coaching platforms, and design system teams exploring humane adaptive interfaces.

## User Problem
Most productivity and wellness dashboards ask for the same amount of attention regardless of the user's state. A person who feels stressed gets the same dense controls as a person with high energy. MoodShift makes the dashboard responsive to the user's declared state while keeping agency with the user.

## UX Concept
The mood selector is a sticky control, not a hidden setting. Selecting a state immediately changes the environment:

- Stressed: muted palette, larger click targets, fewer visible modules, direct journal prompt.
- Steady: balanced density with reflection, rhythm planning, and context visible.
- Energized: brighter amber palette, more optional modules, expanded planning tools.
- Grounded: sage-led palette with rituals, sensory prompts, and context anchors.

Every change is logged as a neutral interface preference. The product never scores, diagnoses, or recommends medical action.

## Layout Structure
- Sticky global header with brand, desktop navigation, actions, and hamburger menu.
- Sticky mood selector below the header, optimized as the primary mobile control.
- Hero split between editorial explanation and current adaptive state summary.
- Three-column desktop workspace: personal compass, main journaling/rhythm/workspace, and log/routines.
- Mobile collapses into a single column with the mood selector always reachable.
- Footer includes the required credit: "Built with Frontend Skeletons".

## Typography System
- Interface: Inter for labels, navigation, cards, controls, and operational content.
- Journaling: Cormorant Garamond for the hero headline, journal prompts, and reflective headings.
- Google Fonts CDN is used in `index.html`.
- Letter spacing is zero; large type is reserved for hero and journaling moments.

## Color System
- Neutral base `#F5F5F4`: page foundation and calm background.
- Calm blue `#93C5FD`: stressed and reflective focus states.
- Energy amber `#FCD34D`: energized mode accent and visibility boost.
- Grounding sage `#86EFAC`: steady and grounded states.
- Focus charcoal `#1C1917`: primary text, dark actions, high-contrast focus rings.

## Explicit Design Tokens
- `--neutral-base`: `#F5F5F4`
- `--calm-blue`: `#93C5FD`
- `--energy-amber`: `#FCD34D`
- `--grounding-sage`: `#86EFAC`
- `--focus-charcoal`: `#1C1917`
- `--font-ui`: `"Inter", system-ui, sans-serif`
- `--font-journal`: `"Cormorant Garamond", Georgia, serif`
- `--target-size`: adaptive, `46px` default and `54px` in stressed mode
- `--card-radius`: `8px`
- `--panel-radius`: `8px`

## Component System
- Mood selector: sticky segmented choices using `aria-pressed`, click, and arrow-key support.
- Current state card: names the active view and lists UI adjustments.
- Journal panel: state-aware prompts, Cormorant Garamond writing area, save/pin actions.
- Rhythm board: daily cards with realistic activities and simplified visibility in stressed mode.
- Adaptive workspace tabs: keyboard-accessible tabs for overview, focus, and social planning.
- Mood log: neutral history entries that describe interface changes without interpretation.
- Small rituals: optional routines expressed as plain actions, not outcomes or advice.

## Interaction Rules
- Mood selection changes CSS custom properties, visible module count, prompt copy, state description, badges, and mood log.
- Mood selections are logged with neutral text: "Interface preference logged without interpretation."
- The hamburger menu supports open/close state and closes on Escape.
- Workspace tabs support click plus Left, Right, Home, and End keyboard navigation.
- Buttons use stable toast feedback and do not shift layout.
- Reduced-motion preferences disable transitions and smooth behavior.

## Mobile Behavior
- Mood selector remains sticky below the top bar.
- Cards collapse into one column.
- Stressed mode hides advanced modules and uses larger tap targets.
- Primary actions become full-width where needed.
- Journal remains near the top of the flow so the user can write before exploring more modules.

## Accessibility Notes
- Semantic landmarks are used for header, navigation, main, sections, asides, and footer.
- A skip link jumps to the current state area.
- Mood chips expose selected state through `aria-pressed`.
- Workspace tabs use `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
- Focus rings are high contrast using focus charcoal.
- Status feedback is announced with `role="status"` and `aria-live="polite"`.
- State changes are conveyed with text, not color alone.

## Safety And Content Rules
- Never diagnose the user.
- Never assign a good or bad value to any mood.
- Never suggest medical advice, treatment, medication, or clinical next steps.
- Keep all copy in the language of preference, reflection, planning, and agency.
- Use realistic daily content: focus blocks, calls, journal prompts, routines, and private notes.
- Avoid filler content and draft labels.

## Commercial Use Cases
- Wellness OS product concept.
- Journaling application prototype.
- Adaptive productivity dashboard.
- Emotional-state-aware design system demonstration.
- Coaching platform interface starter.
- Mobile-first reflection workflow.
