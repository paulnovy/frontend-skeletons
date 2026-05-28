# Atlas AI Command Center

A premium AI operations dashboard skeleton for enterprise teams running production model fleets.

## Features
- Three-column command center layout (sidebar, bento grid, activity rail)
- Live operational summary with status chips, risk scores, and next-best actions
- AI recommendations with confidence scores
- Agent fleet monitoring with health metrics
- Cost allocation tracking
- Responsive: tablet collapses to 2 columns, mobile becomes vertical card sequence

## Design Tokens
- **Colors**: Deep graphite #070A0F, cloud slate #1B2333, electric cyan #4DE3FF, signal lime #C7FF6B, warning amber #FFB84D, soft white #F4F7FB
- **Fonts**: Space Grotesk (headings), Inter (UI), IBM Plex Mono (metrics)
- **Border radius**: 10px cards, 6px small elements

## Structure
```
/templates-v2/atlas-ai-command-center/
  index.html        ← standalone HTML, inline CSS+JS
  DESIGN_BOOK.md    ← full design specification
  README.md         ← this file
  screenshot.png    ← (pending)
```

## Accessibility
- Semantic HTML landmarks
- Skip link to main content
- ARIA labels on all regions
- Keyboard-friendly navigation
- prefers-reduced-motion fallback
- Visible focus states

## Responsive Breakpoints
- Desktop: 1440px (3-column)
- Tablet: 1024px (sidebar hidden, drawer nav)
- Mobile: 768px (single column)
- Small: 480px (compact KPIs)
