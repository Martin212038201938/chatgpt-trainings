import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex items-center pt-20 sm:pt-28 pb-16 sm:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5 z-0 animate-gradient-shift" />
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Centered headline – eigenständige Positionierung */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
              <span className="text-foreground">
                ChatGPT
              </span>
              <br />
              <span className="text-primary">
                richtig einsetzen
              </span>
              <br />
              <span className="text-foreground">
                lernen
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-xl lg:text-2xl text-muted-foreground font-normal animate-slide-up-delayed">
              Prompt Engineering, Modellverständnis und strukturierte Workflows für Ihr Team
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed mb-4 animate-fade-in-delayed">
              Die meisten Teams nutzen ChatGPT weit unter ihren Möglichkeiten – weil ihnen das Verständnis für Prompt-Architektur, Kontextsteuerung und die Eigenheiten großer Sprachmodelle fehlt. Genau da setzen wir an: Wir vermitteln Prompt Engineering als Handwerk, erklären wie Token, Kontextfenster und Halluzinationen funktionieren und zeigen, wie sich daraus belastbare Arbeitsergebnisse ableiten lassen.
            </p>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed animate-fade-in-delayed-2">
              Ob vor Ort bei Ihnen, als Live-Online-Session oder im Blended-Format über mehrere Wochen: Jedes Training endet mit erprobten Prompts und Workflows, die Ihre Leute am nächsten Arbeitstag einsetzen können. Kein Marketing-Vortrag, sondern echte Arbeit an echten Aufgaben.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-border/50">
              {[
                { value: "100%", label: "ChatGPT-Fokus", delay: "delay-100" },
                { value: "7+", label: "Trainingsformate", delay: "delay-200" },
                { value: "DACH", label: "Vor Ort & Remote", delay: "delay-300" }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`group animate-fade-in-delayed-3 hover:scale-110 transition-transform duration-300 cursor-default text-center ${stat.delay}`}
                >
                  <div className="text-xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="group relative bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 sm:p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
            style={{ animationDelay: '200ms' }}
            onClick={scrollToContact}
          >
            <div className="text-3xl sm:text-4xl mb-4">⚙️</div>
            <h2 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              KI-Workflows entwickeln
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mehrstufige Arbeitsprozesse mit ChatGPT gestalten – wiederholbar, skalierbar, messbar.
            </p>
          </div>

          <div
            className="group relative bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 sm:p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
            style={{ animationDelay: '300ms' }}
            onClick={scrollToContact}
          >
            <div className="text-3xl sm:text-4xl mb-4">🏢</div>
            <h2 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              ChatGPT im Unternehmen etablieren
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Governance, Prompt-Standards und Team-Regeln für den produktiven Dauerbetrieb.
            </p>
          </div>
        </div>

        {/* Kennzahlen – eigenständige Formulierung */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto pt-6 sm:pt-8 border-t border-border/50">
          {[
            { value: "Seit 2023", label: "KI-Trainings für Unternehmen", delay: "delay-100" },
            { value: "500+", label: "geschulte Fachkräfte", delay: "delay-200" },
            { value: "DACH", label: "vor Ort oder remote", delay: "delay-300" }
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`group animate-fade-in-delayed-3 hover:scale-110 transition-transform duration-300 cursor-default text-center ${stat.delay}`}
            >
              <div className="text-xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
