export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const seoConfigs: Record<string, SEOConfig> = {
  '/': {
    title: 'Adspension - #1 Amazon FBA Cursus Nederland | Leer Amazon FBA',
    description: 'Start je Amazon FBA business met onze #1 cursus voor Nederland en België. 40+ video\'s, eBook, BOL.com training en 1-op-1 begeleiding. Begin vandaag!',
    keywords: 'Amazon FBA, cursus, Nederland, BOL.com, e-commerce, online verkopen, Tijn Strikker, Amazon FBA Nederland, FBA cursus, Amazon seller',
    ogTitle: 'Adspension - #1 Amazon FBA Cursus Nederland',
    ogDescription: 'Start je Amazon FBA business met onze #1 cursus voor Nederland en België. 40+ video\'s, eBook, BOL.com training en 1-op-1 begeleiding.',
    twitterTitle: 'Adspension - #1 Amazon FBA Cursus Nederland',
    twitterDescription: 'Start je Amazon FBA business met onze cursus. 40+ video\'s, eBook, BOL.com training en 1-op-1 begeleiding.'
  },
  '/contact': {
    title: 'Contact Adspension - Amazon FBA Cursus Vragen | Tijn Strikker',
    description: 'Neem contact op met Adspension voor vragen over onze Amazon FBA cursus. Gratis adviesgesprek boeken met Tijn Strikker. Direct antwoord op je FBA vragen.',
    keywords: 'Adspension contact, Amazon FBA vragen, Tijn Strikker contact, FBA advies, Amazon cursus support',
    ogTitle: 'Contact Adspension - Amazon FBA Cursus Support',
    ogDescription: 'Neem contact op voor vragen over onze Amazon FBA cursus. Gratis adviesgesprek beschikbaar.',
    twitterTitle: 'Contact Adspension - Amazon FBA Support',
    twitterDescription: 'Vragen over Amazon FBA? Neem contact op voor persoonlijk advies.'
  },
  '/privacy': {
    title: 'Privacy Beleid - Adspension Amazon FBA Cursus | Gegevensbescherming',
    description: 'Lees het privacy beleid van Adspension. Hoe wij jouw persoonlijke gegevens beschermen bij onze Amazon FBA cursus. GDPR compliant.',
    keywords: 'Adspension privacy, gegevensbescherming, GDPR, Amazon FBA cursus privacy',
    ogTitle: 'Privacy Beleid - Adspension',
    ogDescription: 'Ons privacy beleid voor de Amazon FBA cursus. GDPR compliant gegevensbescherming.',
    twitterTitle: 'Privacy Beleid - Adspension',
    twitterDescription: 'Privacy beleid voor Adspension Amazon FBA cursus.'
  },
  '/algemene-voorwaarden': {
    title: 'Algemene Voorwaarden - Adspension Amazon FBA Cursus | Terms',
    description: 'Lees de algemene voorwaarden van Adspension Amazon FBA cursus. Alle voorwaarden voor deelname aan onze FBA training en 1-op-1 begeleiding.',
    keywords: 'Adspension voorwaarden, Amazon FBA cursus terms, algemene voorwaarden, FBA training voorwaarden',
    ogTitle: 'Algemene Voorwaarden - Adspension',
    ogDescription: 'Algemene voorwaarden voor deelname aan de Adspension Amazon FBA cursus.',
    twitterTitle: 'Algemene Voorwaarden - Adspension',
    twitterDescription: 'Voorwaarden voor de Adspension Amazon FBA cursus.'
  }
};

export const getDefaultSEO = (): SEOConfig => seoConfigs['/'];