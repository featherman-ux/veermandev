# Veerman Web Development

A modern, multilingual website built with Astro, Tailwind CSS, and deployed on Cloudflare Pages.

## 🚀 Features

- **Multilingual Support**: Dutch and English language support with automatic language detection
- **Server-Side Rendering**: Using Astro's SSR capabilities with Cloudflare adapter
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Security**: CSRF protection, input sanitization, and rate limiting
- **Performance Optimized**: Image optimization, minimal JavaScript

## 📁 Project Structure

```
/
├── .github/workflows/   # GitHub Actions workflows for CI/CD
├── public/              # Static assets
├── src/
│   ├── actions/         # Form actions and API endpoints
│   ├── components/      # Reusable UI components
│   ├── i18n/            # Internationalization utilities
│   ├── layouts/         # Page layouts
│   ├── pages/           # Page components and routes
│   │   ├── en/          # English pages
│   │   └── nl/          # Dutch pages
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
└── package.json
```

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start local dev server at `localhost:4321`       |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally before deploying      |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🌐 Deployment

This project is configured to deploy automatically to Cloudflare Pages via GitHub Actions when changes are pushed to the main branch.

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy using the Cloudflare Pages GitHub Action

## 🔧 Development

### Adding a New Page

1. Create a new `.astro` file in the appropriate language folder (`src/pages/en/` or `src/pages/nl/`)
2. Add translations to the i18n files if needed

### Adding a New Component

1. Create a new component in `src/components/`
2. Import and use it in your pages

## 🛡️ Security

The project implements several security best practices:
- CSRF token protection
- Input sanitization
- Rate limiting
- Content Security Policy headers

## 📝 License

All rights reserved. This codebase is proprietary and confidential.
