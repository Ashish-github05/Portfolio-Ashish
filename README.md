# Portfolio Website

A modern, professional full-stack portfolio built with **React + Tailwind CSS** (frontend) and **NestJS** (backend).

## Project Structure

```
Portfolio/
├── backend/          # NestJS REST API
│   └── src/
│       ├── contact/  # Contact form module
│       ├── portfolio/# Portfolio data module
│       ├── app.module.ts
│       └── main.ts
└── frontend/         # React + Vite + Tailwind CSS
    └── src/
        ├── components/  # All UI components
        ├── context/     # Theme context
        ├── data/        # Portfolio data
        └── hooks/       # Custom hooks
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

---

### Backend (NestJS)

```bash
cd backend
npm install
npm run start:dev
```

API will be available at `http://localhost:3001/api`

**Endpoints:**
| Method | Path | Description |
|--------|------|-------------|
| GET | /api/health | Health check |
| GET | /api/portfolio | All portfolio data |
| GET | /api/portfolio/skills | Skills data |
| GET | /api/portfolio/experience | Work experience |
| GET | /api/portfolio/projects | Projects |
| GET | /api/portfolio/achievements | Certifications & awards |
| GET | /api/portfolio/testimonials | Testimonials |
| POST | /api/contact | Submit contact form |

---

### Frontend (React + Tailwind)

```bash
cd frontend
npm install
npm run dev
```

App will be available at `http://localhost:5173`

---

## Features

- ✅ Dark / Light mode toggle (persistent)
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations (Framer Motion)
- ✅ Typing animation in Hero
- ✅ Animated terminal display
- ✅ Animated skill progress bars
- ✅ Interactive experience timeline
- ✅ Filterable project grid
- ✅ Testimonials carousel
- ✅ Contact form with validation + NestJS API
- ✅ SEO-friendly meta tags
- ✅ Custom scrollbar

## Tech Stack

**Frontend:**
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Axios
- Vite

**Backend:**
- NestJS
- class-validator / class-transformer
- TypeScript

Link: https://ashish-github05.github.io/Portfolio-Ashish/
