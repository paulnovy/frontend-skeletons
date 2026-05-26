import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../templates/", import.meta.url).pathname;

const templates = [
  {
    slug: "lumen-insurance-tech",
    title: "Lumen Insurance Tech",
    category: "Insurance Platform",
    palette: "White and teal",
    mood: "clinical, trustworthy, operational",
    bg: "#f6fbfb",
    surface: "#ffffff",
    ink: "#102a2c",
    muted: "#6b7d80",
    line: "#d8eceb",
    accent: "#0f9f94",
    accent2: "#044f54",
    danger: "#e05252",
    font: "Inter",
    mono: "IBM Plex Mono",
    layout: "platform",
    nav: ["Policies", "Claims", "Risk", "Brokers"],
    heroEyebrow: "Policy operations cockpit",
    heroTitle: "Bind policies, score risk, and resolve claims from one calm workspace.",
    heroCopy: "Lumen gives underwriters and claims leads a shared operating layer with policy health, loss signals, SLA pressure, and broker context visible before every decision.",
    primaryCta: "Review risk queue",
    secondaryCta: "Open claims desk",
    stats: [["$84.2M", "active premium"], ["12 min", "median claim triage"], ["96.8%", "renewal retention"], ["31", "high-risk renewals"]],
    cardsTitle: "Policy cards",
    cards: [
      ["Mariner Logistics", "Commercial fleet", "Renewal in 18 days", "Risk score 72", "78%"],
      ["Northline Dental Group", "Professional liability", "Evidence received", "Risk score 41", "43%"],
      ["Solace Hotel Partners", "Property package", "Inspection flagged", "Risk score 86", "88%"],
    ],
    activityTitle: "Claims list",
    activities: [
      ["CLM-4082", "Water damage, Solace Hotel Partners", "$148,400 reserve", "Adjuster assigned"],
      ["CLM-4077", "Fleet collision, Mariner Logistics", "$32,900 reserve", "Awaiting police report"],
      ["CLM-4069", "Data incident, Northline Dental", "$71,200 reserve", "Counsel review"],
      ["CLM-4058", "Roof inspection supplement", "$18,600 reserve", "Ready to close"],
    ],
    panelTitle: "Risk assessment",
    panelItems: ["Loss ratio drift detected in hospitality properties", "Broker notes mention two vacant floors", "Satellite roof imagery is older than 120 days", "Recommended: bind with inspection contingency"],
    footer: "Built with Frontend Skeletons for insurance technology teams.",
  },
  {
    slug: "lumen-neobank-business",
    title: "Lumen Neobank Business",
    category: "Business Banking",
    palette: "White and dark blue",
    mood: "precise, secure, finance-grade",
    bg: "#f5f8fc",
    surface: "#ffffff",
    ink: "#0b1b33",
    muted: "#63718a",
    line: "#dbe4f0",
    accent: "#1455d9",
    accent2: "#071a3d",
    danger: "#d54848",
    font: "Inter",
    mono: "IBM Plex Mono",
    layout: "platform",
    nav: ["Accounts", "Cards", "Expenses", "Books"],
    heroEyebrow: "Business money workspace",
    heroTitle: "Operate accounts, approvals, expenses, and books without banking tab sprawl.",
    heroCopy: "A neobank interface for finance teams that need spend control, accountant-ready exports, and clear multi-user permissions across every company wallet.",
    primaryCta: "Approve payments",
    secondaryCta: "Sync accounting",
    stats: [["$412K", "available cash"], ["18", "pending approvals"], ["7", "team wallets"], ["99.4%", "auto-matched receipts"]],
    cardsTitle: "Multi-user accounts",
    cards: [
      ["Operations wallet", "A/P and vendors", "$128,450 balance", "3 approvers", "67%"],
      ["Marketing spend", "Campaign cards", "$48,980 balance", "Budget alert", "81%"],
      ["Payroll reserve", "Protected account", "$234,700 balance", "Locked until Friday", "54%"],
    ],
    activityTitle: "Expense management",
    activities: [
      ["EXP-9128", "Figma annual plan", "$7,200", "Matched to software"],
      ["EXP-9122", "Berlin customer dinner", "$486", "Needs attendee list"],
      ["EXP-9119", "AWS marketplace", "$11,840", "CFO approval"],
      ["EXP-9108", "Notion seats", "$1,188", "Ready for Xero"],
    ],
    panelTitle: "Accounting sync",
    panelItems: ["Xero connection healthy", "83 receipts categorized automatically", "VAT rates verified for EU vendors", "Month-end packet estimated in 11 minutes"],
    footer: "Built with Frontend Skeletons for business banking products.",
  },
  {
    slug: "muse-3d-viewer",
    title: "Muse 3D Viewer",
    category: "3D Model Viewer",
    palette: "Dark and gray",
    mood: "technical, cinematic, inspection-focused",
    bg: "#0c0e12",
    surface: "#171a21",
    ink: "#eef1f6",
    muted: "#9ca6b7",
    line: "#2b303b",
    accent: "#8bd3ff",
    accent2: "#d6dde8",
    danger: "#ff6b6b",
    font: "Inter",
    mono: "IBM Plex Mono",
    layout: "viewer",
    nav: ["Scene", "Measure", "Annotations", "Export"],
    heroEyebrow: "Review scene",
    heroTitle: "Inspect complex models with measurements, issue pins, and client-ready annotations.",
    heroCopy: "Muse Viewer is a premium dark UI for design reviews, industrial QA, and asset handoff, with the model canvas treated as the primary workspace.",
    primaryCta: "Place annotation",
    secondaryCta: "Measure span",
    stats: [["2.4M", "triangles loaded"], ["14", "annotations"], ["0.02m", "measure tolerance"], ["6", "material variants"]],
    cardsTitle: "Canvas tools",
    cards: [
      ["Exploded assembly", "Layer state", "Housing / rotor / seal", "Camera saved", "73%"],
      ["Measurement set", "Distance tools", "Valve span: 1.84m", "Tolerance ok", "64%"],
      ["Material pass", "Surface review", "Anodized graphite", "Spec verified", "89%"],
    ],
    activityTitle: "Annotations panel",
    activities: [
      ["PIN-014", "Chamfer edge needs supplier confirmation", "Rotor housing", "Open"],
      ["PIN-013", "Cable path collides with rear bracket", "Assembly bay", "Blocked"],
      ["PIN-011", "Surface roughness approved", "Valve body", "Resolved"],
      ["PIN-008", "Add gasket variant before export", "Seal layer", "Review"],
    ],
    panelTitle: "Measurement tools",
    panelItems: ["Point-to-point, angle, and radius modes visible", "Units can switch between metric and imperial", "Section plane is active at 38%", "Export package includes marked screenshots"],
    footer: "Built with Frontend Skeletons for 3D product review teams.",
  },
  {
    slug: "muse-creative-suite",
    title: "Muse Creative Suite",
    category: "Creative Workspace",
    palette: "Dark with multi-accent",
    mood: "expressive, organized, collaborative",
    bg: "#101016",
    surface: "#191923",
    ink: "#f5f2ff",
    muted: "#aaa6bc",
    line: "#2d2a3a",
    accent: "#ff6bb5",
    accent2: "#7c5cff",
    danger: "#ffb155",
    font: "Inter",
    mono: "Space Mono",
    layout: "creative",
    nav: ["Boards", "Assets", "Reviews", "Team"],
    heroEyebrow: "Campaign control room",
    heroTitle: "Plan concepts, organize assets, and move approvals without creative chaos.",
    heroCopy: "A studio-grade workspace for brand teams running launches across boards, shared asset libraries, comments, and delivery milestones.",
    primaryCta: "Open launch board",
    secondaryCta: "Review assets",
    stats: [["38", "active projects"], ["412", "approved assets"], ["9", "stakeholders online"], ["24h", "review cycle"]],
    cardsTitle: "Project boards",
    cards: [
      ["Summer retail launch", "Campaign board", "18 cards in production", "Creative due Friday", "76%"],
      ["Brand system refresh", "Design ops", "Token audit running", "Legal review", "58%"],
      ["Product film package", "Motion board", "Grade pass uploaded", "Client notes", "83%"],
    ],
    activityTitle: "Asset library",
    activities: [
      ["AST-2041", "Hero product render v12", "Approved", "Motion"],
      ["AST-2038", "Email header set", "Needs copy lock", "CRM"],
      ["AST-2031", "Retail key visual", "Color pass", "Brand"],
      ["AST-2024", "OOH crop matrix", "Delivered", "Media"],
    ],
    panelTitle: "Collaboration",
    panelItems: ["Four review threads need final owner decisions", "Campaign copy is locked for localization", "Usage rights expire in 118 days for one image set", "Client presentation deck generated at 09:30"],
    footer: "Built with Frontend Skeletons for creative operations teams.",
  },
  {
    slug: "muse-font-library",
    title: "Muse Font Library",
    category: "Typography Showcase",
    palette: "White and black",
    mood: "editorial, exacting, typographic",
    bg: "#f7f7f4",
    surface: "#ffffff",
    ink: "#111111",
    muted: "#707070",
    line: "#deded8",
    accent: "#111111",
    accent2: "#4b4b4b",
    danger: "#b83232",
    font: "Inter",
    mono: "IBM Plex Mono",
    layout: "type",
    nav: ["Specimens", "Pairings", "Licenses", "Generator"],
    heroEyebrow: "Typography library",
    heroTitle: "Compare specimens, build pairings, and ship clean webfont kits.",
    heroCopy: "Muse Font Library gives designers and engineers a precise type browsing surface with usage guidance, licensing signals, and production-ready CSS output.",
    primaryCta: "Build pairing",
    secondaryCta: "Generate webfont",
    stats: [["1,248", "font families"], ["74", "variable fonts"], ["18", "language sets"], ["36KB", "median subset"]],
    cardsTitle: "Font specimens",
    cards: [
      ["Nocturne Sans", "UI and editorial", "14 weights", "Latin Extended", "69%"],
      ["Ledger Serif", "Reports and essays", "8 weights", "High contrast", "82%"],
      ["Foundry Mono", "Code and data", "6 weights", "Tabular figures", "57%"],
    ],
    activityTitle: "Pairing suggestions",
    activities: [
      ["PAIR-118", "Nocturne Sans + Ledger Serif", "SaaS editorial", "A grade"],
      ["PAIR-112", "Foundry Mono + Nocturne Sans", "Analytics UI", "A- grade"],
      ["PAIR-109", "Ledger Serif + Civic Grotesk", "Culture site", "B+ grade"],
      ["PAIR-101", "Atlas Condensed + Nocturne Sans", "Campaign", "A grade"],
    ],
    panelTitle: "Webfont generator",
    panelItems: ["Subset includes Polish, German, and French glyphs", "Preload tags generated for two weights", "Fallback stack tuned for x-height match", "CSS variables prepared for headings, body, and data"],
    footer: "Built with Frontend Skeletons for typography-led product teams.",
  },
  {
    slug: "nova-mobile-banking",
    title: "Nova Mobile Banking",
    category: "Mobile-first Banking",
    palette: "White and teal",
    mood: "touch-friendly, personal, secure",
    bg: "#eaf7f6",
    surface: "#ffffff",
    ink: "#0d2b2f",
    muted: "#668083",
    line: "#cde7e5",
    accent: "#00a99d",
    accent2: "#063d44",
    danger: "#e25757",
    font: "Inter",
    mono: "IBM Plex Mono",
    layout: "mobile",
    nav: ["Home", "Cards", "Pay", "Profile"],
    heroEyebrow: "Personal banking",
    heroTitle: "A banking home screen built for thumbs, balances, cards, and fast transfers.",
    heroCopy: "Nova focuses the first viewport on spendable balance, card controls, upcoming payments, and a swipe-friendly account carousel for modern mobile banking.",
    primaryCta: "Send money",
    secondaryCta: "Freeze card",
    stats: [["$8,420", "checking"], ["$2,180", "saved this month"], ["3", "active cards"], ["0", "fraud alerts"]],
    cardsTitle: "Card carousel",
    cards: [
      ["Everyday debit", "Teal virtual card", "•••• 2941", "Tap limit $500", "64%"],
      ["Travel card", "FX friendly", "•••• 1180", "No fees in EU", "42%"],
      ["Savings pocket", "Goal wallet", "$12,400", "Tokyo trip", "71%"],
    ],
    activityTitle: "Recent activity",
    activities: [
      ["TODAY", "Green Bean Coffee", "-$5.80", "Food"],
      ["TODAY", "Salary from Northstar", "+$4,820.00", "Income"],
      ["MON", "Rent transfer", "-$1,950.00", "Housing"],
      ["SUN", "Round-up savings", "-$18.40", "Saved"],
    ],
    panelTitle: "Touch controls",
    panelItems: ["Large tap targets across primary actions", "Card carousel uses snap points", "Bottom navigation remains reachable", "Security status stays visible above transfers"],
    footer: "Built with Frontend Skeletons for mobile banking teams.",
  },
  {
    slug: "nova-payment-gateway",
    title: "Nova Payment Gateway",
    category: "Payment Processing",
    palette: "White and blue",
    mood: "real-time, reliable, merchant-grade",
    bg: "#f5f9ff",
    surface: "#ffffff",
    ink: "#0f223d",
    muted: "#607089",
    line: "#d9e6f7",
    accent: "#1769ff",
    accent2: "#0a2f73",
    danger: "#db3d4c",
    font: "Inter",
    mono: "IBM Plex Mono",
    layout: "platform",
    nav: ["Transactions", "Merchants", "Fraud", "Payouts"],
    heroEyebrow: "Payments operations",
    heroTitle: "Monitor transactions, merchants, payouts, and fraud signals in real time.",
    heroCopy: "Nova Payment Gateway gives operations teams the live ledger, routing health, dispute queues, and merchant risk context they need in one responsive surface.",
    primaryCta: "View live monitor",
    secondaryCta: "Review merchants",
    stats: [["$2.8M", "processed today"], ["99.992%", "auth uptime"], ["214ms", "median latency"], ["11", "fraud alerts"]],
    cardsTitle: "Merchant management",
    cards: [
      ["BrightCart", "Retail merchant", "$482K weekly volume", "Low risk", "79%"],
      ["Metro Tickets", "Events merchant", "$214K weekly volume", "Velocity watch", "66%"],
      ["CloudBistro", "Food delivery", "$96K weekly volume", "Reserve active", "48%"],
    ],
    activityTitle: "Transaction monitor",
    activities: [
      ["TXN-88210", "BrightCart authorization", "$248.20", "Approved"],
      ["TXN-88206", "Metro Tickets 3DS challenge", "$119.00", "Authenticated"],
      ["TXN-88198", "CloudBistro refund", "$32.90", "Settled"],
      ["TXN-88191", "High velocity card pattern", "$1,842.00", "Blocked"],
    ],
    panelTitle: "Fraud alerts",
    panelItems: ["Velocity spike detected on prepaid BIN", "Two merchants exceed chargeback watch threshold", "Routing shifted 12% traffic to backup acquirer", "Payout hold recommended for one new account"],
    footer: "Built with Frontend Skeletons for payment infrastructure teams.",
  },
  {
    slug: "orbit-certification-platform",
    title: "Orbit Certification Platform",
    category: "Certification",
    palette: "White and orange",
    mood: "structured, motivating, credential-focused",
    bg: "#fff8f1",
    surface: "#ffffff",
    ink: "#2d1b0d",
    muted: "#806b5a",
    line: "#f0dcc8",
    accent: "#f47c20",
    accent2: "#8a3a06",
    danger: "#c24537",
    font: "Inter",
    mono: "IBM Plex Mono",
    layout: "learning",
    nav: ["Prep", "Practice", "Credentials", "Teams"],
    heroEyebrow: "Credential pathway",
    heroTitle: "Prepare learners for exams with practice tests, progress signals, and verified credentials.",
    heroCopy: "Orbit organizes certification prep into adaptive practice, exam readiness, renewal timelines, and employer-visible credential records.",
    primaryCta: "Start practice test",
    secondaryCta: "View credentials",
    stats: [["82%", "exam readiness"], ["14", "practice tests"], ["6", "credentials earned"], ["21d", "renewal window"]],
    cardsTitle: "Exam prep",
    cards: [
      ["Cloud Architect Pro", "Certification track", "5 modules complete", "Mock exam ready", "82%"],
      ["Security Foundations", "Skill path", "Weak area: IAM", "Coach assigned", "61%"],
      ["Data Analyst Associate", "Team cohort", "Quiz streak 11 days", "Credential pending", "74%"],
    ],
    activityTitle: "Practice tests",
    activities: [
      ["TEST-44", "Cloud network design", "86% score", "Passed"],
      ["TEST-41", "Identity policy simulation", "68% score", "Review needed"],
      ["TEST-38", "Incident response drill", "91% score", "Passed"],
      ["TEST-35", "Data visualization case", "79% score", "Retake available"],
    ],
    panelTitle: "Credentials",
    panelItems: ["Digital badge expires in 21 days", "Employer verification link generated", "Two prerequisites remain for advanced track", "Study plan adapts toward IAM and cost control"],
    footer: "Built with Frontend Skeletons for certification platforms.",
  },
  {
    slug: "orbit-tutoring-marketplace",
    title: "Orbit Tutoring Marketplace",
    category: "Tutoring Marketplace",
    palette: "White and green",
    mood: "warm, credible, learner-centered",
    bg: "#f5fbf5",
    surface: "#ffffff",
    ink: "#102817",
    muted: "#657a69",
    line: "#d8eadb",
    accent: "#28a745",
    accent2: "#0f5c2a",
    danger: "#d65545",
    font: "Inter",
    mono: "IBM Plex Mono",
    layout: "market",
    nav: ["Tutors", "Subjects", "Bookings", "Reviews"],
    heroEyebrow: "Tutor discovery",
    heroTitle: "Match students with vetted tutors, available sessions, and proof-rich reviews.",
    heroCopy: "Orbit gives families and adult learners a clean marketplace flow for tutor comparison, session booking, subject filters, and progress feedback.",
    primaryCta: "Find a tutor",
    secondaryCta: "Book session",
    stats: [["4.9/5", "average rating"], ["1,280", "verified tutors"], ["23", "subjects live"], ["8 min", "median match time"]],
    cardsTitle: "Tutor profiles",
    cards: [
      ["Maya Chen", "AP Calculus", "$72 / hour", "Next slot 16:30", "96%"],
      ["Jonas Weber", "German conversation", "$48 / hour", "Native speaker", "88%"],
      ["Priya Raman", "Python for teens", "$64 / hour", "Project-based", "91%"],
    ],
    activityTitle: "Session booking",
    activities: [
      ["BOOK-204", "AP Calculus diagnostic", "Today 16:30", "Confirmed"],
      ["BOOK-198", "Python portfolio review", "Wed 18:00", "Awaiting payment"],
      ["BOOK-191", "German B2 speaking", "Thu 09:00", "Confirmed"],
      ["BOOK-187", "SAT essay strategy", "Fri 17:15", "Reschedule offered"],
    ],
    panelTitle: "Reviews",
    panelItems: ["Maya improved exam confidence for 42 recent learners", "Session recordings are available for guardians", "Tutor response time averages under 20 minutes", "Green checks mark background and credential verification"],
    footer: "Built with Frontend Skeletons for tutoring marketplace teams.",
  },
  {
    slug: "pinnacle-agency-portfolio",
    title: "Pinnacle Agency Portfolio",
    category: "Agency Portfolio",
    palette: "Black with red accent",
    mood: "bold, editorial, commercially sharp",
    bg: "#050505",
    surface: "#111111",
    ink: "#f7f3ef",
    muted: "#aaa19b",
    line: "#2a2422",
    accent: "#ff2d2d",
    accent2: "#ffffff",
    danger: "#ff6b42",
    font: "Inter",
    mono: "Space Mono",
    layout: "portfolio",
    nav: ["Work", "Results", "Studio", "Contact"],
    heroEyebrow: "Independent digital agency",
    heroTitle: "Full-bleed case studies for brands that need proof, not theatre.",
    heroCopy: "Pinnacle presents commercial outcomes, immersive campaign imagery, and sharp project narratives for agency teams pitching serious clients.",
    primaryCta: "View case studies",
    secondaryCta: "Read results",
    stats: [["$184M", "client revenue influenced"], ["41%", "avg conversion lift"], ["12", "markets launched"], ["6", "awards shortlisted"]],
    cardsTitle: "Case studies",
    cards: [
      ["Vanta Retail", "Commerce redesign", "+38% checkout conversion", "Global rollout", "91%"],
      ["Aster Mobility", "Launch campaign", "2.8M qualified visits", "Brand film", "87%"],
      ["North Pier", "B2B platform", "4.2x demo requests", "Sales enablement", "76%"],
    ],
    activityTitle: "Client results",
    activities: [
      ["CASE-31", "Vanta Retail checkout system", "+$42M annualized", "Live"],
      ["CASE-28", "Aster Mobility market launch", "12 countries", "Published"],
      ["CASE-24", "North Pier demand engine", "4.2x demos", "Private"],
      ["CASE-19", "Luma Hotels brand rebuild", "+29 NPS", "Archived"],
    ],
    panelTitle: "Studio proof",
    panelItems: ["Each project pairs story, metrics, and execution detail", "Full-bleed visual sections avoid generic card galleries", "Red accent reserved for calls to action and quantified wins", "Footer includes direct new-business paths"],
    footer: "Built with Frontend Skeletons for agency portfolio teams.",
  },
];

