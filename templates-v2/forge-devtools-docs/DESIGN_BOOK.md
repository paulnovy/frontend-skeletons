# Forge DevTools Docs — Design Book

## 1. Project Name
Forge DevTools Documentation Portal

## 2. Product Type
Developer tool documentation portal.

## 3. Intended Audience
Developers evaluating or using the Forge SDK — frontend, backend, and full-stack engineers.

## 4. User Problem
Developer docs are often slow, hard to navigate, and lack copy-pasteable quickstarts. Developers need fast access to code examples with version labels.

## 5. UX Concept
Quickstart must be copy-pasteable within 30 seconds. Add command copy buttons and version labels. Three-pane layout for efficient navigation.

## 6. Layout Structure
- **Hero**: Centered with version badge, quickstart terminal with copy buttons
- **Three-pane docs**: Left nav, center article, right table of contents
- **SDKs**: 4-column grid of language SDKs with version numbers
- **Changelog**: Timeline of recent releases
- **Community**: 3-column links (Discord, GitHub, Forum)

## 7. Typography System
- **UI**: Geist Sans — modern developer-focused sans-serif
- **Code**: JetBrains Mono — code blocks, terminal, inline code, versions
- **Long-form intros**: Source Serif 4 — readable serif for documentation prose

## 8. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Near black | #0B0F14 | Page background |
| Code panel | #111827 | Code blocks, terminal, cards |
| Neon green | #6EE7B7 | Primary accent, code text, versions |
| Blue | #60A5FA | Links, notes |
| Zinc | #D4D4D8 | Body text |
| White | #F8FAFC | Headings, emphasis |

## 9. Component System
- **Terminal**: macOS-style window with copy-pasteable commands
- **Code blocks**: Dark panels with syntax-highlighted code
- **Nav sidebar**: Grouped documentation links
- **Table of contents**: Right-side page anchor links
- **SDK cards**: Language icon + name + version
- **Changelog items**: Version + description + date
- **Copy buttons**: One-click code copying

## 10. Interaction Rules
- Copy buttons on all code blocks
- Hover states on nav links and cards
- Focus-visible with green outline
- Drawer navigation on mobile
- Escape to close drawer

## 11. Responsive Behavior
- **Desktop (1400px+)**: Full 3-pane layout
- **Tablet (1024px)**: Single column, nav hidden, drawer
- **Mobile (768px)**: Compact hero, stacked sections

## 12. Accessibility Notes
- Semantic landmarks and ARIA labels
- Skip link to article content
- prefers-reduced-motion support
- Code blocks are scrollable (not clipped)

## 13. Performance Notes
- Single HTML file, no external dependencies beyond Google Fonts
- CSS-only visual elements
- Minimal JS for drawer and copy buttons

## 14. Commercial Use Cases
- SDK/API documentation sites
- Developer portal homepages
- Open source project docs
- Internal developer tooling docs
