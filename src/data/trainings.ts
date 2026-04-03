import { Brain, GraduationCap, LayoutDashboard, Mic, PartyPopper, Rocket, TrendingUp, Users, Zap } from "lucide-react";
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
  // Neue Rubriken für Content-Tiefe & LLM-Sichtbarkeit
  questionLead?: string;
  targetAudience?: string[];
  learningOutcomes?: string[];
  businessImpact?: string[];
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
    slug: "chatgpt-ui-und-einstellungen",
    icon: LayoutDashboard,
    title: "ChatGPT vollständig einrichten – Oberfläche, Sicherheit & Persönlichkeit",
    duration: "90–120 Minuten (Einzelmodul) · Teil aller Basis-Trainings",
    description: "Die meisten Nutzer kennen nur einen Bruchteil dessen, was ChatGPT bietet. Dieses Modul schließt die Lücke: Von der Benutzeroberfläche und den Sicherheitseinstellungen über Custom Instructions und Gedächtnis bis hin zu Projekten und Custom GPTs – Teilnehmer verlassen das Training mit einem vollständig auf ihre Arbeitsweise zugeschnittenen ChatGPT-Account.",
    features: [
      "ChatGPT-Oberfläche & Navigation: Hauptbereiche kennen und effizient nutzen",
      "Sicherheitseinstellungen: Datenschutz, Datenspeicherung, Modelltraining deaktivieren",
      "Custom Instructions: ChatGPT dauerhaft auf die eigene Arbeitsweise einstellen",
      "Gedächtnis (Memory): Persistentes Wissen aufbauen, verwalten und gezielt einsetzen",
      "Projekte: Kontext organisieren, Chats gruppieren, Wissensgrundlagen anlegen",
      "Custom GPTs: Spezialisierte KI-Assistenten erstellen, anpassen und teilen",
      "Überblick über alle Werkzeuge: Suche, Canvas, Deep Research, Spracheingabe & Co."
    ],
    levels: ["essentials"],
    questionLead: "Wie richte ich ChatGPT so ein, dass es wirklich zu meiner Arbeitsweise passt?",
    targetAudience: [
      "Alle ChatGPT-Nutzer, die bisher nur die Oberfläche kennen – ohne die Einstellungen zu nutzen",
      "Teams, die nach dem Einstieg ihren Account gezielt optimieren wollen",
      "Führungskräfte, die verstehen möchten, was Custom Instructions und Projekte im Alltag leisten",
      "Mitarbeitende, die Custom GPTs für sich oder ihr Team einrichten wollen"
    ],
    learningOutcomes: [
      "Die Teilnehmer kennen alle relevanten Bereiche der ChatGPT-Oberfläche und nutzen sie sicher",
      "Sie haben ihre Sicherheitseinstellungen bewusst konfiguriert und verstehen die Datenschutz-Implikationen",
      "Sie haben eigene Custom Instructions eingerichtet, die ChatGPT dauerhaft auf ihre Arbeitsweise abstimmen",
      "Sie nutzen das Gedächtnis-Feature gezielt und wissen, wie sie es verwalten und kontrollieren",
      "Sie können Projekte anlegen und ChatGPT-Kontext strukturiert organisieren",
      "Sie haben einen ersten Custom GPT gebaut oder angepasst"
    ],
    businessImpact: [
      "Sofortiger Mehrwert: Korrekt eingestellte Accounts arbeiten von Anfang an effizienter als uneingerichtete",
      "Weniger Wiederholungen: Custom Instructions und Gedächtnis eliminieren wiederkehrende Kontext-Eingaben",
      "Skalierbare Workflows: Custom GPTs ermöglichen standardisierte KI-Prozesse im Team ohne technisches Know-how"
    ],
    metaTitle: "ChatGPT Einstellungen & UI – Custom Instructions, Gedächtnis, Projekte",
    metaDescription: "ChatGPT vollständig einrichten: Sicherheitseinstellungen, Custom Instructions, Gedächtnis, Projekte & Custom GPTs. Modul für alle Basis-Trainings.",
    keywords: ["ChatGPT Einstellungen", "Custom Instructions", "ChatGPT Gedächtnis", "ChatGPT Projekte", "Custom GPTs erstellen", "ChatGPT Oberfläche"],
    faqs: [
      {
        question: "Lohnt sich dieses Modul auch für erfahrene ChatGPT-Nutzer?",
        answer: "Ja – erfahrungsgemäß kennen selbst regelmäßige Nutzer weniger als die Hälfte der verfügbaren Einstellungen und Funktionen. Custom Instructions, das Gedächtnis-Feature und Projekte werden häufig gar nicht oder falsch konfiguriert. Dieses Modul schließt diese Lücke systematisch."
      },
      {
        question: "Ist das Modul Bestandteil anderer Trainings?",
        answer: "Ja – die Inhalte dieses Moduls sind fester Bestandteil des ChatGPT Kick-Off (4 Stunden) und des ChatGPT Starter Trainings (7 Stunden). Als Einzelmodul empfehlen wir es für Teams, die einen laufenden ChatGPT-Einsatz haben und gezielt die Account-Einrichtung nachschärfen möchten."
      }
    ]
  },
  {
    slug: "chatgpt-kick-off",
    icon: Zap,
    title: "ChatGPT Kick-Off – Der kompakte Einstieg in 4 Stunden",
    duration: "4 Stunden (Halbtag)",
    description: "Vier Stunden, die den Umgang mit ChatGPT grundlegend verändern. Statt planlosem Ausprobieren lernen Ihre Teams, wie professionelles Prompting funktioniert: Kontext setzen, Rollen zuweisen, Ergebnisse steuern. Inklusive Datenschutz-Modul für den sicheren Einsatz im Unternehmen.",
    features: [
      "ChatGPT richtig einrichten: Sicherheitseinstellungen, Custom Instructions und Gedächtnis konfigurieren",
      "Wie ChatGPT Sprache verarbeitet – und warum das für gute Prompts entscheidend ist",
      "Die Anatomie eines guten Prompts: Kontext, Aufgabe, Format, Constraints",
      "Zehn Prompt-Muster, die in jedem Bürojob sofort funktionieren",
      "Live-Übungen: Jeder baut Prompts für die eigene tägliche Arbeit",
      "Typische Fehler erkennen: Warum ChatGPT manchmal Unsinn liefert – und was dagegen hilft",
      "Datenschutz und sicherer Einsatz: DSGVO-konforme Nutzung, klare Regeln was in den Prompt darf und was nicht"
    ],
    levels: ["essentials"],
    questionLead: "Welches ChatGPT Training eignet sich als schneller Einstieg für ein ganzes Team?",
    targetAudience: [
      "Teams und Abteilungen, die einen strukturierten Einstieg in ChatGPT brauchen – ohne tagelange Schulungen",
      "Führungskräfte, die ihren Mitarbeitenden einen produktiven Start mit KI ermöglichen wollen",
      "Unternehmen, die ChatGPT einführen und eine gemeinsame Wissensbasis schaffen möchten",
      "Mitarbeitende aller Fachbereiche – von Marketing bis Controlling – ohne KI-Vorkenntnisse"
    ],
    learningOutcomes: [
      "Die Teilnehmer verstehen, wie ChatGPT Sprache verarbeitet und warum Prompt-Struktur entscheidend ist",
      "Sie beherrschen zehn sofort anwendbare Prompt-Muster für den Büroalltag",
      "Sie können typische ChatGPT-Fehler erkennen und durch gezieltes Prompting vermeiden",
      "Sie kennen die DSGVO-Regeln für den sicheren Einsatz von ChatGPT im Unternehmen"
    ],
    businessImpact: [
      "Schnellere Einarbeitung: Teams nutzen ChatGPT ab Tag 1 produktiv statt wochenlang herumzuprobieren",
      "Weniger Fehlversuche: Strukturiertes Prompting spart durchschnittlich 30–40 % der Iterationszeit",
      "Rechtssicherheit: Klare Datenschutz-Regeln verhindern DSGVO-Verstöße bei der KI-Nutzung"
    ],
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
      "ChatGPT vollst\u00e4ndig einrichten: Oberfl\u00e4che, Sicherheitseinstellungen, Custom Instructions, Ged\u00e4chtnis & Projekte",
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
    questionLead: "Wie baue ich KI-Kompetenz im Unternehmen systematisch auf – nicht nur oberflächlich?",
    targetAudience: [
      "Wissensarbeiter aller Fachbereiche, die ChatGPT im Arbeitsalltag systematisch nutzen wollen",
      "HR- und L&D-Verantwortliche, die ein fundiertes KI-Basisprogramm für die Organisation suchen",
      "Teams, die über den Kick-Off hinaus ein solides Fundament für den KI-Einsatz brauchen",
      "Führungskräfte, die verstehen wollen, was ChatGPT in ihrem Verantwortungsbereich leisten kann"
    ],
    learningOutcomes: [
      "Die Teilnehmer beherrschen fortgeschrittene Prompt-Techniken wie Chain-of-Thought und Few-Shot-Prompting",
      "Sie können ChatGPT für Textarbeit, E-Mail-Workflows und Datenanalyse produktiv einsetzen",
      "Sie verstehen agentische Arbeitsweisen und können erste Automatisierungen konzipieren",
      "Sie haben konkrete Use Cases aus dem eigenen Arbeitskontext identifiziert und umgesetzt (Ganztagsformat)",
      "Sie kennen die Grenzen und Risiken von ChatGPT und können KI-Outputs kritisch bewerten"
    ],
    businessImpact: [
      "Messbare Produktivitätssteigerung: Teilnehmer berichten von 2–4 Stunden Zeitersparnis pro Woche",
      "Höhere Outputqualität: Strukturierte Prompts liefern konsistentere und professionellere Ergebnisse",
      "Breitere KI-Adoption: Das systematische Fundament senkt die Hemmschwelle für den täglichen Einsatz",
      "Use-Case-Pipeline: Die im Training erarbeiteten Anwendungsfälle liefern sofort umsetzbare Quick Wins"
    ],
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
    questionLead: "Wie komme ich über ChatGPT-Grundlagen hinaus und baue professionelle Prompt-Systeme?",
    targetAudience: [
      "Erfahrene ChatGPT-Nutzer, die systematische Prompt-Architekturen statt Einzelprompts entwickeln wollen",
      "Analysten, Berater und Projektmanager, die komplexe Aufgaben mit Multi-Step-Prompts lösen",
      "Innovationsverantwortliche und Power User, die Custom GPTs für ihr Team bereitstellen möchten",
      "Fachexperten, die KI-Qualitätssicherung und professionelle Output-Standards etablieren wollen"
    ],
    learningOutcomes: [
      "Die Teilnehmer können mehrstufige Prompt-Ketten für komplexe Analyse- und Entscheidungsprozesse entwerfen",
      "Sie beherrschen strukturierte Ausgabeformate (JSON, Markdown-Reports, Templates) für konsistente Ergebnisse",
      "Sie können Custom GPTs für wiederkehrende Team-Workflows bauen und bereitstellen",
      "Sie wenden fortgeschrittene Datenschutz-Praktiken an: Datenklassifizierung, Audit-Trails, sichere Verarbeitung",
      "Sie haben ein Capstone-Projekt aus dem eigenen Arbeitskontext erfolgreich umgesetzt"
    ],
    businessImpact: [
      "Professionelle KI-Workflows: Multi-Step-Systeme ersetzen manuelle Routineprozesse und reduzieren Durchlaufzeiten",
      "Skalierbare Lösungen: Custom GPTs werden zu wiederverwendbaren Team-Tools, die ohne KI-Expertise nutzbar sind",
      "Qualitätssicherung: Strukturierte Output-Formate und Review-Prozesse erhöhen die Verlässlichkeit von KI-Ergebnissen",
      "30-Tage-Aktionsplan: Der strukturierte Transfer sorgt dafür, dass Gelerntes im Alltag tatsächlich ankommt"
    ],
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
    questionLead: "Wie stelle ich sicher, dass ChatGPT-Trainings auch langfristig im Arbeitsalltag ankommen?",
    targetAudience: [
      "Organisationen, die nachhaltige Verhaltensänderung statt Einmal-Trainingseffekte wollen",
      "L&D-Verantwortliche, die ein begleitetes Lernprogramm über mehrere Wochen suchen",
      "Teams, die schrittweise von Grundlagen bis zu fortgeschrittenen KI-Workflows aufbauen möchten",
      "Unternehmen, die den ROI ihrer KI-Trainings durch Transfer-Sicherung maximieren wollen"
    ],
    learningOutcomes: [
      "Die Teilnehmer bauen systematisch KI-Kompetenz auf – von Prompt-Grundlagen bis zu Custom GPTs und Automatisierung",
      "Sie entwickeln zwischen den Sessions eigene Workflows und verfeinern diese durch Peer-Feedback",
      "Sie können abteilungsspezifische Anwendungen eigenständig identifizieren und umsetzen",
      "Sie haben einen persönlichen Workflow-Plan für den nachhaltigen KI-Einsatz im Arbeitsalltag"
    ],
    businessImpact: [
      "Nachhaltige Adoption: Verteiltes Lernen mit Praxisphasen führt zu 3x höherer Anwendungsrate als Kompakttrainings",
      "Organische Verbreitung: Teilnehmer werden zu KI-Multiplikatoren in ihren Teams und Abteilungen",
      "Messbare Ergebnisse: Zwischen den Sessions entstehen dokumentierte Use Cases mit konkretem Business Value",
      "Kulturwandel: Die Lernreise etabliert eine kontinuierliche Lern- und Experimentierkultur rund um KI"
    ],
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
    questionLead: "Wie gebe ich meiner Organisation einen inspirierenden und ehrlichen Einstieg in das Thema KI?",
    targetAudience: [
      "Geschäftsführungen und Vorstände, die eine fundierte Einordnung von ChatGPT für ihre Strategie brauchen",
      "Eventorganisatoren, die einen packenden KI-Vortrag für Firmenevents oder Führungskräfte-Runden suchen",
      "Verantwortliche für KI-Initiativen, die vor dem Rollout Orientierung und Begeisterung schaffen wollen",
      "Alle Mitarbeitenden – der Vortrag wird an das jeweilige Publikum angepasst"
    ],
    learningOutcomes: [
      "Die Teilnehmer verstehen, was ChatGPT heute leisten kann – und wo die realistischen Grenzen liegen",
      "Sie haben durch Live-Demonstrationen ein konkretes Bild davon, wie KI ihren Arbeitsalltag verändern kann",
      "Entscheider kennen die wichtigsten Compliance-Aspekte: DSGVO und EU AI Act im Überblick",
      "Sie wissen, wie eine erfolgreiche KI-Einführung die Mitarbeitenden mitnimmt statt überfordert"
    ],
    businessImpact: [
      "Orientierung statt Verunsicherung: Führungskräfte treffen fundiertere Entscheidungen zur KI-Strategie",
      "Kultureller Auftakt: Der Impulsvortrag schafft die emotionale Grundlage für eine erfolgreiche KI-Einführung",
      "Abbau von Widerständen: Ehrliche Einordnung reduziert sowohl übertriebene Erwartungen als auch unbegründete Ängste"
    ],
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
    questionLead: "Wie verändert agentische KI die Wissensarbeit – und was bedeutet das konkret für unser Unternehmen?",
    targetAudience: [
      "Geschäftsführungen und Strategieverantwortliche, die verstehen wollen, wohin sich KI in 3–5 Jahren entwickelt",
      "Innovationsmanager und Digitalisierungsverantwortliche, die agentische Workflows kennenlernen wollen",
      "Führungskräfte, die ihre Organisation auf die nächste Stufe der KI-Transformation vorbereiten",
      "Tech-affine Entscheider, die den Unterschied zwischen Chat-KI und agentischen Systemen verstehen wollen"
    ],
    learningOutcomes: [
      "Die Teilnehmer haben live erlebt, wie agentische KI komplexe End-to-End-Prozesse eigenständig ausführt",
      "Sie verstehen den Unterschied zwischen assistierter KI und agentischen Systemen",
      "Sie können einschätzen, welche Prozesse in ihrem Unternehmen für agentische Automatisierung geeignet sind",
      "Sie kennen die kritischen Fragen zu Arbeitsplätzen, Kompetenzen und Organisationsstrukturen"
    ],
    businessImpact: [
      "Strategische Vorausschau: Entscheider können frühzeitig die richtigen Weichen für agentische KI stellen",
      "Investitionssicherheit: Fundierte Einschätzung, welche KI-Investitionen sich lohnen und welche zu früh sind",
      "Veränderungsbereitschaft: Die Live-Demos machen abstrakte Zukunftsszenarien greifbar und motivieren zum Handeln"
    ],
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
    questionLead: "Wie mache ich den Start unserer KI-Initiative zu einem Erlebnis, das alle Mitarbeitenden begeistert?",
    targetAudience: [
      "Unternehmen, die ChatGPT oder andere KI-Tools einführen und von Anfang an Begeisterung schaffen wollen",
      "HR- und Kommunikationsverantwortliche, die den KI-Rollout als Change-Projekt professionell begleiten",
      "Führungskräfte, die ihre KI-Initiative mit einem starken Signal starten möchten",
      "Große Organisationen (20 bis 500+ Teilnehmer), die verschiedene Stakeholder gleichzeitig abholen wollen"
    ],
    learningOutcomes: [
      "Die Teilnehmer haben ChatGPT an verschiedenen Hands-on-Stationen selbst ausprobiert und erste Erfolgserlebnisse gehabt",
      "Abteilungen haben erste konkrete Anwendungsideen für ihren Bereich identifiziert",
      "Führungskräfte haben in der Leadership-Session Governance- und Strategiefragen geklärt",
      "Die gesamte Organisation hat eine gemeinsame positive Haltung gegenüber der KI-Einführung entwickelt"
    ],
    businessImpact: [
      "Change-Beschleunigung: Ein begeisternder Auftakt reduziert Widerstände und beschleunigt die KI-Adoption um Monate",
      "Professionelle Kommunikation: Rollout-Materialien (Poster, Cheat-Sheets, Trainingsmaterialien) sorgen für nachhaltige Sichtbarkeit",
      "Skalierbare Wirkung: Ein Event erreicht hunderte Mitarbeitende gleichzeitig – deutlich effizienter als individuelle Schulungen"
    ],
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
    questionLead: "Wie finde ich die besten KI-Anwendungsfälle in meinem Unternehmen – und zwar praxisnah statt theoretisch?",
    targetAudience: [
      "Innovationsverantwortliche, die konkrete KI-Use-Cases aus den eigenen Teams generieren wollen",
      "Unternehmen, die abteilungsübergreifend KI-Potenziale identifizieren und umsetzen möchten",
      "Teams mit ChatGPT-Grundkenntnissen, die den nächsten Schritt in die praktische Anwendung machen wollen",
      "Führungskräfte, die Innovationskultur und Teamgeist gleichzeitig fördern möchten"
    ],
    learningOutcomes: [
      "Die Teilnehmer haben im Wettbewerb echte Geschäftsprobleme mit ChatGPT gelöst – nicht nur theoretisch",
      "Sie können Custom GPTs und Prompt-Systeme für konkrete Unternehmensanforderungen entwickeln",
      "Sie haben erfahren, wie abteilungsübergreifende Zusammenarbeit zu besseren KI-Lösungen führt",
      "Sie haben einen Umsetzungsplan für die besten Hackathon-Ideen erarbeitet"
    ],
    businessImpact: [
      "Use-Case-Pipeline: Ein Hackathon-Tag liefert mehr umsetzbare KI-Ideen als Monate interner Brainstormings",
      "Innovationskultur: Der Wettbewerbscharakter aktiviert Kreativität und Eigeninitiative in der gesamten Organisation",
      "Schnelle Prototypen: Custom GPTs aus dem Hackathon können direkt als Team-Tools eingesetzt werden"
    ],
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
