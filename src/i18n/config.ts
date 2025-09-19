// src/i18n/config.ts

export const defaultLang = 'nl';
export const supportedLangs = ['nl', 'en'];

// Maps canonical route names to translated slugs
export const routes = {
  nl: {
    home: 'home',
    about: 'over-ons',
    portfolio: 'portfolio',
    pricing: 'prijzen',
    process: 'werkwijze',
    technology: 'technologie',
    contact: 'contact',
    timeline: 'tijdlijn',
  },
  en: {
    home: 'home',
    about: 'about',
    portfolio: 'portfolio',
    pricing: 'pricing',
    process: 'process',
    technology: 'technology',
    contact: 'contact',
    timeline: 'timeline',
  },
} as const;

// UI translations for pages, nav, buttons, etc.
export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.process': 'Process',
    'nav.technology': 'Technology',
    'nav.timeline': 'Timeline',
    'nav.contact': 'Contact',
    // Hero section
    'hero.title': 'Your Partner in Digital Innovation.',
    'hero.subtitle': 'We build fast, modern websites that deliver results.',
    'hero.cta': 'Get in Touch',
    // Other translations...
    page_not_found: 'Page not found',
    back_home: 'Back to home',
  },
  nl: {
    'nav.home': 'Home',
    'nav.about': 'Over Ons',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Prijzen',
    'nav.process': 'Werkwijze',
    'nav.technology': 'Technologie',
    'nav.timeline': 'Tijdlijn',
    'nav.contact': 'Contact',
    // Hero section
    'hero.title': 'Uw Partner in Digitale Innovatie.',
    'hero.subtitle': 'Wij bouwen snelle, moderne websites die resultaten leveren.',
    'hero.cta': 'Neem Contact Op',
    // Other translations...
    page_not_found: 'Pagina niet gevonden',
    back_home: 'Terug naar home',
  },
} as const;
