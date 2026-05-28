#!/usr/bin/env python3
"""Generate a skeleton HTML file. Usage: python3 _build.py <name> <title> <sections>"""
import sys, os

name = sys.argv[1] if len(sys.argv) > 1 else "summit-project-tracker"
title = name.replace("-", " ").title()
out = f"templates-v2/{name}/index.html"
os.makedirs(os.path.dirname(out), exist_ok=True)

L = []
def a(s=""): L.append(s)

a('<!DOCTYPE html>')
a('<html lang="en">')
a('<head>')
a('<meta charset="UTF-8">')
a('<meta name="viewport" content="width=device-width, initial-scale=1.0">')
a(f'<title>{title}</title>')
a('<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">')
a('<style>')

# CSS - minified base
css = """*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--cloud:#F6F8FC;--ink:#19212B;--indigo:#4F46E5;--cyan:#06B6D4;--lime:#A3E635;--coral:#FB7185}
body{font-family:'Inter',sans-serif;background:var(--cloud);color:var(--ink);line-height:1.5}
h1,h2,h3,h4,h5{font-family:'Manrope',sans-serif;font-weight:700}
a{color:var(--indigo);text-decoration:none}
button{cursor:pointer;font-family:inherit}
.skip-link{position:absolute;top:-40px;left:0;background:var(--indigo);color:#fff;padding:8px 16px;z-index:100}
.skip-link:focus{top:0}
.top-nav{position:sticky;top:0;z-index:50;display:flex;align-items:center;gap:16px;padding:0 24px;height:60px;background:#fff;border-bottom:1px solid #e5e7eb}
.nav-brand{font-family:'Manrope',sans-serif;font-weight:800;font-size:1.25rem;color:var(--indigo);display:flex;align-items:center;gap:8px}
.nav-brand svg{width:28px;height:28px}
.nav-links{display:flex;gap:4px;margin-left:24px}
.nav-links a{padding:8px 14px;border-radius:8px;font-size:0.875rem;font-weight:500;color:var(--ink)}
.nav-links a:hover,.nav-links a[aria-current="page"]{background:var(--cloud);color:var(--indigo)}
.nav-search{margin-left:auto;position:relative}
.nav-search input{width:220px;padding:8px 12px 8px 36px;border:1px solid #e5e7eb;border-radius:8px;font-size:0.875rem;background:var(--cloud)}
.nav-search svg{position:absolute;left:10px;top:50%;transform:translateY(-50%);width:16px;height:16px;color:#9ca3af}
.nav-cta{margin-left:12px;padding:8px 18px;background:var(--indigo);color:#fff;border:none;border-radius:8px;font-size:0.875rem;font-weight:600}
.hamburger{display:none;background:none;border:none;padding:8px}
.hamburger svg{width:24px;height:24px}
.drawer-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.4);z-index:60}
.drawer-overlay.open{display:block}
.drawer{position:fixed;top:0;left:0;width:280px;height:100%;background:#fff;z-index:70;transform:translateX(-100%);transition:transform 0.25s;padding:24px;overflow-y:auto}
.drawer.open{transform:translateX(0)}
.drawer-close{background:none;border:none;font-size:1.5rem;position:absolute;top:16px;right:16px}
.drawer nav{display:flex;flex-direction:column;gap:4px;margin-top:24px}
.drawer nav a{padding:10px 14px;border-radius:8px;font-size:0.9375rem}
@media(max-width:768px){.nav-links,.nav-search,.nav-cta{display:none}.hamburger{display:block}.top-nav{padding:0 16px}}
.kpi-strip{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;padding:24px}
.kpi-card{background:#fff;border-radius:12px;padding:20px;border:1px solid #e5e7eb}
.kpi-label{font-size:0.8125rem;color:#6b7280;margin-bottom:4px}
.kpi-value{font-family:'Manrope',sans-serif;font-size:1.75rem;font-weight:800}
.kpi-trend{font-size:0.8125rem;margin-top:4px}
.kpi-trend.up{color:#059669}
.kpi-trend.down{color:var(--coral)}
.main{padding:0 24px 48px}
.section-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
.section-header h2{font-size:1.25rem}
.badge{background:var(--cloud);padding:4px 12px;border-radius:20px;font-size:0.8125rem;font-weight:600}
.data-tbl{width:100%;border-collapse:collapse;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;margin-bottom:32px}
.data-tbl th{text-align:left;padding:12px 16px;font-size:0.8125rem;color:#6b7280;font-weight:600;border-bottom:1px solid #e5e7eb;background:var(--cloud)}
.data-tbl td{padding:12px 16px;font-size:0.875rem;border-bottom:1px solid #f3f4f6}
.data-tbl tr:last-child td{border-bottom:none}
.data-tbl tr:hover{background:var(--cloud)}
.badge-status{display:inline-block;padding:2px 10px;border-radius:20px;font-size:0.75rem;font-weight:600}
.st-active{background:#d1fae5;color:#065f46}
.st-review{background:#fef3c7;color:#92400e}
.st-planning{background:#dbeafe;color:#1d4ed8}
.st-blocked{background:#fee2e2;color:#991b1b}
.st-done{background:#ede9fe;color:#5b21b6}
.card-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin-bottom:32px}
.card{background:#fff;border-radius:12px;padding:20px;border:1px solid #e5e7eb}
.card h4{font-size:1rem;margin-bottom:8px}
.card p{font-size:0.8125rem;color:#6b7280}
.bar{height:6px;background:#e5e7eb;border-radius:3px;margin-top:8px}
.bar-fill{height:100%;border-radius:3px}
.team-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;margin-bottom:32px}
.team-card{background:#fff;border-radius:12px;padding:20px;border:1px solid #e5e7eb;text-align:center}
.team-avatar{width:48px;height:48px;border-radius:50%;background:var(--indigo);color:#fff;display:flex;align-items:center;justify-content:center;font-family:'Manrope',sans-serif;font-weight:700;font-size:1.125rem;margin:0 auto 12px}
.team-card h4{font-size:0.9375rem;margin-bottom:2px}
.team-card .role{font-size:0.8125rem;color:#6b7280;margin-bottom:8px}
.activity-list{display:flex;flex-direction:column;gap:8px;margin-bottom:32px}
.activity-item{background:#fff;border-radius:8px;padding:12px 16px;border:1px solid #e5e7eb;display:flex;align-items:center;gap:12px;font-size:0.875rem}
.activity-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.activity-time{margin-left:auto;font-size:0.75rem;color:#9ca3af}
.chart-box{background:#fff;border-radius:12px;padding:24px;border:1px solid #e5e7eb;margin-bottom:32px}
.chart-title{font-size:1rem;margin-bottom:4px}
.chart-sub{font-size:0.8125rem;color:#6b7280;margin-bottom:20px}
.bar-chart{display:flex;align-items:flex-end;gap:12px;height:200px;padding-bottom:28px;border-bottom:1px solid #e5e7eb}
.bar-group{flex:1;display:flex;flex-direction:column;align-items:center;height:100%;justify-content:flex-end}
.bar-stack{display:flex;flex-direction:column-reverse;width:100%;max-width:40px;gap:2px}
.bar-seg{border-radius:3px;min-height:4px}
.bar-lbl{font-size:0.6875rem;color:#6b7280;margin-top:8px}
.chart-legend{display:flex;gap:16px;margin-top:16px;font-size:0.8125rem}
.legend-item{display:flex;align-items:center;gap:6px}
.legend-dot{width:10px;height:10px;border-radius:3px}
.site-footer{padding:32px 24px;text-align:center;font-size:0.8125rem;color:#9ca3af;border-top:1px solid #e5e7eb;margin-top:48px}
:focus-visible{outline:2px solid var(--indigo);outline-offset:2px}
@media(prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}
@media(max-width:768px){.kpi-strip{grid-template-columns:repeat(2,1fr)}.card-grid,.team-grid{grid-template-columns:1fr}.data-tbl th,.data-tbl td{padding:8px 10px;font-size:0.8125rem}}"""

