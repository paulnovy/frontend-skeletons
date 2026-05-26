# Timefold Product Story Design Book

## Concept
Timefold Product Story is a premium product marketing skeleton for teams that need to show product maturity, current value, and roadmap conviction at the same time. The page treats scroll as time: moving down advances the product story, moving back reveals the origin, and timeline nodes let visitors jump to any era.

## Interaction Model
- Desktop uses a sticky timeline rail beside a sequence of version cards.
- The hero shows past, present, and future as folded panels so the visitor understands the full product arc before scrolling.
- Timeline nodes jump to product moments: Origin, Version 1, Present, Next, and Future.
- The "Jump to present" control is repeated in the header, drawer, hero, and rail because the current product state is the default sales conversation.
- Keyboard support uses `Alt + ArrowRight` / `Alt + ArrowDown` for later eras, `Alt + ArrowLeft` / `Alt + ArrowUp` for earlier eras, and `Alt + Home` to return to Present.
- Mobile changes to a vertical-first story with horizontally swipeable era cards, sticky era tabs, and clear Earlier/Later buttons.

## Visual System
- Night base: `#18181B`
- Future blue: `#3B82F6`
- Present white: `#FFFFFF`
- Past amber: `#D97706`
- Subtle gray: `#E4E4E7`
- Inter is used for product text, body copy, buttons, and interface details.
- Space Grotesk is used for timeline labels, large product headlines, and version markers.
- Radius stays at `8px` to preserve a crisp B2B product feel.

## Layout
- The top navigation is sticky and includes a hamburger drawer below tablet width.
- The hero uses a two-column CSS Grid layout with the folded product panels as the first-viewport signal.
- The timeline section uses a sticky left rail and a flexible story track on desktop.
- Product panels are intentionally abstracted UI previews, not fake screenshots, so teams can adapt the content to any SaaS or product platform.
- Mobile uses scroll snap for era cards, keeping the current era visible through the sticky indicator.

## Content Strategy
The story is written for a realistic B2B product named Timefold:
- Past: disconnected launch rooms and the discovery that teams need decision memory.
- Present: operational product memory, decision receipts, stakeholder lenses, and active product rooms.
- Future: predictive release intelligence, scenario planning, and autonomous roadmap review.

## Accessibility
- Semantic HTML5 sections, header, nav, aside, main, articles, and footer are used.
- Timeline nodes are real buttons and update `aria-current`.
- Focus states use a high-contrast future-blue outline.
- Reduced-motion users get immediate scrolling and no decorative transform transitions.
- Swipe controls are backed by normal buttons for users who cannot or do not swipe.

## Adaptation Notes
- Replace Timefold copy with a real product's origin, present value, and roadmap narrative.
- Keep the "Jump to present" affordance when adapting; it is the anchor that makes scroll-as-time usable in sales contexts.
- Add analytics events to node clicks and era changes if measuring which product moments visitors inspect.
- If using real screenshots, preserve the same aspect and contrast discipline so they do not visually overpower the timeline.
