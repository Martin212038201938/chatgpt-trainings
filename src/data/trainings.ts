import { Brain, Users, TrendingUp, Zap, GraduationCap, Mic, PartyPopper } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Kompetenz-Level statt Preis-Tiers.
 * Eigenständige Eskalationslogik: Essentials → Advanced → Workflow-Design
 */
export type CompetencyLevel = "essentials" | "advanced" | "workflow-design";

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
  "advanced": { label: "Advanced", color: "bg-purple-100 text-purple-800" },
  "workflow-design": { label: "Workflow-Design", color: "bg-orange-100 text-orange-800" }
};

// ═══════════════════════════════════════════
// TRAININGSMODULE
// ═══════════════════════════════════════════
export const trainings: Training[] = [
  // ── LEVEL 1: ESSENTIALS ──
  {
    slug: "chatgpt-kick-off",
    icon: Zap,
    title: "ChatGPT Kick-Off – Der kompakte Einstieg in 4 Stunden",
    duration: "4 Stunden (Halbtag)",
    description: "Vier Stunden, die den Umgang mit ChatGPT grundlegend verändern. Statt planlosem Ausprobieren lernen Ihre Teams, wie professionelles Prompting funktioniert: Kontext setzen, Rollen zuweisen, Ergebnisse steuern. Jeder Teilnehmer verlässt den Workshop mit mindestens drei erprobten Prompt-Vorlagen für den eigenen Arbeitsalltag.",
    features: [
      "Wie ChatGPT Sprache verarbeitet – und warum das für gute Prompts entscheidend ist",
      "Die Anatomie eines guten Prompts: Kontext, Aufgabe, Format, Constraints",
      "Zehn Prompt-Muster, die in jedem Bürojob sofort funktionieren",
      "Live-Übungen: Jeder baut Prompts für die eigene tägliche Arbeit",
      "Typische Fehler erkennen: Warum ChatGPT manchmal Unsinn liefert – und was dagegen hilft",
      "Datenschutz-Briefing: Was darf in den Prompt, was nicht – klare Regeln für den Arbeitsalltag"
    ],
    levels: ["essentials"],
    metaTitle: "ChatGPT Kick-Off Training – 4 Stunden Prompt Engineering Einstieg",
    metaDescription: "In 4 Stunden vom ChatGPT-Einsteiger zum strukturierten Prompter. Kompakter Kick-Off mit Live-Übungen und fertigen Prompt-Vorlagen.",
    keywords: ["ChatGPT Kick-Off", "Prompt Engineering Einstieg", "ChatGPT Halbtag", "ChatGPT Kompaktschulung", "KI Kick-Off"],
    faqs: [
      {
        question: "Reichen 4 Stunden, um ChatGPT wirklich besser nutzen zu können?",
        answer: "Der Kick-Off ist auf schnelle Handlungsfähigkeit ausgelegt. Wir konzentrieren uns auf die Prompt-Techniken mit dem größten Hebel im Arbeitsalltag. Teilnehmer gehen mit fertigen Vorlagen nach Hause und können sofort anders arbeiten. Wer tiefer einsteigen will, bucht anschließend das Starter Training oder die Lernreise."
      },
      {
        question: "Können wir den Kick-Off für verschiedene Abteilungen durchführen?",
        answer: "Ja, die Live-Übungen werden an die Teilnehmergruppe angepasst. Marketing arbeitet an anderen Prompts als Controlling. Bei sehr heterogenen Gruppen empfehlen wir abteilungsspezifische Sessions."
      }
    ]
  },
  {
    slug: "chatgpt-starter-training",
    icon: Brain,
    title: "ChatGPT Starter Training – Fundament für professionelles Prompting",
    duration: "1 Tag (7h) oder 2 × 3,5 Stunden",
    description: "Das Fundament für alle, die ChatGPT nicht nur ausprobieren, sondern systematisch in ihre Arbeit integrieren wollen. An einem vollen Tag oder in zwei Halbtagen erarbeiten sich Ihre Mitarbeiter ein solides Verständnis von Prompt-Architektur: Systemprompts, Chain-of-Thought, Few-Shot-Techniken und den Aufbau einer eigenen Prompt-Bibliothek.",
    features: [
      "Prompt-Architektur von Grund auf: Systemprompts, Rollenanweisungen, Constraint-Definitionen",
      "Chain-of-Thought-Prompting: Komplexe Aufgaben in logische Schritte zerlegen",
      "Few-Shot-Techniken: ChatGPT durch Beispiele auf die gewünschte Qualität bringen",
      "Textarbeit auf neuem Niveau: E-Mails, Reports, Zusammenfassungen, Protokolle",
      "Recherche und Analyse: Web-Suche nutzen, Quellen bewerten, Ergebnisse strukturieren",
      "Abteilungs-Workshops: Jeder Teilnehmer baut Prompts für die eigenen Aufgaben",
      "Prompt-Bibliothek anlegen: Wiederverwendbare Templates für das Team",
      "Datenschutz im Detail: ChatGPT Free vs. Plus vs. Team vs. Enterprise"
    ],
    levels: ["essentials"],
    metaTitle: "ChatGPT Starter Training – Prompt Engineering Grundlagen | 1 Tag",
    metaDescription: "Umfassendes Prompt Engineering Training: Systemprompts, Chain-of-Thought, Few-Shot und Prompt-Bibliotheken. Als Ganztag oder 2×3,5h.",
    keywords: ["ChatGPT Starter Training", "Prompt Engineering Grundlagen", "ChatGPT Ganztag", "Prompt-Architektur lernen", "ChatGPT Workshop"],
    faqs: [
      {
        question: "Was unterscheidet das Starter Training vom Kick-Off?",
        answer: "Der Kick-Off vermittelt die wichtigsten Grundlagen in 4 Stunden. Das Starter Training geht systematisch tiefer: Prompt-Architektur, Chain-of-Thought, Few-Shot-Techniken und der Aufbau einer Prompt-Bibliothek brauchen mehr Übungszeit. Ideal als Aufbau nach dem Kick-Off."
      },
      {
        question: "Ganztag oder zwei Halbtage?",
        answer: "Beide Formate decken denselben Inhalt ab. Die zwei Halbtage ermöglichen Praxistransfer zwischen den Sessions. Der Ganztag ist kompakter. Wir beraten je nach Teamstruktur und Terminlage."
      }
    ]
  },

  // ── LEVEL 2: ADVANCED ──
  {
    slug: "chatgpt-intensiv-bootcamp",
    icon: GraduationCap,
    title: "Advanced Prompt Systems – Das 2-Tage-Intensivprogramm",
    duration: "2 Tage (je 7 Stunden)",
    description: "Zwei Tage für Wissensarbeiter, die über Grundlagen-Prompting hinauswollen. Mehrstufige Prompt-Ketten, strukturierte JSON-Ausgaben, rollenbasierte Systemprompts und der Bau eigener Custom GPTs – dieses Intensivprogramm macht aus gelegentlichen ChatGPT-Nutzern systematische KI-Anwender.",
    features: [
      "Multi-Step-Prompt-Ketten: Komplexe Analysen in durchdachte Teilschritte zerlegen",
      "Strukturierte Ausgabeformate: JSON, Markdown-Tabellen, Report-Templates – Ergebnisse in der Form, die Sie brauchen",
      "Rollenlogik vertiefen: Spezialisierte Systemprompts für unterschiedliche Aufgabentypen",
      "Custom GPTs bauen: Eigene KI-Assistenten für wiederkehrende Workflows erstellen",
      "Template-Design: Wiederverwendbare Prompt-Frameworks für das gesamte Team",
      "Qualitätssicherung: KI-Outputs professionell prüfen, iterieren und auf Unternehmensstandards bringen",
      "Capstone-Projekt: Jeder Teilnehmer löst eine echte Aufgabe aus dem eigenen Arbeitskontext",
      "30-Tage-Aktionsplan: Strukturierte Nachbereitung für den Transfer in den Alltag"
    ],
    levels: ["advanced"],
    metaTitle: "Advanced Prompt Systems – 2-Tage ChatGPT Intensivprogramm",
    metaDescription: "2-Tage-Intensivprogramm: Multi-Step-Prompts, Custom GPTs, strukturierte Ausgaben und Template-Design. Für erfahrene ChatGPT-Anwender.",
    keywords: ["ChatGPT Bootcamp", "Advanced Prompt Engineering", "Custom GPTs Training", "ChatGPT Intensiv", "Multi-Step Prompts"],
    faqs: [
      {
        question: "Für wen ist das Intensivprogramm gedacht?",
        answer: "Für Wissensarbeiter mit ChatGPT-Grundkenntnissen, die den nächsten Schritt machen wollen: Analysten, Projektmanager, Berater, Fachexperten, Führungskräfte. Die Grundlagen sollten sitzen – idealerweise durch unser Starter Training oder vergleichbare Erfahrung."
      },
      {
        question: "Lohnen sich 2 volle Tage?",
        answer: "Multi-Step-Prompts, Custom GPTs und Template-Design brauchen Übungszeit. Tag 1 vermittelt die Techniken, Tag 2 verankert sie durch das Capstone-Projekt. Dieser Aufbau sorgt dafür, dass Teilnehmer das Gelernte wirklich anwenden können – nicht nur kennen."
      }
    ]
  },

  // ── LEVEL 3: WORKFLOW-DESIGN ──
  {
    slug: "chatgpt-lernreise",
    icon: TrendingUp,
    title: "KI-Workflow-Lernreise – Vom Prompt zum produktiven Dauerbetrieb",
    duration: "4 × 2 Stunden oder 6 × 2 Stunden (über 4–8 Wochen)",
    description: "Die Lernreise verbindet alle drei Kompetenzlevel über mehrere Wochen: Von den Prompt-Grundlagen über fortgeschrittene Systeme bis zum eigenständigen KI-Workflow-Design. Zwischen den Live-Sessions wenden Teilnehmer das Gelernte an, testen Prompt-Templates im Arbeitsalltag und bringen konkrete Ergebnisse in die nächste Runde.",
    features: [
      "Session 1: Prompt-Grundlagen und erste systematische Anwendung",
      "Session 2: Fortgeschrittene Prompt-Architekturen und abteilungsspezifische Workflows",
      "Session 3: Custom GPTs, Automatisierung und Tool-Integration",
      "Session 4: Unternehmensweite Prompt-Standards und Governance (4er-Variante: Abschluss)",
      "Session 5 (6er): Spezialthemen und Vertiefung nach Bedarf der Gruppe",
      "Session 6 (6er): Peer-Review, erprobte Muster und persönlicher Workflow-Plan",
      "Praxis-Aufgaben zwischen den Sessions: Prompt-Templates testen und verfeinern",
      "Erfahrungsaustausch: Was funktioniert, was nicht – gemeinsam optimieren"
    ],
    levels: ["essentials", "advanced", "workflow-design"],
    metaTitle: "KI-Workflow-Lernreise – Nachhaltiger ChatGPT-Kompetenzaufbau",
    metaDescription: "ChatGPT-Lernreise über 4–8 Wochen: Von Prompt-Grundlagen über Advanced Systems bis zum KI-Workflow-Design. Nachhaltiger Transfer garantiert.",
    keywords: ["ChatGPT Lernreise", "KI-Workflow lernen", "ChatGPT Blended Learning", "Prompt Engineering Programm", "ChatGPT nachhaltig"],
    faqs: [
      {
        question: "Warum eine Lernreise statt eines kompakten Trainings?",
        answer: "Verteiltes Lernen mit Anwendungsphasen führt zu deutlich besserer Verankerung. Teilnehmer testen Prompt-Templates im echten Arbeitsalltag und bringen Erfahrungen in die nächste Session ein. Das Ergebnis: echte Verhaltensänderung statt Einmal-Effekt."
      },
      {
        question: "4 oder 6 Sessions?",
        answer: "Die 4er-Variante deckt die Kernthemen kompakt ab. Die 6er-Variante bietet Raum für Vertiefung, Spezialthemen und mehr Peer-Learning. Für eine breite Einführung empfehlen wir die 6er-Variante."
      }
    ]
  },

  // ── BEGLEITENDE FORMATE ──
  {
    slug: "chatgpt-keynote",
    icon: Mic,
    title: "KI-Impulsvortrag – Was ChatGPT für Ihr Unternehmen bedeutet",
    duration: "60–90 Minuten",
    description: "Ein Impulsvortrag, der Orientierung gibt statt Buzzwords verbreitet. Live-Demonstrationen zeigen, was ChatGPT heute wirklich kann – und wo die Grenzen liegen. Ideal als Auftakt für Ihre KI-Initiative oder als Impulsgeber bei Firmenevents und Führungskräfte-Runden.",
    features: [
      "Live-Demonstrationen: Beeindruckende und ernüchternde Anwendungen – ehrlich statt hype",
      "Modellverständnis: Wie GPT-Modelle funktionieren – ohne Informatik-Vorlesung",
      "Branchenrelevanz: Wo KI Ihre Arbeitsprozesse verändert – und wo sie es (noch) nicht tut",
      "Orientierung für Entscheider: Investieren, abwarten oder aktiv gegensteuern?",
      "Mitarbeiter mitnehmen: Begeisterung statt Angst – der richtige Ton für die KI-Einführung",
      "Interaktive Q&A: Echte Fragen, echte Antworten, keine vorbereiteten Phrasen"
    ],
    levels: ["essentials"],
    metaTitle: "ChatGPT Keynote – KI-Impulsvortrag für Unternehmen",
    metaDescription: "Keynote zu ChatGPT: Live-Demos, Modellverständnis und klare Orientierung für Entscheider. Ideal als Auftakt für Ihre KI-Initiative.",
    keywords: ["ChatGPT Keynote", "KI Impulsvortrag", "ChatGPT Vortrag", "KI Keynote Speaker", "KI Zukunft der Arbeit"],
    faqs: [
      {
        question: "Für welches Publikum eignet sich der Impulsvortrag?",
        answer: "Für alle – von der Geschäftsführung bis zu allen Mitarbeitenden. Wir passen den Schwerpunkt an: strategisch für Führungskräfte, praktisch für Teams."
      }
    ]
  },
  {
    slug: "chatgpt-launch-event",
    icon: PartyPopper,
    title: "KI-Launch-Event – Der Auftakt, der begeistert",
    duration: "Halbtag oder Ganztag",
    description: "Machen Sie den Start Ihrer KI-Initiative zum Erlebnis. Keynote, Hands-on-Stationen und interaktive Workshops schaffen Begeisterung statt Pflichtprogramm. Ihre Mitarbeiter erleben ChatGPT nicht als trockene Schulung, sondern als greifbare Chance.",
    features: [
      "Keynote: Inspirierender Auftakt mit Live-Demos",
      "Hands-on-Stationen: ChatGPT an verschiedenen Thementischen ausprobieren",
      "Abteilungs-Workshops: Erste Prompt-Templates für Marketing, HR, Finanzen, Vertrieb",
      "Leadership-Session: Separater Block für Führungskräfte zu Governance und Strategie",
      "Roadmap-Workshop: Nächste Schritte gemeinsam planen",
      "Skalierbar: Von 20 bis 500+ Teilnehmer, vor Ort oder hybrid"
    ],
    levels: ["essentials"],
    metaTitle: "ChatGPT Launch-Event – Erlebnistag für Ihre KI-Einführung",
    metaDescription: "KI-Launch-Event mit Keynote, Workshops und Live-Demos: Der Auftakt, der Begeisterung schafft. Von 20 bis 500+ Teilnehmer.",
    keywords: ["ChatGPT Launch Event", "KI Einführung Event", "ChatGPT Kick-Off Event", "KI Erlebnistag"],
    faqs: [
      {
        question: "Was unterscheidet das Launch-Event von einem Training?",
        answer: "Das Launch-Event ist eine Kommunikationsmaßnahme: Begeisterung wecken, Berührungsängste abbauen, die Organisation mitnehmen. Die eigentlichen Trainings folgen danach – mit Mitarbeitern, die motiviert statt skeptisch sind."
      }
    ]
  },
  {
    slug: "chatgpt-hackathon",
    icon: Users,
    title: "KI-Hackathon – Innovation durch Wettbewerb",
    duration: "1 Tag (7–8 Stunden)",
    description: "Abteilungsübergreifende Teams lösen im freundschaftlichen Wettbewerb echte Geschäftsprobleme mit ChatGPT. Vom Challenge-Briefing über die Prompt-Entwicklung bis zur Pitch-Session – die besten Ideen bekommen einen Umsetzungsplan.",
    features: [
      "Challenge-Definition: Echte Probleme aus Ihrem Unternehmen als Aufgaben",
      "Team-Bildung: Abteilungsübergreifend für maximale Perspektivenvielfalt",
      "Guided Hacking: KI-Mentoren begleiten jedes Team",
      "Prototypen bauen: Custom GPTs und Prompt-Systeme entwickeln",
      "Pitch-Session: Jedes Team präsentiert vor Jury und Publikum",
      "Umsetzungsplan: Die besten Ideen werden tatsächlich weiterverfolgt"
    ],
    levels: ["advanced", "workflow-design"],
    metaTitle: "KI-Hackathon – ChatGPT Innovation im Team",
    metaDescription: "KI-Hackathon für Unternehmen: Teams entwickeln im Wettbewerb echte ChatGPT-Lösungen. Innovation, Teamgeist und umsetzbare Ergebnisse.",
    keywords: ["KI Hackathon", "ChatGPT Hackathon", "KI Innovation Tag", "ChatGPT Team Event"],
    faqs: [
      {
        question: "Brauchen die Teilnehmer Programmierkenntnisse?",
        answer: "Nein. Lösungen werden mit ChatGPT und Custom GPTs gebaut, nicht mit Code. Alle können teilnehmen – von der Assistenz bis zur Geschäftsführung."
      }
    ]
  }
];

export function getTrainingBySlug(slug: string): Training | undefined {
  return trainings.find(t => t.slug === slug);
}
