/**
 * Schema.org Markup für Organization und Person
 * Stärkt E-E-A-T (Experience, Expertise, Authoritativeness, Trust)
 * Hilft LLMs und Google bei der Entitätsverifikation
 */

// Inhaber / Gründer
export const founderSchema = {
  "@type": "Person",
  "@id": "https://chatgpt-trainings.de/#martin-lang",
  "name": "Martin Lang",
  "jobTitle": "Gründer & KI-Workflow-Experte",
  "description": "Martin Lang verbindet über ein Jahrzehnt Erfahrung in digitaler Transformation mit tiefem Verständnis für Large Language Models und Prompt Engineering. Als Gründer der Yellow-Boat Consulting (2011) und chatgpt-trainings.de (2025) entwickelt er systematische Ansätze, mit denen Unternehmen ChatGPT als strategisches Arbeitsinstrument einsetzen.",
  "url": "https://chatgpt-trainings.de/trainer/martin-lang",
  "image": {
    "@type": "ImageObject",
    "url": "https://chatgpt-trainings.de/images/authors/martin-lang.png",
    "width": 400,
    "height": 400
  },
  "knowsAbout": [
    "Prompt Engineering",
    "LLM-Architektur & Modellverständnis",
    "KI-Workflow-Design",
    "ChatGPT API & Custom GPTs",
    "OpenAI Ecosystem",
    "KI-Strategie & Adoption",
    "Datenschutzkonforme KI-Nutzung & Team-Standards"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "Über 14 Jahre Erfahrung in digitaler Transformation"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "Gründer Yellow-Boat Consulting (2011)"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "KI-Workflow-Designer & Prompt Engineer"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/in/martin-lang-a95b1010",
    "https://www.springest.de/u/martin-lang#bewertungen",
    "https://agilescrumgroup.de/uber-uns/team/",
    "https://www.yellow-boat.com"
  ],
  "worksFor": {
    "@id": "https://chatgpt-trainings.de/#organization"
  },
  "email": "mailto:Info@ChatGPT-Trainings.de"
};

// Muttergesellschaft: Yellow-Boat Consulting
export const parentOrganizationSchema = {
  "@type": "Organization",
  "@id": "https://www.yellow-boat.com/#organization",
  "name": "Yellow-Boat Consulting",
  "url": "https://www.yellow-boat.com",
  "foundingDate": "2011",
  "founder": {
    "@id": "https://chatgpt-trainings.de/#martin-lang"
  },
  "sameAs": [
    "https://www.yellow-boat.com",
    "https://www.linkedin.com/in/martin-lang-a95b1010"
  ]
};

// Hauptorganisation: chatgpt-trainings.de
export const organizationSchema = {
  "@type": "Organization",
  "@id": "https://chatgpt-trainings.de/#organization",
  "name": "chatgpt-trainings.de",
  "alternateName": "ChatGPT-Trainings",
  "url": "https://chatgpt-trainings.de",
  "logo": {
    "@type": "ImageObject",
    "url": "https://chatgpt-trainings.de/logo.png"
  },
  "description": "chatgpt-trainings.de bietet spezialisierte ChatGPT Schulungen und Trainings für Unternehmen im DACH-Raum. Eine Marke der Yellow-Boat Consulting (gegründet 2011).",
  "foundingDate": "2025",
  "founder": {
    "@id": "https://chatgpt-trainings.de/#martin-lang"
  },
  "parentOrganization": {
    "@id": "https://www.yellow-boat.com/#organization"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Köln",
    "addressRegion": "Nordrhein-Westfalen",
    "addressCountry": "DE"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Deutschland"
    },
    {
      "@type": "Country",
      "name": "Österreich"
    },
    {
      "@type": "Country",
      "name": "Schweiz"
    }
  ],
  "sameAs": [
    "https://www.yellow-boat.com",
    "https://www.linkedin.com/in/martin-lang-a95b1010",
    "https://www.springest.de/u/martin-lang#bewertungen",
    "https://agilescrumgroup.de/uber-uns/team/",
    "https://maps.app.goo.gl/JWTPeDLVeuDu9WiJ8"
  ],
  "knowsAbout": [
    "ChatGPT",
    "KI-Strategie",
    "ChatGPT & Custom GPTs",
    "Prompt Engineering",
    "KI-Training für Unternehmen",
    "EU AI Act Compliance",
    "Change Management"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ChatGPT Trainings",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "ChatGPT Grundlagen-Training"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "ChatGPT für Teams und Organisationen"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Custom GPTs und KI-Agenten Training"
        }
      }
    ]
  }
};

// Kombiniertes Schema für alle Seiten
export const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    parentOrganizationSchema,
    founderSchema
  ]
};

/**
 * Kombiniert das globale Schema mit seitenspezifischem Schema
 */
export function combineWithGlobalSchema(pageSchema?: Record<string, any>): Record<string, any> {
  if (!pageSchema) {
    return globalSchema;
  }

  // Wenn das Seiten-Schema bereits ein @graph hat, füge die globalen Einträge hinzu
  if (pageSchema["@graph"]) {
    return {
      "@context": "https://schema.org",
      "@graph": [
        ...globalSchema["@graph"],
        ...pageSchema["@graph"]
      ]
    };
  }

  // Ansonsten füge das Seiten-Schema zum Graph hinzu
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...globalSchema["@graph"],
      { ...pageSchema, "@context": undefined } // Entferne doppelten @context
    ]
  };
}
