# Saif Eldin Tamer Sallam Portfolio

A production-ready personal portfolio for an AI Engineer, built with React, Vite, and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

This repository includes a GitHub Actions workflow in `.github/workflows/deploy.yml`.

1. Push the project to a GitHub repository.
2. In GitHub, open `Settings > Pages`.
3. Set the source to `GitHub Actions`.
4. Push to the `main` branch.

The Vite config uses `base: "./"` so assets resolve correctly on project pages.

## Assets

- Avatar: `public/assets/avatar.png`
- Resume: `public/assets/Saif-Eldin-Tamer-Sallam-Resume.pdf`
- Optional ML visuals:
  - `public/outputs/figures/correlation_heatmap.png`
  - `public/outputs/figures/model_comparison.png`

If the ML visual files are not present, the interface displays polished fallback chart placeholders.