for line in css.split("\n"):
    a(line)

a('</style>')
a('</head>')
a('<body>')
a('<a href="#main" class="skip-link">Skip to content</a>')
a('<header class="top-nav">')
a('  <button class="hamburger" aria-label="Open menu" aria-expanded="false" onclick="document.getElementById(\'drawer\').classList.toggle(\'open\');document.getElementById(\'overlay\').classList.toggle(\'open\');this.setAttribute(\'aria-expanded\',document.getElementById(\'drawer\').classList.contains(\'open\'))">')
a('    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>')
a('  </button>')
a(f'  <a href="#" class="nav-brand">')
a('    <svg viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="20" height="20" rx="4" stroke="#4F46E5" stroke-width="2"/><path d="M9 14h10M14 9v10" stroke="#06B6D4" stroke-width="1.5"/></svg>')
a(f'    {title}')
a('  </a>')
a('  <nav class="nav-links" aria-label="Main">')
a('    <a href="#" aria-current="page">Dashboard</a>')
a('    <a href="#projects">Projects</a>')
a('    <a href="#kanban">Board</a>')
a('    <a href="#team">Team</a>')
a('    <a href="#timeline">Timeline</a>')
a('  </nav>')
a('  <div class="nav-search">')
a('    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>')
a('    <input type="search" title="Search projects" aria-label="Search projects">')
a('  </div>')
a('  <button class="nav-cta">+ New Project</button>')
a('</header>')
a('<div class="drawer-overlay" id="overlay" onclick="document.getElementById(\'drawer\').classList.remove(\'open\');this.classList.remove(\'open\')"></div>')
a('<aside class="drawer" id="drawer" role="dialog" aria-label="Navigation">')
a('  <button class="drawer-close" aria-label="Close menu" onclick="document.getElementById(\'drawer\').classList.remove(\'open\');document.getElementById(\'overlay\').classList.remove(\'open\')">&times;</button>')
a('  <nav><a href="#">Dashboard</a><a href="#projects">Projects</a><a href="#kanban">Board</a><a href="#team">Team</a><a href="#timeline">Timeline</a></nav>')
a('</aside>')

