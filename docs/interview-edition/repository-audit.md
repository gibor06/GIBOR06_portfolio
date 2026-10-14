# Repository Audit Report — GIBOR06 Portfolio (Interview Edition 2026)

**Audit Date:** 2026-10-14  
**Auditor:** Autonomous Principal Engineering & Design Agent  
**Target Workspace:** `d:\GIBOR\GIBOR06_portfolio`  
**Original Branch & Commit:** `main` (`3d94301a6a7be6eb56aeb3ec4feeda0ec9de4492`)  
**Working Feature Branch:** `feature/portfolio-interview-2026`

---

## 1. Current Architecture Overview

The existing repository contains two overlapping generations of the portfolio:
1. **Astro 5 Static Site (Active Build Target):**
   - **Framework:** Astro `^5.4.0` (`output: 'static'`) with `@astrojs/mdx`, `@astrojs/sitemap`, and `@tailwindcss/vite` (`^4.0.9`).
   - **Language:** TypeScript (`astro/tsconfigs/strict`).
   - **Routes Generated (`src/pages/`):**
     - English (`/`): `index.astro`, `work/index.astro`, `work/[slug].astro`, `research.astro`, `credentials.astro`, `resume.astro`, `404.astro`.
     - Vietnamese (`/vi`): `vi/index.astro`, `vi/work/index.astro`, `vi/work/[slug].astro`, `vi/research.astro`, `vi/credentials.astro`, `vi/resume.astro`.
   - **Content Management:** Hybrid approach combining Astro Content Collections (`src/content/projects/*.mdx` + `src/content/config.ts`) and TypeScript data modules (`src/data/profile.ts`, `achievements.ts`, `certificates.ts`, `skills.ts`, `stats.ts`).
2. **Legacy V3 Static Files (Root Directory):**
   - Root `index.html`, `style.css`, `script.js`, and root `assets/` remain from an older Bootstrap 5 single-page implementation and are ignored by the Astro build in `.github/workflows/deploy.yml`.

---

## 2. Existing Strengths Worth Preserving

- **Solid Static Generation Core:** Astro 5 + Tailwind CSS 4 + MDX Content Collections provide zero-JS-by-default static HTML delivery with fast build times.
- **Verified Authentic Media Assets:** Genuine certificate scans (`thanhTich_2025`, `thanhTich_2026`, `GOOGLE AI`, `ChungChiDA`, `GEMENI`), authentic project GIFs (`quanlybaixe-live.gif`, `webtongket-live.gif`), and real portrait photography (`avata.png`).
- **Print-Oriented Resume Concept:** Having a dedicated `/resume` route that supports browser printing (`window.print()`) is valuable for technical recruiters once its print stylesheet contrast bugs are fixed.
- **Bilingual Routing Structure:** Dual `/` (English) and `/vi` (Vietnamese) route trees with `hreflang` tags in `BaseLayout.astro`.

---

## 3. Critical Technical Debt & Deployment Bugs Discovered

### 3.1 Broken Production Base Path (`/portfolio` vs `/GIBOR06_portfolio`)
- **Finding:** `astro.config.mjs` sets `base: '/portfolio'`, and 12 source files hardcode `/portfolio/...` in asset paths and navigation links.
- **Evidence:** The GitHub repository is named `GIBOR06_portfolio`. Inspecting the live GitHub Pages deployment confirms `https://gibor06.github.io/GIBOR06_portfolio/` returns `HTTP 200`, whereas `https://gibor06.github.io/portfolio/` returns `HTTP 404`. Because the HTML deployed at `/GIBOR06_portfolio/` requests `/portfolio/_astro/*.css` and `/portfolio/assets/...`, all stylesheets, scripts, and images fail to load on the live deployment.
- **Fix:** Set `base: '/GIBOR06_portfolio'` in `astro.config.mjs`, introduce a centralized `withBase()` path helper in `src/i18n/utils.ts`, eliminate all hardcoded `/portfolio` prefixes, and update `public/robots.txt` to point to `https://gibor06.github.io/GIBOR06_portfolio/sitemap-index.xml`.

### 3.2 Incomplete Localization on Project Detail Pages (`/vi/work/[slug]`)
- **Finding:** While project frontmatter includes `titleVi`, `summaryVi`, `roleVi`, and `outcomeHeadlineVi`, the MDX body inside `src/content/projects/*.mdx` is written exclusively in English. Both `/work/[slug]` and `/vi/work/[slug]` render `<Content />` from the same MDX file, resulting in English case study bodies on Vietnamese pages.
- **Navigation & Language Switcher Bugs in `Header.astro`:**
  1. Vietnamese pages pass `activePath="/vi/work"`, which never matches `navLinks` (`item.href === "/work"`), breaking active link highlighting in Vietnamese.
  2. The language switcher computes target URLs from `activePath` rather than `Astro.url.pathname`, stripping `[slug]` when switching languages on a project case study page.
  3. Mobile drawer LinkedIn link is hardcoded to `https://linkedin.com` instead of `https://www.linkedin.com/in/gibor06/`.

### 3.3 Hardcoded Project Indices & Unused Components
- `src/pages/index.astro` and `src/pages/vi/index.astro` hardcode `const [p1, p2, p3, p4] = sorted;` and repeat ~150 lines of inline card markup per project.
- `src/components/BentoProjects.astro` and `src/data/stats.ts` are unused dead code.
- `src/components/SignalField.astro` runs a continuous `requestAnimationFrame` O(N²) particle loop across a full-screen `<canvas>` on every page, creating unnecessary main-thread and GPU overhead.

