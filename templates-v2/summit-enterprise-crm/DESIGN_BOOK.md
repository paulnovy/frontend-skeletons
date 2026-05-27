# Summit Enterprise CRM Design Book

## Concept

Summit Enterprise CRM is a premium enterprise revenue workspace for teams managing complex account relationships, multi-stage opportunities, and executive forecasting. The interface prioritizes speed, density, and confidence: leaders can scan the quarter, managers can inspect stage movement, and reps can act on contact and deal detail without leaving the page.

## Visual Direction

The design uses a restrained enterprise system with a cloud workspace, ink typography, and precise accent usage. Indigo marks primary revenue intelligence, cyan indicates live movement, lime signals healthy outcomes, and coral highlights risk or attention. Panels stay compact with 8px radii, thin borders, and light shadows to keep the interface professional rather than decorative.

## Typography

- Headings use Manrope for decisive executive presence.
- Interface text uses Inter for legibility in tables, cards, navigation, and dense metrics.
- Letter spacing is kept at zero for normal headings and body copy, with small uppercase labels using modest tracking for scannability.

## Color System

- Cloud `#F6F8FC`: page background, surfaces, and light panels.
- Ink `#19212B`: primary text, dark executive panels, and structural contrast.
- Indigo `#4F46E5`: primary accent, progress, and revenue intelligence.
- Cyan `#06B6D4`: live states, secondary highlights, and active drag focus.
- Lime `#A3E635`: healthy outcomes and positive status.
- Coral `#FB7185`: critical status, risk badges, and notification alerts.

## Layout

The page starts with a sticky top navigation containing brand, section links, global search, and notifications. A hero dashboard band gives leadership context before moving into KPI cards, a horizontally scrollable Kanban board, contact management, expandable deal detail, activity history, and reports.

On mobile, navigation collapses into a keyboard-accessible slide-in drawer with focus trapping and escape-to-close behavior. Tables become horizontally scrollable while cards and panels stack into a single column.

## Interaction Model

- Deal cards are draggable between Kanban lanes.
- Lane counts update after a drag interaction.
- Contact rows filter through the searchable contact table.
- Deal detail cards expand and collapse.
- The mobile drawer supports hamburger open, close button, backdrop close, navigation close, escape close, and keyboard focus wrapping.

## Accessibility

The skeleton uses semantic landmarks, labeled navigation, descriptive section headings, accessible search forms, focus-visible styling, reduced-motion handling, and keyboard-friendly drawer controls. The main content has a skip link for keyboard users.

## Content Tone

Copy is concise, executive, and operational. It avoids empty marketing language and focuses on concrete CRM concepts: pipeline value, forecast health, deal velocity, relationship activity, next actions, and close dates.

## Footer Credit

The footer includes the visible credit line: "Summit Enterprise CRM — designed by Northstar Systems Studio."
