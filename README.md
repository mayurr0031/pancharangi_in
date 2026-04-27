# Chitroona (ಚಿತ್ರೂಣ.in) — Next.js Marketing Site

This repository is a Next.js (App Router) marketing site for a Kannada creative studio offering photography, event management, and design services.

**Quick status:** Mostly-implemented static site. Main page and sections exist (navbar, hero, services, gallery, pricing, team, contact, location, footer). Missing automated tests, CI, and some developer tooling (eslint configuration, test scripts).

**What I added:**
- Project summary file: [SUMMARY.md](SUMMARY.md)

**Local setup & common commands**

Use `pnpm` (recommended) or `npm` / `yarn`.

Install dependencies:

```bash
pnpm install
# or
npm install
```

Run development server:

```bash
pnpm dev
# or
npm run dev
```

Build for production:

```bash
pnpm build
# or
npm run build
```

Start production server (after build):

```bash
pnpm start
# or
npm run start
```

Linting:

```bash
npm run lint
```

Note: there is a `lint` script but no ESLint config/dependency in `package.json`. I recommend adding ESLint + Prettier.

How to test quickly (manual checklist):
- Run the dev server and open http://localhost:3000
- Verify main sections render: Navbar, Hero, Services, Gallery, Pricing, Team, Contact, Location, Footer
- Test mobile menu and language toggle (Kannada/English)
- Submit contact form (if enabled) and check console/network
- Open browser console and fix runtime errors
- Run `pnpm build` to verify production build succeeds

Deployment recommendations:
- Vercel: easiest for Next.js. Connect the repo, set build command `pnpm build` (or `npm run build`) and output defaults. No special env vars required unless you add analytics keys.
- Alternative: Netlify (with Next support) or custom server on Node hosting.

Suggested immediate improvements (prioritized):
1. Add ESLint + Prettier and a `lint` CI job.
2. Add basic automated tests (Playwright/E2E or Jest + React Testing Library) for key UI flows (navbar, language toggle, contact form).
3. Add GitHub Actions to run lint and tests on PRs.
4. Add TypeScript strict checks (tsconfig) and ensure no type errors at build time.
5. Add accessibility & SEO checks (axe, Lighthouse) and optimize images with Next `Image` where appropriate (already used for logo).
6. Add contact form backend or API route if form should submit real data.

If you want, I can:
- Add ESLint + Prettier config and install packages
- Add a small Playwright or Jest smoke test and a GitHub Actions workflow
- Run the app locally here and fix any runtime/build errors (I will need permission to run commands)

Files to inspect for dev work:
- [app/layout.tsx](app/layout.tsx)
- [app/page.tsx](app/page.tsx)
- [components/navbar.tsx](components/navbar.tsx)
- [components/hero-section.tsx](components/hero-section.tsx)

---
Made a concise summary; see [SUMMARY.md](SUMMARY.md) for a short component map and completion checklist.
