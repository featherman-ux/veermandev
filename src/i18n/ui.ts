// src/i18n/ui.ts

export const languages = {
  en: 'English',
  nl: 'Nederlands',
};

export const defaultLang = 'nl';

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

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.process': 'Process',
    'nav.technology': 'Technology',
    'nav.timeline': 'Timeline',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Your Partner in Digital Innovation.',
    'hero.subtitle': 'We build fast, modern websites that deliver results.',
    'hero.cta': 'Get in Touch',

    // Contact Page - SIMPLIFIED
    'contact.title': 'Contact Us',
    'contact.description': 'Get in touch with us for inquiries, quotes, or to book a discovery call.',

    // General
    page_not_found: 'Page not found',
    back_home: 'Back to home',
  },
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Over Ons',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Prijzen',
    'nav.process': 'Werkwijze',
    'nav.technology': 'Technologie',
    'nav.timeline': 'Tijdlijn',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Uw Partner in Digitale Innovatie.',
    'hero.subtitle': 'Wij bouwen snelle, moderne websites die resultaten leveren.',
    'hero.cta': 'Neem Contact Op',

    // Contact Page - SIMPLIFIED  
    'contact.title': 'Contact',
    'contact.description': 'Neem contact met ons op voor een vrijblijvende offerte of kennismakingsgesprek.',

    // General
    page_not_found: 'Pagina niet gevonden',
    back_home: 'Terug naar home',
  },
} as const;
