/**
 * Author profiles for knowledge pages
 * Optimized for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 * Schema.org Person markup for LLM and SEO trust signals
 */

export interface Author {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  qualifications: string[];
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  sameAs: string[]; // Verifizierte Profile-URLs
}

export const authors: Record<string, Author> = {
  'martin-lang': {
    id: 'martin-lang',
    name: 'Martin Lang',
    role: 'Gründer & KI-Workflow-Experte',
    expertise: [
      'Prompt Engineering',
      'LLM-Architektur & Modellverständnis',
      'KI-Workflow-Design',
      'ChatGPT API & Custom GPTs',
      'OpenAI Ecosystem',
      'KI-Strategie & Adoption',
      'Datenschutzkonforme KI-Nutzung & Team-Standards',
      'KI-gestützte Wissensarbeit',
      'Change Management für KI-Einführung',
      'EU AI Act & KI-Compliance'
    ],
    qualifications: [
      'Über 14 Jahre Erfahrung in digitaler Transformation',
      'Gründer Yellow-Boat Consulting (2011)',
      'Gründer chatgpt-trainings.de (2025)',
      'KI-Workflow-Designer & Prompt Engineer',
      'Agile Coach & Transformation Consultant',
      'ChatGPT Trainer für Konzerne und Mittelstand'
    ],
    bio: 'Martin Lang ist Gründer der Yellow-Boat Consulting (2011) und der chatgpt-trainings.de (2025). Er verbindet über ein Jahrzehnt Erfahrung in digitaler Transformation mit tiefem Verständnis für Large Language Models und Prompt Engineering. Als KI-Workflow-Experte entwickelt er systematische Ansätze, mit denen Unternehmen ChatGPT nicht als Spielzeug, sondern als strategisches Arbeitsinstrument einsetzen – von der Prompt-Architektur über Custom GPTs bis zum produktiven Dauerbetrieb.',
    image: '/images/authors/martin-lang.png',
    linkedin: 'https://www.linkedin.com/in/martin-lang-a95b1010',
    email: 'post@yellow-boat.com',
    sameAs: [
      'https://www.linkedin.com/in/martin-lang-a95b1010',
      'https://www.springest.de/u/martin-lang#bewertungen',
      'https://agilescrumgroup.de/uber-uns/team/',
      'https://www.yellow-boat.com'
    ]
  }
};

export const getAuthor = (authorId: string): Author | undefined => {
  return authors[authorId];
};

/**
 * Generiert vollständiges Person-Schema für einen Autor
 * Wird in Artikel-Seiten als author-Feld verwendet
 */
export const getAuthorSchemaMarkup = (author: Author) => {
  return {
    '@type': 'Person',
    '@id': `https://chatgpt-trainings.de/#${author.id}`,
    'name': author.name,
    'url': `https://chatgpt-trainings.de/trainer/${author.id}`,
    'jobTitle': author.role,
    'description': author.bio,
    'image': {
      '@type': 'ImageObject',
      'url': `https://chatgpt-trainings.de${author.image}`,
      'width': 400,
      'height': 400
    },
    'knowsAbout': author.expertise,
    'hasCredential': author.qualifications.map(q => ({
      '@type': 'EducationalOccupationalCredential',
      'credentialCategory': 'certification',
      'name': q
    })),
    'sameAs': author.sameAs,
    'worksFor': {
      '@id': 'https://chatgpt-trainings.de/#organization'
    },
    ...(author.email && { 'email': `mailto:${author.email}` })
  };
};

/**
 * Generiert Publisher-Schema (Organization)
 * Wird in Artikel-Seiten als publisher-Feld verwendet
 */
export const getPublisherSchema = () => {
  return {
    '@type': 'Organization',
    '@id': 'https://chatgpt-trainings.de/#organization',
    'name': 'chatgpt-trainings.de',
    'url': 'https://chatgpt-trainings.de',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://chatgpt-trainings.de/logo.png',
      'width': 600,
      'height': 60
    }
  };
};

/**
 * Generiert vollständiges Article-Schema für Wissensartikel
 * Verknüpft Artikel mit Autor und Publisher
 */
export const getArticleSchema = (options: {
  title: string;
  description: string;
  slug: string;
  author: Author;
  publishDate: string;
  modifiedDate?: string;
  keywords?: string[];
  category?: string;
}) => {
  const { title, description, slug, author, publishDate, modifiedDate, keywords, category } = options;

  return {
    '@type': 'Article',
    '@id': `https://chatgpt-trainings.de/wissen/${slug}#article`,
    'headline': title,
    'description': description,
    'url': `https://chatgpt-trainings.de/wissen/${slug}`,
    'datePublished': publishDate,
    'dateModified': modifiedDate || publishDate,
    'author': {
      '@id': `https://chatgpt-trainings.de/#${author.id}`
    },
    'publisher': {
      '@id': 'https://chatgpt-trainings.de/#organization'
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://chatgpt-trainings.de/wissen/${slug}`
    },
    'image': {
      '@type': 'ImageObject',
      'url': `https://chatgpt-trainings.de/og-image.jpg`
    },
    'inLanguage': 'de-DE',
    ...(keywords && keywords.length > 0 && { 'keywords': keywords.join(', ') }),
    ...(category && { 'articleSection': category })
  };
};

/**
 * Generiert kombiniertes Schema-Graph für Artikel-Seiten
 * Enthält: Article, Person (Author), Organization (Publisher)
 */
export const getFullArticleSchemaGraph = (options: {
  title: string;
  description: string;
  slug: string;
  authorId: string;
  publishDate: string;
  modifiedDate?: string;
  keywords?: string[];
  category?: string;
}) => {
  const author = getAuthor(options.authorId);

  if (!author) {
    console.warn(`Author not found: ${options.authorId}`);
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      getArticleSchema({ ...options, author }),
      getAuthorSchemaMarkup(author),
      getPublisherSchema()
    ]
  };
};
