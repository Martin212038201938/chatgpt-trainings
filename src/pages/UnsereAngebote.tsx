import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { generateTrainingSchemas } from "@/lib/schema";
import { trainings, type Training, type CompetencyLevel, competencyLabels } from "@/data/trainings";

export type { CompetencyLevel };

const modules = trainings;

type LevelFilter = "all" | CompetencyLevel;

const levelFilterOptions: { value: LevelFilter; label: string }[] = [
  { value: "all", label: "Alle Trainings" },
  { value: "essentials", label: "Essentials" },
  { value: "advanced", label: "Advanced" },
];

const trainingModulesForSchema = modules.map(m => ({
  title: m.title,
  duration: m.duration,
  description: m.description,
  features: m.features
}));

const UnsereAngebote = () => {
  const [levelFilter, setLevelFilter] = useState<LevelFilter>("all");

  const filteredModules = levelFilter === "all"
    ? modules
    : modules.filter(m => m.levels.includes(levelFilter));

  const schema = generateTrainingSchemas(trainingModulesForSchema, []);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Unsere Angebote – ChatGPT Schulungen & Trainings"
        description="Alle ChatGPT Trainingsformate im Überblick: Kick-Off, Starter Training, Intensiv-Bootcamp, Lernreise, Hackathon und Launch-Event. Für ChatGPT Free und Plus/Team/Enterprise."
        keywords={[
          "ChatGPT Schulung",
          "Prompt Engineering Training",
          "ChatGPT Workshop",
          "ChatGPT Datenschutz Training",
          "Advanced Prompt Engineering",
          "ChatGPT Kurs Unternehmen"
        ]}
        canonicalUrl="https://chatgpt-trainings.de/unsere-angebote"
        schema={schema}
      />
      <Header />

      <main className="pt-24">
        <section id="trainings" className="py-16 bg-gradient-to-b from-muted/30 to-background relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
                Unsere Trainings
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up-delayed">
                Von Prompt-Grundlagen bis zum KI-Hackathon – alle Formate auf einen Blick.
              </p>
            </div>

            {/* Level-Erklärung */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-card border rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-4 text-center">
                  Klare Eskalationslogik: Wählen Sie das passende Level
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-4 max-w-2xl mx-auto">
                  <div className="flex flex-col items-center text-center px-4 py-3 rounded-lg bg-blue-50 border border-blue-200">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-100 text-xs px-2 py-0.5 mb-2">
                      Essentials
                    </Badge>
                    <span className="text-sm text-muted-foreground">Prompting Basics, Fehler vermeiden, Textarbeit, Analyse</span>
                  </div>
                  <div className="flex flex-col items-center text-center px-4 py-3 rounded-lg bg-purple-50 border border-purple-200">
                    <Badge className="bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-100 text-xs px-2 py-0.5 mb-2">
                      Advanced
                    </Badge>
                    <span className="text-sm text-muted-foreground">Multi-Step Prompts, Rollenlogik, Custom GPTs, Automatisierung</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Level Filter */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-1 p-1 bg-muted/60 rounded-lg border">
                {levelFilterOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setLevelFilter(option.value)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      levelFilter === option.value
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Training Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredModules.map((module) => (
                <Link
                  key={module.slug}
                  to={`/trainings/${module.slug}`}
                  className="block group"
                >
                  <Card className="h-full min-h-[280px] flex flex-col cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="flex-1 py-4">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {module.levels.map((level) => (
                          <Badge
                            key={level}
                            className={`${competencyLabels[level].color} hover:opacity-90 text-[11px] px-2 py-0.5`}
                          >
                            {competencyLabels[level].label}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {module.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Clock className="w-4 h-4" />
                        {module.duration}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground mt-3 line-clamp-3">
                        {module.description}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-primary group-hover:underline">
                        Mehr erfahren <ArrowRight className="w-3 h-3" />
                      </span>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Konfigurator CTA */}
            <div className="mt-12 relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl blur-xl" />
              <div className="relative bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30 rounded-xl p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Trainingsbausteine frei kombinieren
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  Kein passendes Format dabei? Stellen Sie aus unseren Modulen genau das Programm zusammen, das zur aktuellen ChatGPT-Reife Ihres Teams passt.
                </p>
                <Link to="/training-konfigurator" className="inline-block max-w-xs sm:max-w-none">
                  <Button size="default" className="group whitespace-normal h-auto py-2">
                    <span>Eigenes Programm konfigurieren</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Zertifikat */}
            <div className="mt-8 max-w-4xl mx-auto">
              <Card className="border-2 border-violet-500/30 bg-gradient-to-br from-violet-500/5 to-purple-500/5">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-center gap-2 text-lg">
                    Zertifikat auf Wunsch
                  </CardTitle>
                </CardHeader>
                <CardDescription className="px-6 pb-6 text-center">
                  <p className="mb-3">
                    Zu jedem Training bieten wir auf Wunsch ein <strong>dokumentiertes Zertifikat</strong> als Kompetenznachweis an.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Aufbauende Stufen verfügbar: <strong>Beginner → Advanced → Pro → Expert</strong>
                    <br />
                    <span className="italic">Belastbarer Nachweis für Mitarbeiter, Planungssicherheit für die Organisation.</span>
                  </p>
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UnsereAngebote;
