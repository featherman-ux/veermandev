export const languages = {
  en: 'English',
  nl: 'Nederlands',
};

export const defaultLang = 'nl';

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
};

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.timeline': 'Timeline',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Your Partner in Digital Innovation.',
    'hero.subtitle': 'We build fast, modern websites that deliver results.',
    'hero.cta': 'Get in Touch',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.description': 'Get in touch with us for inquiries or quotes.',
    'contact.heading': 'Send us a message',
    'contact.subtitle': 'We will respond as soon as possible.',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your full name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'you@example.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Write your message here...',
    'contact.submit': 'Send Message',

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
    'nav.timeline': 'Tijdlijn',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Uw Partner in Digitale Innovatie.',
    'hero.subtitle': 'Wij bouwen snelle, moderne websites die resultaten leveren.',
    'hero.cta': 'Neem Contact Op',

    // Contact Page
    'contact.title': 'Contact',
    'contact.description': 'Neem contact met ons op voor vragen of offertes.',
    'contact.heading': 'Stuur ons een bericht',
    'contact.subtitle': 'We nemen zo snel mogelijk contact met je op.',
    'contact.name': 'Naam',
    'contact.namePlaceholder': 'Je volledige naam',
    'contact.email': 'E-mail',
    'contact.emailPlaceholder': 'jij@voorbeeld.com',
    'contact.message': 'Bericht',
    'contact.messagePlaceholder': 'Schrijf hier je bericht...',
    'contact.submit': 'Verstuur bericht',

    // General
    page_not_found: 'Pagina niet gevonden',
    back_home: 'Terug naar home',
  },
} as const;