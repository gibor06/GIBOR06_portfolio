# QA & Verification Report — GIBOR06 STUDIO (Editorial / Brutalist Folio 2026)

## 1. Build & Type Safety Verification

- **`npm run check` (`astro check`)**:
  - **Result**: `0 errors`, `0 warnings`, `0 hints` across `62 files`.
- **`npm run build` (`astro build`)**:
  - **Result**: `27 static pages` + `/sitemap.xml` + `/sitemap-index.xml` + `/robots.txt` built in `3.76s`.
  - **Base Path**: Configured in `astro.config.mjs` as `site: 'https://gibor06.github.io'` and `base: '/GIBOR06_portfolio'` matching the GitHub repository name `GIBOR06_portfolio`.

---

## 2. Automated Playwright Route & Asset Audit (`verify_portfolio_qa.py`)

| Route / Endpoint | HTTP Status | Broken Images | Console Errors | Horizontal Overflow (`1920` / `1440` / `1024` / `768` / `390` / `360`) |
| :--- | :---: | :---: | :---: | :---: |
| `/GIBOR06_portfolio/` (English Studio) | `200 OK` | `0` | `0` | `false` (`0` overflow across all 6 viewports) |
| `/GIBOR06_portfolio/vi/` (Vietnamese Studio) | `200 OK` | `0` | `0` | `false` (`0` overflow across all 6 viewports) |
| `/GIBOR06_portfolio/work/` | `200 OK` | `0` | `0` | `false` |
| `/GIBOR06_portfolio/vi/work/` | `200 OK` | `0` | `0` | `false` |
| `/GIBOR06_portfolio/research/` | `200 OK` | `0` | `0` | `false` |
| `/GIBOR06_portfolio/vi/research/` | `200 OK` | `0` | `0` | `false` |
| `/GIBOR06_portfolio/about/` | `200 OK` | `0` | `0` | `false` |
| `/GIBOR06_portfolio/vi/about/` | `200 OK` | `0` | `0` | `false` |
| `/GIBOR06_portfolio/resume/` | `200 OK` | `0` | `0` | `false` |
| `/GIBOR06_portfolio/vi/resume/` | `200 OK` | `0` | `0` | `false` |
| `/GIBOR06_portfolio/credentials/` | `200 OK` | `0` | `0` | `false` |
| `/GIBOR06_portfolio/vi/credentials/` | `200 OK` | `0` | `0` | `false` |
| `/GIBOR06_portfolio/robots.txt` | `200 OK` | — | — | — |
| `/GIBOR06_portfolio/sitemap.xml` | `200 OK` | — | — | — |
| `/GIBOR06_portfolio/sitemap-index.xml` | `200 OK` | — | — | — |

---

## 3. Interactive & Functional Verification

1. **4-Theme Architectural Switcher (`Alabaster`, `Cobalt`, `Terracotta`, `Travertine`)**:
   - Verified via Playwright: clicking each theme button in the masthead/Hero updates `document.documentElement.getAttribute('data-theme')`, persists to `localStorage` (`gibor_theme`), and updates `aria-pressed` states:
     - `theme_alabaster`: `PASS`
     - `theme_cobalt`: `PASS`
     - `theme_terracotta`: `PASS`
     - `theme_travertine`: `PASS`
2. **Bilingual Support & Browser Language Auto-Detection**:
   - Verified via Playwright with `locale: "vi-VN"` context: visiting `/GIBOR06_portfolio/` on first visit automatically detects `navigator.language` starting with `vi` and routes to `/GIBOR06_portfolio/vi/`.
   - Clicking `EN / VI` in the masthead switches languages cleanly and persists `gibor_lang` in `localStorage`.
3. **Editorial / Brutalist Design & Manifesto Compliance**:
   - Masthead displays `"GIBOR06 STUDIO" | "DIGITAL PRODUCT DESIGN • FULL-STACK ARCHITECTURE • AI" | "SAIGON, VIETNAM" | "FOLIO // 2026"`.
   - Hero displays `"SOFTWARE ENGINEER — UI/UX & SYSTEMS ARCHITECTURE"`, monumental serif `"Trần Gia Bảo"`, central manifesto `"Where human-centered UI/UX meets resilient Full-Stack engineering."`, 4-cell **`ARCHITECTURE & UX MATRIX`**, and 4-theme selector.
   - Zero stock/AI photos: uses pure color blocks, hairline grids, and abstract vector geometry.
   - Manifesto prose across `01 // ABOUT`, `02 // EXPERTISE`, `03 // SELECTED WORKS`, `04 // RESEARCH`, and `05 // CONTACT` avoids CV-style bullet lists, GPA numbers, and laundry lists of technologies.
4. **Captured Visual Evidence (`docs/interview-edition/screenshots/`)**:
   - `home-en-alabaster-1440.png`
   - `home-en-cobalt-1440.png`
   - `home-en-terracotta-1440.png`
   - `home-en-travertine-1440.png`
   - `home-vi-desktop-1440.png`
   - `home-en-tablet-768.png`
   - `home-en-mobile-390.png`
   - `section-about-1440.png`
   - `section-expertise-1440.png`
   - `section-works-1440.png`
   - `section-research-1440.png`
   - `section-contact-1440.png`
