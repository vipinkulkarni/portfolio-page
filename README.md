# Vipinkumar Kulkarni — Portfolio

A modern, responsive developer portfolio built with React, TypeScript, and Vite.

## Tech Stack

- **React** with TypeScript
- **Vite** for fast builds and HMR
- **Framer Motion** for scroll-triggered animations
- **React Icons** for consistent iconography
- **React Scroll** for smooth section navigation

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/    # Navbar, Footer
├── sections/      # Hero, About, Experience, Skills, Projects, Education, Achievements, Contact
├── data/          # All resume/portfolio data in one place (resume.ts)
├── hooks/         # Custom hooks (useTypewriter)
└── styles/        # Global CSS variables and resets
```

## Customization

All portfolio content (personal info, experience, projects, skills, education, awards) is centralized in `src/data/resume.ts`. Update that single file to make the portfolio your own.
