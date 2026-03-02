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
              <span className="text-foreground">ChatGPT </span>
              <span className="text-primary">strategisch</span>
              <br />
              <span className="text-foreground">einsetzen</span>
            </h1>
            <p className="mt-4 sm:mt-8 text-lg sm:text-xl lg:text-2xl text-muted-foreground font-normal max-w-3xl mx-auto animate-slide-up-delayed">
              Von Prompt Engineering über Modellverständnis bis zu KI-Workflow-Design –
              wir machen aus ChatGPT ein produktives Arbeitsinstrument.
            </p>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto animate-fade-in-delayed">
              Jenseits von Spielerei und Copy-Paste.
            </p>
          </div>
        </div>

        {/* Drei CTA-Säulen – statt generischer Firmen-Beschreibung */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
          <div
            className="group relative bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 sm:p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
            style={{ animationDelay: '100ms' }}
            onClick={scrollToContact}
          >
            <div className="text-3xl sm:text-4xl mb-4">🎯</div>
            <h2 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              Prompt-Kompetenz aufbauen
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vom ersten Prompt bis zur systematischen Prompt-Architektur – strukturiert und nachhaltig.
            </p>
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