# KPI strip
a('<main id="main">')
a('  <div class="kpi-strip" role="region" aria-label="Key metrics">')
kpis = [
    ("Active Projects", "18", "↑ 3 this quarter"),
    ("Tasks In Progress", "142", "↑ 12 vs last week"),
    ("Completion Rate", "87%", "↑ 4% improvement"),
    ("Overdue Tasks", "7", "↓ 3 resolved"),
]
for label, val, trend in kpis:
    a(f'    <div class="kpi-card"><div class="kpi-label">{label}</div><div class="kpi-value">{val}</div><div class="kpi-trend{" up" if "↑" in trend else " down"}">{trend}</div></div>')
a('  </div>')
a('  <div class="main">')

# Projects table
a('    <section id="projects" aria-labelledby="projects-heading">')
a('      <div class="section-header">')
a('        <h2 id="projects-heading">Active Projects</h2>')
a('        <span class="badge">18 Projects</span>')
a('      </div>')
a('      <table class="data-tbl">')
a('        <thead><tr><th>Project</th><th>Lead</th><th>Status</th><th>Progress</th><th>Due Date</th><th>Team</th></tr></thead>')
a('        <tbody>')

projects = [
    ("Website Redesign", "Sarah Kim", "st-active", "Active", 78, "Mar 15", "6"),
    ("Mobile App v2", "James Park", "st-active", "Active", 45, "Apr 20", "8"),
    ("API Gateway Migration", "Lisa Wang", "st-review", "In Review", 92, "Feb 28", "4"),
    ("Data Pipeline Rebuild", "Mike Rodriguez", "st-active", "Active", 60, "May 10", "5"),
    ("Customer Portal", "Emma Johnson", "st-blocked", "Blocked", 33, "Mar 30", "7"),
    ("Analytics Dashboard", "David Lee", "st-planning", "Planning", 10, "Jun 15", "3"),
    ("Payment System v3", "Rachel Patel", "st-active", "Active", 55, "Apr 5", "6"),
    ("Search Engine Upgrade", "Alex Morgan", "st-done", "Completed", 100, "Feb 10", "4"),
    ("Notification Service", "Chris Taylor", "st-active", "Active", 82, "Mar 8", "3"),
    ("Auth Service Rewrite", "Jordan Blake", "st-review", "In Review", 95, "Feb 25", "5"),
    ("Email Campaign Tool", "Sam Rivera", "st-planning", "Planning", 5, "Jul 1", "4"),
    ("Inventory Module", "Casey Kim", "st-active", "Active", 40, "May 20", "5"),
    ("Reporting Engine", "Morgan Chen", "st-blocked", "Blocked", 20, "Apr 15", "3"),
    ("CDN Integration", "Taylor Swift", "st-done", "Completed", 100, "Jan 30", "2"),
    ("Load Testing Suite", "Riley Johnson", "st-active", "Active", 65, "Mar 25", "3"),
    ("CI/CD Pipeline", "Avery Davis", "st-active", "Active", 88, "Mar 1", "4"),
    ("Monitoring Setup", "Quinn Roberts", "st-planning", "Planning", 15, "Jun 30", "2"),
    ("Security Audit", "Blake Wilson", "st-active", "Active", 70, "Apr 10", "5"),
]

