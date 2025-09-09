// src/i18n/config.ts

export const defaultLang = 'nl';
export const supportedLangs = ['nl', 'en'];

// Maps canonical route names to translated slugs
export const routes = {
  nl: {
    about: 'over-ons',
    portfolio: 'portfolio',
    pricing: 'prijzen',
    contact: 'contact',
    timeline: 'tijdlijn',
  },
  en: {
    about: 'about',
    portfolio: 'portfolio',
    pricing: 'pricing',
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
    'nav.timeline': 'Timeline',
    'nav.contact': 'Contact',
    'hero.title': 'Your Partner in Digital Innovation.',
    'hero.subtitle': 'We build fast, modern websites that deliver results.',
    'hero.cta': 'Get in Touch',
    'contact.title': 'Contact Us',
    'contact.description': 'Reach out for a project or question.',
    'contact.heading': 'Contact',
    'contact.subtitle': 'We’d love to hear from you!',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Enter your name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'Enter your email',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Your message...',
    'contact.submit': 'Send Message',
    page_not_found: 'Page not found',
    back_home: 'Back to home',
  },
  nl: {
    'nav.home': 'Home',
    'nav.about': 'Over Ons',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Prijzen',
    'nav.timeline': 'Tijdlijn',
    'nav.contact': 'Contact',
    'hero.title': 'Uw Partner in Digitale Innovatie.',
    'hero.subtitle': 'Wij bouwen snelle, moderne websites die resultaten leveren.',
    'hero.cta': 'Neem Contact Op',
    'contact.title': 'Neem Contact Op',
    'contact.description': 'Neem contact op voor een project of vraag.',
    'contact.heading': 'Contact',
    'contact.subtitle': 'Wij horen graag van u!',
    'contact.name': 'Naam',
    'contact.namePlaceholder': 'Vul uw naam in',
    'contact.email': 'E-mail',
    'contact.emailPlaceholder': 'Vul uw e-mail in',
    'contact.message': 'Bericht',
    'contact.messagePlaceholder': 'Uw bericht...',
    'contact.submit': 'Verstuur',
    page_not_found: 'Pagina niet gevonden',
    back_home: 'Terug naar home',
  },
} as const;