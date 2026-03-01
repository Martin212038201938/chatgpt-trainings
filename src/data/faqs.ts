/**
 * FAQ Data for chatgpt-trainings.de
 * Optimized for LLM citation and SEO FAQPage schema
 */

export interface FAQ {
  question: string;
  answer: string;
  category?: 'general' | 'training' | 'pricing' | 'technical' | 'compliance';
}

/**
 * Startseite FAQs - Allgemeine Fragen zu ChatGPT-Trainings
 */
export const homepageFAQs: FAQ[] = [
  {
    question: "Was ist ChatGPT und warum brauche ich eine Schulung?",
    answer: "ChatGPT ist ein KI-Assistent von OpenAI, der bei Textarbeit, Recherche, Analyse und kreativen Aufgaben unterstützt. Eine professionelle Schulung ist wichtig, weil die meisten Anwender nur einen Bruchteil der Möglichkeiten produktiv nutzen. In unseren Trainings lernen Teilnehmer, ChatGPT für ihre konkreten Arbeitsprozesse einzusetzen – mit realen Use Cases und direkt anwendbaren Workflows.",
    category: 'general'
  },
  {
    question: "Für wen sind die ChatGPT-Trainings der chatgpt-trainings.de geeignet?",
    answer: "Unsere Trainings richten sich an Wissensarbeiter, Teams und Führungskräfte in Unternehmen mit 50 bis 10.000 Mitarbeitenden im DACH-Raum. Primäre Zielgruppen sind: Büroangestellte, die KI-Tools im Arbeitsalltag nutzen wollen; IT-Teams, die ChatGPT einführen; Führungskräfte, die das Potenzial verstehen wollen; sowie Entwickler, die KI-gestützt arbeiten möchten. Wir bieten sowohl Einsteiger- als auch Advanced-Trainings an.",
    category: 'training'
  },
  {
    question: "Was unterscheidet chatgpt-trainings.de von anderen KI-Trainingsanbietern?",
    answer: "Die chatgpt-trainings.de ist spezialisiert auf ChatGPT und OpenAI-Produkte – kein Bauchladen an Tools. Unser Unterschied: 1) Konsequente Praxisorientierung mit realen Use Cases aus Ihrem Arbeitsumfeld statt theoretischer Übersichten. 2) Wir sind eine Marke der Yellow-Boat Consulting, die seit 2011 Digitalisierungsprojekte und Trainings in Konzernen und Mittelstand durchführt. 3) Wir begleiten auch KI-Einführungen mit Governance, Change Management und nachhaltiger Adoption.",
    category: 'general'
  },
  {
    question: "Bietet chatgpt-trainings.de auch Inhouse-Trainings für Unternehmen an?",
    answer: "Ja, Inhouse-Trainings sind unser Kerngeschäft. Wir kommen zu Ihnen ins Unternehmen oder führen das Training live online durch. Die Inhalte werden auf Ihre spezifischen Arbeitsprozesse, Branchen-Use-Cases und Governance-Anforderungen angepasst. Wir entwickeln gemeinsam mit Ihnen individuelle Prompt-Bibliotheken und abteilungsspezifische Workflows. Für größere Rollouts bieten wir auch Train-the-Trainer-Programme an.",
    category: 'training'
  },
  {
    question: "Wie unterstützt chatgpt-trainings.de bei einer ChatGPT-Einführung im Unternehmen?",
    answer: "Wir begleiten den gesamten Einführungsprozess: Von der Prozessanalyse und Use-Case-Definition über ROI-Berechnung und Business Case bis zum phasenweisen Rollout-Plan. Dazu gehören Change Management, Governance-Framework, Schulungen aller Nutzergruppen und nachhaltige Adoption-Maßnahmen. Unser Ziel: ChatGPT soll nicht nur eingeführt, sondern wirklich produktiv genutzt werden – mit messbarem Mehrwert für Ihre Organisation.",
    category: 'technical'
  },
  {
    question: "Sind die ChatGPT-Schulungen DSGVO-konform?",
    answer: "Ja, alle unsere Trainings behandeln explizit die datenschutzkonforme Nutzung von ChatGPT. Wir erklären, wie ChatGPT mit Unternehmensdaten umgeht, welche Daten verarbeitet werden und wie Sie ChatGPT Enterprise oder Team für maximalen Datenschutz einsetzen. Zusätzlich bieten wir ein spezielles Halbtags-Training zur rechtssicheren KI-Nutzung an, das DSGVO-Anforderungen und den EU AI Act behandelt.",
    category: 'compliance'
  },
  {
    question: "Wie kann ich ein ChatGPT-Training bei chatgpt-trainings.de anfragen?",
    answer: "Sie können uns direkt über unser Kontaktformular auf chatgpt-trainings.de erreichen oder einen Termin für ein kostenloses Erstgespräch über Microsoft Bookings buchen. In diesem unverbindlichen Gespräch besprechen wir Ihre Anforderungen, Teamgröße und gewünschte Inhalte. Wir melden uns innerhalb von 24 Stunden bei Ihnen. Telefon: +49 221 950 187 74, E-Mail: info@chatgpt-trainings.de.",
    category: 'general'
  },
  {
    question: "Bietet chatgpt-trainings.de auch Prüfungen und Zertifikate für ChatGPT-Trainings an?",
    answer: "Ja, wir bieten maßgeschneiderte Quizze und Prüfungen an, bei denen Teilnehmer aktiv beweisen müssen, dass sie das Gelernte verstanden haben. Nach bestandener Prüfung erhalten sowohl die Mitarbeiter als auch das Unternehmen ein offizielles Zertifikat. Wir bieten auch aufeinander aufbauende Zertifizierungsstufen wie 'ChatGPT in der Praxis I-IV' (Beginner, Advanced, Pro, Expert) an, die einen strukturierten Kompetenzaufbau ermöglichen.",
    category: 'training'
  }
];

/**
 * Generiert FAQPage Schema.org Markup
 */
export const generateFAQSchema = (faqs: FAQ[]) => {
  return {
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
