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

Instagram integration and secrets
--------------------------------

This project includes a server-side API and helper endpoints to integrate Instagram content using the Instagram Graph API. To enable it locally and in CI/production, follow these steps:

1. Create a Facebook app and configure Instagram Basic/Graph API access. You will need:
	- App ID (`INSTAGRAM_APP_ID`)
	- App Secret (`INSTAGRAM_APP_SECRET`)
	- An Instagram Business or Creator account connected to a Facebook Page. Obtain the IG User ID (`INSTAGRAM_IG_USER_ID`).

2. Set environment variables locally (create `.env.local` in repository root):

```bash
INSTAGRAM_APP_ID=your_app_id
INSTAGRAM_APP_SECRET=your_app_secret
INSTAGRAM_IG_USER_ID=your_ig_user_id
# After performing the OAuth flow below, set INSTAGRAM_ACCESS_TOKEN to the long-lived token you receive
INSTAGRAM_ACCESS_TOKEN=your_long_lived_token
```

3. To run an OAuth flow locally and obtain a long-lived token, visit this route in your browser after setting `INSTAGRAM_APP_ID` and `INSTAGRAM_APP_SECRET`:

```
http://localhost:3000/api/instagram/auth
```

You will be redirected to Facebook/Instagram to authorize the app. After consenting, you will be redirected to the callback route which will exchange the code for a long-lived token. The callback response will include the `longLivedToken` which you should store securely (for local development add it to `.env.local` as `INSTAGRAM_ACCESS_TOKEN`).

4. You can refresh a long-lived token server-side via:

```
GET /api/instagram/refresh
```

This route reads `INSTAGRAM_ACCESS_TOKEN` from environment and returns a refreshed token response. In production, run this periodically (e.g., a cron or scheduled job) to keep the token fresh.

CI / GitHub Actions
-------------------

I added a GitHub Actions workflow that installs dependencies, runs `pnpm lint:fix` (best-effort), then runs `pnpm lint -- --max-warnings=0` which fails the job on any lint warnings, and finally runs the test suite once.

The workflow file is at [.github/workflows/ci.yml](.github/workflows/ci.yml).


Files to inspect for dev work:
- [app/layout.tsx](app/layout.tsx)
- [app/page.tsx](app/page.tsx)
- [components/navbar.tsx](components/navbar.tsx)
- [components/hero-section.tsx](components/hero-section.tsx)

---
Made a concise summary; see [SUMMARY.md](SUMMARY.md) for a short component map and completion checklist.
