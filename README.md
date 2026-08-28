# Rewards4Passion Nigeria Ltd

Portable static-export source for the Rewards4Passion Nigeria Ltd corporate website.

## Pages

- Home
- About Us
- Services
- Contact Us

## Run locally

Requirements: Node.js 22.13 or newer and npm.

```bash
npm ci
npm run dev
```

## Create the static website

```bash
npm run build
```

The completed static website is written to the `out/` directory. Upload the contents of `out/` to any static hosting provider.

The included GitHub Actions workflow automatically builds and publishes the site to GitHub Pages after changes are pushed to `main`. In **Settings → Pages**, keep the publishing source set to **GitHub Actions** so it does not compete with GitHub's legacy branch-based Pages workflow.

## Main source folders

- `app/` — pages and styling
- `components/` — navigation and footer
- `public/images/` — website imagery

## Business contact

**Rewards4Passion Nigeria Ltd**  
No. 7 Igwe Close, Rukpokwu, Rivers State, Nigeria  
0902 438 9087 · 0907 036 1661  
Rewards4Passion@gmail.com
