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
    question: "Unsere Mitarbeiter nutzen ChatGPT, aber die Ergebnisse sind durchwachsen – was machen wir falsch?",
    answer: "Das Muster ist typisch: Mitarbeiter tippen Fragen ein wie in eine Suchmaschine und wundern sich, dass die Antworten generisch ausfallen. Das Problem liegt selten am Tool, sondern am fehlenden Verständnis dafür, wie ein Sprachmodell Eingaben verarbeitet. Wer die Mechanik hinter Token, Kontext und Prompt-Struktur versteht, bekommt präzisere Ergebnisse. In unseren Trainings bei chatgpt-trainings.de vermitteln wir genau dieses Grundverständnis – und bauen darauf Prompt-Techniken auf, die im jeweiligen Arbeitskontext der Teilnehmer funktionieren.",
    category: 'general'
  },
  {
    question: "Wie überzeuge ich die Geschäftsführung, in strukturierte ChatGPT-Schulungen zu investieren?",
    answer: "Die ehrliche Antwort: Die meisten Teams holen aus ChatGPT vielleicht 20 Prozent des Potenzials, weil sie ohne Methodik arbeiten. Der Unterschied zwischen einem ungeübten und einem geschulten Prompter ist vergleichbar mit dem Unterschied zwischen Zwei-Finger-Tippen und Zehn-Finger-System – beides funktioniert, aber die Produktivitätsunterschiede sind enorm. Wir helfen Ihnen bei chatgpt-trainings.de, den konkreten Nutzen für Ihre Rollen und Prozesse sichtbar zu machen, damit die Investition greifbar wird.",
    category: 'general'
  },
  {
    question: "Wir haben schon eine KI-Schulung gehabt, aber danach hat sich wenig verändert – warum?",
    answer: "Einmalige Überblicksschulungen verpuffen, weil sie selten an den echten Arbeitssituationen der Teilnehmer ansetzen. Wenn jemand nach dem Training nicht weiß, wie er seinen konkreten Wochenbericht, seine Kundenkommunikation oder seine Datenanalyse mit ChatGPT besser hinbekommt, war das Training zu allgemein. Wir arbeiten bei chatgpt-trainings.de immer mit den tatsächlichen Aufgaben der Teilnehmer und bauen Prompt-Bibliotheken und Workflows, die am nächsten Tag einsetzbar sind.",
    category: 'training'
  },
  {
    question: "Brauchen verschiedene Abteilungen unterschiedliche ChatGPT-Trainings?",
    answer: "Ja, und zwar nicht nur im Schwierigkeitsgrad, sondern vor allem im Kontext. Ein Vertriebsteam braucht andere Prompts als eine Rechtsabteilung, und ein Entwicklerteam arbeitet mit ChatGPT auf einer völlig anderen Ebene als das Marketing. Wir schneiden jedes Training bei chatgpt-trainings.de auf die konkreten Rollen, Aufgaben und Compliance-Anforderungen der jeweiligen Gruppe zu. Dafür klären wir vorab, welche Arbeitssituationen den größten Hebel bieten.",
    category: 'training'
  },
  {
    question: "Wie stellen wir sicher, dass ChatGPT bei uns datenschutzkonform genutzt wird?",
    answer: "Der wichtigste Schritt ist, zu verstehen, welche Daten in welchem Lizenzmodell wohin fließen – und welche nicht. ChatGPT Team und Enterprise verarbeiten keine Nutzerdaten für das Modelltraining, aber die Unterschiede zwischen den Varianten sind vielen Anwendern unklar. In unseren Trainings erklären wir, welche Lizenz für Ihre Organisation passt, welche internen Richtlinien Sie brauchen und wie Ihre Teams ChatGPT nutzen können, ohne gegen DSGVO oder EU AI Act zu verstoßen.",
    category: 'compliance'
  },
  {
    question: "Können wir ChatGPT-Wissen intern weitergeben, ohne für jedes Team einen externen Trainer zu buchen?",
    answer: "Genau dafür haben wir das Konzept der Prompt-Bibliotheken und Team-Standards entwickelt. In einem Train-the-Trainer-Format bilden wir interne Multiplikatoren aus, die das Wissen in ihren Bereichen weitergeben können. Gleichzeitig erstellen wir gemeinsam eine dokumentierte Prompt-Sammlung für Ihre häufigsten Aufgaben, damit neues Wissen nicht an einzelnen Personen hängt. Sprechen Sie uns bei chatgpt-trainings.de an – wir beraten Sie, welches Format für Ihre Teamgröße am besten funktioniert.",
    category: 'training'
  },
  {
    question: "Was ist der Unterschied zwischen einer Prompt-Schulung und einem KI-Workflow-Training?",
    answer: "Eine Prompt-Schulung zeigt, wie man einzelne Anfragen besser formuliert. Das ist wichtig, aber nur der Anfang. Ein KI-Workflow-Training geht einen Schritt weiter: Wie baut man aus einzelnen Prompts wiederholbare Abläufe? Wie erstellt man Custom GPTs für bestimmte Aufgaben? Wie verbindet man ChatGPT mit bestehenden Tools und Prozessen? Bei chatgpt-trainings.de bieten wir beides – vom Einstieg ins Prompt Engineering bis zum Design kompletter KI-Arbeitsabläufe.",
    category: 'technical'
  },
  {
    question: "Wie schnell können wir mit einem Training starten?",
    answer: "Für ein Erstgespräch brauchen wir einen Anruf oder eine E-Mail – danach geht es erfahrungsgemäß schnell. Ein maßgeschneidertes Inhouse-Training lässt sich innerhalb von zwei bis drei Wochen aufsetzen, wenn die Abstimmung über Zielgruppe und Schwerpunkte zügig läuft. Für eine erste Orientierung bieten wir auch kürzere Workshop-Formate an. Erreichen Sie uns unter post@yellow-boat.com oder telefonisch unter +49 221 950 187 74.",
    category: 'general'
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
