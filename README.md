# GIBOR06 — Portfolio V4 (2026 Edition)

> World-Class Software Engineer & Applied AI Research Portfolio of **Trần Gia Bảo (gibor06)**.

[![Live Demo](https://img.shields.io/badge/Live_Site-gibor06.github.io%2Fportfolio-blue?style=for-the-badge&logo=github)](https://gibor06.github.io/portfolio/)
[![Astro](https://img.shields.io/badge/Astro_5-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## 1. Architecture & Tech Stack

- **Framework**: [Astro 5+](https://astro.build) (Zero-JS static HTML by default, islands architecture)
- **Content Engine**: Astro Content Collections with typed Zod schemas and MDX
- **Styling**: Tailwind CSS 4 with custom CSS design tokens & Geist typography
- **Internationalization (i18n)**: English (Default `/portfolio/`) & Vietnamese (`/portfolio/vi/`)
- **Hosting & Deployment**: GitHub Pages with automated GitHub Actions CI/CD pipeline
- **Accessibility & SEO**: WCAG 2.2 AA compliant, JSON-LD structured data (Person, WebSite, ScholarlyArticle), automated sitemap & OpenGraph metadata

---

## 2. Directory Structure

```text
portfolio/
├── .github/workflows/
│   └── deploy.yml              # GitHub Pages automated build & deployment
├── docs/
│   └── portfolio-v4-design.md  # Comprehensive design & architectural specification
├── public/
│   ├── assets/                 # Preserved original evidence, certificates, awards & media
│   ├── favicon.svg             # Vector site icon
│   ├── og-image.png            # OpenGraph social preview banner
│   └── robots.txt              # Search engine crawlers directive
├── src/
│   ├── content/
│   │   ├── config.ts           # Content collections Zod schemas
│   │   └── projects/           # MDX case studies (Multi Aura NLP, GIBOR Coffee, etc.)
│   ├── components/
│   │   ├── common/             # BaseHead, Header, Footer, Lightbox, EvidenceLink
│   │   └── home/               # Hero, ProofBar, FeaturedProjects, ResearchTimeline, etc.
│   ├── data/
│   │   ├── profile.ts          # Verified personal metrics & contacts
│   │   ├── achievements.ts     # University & faculty awards with verification links
│   │   ├── certificates.ts     # Google AI & Coursera certifications
│   │   ├── skills.ts           # Categorized engineering capabilities
│   │   └── navigation.ts       # Navigation routes & social links
│   ├── i18n/
│   │   ├── ui.ts               # Translation strings for EN / VI
│   │   └── utils.ts            # Locale routing helpers
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Global master layout
│   │   └── ProjectLayout.astro # Case study layout with metadata rail
│   ├── pages/
│   │   ├── index.astro         # English Homepage
│   │   ├── work/               # Selected work gallery & dynamic case study routes
│   │   ├── research.astro      # Research papers & awards dossier
│   │   ├── about.astro         # Engineering philosophy & biography
│   │   ├── resume.astro        # Interactive printable resume view
│   │   ├── 404.astro           # Custom 404 page
│   │   └── vi/                 # Vietnamese localized routes (/vi/*)
│   └── styles/
│       └── global.css          # Design tokens, grid background, print rules
├── astro.config.mjs            # Astro configuration (base: /portfolio)
├── package.json
└── tsconfig.json
```

---

## 3. Getting Started & Local Development

### Prerequisites
- Node.js `v20+` or `v22+`
- npm `v10+`

### Installation
```bash
# Clone the repository
git clone https://github.com/gibor06/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
Open `http://localhost:4321/portfolio/` in your browser.

### Typecheck & Production Build
```bash
# Validate TypeScript and Astro components
npm run check

# Create production build
npm run build

# Preview production build locally
npm run preview
```

---

## 4. How to Add a New Project Case Study

To add a new project:
1. Create a new MDX file in `src/content/projects/<project-slug>.mdx`.
2. Populate the frontmatter adhering to the typed schema in `src/content/config.ts`:
   ```yaml
   ---
   title: "Project Title in English"
   titleVi: "Tên dự án tiếng Việt"
   summary: "Short problem & solution summary"
   summaryVi: "Tóm tắt dự án tiếng Việt"
   year: "2026"
   role: "Software Engineer"
   roleVi: "Kỹ sư phần mềm"
   domain: "Systems / AI / Web"
   domainVi: "Lĩnh vực tiếng Việt"
   stack: ["Python", "PyTorch", "FastAPI"]
   metrics:
     - label: "Speedup"
       labelVi: "Tăng tốc"
       value: "3x"
   coverImage: "/portfolio/assets/img/your-image.png"
   featured: true
   order: 1
   githubUrl: "https://github.com/gibor06/repo"
   ---
   ```
3. Run `npm run build` — the project will automatically generate dynamic English and Vietnamese case study routes (`/work/<project-slug>` and `/vi/work/<project-slug>`).

---

## 5. Author & Verified Contacts

**Trần Gia Bảo (gibor06)**
- **Role**: Software Engineer & Applied AI Researcher
- **Institution**: Ho Chi Minh City University of Industry and Trade (HUIT)
- **Email**: [gibor06.dev@gmail.com](mailto:gibor06.dev@gmail.com)
- **GitHub**: [github.com/gibor06](https://github.com/gibor06)
- **LinkedIn**: [linkedin.com/in/gibor06](https://www.linkedin.com/in/gibor06/)
- **Live Portfolio**: [https://gibor06.github.io/portfolio/](https://gibor06.github.io/portfolio/)
