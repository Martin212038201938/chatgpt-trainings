import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import TrainingModules from "@/components/TrainingModules";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { generateTrainingSchemas } from "@/lib/schema";
import { homepageFAQs } from "@/data/faqs";

/**
 * Homepage - chatgpt-trainings.de
 *
 * Eigenständige Positionierung:
 * KI-Workflow-Exzellenz mit ChatGPT als Kerntechnologie.
 * Fokus: Prompt Engineering, Modellverständnis, KI-Workflows.
 *
 * KEINE Testimonials (werden später mit echten ergänzt).
 */

const trainingModulesForSchema = [
  {
    title: "ChatGPT Essentials",
    duration: "4 Stunden bis 1 Tag",
    description: "Fundierter Einstieg in professionelles Prompting: Struktur, Kontext und Rollenanweisungen. Teilnehmer lernen, ChatGPT für Textarbeit, Recherche und Analyse produktiv einzusetzen.",
    features: [
      "Prompt Engineering Grundlagen und Struktur",
      "Texte schreiben, zusammenfassen und analysieren",
      "Halluzinationen erkennen und gegensteuern",
      "DSGVO-konforme Nutzung im Unternehmenskontext"
    ]
  },
  {
    title: "Advanced Prompt Systems",
    duration: "1–2 Tage",
    description: "Fortgeschrittene Prompt-Techniken für komplexe Wissensarbeit: Multi-Step-Prompts, Rollenlogik, strukturierte Ausgabeformate und Custom GPTs für wiederkehrende Aufgaben.",
    features: [
      "Chain-of-Thought und Multi-Step-Prompts",
      "Rollenbasierte Systemprompts entwickeln",
      "Strukturierte JSON- und Tabellenausgaben",
      "Custom GPTs für Teams und Abteilungen"
    ]
  },
  {
    title: "KI-Workflow-Design",
    duration: "2 Tage",
    description: "ChatGPT als strategisches Arbeitsinstrument: Automatisierte Prozesse, agentische Workflows, Custom GPTs und datenschutzkonforme Nutzung im Unternehmen.",
    features: [
      "Custom GPTs für Abteilungs-Workflows bauen",
      "Agentische Arbeitsweisen und Automatisierung",
      "Automatisierte Text-Workflows designen",
      "Datenschutzkonformer Einsatz im Unternehmen"
    ]
  },
  {
    title: "ChatGPT Lernreise",
    duration: "4–6 Sessions über mehrere Wochen",
    description: "Nachhaltiger Kompetenzaufbau über Wochen: Zwischen den Live-Sessions wenden Teilnehmer das Gelernte direkt an und bringen Erfahrungen in die nächste Runde.",
    features: [
      "Verteiltes Lernen über 4–8 Wochen",
      "Praxistransfer zwischen den Sessions",
      "Praxistransfer in den eigenen Arbeitsalltag",
      "Peer-Learning und Erfahrungsaustausch"
    ]
  },
  {
    title: "KI-Keynote & Impulsvortrag",
    duration: "60–90 Minuten",
    description: "Inspirierender Impulsvortrag zu ChatGPT und KI in der Arbeitswelt. Live-Demonstrationen zeigen, was heute möglich ist – und was das für Ihr Unternehmen bedeutet.",
    features: [
      "Live-Demonstrationen mit ChatGPT",
      "Einordnung: Was kann KI – und was nicht?",
      "Branchenspezifische Anwendungsfälle",
      "Interaktive Q&A-Runde"
    ]
  },
  {
    title: "KI-Launch-Event",
    duration: "Halber oder ganzer Tag",
    description: "Erlebnistag zur ChatGPT-Einführung: Keynote, Hands-on-Stationen und interaktive Workshops schaffen Begeisterung statt Berührungsangst.",
    features: [
      "Keynote mit Live-Demos",
      "Hands-on-Stationen zum Ausprobieren",
      "Abteilungs-Workshops für erste Use Cases",
      "Roadmap für die nächsten Schritte"
    ]
  },
  {
    title: "KI-Hackathon",
    duration: "1 Tag",
    description: "Abteilungsübergreifende Teams lösen echte Geschäftsprobleme mit ChatGPT im Wettbewerb. Innovation, Teamgeist und direkt umsetzbare Ergebnisse.",
    features: [
      "Challenge-basiertes Arbeiten mit ChatGPT",
      "Custom GPTs und Prototypen bauen",
      "Pitch-Session mit Jury-Bewertung",
      "Umsetzungsplan für die besten Ideen"
    ]
  }
];

const Index = () => {
  const schema = generateTrainingSchemas(trainingModulesForSchema, homepageFAQs);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="ChatGPT Training für Unternehmen | Prompt Engineering & LLM-Kompetenz"
        description="ChatGPT-Trainings mit Fokus auf Prompt Engineering, Modellverständnis und strukturierte Workflows. Spezialisierte Schulungen für Teams im DACH-Raum."
        keywords={[
          "ChatGPT Schulung",
          "Prompt Engineering Training",
          "ChatGPT Workshop Unternehmen",
          "KI Prompting Seminar",
          "ChatGPT im Unternehmen einsetzen",
          "ChatGPT Workflow Training",
          "KI-Workflow-Design",
          "ChatGPT Kurs"
        ]}
        canonicalUrl="https://chatgpt-trainings.de/"
        schema={schema}
      />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <TrainingModules />
        <TrustBadges />
        <Contact />
        <FAQ faqs={homepageFAQs} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
