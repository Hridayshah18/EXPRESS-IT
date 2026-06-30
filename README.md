# 🌟 Express It

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=111111)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=ffffff)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=nodedotjs&logoColor=ffffff)](https://nodejs.org/)
[![Live Site](https://img.shields.io/badge/Live-expressit.online-4F46E5?style=for-the-badge)](https://expressit.online)

**Real-world confidence, communication, and emotional-growth platform for young learners.**

> A modern educational website combining expressive learning, parent-focused resources, guided program content, and interactive thinking games.

- **Live Site:** [https://expressit.online](https://expressit.online)
- **Repository:** [https://github.com/Hridayshah18/EXPRESS-IT](https://github.com/Hridayshah18/EXPRESS-IT)

<!-- Add homepage screenshot here after uploading assets -->

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Motivation](#motivation)
- [Website Pages and Routes](#website-pages-and-routes)
- [Interactive Games](#interactive-games)
- [Project Architecture](#project-architecture)
- [Repository Structure](#repository-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Contact Form](#contact-form)
- [Deployment](#deployment)
- [QA and Launch Checklist](#qa-and-launch-checklist)
- [Performance Notes](#performance-notes)
- [SEO Notes](#seo-notes)
- [Accessibility Notes](#accessibility-notes)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Authors and Contributors](#authors-and-contributors)
- [Acknowledgments](#acknowledgments)

## 📌 Overview

**Express It** is a production-oriented educational and emotional-growth website designed for children, parents, learners, and school communities. The project presents a polished public website with a premium landing page, responsive page layouts, animated sections, parent-focused resources, program content, and integrated browser games.

The current implementation is built with the **Next.js App Router**, React, TypeScript, Tailwind CSS, Framer Motion, and a Node.js API route for contact form email delivery through SMTP-compatible credentials.

## ✨ Key Features

### Website Experience

- Premium responsive landing page
- Desktop and mobile optimized layouts
- Animated hero section with motion-safe behavior
- Smooth scrolling through Lenis on supported devices
- Modern section-based navigation
- Dedicated Framework, Programs, Mind Gym, and Parent Hub pages
- Contact / Start Journey form connected to a server API route

### Learning Sections

- **Framework:** introduces the Express It growth approach
- **Programs:** presents structured learning pathways
- **Mind Gym:** provides access to practice tools and games
- **Parent Hub:** organizes parent-focused resources and guidance
- **Contact:** collects enquiry details through a validated form

### Interactive Games

- Pattern Mind
- Bollyverse
- Chain Reaction
- Rainbow Flow

### Engineering Features

- Next.js App Router structure under `app/`
- TypeScript components and route handlers
- Tailwind CSS utility styling with global design primitives
- Framer Motion animation primitives
- Node.js runtime API route for `/api/contact`
- SMTP/Gmail-compatible email transport through Nodemailer
- Static browser games stored under `public/games/`
- Redirects for public game launch routes in `next.config.mjs`
- Production deployment target: Hostinger Node/Next.js hosting

## 🎯 Motivation

Many young learners struggle to express thoughts, emotions, and decisions with confidence. Parents and educators often need practical tools that are structured, approachable, and easy to repeat outside a classroom.

Express It exists to bring together:

- emotional expression,
- communication confidence,
- real-world decision-making,
- parent guidance,
- structured learning pathways,
- and interactive thinking practice.

The result is a website that feels less like a static brochure and more like a growing educational platform.

## 🧭 Website Pages and Routes

| Page | Route | Purpose |
| --- | --- | --- |
| Home | `/` | Landing page, overview, core sections, and contact form |
| Framework | `/framework` | Express It learning approach and framework content |
| Programs | `/programs` | Program information and learning pathways |
| Mind Gym | `/mind-gym` | Thinking and practice section with game cards |
| Parent Hub | `/parent-hub` | Parent-focused resources and guidance |
| Games Index | `/games` | Mind Gym games overview route |
| Game Detail | `/games/[slug]` | Generated game detail route shell |
| Contact API | `/api/contact` | Handles enquiry form submission |

## 🎮 Interactive Games

Playable game files are stored as static browser experiences under `public/games/`.

| Game | Playable Route | Static Game Folder | Description |
| --- | --- | --- | --- |
| Pattern Mind | `/patternmind/` | `public/games/pattern-mind/` | Pattern recognition and thinking game |
| Bollyverse | `/bollyverse/` | `public/games/bollywood-game/` | Bollywood-themed interactive game |
| Chain Reaction | `/chainreaction/` | `public/games/chain-reaction/` | Strategy-based chain reaction game |
| Rainbow Flow | `/rainbowflow/` | `public/games/rainbow-flow/` | Color-flow memory and focus game |

The project also defines redirects for the public `/games/...` paths:

| Redirected Route | Destination |
| --- | --- |
| `/games/patternmind` | `/patternmind/` |
| `/games/bollyverse` | `/bollyverse/` |
| `/games/chain-reaction` | `/chainreaction/` |
| `/games/rainbow-flow` | `/rainbowflow/` |

The direct game routes then redirect to the static HTML files inside `public/games/`.

## 🏗️ Project Architecture

```txt
User Browser
    |
    v
Next.js App Router
    |
    +-- Public Website Pages
    |     +-- Home
    |     +-- Framework
    |     +-- Programs
    |     +-- Mind Gym
    |     +-- Parent Hub
    |
    +-- Static Asset Layer
    |     +-- Images
    |     +-- Video
    |     +-- Browser Games
    |
    +-- Redirect Layer
    |     +-- /patternmind/      -> /games/pattern-mind/index.html
    |     +-- /bollyverse/       -> /games/bollywood-game/index.html
    |     +-- /chainreaction/    -> /games/chain-reaction/index.html
    |     +-- /rainbowflow/      -> /games/rainbow-flow/index.html
    |
    +-- API Route
          +-- /api/contact
                |
                v
          SMTP / Gmail-compatible Email Service
```

## 📂 Repository Structure

```txt
EXPRESS-IT/
|
+-- app/                    # Next.js App Router pages, layouts, and API routes
|   +-- api/contact/         # Contact form route handler
|   +-- framework/           # Framework page
|   +-- games/               # Games index and dynamic game shell routes
|   +-- mind-gym/            # Mind Gym page
|   +-- parent-hub/          # Parent Hub page
|   +-- programs/            # Programs page
|   +-- globals.css          # Global Tailwind and custom CSS
|   +-- layout.tsx           # Root layout and metadata
|   +-- page.tsx             # Homepage
|
+-- components/             # Shared UI, navigation, effects, sections, and game cards
|   +-- games/               # Game card, launcher, layout, and modal components
|   +-- sections/            # Homepage and route section components
|
+-- design-system/          # Project design system notes
+-- lib/                    # Shared content registry and utilities
+-- public/                 # Static assets
|   +-- games/               # Integrated browser game exports
|   +-- images/              # Audience and program images
|   +-- videos/              # Framework video asset
|
+-- next.config.mjs         # Next.js configuration and redirects
+-- package.json            # Scripts and dependencies
+-- package-lock.json       # npm lockfile
+-- postcss.config.cjs      # PostCSS configuration
+-- server.js               # Custom Node server entry used by npm start
+-- tailwind.config.ts      # Tailwind theme configuration
+-- tsconfig.json           # TypeScript configuration
+-- .env.example            # Environment variable template
+-- README.md               # Project documentation
```

## 🧰 Tech Stack

| Category | Technology |
| --- | --- |
| Framework | Next.js |
| UI | React |
| Language | TypeScript |
| Styling | Tailwind CSS, PostCSS |
| Animation | Framer Motion, Lenis, GSAP, Lottie React |
| 3D / Visual Libraries | Three.js, React Three Fiber, Drei, Spline React |
| Icons | Lucide React |
| Runtime | Node.js |
| Email | Nodemailer with SMTP or Gmail app password |
| Deployment Target | Hostinger Node/Next.js hosting |
| Testing / QA Utility | Puppeteer Core is included as a dev dependency |

## 🚀 Getting Started

### Prerequisites

- Node.js compatible with the installed Next.js version
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/Hridayshah18/EXPRESS-IT.git
cd EXPRESS-IT
```

### Install Dependencies

```bash
npm install
```

## 🔐 Environment Variables

The repository includes `.env.example` with the currently documented contact-form variables:

```env
CONTACT_TO_EMAIL=expressit.myra@gmail.com
SMTP_USER=expressit.myra@gmail.com
SMTP_PASS=your_gmail_app_password_here
```

The contact API route also supports these variables:

```env
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
GMAIL_USER=
GMAIL_APP_PASSWORD=
```

Recommended public site value for deployment metadata and future SEO configuration:

```env
NEXT_PUBLIC_SITE_URL=https://expressit.online
```

Important notes:

- Do not commit real secrets to GitHub.
- Use a Gmail App Password if Gmail is used as the SMTP provider.
- Configure production environment variables in the hosting platform.
- Redeploy the app after changing production environment variables.

## 🧪 Available Scripts

| Script | Command | Purpose |
| --- | --- | --- |
| Development | `npm run dev` | Starts the Next.js development server |
| Build | `npm run build` | Creates a production build |
| Start | `npm run start` | Starts the custom Node server via `server.js` |
| Type Check | `npm run typecheck` | Runs TypeScript without emitting files |

### Run Locally

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

By default, `server.js` reads `PORT` from the environment and falls back to port `3000`.

## 📬 Contact Form

The contact form submits to:

```txt
/api/contact
```

The API route:

- accepts JSON form submissions,
- validates required fields,
- validates email format,
- sanitizes control characters,
- escapes HTML in the outgoing email body,
- sends email through Nodemailer,
- requires SMTP-compatible environment variables in production.

Email delivery depends on correct production environment configuration. Secrets should be stored in Hostinger or the deployment platform, not committed to the repository.

## 🌍 Deployment

The live site is deployed at:

```txt
https://expressit.online
```

### Hostinger Node / Next.js Deployment Notes

Recommended settings:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js |
| Branch | `main` |
| Root directory | `./` |
| Package manager | npm |
| Install command | `npm install` |
| Build command | `npm run build` |
| Start command | `npm run start` |
| Runtime | Node.js |
| Build output | `.next` |

Required deployment reminders:

- Configure SMTP/contact environment variables in Hostinger.
- Confirm the custom `server.js` start command works in the hosting environment.
- Confirm both non-www and www domains route to the intended live site.
- Redeploy after environment or redirect changes.
- Keep static game folders under `public/games/` included in deployment.

## ✅ QA and Launch Checklist

Known from repository structure and recent local verification:

- [x] Homepage route exists
- [x] Framework route exists
- [x] Programs route exists
- [x] Mind Gym route exists
- [x] Parent Hub route exists
- [x] Contact API route exists
- [x] Game files exist under `public/games/`
- [x] Direct game routes are configured
- [x] `/games/...` redirect routes are configured
- [x] HTTPS live domain is documented
- [ ] Verify production contact email delivery after SMTP setup
- [ ] Confirm `www` domain routing in production
- [ ] Add final Open Graph image
- [ ] Add `robots.txt`
- [ ] Add `sitemap.xml`
- [ ] Add privacy policy
- [ ] Add spam protection for contact form
- [ ] Complete game accessibility review
- [ ] Optimize large video and image assets

## ⚡ Performance Notes

Current project assets include a large framework video and several rich image/game assets. This is appropriate for a cinematic website, but it should be monitored before heavy public traffic.

Recommended optimizations:

- Compress or provide responsive variants for `public/videos/five-stage-world.mp4`.
- Add poster/fallback behavior for the video section.
- Convert large PNG assets to WebP or AVIF where practical.
- Lazy-load non-critical visual sections when possible.
- Audit unused animation and 3D dependencies before production scaling.
- Run Lighthouse or PageSpeed Insights before major public campaigns.

No Lighthouse score is claimed in this README.

## 🔎 SEO Notes

The project includes basic metadata in `app/layout.tsx`, including title, description, keywords, and Open Graph title/description.

Recommended SEO improvements:

- Replace any placeholder metadata base with the live domain.
- Add a canonical URL.
- Add Open Graph and Twitter preview images.
- Add `robots.txt`.
- Add `sitemap.xml`.
- Add route-specific metadata where needed.
- Confirm social previews before public launch.

## ♿ Accessibility Notes

Current accessibility-positive patterns include:

- semantic form labels,
- skip link to main content,
- visible focus styling,
- touch-friendly navigation targets,
- reduced-motion handling in global CSS and motion components,
- responsive layouts for mobile and desktop.

Recommended follow-up:

- Complete keyboard testing for every page and game.
- Review color contrast across gradients and dark sections.
- Add or confirm ARIA labels for game controls.
- Test static games with screen readers.
- Avoid claiming WCAG compliance until a full accessibility audit is completed.

## 🛣️ Roadmap

### Short-Term

- Improve SEO and social preview metadata
- Add `robots.txt` and `sitemap.xml`
- Optimize large media assets
- Add contact form spam protection
- Add privacy policy
- Improve mobile UX inside integrated games

### Medium-Term

- Store contact submissions in a database
- Add analytics with privacy-aware configuration
- Add admin dashboard for enquiries and content
- Add game score saving
- Add leaderboards if product requirements need them

### Long-Term

- Student and parent accounts
- Progress tracking
- CMS-driven content updates
- More interactive learning modules
- School or cohort dashboards
- Deeper personalization for learners and families

## 🤝 Contributing

Contributions should be made through focused branches and reviewed before merging.

1. Fork the repository.
2. Create a feature branch.
3. Make a focused change.
4. Run the build.
5. Open a pull request with a clear summary.

```bash
git checkout -b feature/your-feature-name
npm install
npm run build
```

Recommended before opening a pull request:

```bash
npm run typecheck
npm run build
```

## 📜 License

No `LICENSE` file has been specified yet.

The `package.json` currently declares `"license": "ISC"`, but a formal license file should be added before open-source distribution.

## 👥 Authors and Contributors

- **Hriday Shah** — GitHub: [https://github.com/Hridayshah18](https://github.com/Hridayshah18)
- **Express It contributors**

## 🙏 Acknowledgments

This project uses and acknowledges:

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis](https://lenis.darkroom.engineering/)
- [Lucide](https://lucide.dev/)
- [Nodemailer](https://nodemailer.com/)
- [Hostinger](https://www.hostinger.com/)
- the open-source community
