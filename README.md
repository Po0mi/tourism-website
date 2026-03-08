# 🇵🇭 PinasGuide

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=flat-square&logo=greensock&logoColor=white)
![Lenis](https://img.shields.io/badge/Lenis-Smooth%20Scroll-black?style=flat-square)
![SCSS](https://img.shields.io/badge/SCSS-Modules-CC6699?style=flat-square&logo=sass&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-v7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)
![Status](https://img.shields.io/badge/Status-In%20Development-ff9e00?style=flat-square)

> **Your editorial guide to the 7,641 islands of the Philippines.**  
> A static, animation-heavy tourism website built with a cinematic magazine aesthetic.

---

## ✨ Overview

PinasGuide is a passion project and academic portfolio piece built to document every corner of the Philippine archipelago — not just the famous beaches, but the hidden coves, mountain villages, and stories that make this nation extraordinary.

Designed and developed by **[Dan Gabrielle De Castro](https://github.com/Po0mi)**, 4th-year IT student at Central Philippine University, Iloilo.

---

## 🖼️ Features

- **Editorial magazine aesthetic** — Theater font headlines, amber + cream palette, dark cinematic layouts
- **GSAP animations** — Scroll-triggered entrance animations on every section, parallax hero, staggered reveals
- **Lenis smooth scroll** — Synced with GSAP ScrollTrigger for buttery page scrolling
- **Custom cursor** — Two-layer dot + ring cursor with hover states for links and cards
- **Split-panel loader** — Animated intro screen with counter, progress bar, and split exit
- **Destination filtering** — Tag-based filter with animated card transitions
- **Region explorer** — Tab-switching panel layout with per-panel entrance animations
- **Fully responsive** — Mobile, tablet, 1440×900 laptop, and wide desktop breakpoints

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, Destinations preview, Regions preview, About, Footer |
| `/destinations` | Full destinations grid with tag filters |
| `/regions` | Luzon / Visayas / Mindanao split-panel explorer |
| `/about` | Manifesto-style editorial about page |

---

## 🗂️ Project Structure

```
src/
├── assets/
│   ├── bg/          # Hero background video
│   └── fonts/       # Theater font files
├── components/
│   ├── Hero.jsx / Hero.scss
│   ├── Destinations.jsx / Destinations.scss
│   ├── Regions.jsx / Regions.scss
│   ├── About.jsx / About.scss
│   ├── Footer.jsx / Footer.scss
│   └── CustomCursor.jsx / CustomCursor.scss
│   └── Loader.jsx / Loader.scss
├── data/
│   ├── destinations.js
│   └── regions.js
├── hooks/
│   ├── useActiveNav.js
│   ├── useAboutAnimation.js
│   ├── useAboutPageAnimation.js
│   ├── useCursor.js
│   ├── useDestinationsAnimation.js
│   ├── useDestinationsPageAnimation.js
│   ├── useFooterAnimation.js
│   ├── useHeroAnimation.js
│   ├── useHeroParallax.js
│   ├── useNavbarAnimation.js
│   ├── useNavbarMobileAnimation.js
│   ├── useRegionsAnimation.js
│   ├── useRegionsPageAnimation.js
│   └── useSmoothScroll.js
├── layouts/
│   ├── Navbar.jsx / Navbar.scss
│   └── Mainlayout.jsx / Mainlayout.scss
└── pages/
    ├── Home.jsx
    ├── DestinationsPage.jsx / Destinationspage.scss
    ├── RegionsPage.jsx / Regionspage.scss
    └── AboutPage.jsx / Aboutpage.scss
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=18`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/dangabrielle/pinasguide.git
cd pinasguide

# Install dependencies
npm install

# Start dev server
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [React 19](https://react.dev) | UI framework |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [React Router v7](https://reactrouter.com) | Client-side routing |
| [GSAP + ScrollTrigger](https://gsap.com) | All animations |
| [Lenis](https://lenis.darkroom.engineering) | Smooth scroll |
| [SCSS](https://sass-lang.com) | Styling (flat classnames) |

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--main-text` | `#ff9e00` | Amber accent — headings, highlights |
| `--bg-color` | `#0a0908` | Near-black background |
| `--secondary-text` | `#f4f3ee` | Warm cream body text |
| Font: Display | `Theater Bold` | All editorial headlines |
| Font: Body | System sans-serif | Body copy, UI labels |

---

## 📦 Dependencies

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^7.0.0",
  "gsap": "^3.12.0",
  "lenis": "^1.1.0",
  "sass": "^1.70.0"
}
```

---

## 🗺️ Roadmap

- [ ] Add more destinations to `destinations.js`
- [ ] Individual destination detail pages (`/destinations/:id`)
- [ ] Individual region detail pages (`/regions/:name`)
- [ ] 404 Not Found page
- [ ] Deploy to Vercel

---

## 📝 License

MIT © [Dan Gabrielle De Castro](https://github.com/Po0mi)

---

<p align="center">
  Made with 🤍 in Iloilo, Philippines
  <br/>
  <sub>14°35'N · 121°00'E</sub>
</p>
