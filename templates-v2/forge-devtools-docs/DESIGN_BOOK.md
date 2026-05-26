# Forge DevTools Docs Design Book

## Project Name
Forge DevTools Docs

## Product Type
Developer tool documentation portal for a platform SDK, API, event debugger, and deploy validation workflow.

## Positioning
Forge DevTools Docs is designed as a premium technical reference that lets developers start fast and stay oriented during deeper implementation. The page prioritizes quick copy-paste setup, high-density navigation, realistic API examples, and visible version metadata.

## Audience
Platform engineers, developer experience teams, internal tools maintainers, CI owners, SDK consumers, and support engineers debugging deploy or webhook failures.

## UX Principles
- Fast path first: the quickstart terminal is visible near the top and can be copied in one click.
- Dense but calm: left docs navigation, center article content, and right in-page table of contents support repeated reference use.
- Operational realism: version labels, endpoint paths, SDK numbers, trace headers, deploy check commands, and changelog dates make the docs feel production-ready.
- Technical trust: code panels use strong contrast, stable monospace typography, and explicit command labels.
- Mobile utility: desktop sidebars collapse into a section drawer and command palette, preserving navigation depth without crowding the reading view.

## Layout System
- Sticky top header with brand, current version, command palette trigger, and desktop utility links.
- Desktop three-pane shell:
  - Left persistent documentation navigation.
  - Center readable article and homepage content.
  - Right sticky table of contents with reading progress.
- Homepage content includes hero, quickstart terminal, SDK cards, concept steps, API endpoint examples, event payload, auth guidance, deploy checks, observability note, changelog, community cards, and footer.
- Mobile layout hides persistent sidebars and exposes navigation through a hamburger section drawer plus command palette.

## Typography
- UI and navigation: Geist Sans from Google Fonts.
- Code, commands, versions, keyboard hints, endpoint methods, and metrics: JetBrains Mono.
- Long-form introductions: Source Serif 4 for a more editorial, readable docs voice.

## Color Tokens
- `--black`: `#0B0F14`, page background and primary dark surface.
- `--black-2`: `#111827`, code panel background.
- `--green`: `#6EE7B7`, primary action, active state, copied state, and success signal.
- `--blue`: `#60A5FA`, secondary accent, search icon, POST-like technical emphasis, and trace callouts.
- `--zinc`: `#D4D4D8`, readable secondary text on dark surfaces.
- `--white`: `#F8FAFC`, primary text and high-contrast copy.

## Component Notes
- Quickstart terminal has a title bar, realistic setup commands, and one-click copy.
- SDK cards each include a language mark, version number, concise capability summary, install command, and copy button.
- Endpoint list uses method chips and realistic REST paths.
- Code blocks include top bars and copy controls, matching the terminal visual language.
- Changelog entries show version, date, and migration-relevant release notes.
- Command palette opens with `Ctrl K` or the search button, filters entries, supports arrow navigation, Enter activation, and Escape close.
- Mobile section drawer switches between docs navigation and in-page links with ARIA tab semantics.

## Accessibility
- Semantic header, nav, main, aside, section, article, and footer landmarks.
- Skip link targets the main article content.
- High-contrast dark theme with visible focus rings.
- Drawer and command palette use `role="dialog"` and `aria-modal`.
- Buttons have explicit labels or visible action text.
- Command copy state is communicated through text, not color alone.
- Keyboard support includes Escape close, command palette shortcut, arrow selection, and Enter activation.
- Reduced-motion preference disables transitions and smooth scrolling.

## Responsive Behavior
- Desktop: full three-pane documentation shell with sticky left and right sidebars.
- Tablet: sidebars collapse, header keeps search and top links.
- Mobile: command palette and drawer become the primary navigation controls, content stacks into one column, code remains horizontally scrollable, and buttons expand to full width where useful.

## Content Rules
- Avoid generic filler; examples should look deployable.
- Prefer concrete versions, dates, endpoint paths, headers, status metrics, and workspace names.
- Treat copy buttons as functional controls, not decoration.
- Keep docs intros readable and slightly editorial with Source Serif 4, while all command surfaces remain monospace.

## External Dependencies
Google Fonts CDN only:
- Geist
- JetBrains Mono
- Source Serif 4