for proj, lead, st_cls, status, pct, due, team in projects:
    a(f'          <tr><td><strong>{proj}</strong></td><td>{lead}</td><td><span class="badge-status {st_cls}">{status}</span></td><td><div class="bar" style="width:120px;display:inline-block;vertical-align:middle"><div class="bar-fill" style="width:{pct}%;background:{"#059669" if pct==100 else "var(--indigo)" if pct>70 else "var(--cyan)" if pct>40 else "var(--coral)"}"></div></div> {pct}%</td><td>{due}</td><td>{team}</td></tr>')

a('        </tbody>')
a('      </table>')
a('    </section>')

# Kanban board
a('    <section id="kanban" aria-labelledby="kanban-heading">')
a('      <div class="section-header">')
a('        <h2 id="kanban-heading">Task Board</h2>')
a('        <span class="badge">Sprint 14</span>')
a('      </div>')
a('      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px;margin-bottom:32px">')

columns = [
    ("Backlog", "var(--ink)", [
        ("Research competitor pricing", "Analytics", "Low"),
        ("Draft API documentation", "Backend", "Medium"),
        ("Design onboarding flow", "Design", "Low"),
        ("Plan load test scenarios", "QA", "Medium"),
    ]),
    ("In Progress", "var(--indigo)", [
        ("Implement OAuth2 flow", "Backend", "High"),
        ("Build dashboard charts", "Frontend", "Medium"),
        ("Set up staging environment", "DevOps", "High"),
        ("Write E2E test suite", "QA", "Medium"),
        ("Mobile responsive fixes", "Frontend", "Low"),
    ]),
    ("Review", "var(--cyan)", [
        ("Payment gateway integration", "Backend", "High"),
        ("User profile redesign", "Design", "Medium"),
        ("Database migration scripts", "Backend", "High"),
    ]),
    ("Done", "#059669", [
        ("Set up CI/CD pipeline", "DevOps", "High"),
        ("Implement search API", "Backend", "Medium"),
        ("Create component library", "Frontend", "Low"),
        ("Configure monitoring", "DevOps", "Medium"),
        ("Security headers setup", "Backend", "High"),
        ("Email template system", "Frontend", "Low"),
    ]),
]

for col_name, col_color, tasks in columns:
    a(f'        <div style="background:var(--cloud);border-radius:12px;padding:16px">')
    a(f'          <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">')
    a(f'            <div style="width:8px;height:8px;border-radius:50%;background:{col_color}"></div>')
    a(f'            <h3 style="font-size:0.9375rem">{col_name}</h3>')
    a(f'            <span class="badge" style="margin-left:auto">{len(tasks)}</span>')
    a(f'          </div>')
    for task_name, task_dept, task_priority in tasks:
        priority_color = "#fee2e2" if task_priority == "High" else "#fef3c7" if task_priority == "Medium" else "#f3f4f6"
        priority_text = "#991b1b" if task_priority == "High" else "#92400e" if task_priority == "Medium" else "#6b7280"
        a(f'          <div style="background:#fff;border-radius:8px;padding:12px;margin-bottom:8px;border:1px solid #e5e7eb">')
        a(f'            <div style="font-size:0.875rem;font-weight:500;margin-bottom:4px">{task_name}</div>')
        a(f'            <div style="display:flex;justify-content:space-between;align-items:center">')
        a(f'              <span style="font-size:0.75rem;color:#6b7280">{task_dept}</span>')
        a(f'              <span style="font-size:0.6875rem;padding:2px 8px;border-radius:10px;background:{priority_color};color:{priority_text};font-weight:600">{task_priority}</span>')
        a(f'            </div>')
        a(f'          </div>')
    a(f'        </div>')

a('      </div>')
a('    </section>')

