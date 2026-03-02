import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import TrainingModules from "@/components/TrainingModules";
import Benefits from "@/components/Benefits";
import CustomerReviews from "@/components/CustomerReviews";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { generateTrainingSchemas } from "@/lib/schema";
import { homepageFAQs } from "@/data/faqs";

/**
 * Homepage - chatgpt-trainings.de
 *
 * Main entry point for the website. Displays:
 * - Hero section with value proposition
 * - CTA to training offerings and configurator
 * - Benefits of our training approach
 * - Trust badges and customer reviews
 * - Contact section and FAQs
 *
 * For full training catalog, see /unsere-angebote
 * For custom training configuration, see /training-konfigurator
 */

// Training modules data for schema generation - essential for LLM referencing
// Matches the 7 trainings defined in src/data/trainings.ts
const trainingModulesForSchema = [
  {
    title: "ChatGPT Kick-Off",
    duration: "4 Stunden (Halbtag)",
    description: "Kompakter Einstieg in ChatGPT für Teams und Abteilungen. Dieser Halbtages-Workshop vermittelt die Grundlagen der produktiven ChatGPT-Nutzung: von den ersten Prompts über Textarbeit und Recherche bis hin zu DSGVO-konformen Arbeitspraktiken.",
    features: [
      "Prompt Engineering Grundlagen erlernen",
      "ChatGPT für Textarbeit und Recherche einsetzen",
      "Halluzinationen erkennen und KI-Output bewerten",
      "DSGVO-konforme Nutzung sicherstellen"
    ]
  },
  {
    title: "ChatGPT Starter Training",
    duration: "1 Tag (7 Stunden) oder 2 × 3,5 Stunden",
    description: "Umfassendes Grundlagentraining für den professionellen Einsatz von ChatGPT in der täglichen Büroarbeit. Teilnehmer erarbeiten produktive Workflows für Textarbeit, Datenanalyse, Recherche und kreative Aufgaben – mit echten Praxisszenarien.",
    features: [
      "Fortgeschrittenes Prompt Engineering mit Kontext und Beispielen",
      "Datenanalyse und Reporting mit ChatGPT",
      "Custom GPTs für wiederkehrende Aufgaben",
      "Eigene Prompt-Bibliothek aufbauen",
      "ChatGPT Free vs. Plus/Team/Enterprise verstehen"
    ]
  },
  {
    title: "ChatGPT Intensiv Bootcamp",
    duration: "2 Tage (14 Stunden)",
    description: "Zweitägiges Intensiv-Programm für Teams, die ChatGPT als strategisches Arbeitswerkzeug etablieren wollen. Von Advanced Prompt Engineering über Automatisierung bis zur Entwicklung eigener KI-Agenten – das volle Spektrum der professionellen ChatGPT-Nutzung.",
    features: [
      "Advanced Prompt Engineering und Chain-of-Thought",
      "Custom GPTs und KI-Agenten entwickeln",
      "API-Anbindung und Workflow-Automatisierung",
      "Abteilungsspezifische Use Cases erarbeiten",
      "Strategische KI-Integration und Change Management"
    ]
  },
  {
    title: "ChatGPT Lernreise",
    duration: "4 × 2 Stunden oder 6 × 2 Stunden",
    description: "Begleitete Lernreise über mehrere Wochen für nachhaltigen Kompetenzaufbau. Zwischen den Sessions setzen Teilnehmer das Gelernte in ihrem Arbeitsalltag um und bringen Erfahrungen in die nächste Session ein.",
    features: [
      "Schrittweiser Aufbau über mehrere Wochen",
      "Praxistransfer zwischen den Sessions",
      "Persönliche Prompt-Bibliothek entwickeln",
      "Peer-Learning und Erfahrungsaustausch",
      "Nachhaltige Verhaltensänderung im Arbeitsalltag"
    ]
  },
  {
    title: "ChatGPT Keynote",
    duration: "60–90 Minuten",
    description: "Inspirierende Keynote zu den Möglichkeiten von ChatGPT und KI im Arbeitsalltag. Live-Demonstrationen zeigen beeindruckende Anwendungsfälle und motivieren zum Einstieg in die KI-gestützte Arbeitswelt.",
    features: [
      "Live-Demonstrationen mit ChatGPT",
      "Einordnung: Was kann KI heute leisten?",
      "Inspiration für konkrete Einsatzmöglichkeiten",
      "Interaktive Q&A-Runde"
    ]
  },
  {
    title: "ChatGPT Launch Event",
    duration: "Halber oder ganzer Tag",
    description: "Professionell organisierter Eventtag zur Einführung von ChatGPT in Ihrem Unternehmen. Kombination aus Keynote, Hands-on-Stationen und interaktiven KI-Challenges für maximale Aufmerksamkeit und Begeisterung.",
    features: [
      "Professioneller Infostand mit Experten",
      "Interaktive KI-Challenges mit Gamification",
      "Hands-on-Stationen zum Ausprobieren",
      "Hochwertige Infomaterialien und Quick Guides"
    ]
  },
  {
    title: "ChatGPT Hackathon",
    duration: "1 Tag (7 Stunden)",
    description: "Intensiver Team-Hackathon, bei dem Abteilungen echte Geschäftsprobleme mit ChatGPT lösen. Teambildung, Challenge-Briefing, Arbeitsphase und Pitch – inklusive professioneller Moderation und Jury-Bewertung.",
    features: [
      "Use Case Ideation und Teambildung",
      "Challenge-basiertes Arbeiten mit ChatGPT",
      "Prompt Engineering Battle und Wettbewerb",
      "Pitch-Präsentationen mit Jury-Bewertung"
    ]
  }
];

const Index = () => {
  // Generate schema with FAQs for LLM optimization
  const schema = generateTrainingSchemas(trainingModulesForSchema, homepageFAQs);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="ChatGPT Training für Unternehmen | Prompt Engineering & LLM-Kompetenz"
        description="ChatGPT-Trainings mit Fokus auf Prompt Engineering, Modellverständnis und strukturierte Workflows. Spezialisierte Schulungen für Teams im DACH-Raum."
        keywords={[
          "ChatGPT Training",
          "ChatGPT Schulung Unternehmen",
          "ChatGPT Workshop",
          "Prompt Engineering Training",
          "KI Training Unternehmen",
          "ChatGPT für Firmen",
          "ChatGPT Enablement",
          "KI Workshop"
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
        <CustomerReviews />
        <Contact />
        <FAQ faqs={homepageFAQs} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
