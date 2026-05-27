# Hive Open Source Hub Design Book

## Concept

Hive Open Source Hub is a compact project showcase for maintainers, contributors, and community managers. The page is designed as a working dashboard rather than a marketing page: repository health, contribution activity, issue ownership, and community recognition are visible in the first pass.

## Visual System

- Headings use Manrope for strong editorial structure.
- UI copy uses Inter for readable dense dashboard content.
- Cloud `#F6F8FC` anchors the workspace background.
- Ink `#19212B` provides strong contrast for navigation, badges, and text.
- Indigo `#4F46E5` marks primary actions and active navigation moments.
- Cyan `#06B6D4` supports live state, graph activity, and repository status.
- Lime `#A3E635` highlights growth and high contribution intensity.
- Coral `#FB7185` marks risk, blocked work, and urgent labels.

## Layout

The template uses a sticky top navigation, a dashboard hero with live activity, a KPI strip, repository cards, a CSS contribution graph, an issue table, and contributor cards. Cards are kept at an 8px radius to match operational software conventions.

## Responsive Behavior

Desktop layouts use three and four column grids where useful. Tablet layouts reduce to two columns. Mobile layouts use a hamburger button with a slide-in drawer, single-column content, horizontal scrolling for the issue table, and a scrollable contribution graph.

## Interaction

The template includes inline JavaScript for the mobile drawer. Search inputs, filters, repository cards, table rows, and calls to action are styled as production-ready UI surfaces and can be wired to real data without changing the structure.