# Team section
a('    <section id="team" aria-labelledby="team-heading">')
a('      <div class="section-header">')
a('        <h2 id="team-heading">Team Allocation</h2>')
a('        <span class="badge">28 Members</span>')
a('      </div>')
a('      <div class="team-grid">')

team_members = [
    ("SK", "Sarah Kim", "Lead Designer", "var(--indigo)", 3, 85),
    ("JP", "James Park", "Mobile Lead", "var(--cyan)", 4, 90),
    ("LW", "Lisa Wang", "Backend Architect", "var(--lime)", 2, 75),
    ("MR", "Mike Rodriguez", "Data Engineer", "var(--coral)", 3, 80),
    ("EJ", "Emma Johnson", "Product Manager", "#8b5cf6", 5, 95),
    ("DL", "David Lee", "Full Stack", "#f59e0b", 2, 60),
    ("RP", "Rachel Patel", "Security Lead", "#ec4899", 3, 70),
    ("AM", "Alex Morgan", "Tech Lead", "#14b8a6", 4, 88),
]

for initials, name, role, color, projects_count, util in team_members:
    a(f'        <div class="team-card">')
    a(f'          <div class="team-avatar" style="background:{color}">{initials}</div>')
    a(f'          <h4>{name}</h4>')
    a(f'          <div class="role">{role}</div>')
    a(f'          <div style="font-size:0.8125rem;color:#6b7280;margin-bottom:4px">{projects_count} projects · {util}% utilized</div>')
    a(f'          <div class="bar"><div class="bar-fill" style="width:{util}%;background:{color}"></div></div>')
    a(f'        </div>')

a('      </div>')
a('    </section>')

# Timeline / milestones
a('    <section id="timeline" aria-labelledby="timeline-heading">')
a('      <div class="section-header">')
a('        <h2 id="timeline-heading">Milestones & Timeline</h2>')
a('        <span class="badge">Q1 2025</span>')
a('      </div>')
a('      <div class="activity-list">')

milestones = [
    ("Feb 10", "Search Engine Upgrade shipped to production", "#059669"),
    ("Feb 15", "API Gateway Migration — security review complete", "var(--indigo)"),
    ("Feb 20", "Auth Service Rewrite — final testing phase", "var(--cyan)"),
    ("Feb 28", "API Gateway Migration — target go-live date", "var(--coral)"),
    ("Mar 1", "CI/CD Pipeline v2 — expected completion", "#059669"),
    ("Mar 8", "Notification Service — beta release", "var(--indigo)"),
    ("Mar 15", "Website Redesign — Phase 1 launch", "var(--cyan)"),
    ("Mar 25", "Load Testing Suite — initial results", "#8b5cf6"),
    ("Mar 30", "Customer Portal — blocked dependency resolution", "var(--coral)"),
    ("Apr 5", "Payment System v3 — target go-live", "var(--indigo)"),
    ("Apr 10", "Security Audit — final report due", "#f59e0b"),
    ("Apr 20", "Mobile App v2 — beta launch", "var(--cyan)"),
    ("May 10", "Data Pipeline Rebuild — target completion", "#059669"),
    ("May 20", "Inventory Module — Phase 1 delivery", "var(--indigo)"),
    ("Jun 15", "Analytics Dashboard — expected start", "#8b5cf6"),
]

for date, desc, color in milestones:
    a(f'        <div class="activity-item"><span class="activity-dot" style="background:{color}"></span><span>{desc}</span><span class="activity-time">{date}</span></div>')

a('      </div>')
a('    </section>')

# Sprint velocity chart
a('    <section aria-labelledby="velocity-heading">')
a('      <div class="chart-box">')
a('        <h3 class="chart-title" id="velocity-heading">Sprint Velocity — Last 6 Sprints</h3>')
a('        <div class="chart-sub">Story points completed vs committed</div>')
a('        <div class="bar-chart" role="img" aria-label="Sprint velocity chart">')

sprints = [
    ("S9", 45, 38),
    ("S10", 52, 48),
    ("S11", 48, 42),
    ("S12", 55, 50),
    ("S13", 60, 52),
    ("S14", 58, 45),
]
for sprint_name, committed, completed in sprints:
    c_height = int(committed * 2.5)
    d_height = int(completed * 2.5)
    a(f'          <div class="bar-group"><div class="bar-stack"><div class="bar-seg" style="height:{d_height}px;background:var(--indigo)"></div><div class="bar-seg" style="height:{c_height - d_height}px;background:var(--cyan)"></div></div><span class="bar-lbl">{sprint_name}</span></div>')

