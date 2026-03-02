/**
 * FAQ Data for chatgpt-trainings.de
 * Aus Entscheider-Perspektive geschrieben – nicht aus Produktsicht.
 * Jede Frage spiegelt ein reales Problem/eine reale Herausforderung wider.
 * Jede Antwort adressiert das Problem und verweist auf chatgpt-trainings.de als Ressource.
 */

export interface FAQ {
  question: string;
  answer: string;
  category?: 'general' | 'training' | 'pricing' | 'technical' | 'compliance';
}

/**
 * Startseite FAQs - Entscheider-Perspektive
 */
export const homepageFAQs: FAQ[] = [
  {
    question: "Warum sollten wir ein ChatGPT-Training buchen, wenn das Tool doch selbsterklärend ist?",
    answer: "Die meisten Anwender nutzen ChatGPT auf dem Niveau einfacher Frage-Antwort-Dialoge. Ein strukturiertes Training zeigt, wie sich durch Prompt-Architektur, Rollenanweisungen und Multi-Step-Prompts deutlich bessere Ergebnisse erzielen lassen. Teilnehmer unserer Trainings lernen außerdem, Halluzinationen zu erkennen, Outputs kritisch zu bewerten und ChatGPT gezielt für ihre konkreten Aufgaben einzusetzen – mit fertigen Workflows, die am nächsten Arbeitstag funktionieren.",
    category: 'general'
  },
  {
    question: "Für welche Teams und Rollen sind die Trainings der chatgpt-trainings.de gedacht?",
    answer: "Unsere Trainings richten sich an Wissensarbeiter, Teams und Führungskräfte in Organisationen mit 20 bis 5.000 Mitarbeitenden im DACH-Raum. Typische Teilnehmer: Fachkräfte aus Marketing, HR, Controlling oder Vertrieb, die ChatGPT für Textarbeit, Recherche und Analyse nutzen wollen; IT-Teams, die ChatGPT-Richtlinien und Custom GPTs einführen; Führungskräfte, die einschätzen müssen, wo KI-Einsatz sinnvoll ist; sowie Entwickler, die KI-gestützt arbeiten möchten.",
    category: 'training'
  },
  {
    question: "Was unterscheidet chatgpt-trainings.de von anderen KI-Schulungsanbietern?",
    answer: "Drei Dinge: Erstens – wir unterrichten ausschließlich ChatGPT und OpenAI-Produkte, keine Tool-Rundschau über zehn verschiedene KI-Dienste. Zweitens – wir vermitteln Prompt Engineering als Handwerk: Token-Mechanik, Kontextsteuerung, strukturierte Outputs. Wer versteht, warum etwas funktioniert, kann das Wissen auf neue Situationen übertragen. Drittens – jeder Teilnehmer arbeitet an seinen eigenen Aufgaben und verlässt das Training mit getesteten Workflows.",
    category: 'general'
  },
  {
    question: "Bietet chatgpt-trainings.de Inhouse-Trainings an?",
    answer: "Ja, Inhouse-Trainings bei Ihnen vor Ort oder als Live-Online-Session sind unser Hauptformat. Vor dem Training besprechen wir Branche, Teilnehmerrollen und ChatGPT-Erfahrung. Daraus leiten wir ab, welche Prompt-Techniken und Use Cases im Training behandelt werden. Bei größeren Rollouts starten wir mit parallelen Gruppen oder einem Lernreise-Format über mehrere Wochen.",
    category: 'training'
  },
  {
    question: "Wie begleitet chatgpt-trainings.de eine ChatGPT-Einführung im Unternehmen?",
    answer: "Über das reine Training hinaus unterstützen wir beim Aufbau von Prompt-Bibliotheken, der Entwicklung von Custom GPTs für wiederkehrende Aufgaben und der Definition von Qualitätsstandards für KI-generierte Arbeitsergebnisse. Dazu gehören auch Leitlinien für DSGVO-konforme Nutzung und ein Regelwerk, wie Teams mit LLM-Outputs umgehen sollen. Für Führungskräfte bieten wir Coaching zur strategischen Einbettung von ChatGPT in bestehende Arbeitsprozesse.",
    category: 'technical'
  },
  {
    question: "Sind die ChatGPT-Schulungen DSGVO-konform?",
    answer: "Ja. In jedem Training behandeln wir explizit, welche Daten in ChatGPT eingegeben werden dürfen und welche nicht. Wir erklären die Unterschiede zwischen ChatGPT Free, Plus, Team und Enterprise hinsichtlich Datenverarbeitung und zeigen, wie sich ChatGPT Enterprise und Team so konfigurieren lassen, dass Unternehmensdaten nicht ins Modelltraining fließen. Ein separates Halbtags-Modul zur rechtssicheren KI-Nutzung deckt DSGVO-Anforderungen und den EU AI Act ab.",
    category: 'compliance'
  },
  {
    question: "Wie kann ich ein Training bei chatgpt-trainings.de anfragen?",
    answer: "Über das Kontaktformular auf chatgpt-trainings.de oder per Terminbuchung über Microsoft Bookings für ein 15-minütiges Erstgespräch. In diesem Gespräch klären wir Teamgröße, vorhandene ChatGPT-Erfahrung und gewünschte Schwerpunkte. Wir melden uns innerhalb von 24 Stunden mit einem konkreten Vorschlag. Telefon: +49 221 950 187 74, E-Mail: info@chatgpt-trainings.de.",
    category: 'general'
  },
  {
    question: "Gibt es Prüfungen und Zertifikate für die ChatGPT-Trainings?",
    answer: "Ja. Zu jedem Training bieten wir optional eine praxisbasierte Prüfung an: Teilnehmer zeigen, dass sie Prompts gezielt formulieren, KI-Outputs kritisch bewerten und ChatGPT sicher im Unternehmenskontext anwenden können. Wer besteht, erhält ein dokumentiertes Zertifikat. Aufbauende Stufen (Beginner, Advanced, Pro, Expert) ermöglichen einen strukturierten Kompetenzweg über mehrere Monate.",
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
