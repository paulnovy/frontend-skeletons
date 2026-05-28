# Design Book — InkLine Editorial Media

## 1. Project Overview
InkLine is a digital magazine and editorial media platform designed for long-form journalism, investigative reporting, and multimedia storytelling. The site prioritizes reading comfort, content discovery, and visual hierarchy to guide readers through a curated editorial experience.

## 2. Design Philosophy
**"Read first, everything else second."** Every design decision serves the reader. Typography drives hierarchy. White space provides breathing room. Color signals meaning — crimson for urgency, cobalt for technology. The asymmetric layout creates visual rhythm that mirrors editorial pacing.

## 3. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Paper | `#FAF7F0` | Page background — warm, not sterile |
| Ink | `#111111` | Primary text, headers, borders |
| Crimson | `#B91C1C` | Accent, topic tags (investigation), CTAs, active nav |
| Cobalt | `#1D4ED8` | Technology tags, audio icons, links |
| Warm Gray | `#D6D3D1` | Borders, image placeholders, dividers |
| Charcoal | `#27272A` | Secondary text, footer, body copy |

### Palette Rules
- Background is always Paper — never white
- Text contrast ratio ≥ 7:1 on Paper backgrounds
- Crimson is reserved for editorial emphasis and action — never for body text
- Cobalt exclusively marks technology and audio content

## 4. Typography
**Headlines:** Newsreader — a serif with editorial character, optical sizing 6–72pt
**Body/UI:** Inter — geometric sans-serif optimized for screen reading

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Logo | Newsreader | 700 | 2rem |
| Lead headline | Newsreader | 700 | 2.5rem |
| Section headlines | Newsreader | 600 | 1.5rem |
| Rail headlines | Newsreader | 600 | 1.05rem |
| Body text | Inter | 400 | 0.9–1.1rem |
| UI labels | Inter | 600 | 0.7–0.8rem |
| Metadata | Inter | 400 | 0.8rem |

### Reading Experience
- Line height: 1.6–1.7 for body text
- Max content width: ~720px for reading sections
- Letter-spacing tightened slightly on headlines (-0.01em to -0.02em)

## 5. Layout System
### Lead Story
- Two-column split: 50/50 image and text
- Full-width on mobile with stacked layout
- Minimum image height: 480px (desktop), 260px (mobile)

### Asymmetric Grid
- Three-column layout: 1.4fr / 1fr / 1fr
- Left card spans two rows (tall card)
- Single column on mobile
- Gap: 1.5rem

### Topic Rails
- Four-column card grid per rail
- Responsive: 2 columns on tablet, 1 on mobile
- Section headers with "View all" links

## 6. Components
### Topic Tags
- Bordered pill labels (1.5px border)
- Crimson for investigative/editorial content
- Cobalt for technology and audio
- Position: top-left of images, or above headlines

### Reading Time
- Displayed as "X min read" with crimson dot indicator
- Always visible next to byline

### Audio Hybrid Cards
- Play button (cobalt circle) + article title + duration
- Combines audio and text content in a single card
- Supports listen-and-read experience

### Newsletter Block
- Full-width dark (Ink) background
- Centered form with email input and crimson CTA
- White text on dark for maximum contrast

## 7. Navigation
- Header: logo (left), date (center), search + subscribe (right)
- Nav bar: uppercase section links with crimson active/hover indicator
- Horizontal scroll on mobile
- Clean separation via top/bottom borders

## 8. Responsive Breakpoints
| Breakpoint | Layout Changes |
|------------|---------------|
| > 768px | Full desktop layout — two-column lead, 3-col grid, 4-col rails |
| ≤ 768px | Single-column lead, 1-col grid, 2-col rails, stacked footer |
| ≤ 480px | Single-column everything, simplified nav |

## 9. Interactions
- **Hover on nav:** Crimson underline slide-in
- **Hover on subscribe button:** Darker crimson (#991B1B)
- **Hover on footer social:** Border and text color shift to crimson
- **Audio play button:** Visual feedback on click (handled by JS)
- **Topic tags:** Static — no hover state (they are labels, not buttons)

## 10. Accessibility
- All interactive elements have visible focus states
- Color contrast ≥ 7:1 for body text, ≥ 4.5:1 for accent elements
- Semantic HTML: `<article>`, `<nav>`, `<header>`, `<footer>`, `<section>`
- ARIA labels on icon-only buttons (search, social links)
- Audio elements include text transcripts alongside

## 11. Content Strategy
- Lead story changes daily — always the strongest piece of journalism
- Featured stories rotate based on editorial priority
- Topic rails maintain consistent section coverage
- Audio articles complement long-form text pieces
- Newsletter promotes 3–5 stories daily with editorial commentary

## 12. Performance Considerations
- Fonts loaded via Google Fonts with `display=swap`
- SVG placeholders reduce initial page weight
- CSS-only layout — no JavaScript required for core rendering
- Images should use lazy loading in production

## 13. Editorial Principles
- Reading time is never hidden — readers deserve to know their commitment
- Topic labels are always visible — readers should never be surprised by content category
- Author bylines include name and date — accountability matters
- Audio and text are presented as equal formats — neither is secondary

## 14. Future Enhancements
- Dark mode (inverted Paper/Ink palette)
- Reader comments with threading
- Bookmark and reading list functionality
- Personalized topic rails based on reading history
- Podcast integration with chapter markers