function html(t) {
  const isDark = t.bg === "#050505" || t.bg === "#0c0e12" || t.bg === "#101016";
  const mobile = t.layout === "mobile";
  const portfolio = t.layout === "portfolio";
  const type = t.layout === "type";
  const viewer = t.layout === "viewer";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${t.title}</title>
  <meta name="description" content="${t.heroCopy}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=${t.font.replaceAll(" ", "+")}:wght@400;500;600;700;800&family=${t.mono.replaceAll(" ", "+")}:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: ${t.bg};
      --surface: ${t.surface};
      --ink: ${t.ink};
      --muted: ${t.muted};
      --line: ${t.line};
      --accent: ${t.accent};
      --accent-2: ${t.accent2};
      --danger: ${t.danger};
      --shadow: ${isDark ? "0 24px 70px rgba(0, 0, 0, .36)" : "0 24px 70px rgba(19, 45, 60, .12)"};
      --radius: 8px;
      --font: "${t.font}", system-ui, sans-serif;
      --mono: "${t.mono}", ui-monospace, monospace;
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      background:
        radial-gradient(circle at 18% 0%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 28rem),
        linear-gradient(180deg, color-mix(in srgb, var(--bg) 92%, white), var(--bg));
      color: var(--ink);
      font-family: var(--font);
      min-height: 100vh;
    }

    body.menu-open {
      overflow: hidden;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button,
    input,
    select {
      font: inherit;
    }

    button {
      cursor: pointer;
    }

    .skip-link {
      position: fixed;
      left: 1rem;
      top: -4rem;
      z-index: 10;
      background: var(--accent);
      color: ${isDark ? "#050505" : "#ffffff"};
      padding: .75rem 1rem;
      border-radius: var(--radius);
      transition: top .2s ease;
    }

    .skip-link:focus {
      top: 1rem;
    }

    .site-header {
      position: sticky;
      top: 0;
      z-index: 9;
      border-bottom: 1px solid color-mix(in srgb, var(--line) 82%, transparent);
      backdrop-filter: blur(18px);
      background: color-mix(in srgb, var(--bg) 78%, transparent);
    }

    .nav-shell {
      width: min(1180px, calc(100% - 32px));
      margin: 0 auto;
      min-height: 76px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: .7rem;
      font-weight: 800;
      letter-spacing: 0;
    }

    .brand-mark {
      width: 38px;
      height: 38px;
      display: grid;
      place-items: center;
      border-radius: 8px;
      background: linear-gradient(135deg, var(--accent), var(--accent-2));
      color: ${isDark ? "#050505" : "#ffffff"};
      box-shadow: 0 12px 30px color-mix(in srgb, var(--accent) 32%, transparent);
    }

    .desktop-nav {
      display: flex;
      align-items: center;
      gap: .3rem;
    }

    .desktop-nav a {
      color: var(--muted);
      font-size: .94rem;
      padding: .7rem .85rem;
      border-radius: 999px;
      transition: color .2s ease, background .2s ease;
    }

    .desktop-nav a:hover,
    .desktop-nav a:focus-visible {
      color: var(--ink);
      background: color-mix(in srgb, var(--accent) 10%, transparent);
      outline: none;
    }

    .nav-action {
      border: 1px solid var(--line);
      background: color-mix(in srgb, var(--surface) 88%, transparent);
      color: var(--ink);
      border-radius: 999px;
      padding: .72rem 1rem;
      transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
    }

    .nav-action:hover,
    .nav-action:focus-visible {
      transform: translateY(-1px);
      border-color: var(--accent);
      box-shadow: 0 12px 28px color-mix(in srgb, var(--accent) 14%, transparent);
      outline: none;
    }

    .menu-toggle {
      display: none;
      width: 44px;
      height: 44px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: var(--surface);
      color: var(--ink);
      place-items: center;
    }

    .menu-toggle span {
      width: 18px;
      height: 2px;
      background: currentColor;
      display: block;
      position: relative;
      transition: transform .2s ease;
    }

    .menu-toggle span::before,
    .menu-toggle span::after {
      content: "";
      position: absolute;
      left: 0;
      width: 18px;
      height: 2px;
      background: currentColor;
      transition: transform .2s ease, top .2s ease;
    }

    .menu-toggle span::before {
      top: -6px;
    }

    .menu-toggle span::after {
      top: 6px;
    }

    .menu-open .menu-toggle span {
      transform: rotate(45deg);
    }

    .menu-open .menu-toggle span::before {
      top: 0;
      transform: rotate(90deg);
    }

    .menu-open .menu-toggle span::after {
      top: 0;
      transform: rotate(90deg);
    }

    .mobile-panel {
      display: none;
      width: min(1180px, calc(100% - 32px));
      margin: 0 auto 1rem;
      border: 1px solid var(--line);
      background: var(--surface);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    .mobile-panel a {
      display: block;
      padding: 1rem;
      border-bottom: 1px solid var(--line);
      color: var(--muted);
    }

    .mobile-panel a:last-child {
      border-bottom: 0;
    }

    main {
      width: min(${mobile ? "430px" : "1180px"}, calc(100% - 32px));
      margin: 0 auto;
    }

    .hero {
      min-height: ${portfolio ? "82vh" : mobile ? "auto" : "620px"};
      padding: ${mobile ? "28px 0 22px" : "72px 0 48px"};
      display: grid;
      grid-template-columns: ${mobile ? "1fr" : "minmax(0, 1fr) minmax(340px, .86fr)"};
      gap: ${mobile ? "1rem" : "2rem"};
      align-items: center;
    }

    .hero-copy {
      display: grid;
      gap: 1.25rem;
      align-content: center;
    }

    .eyebrow {
      margin: 0;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: .12em;
      font-size: .75rem;
      font-weight: 800;
    }

    h1,
    h2,
    h3,
    p {
      margin-top: 0;
    }

    h1 {
      margin-bottom: 0;
      font-size: clamp(${mobile ? "2.25rem" : "3.25rem"}, 8vw, ${portfolio ? "6.8rem" : "5.7rem"});
      line-height: .96;
      letter-spacing: 0;
      max-width: 950px;
    }

    .hero-copy > p:not(.eyebrow) {
      color: var(--muted);
      font-size: clamp(1rem, 2vw, 1.22rem);
      line-height: 1.75;
      max-width: 690px;
      margin-bottom: 0;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: .75rem;
    }

    .button {
      min-height: 46px;
      border: 1px solid transparent;
      border-radius: 999px;
      padding: .86rem 1.1rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: .55rem;
      font-weight: 800;
      transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease, background .2s ease;
    }

    .button.primary {
      background: var(--accent);
      color: ${isDark || t.slug === "muse-font-library" ? "#050505" : "#ffffff"};
      box-shadow: 0 18px 36px color-mix(in srgb, var(--accent) 28%, transparent);
    }

    .button.secondary {
      background: color-mix(in srgb, var(--surface) 88%, transparent);
      color: var(--ink);
      border-color: var(--line);
    }

    .button:hover,
    .button:focus-visible {
      transform: translateY(-2px);
      box-shadow: 0 16px 34px color-mix(in srgb, var(--accent) 20%, transparent);
      outline: none;
    }

    .visual-shell {
      border: 1px solid color-mix(in srgb, var(--line) 88%, transparent);
      background: ${viewer || portfolio ? "linear-gradient(145deg, color-mix(in srgb, var(--surface) 94%, white), color-mix(in srgb, var(--surface) 82%, var(--accent)))" : "var(--surface)"};
      border-radius: ${portfolio ? "0" : "var(--radius)"};
      box-shadow: var(--shadow);
      overflow: hidden;
      min-height: ${mobile ? "580px" : viewer ? "520px" : "430px"};
      position: relative;
    }

    .visual-topbar {
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      border-bottom: 1px solid var(--line);
      color: var(--muted);
      font-family: var(--mono);
      font-size: .78rem;
    }

    .dots {
      display: flex;
      gap: .4rem;
    }

    .dots span {
      width: 9px;
      height: 9px;
      border-radius: 999px;
      background: var(--accent);
      opacity: .8;
    }

    .screen {
      padding: ${mobile ? "1rem" : "1.2rem"};
      display: grid;
      gap: 1rem;
    }

    .balance-card {
      border-radius: var(--radius);
      padding: 1.1rem;
      color: ${isDark ? "var(--ink)" : "#ffffff"};
      background:
        linear-gradient(135deg, var(--accent-2), var(--accent)),
        radial-gradient(circle at 80% 0%, rgba(255,255,255,.26), transparent 16rem);
      min-height: ${mobile ? "170px" : "150px"};
      display: grid;
      align-content: space-between;
      overflow: hidden;
      position: relative;
    }

    .balance-card::after {
      content: "";
      position: absolute;
      right: -60px;
      bottom: -80px;
      width: 210px;
      height: 210px;
      border: 1px solid rgba(255,255,255,.24);
      border-radius: 50%;
    }

    .balance-card small {
      position: relative;
      z-index: 1;
      font-family: var(--mono);
      opacity: .78;
    }

    .balance-card strong {
      position: relative;
      z-index: 1;
      display: block;
      font-size: 2rem;
      line-height: 1;
      margin-top: .55rem;
    }

    .mini-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: .8rem;
    }

    .mini-card {
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: color-mix(in srgb, var(--surface) 94%, transparent);
      padding: 1rem;
      min-height: 104px;
      transition: transform .2s ease, border-color .2s ease;
    }

    .mini-card:hover {
      transform: translateY(-3px);
      border-color: var(--accent);
    }

    .mini-card span {
      display: block;
      color: var(--muted);
      font-size: .8rem;
      margin-bottom: .55rem;
    }

    .mini-card strong {
      font-size: 1.35rem;
    }

    .chart {
      height: 150px;
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: .8rem;
      display: flex;
      align-items: end;
      gap: .45rem;
      background: color-mix(in srgb, var(--bg) 45%, var(--surface));
    }

    .bar {
      flex: 1;
      min-width: 14px;
      border-radius: 6px 6px 2px 2px;
      background: linear-gradient(180deg, var(--accent), color-mix(in srgb, var(--accent-2) 82%, black));
      transform-origin: bottom;
      animation: rise .8s ease both;
    }

    .bar:nth-child(1) { height: 42%; animation-delay: .05s; }
    .bar:nth-child(2) { height: 68%; animation-delay: .1s; }
    .bar:nth-child(3) { height: 53%; animation-delay: .15s; }
    .bar:nth-child(4) { height: 84%; animation-delay: .2s; }
    .bar:nth-child(5) { height: 73%; animation-delay: .25s; }
    .bar:nth-child(6) { height: 92%; animation-delay: .3s; }
    .bar:nth-child(7) { height: 61%; animation-delay: .35s; }

    @keyframes rise {
      from { transform: scaleY(.25); opacity: .35; }
      to { transform: scaleY(1); opacity: 1; }
    }

    .section {
      padding: ${mobile ? "34px 0" : "58px 0"};
    }

    .section-head {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 1rem;
      margin-bottom: 1.4rem;
    }

    .section-head h2 {
      margin-bottom: 0;
      font-size: clamp(1.65rem, 4vw, 2.7rem);
      letter-spacing: 0;
    }

    .section-head p {
      color: var(--muted);
      margin-bottom: 0;
      max-width: 420px;
      line-height: 1.6;
    }

    .stat-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: .9rem;
    }

    .stat {
      border: 1px solid var(--line);
      background: color-mix(in srgb, var(--surface) 92%, transparent);
      border-radius: var(--radius);
      padding: 1.1rem;
      min-height: 118px;
    }

    .stat strong {
      display: block;
      font-size: 1.65rem;
      margin-bottom: .45rem;
    }

    .stat span {
      color: var(--muted);
      font-size: .88rem;
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }

    .work-card {
      border: 1px solid var(--line);
      background: color-mix(in srgb, var(--surface) 94%, transparent);
      border-radius: var(--radius);
      padding: 1.1rem;
      display: grid;
      gap: 1rem;
      min-height: 230px;
      transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
    }

    .work-card:hover {
      transform: translateY(-5px);
      border-color: var(--accent);
      box-shadow: 0 18px 44px color-mix(in srgb, var(--accent) 14%, transparent);
    }

    .work-card h3 {
      margin-bottom: .3rem;
      font-size: 1.15rem;
    }

    .work-card p {
      color: var(--muted);
      line-height: 1.55;
      margin-bottom: 0;
    }

    .progress {
      height: 8px;
      overflow: hidden;
      border-radius: 999px;
      background: color-mix(in srgb, var(--line) 75%, transparent);
    }

    .progress span {
      display: block;
      width: var(--value);
      height: 100%;
      background: linear-gradient(90deg, var(--accent), var(--accent-2));
    }

    .tag-row {
      display: flex;
      flex-wrap: wrap;
      gap: .45rem;
    }

    .tag {
      border: 1px solid var(--line);
      border-radius: 999px;
      color: var(--muted);
      padding: .38rem .58rem;
      font-size: .78rem;
    }

    .operations {
      display: grid;
      grid-template-columns: minmax(0, 1.25fr) minmax(300px, .75fr);
      gap: 1rem;
      align-items: start;
    }

    .activity-list,
    .insight-panel {
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: color-mix(in srgb, var(--surface) 94%, transparent);
      overflow: hidden;
    }

    .activity-row {
      display: grid;
      grid-template-columns: 96px minmax(0, 1fr) 126px 120px;
      gap: 1rem;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid var(--line);
      transition: background .2s ease;
    }

    .activity-row:hover {
      background: color-mix(in srgb, var(--accent) 8%, transparent);
    }

    .activity-row:last-child {
      border-bottom: 0;
    }

    .code {
      font-family: var(--mono);
      color: var(--accent);
      font-size: .82rem;
    }

    .activity-row strong {
      display: block;
      margin-bottom: .2rem;
    }

    .activity-row span,
    .activity-row em {
      color: var(--muted);
      font-style: normal;
      font-size: .88rem;
    }

    .status-pill {
      justify-self: end;
      border: 1px solid color-mix(in srgb, var(--accent) 34%, var(--line));
      background: color-mix(in srgb, var(--accent) 10%, transparent);
      color: var(--accent);
      border-radius: 999px;
      padding: .4rem .65rem;
      font-size: .78rem;
      font-weight: 800;
      white-space: nowrap;
    }

    .insight-panel {
      padding: 1.1rem;
    }

    .insight-panel h3 {
      margin-bottom: .9rem;
    }

    .check-list {
      display: grid;
      gap: .75rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .check-list li {
      display: grid;
      grid-template-columns: 24px 1fr;
      gap: .7rem;
      align-items: start;
      color: var(--muted);
      line-height: 1.45;
    }

    .check-list li::before {
      content: "";
      width: 18px;
      height: 18px;
      margin-top: .1rem;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: inset 0 0 0 5px color-mix(in srgb, var(--surface) 82%, transparent);
    }

    .toolbelt {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: .7rem;
    }

    .tool {
      border: 1px solid var(--line);
      background: color-mix(in srgb, var(--bg) 44%, var(--surface));
      border-radius: var(--radius);
      padding: .75rem;
      text-align: center;
      font-family: var(--mono);
      color: var(--muted);
      font-size: .75rem;
    }

    .proof-band {
      border: 1px solid var(--line);
      background: ${portfolio ? "linear-gradient(120deg, #151515, #300, #080808)" : "linear-gradient(135deg, color-mix(in srgb, var(--surface) 94%, transparent), color-mix(in srgb, var(--accent) 10%, var(--surface)))"};
      border-radius: ${portfolio ? "0" : "var(--radius)"};
      min-height: 280px;
      display: grid;
      grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
      overflow: hidden;
    }

    .proof-copy {
      padding: 1.4rem;
      display: grid;
      align-content: center;
    }

    .proof-copy h2 {
      font-size: clamp(1.8rem, 4vw, 3.5rem);
      margin-bottom: .7rem;
    }

    .proof-copy p {
      color: var(--muted);
      line-height: 1.7;
      margin-bottom: 0;
    }

    .proof-visual {
      min-height: 280px;
      display: grid;
      place-items: center;
      background:
        linear-gradient(135deg, transparent 0 38%, color-mix(in srgb, var(--accent) 26%, transparent) 38% 39%, transparent 39%),
        repeating-linear-gradient(90deg, color-mix(in srgb, var(--line) 42%, transparent) 0 1px, transparent 1px 42px);
      position: relative;
    }

    .orbital {
      width: min(280px, 70%);
      aspect-ratio: 1;
      border: 1px solid color-mix(in srgb, var(--accent) 68%, var(--line));
      border-radius: 50%;
      display: grid;
      place-items: center;
      animation: turn 9s linear infinite;
    }

    .orbital::before,
    .orbital::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      border: 1px solid color-mix(in srgb, var(--accent) 36%, transparent);
    }

    .orbital::before {
      width: 58%;
      height: 58%;
    }

    .orbital::after {
      width: 24%;
      height: 24%;
      background: var(--accent);
      box-shadow: 0 0 40px color-mix(in srgb, var(--accent) 38%, transparent);
    }

    @keyframes turn {
      to { transform: rotate(360deg); }
    }

    .site-footer {
      width: min(${mobile ? "430px" : "1180px"}, calc(100% - 32px));
      margin: 0 auto;
      padding: 34px 0 42px;
      color: var(--muted);
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      border-top: 1px solid var(--line);
      flex-wrap: wrap;
    }

    .site-footer strong {
      color: var(--ink);
    }

    @media (max-width: 920px) {
      .desktop-nav,
      .nav-action {
        display: none;
      }

      .menu-toggle {
        display: grid;
      }

      .menu-open .mobile-panel {
        display: block;
      }

      .hero {
        grid-template-columns: 1fr;
        min-height: auto;
        padding-top: 44px;
      }

      .visual-shell {
        min-height: 400px;
      }

      .stat-grid,
      .card-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .operations,
      .proof-band {
        grid-template-columns: 1fr;
      }

      .activity-row {
        grid-template-columns: 86px minmax(0, 1fr);
      }

      .activity-row em,
      .status-pill {
        justify-self: start;
      }
    }

    @media (max-width: 620px) {
      main,
      .site-footer,
      .nav-shell,
      .mobile-panel {
        width: min(${mobile ? "430px" : "100%"}, calc(100% - 24px));
      }

      .stat-grid,
      .card-grid,
      .mini-grid,
      .toolbelt {
        grid-template-columns: 1fr;
      }

      .section-head {
        display: grid;
      }

      .hero-actions .button {
        width: 100%;
      }

      .activity-row {
        grid-template-columns: 1fr;
      }

      .visual-shell {
        min-height: ${mobile ? "560px" : "360px"};
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: .001ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: .001ms !important;
      }
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="nav-shell">
      <a class="brand" href="#" aria-label="${t.title} home">
        <span class="brand-mark" aria-hidden="true">${t.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}</span>
        <span>${t.title}</span>
      </a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        ${t.nav.map((n) => `<a href="#${n.toLowerCase()}">${n}</a>`).join("\n        ")}
      </nav>
      <button class="nav-action" type="button">${t.primaryCta}</button>
      <button class="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded="false">
        <span aria-hidden="true"></span>
      </button>
    </div>
    <nav class="mobile-panel" aria-label="Mobile navigation">
      ${t.nav.map((n) => `<a href="#${n.toLowerCase()}">${n}</a>`).join("\n      ")}
    </nav>
  </header>

  <main id="main">
    <section class="hero" aria-labelledby="page-title">
      <div class="hero-copy">
        <p class="eyebrow">${t.heroEyebrow}</p>
        <h1 id="page-title">${t.heroTitle}</h1>
        <p>${t.heroCopy}</p>
        <div class="hero-actions" aria-label="Primary actions">
          <a class="button primary" href="#${t.nav[0].toLowerCase()}">${t.primaryCta}</a>
          <a class="button secondary" href="#${t.nav[1].toLowerCase()}">${t.secondaryCta}</a>
        </div>
      </div>

      <aside class="visual-shell" aria-label="${t.category} interface preview">
        <div class="visual-topbar">
          <div class="dots" aria-hidden="true"><span></span><span></span><span></span></div>
          <span>${t.category}</span>
        </div>
        <div class="screen">
          <div class="balance-card">
            <small>${t.heroEyebrow}</small>
            <strong>${t.stats[0][0]}</strong>
            <small>${t.stats[0][1]} · live workspace</small>
          </div>
          <div class="mini-grid">
            ${t.stats.slice(1).map((s) => `<div class="mini-card"><span>${s[1]}</span><strong>${s[0]}</strong></div>`).join("\n            ")}
            <div class="mini-card"><span>Active workflow</span><strong>${t.cards[0][0].split(" ")[0]}</strong></div>
          </div>
          <div class="chart" aria-label="Seven period activity chart">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </aside>
    </section>

    <section class="section" id="${t.nav[0].toLowerCase()}" aria-labelledby="metrics-title">
      <div class="section-head">
        <h2 id="metrics-title">${t.title} command layer</h2>
        <p>Executive numbers stay visible before the user drills into records, approvals, reviews, or operational queues.</p>
      </div>
      <div class="stat-grid">
        ${t.stats.map((s) => `<article class="stat"><strong>${s[0]}</strong><span>${s[1]}</span></article>`).join("\n        ")}
      </div>
    </section>

    <section class="section" id="${t.nav[1].toLowerCase()}" aria-labelledby="cards-title">
      <div class="section-head">
        <h2 id="cards-title">${t.cardsTitle}</h2>
        <p>Cards use compact hierarchy, hard-working metadata, and progress indicators that communicate state without extra explanation.</p>
      </div>
      <div class="card-grid">
        ${t.cards.map((c) => `<article class="work-card">
          <div>
            <h3>${c[0]}</h3>
            <p>${c[1]} · ${c[2]}</p>
          </div>
          <div class="tag-row">
            <span class="tag">${c[3]}</span>
            <span class="tag">${c[4]} complete</span>
          </div>
          <div class="progress" aria-label="${c[0]} progress"><span style="--value: ${c[4]}"></span></div>
        </article>`).join("\n        ")}
      </div>
    </section>

    <section class="section" id="${t.nav[2].toLowerCase()}" aria-labelledby="activity-title">
      <div class="section-head">
        <h2 id="activity-title">${t.activityTitle}</h2>
        <p>Dense rows support scanning, keyboard focus, and realistic operational copy instead of generic filler.</p>
      </div>
      <div class="operations">
        <div class="activity-list">
          ${t.activities.map((a) => `<article class="activity-row" tabindex="0">
            <span class="code">${a[0]}</span>
            <div><strong>${a[1]}</strong><span>${a[2]}</span></div>
            <em>${a[3]}</em>
            <span class="status-pill">${a[3]}</span>
          </article>`).join("\n          ")}
        </div>
        <aside class="insight-panel">
          <h3>${t.panelTitle}</h3>
          <ul class="check-list">
            ${t.panelItems.map((i) => `<li>${i}</li>`).join("\n            ")}
          </ul>
          <div class="toolbelt" aria-label="Quick tools">
            <div class="tool">${t.nav[0]}</div>
            <div class="tool">${t.nav[2]}</div>
            <div class="tool">${t.nav[3]}</div>
          </div>
        </aside>
      </div>
    </section>

    <section class="section" id="${t.nav[3].toLowerCase()}" aria-labelledby="proof-title">
      <div class="proof-band">
        <div class="proof-copy">
          <p class="eyebrow">${t.palette}</p>
          <h2 id="proof-title">${type ? "Typography stays production-ready." : viewer ? "Spatial review stays measurable." : portfolio ? "Case work earns the full viewport." : "Operational clarity scales across teams."}</h2>
          <p>${t.panelItems.join(" ")} The layout is intentionally complete enough for a sales demo, product sprint, or agency presentation.</p>
        </div>
        <div class="proof-visual" aria-hidden="true">
          <div class="orbital"></div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <span><strong>${t.title}</strong> · ${t.footer}</span>
    <span>Footer credit: Built with Frontend Skeletons</span>
  </footer>

  <script>
    const toggle = document.querySelector(".menu-toggle");
    const panel = document.querySelector(".mobile-panel");
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    panel.addEventListener("click", (event) => {
      if (event.target.matches("a")) {
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.querySelectorAll(".activity-row").forEach((row) => {
      row.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          row.classList.toggle("is-selected");
        }
      });
    });
  </script>
</body>
</html>
`;
}

function designBook(t) {
  return `# ${t.title} Design Book

## Skeleton name and project type
${t.title} is a premium ${t.category.toLowerCase()} skeleton for teams that need a polished product surface without framework dependencies.

## Intended audience
Product founders, agencies, design engineers, and frontend teams presenting or prototyping ${t.category.toLowerCase()} workflows.

## Main user problem solved
The page gives users immediate orientation, believable domain content, and a complete operational path from overview to specific action.

## UX assumptions and user flow
Users land with a goal already in mind, so the first screen prioritizes task context, measurable state, and direct actions. Navigation then moves through ${t.nav.join(", ").toLowerCase()} so the layout feels like a real product rather than a brochure.

## Page structure description
The file includes a sticky responsive header, hamburger menu, hero workspace preview, metric band, domain card grid, activity or review queue, decision panel, proof section, and footer credit.

## Key components list
- Semantic HTML5 landmarks
- Sticky navigation with desktop and mobile states
- Responsive hamburger menu with accessible expanded state
- Hero with action buttons and interface preview
- CSS-only chart and metric cards
- ${t.cardsTitle} card grid
- ${t.activityTitle} operational list
- ${t.panelTitle} insight panel
- Responsive proof band
- Footer credit

## Visual mood rationale
The intended mood is ${t.mood}. The layout uses restrained density, clean spacing, and deliberate accent placement so the interface feels premium and commercially credible.

## Color usage description
The palette is ${t.palette}. Primary accent \`${t.accent}\` is used for action, progress, and state. Secondary accent \`${t.accent2}\` deepens contrast. Neutral surfaces and borders keep the content readable.

## Typography choices
${t.font} provides modern interface clarity. ${t.mono} is used for IDs, numeric cues, and system-like labels where precision matters.

## Interaction rules
Hover states lift cards and clarify intent. Focus states are visible on links, buttons, and rows. Motion is short, functional, and disabled for reduced-motion preferences.

## Responsiveness approach
The layout starts from small screens, collapses grids thoughtfully, and keeps touch targets above comfortable size. ${t.layout === "mobile" ? "This template intentionally constrains the main canvas to a mobile banking width." : "Desktop uses wider grid composition while tablet and mobile move to single-column flows."}

## Accessibility notes
The page includes a skip link, semantic sections, labelled navigation, keyboard-operable activity rows, strong color contrast, and text labels that do not rely on color alone.

## Potential commercial use cases
- Investor-ready clickable prototype
- Agency presentation starter
- Product discovery workshop
- Frontend implementation baseline
- SaaS or marketplace dashboard concept
`;
}

function readme(t) {
  return `# ${t.title}

Category: ${t.category}

${t.title} is a standalone premium HTML skeleton for a ${t.category.toLowerCase()} experience. It includes inline CSS and JavaScript, responsive layouts, realistic mock content, polished interaction states, and footer credit.

## How to view
Open \`index.html\` in any modern browser.

## Key features
- Standalone HTML5 file with inline CSS and JS
- Google Fonts CDN only, no build step
- Responsive layout with hamburger menu
- CSS custom properties for theming
- CSS Grid and Flexbox composition
- Realistic ${t.category.toLowerCase()} content
- Hover, focus, and reduced-motion states
- Footer credit: Built with Frontend Skeletons

## Included files
- \`index.html\` - complete single-file skeleton
- \`DESIGN_BOOK.md\` - design rationale and implementation notes
- \`README.md\` - usage summary
`;
}

for (const t of templates) {
  const dir = join(root, t.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html(t));
  writeFileSync(join(dir, "DESIGN_BOOK.md"), designBook(t));
  writeFileSync(join(dir, "README.md"), readme(t));
}

console.log(`Generated ${templates.length} batch C templates.`);
