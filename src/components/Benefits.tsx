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
    icon: PlaneTakeoff,
    title: "Prompt Engineering als Kernkompetenz",
    description: "Wir behandeln Prompting nicht als Nebensache, sondern als erlernbares Handwerk. Ihre Mitarbeiter verstehen, warum bestimmte Formulierungen funktionieren und andere nicht – von Rollenanweisungen über Chain-of-Thought bis zu strukturierten Multi-Step-Prompts. Das Ergebnis: reproduzierbare, qualitativ hochwertige KI-Outputs statt Zufallstreffer."
  },
  {
    icon: Radar,
    title: "Modellverständnis statt Klick-Anleitung",
    description: "Wer versteht, wie Token, Kontextfenster und Temperatur zusammenspielen, trifft bessere Entscheidungen im Umgang mit ChatGPT. Wir erklären, wann und warum das Modell halluziniert, wie sich Antwortqualität systematisch steuern lässt und welche Grenzen aktuell nicht überwindbar sind. Dieses Wissen altert langsamer als jede Feature-Schulung."
  },
  {
    icon: Headset,
    title: "Vom Einzelprompt zum Team-Standard",
    description: "Einzelne gute Prompts bringen wenig, wenn jede Abteilung anders arbeitet. Wir helfen Ihrem Team, verbindliche Prompt-Templates, Rollenarchitekturen und Qualitätskriterien für KI-Outputs zu definieren. So entsteht eine gemeinsame Arbeitsweise, die skaliert – inklusive Custom GPTs für wiederkehrende Aufgaben."
  },
  {
    icon: Gauge,
    title: "Fertige Workflows ab Tag 1",
    description: "Jeder Teilnehmer verlässt das Training mit getesteten Prompts und Workflows für die eigene Arbeit. Keine theoretischen Slides, sondern Live-Arbeit an echten Aufgaben aus dem eigenen Berufsalltag. Was im Training funktioniert, funktioniert auch am Schreibtisch – weil es dort entwickelt wurde."
  },
  {
    icon: Award,
    title: "Kompetenznachweis auf Wunsch",
    description: "Wer sein Wissen belegen möchte, kann eine Prüfung ablegen: sinnvolles Prompting, kritische Ergebnisbewertung und sicherer Umgang mit ChatGPT im Unternehmenskontext. Bestandene Prüfungen werden mit einem Zertifikat dokumentiert. Aufeinander aufbauende Stufen (Beginner bis Expert) ermöglichen einen strukturierten Lernweg."
  },
  {
    icon: Medal,
    title: "Trainerkompetenz aus Konzernerfahrung",
    description: "ChatGPT-Trainings.de gehört zur Yellow-Boat Consulting, die seit 2011 Transformationsprojekte in Konzernen und Mittelstand umsetzt. Seit 2023 fließt diese Erfahrung in spezialisierte KI-Trainings: Wir kennen die Realität in Organisationen und wissen, welche Hürden zwischen einem guten Prompt und der tatsächlichen Nutzung im Arbeitsalltag liegen."
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
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 animate-slide-up">
            Was unsere ChatGPT-Trainings von generischen KI-Schulungen unterscheidet
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
