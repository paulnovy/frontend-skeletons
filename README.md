# 🏗️ Frontend Skeletons

> **100+ premium frontend foundations** — each with its own product identity, design book, and documentation.

A curated library of production-ready website skeletons built for different industries, use cases, and audiences. Not 100 color variants of the same template — each skeleton has a distinct layout, information architecture, visual mood, and user flow.

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/paulnovy/frontend-skeletons.git
cd frontend-skeletons

# Install
npm install

# Run dev server (browsable catalog)
npm run dev

# Build for production
npm run build

# Take screenshots (requires dev server running)
npm run screenshot
```

## 📁 Structure

```
frontend-skeletons/
├── index.html              # Browsable catalog of all skeletons
├── index-catalog.js         # Catalog data + filtering logic
├── skeletons-manifest.json  # Master list of all 100 skeletons
├── CATALOG.md               # Markdown catalog with links
├── templates/               # All skeleton folders
│   ├── aurora-ai-command-center/
│   │   ├── index.html       # Standalone skeleton page
│   │   ├── DESIGN_BOOK.md   # Design rationale & decisions
│   │   ├── README.md        # Usage documentation
│   │   └── screenshot.png   # Homepage screenshot
│   ├── lumen-finance-dashboard/
│   │   └── ...
│   └── ... (100+ skeletons)
├── scripts/
│   ├── generate-all.mjs     # Generate catalog + scaffold folders
│   └── screenshot-all.mjs   # Take PNG screenshots via Playwright
├── package.json
└── vite.config.js
```

## 🎨 Available Skeletons

See **[CATALOG.md](./CATALOG.md)** for the full list with categories, descriptions, and links.

**100 skeletons** across 25+ categories:

| Category | Examples |
|----------|----------|
| **AI & ML** | AI Command Center, AI Chat, Generative Art, Robotics Control |
| **Fintech** | Finance Dashboard, Crypto Exchange, Banking, Insurance, VC Fund |
| **E-commerce** | Commerce Admin, Food Delivery, Marketplace |
| **SaaS** | SaaS Landing, CRM, Onboarding, Pricing, Micro-SaaS |
| **Healthtech** | Patient Portal, Telemedicine, Pharmacy, Mental Health |
| **Developer Tools** | DevTools Hub, Dev Portal, Docs Portal, OSS Hub |
| **Edtech** | Learning Campus, Certification, Tutoring, Research |
| **Community** | Community Hub, Forum, Fan Community, Professional Network |
| **Enterprise** | CRM, ERP, Government Portal, Compliance |
| **Creative** | Portfolio, Agency, Design System, 3D Viewer, Font Library |
| **Climate Tech** | Carbon Dashboard, Sustainability Hub, Renewable Energy, Carbon Market |
| **Communication** | Team Chat, Discord Alternative, Slack Alternative |
| **Productivity** | Booking, Scheduling, Invoice, Project Management |
| **Security** | Cybersecurity, Privacy, IAM/SSO, Security Training |
| **Media** | Media Platform, Podcast Studio, Newsletter, Video Platform |
| And more... | Travel, Real Estate, HR, Events, Legal, Weather, Utility |

## 🛠️ How to Add a New Skeleton

1. Create a new folder in `templates/` using kebab-case: `templates/my-new-skeleton/`
2. Add `index.html` — standalone HTML with inline CSS and JS
3. Add `DESIGN_BOOK.md` — design rationale (see existing skeletons for format)
4. Add `README.md` — usage documentation
5. Add the entry to `skeletons-manifest.json`
6. Run `node scripts/generate-all.mjs` to update the catalog
7. Run `npm run screenshot` to generate the screenshot

### Naming Convention
- Folder names: `kebab-case`
- Format: `{brand}-{industry}-{type}` (e.g., `lumen-finance-dashboard`)
- Each name should be unique and evocative

### Quality Standards
Each skeleton must:
- Be valid HTML5 with semantic elements
- Be fully responsive (mobile-first)
- Have polished hover/focus/active states
- Use realistic mock content (NO lorem ipsum)
- Include CSS transitions for microinteractions
- Have a clear visual hierarchy
- Be 400-800 lines of quality code
- Use CSS custom properties for theming
- Include a mobile hamburger menu
- Have a footer credit: "Built with Frontend Skeletons"

## 📸 Screenshots

```bash
# Start dev server first
npm run dev

# In another terminal, take screenshots of all skeletons
npm run screenshot
```

Screenshots are saved as `screenshot.png` in each skeleton folder. The screenshot script uses Playwright at 1440×900 viewport with 2x device scale factor.

## 🧰 Tech Stack

- **Build:** Vite 6
- **Screenshots:** Playwright
- **Approach:** Each skeleton is a standalone HTML file with inline CSS and JS
- **External deps:** Google Fonts (optional, via CDN)
- **No frameworks:** Pure HTML, CSS, vanilla JS — maximum portability

## 📖 Design Books

Every skeleton includes a `DESIGN_BOOK.md` covering:
- Project type and intended audience
- Main user problem and UX assumptions
- User flow and page structure
- Key components and visual mood rationale
- Color usage, typography, and interaction rules
- Responsiveness and accessibility notes
- Potential commercial use cases

## 📜 License

MIT — use these skeletons as starting points for real projects.

---

*Built with care — each skeleton has its own product identity, not just a different background color.*
