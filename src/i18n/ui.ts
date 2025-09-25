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
    services: 'diensten',
    portfolio: 'portfolio',
    process: 'werkwijze',
    contact: 'contact',
    terms: 'voorwaarden',
    privacy: 'privacybeleid',
  },
  en: {
    home: 'home',
    services: 'services',
    portfolio: 'portfolio',
    process: 'process',
    contact: 'contact',
    terms: 'terms',
    privacy: 'privacy',
  },
} as const;

export const ui = {
  en: {
    // SHARED
    'site.title': 'VeermanDevelopment | Websites That Bring Customers',
    'site.description':
      'We build fast, reliable websites for small businesses. Clear advice, no jargon, and sites that turn visits into customers.',
    'launch.offer': 'Launch offer: €100 off every package + brand strategy included | Limited time only!',
    'small.business.champion': 'Your small business partner',

    // NAVIGATION
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.process': 'Process',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cta': 'Plan Your Free Call',

    // FOOTER
    'footer.tagline': 'Websites That Bring Customers',
    'footer.description':
      "We build fast, reliable websites so small businesses like yours get found and trusted online. No jargon, just practical results.",
    'footer.services': 'Navigation',
    'footer.resources': 'Resources',
    'footer.get.started': 'Get Started',
    'footer.discovery.call': 'Free Advice Call',
    'footer.our.process': 'How We Work',
    'footer.based.in': 'Based in the Netherlands',
    'footer.copyright': `© ${new Date().getFullYear()} Veerman Development. All rights reserved.`,
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.built.with': 'Built with Astro ⚡',
    'footer.performance.load': 'This site loads in',
    'footer.performance.time': '0.8 seconds',
    'footer.performance.tech': '• 100% Jamstack • No maintenance headaches',
    'footer.metric1.value': '340%',
    'footer.metric1.label': 'Average lead increase',
    'footer.metric2.value': '<1s',
    'footer.metric2.label': 'Load time guarantee',
    'footer.metric3.value': '24h',
    'footer.metric3.label': 'Response time',

    // HOME PAGE
    'home.page.title': 'Your Partner in Online Growth | VeermanDevelopment',
    'home.page.description':
      'We help small businesses stand out online with fast, clear websites and personal guidance from start to finish.',
    'home.hero.title': 'We Build Websites That Grow With You',
    'home.hero.description':
      'Running a business is already a lot. We handle the tech, keep it simple, and give you a website that brings in customers.',
    'home.hero.typewriter1': 'More customers',
    'home.hero.typewriter2': 'Fast load times',
    'home.hero.typewriter3': 'No jargon',
    'home.hero.typewriter4': 'Easy updates',
    'home.hero.typewriter5': 'Local leads',
    'home.hero.typewriter6': 'Proud brand',
    'home.hero.cta.primary': 'See Packages & Pricing',
    'home.hero.cta.secondary': 'View Real Projects',
    'home.trust.signal1': 'Personal guidance from first chat to launch',
    'home.trust.signal2': 'Built in 3 days with clear pricing',
    'home.trust.signal3': 'Brand story and SEO basics included',
    'home.philosophy.title': 'Everyone has a website, you want to stand out',
    'home.philosophy.subtitle1': 'Templates make everything look the same',
    'home.philosophy.text1': 'DIY tools are everywhere, but copy-paste sites make it hard for customers to remember you.',
    'home.philosophy.problem1': 'You blend into the crowd',
    'home.philosophy.problem2': "Customers don't know what makes you different",
    'home.philosophy.problem3': 'Competitors get the call',
    'home.philosophy.subtitle2': 'We help you show your personality',
    'home.philosophy.text2':
      "We combine design, copy, and tech so your website feels like your business and delivers clear next steps for customers.",
    'home.philosophy.solution1': 'Your brand feels familiar and trustworthy',
    'home.philosophy.solution2': 'Customers choose you over bigger players',
    'home.philosophy.solution3': 'You keep growing in your local market',
    'home.promise.title': 'Our Promise',
    'home.promise.text':
      'We translate your story into a fast, easy-to-manage website that wins customers. No ongoing contracts, just a reliable partner when you need us.',
    'home.comparison.title': 'Why most small business websites feel generic',
    'home.comparison.text':
      'Most are built with the same tools and rushed updates. We build something you can proudly share with customers.',
    'home.comparison.badge': 'Professional websites, now within reach for small businesses',
    'home.packages.title': 'Choose Your Package',
    'home.packages.subtitle': '€100 off all packages + complete brand strategy included. Your partner in online growth.',
    'home.blog.transformation.title': 'From Traveller to Blogger',
    'home.blog.transformation.text':
      'Niels wanted more than another travel template, so we built him a custom platform with interactive maps and smart content tools.',
    'home.blog.transformation.about': 'About the project',
    'home.blog.transformation.about.text': 'Clean layout, AI-assisted summaries, and reusable components to keep stories fresh.',
    'home.blog.transformation.before': 'Before: Generic blog with little insight or SEO power.',
    'home.blog.transformation.after': 'After: A unique platform with dashboards, maps, and a growing audience.',
    'home.blog.transformation.cta': 'Visit the blog',
    'home.process.title': 'How we work together',
    'home.process.step1.title': 'We learn about your business',
    'home.process.step1.text': 'Quick call about your goals, customers, and the problems your website should solve.',
    'home.process.step2.title': 'We build and refine',
    'home.process.step2.text': 'In just 3 days you see real pages, words, and tools that fit your business.',
    'home.process.step3.title': 'You launch with confidence',
    'home.process.step3.text': 'We go live, set up tracking, and stay available for tweaks and new ideas.',
    'home.process.promise': 'Partnership promise: you always talk to the same person after launch.',

    // PORTFOLIO PAGE
    'portfolio.page.title': 'Real Websites for Real Businesses | VeermanDevelopment',
    'portfolio.page.description':
      'See the projects we create for small businesses across the Netherlands. Websites that are fast, clear, and ready to bring in customers.',
    'portfolio.hero.title': 'Real websites, built together',
    'portfolio.hero.text':
      'We co-create websites with entrepreneurs so their personality shows and customers know what to do next.',
    'portfolio.filter.all': 'All examples',
    'portfolio.filter.foundation': '€249 Brand Foundation',
    'portfolio.filter.growth': '€349 Brand Growth',
    'portfolio.filter.complete': '€449 Brand Complete',
    'portfolio.cta.title': 'Ready to start together?',
    'portfolio.cta.text': "Pick the package that fits you and let's build a website that actually wins customers. Free hosting and updates included forever.",
    'portfolio.cta.primary': 'Plan Your Free Call',
    'portfolio.cta.secondary': 'Ask Questions First',
    'portfolio.launch.urgency': 'Launch offer: €100 off + complete brand strategy included. Limited to the first 20 projects.',

    // PROCESS PAGE
    'process.page.title': 'About VeermanDevelopment | Your Growth Partner',
    'process.page.description':
      'Meet the people behind the websites. Learn how we keep things simple, personal, and focused on results for small businesses.',
    'process.hero.title': 'Your dedicated partner for online growth',
    'process.hero.text':
      'We make sure your website is not a cost line but a tool that attracts customers and grows with your business.',
    'process.philosophy.title': 'Our philosophy',
    'process.philosophy.text':
      "Good tech should feel invisible. We handle performance, security, and strategy so you can focus on your clients.",

    // SERVICES PAGE
    'services.page.title': 'Website Packages for Small Businesses | VeermanDevelopment',
    'services.page.description':
      'Clear pricing, no surprises. Fast, secure websites that help you grow. Built in 3 days with hosting and updates included forever.',
    'services.hero.title': 'Choose what fits your business',
    'services.hero.text':
      'Pick the package that matches your goals. We keep the process simple and deliver a website you can rely on.',

    // CONTACT PAGE
    'contact.page.title': "Let's Talk About Your Website | VeermanDevelopment",
    'contact.page.description':
      'Ready for a fast, reliable website? Book a free call or send a message. We respond within one business day with honest advice.',
    'contact.hero.title': "Let's talk about your website",
    'contact.hero.text':
      'Plan a free advice call or email us the basics. We respond within 24 hours with clear next steps.',

    // TERMS PAGE
    'terms.page.title': 'Terms of Service | VeermanDevelopment',
    'terms.page.description':
      'Simple, transparent terms so you know exactly how we work and what to expect.',
    'terms.hero.title': 'Terms of Service',
    'terms.hero.text': 'Clear agreements that protect our collaboration.',

    // PRIVACY PAGE
    'privacy.page.title': 'Privacy Policy | VeermanDevelopment',
    'privacy.page.description':
      'Find out how we handle your data respectfully and keep your information safe.',
    'privacy.hero.title': 'Privacy Policy',
    'privacy.hero.text': 'We only collect what we need to help you and we never sell your data.',

    // 404 PAGE
    '404.title': 'Page Not Found',
    '404.heading': 'This page is missing',
    '404.message': "We couldn't find the page you're after. It might have moved or never existed.",
    '404.back_home': 'Go back home',
  },
  nl: {
    // SHARED
    'site.title': 'VeermanDevelopment | Websites die klanten opleveren',
    'site.description':
      'We bouwen snelle, veilige websites die werken op elke telefoon en klanten opleveren. Geen ingewikkeld gedoe, maar een site waar je trots op bent.',
    'launch.offer': 'Lanceringsaanbieding: €100 korting op alle pakketten + merkstrategie inbegrepen | Tijdelijk beschikbaar!',
    'small.business.champion': 'Jouw partner voor het mkb',

    // NAVIGATION
    'nav.home': 'Home',
    'nav.services': 'Diensten',
    'nav.portfolio': 'Portfolio',
    'nav.process': 'Werkwijze',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cta': 'Plan je gratis adviesgesprek',

    // FOOTER
    'footer.tagline': 'Websites die klanten opleveren',
    'footer.description':
      'We bouwen snelle, betrouwbare websites zodat ondernemers zoals jij online gevonden worden en vertrouwen uitstralen.',
    'footer.services': 'Navigatie',
    'footer.resources': 'Hulpbronnen',
    'footer.get.started': 'Aan de slag',
    'footer.discovery.call': 'Gratis adviesgesprek',
    'footer.our.process': 'Onze werkwijze',
    'footer.based.in': 'Gevestigd in Nederland',
    'footer.copyright': `© ${new Date().getFullYear()} Veerman Development. Alle rechten voorbehouden.`,
    'footer.privacy': 'Privacybeleid',
    'footer.terms': 'Voorwaarden',
    'footer.built.with': 'Gebouwd met Astro ⚡',
    'footer.performance.load': 'Deze site laadt in',
    'footer.performance.time': '0,8 seconden',
    'footer.performance.tech': '• 100% Jamstack • Geen onderhoudszorgen',
    'footer.metric1.value': '340%',
    'footer.metric1.label': 'Gemiddelde leadstoename',
    'footer.metric2.value': '<1s',
    'footer.metric2.label': 'Laadtijd garantie',
    'footer.metric3.value': '24u',
    'footer.metric3.label': 'Responstijd',

    // HOME PAGE
    'home.page.title': 'Jouw partner in online groei | VeermanDevelopment',
    'home.page.description':
      'We helpen ondernemers in het mkb om op te vallen met snelle, duidelijke websites en persoonlijk advies.',
    'home.hero.title': 'We bouwen websites die met je meegroeien',
    'home.hero.description':
      'Ondernemen is druk genoeg. Wij regelen de techniek, houden het simpel en leveren een website die klanten oplevert.',
    'home.hero.typewriter1': 'Meer klanten',
    'home.hero.typewriter2': 'Snelle laadtijden',
    'home.hero.typewriter3': 'Geen jargon',
    'home.hero.typewriter4': 'Makkelijk bij te houden',
    'home.hero.typewriter5': 'Lokale zichtbaarheid',
    'home.hero.typewriter6': 'Trots op je merk',
    'home.hero.cta.primary': 'Bekijk pakketten & prijzen',
    'home.hero.cta.secondary': 'Bekijk echte projecten',
    'home.trust.signal1': 'Persoonlijk contact van eerste gesprek tot livegang',
    'home.trust.signal2': 'Gerealiseerd in 3 dagen met heldere prijzen',
    'home.trust.signal3': 'Merkverhaal en SEO-basis inbegrepen',
    'home.philosophy.title': 'Iedereen heeft een website, jij wilt opvallen',
    'home.philosophy.subtitle1': 'Templates maken alles hetzelfde',
    'home.philosophy.text1': 'Doe-het-zelf tools zijn handig, maar zorgen vaak voor eenheidsworst. Klanten onthouden je dan niet.',
    'home.philosophy.problem1': 'Je verdwijnt tussen concurrenten',
    'home.philosophy.problem2': 'Klanten weten niet waarom ze jou moeten kiezen',
    'home.philosophy.problem3': 'Nieuwe opdrachten gaan naar anderen',
    'home.philosophy.subtitle2': 'Wij brengen jouw verhaal naar voren',
    'home.philosophy.text2':
      'We combineren design, tekst en techniek zodat je website echt voelt als jouw bedrijf en duidelijke acties laat zien.',
    'home.philosophy.solution1': 'Je merk voelt herkenbaar en betrouwbaar',
    'home.philosophy.solution2': 'Klanten kiezen sneller voor jou',
    'home.philosophy.solution3': 'Je groeit door in je regio',
    'home.promise.title': 'Onze belofte',
    'home.promise.text':
      'We vertalen jouw verhaal naar een snelle website die makkelijk bij te houden is. Geen abonnementen, wel een vaste partner als je iets wilt aanpassen.',
    'home.comparison.title': 'Waarom veel mkb-websites zo gemiddeld voelen',
    'home.comparison.text':
      'Ze worden vaak snel in elkaar gezet met dezelfde tools. Wij bouwen iets waar jij en je klanten trots op zijn.',
    'home.comparison.badge': 'Professionele websites, nu bereikbaar voor het mkb',
    'home.packages.title': 'Kies het pakket dat bij je past',
    'home.packages.subtitle': '€100 korting op alle pakketten + complete merkstrategie inbegrepen. Jouw partner in online groei.',
    'home.blog.transformation.title': 'Van reiziger naar blogger',
    'home.blog.transformation.text':
      'Niels wilde meer dan een standaard reisblog. We bouwden een eigen platform met interactieve kaarten en slimme contenttools.',
    'home.blog.transformation.about': 'Over dit project',
    'home.blog.transformation.about.text': 'Strak ontwerp, AI-samenvattingen en blokken die makkelijk opnieuw te gebruiken zijn.',
    'home.blog.transformation.before': 'Voorheen: Algemene blog zonder inzicht of goede vindbaarheid.',
    'home.blog.transformation.after': 'Nu: Een uniek platform met dashboards, kaarten en een groeiend publiek.',
    'home.blog.transformation.cta': 'Bekijk de blog',
    'home.process.title': 'Zo werken we samen',
    'home.process.step1.title': 'We leren je bedrijf kennen',
    'home.process.step1.text': 'Een kort gesprek over je doelen, klanten en wat je website moet oplossen.',
    'home.process.step2.title': 'We bouwen en finetunen',
    'home.process.step2.text': "Binnen 3 dagen laten we echte pagina's en teksten zien die bij je passen.",
    'home.process.step3.title': 'Je lanceert met vertrouwen',
    'home.process.step3.text': 'We gaan live, zetten metingen klaar en blijven beschikbaar voor ideeën.',
    'home.process.promise': 'Partnerschapsbelofte: je houdt na livegang één vast aanspreekpunt.',

    // PORTFOLIO PAGE
    'portfolio.page.title': 'Echte websites voor echte bedrijven | VeermanDevelopment',
    'portfolio.page.description':
      'Bekijk projecten voor ondernemers in heel Nederland. Websites die snel laden, duidelijk zijn en klaar staan om klanten binnen te halen.',
    'portfolio.hero.title': 'Echte websites, samen gebouwd',
    'portfolio.hero.text':
      'We bouwen websites samen met ondernemers zodat je persoonlijkheid zichtbaar wordt en klanten weten wat ze moeten doen.',
    'portfolio.filter.all': 'Alle voorbeelden',
    'portfolio.filter.foundation': '€249 Merk Fundament',
    'portfolio.filter.growth': '€349 Merk Groei',
    'portfolio.filter.complete': '€449 Merk Compleet',
    'portfolio.cta.title': 'Klaar om samen te starten?',
    'portfolio.cta.text': 'Kies het pakket dat bij je past en laten we een website bouwen die klanten oplevert. Hosting en updates zijn inbegrepen.',
    'portfolio.cta.primary': 'Plan je gratis adviesgesprek',
    'portfolio.cta.secondary': 'Stel eerst je vragen',
    'portfolio.launch.urgency': 'Lanceringsaanbieding: €100 korting + complete merkstrategie inbegrepen. Voor de eerste 20 projecten.',

    // PROCESS PAGE
    'process.page.title': 'Over VeermanDevelopment | Jouw groeipartner',
    'process.page.description':
      'Leer wie er achter je website zit en hoe we het voor mkb-ondernemers simpel, persoonlijk en resultaatgericht houden.',
    'process.hero.title': 'Jouw vaste partner voor online groei',
    'process.hero.text':
      'We zorgen dat je website geen kostenpost is, maar een investering die klanten aantrekt en met je bedrijf meegroeit.',
    'process.philosophy.title': 'Onze filosofie',
    'process.philosophy.text':
      'Goede techniek hoort vanzelfsprekend te werken. Wij regelen snelheid, veiligheid en verhaal, jij focust op je klanten.',

    // SERVICES PAGE
    'services.page.title': 'Websitepakketten voor het mkb | VeermanDevelopment',
    'services.page.description':
      'Heldere prijzen, geen verrassingen. Snelle, veilige websites die je laten groeien. Gebouwd in 3 dagen, hosting en updates inbegrepen.',
    'services.hero.title': 'Kies wat bij jouw bedrijf past',
    'services.hero.text':
      'Selecteer het pakket dat bij je doelen past. Wij houden het proces overzichtelijk en leveren een website waar je op kunt bouwen.',

    // CONTACT PAGE
    'contact.page.title': "Laten we praten over je website | VeermanDevelopment",
    'contact.page.description':
      'Klaar voor een snelle, betrouwbare website? Plan een gratis gesprek of stuur een bericht. We reageren binnen één werkdag met eerlijk advies.',
    'contact.hero.title': 'Laten we praten over je website',
    'contact.hero.text':
      'Plan een gratis adviesgesprek of mail de basisinfo. Je hoort binnen 24 uur van ons met concrete vervolgstappen.',

    // TERMS PAGE
    'terms.page.title': 'Voorwaarden | VeermanDevelopment',
    'terms.page.description':
      'Eerlijke, duidelijke afspraken zodat je precies weet hoe we samenwerken.',
    'terms.hero.title': 'Voorwaarden',
    'terms.hero.text': 'Heldere afspraken die onze samenwerking beschermen.',

    // PRIVACY PAGE
    'privacy.page.title': 'Privacybeleid | VeermanDevelopment',
    'privacy.page.description':
      'Lees hoe we zorgvuldig met je gegevens omgaan en ze veilig bewaren.',
    'privacy.hero.title': 'Privacybeleid',
    'privacy.hero.text': 'We verzamelen alleen wat nodig is om je te helpen en delen je gegevens nooit.',

    // 404 PAGE
    '404.title': 'Pagina niet gevonden',
    '404.heading': 'Deze pagina bestaat niet',
    '404.message': 'We kunnen de pagina die je zoekt niet vinden. Misschien is hij verplaatst of nooit aangemaakt.',
    '404.back_home': 'Terug naar home',
  },
} as const;
