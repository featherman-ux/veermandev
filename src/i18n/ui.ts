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
    'contact.mainHeading': 'Let\'s Build Something Great Together',
    'contact.mainSubtitle': 'Have a project in mind? The best way to get started is to book a free discovery call directly in my calendar.',
    'meeting.title': 'Book a Discovery Call',
    'meeting.description': 'Choose a time that works for you. We\'ll spend 30 minutes discussing your project goals, no strings attached.',
    'contact.formTitle': 'Or Send a Message',
    
    // -- NEW TRANSLATIONS FOR AJAX FORM --
    'form.sending': 'Sending...',
    'form.successTitle': 'Thank you!',
    'form.successBody': 'Your message has been sent successfully. I will get back to you as soon as possible.',
    'form.error': 'Something went wrong while sending the form. Please try again.',


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
    'contact.mainHeading': 'Laten We Samen Iets Geweldigs Bouwen',
    'contact.mainSubtitle': 'Heb je een project in gedachten? De beste manier om te beginnen is door een vrijblijvend kennismakingsgesprek in te plannen.',
    'meeting.title': 'Plan een Kennismakingsgesprek',
    'meeting.description': 'Kies hieronder een moment dat jou uitkomt. We bespreken 30 minuten vrijblijvend de mogelijkheden voor je project.',
    'contact.formTitle': 'Of Stuur een Bericht',
    
    // -- NIEUWE VERTALINGEN VOOR AJAX FORMULIER --
    'form.sending': 'Verzenden...',
    'form.successTitle': 'Bedankt!',
    'form.successBody': 'Je bericht is succesvol verzonden. Ik neem zo snel mogelijk contact met je op.',
    'form.error': 'Er is iets misgegaan bij het verzenden. Probeer het opnieuw.',

    // General
    page_not_found: 'Pagina niet gevonden',
    back_home: 'Terug naar home',
  },
} as const;

