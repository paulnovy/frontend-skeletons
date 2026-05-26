# Arcadia Edtech Campus Design Book

## Project Name
Arcadia Edtech Campus

## Product Type
Premium online learning platform homepage.

## Product Positioning
Arcadia Campus is an approachable learning platform for adults who want skill growth without being dropped into an endless course catalog. The homepage leads with search and path guidance, then supports the decision with mentors, progress proof, marketplace browsing, cohort dates, and outcomes.

## Intended Audience
Learners exploring career-relevant courses, edtech product teams, bootcamp operators, marketplace teams, and designers creating path-based learning experiences.

## User Problem
Course marketplaces often make learners choose from too many options before they understand where to start. Arcadia makes learning feel achievable by showing a recommended route, level labels, realistic time commitments, mentor access, and concrete finish lines.

## UX Concept
The first screen answers, "Where should I begin?" A prominent search bar accepts exploratory intent, while the adjacent learning map recommends a realistic starter path. The rest of the homepage builds confidence: path cards show scope, mentors make support tangible, progress previews show completion mechanics, the marketplace remains filterable, and cohort dates make enrollment timely.

## Layout Structure
- Sticky navigation with brand, section links, demo-plan action, start-here CTA, and hamburger menu.
- Editorial hero with large Bricolage Grotesque headline, prominent course search, start guidance, and a recommended path panel.
- Skill-path cards with level labels, weekly workload, completion percentages, and finish-line language.
- Mentor section with a dark editorial panel and practitioner cards.
- Progress preview with completion stats, module state, and habit metrics.
- Course marketplace grid with keyboard-accessible category tabs.
- Cohort calendar paired with student outcomes.
- Footer includes the required credit: "Built with Frontend Skeletons".

## Typography System
- Headings: Bricolage Grotesque for friendly, confident editorial headings and card titles.
- Body: Inter for navigation, descriptions, labels, buttons, and structured learning content.
- Stats: Roboto Mono for completion percentages, course prices, module progress, dates, and outcome metrics.
- Letter spacing remains zero so the design stays warm and readable.

## Color System
- Chalk `#FAF8F0`: warm academic background.
- Academy navy `#172554`: core brand, text, footer, and primary action.
- Citrus `#FACC15`: encouraging CTA and live-studio highlight.
- Sky `#38BDF8`: learning guidance, progress accents, and low-pressure labels.
- Raspberry `#E11D48`: focus ring, section kickers, and outcome emphasis.
- Slate `#334155`: secondary text and calm explanatory copy.

## Explicit Design Tokens
- `--chalk`: `#FAF8F0`
- `--academy-navy`: `#172554`
- `--citrus`: `#FACC15`
- `--sky`: `#38BDF8`
- `--raspberry`: `#E11D48`
- `--slate`: `#334155`
- `--font-heading`: `"Bricolage Grotesque", system-ui, sans-serif`
- `--font-body`: `"Inter", system-ui, sans-serif`
- `--font-mono`: `"Roboto Mono", ui-monospace, monospace`
- `--radius-sm`: `8px`
- `--radius-md`: `14px`
- `--radius-lg`: `20px`
- `--shadow-card`: `0 18px 48px rgba(23, 37, 84, 0.10)`

## Component System
- Search card: search input, level select, submit button, and start-here tags.
- Recommended route panel: path title, level pill, week-by-week milestone cards, and live studio CTA.
- Skill path cards: icon, path name, description, level metadata, completion stat, and progress meter.
- Mentor cards: initials avatar, instructor name, realistic bio, and teaching focus tag.
- Progress dashboard: completion stat, module rows, lock state, and module percentages.
- Marketplace tabs: category filters with `role="tab"` and arrow-key navigation.
- Course cards: level label, price, course name, description, instructor, duration, and credibility marker.
- Cohort rows: date box, cohort title, mentor, time, and seats remaining.
- Outcome cards: Roboto Mono metric plus human outcome explanation.

## Interaction Rules
- Escape closes the mobile navigation drawer.
- Mobile navigation links close the drawer after selection.
- Search submission scrolls to the course marketplace and announces state through a polite toast.
- Marketplace tabs support click plus left/right arrow keyboard navigation.
- CTA buttons use a stable toast status without layout shift.
- Focus states are visible and high contrast through raspberry outlines.
- Reduced-motion preferences disable transitions and smooth scrolling.

## Mobile Behavior
- Search becomes a single-column sticky card beneath the navigation so it remains prominent.
- Recommended path content appears before marketplace browsing.
- Course marketplace becomes a horizontal snap list to preserve card detail without tiny columns.
- Cohort schedule stacks into tap-friendly rows with seat information kept visible.
- CTAs become full-width where narrow screens require it.

## Accessibility Notes
- Semantic landmarks are used for header, nav, main, sections, aside, and footer.
- A skip link jumps directly to the main content.
- Search, tablist, status toast, and navigation controls have accessible labels.
- Status and level information are conveyed with text, not color alone.
- The palette maintains strong contrast by using bright colors primarily as accents and backgrounds.
- Buttons and inputs maintain large tap targets.

## Content Rules
- Use realistic course names, instructor names, bios, levels, percentages, cohort dates, and student outcomes.
- Avoid filler language, draft labels, and abstract course cards.
- Make the first step obvious through "Start here" guidance and starter-level labels.
- Keep progress percentages credible and tied to specific behavior.
- Favor achievable language over hype.

## Commercial Use Cases
- Edtech marketplace homepage prototypes.
- Bootcamp and cohort-based course landing pages.
- Career reskilling platform concepts.
- Internal academy portals.
- Course search and path recommendation product demos.
