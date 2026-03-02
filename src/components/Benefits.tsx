import { useState } from "react";
import {
  Terminal,
  BrainCircuit,
  Workflow,
  Lightbulb,
  ChevronDown
} from "lucide-react";

/**
 * Vier eigenständige Kernsektionen – NICHT die Copilotenschule-Struktur.
 * Jede Sektion repräsentiert einen Kompetenzbereich von chatgpt-trainings.de.
 */

const sections = [
  {
    icon: Terminal,
    title: "Professionelles Prompt Engineering für Wissensarbeit",
    summary: "Systematisches Prompting statt Trial-and-Error",
    details: [
      "Systemprompts: Wie Sie ChatGPT mit Kontext, Rolle und Erwartungen briefen – bevor die erste Frage kommt.",
      "Chain-of-Thought-Strukturen: Komplexe Aufgaben in logische Denkschritte zerlegen, damit ChatGPT nachvollziehbar argumentiert.",
      "Strukturierte Outputformate: Von Markdown-Tabellen über JSON bis zu mehrstufigen Analysen – Ergebnisse in der Form, die Sie brauchen.",
      "Prompt Libraries & Team-Standards: Wiederverwendbare Vorlagen, die im ganzen Team funktionieren und konsistente Qualität liefern.",
      "Rollenbasierte Prompts: ChatGPT als Lektor, Analyst, Strategieberater oder Sparringspartner – je nach Aufgabe die richtige Perspektive."
    ]
  },
  {
    icon: BrainCircuit,
    title: "Wie ChatGPT wirklich funktioniert",
    summary: "Modellverständnis statt Blackbox-Nutzung",
    details: [
      "GPT-Modelle verstehen: Was unterscheidet GPT-4o von GPT-4 Turbo? Wann lohnt sich welches Modell – und wann reicht ein kleineres?",
      "Token-Logik und Kontextfenster: Warum ChatGPT manchmal den Faden verliert – und wie Sie das verhindern.",
      "Halluzinationen erkennen und reduzieren: Warum ChatGPT erfindet, wann es passiert und welche Techniken gegensteuern.",
      "Temperatur und Kreativität: Wie Sie zwischen präzisen Faktenantworten und kreativen Ideenentwicklungen steuern.",
      "Datenschutz bei OpenAI: Free vs. Plus vs. Team vs. Enterprise – was passiert mit Ihren Daten und welche Variante ist für Ihr Unternehmen die richtige?"
    ]
  },
  {
    icon: Workflow,
    title: "ChatGPT als KI-Kern im Tool-Stack",
    summary: "Tool-übergreifende Integration statt Insellösung",
    details: [
      "ChatGPT + Notion / Google Docs: Inhalte generieren, zusammenfassen und direkt in Ihre bestehenden Arbeitsumgebungen einbetten.",
      "ChatGPT + Zapier / Make: Automatisierte Workflows, die Routineaufgaben ohne manuelle Eingriffe erledigen.",
      "ChatGPT API: Eigene Anwendungen bauen, die auf GPT-Modelle zugreifen – von einfachen Skripten bis zu Produktintegrationen.",
      "Custom GPTs: Spezialisierte KI-Assistenten für wiederkehrende Aufgaben Ihrer Abteilung entwickeln und im Team teilen.",
      "Automatisierte Text-Workflows: Von der Recherche über die Analyse bis zum fertigen Dokument – durchgängig KI-gestützt."
    ]
  },
  {
    icon: Lightbulb,
    title: "Unsere KI-Workflow-Methode",
    summary: "Ein klarer Prozess statt loser Tipps",
    details: [
      "Schritt 1 – Aufgabenanalyse: Gemeinsam identifizieren wir die realen Aufgaben, bei denen ChatGPT den größten Hebel hat.",
      "Schritt 2 – Prompt-Architektur: Für jede Aufgabe entwickeln wir systematische Prompts, die zuverlässig funktionieren.",
      "Schritt 3 – Output-Standards: Wir definieren, wie Ergebnisse aussehen müssen – Qualitätskriterien, Formate, Prüfschritte.",
      "Schritt 4 – Team-Regeln: Gemeinsame Guidelines für die KI-Nutzung: Was darf rein, was bleibt draußen, wer prüft.",
      "Schritt 5 – Wiederholbare Templates: Fertige Prompt-Bibliotheken, die jeder im Team sofort produktiv nutzen kann."
    ]
  }
];

const ExpandableSection = ({
  icon: Icon,
  title,
  summary,
  details,
  index,
  isExpanded,
  onToggle
}: {
  icon: typeof Terminal;
  title: string;
  summary: string;
  details: string[];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      className="group rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 shadow-xl animate-fade-in overflow-visible relative"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 cursor-pointer w-full text-left hover:bg-primary/5 transition-colors"
        aria-expanded={isExpanded}
      >
        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-xl flex items-center justify-center shadow-lg border border-primary/20 flex-shrink-0">
          <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight pr-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">{summary}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="absolute left-0 right-0 top-full z-50 bg-card border-2 border-t-0 border-primary/20 rounded-b-2xl shadow-2xl">
          <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4 space-y-2">
            {details.map((detail, i) => (
              <p key={i} className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex gap-2">
                <span className="text-primary font-bold flex-shrink-0">→</span>
                <span>{detail}</span>
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Hidden for SEO */}
      <div className="sr-only" aria-hidden="true">
        {details.join(' ')}
      </div>
    </div>
  );
};

const Benefits = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section id="kompetenzen" className="py-12 sm:py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 animate-slide-up">
            Was Sie bei uns lernen
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Vier Kompetenzfelder, die ChatGPT vom Spielzeug zum strategischen Arbeitsinstrument machen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <ExpandableSection
              key={index}
              icon={section.icon}
              title={section.title}
              summary={section.summary}
              details={section.details}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