a('        </div>')
a('        <div class="chart-legend">')
a('          <div class="legend-item"><span class="legend-dot" style="background:var(--indigo)"></span>Completed</div>')
a('          <div class="legend-item"><span class="legend-dot" style="background:var(--cyan)"></span>Committed</div>')
a('        </div>')
a('      </div>')
a('    </section>')

# Recent activity
a('    <section aria-labelledby="activity-heading">')
a('      <div class="section-header">')
a('        <h2 id="activity-heading">Recent Activity</h2>')
a('      </div>')
a('      <div class="activity-list">')

activities = [
    ("Sarah Kim", "completed design review for Website Redesign mockups", "#059669", "10 min ago"),
    ("James Park", "pushed 3 commits to Mobile App v2 feature branch", "var(--indigo)", "25 min ago"),
    ("Lisa Wang", "approved API Gateway Migration pull request", "var(--cyan)", "1 hour ago"),
    ("Mike Rodriguez", "updated Data Pipeline schema documentation", "#059669", "2 hours ago"),
    ("Emma Johnson", "moved Customer Portal to Blocked status", "var(--coral)", "3 hours ago"),
    ("Rachel Patel", "completed Payment System security review", "#059669", "4 hours ago"),
    ("Alex Morgan", "merged Search Engine Upgrade to main branch", "var(--indigo)", "5 hours ago"),
    ("System", "automated deployment: Search Engine v2.1 to production", "#8b5cf6", "6 hours ago"),
    ("David Lee", "created 8 new tasks for Analytics Dashboard", "var(--cyan)", "Yesterday"),
    ("Chris Taylor", "resolved 3 bugs in Notification Service", "#059669", "Yesterday"),
]

for who, what, color, when in activities:
    a(f'        <div class="activity-item"><span class="activity-dot" style="background:{color}"></span><span><strong>{who}</strong> {what}</span><span class="activity-time">{when}</span></div>')

a('      </div>')
a('    </section>')

# Risk register
a('    <section aria-labelledby="risk-heading">')
a('      <div class="section-header">')
a('        <h2 id="risk-heading">Risk Register</h2>')
a('        <span class="badge">Top Risks</span>')
a('      </div>')
a('      <table class="data-tbl">')
a('        <thead><tr><th>Risk</th><th>Project</th><th>Impact</th><th>Likelihood</th><th>Mitigation</th><th>Owner</th></tr></thead>')
a('        <tbody>')
a('          <tr><td><strong>Third-party API deprecation</strong></td><td>Payment System</td><td><span class="badge-status st-blocked">High</span></td><td><span class="badge-status st-review">Medium</span></td><td>Implement fallback provider</td><td>Rachel Patel</td></tr>')
a('          <tr><td><strong>Key developer leaving</strong></td><td>Data Pipeline</td><td><span class="badge-status st-blocked">High</span></td><td><span class="badge-status st-planning">Low</span></td><td>Knowledge transfer sessions</td><td>Mike Rodriguez</td></tr>')
a('          <tr><td><strong>Scope creep</strong></td><td>Website Redesign</td><td><span class="badge-status st-review">Medium</span></td><td><span class="badge-status st-blocked">High</span></td><td>Strict change control process</td><td>Sarah Kim</td></tr>')
a('          <tr><td><strong>Performance bottleneck</strong></td><td>Mobile App v2</td><td><span class="badge-status st-review">Medium</span></td><td><span class="badge-status st-review">Medium</span></td><td>Early load testing</td><td>James Park</td></tr>')
a('          <tr><td><strong>Security vulnerability</strong></td><td>Auth Service</td><td><span class="badge-status st-blocked">High</span></td><td><span class="badge-status st-planning">Low</span></td><td>Penetration testing scheduled</td><td>Jordan Blake</td></tr>')
a('        </tbody>')
a('      </table>')
a('    </section>')

a('  </div>')
a('</main>')
a('<footer class="site-footer">')
a(f'  {title} — designed by Studio · Standalone prototype · Not affiliated with any project management tool')
a('</footer>')
a('</body>')
a('</html>')

with open(out, "w") as f:
    f.write("\n".join(L) + "\n")

print(f"Written {len(L)} lines to {out}")