### 3.4 Broken `@media print` Styles on `/resume`
- `src/styles/global.css` forces `body { background: #ffffff !important; color: #111111 !important; }` for `@media print`, but `src/pages/resume.astro` and `src/pages/vi/resume.astro` apply explicit Tailwind classes (`text-white`, `text-zinc-300`, `bg-[#121721]`), causing white-on-white illegible text when printing or exporting to PDF.

### 3.5 Rotated & Misconfigured Visual Assets
- `public/assets/img/thanhTich_2026/nckh_CapKhoa_2026.jpg` was stored rotated 90° counter-clockwise (`858x1214`).
- `public/og-image.png` and `public/assets/img/og-gibor06.png` are byte-for-byte copies of `gibor-coffee-og.png` (a GitHub repo preview for `GIBOR-COFFEE-SHOP`) rather than a portfolio OpenGraph preview.
- Two new untracked certificate photos in `assets/img/thanhTich_2026/` (`Fair2026 (1).jpg` and `Fair2026 (2).jpg`) were not yet copied into `public/assets/img/thanhTich_2026/`.

---

## 4. Stale Content, Security Risks & Unverified Claims

### 4.1 Sensitive Academic Token Exposure (High Priority Security Fix)
- `src/data/profile.ts` and `src/components/Footer.astro` expose a personal tokenized HUIT student portal URL (`https://sinhvien.huit.edu.vn/tra-cuu/ket-qua-hoc-tap.html?k=KxOpNfz3rTnww6PJ...`).
- **Action:** Remove the tokenized transcript URL from all source and rendered files immediately.

### 4.2 Outdated Positioning & Stale Academic Status
- `src/data/profile.ts` describes Trần Gia Bảo as a *"Second-year Information Technology student"* positioned around *"Applied AI & Software Engineering"* with GPA `8.78 / 10` (`54` accumulated credits from Year 1/early Year 2).
- **Action:** Re-center positioning around **Full-Stack Developer Intern** and update academic status to **Third-year Information Technology student at Ho Chi Minh City University of Industry and Trade (HUIT)**. Omit unverified/stale GPA and credit counts from prominent display until confirmed by current third-year records.

### 4.3 Missing Flagship Full-Stack Projects & Conflated Research Projects
- The existing portfolio lacked the two strongest C#/.NET/SQL Server systems from GitHub:
  1. **Coffee Chain Management System** (`GIBOR-COFFEE-CHAIN-MANAGEMENT` — ASP.NET Core 8.0 MVC, EF Core 8.0, SQL Server, 17 Controllers, 9 Services, 31 Models/Views).
  2. **Coffee Shop Management Desktop + Payment API** (`GIBOR06-COFFEE-SHOP-MANAGENMENT-SOFTWARE` — WPF .NET 8.0 MVVM Desktop + ASP.NET Core 8.0 Web API + PayOS/VietQR + SQL Server).
- Existing `multi-aura.mdx` conflated two separate NCKH 2024–2025 projects (the **Multi Aura PhoBERT NLP** social network and the **EMHUN High-Utility Itemset Mining** e-commerce project) into a single case study and linked to a non-existent repository URL (`https://github.com/gibor06/Multi-Aura`).
- Existing `gibor-coffee.mdx` linked to an older repo (`GIBOR-COFFEE-SHOP`) instead of the active collaborative repository (`GIBOR06_Coffee_Shop_Management_Web`) and falsely claimed *"Eliminated bloated CSS frameworks"* despite using Bootstrap 5.3.3.

### 4.4 Unverified Quantitative Claims Removed
None of the following metrics in `src/content/projects/*.mdx` had benchmark scripts, test logs, or reproducible evidence in any repository and are classified as **UNVERIFIED** (removed and replaced with qualitative engineering descriptions):
- `-38% load time (vs. template)` & `83% task completion (12 sessions)` (`gibor-coffee.mdx`)
- `0.89 F1-score` & `-31% mining runtime` (`multi-aura.mdx`)
- `100% accuracy (500 runs)`, `~35% faster vs. Array`, `<8MB RAM` (`quan-ly-bai-xe.mdx`)
- `-42% discovery time`, `71% full read-through` (`web-tong-ket.mdx`)

---

## 5. Duplicated Assets & Obsolete Files Inventory

- **Root Legacy V3 Files:** `index.html`, `style.css`, `script.js` are superseded by the Astro 5 application.
- **Root `assets/` vs `public/assets/`:** All 31 tracked files in root `assets/` were duplicated in `public/assets/`. The two untracked files (`assets/img/thanhTich_2026/Fair2026 (1).jpg` and `Fair2026 (2).jpg`) are preserved in place and copied into `public/assets/img/thanhTich_2026/`.
- **Unused Astro Files:** `src/components/BentoProjects.astro` and `src/data/stats.ts`.

---

## 6. Refactoring Priorities

1. **Fix Base Path & Asset Helper:** Configure `base: '/GIBOR06_portfolio'` and route all internal links and assets through `withBase()`.
2. **Data-Driven Full-Stack Project & Case Study Architecture:** Replace hardcoded project slots with a strongly typed, bilingual data-driven architecture in `src/data/projects.ts` and `src/content/projects/`, featuring the three flagship Full-Stack projects first, plus secondary projects and legacy slug compatibility (`multi-aura`, `gibor-coffee`).
3. **Separate Research & Publications Domain:** Build a dedicated `/research` (and `/vi/research`) experience separating Optimization & Metaheuristics (FAIR XIX 2026), High-Utility Itemset Mining (Dynamic Cross-HUIM & EMHUN), NLP (Multi Aura PhoBERT), and Applied Computer Vision (YOLO+SAM-ViT & ViT).
4. **Premium UI, Motion System & Print-Ready Resume:** Implement the new design token palette, typography scale, compositor-friendly motion system (`prefers-reduced-motion` compliant), `/about` page, and fixed `@media print` resume layout.
