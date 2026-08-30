# GIBOR06 PORTFOLIO V4 — DESIGN & ARCHITECTURE SPECIFICATION

## 1. Design Concept & Philosophy

### Vision: Engineering Editorial Minimalism
The portfolio is designed as an **evidence-driven, content-first engineering profile** tailored for international technical recruiters, engineering hiring managers, and academic mentors. It strikes a deliberate balance between:
- **Precision Engineering**: Clean tabular data, monospace metrics, structured schemas, zero fluff.
- **Editorial Polish**: High-contrast typography hierarchy, generous whitespace, confident layout balance inspired by Linear, Raycast, and Vercel.
- **Academic & Research Credibility**: Verified competition results, institutional affiliations (HUIT), PhoBERT & EMHUN experiment metrics, official result links.

### Anti-Patterns Explicitly Avoided
- No artificial glowing AI spheres, matrix code rain, or particle animations.
- No subjective skill percentage bars (e.g., "Python 95%").
- No fabricated social proof, fake quotes, or ungrounded statistics.
- No client-side SPA bloat; static-first generation with zero unnecessary runtime JavaScript.

---

## 2. Color System & Theme Tokens

The design uses a neutral dark-first palette with a disciplined **88% Neutral / 12% Accent** ratio.

| Token | CSS Variable / Value | Purpose |
| :--- | :--- | :--- |
| **Background Base** | `#09090b` (`--bg-base`) | Primary deep matte background |
| **Surface Card** | `#111113` (`--bg-surface`) | Card & panel background |
| **Surface Elevated** | `#18181b` (`--bg-elevated`) | Hover states, modals, elevated chips |
| **Foreground Primary**| `#fafafa` (`--text-primary`)| High-contrast headlines & titles |
| **Foreground Secondary**| `#a1a1aa` (`--text-secondary`)| Body copy, explanations |
| **Foreground Muted** | `#71717a` (`--text-muted`) | Metadata, dates, auxiliary tags |
| **Border Subtle** | `rgba(255, 255, 255, 0.08)` | 1px clean separation lines |
| **Border Active** | `rgba(255, 255, 255, 0.18)` | Hover/focus borders |
| **Signature Accent** | `#3b82f6` / `#60a5fa` | Interactive links, proof badges, CTAs |
| **Accent Glow** | `rgba(59, 130, 246, 0.12)` | Subtle button hover halos |

---

## 3. Typography Hierarchy

- **Primary Sans**: `Geist Sans`, `-apple-system`, `BlinkMacSystemFont`, `'Segoe UI'`, sans-serif.
- **Technical Monospace**: `Geist Mono`, `ui-monospace`, `'SFMono-Regular'`, monospace.

### Scale
- **Display Hero Title**: `clamp(2.5rem, 6vw, 4.25rem)` / Line height: 1.08 / Font weight: 700
- **Section Heading (H2)**: `clamp(1.75rem, 3.5vw, 2.75rem)` / Line height: 1.15 / Font weight: 600
- **Card / Subsection (H3)**: `1.25rem - 1.5rem` / Font weight: 600
- **Body Text**: `1rem - 1.125rem` / Line height: 1.65 / Max width: 68ch
- **Metadata / Monospace Badges**: `0.8125rem - 0.875rem` / Tracking: 0.02em

---

## 4. Motion & Micro-interaction System

- **Fast (Buttons / Links)**: `180ms cubic-bezier(0.16, 1, 0.3, 1)`
- **Standard (Card Hover / Image Zoom)**: `280ms cubic-bezier(0.16, 1, 0.3, 1)`
- **Modals / Drawers**: `350ms cubic-bezier(0.16, 1, 0.3, 1)`
- **Accessibility**: Full `@media (prefers-reduced-motion: reduce)` support instantly disables non-essential animations.

---

## 5. Information Architecture & Content Hierarchy

```text
1. Sticky Minimalist Header (GIBOR06 brand mark, Work, Research, About, Resume, EN/VI switch)
2. Hero Section (5-second identification hook, verified proof signals, primary CTAs)
3. Selected Work (Tier-1 Featured Case Study + Tier-2 Project Grid)
4. Research & Academic Finalist Work (Multi Aura NLP, EMHUN Data Mining, official awards)
5. Technical Recognition & Awards (Chronological list with official verification links)
6. Engineering Profile & Technical Stack (Primary vs Working Knowledge, grounded taxonomy)
7. Curated Certifications Grid (Google AI Essentials, Google Data Analytics, Gemini)
8. Academic Snapshot (GPA 8.78/10, 3.78/4, 54 credits, HUIT portal link)
9. Conversion Footer & Direct Contact (Email copy, Calendly / Google Calendar, Formspree form)
```

---

## 6. Case Study Framework

Every project case study adheres to a 10-part engineering breakdown:
1. **Executive Overview & Metadata** (Year, Role, Domain, Stack, Result)
2. **The Problem & Context**
3. **Constraints & Requirements**
4. **My Specific Contributions**
5. **System / Model Architecture Diagram** (SVG / HTML data flow)
6. **Key Technical Decisions & Tradeoffs**
7. **Implementation Details & Algorithms**
8. **Quantitative Results & Benchmark Metrics**
9. **Key Takeaways & Lessons Learned**
10. **Evidence, Source Code & Verification Links**

---

## 7. Technical SEO, GEO & Machine Readability

- **Canonical URL**: Dynamic canonical tags matching `https://gibor06.github.io/portfolio/` base path.
- **OpenGraph & Twitter Card**: 1200x630 pixel social banner with title and role.
- **Structured Data (JSON-LD)**:
  - `schema.org/Person` with `name`, `alternateName: "gibor06"`, `alumniOf`, `sameAs` (GitHub, LinkedIn).
  - `schema.org/WebSite` and `schema.org/ProfilePage`.
  - `schema.org/SoftwareSourceCode` and `schema.org/ScholarlyArticle` for research projects.
- **AEO / GEO Optimization**: Explicit semantic headings, data attributes, clear role/contribution summaries easily parsed by LLMs and search engines.

---

## 8. GitHub Pages Deployment Strategy

- `astro.config.mjs` configured with:
  ```js
  site: 'https://gibor06.github.io',
  base: '/portfolio'
  ```
- All internal routing dynamically prefixed using Astro's `import.meta.env.BASE_URL` or standard relative resolution.
- Clean GitHub Actions workflow building and deploying to `gh-pages` branch without manual intervention.
