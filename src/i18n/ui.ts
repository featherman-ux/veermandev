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
    services: 'diensten',        // Updated: services instead of separate pages
    portfolio: 'portfolio', 
    process: 'werkwijze',        // Updated: process instead of about
    contact: 'contact',
    blog: 'blog',
  },
  en: {
    home: 'home',
    services: 'services',        // Updated: services instead of separate pages
    portfolio: 'portfolio',
    process: 'process',          // Updated: process instead of about
    contact: 'contact',
    blog: 'blog',
  },
} as const;

export const ui = {
  en: {
    // Navigation (Updated to match new structure)
    'nav.home': 'Home',
    'nav.services': 'Services',      // New: replaces about/pricing/technology
    'nav.portfolio': 'Portfolio',         // Updated: "Work" is more professional than "Portfolio"
    'nav.process': 'Process',        // New: replaces timeline/about
    'nav.contact': 'Contact',
    'nav.cta': 'Start Your Project', // New: header CTA button
    'nav.blog': 'Blog',

    // Hero Section (Blueprint UVP)
    'hero.title': 'Websites Engineered for Growth',
    'hero.subtitle': 'We build blazingly fast, unbreakably secure websites that convert visitors into loyal customers. Stop settling for a digital brochure—invest in a performance asset.',
    'hero.cta': 'Start Your Growth Project',

    // Services Page
    'services.title': 'Strategic Growth Services',
    'services.subtitle': 'Partnership-driven solutions that deliver measurable results',
    'services.growth_driven': 'Growth-Driven Design',
    'services.jamstack': 'Jamstack Development', 
    'services.optimization': 'Performance Optimization',
    
    // Portfolio/Work Page
    'portfolio.title': 'Proven Results, Exceptional Design',
    'portfolio.subtitle': 'Every project is a partnership focused on measurable business growth',
    
    // Process Page
    'process.title': 'Your Strategic Growth Partners',
    'process.subtitle': 'From discovery to continuous growth—here\'s how we work together',
    
    // Contact Page
    'contact.title': 'Let\'s Build Something Great Together',
    'contact.description': 'Schedule a free discovery call or send us a message. We\'ll get back to you within one business day with insights and next steps for your project.',
    'contact.cta': 'Get in Touch',
    'contact.calendar_title': 'Schedule Your Growth Call',
    'contact.form_title': 'Send Us a Message',

    // Common CTAs (Blueprint-compliant)
    'cta.primary': 'Schedule Discovery Call',
    'cta.secondary': 'See Our Results',
    'cta.tertiary': 'Get Free Performance Audit',
    'cta.urgent': 'Start This Week',

    // Trust Signals
    'trust.response_time': '24-hour response',
    'trust.consultation': 'No-pressure consultation', 
    'trust.strategy': 'Custom strategy included',
    'trust.results': 'Proven Results',
    'trust.technology': 'Modern Technology',
    'trust.partnership': 'True Partnership',

    // General
    'page_not_found': 'Page not found',
    'back_home': 'Back to home',
    'loading': 'Loading...',
    'learn_more': 'Learn more',
    'view_case_study': 'View case study',
    'read_more': 'Read more',
  },
  nl: {
    // Navigation (Updated to match new structure)
    'nav.home': 'Home',
    'nav.services': 'Diensten',      // New: replaces about/pricing/technology
    'nav.portfolio': 'Werk',         // Updated: "Werk" is more professional
    'nav.process': 'Werkwijze',      // New: replaces timeline/about
    'nav.contact': 'Contact',
    'nav.cta': 'Start Uw Project',   // New: header CTA button
    'nav.blog': 'Blog',

    // Hero Section (Blueprint UVP)
    'hero.title': 'Websites Ontworpen voor Groei',
    'hero.subtitle': 'Wij bouwen razendsnelle, onbreekbaar veilige websites die bezoekers omzetten naar trouwe klanten. Stop met genoegen nemen met een digitale brochure—investeer in een prestatie-asset.',
    'hero.cta': 'Start Uw Groeiproject',

    // Services Page
    'services.title': 'Strategische Groei Diensten',
    'services.subtitle': 'Partnerschap-gedreven oplossingen die meetbare resultaten leveren',
    'services.growth_driven': 'Groei-Gedreven Ontwerp',
    'services.jamstack': 'Jamstack Ontwikkeling',
    'services.optimization': 'Prestatie Optimalisatie',
    
    // Portfolio/Work Page
    'portfolio.title': 'Bewezen Resultaten, Uitzonderlijk Ontwerp',
    'portfolio.subtitle': 'Elk project is een partnerschap gericht op meetbare bedrijfsgroei',
    
    // Process Page
    'process.title': 'Uw Strategische Groei Partners',
    'process.subtitle': 'Van ontdekking tot continue groei—zo werken we samen',
    
    // Contact Page
    'contact.title': 'Laten We Samen Iets Geweldigs Bouwen',
    'contact.description': 'Plan een gratis kennismakingsgesprek of stuur ons een bericht. We nemen binnen één werkdag contact op met inzichten en vervolgstappen.',
    'contact.cta': 'Neem Contact Op',
    'contact.calendar_title': 'Plan Uw Groei Gesprek',
    'contact.form_title': 'Stuur Ons Een Bericht',

    // Common CTAs (Blueprint-compliant)
    'cta.primary': 'Plan Kennismakingsgesprek',
    'cta.secondary': 'Bekijk Onze Resultaten',
    'cta.tertiary': 'Krijg Gratis Prestatie-audit',
    'cta.urgent': 'Start Deze Week',

    // Trust Signals
    'trust.response_time': '24-uurs reactie',
    'trust.consultation': 'Geen-druk consultatie',
    'trust.strategy': 'Custom strategie inbegrepen',
    'trust.results': 'Bewezen Resultaten',
    'trust.technology': 'Moderne Technologie', 
    'trust.partnership': 'Waar Partnerschap',

    // General
    'page_not_found': 'Pagina niet gevonden',
    'back_home': 'Terug naar home',
    'loading': 'Laden...',
    'learn_more': 'Meer informatie',
    'view_case_study': 'Bekijk case study',
    'read_more': 'Lees meer',
  },
} as const;
