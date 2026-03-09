import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImageWebp from "@/assets/trainingsraum-nippes.webp";
import heroImageJpg from "@/assets/trainingsraum-nippes.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet={heroImageWebp} type="image/webp" />
          <img
            src={heroImageJpg}
            alt="ChatGPT Training in modernem Trainingsraum"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
            width={1600}
            height={1067}
          />
        </picture>
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20 sm:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
            <span className="text-primary">ChatGPT</span>
            <br />
            <span className="text-white">Trainings für Unternehmen</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-white/80 font-normal max-w-2xl">
            ChatGPT und andere KI-Modelle sicher, datenschutzkonform und wirklich wertschöpfend nutzen
          </p>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
            Unsere Trainings arbeiten an drei Dimensionen:<br /><br /><strong className="text-white/90">Schneller werden</strong> – Routineaufgaben in Minuten statt Stunden erledigen.<br /><strong className="text-white/90">Messbare Verbesserungen</strong> – KI-unterstützte Arbeit alltäglich machen.<br /><strong className="text-white/90">Neues wagen</strong> – Aufgaben angehen, die man sich bisher nicht zugetraut hat.<br /><br />Im Tempo der Teilnehmer, ohne unnötige Theorie, mit maximalem Praxisbezug.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base px-8 py-6 group">
              <a href="#contact">
                Erstgespräch buchen
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
              <Link to="/unsere-angebote">
                Alle Trainings ansehen
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 sm:gap-10 max-w-lg">
            {[
              { value: "Seit 2023", label: "KI-Trainings" },
              { value: "500+", label: "geschulte Fachkräfte" },
              { value: "DACH", label: "vor Ort & remote" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
