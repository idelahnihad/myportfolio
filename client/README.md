# React Portfolio Site — COMP229 Assignment 1

A personal portfolio website built with **React + TypeScript + Vite + Tailwind CSS**.

## Pages (6 required by the rubric)

| Page | Route | Rubric coverage |
|---|---|---|
| Home | `/#/` | Welcome message, mission statement, redirect buttons |
| About Me | `/#/about` | Legal name, headshot, bio, PDF resume link |
| Projects | `/#/projects` | 3 projects with images, roles, outcomes |
| Education | `/#/education` | Qualifications with dates and credentials |
| Services | `/#/services` | 6 services with icons |
| Contact Me | `/#/contact` | Contact info panel + interactive form (captures data, redirects Home) |

## Personalize it (edit ONE file)

All content lives in **`src/data/portfolioData.ts`** — change the name,
bio, projects, education, services, and contact details there.

Replace these placeholder assets in `public/assets/` with your own files
(same file names, or update the paths in `portfolioData.ts`):

- `headshot.svg` → your head-and-shoulders photo
- `resume.pdf` → your real resume
- `project-*.svg` → real screenshots of your projects

## Run locally

```bash
npm install
npm run dev      # opens the dev server (usually http://localhost:5173)
```

## Build for production

```bash
npm run build    # outputs static files to dist/
```

## Push to GitHub (Version Control — 10 marks)

```bash
git init
git add .
git commit -m "Initial commit: project scaffold with routing and layout"
# ... make changes as you personalize ...
git add .
git commit -m "Add personal content: bio, projects, education"
git commit -m "Polish styles and add resume PDF"   # multiple staged commits!
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/react-portfolio.git
git push -u origin main
```

Commit at several stages of development (not one giant commit) — the
rubric checks that the project was updated at different stages.

## Deploy to a cloud host (Cloud Hosting — 10 marks)

The app uses **HashRouter**, so it works on any static host with no
extra configuration.

**Netlify (easiest):**
1. `npm run build`
2. Drag the `dist/` folder onto https://app.netlify.com/drop
3. Copy the live URL for your submission.

**GitHub Pages:**
1. Push the repo (above).
2. `npm install --save-dev gh-pages`
3. Add to `package.json`:
   `"homepage": "https://YOUR-USERNAME.github.io/react-portfolio"` and scripts
   `"predeploy": "npm run build"`, `"deploy": "gh-pages -d dist"`
4. `npm run deploy`

**Vercel:** import the GitHub repo at https://vercel.com — it auto-detects
Vite and deploys.

## Note on the contact form

The form captures submissions into React state and mirrors them to the
browser's `localStorage` (see the `handleSubmit` function in
`src/pages/Contact.tsx`), then redirects to the Home page — exactly as
the assignment specifies ("does not have to be fully functional
initially… should be able to capture the information… and redirect it
back to the Home Page"). Captured messages are stored only in the
visitor's browser; hooking the form up to a real email/back-end service
is a possible future improvement.
