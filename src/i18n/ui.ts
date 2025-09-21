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
    //
    // SHARED
    //
    'site.title': 'VeermanDevelopment | Websites Engineered for Growth',
    'site.description':
      "We build blazingly fast, unbreakably secure websites that convert visitors into loyal customers. Stop settling for a digital brochure—invest in a performance asset.",
    'launch.offer': 'Launch Offer: €100 off all packages + brand strategy included | Limited time only!',
    'small.business.champion': 'The Small Business Champion',

    //
    // NAVIGATION
    //
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.cta': 'Start Your Project',

    //
    // FOOTER
    //
    'footer.tagline': 'Websites Engineered for Growth',
    'footer.description':
      'We build high-performance websites that convert visitors into customers using modern Jamstack technology. Your strategic growth partners for measurable business results.',
    'footer.services': 'Services',
    'footer.service.design': 'Growth-Driven Design',
    'footer.service.jamstack': 'Jamstack Development',
    'footer.service.optimization': 'Performance Optimization',
    'footer.get.started': 'Get Started',
    'footer.discovery.call': 'Free Discovery Call',
    'footer.our.process': 'Our Process',
    'footer.based.in': 'Based in Netherlands',
    'footer.copyright': `© ${new Date().getFullYear()} Veerman Development. All rights reserved.`,
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.built.with': 'Built with Astro ⚡',
    'footer.performance.load': 'This site loads in',
    'footer.performance.time': '0.8 seconds',
    'footer.performance.tech': '• 100% Jamstack • Zero maintenance required',
    'footer.metric1.value': '340%',
    'footer.metric1.label': 'Average lead increase',
    'footer.metric2.value': '<1s',
    'footer.metric2.label': 'Load time guarantee',
    'footer.metric3.value': '24h',
    'footer.metric3.label': 'Response time',


    //
    // HOME PAGE
    //
    'home.page.title': 'Your Partner in Digital Growth | VeermanDevelopment',
    'home.page.description':
      "We're The Small Business Champion. We build more than websites, we build brands. Professional websites that actually work, now accessible for small businesses.",
    'home.hero.title': "We Don't Just Build Websites,",
    'home.hero.description':
      "We're The Small Business Champion. Your dedicated partner who understands the hustle. We handle the digital side so you can focus on what you do best.",
    'home.hero.typewriter1': 'We Build Brands',
    'home.hero.typewriter2': 'We Create Success',
    'home.hero.typewriter3': 'We Drive Growth',
    'home.hero.typewriter4': 'We Generate Sales',
    'home.hero.typewriter5': 'We Build Your Future',
    'home.hero.typewriter6': 'We Make You Memorable',
    'home.hero.cta.primary': 'See Our Packages',
    'home.hero.cta.secondary': 'View Success Stories',
    'home.trust.signal1': 'Your Partner in Digital Growth',
    'home.trust.signal2': 'Built in 3 days',
    'home.trust.signal3': 'Brand strategy included',
    'home.philosophy.title': 'In an Age Where Everyone is the Same, Dare to be Different',
    'home.philosophy.subtitle1': 'Everyone has the ability to build a website',
    'home.philosophy.text1': "Templates, builders, DIY solutions—they're everywhere. But cookie-cutter websites create cookie-cutter businesses.",
    'home.philosophy.problem1': 'You blend into the crowd',
    'home.philosophy.problem2': "Customers can't remember you",
    'home.philosophy.problem3': 'Competitors steal your business',
    'home.philosophy.subtitle2': 'Not everyone has the ability to stand out',
    'home.philosophy.text2':
      "That's where we come in. We don't just develop websites—we develop brands that customers can't ignore.",
    'home.philosophy.solution1': 'Your brand becomes memorable',
    'home.philosophy.solution2': 'Customers choose you over competitors',
    'home.philosophy.solution3': 'You dominate your local market',
    'home.promise.title': 'Our Promise to You',
    'home.promise.text':
      'Don\'t just develop a website, develop a brand. We combine technical expertise with marketing knowledge to create something truly mesmerizing—even if you just want a "simple" website.',
    'home.comparison.title': 'Why Most Small Business Websites Look Amateur',
    'home.comparison.text':
      'Everyone uses the same DIY tools and templates. Even many "developers" just install WordPress themes. Your business deserves better.',
    'home.comparison.badge': 'Professional Website Service - Now Accessible for Small Businesses',
    'home.packages.title': 'Choose Your Brand Transformation',
    'home.packages.subtitle': '€100 off all packages + complete brand strategy included. Your partner in digital growth.',
    'home.blog.transformation.title': 'From Traveller to Blogger',
    'home.blog.transformation.text': 'Niels wanted a unique site to showcase his adventures, so we built him a stylish, feature-rich blog.',
    'home.blog.transformation.about': 'About the Blog',
    'home.blog.transformation.about.text': 'A clean and modern design with interactive maps, photo galleries, and social sharing to inspire fellow travellers.',
    'home.blog.transformation.before': 'Before: Basic blog with minimal features and little visibility.',
    'home.blog.transformation.after': 'After: Engaging platform with rich media and growing audience.',
    'home.blog.transformation.cta': 'Visit the Blog',
    'home.process.title': 'Your Partner in Digital Growth',
    'home.process.step1.title': 'We Understand Your Business',
    'home.process.step1.text': 'Deep conversation about your business, challenges, and goals. We become your dedicated digital partner who truly gets it.',
    'home.process.step2.title': 'We Build Your Brand',
    'home.process.step2.text': 'Just 3 days to create a professional brand experience. We combine technical expertise with marketing knowledge for maximum impact.',
    'home.process.step3.title': 'You Stand Out From Competitors',
    'home.process.step3.text': 'Your professional brand goes live and customers choose you over competitors. We provide ongoing partnership support as you grow.',
    'home.process.promise': "Partnership Promise: We're your dedicated digital growth partner, not just another vendor.",

    //
    // PORTFOLIO PAGE
    //
    'portfolio.page.title': 'Real Websites for Real Businesses | VeermanDevelopment',
    'portfolio.page.description':
      'See what we build for small businesses across the Netherlands. Professional websites that actually work, now accessible for small businesses.',
    'portfolio.hero.title': 'Real Websites for Real Businesses',
    'portfolio.hero.text':
      'See what we build for small businesses across the Netherlands. Professional websites that actually work, now accessible for small businesses.',
    'portfolio.filter.all': 'All Examples',
    'portfolio.filter.foundation': '€249 Brand Foundation',
    'portfolio.filter.growth': '€349 Brand Growth',
    'portfolio.filter.complete': '€449 Brand Complete',
    'portfolio.cta.title': 'Ready to Get Started?',
    'portfolio.cta.text': "Pick your package and let's build you a website that actually gets you customers. Free hosting & updates included forever.",
    'portfolio.cta.primary': 'See Packages & Pricing',
    'portfolio.cta.secondary': 'Ask Questions First',
    'portfolio.launch.urgency': 'Launch offer: €100 off + complete brand strategy included. Limited to first 20 clients.',
    
    //
    // PROCESS PAGE
    //
    'process.page.title': 'About VeermanDevelopment | Your Growth Partners',
    'process.page.description':
      'Meet the team behind high-performance websites. Learn about our philosophy, process, and commitment to building strategic partnerships that drive measurable business growth.',
    'process.hero.title': 'Your Strategic Growth Partners',
    'process.hero.text':
      'We believe every business deserves a website that works as hard as they do. Our mission is to transform traditional web development from a one-time transaction into a strategic partnership that drives continuous growth.',
    'process.philosophy.title': 'Our Philosophy',
    'process.philosophy.text':
      "Technology isn't just about code—it's about enabling business success. We combine cutting-edge development with strategic thinking to create digital assets that generate measurable results, not just pretty interfaces.",

    //
    // SERVICES PAGE
    //
    'services.page.title': 'Website Packages for Small Businesses | VeermanDevelopment',
    'services.page.description':
      'Clear pricing, no surprises. Professional websites that get you more customers. Built in 3 days, free hosting & updates included forever.',
    'services.hero.title': 'Pick What Works for Your Business',
    'services.hero.text':
      'Clear pricing, no surprises. Professional websites that get you more customers. Built in 3 days, free hosting & updates included forever.',
      
    //
    // CONTACT PAGE
    //
    'contact.page.title': "Let's Build Something Great Together | VeermanDevelopment",
    'contact.page.description':
      "Ready to transform your business with a high-performance website? Get in touch for a free discovery call. We'll respond within one business day.",
    'contact.hero.title': "Let's Build Something Great Together",
    'contact.hero.text':
      "Schedule a free discovery call or send us a message below. We'll get back to you within one business day with insights and next steps for your project.",
      
    //
    // TERMS PAGE
    //
    'terms.page.title': 'Terms of Service | VeermanDevelopment',
    'terms.page.description':
      'Terms and conditions for VeermanDevelopment web development services. Clear agreements for our partnership-focused approach to building high-performance websites.',
    'terms.hero.title': 'Terms of Service',
    'terms.hero.text': 'Clear terms and conditions that govern our partnership and service delivery approach.',

    //
    // PRIVACY PAGE
    //
    'privacy.page.title': 'Privacy Policy | VeermanDevelopment',
    'privacy.page.description':
      'Learn how VeermanDevelopment protects your privacy and handles your personal information. Transparent data practices for our web development services.',
    'privacy.hero.title': 'Privacy Policy',
    'privacy.hero.text': 'Your privacy is important to us. This policy explains how we collect, use, and protect your information.',

  },
  nl: {
    //
    // SHARED
    //
    'site.title': 'VeermanDevelopment | Websites Ontworpen voor Groei',
    'site.description':
      'Wij bouwen razendsnelle, onbreekbaar veilige websites die bezoekers omzetten in trouwe klanten. Neem geen genoegen meer met een digitale brochure—investeer in een prestatiegericht bedrijfsmiddel.',
    'launch.offer': 'Lanceringsaanbieding: €100 korting op alle pakketten + merkstrategie inbegrepen | Tijdelijke aanbieding!',
    'small.business.champion': 'De Kampioen voor het MKB',
    
    //
    // NAVIGATION
    //
    'nav.home': 'Home',
    'nav.services': 'Diensten',
    'nav.portfolio': 'Portfolio',
    'nav.process': 'Werkwijze',
    'nav.contact': 'Contact',
    'nav.cta': 'Start Uw Project',

    //
    // FOOTER
    //
    'footer.tagline': 'Websites Ontworpen voor Groei',
    'footer.description':
      'Wij bouwen hoog presterende websites die bezoekers omzetten in klanten met moderne Jamstack-technologie. Uw strategische groeipartners voor meetbare bedrijfsresultaten.',
    'footer.services': 'Diensten',
    'footer.service.design': 'Groeigedreven Ontwerp',
    'footer.service.jamstack': 'Jamstack Ontwikkeling',
    'footer.service.optimization': 'Prestatieoptimalisatie',
    'footer.get.started': 'Begin Nu',
    'footer.discovery.call': 'Gratis Kennismakingsgesprek',
    'footer.our.process': 'Onze Werkwijze',
    'footer.based.in': 'Gevestigd in Nederland',
    'footer.copyright': `© ${new Date().getFullYear()} Veerman Development. Alle rechten voorbehouden.`,
    'footer.privacy': 'Privacybeleid',
    'footer.terms': 'Servicevoorwaarden',
    'footer.built.with': 'Gebouwd met Astro ⚡',
    'footer.performance.load': 'Deze site laadt in',
    'footer.performance.time': '0,8 seconden',
    'footer.performance.tech': '• 100% Jamstack • Geen onderhoud nodig',
    'footer.metric1.value': '340%',
    'footer.metric1.label': 'Gemiddelde leadstoename',
    'footer.metric2.value': '<1s',
    'footer.metric2.label': 'Laadtijd garantie',
    'footer.metric3.value': '24u',
    'footer.metric3.label': 'Responstijd',

    //
    // HOME PAGE
    //
    'home.page.title': 'Uw Partner in Digitale Groei | VeermanDevelopment',
    'home.page.description':
      'Wij zijn de Kampioen voor het MKB. We bouwen meer dan websites, we bouwen merken. Professionele websites die echt werken, nu toegankelijk voor kleine bedrijven.',
    'home.hero.title': 'We Bouwen Niet Alleen Websites,',
    'home.hero.description':
      'Wij zijn de Kampioen voor het MKB. Uw toegewijde partner die de drukte begrijpt. Wij regelen de digitale kant, zodat u zich kunt richten op waar u het beste in bent.',
    'home.hero.typewriter1': 'We Bouwen Merken',
    'home.hero.typewriter2': 'We Creëren Succes',
    'home.hero.typewriter3': 'We Stimuleren Groei',
    'home.hero.typewriter4': 'We Genereren Verkoop',
    'home.hero.typewriter5': 'We Bouwen Uw Toekomst',
    'home.hero.typewriter6': 'We Maken U Onvergetelijk',
    'home.hero.cta.primary': 'Bekijk Onze Pakketten',
    'home.hero.cta.secondary': 'Bekijk Succesverhalen',
    'home.trust.signal1': 'Uw Partner in Digitale Groei',
    'home.trust.signal2': 'Gebouwd in 3 dagen',
    'home.trust.signal3': 'Merkstrategie inbegrepen',
    'home.philosophy.title': 'In een Tijdperk Waarin Iedereen Hetzelfde is, Durf Anders te Zijn',
    'home.philosophy.subtitle1': 'Iedereen kan een website bouwen',
    'home.philosophy.text1': 'Sjablonen, bouwers, doe-het-zelf-oplossingen—ze zijn overal. Maar standaard websites creëren standaard bedrijven.',
    'home.philosophy.problem1': 'U gaat op in de menigte',
    'home.philosophy.problem2': 'Klanten kunnen u niet herinneren',
    'home.philosophy.problem3': 'Concurrenten nemen uw bedrijf over',
    'home.philosophy.subtitle2': 'Niet iedereen kan opvallen',
    'home.philosophy.text2':
      'Daar komen wij in beeld. Wij ontwikkelen niet alleen websites—wij ontwikkelen merken die klanten niet kunnen negeren.',
    'home.philosophy.solution1': 'Uw merk wordt onvergetelijk',
    'home.philosophy.solution2': 'Klanten kiezen u boven concurrenten',
    'home.philosophy.solution3': 'U domineert uw lokale markt',
    'home.promise.title': 'Onze Belofte aan U',
    'home.promise.text':
      'Ontwikkel niet zomaar een website, ontwikkel een merk. We combineren technische expertise met marketingkennis om iets echt betoverends te creëren—zelfs als u alleen een "eenvoudige" website wilt.',
    'home.comparison.title': 'Waarom de Meeste Websites van Kleine Bedrijven er Amateuristisch Uitzien',
    'home.comparison.text':
      'Iedereen gebruikt dezelfde doe-het-zelf-tools en sjablonen. Zelfs veel "ontwikkelaars" installeren alleen WordPress-thema\'s. Uw bedrijf verdient beter.',
    'home.comparison.badge': 'Professionele Website Service - Nu Toegankelijk voor Kleine Bedrijven',
    'home.packages.title': 'Kies Uw Merktransformatie',
    'home.packages.subtitle': '€100 korting op alle pakketten + complete merkstrategie inbegrepen. Uw partner in digitale groei.',
    'home.blog.transformation.title': 'Van Reiziger tot Blogger',
    'home.blog.transformation.text': 'Niels wilde een unieke site om zijn avonturen te laten zien, dus bouwden we een stijlvolle, feature-rijke blog voor hem.',
    'home.blog.transformation.about': 'Over de Blog',
    'home.blog.transformation.about.text': 'Een strak en modern ontwerp met interactieve kaarten, fotogalerijen en sociale deelmogelijkheden om medereizigers te inspireren.',
    'home.blog.transformation.before': 'Voorheen: Eenvoudige blog met minimale functies en weinig zichtbaarheid.',
    'home.blog.transformation.after': 'Na: Een boeiend platform met rijke media en een groeiend publiek.',
    'home.blog.transformation.cta': 'Bezoek de Blog',
    'home.process.title': 'Uw Partner in Digitale Groei',
    'home.process.step1.title': 'We Begrijpen Uw Bedrijf',
    'home.process.step1.text': 'Diepgaand gesprek over uw bedrijf, uitdagingen en doelen. Wij worden uw toegewijde digitale partner die het echt begrijpt.',
    'home.process.step2.title': 'We Bouwen Uw Merk',
    'home.process.step2.text': 'Slechts 3 dagen om een professionele merkervaring te creëren. We combineren technische expertise met marketingkennis voor maximale impact.',
    'home.process.step3.title': 'U Onderscheidt Zich van Concurrenten',
    'home.process.step3.text': 'Uw professionele merk gaat live en klanten kiezen u boven concurrenten. We bieden doorlopende partnerschapsondersteuning terwijl u groeit.',
    'home.process.promise': 'Partnerschapsbelofte: Wij zijn uw toegewijde partner voor digitale groei, niet zomaar een leverancier.',

    //
    // PORTFOLIO PAGE
    //
    'portfolio.page.title': 'Echte Websites voor Echte Bedrijven | VeermanDevelopment',
    'portfolio.page.description':
      'Bekijk wat we bouwen voor kleine bedrijven in heel Nederland. Professionele websites die echt werken, nu toegankelijk voor het MKB.',
    'portfolio.hero.title': 'Echte Websites voor Echte Bedrijven',
    'portfolio.hero.text':
      'Bekijk wat we bouwen voor kleine bedrijven in heel Nederland. Professionele websites die echt werken, nu toegankelijk voor het MKB.',
    'portfolio.filter.all': 'Alle Voorbeelden',
    'portfolio.filter.foundation': '€249 Merk Fundament',
    'portfolio.filter.growth': '€349 Merk Groei',
    'portfolio.filter.complete': '€449 Merk Compleet',
    'portfolio.cta.title': 'Klaar om te Beginnen?',
    'portfolio.cta.text': 'Kies uw pakket en laat ons een website voor u bouwen die daadwerkelijk klanten oplevert. Gratis hosting & updates voor altijd inbegrepen.',
    'portfolio.cta.primary': 'Bekijk Pakketten & Prijzen',
    'portfolio.cta.secondary': 'Stel Eerst Vragen',
    'portfolio.launch.urgency': 'Lanceringsaanbieding: €100 korting + complete merkstrategie inbegrepen. Beperkt tot de eerste 20 klanten.',

    //
    // PROCESS PAGE
    //
    'process.page.title': 'Over VeermanDevelopment | Uw Groeipartners',
    'process.page.description':
      'Maak kennis met het team achter hoog presterende websites. Leer over onze filosofie, ons proces en onze toewijding aan het opbouwen van strategische partnerschappen die meetbare bedrijfsgroei stimuleren.',
    'process.hero.title': 'Uw Strategische Groeipartners',
    'process.hero.text':
      'Wij geloven dat elk bedrijf een website verdient die net zo hard werkt als zij. Onze missie is om traditionele webontwikkeling te transformeren van een eenmalige transactie naar een strategisch partnerschap dat continue groei stimuleert.',
    'process.philosophy.title': 'Onze Filosofie',
    'process.philosophy.text':
      "Technologie gaat niet alleen over code—het gaat over het mogelijk maken van zakelijk succes. We combineren geavanceerde ontwikkeling met strategisch denken om digitale bedrijfsmiddelen te creëren die meetbare resultaten genereren, niet alleen mooie interfaces.",

    //
    // SERVICES PAGE
    //
    'services.page.title': 'Websitepakketten voor het MKB | VeermanDevelopment',
    'services.page.description':
      'Duidelijke prijzen, geen verrassingen. Professionele websites die u meer klanten opleveren. Gebouwd in 3 dagen, gratis hosting & updates voor altijd inbegrepen.',
    'services.hero.title': 'Kies Wat Werkt voor Uw Bedrijf',
    'services.hero.text':
      'Duidelijke prijzen, geen verrassingen. Professionele websites die u meer klanten opleveren. Gebouwd in 3 dagen, gratis hosting & updates voor altijd inbegrepen.',
      
    //
    // CONTACT PAGE
    //
    'contact.page.title': "Laten We Samen Iets Geweldigs Bouwen | VeermanDevelopment",
    'contact.page.description':
      "Klaar om uw bedrijf te transformeren met een hoog presterende website? Neem contact op voor een gratis kennismakingsgesprek. We reageren binnen één werkdag.",
    'contact.hero.title': "Laten We Samen Iets Geweldigs Bouwen",
    'contact.hero.text':
      "Plan een gratis kennismakingsgesprek of stuur ons hieronder een bericht. We nemen binnen één werkdag contact met u op met inzichten en volgende stappen voor uw project.",

    //
    // TERMS PAGE
    //
    'terms.page.title': 'Servicevoorwaarden | VeermanDevelopment',
    'terms.page.description':
      'Algemene voorwaarden voor de webontwikkelingsdiensten van VeermanDevelopment. Duidelijke afspraken voor onze op partnerschap gerichte aanpak voor het bouwen van hoog presterende websites.',
    'terms.hero.title': 'Servicevoorwaarden',
    'terms.hero.text': 'Duidelijke voorwaarden die onze partnerschap en dienstverlening regelen.',
    
    //
    // PRIVACY PAGE
    //
    'privacy.page.title': 'Privacybeleid | VeermanDevelopment',
    'privacy.page.description':
      'Lees hoe VeermanDevelopment uw privacy beschermt en uw persoonlijke informatie behandelt. Transparante gegevenspraktijken voor onze webontwikkelingsdiensten.',
    'privacy.hero.title': 'Privacybeleid',
    'privacy.hero.text': 'Uw privacy is belangrijk voor ons. Dit beleid legt uit hoe we uw informatie verzamelen, gebruiken en beschermen.',

  },
} as const;