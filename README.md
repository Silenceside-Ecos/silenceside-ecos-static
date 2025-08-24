# React + Tailwind Marketing Starter

A modern React + Vite + Tailwind CSS starter with common marketing sections and a GitHub Pages deploy workflow.

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages (via Actions)

1. Create a new GitHub repo and push this project.
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions** (not Branch).
3. Push to `main` – the included workflow builds and deploys automatically.

### Base path for project pages
- **User/Org site** (`username.github.io`): assets served at `/` → no change needed.
- **Project site** (`username.github.io/my-repo`): assets served at `/my-repo/`.
  The workflow sets `BASE_PATH` automatically to `/<repo-name>/`. If you use a **custom domain** or a user/org site, it sets `/`.

### Custom domain (optional)
- Add your domain in **Settings → Pages → Custom domain** or create a `public/CNAME` file containing your domain.
- Point your DNS to GitHub Pages (A records or CNAME).

## Sections included
- Navbar with mobile menu + dark mode toggle
- Hero
- Features
- Pricing
- Testimonials
- FAQ
- CTA
- Contact (demo form)
- Footer

## Notes
- SPA fallback: `404.html` redirects to `index.html` for deep links on Pages.
- Styling: Tailwind CSS with small design system and glass cards.
- Icons: lucide-react
- License: MIT
