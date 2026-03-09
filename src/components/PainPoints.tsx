import { Megaphone, Users, TrendingUp, FileText, Lightbulb, Target } from "lucide-react";

const painPoints = [
  {
    icon: Megaphone,
    role: "Marketing & Kommunikation",
    pain: "Texte dauern ewig, Kampagnen-Output reicht nicht",
    solution: "Teilnehmer produzieren nach dem Training Entwürfe, Social-Media-Posts und Briefings in einem Bruchteil der Zeit – mit konsistenter Tonalität und ohne ständiges Nacharbeiten."
  },
  {
    icon: Users,
    role: "HR & Personalentwicklung",
    pain: "Stellenausschreibungen, Onboarding-Docs, Reports fressen Kapazität",
    solution: "HR-Teams nutzen ChatGPT für Stellentexte, Gesprächsleitfäden und Auswertungen – strukturiert, DSGVO-konform und sofort einsetzbar."
  },
  {
    icon: TrendingUp,
    role: "Vertrieb & Sales",
    pain: "Angebotstexte, Follow-ups und Research kosten zu viel Zeit",
    solution: "Sales-Mitarbeiter generieren personalisierte Anschreiben, Wettbewerbsanalysen und Meeting-Vorbereitungen schneller, als sie tippen können."
  },
  {
    icon: FileText,
    role: "Projektmanagement & Operations",
    pain: "Status-Reports, Protokolle und Dokumentation binden Ressourcen",
    solution: "Projektleiter erstellen Zusammenfassungen, Statusberichte und Entscheidungsvorlagen per Prompt – und gewinnen Zeit für die eigentliche Steuerung."
  },
  {
    icon: Lightbulb,
    role: "Strategie & Geschäftsführung",
    pain: "Alle reden über KI, aber niemand nutzt sie produktiv",
    solution: "Entscheider verstehen nach dem Training, wie ChatGPT konkret in ihren Teams wirkt – und können fundiert über Rollouts, Budgets und Ziele entscheiden."
  },
  {
    icon: Target,
    role: "IT & Digitalisierung",
    pain: "Fachabteilungen wollen KI, aber stellen die falschen Fragen",
    solution: "Nach dem Training sprechen Fachbereiche die gleiche Sprache wie die IT. Das reduziert Rückfragen, Fehlerwartungen und den internen Support-Aufwand."
  }
];

const PainPoints = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Egal ob Marketing, HR, Vertrieb oder IT – Ihre Teams haben das gleiche Problem
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            ChatGPT ist installiert, aber der echte Produktivitätssprung bleibt aus.
            Das liegt nicht am Tool – sondern daran, wie es eingesetzt wird.
            Unsere Trainings setzen genau da an.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary">{item.role}</span>
                </div>
                <p className="text-sm font-medium text-foreground mb-2">
                  „{item.pain}"
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.solution}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
