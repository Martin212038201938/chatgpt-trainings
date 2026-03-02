import { Brain, Users, TrendingUp, Zap, GraduationCap, Mic, PartyPopper, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Kompetenz-Level: Essentials → Advanced
 */
export type CompetencyLevel = "essentials" | "advanced";

export interface TrainingFAQ {
  question: string;
  answer: string;
}

export interface Training {
  slug: string;
  icon: LucideIcon;
  title: string;
  duration: string;
  description: string;
  features: string[];
  levels: CompetencyLevel[];
  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  faqs?: TrainingFAQ[];
}

export const competencyLabels: Record<CompetencyLevel, { label: string; color: string }> = {
  "essentials": { label: "Essentials", color: "bg-blue-100 text-blue-800" },
  "advanced": { label: "Advanced", color: "bg-purple-100 text-purple-800" }
};

// ═══════════════════════════════════════════
// TRAININGSMODULE
// ═══════════════════════════════════════════
export const trainings: Training[] = [
  // ── ESSENTIALS ──
  {
    slug: "chatgpt-kick-off",
    icon: Zap,
    title: "ChatGPT Kick-Off – Der kompakte Einstieg in 4 Stunden",
    duration: "4 Stunden (Halbtag)",
    description: "Vier Stunden, die den Umgang mit ChatGPT grundlegend verändern. Statt planlosem Ausprobieren lernen Ihre Teams, wie professionelles Prompting funktioniert: Kontext setzen, Rollen zuweisen, Ergebnisse steuern. Inklusive Datenschutz-Modul für den sicheren Einsatz im Unternehmen.",
    features: [
      "Wie ChatGPT Sprache verarbeitet – und warum das für gute Prompts entscheidend ist",
      "Die Anatomie eines guten Prompts: Kontext, Aufgabe, Format, Constraints",
      "Zehn Prompt-Muster, die in jedem Bürojob sofort funktionieren",
      "Live-Übungen: Jeder baut Prompts für die eigene tägliche Arbeit",
      "Typische Fehler erkennen: Warum ChatGPT manchmal Unsinn liefert – und was dagegen hilft",
      "Datenschutz und sicherer Einsatz: DSGVO-konforme Nutzung, klare Regeln was in den Prompt darf und was nicht"
    ],
    levels: ["essentials"],
    metaTitle: "ChatGPT Kick-Off Training – 4 Stunden Prompt Engineering Einstieg",
    metaDescription: "In 4 Stunden vom ChatGPT-Einsteiger zum strukturierten Prompter. Kompakter Kick-Off mit Live-Übungen und Datenschutz-Modul.",
    keywords: ["ChatGPT Kick-Off", "Prompt Engineering Einstieg", "ChatGPT Halbtag", "ChatGPT Kompaktschulung", "KI Kick-Off"],
    faqs: [
      {
        question: "Reichen 4 Stunden, um ChatGPT wirklich besser nutzen zu können?",
        answer: "Der Kick-Off ist auf schnelle Handlungsfähigkeit ausgelegt. Wir konzentrieren uns auf die Prompt-Techniken mit dem gr\u00f6\u00dften Hebel im Arbeitsalltag – inklusive klarer Datenschutz-Regeln. Wer tiefer einsteigen will, bucht anschlie\u00dfend das Starter Training oder die Lernreise."
      },
      {
        question: "K\u00f6nnen wir den Kick-Off f\u00fcr verschiedene Abteilungen durchf\u00fchren?",
        answer: "Ja, die Live-\u00dcbungen werden an die Teilnehmergruppe angepasst. Marketing arbeitet an anderen Prompts als Controlling. Bei sehr heterogenen Gruppen empfehlen wir abteilungsspezifische Sessions."
      }
    ]
  },
  {
    slug: "chatgpt-starter-training",
    icon: Brain,
    title: "ChatGPT Starter Training – Das umfassende Fundament",
    duration: "1 Tag (7h) oder 3,5 Stunden (Kompaktversion)",
    description: "Acht Module – von KI-Grundlagen und AI-Mindset \u00fcber Prompting-Techniken und Textarbeit bis hin zu Datenanalyse und agentischen Arbeitsweisen. Im Ganztagsformat mit praktischen \u00dcbungen und eigenem Use-Case-Transfer, in der Kompaktversion als fokussierte Wissensvermittlung. Datenschutz und sicherer Einsatz sind fester Bestandteil des Trainings.",
    features: [
      "Grundlagen generativer KI und AI-Mindset: Assistenten vs. Agenten, Denkmodelle f\u00fcr die Zusammenarbeit mit KI",
      "Datenschutz, Sicherheit und verantwortungsvoller Einsatz von ChatGPT im Unternehmen",
      "Prompting-Basics und fortgeschrittene Techniken: Zero-Shot, Few-Shot, Chain-of-Thought, Retrieval-Konzepte",
      "Textarbeit und E-Mail-Workflows: Dokumente analysieren, Texte generieren, professionelle E-Mails erstellen",
      "Datenanalyse und Pr\u00e4sentationserstellung: Tabellen, Formeln, Visualisierungen, Folieninhalte",
      "Automatisierung und agentische Arbeitsweisen: Einstieg in KI-Agenten f\u00fcr wiederkehrende Aufgaben",
      "Transfer in den eigenen Arbeitskontext: Use Cases identifizieren, bewerten und umsetzen (Ganztagsformat)",
      "Kompakt vs. Ganztag: Gleicher Inhalt – im Ganztag mit praktischen \u00dcbungen und Use-Case-Arbeit"
    ],
    levels: ["essentials"],
    metaTitle: "ChatGPT Starter Training – KI-Kompetenz aufbauen | 1 Tag oder 3,5h",
    metaDescription: "Umfassendes ChatGPT Training in 8 Modulen: KI-Grundlagen, Prompting, Textarbeit, Datenanalyse, Automatisierung. Inkl. Datenschutz-Modul.",
    keywords: ["ChatGPT Starter Training", "Prompt Engineering Grundlagen", "ChatGPT Ganztag", "KI Training Unternehmen", "ChatGPT Workshop", "ChatGPT Datenschutz"],
    faqs: [
      {
        question: "Was unterscheidet das Starter Training vom Kick-Off?",
        answer: "Der Kick-Off vermittelt die wichtigsten Grundlagen in 4 Stunden. Das Starter Training geht systematisch tiefer: Acht Module von KI-Grundlagen \u00fcber Prompting und Textarbeit bis hin zu Datenanalyse und agentischen Arbeitsweisen. Ideal als umfassender Einstieg."
      },
      {
        question: "Ganztag oder Kompaktversion?",
        answer: "Beide Formate decken dieselben acht Module ab. Im Ganztag (7h) kommen praktische \u00dcbungen und die eigenst\u00e4ndige Use-Case-Arbeit hinzu – Teilnehmer identifizieren, bewerten und setzen konkrete Anwendungsf\u00e4lle aus ihrem Arbeitsalltag um. Die Kompaktversion (3,5h) konzentriert sich auf die Wissensvermittlung."
      }
    ]
  },

  // ── ADVANCED ──
  {
    slug: "chatgpt-intensiv-bootcamp",
    icon: GraduationCap,
    title: "Advanced Prompt Systems – Das 2-Tage-Intensivprogramm",
    duration: "2 Tage (je 7 Stunden)",
    description: "Zwei Tage f\u00fcr Wissensarbeiter, die \u00fcber Grundlagen-Prompting hinauswollen. Mehrstufige Prompt-Ketten, strukturierte Ausgabeformate, Custom GPTs und der sichere Umgang mit sensiblen Daten in KI-Systemen – dieses Intensivprogramm macht aus gelegentlichen ChatGPT-Nutzern systematische KI-Anwender.",
    features: [
      "Multi-Step-Prompt-Ketten: Komplexe Analysen in durchdachte Teilschritte zerlegen",
      "Strukturierte Ausgabeformate: JSON, Markdown-Tabellen, Report-Templates – Ergebnisse in der Form, die Sie brauchen",
      "Custom GPTs bauen: Eigene KI-Assistenten f\u00fcr wiederkehrende Workflows erstellen und im Team bereitstellen",
      "Datenschutz f\u00fcr Fortgeschrittene: Sichere Datenverarbeitung, Klassifizierung sensibler Informationen, Audit-Trails",
      "Qualit\u00e4tssicherung: KI-Outputs professionell pr\u00fcfen, iterieren und auf Unternehmensstandards bringen",
      "Capstone-Projekt: Jeder Teilnehmer l\u00f6st eine echte Aufgabe aus dem eigenen Arbeitskontext",
      "30-Tage-Aktionsplan: Strukturierte Nachbereitung f\u00fcr den Transfer in den Alltag"
    ],
    levels: ["advanced"],
    metaTitle: "Advanced Prompt Systems – 2-Tage ChatGPT Intensivprogramm",
    metaDescription: "2-Tage-Intensivprogramm: Multi-Step-Prompts, Custom GPTs, strukturierte Ausgaben und Datenschutz f\u00fcr Fortgeschrittene. F\u00fcr erfahrene ChatGPT-Anwender.",
    keywords: ["ChatGPT Bootcamp", "Advanced Prompt Engineering", "Custom GPTs Training", "ChatGPT Intensiv", "Multi-Step Prompts"],
    faqs: [
      {
        question: "F\u00fcr wen ist das Intensivprogramm gedacht?",
        answer: "F\u00fcr Wissensarbeiter mit ChatGPT-Grundkenntnissen, die den n\u00e4chsten Schritt machen wollen: Analysten, Projektmanager, Berater, Fachexperten, F\u00fchrungskr\u00e4fte. Die Grundlagen sollten sitzen – idealerweise durch unser Starter Training oder vergleichbare Erfahrung."
      },
      {
        question: "Lohnen sich 2 volle Tage?",
        answer: "Multi-Step-Prompts, Custom GPTs und strukturierte Ausgabeformate brauchen \u00dcbungszeit. Tag 1 vermittelt die Techniken, Tag 2 verankert sie durch das Capstone-Projekt. Dieser Aufbau sorgt daf\u00fcr, dass Teilnehmer das Gelernte wirklich anwenden k\u00f6nnen – nicht nur kennen."
      }
    ]
  },
  {
    slug: "chatgpt-lernreise",
    icon: TrendingUp,
    title: "KI-Workflow-Lernreise – Vom Prompt zum produktiven Dauerbetrieb",
    duration: "4 \u00d7 2 Stunden oder 6 \u00d7 2 Stunden (\u00fcber 4–8 Wochen)",
    description: "Die Lernreise verbindet Essentials und Advanced \u00fcber mehrere Wochen: Von den Prompt-Grundlagen und dem sicheren Einsatz \u00fcber fortgeschrittene Systeme bis zu Custom GPTs und Automatisierung. Zwischen den Live-Sessions wenden Teilnehmer das Gelernte an und bringen konkrete Ergebnisse in die n\u00e4chste Runde.",
    features: [
      "Session 1: KI-Grundlagen, AI-Mindset und erste systematische Anwendung",
      "Session 2: Datenschutz, sicherer Einsatz und fortgeschrittene Prompt-Techniken",
      "Session 3: Textarbeit, E-Mail-Workflows und abteilungsspezifische Anwendungen",
      "Session 4: Datenanalyse, Custom GPTs und Automatisierung (4er-Variante: Abschluss)",
      "Session 5 (6er): Spezialthemen und Vertiefung nach Bedarf der Gruppe",
      "Session 6 (6er): Peer-Review, erprobte Muster und pers\u00f6nlicher Workflow-Plan",
      "Praxis-Aufgaben zwischen den Sessions: Gelerntes im Arbeitsalltag testen und verfeinern",
      "Erfahrungsaustausch: Was funktioniert, was nicht – gemeinsam optimieren"
    ],
    levels: ["essentials", "advanced"],
    metaTitle: "KI-Workflow-Lernreise – Nachhaltiger ChatGPT-Kompetenzaufbau",
    metaDescription: "ChatGPT-Lernreise \u00fcber 4–8 Wochen: Von Prompt-Grundlagen und Datenschutz \u00fcber Advanced Systems bis zu Custom GPTs. Nachhaltiger Transfer garantiert.",
    keywords: ["ChatGPT Lernreise", "KI-Workflow lernen", "ChatGPT Blended Learning", "Prompt Engineering Programm", "ChatGPT nachhaltig"],
    faqs: [
      {
        question: "Warum eine Lernreise statt eines kompakten Trainings?",
        answer: "Verteiltes Lernen mit Anwendungsphasen f\u00fchrt zu deutlich besserer Verankerung. Teilnehmer testen das Gelernte im echten Arbeitsalltag und bringen Erfahrungen in die n\u00e4chste Session ein. Das Ergebnis: echte Verhaltens\u00e4nderung statt Einmal-Effekt."
      },
      {
        question: "4 oder 6 Sessions?",
        answer: "Die 4er-Variante deckt die Kernthemen kompakt ab. Die 6er-Variante bietet Raum f\u00fcr Vertiefung, Spezialthemen und mehr Peer-Learning. F\u00fcr eine breite Einf\u00fchrung empfehlen wir die 6er-Variante."
      }
    ]
  },

  // ── BEGLEITENDE FORMATE ──
  {
    slug: "chatgpt-keynote",
    icon: Mic,
    title: "KI-Impulsvortrag – Was ChatGPT f\u00fcr Ihr Unternehmen bedeutet",
    duration: "60–90 Minuten",
    description: "Ein Impulsvortrag, der Orientierung gibt statt Buzzwords verbreitet. Live-Demonstrationen zeigen, was ChatGPT heute wirklich kann – und wo die Grenzen liegen. Ideal als Auftakt f\u00fcr Ihre KI-Initiative oder als Impulsgeber bei Firmenevents und F\u00fchrungskr\u00e4fte-Runden.",
    features: [
      "Live-Demonstrationen: Beeindruckende und ern\u00fcchternde Anwendungen – ehrlich statt hype",
      "Modellverst\u00e4ndnis: Wie GPT-Modelle funktionieren – ohne Informatik-Vorlesung",
      "Branchenrelevanz: Wo KI Ihre Arbeitsprozesse ver\u00e4ndert – und wo sie es (noch) nicht tut",
      "Datenschutz und Compliance: Was Entscheider \u00fcber DSGVO und EU AI Act wissen m\u00fcssen",
      "Mitarbeiter mitnehmen: Begeisterung statt Angst – der richtige Ton f\u00fcr die KI-Einf\u00fchrung",
      "Interaktive Q&A: Echte Fragen, echte Antworten, keine vorbereiteten Phrasen"
    ],
    levels: ["essentials"],
    metaTitle: "ChatGPT Keynote – KI-Impulsvortrag f\u00fcr Unternehmen",
    metaDescription: "Keynote zu ChatGPT: Live-Demos, Modellverst\u00e4ndnis und klare Orientierung f\u00fcr Entscheider. Ideal als Auftakt f\u00fcr Ihre KI-Initiative.",
    keywords: ["ChatGPT Keynote", "KI Impulsvortrag", "ChatGPT Vortrag", "KI Keynote Speaker", "KI Zukunft der Arbeit"],
    faqs: [
      {
        question: "F\u00fcr welches Publikum eignet sich der Impulsvortrag?",
        answer: "F\u00fcr alle – von der Gesch\u00e4ftsf\u00fchrung bis zu allen Mitarbeitenden. Wir passen den Schwerpunkt an: strategisch f\u00fcr F\u00fchrungskr\u00e4fte, praktisch f\u00fcr Teams."
      }
    ]
  },
  {
    slug: "keynote-agentische-arbeit",
    icon: Rocket,
    title: "Keynote: Die Zukunft der Arbeit ist agentisch",
    duration: "60–90 Minuten",
    description: "Anhand von real funktionierenden agentischen End-to-End-Workflows beschreibt Martin Lang seine Vision davon, wie Wissensarbeit sich in den n\u00e4chsten drei bis f\u00fcnf Jahren grundlegend ver\u00e4ndern wird – und wie wir uns als Menschen und Unternehmen darin wiederfinden. Ein durchaus kritischer, aber auch faszinierender Blick in die Glaskugel. Und das nicht theoretisch: Alle Prozesse werden live vorgef\u00fchrt.",
    features: [
      "Live-Demo: Automatische Angebotserstellung aus dem Transkript eines Vertriebsgespr\u00e4chs – End-to-End",
      "Live-Demo: Vibe Coding einer Landingpage mit KI-Tool zu einem bestimmten Thema – in Echtzeit",
      "Live-Demo: Die Zukunft des Customer Supports durch eine KI, die den Browser benutzt wie ein Mensch",
      "Vision: Wie agentische KI die Wissensarbeit in 3–5 Jahren transformiert",
      "Kritische Einordnung: Was das f\u00fcr Arbeitspl\u00e4tze, Kompetenzen und Unternehmensstrukturen bedeutet",
      "Interaktive Q&A: Offene Diskussion \u00fcber Chancen, Risiken und die n\u00e4chsten Schritte"
    ],
    levels: ["essentials"],
    metaTitle: "Keynote: Die Zukunft der Arbeit ist agentisch – mit Live-Demos",
    metaDescription: "Keynote mit Live-Demos agentischer KI-Workflows: Automatische Angebotserstellung, Vibe Coding und KI-Browser-Automatisierung. Vision f\u00fcr 3–5 Jahre.",
    keywords: ["KI Keynote", "agentische KI", "Zukunft der Arbeit", "KI Automatisierung", "Vibe Coding", "KI Keynote Speaker", "agentische Workflows"],
    faqs: [
      {
        question: "Was unterscheidet diese Keynote vom KI-Impulsvortrag?",
        answer: "Der Impulsvortrag gibt eine breite Orientierung zu ChatGPT und KI. Diese Keynote geht gezielt in die agentische Zukunft: Live-Demonstrationen von End-to-End-Workflows, die heute schon funktionieren, kombiniert mit einer klaren Vision f\u00fcr die n\u00e4chsten Jahre. Weniger \u00dcberblick, mehr Tiefgang und Provokation."
      },
      {
        question: "Sind die Live-Demos echt oder vorbereitet?",
        answer: "Alle Workflows laufen live und in Echtzeit – mit allen \u00dcberraschungen, die das mit sich bringt. Genau das macht die Keynote authentisch: Die Teilnehmer sehen nicht nur, was theoretisch m\u00f6glich ist, sondern erleben den aktuellen Stand der Technik ungefiltert."
      }
    ]
  },
  {
    slug: "chatgpt-launch-event",
    icon: PartyPopper,
    title: "KI-Launch-Event – Der Auftakt, der begeistert",
    duration: "Halbtag oder Ganztag",
    description: "Machen Sie den Start Ihrer KI-Initiative zum Erlebnis. Keynote, Hands-on-Stationen und interaktive Workshops schaffen Begeisterung statt Pflichtprogramm. Auf Wunsch unterst\u00fctzen wir den gesamten Rollout: von der internen Kommunikation \u00fcber Trainingsmaterialien bis zu begeisternden Events bei Ihnen vor Ort.",
    features: [
      "Keynote: Inspirierender Auftakt mit Live-Demos – begeisternde Events bei Ihnen vor Ort",
      "Hands-on-Stationen: ChatGPT an verschiedenen Thementischen ausprobieren",
      "Abteilungs-Workshops: Erste Anwendungen f\u00fcr Marketing, HR, Finanzen, Vertrieb",
      "Rollout-Unterst\u00fctzung: Interne Kommunikation, Trainingsmaterialien, Poster, Aufsteller, Cheat-Sheets und Desktop Items",
      "Leadership-Session: Separater Block f\u00fcr F\u00fchrungskr\u00e4fte zu Governance und Strategie",
      "Skalierbar: Von 20 bis 500+ Teilnehmer, vor Ort oder hybrid"
    ],
    levels: ["essentials"],
    metaTitle: "ChatGPT Launch-Event – Erlebnistag f\u00fcr Ihre KI-Einf\u00fchrung",
    metaDescription: "KI-Launch-Event mit Keynote, Workshops und Live-Demos: Der Auftakt, der Begeisterung schafft. Von 20 bis 500+ Teilnehmer.",
    keywords: ["ChatGPT Launch Event", "KI Einf\u00fchrung Event", "ChatGPT Kick-Off Event", "KI Erlebnistag"],
    faqs: [
      {
        question: "Was unterscheidet das Launch-Event von einem Training?",
        answer: "Das Launch-Event ist eine Kommunikationsma\u00dfnahme: Begeisterung wecken, Ber\u00fchrungsangst abbauen, die Organisation mitnehmen. Die eigentlichen Trainings folgen danach – mit Mitarbeitern, die motiviert statt skeptisch sind."
      }
    ]
  },
  {
    slug: "chatgpt-hackathon",
    icon: Users,
    title: "KI-Hackathon – Innovation durch Wettbewerb",
    duration: "1 Tag (7–8 Stunden)",
    description: "Abteilungs\u00fcbergreifende Teams l\u00f6sen im freundschaftlichen Wettbewerb echte Gesch\u00e4ftsprobleme mit ChatGPT. Vom Challenge-Briefing \u00fcber die Prompt-Entwicklung bis zur Pitch-Session – die besten Ideen bekommen einen Umsetzungsplan.",
    features: [
      "Challenge-Definition: Echte Probleme aus Ihrem Unternehmen als Aufgaben",
      "Team-Bildung: Abteilungs\u00fcbergreifend f\u00fcr maximale Perspektivenvielfalt",
      "Guided Hacking: KI-Mentoren begleiten jedes Team",
      "Prototypen bauen: Custom GPTs und Prompt-Systeme entwickeln",
      "Pitch-Session: Jedes Team pr\u00e4sentiert vor Jury und Publikum",
      "Umsetzungsplan: Die besten Ideen werden tats\u00e4chlich weiterverfolgt"
    ],
    levels: ["advanced"],
    metaTitle: "KI-Hackathon – ChatGPT Innovation im Team",
    metaDescription: "KI-Hackathon f\u00fcr Unternehmen: Teams entwickeln im Wettbewerb echte ChatGPT-L\u00f6sungen. Innovation, Teamgeist und umsetzbare Ergebnisse.",
    keywords: ["KI Hackathon", "ChatGPT Hackathon", "KI Innovation Tag", "ChatGPT Team Event"],
    faqs: [
      {
        question: "Brauchen die Teilnehmer Programmierkenntnisse?",
        answer: "Nein. L\u00f6sungen werden mit ChatGPT und Custom GPTs gebaut, nicht mit Code. Alle k\u00f6nnen teilnehmen – von der Assistenz bis zur Gesch\u00e4ftsf\u00fchrung."
      }
    ]
  }
];

export function getTrainingBySlug(slug: string): Training | undefined {
  return trainings.find(t => t.slug === slug);
}
