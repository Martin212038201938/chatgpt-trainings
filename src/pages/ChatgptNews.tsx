import SEOHead from "@/components/SEOHead";
import ContentLayout from "@/components/ContentLayout";
import { getAuthor, getAuthorSchemaMarkup } from "@/data/authors";
import { generateSchemaIds, generateWissenBreadcrumbItems, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Link } from "react-router-dom";

const SLUG = "chatgpt-news";
const PAGE_TITLE = "ChatGPT News: Alle Updates und Meilensteine im Zeitstrahl";

const PUBLISH_DATE = "2026-03-02";
const MODIFIED_DATE = "2026-03-02"; // Updated with YB milestones, EU AI Act, user growth

const KEYWORDS = [
  "ChatGPT News",
  "ChatGPT Updates",
  "ChatGPT Zeitstrahl",
  "ChatGPT neue Features",
  "ChatGPT Timeline",
  "GPT-5 Release",
  "ChatGPT Meilensteine",
  "OpenAI Updates 2025",
  "ChatGPT Entwicklung",
  "ChatGPT Funktionen"
];

interface TimelineEntry {
  date: string;
  sortDate: string;
  title: string;
  description: string;
  category: "modell" | "feature" | "produkt" | "policy" | "yellowboat";
}

const TIMELINE: TimelineEntry[] = [
  // === 2026 ===
  {
    date: "28. Feb. 2026",
    sortDate: "2026-02-28",
    title: "GPT-5.2-Codex veröffentlicht",
    description: "Das bisher leistungsstärkste Coding-Modell von OpenAI erscheint – optimiert für komplexes, agentenbasiertes Software Engineering in realen Projekten.",
    category: "modell"
  },
  {
    date: "09. Feb. 2026",
    sortDate: "2026-02-09",
    title: "Werbeanzeigen in ChatGPT starten",
    description: "OpenAI testet erstmals Werbung für Free- und Go-Nutzer in den USA. Plus-, Pro- und Business-Abos bleiben werbefrei. Nutzer unter 18 sehen keine Anzeigen.",
    category: "policy"
  },
  {
    date: "20. Jan. 2026",
    sortDate: "2026-01-20",
    title: "Altersvorhersage-Modell eingeführt",
    description: "OpenAI rollt ein KI-basiertes Altersschätzungsmodell aus, um Inhalte altersgerecht anzupassen und Minderjährige vor bestimmten Features zu schützen.",
    category: "policy"
  },
  // === 2025 ===
  {
    date: "17. Dez. 2025",
    sortDate: "2025-12-17",
    title: "Connectors werden zu «Apps»",
    description: "OpenAI benennt die Connector-Integrationen in «Apps» um und führt ein App-Verzeichnis direkt in ChatGPT ein.",
    category: "feature"
  },
  {
    date: "11. Dez. 2025",
    sortDate: "2025-12-11",
    title: "GPT-5.2 veröffentlicht",
    description: "Das neue Flaggschiff-Modell bringt automatische Modellauswahl (Fast/Thinking/Pro), einen Study-Mode für schrittweises Lernen und verbesserte Coding-Fähigkeiten.",
    category: "modell"
  },
  {
    date: "Nov. 2025",
    sortDate: "2025-11-01",
    title: "GPT-5.1 mit Instant- und Thinking-Modus",
    description: "Update auf GPT-5.1 verbessert Antwortgeschwindigkeit und Reasoning. Zwei neue Modi optimieren Antworten je nach Komplexität der Aufgabe.",
    category: "modell"
  },
  {
    date: "21. Okt. 2025",
    sortDate: "2025-10-21",
    title: "ChatGPT Atlas – der KI-Browser",
    description: "OpenAI veröffentlicht einen eigenen Webbrowser mit integrierter ChatGPT-Sidebar. Zunächst für macOS, später Tab-Gruppen und Auto-Such-Modus.",
    category: "produkt"
  },
  {
    date: "06. Okt. 2025",
    sortDate: "2025-10-06",
    title: "Codex wird allgemein verfügbar",
    description: "Der cloud-basierte Coding-Agent Codex verlässt die Research-Preview und wird allen zahlenden Nutzern zugänglich.",
    category: "produkt"
  },
  {
    date: "07. Aug. 2025",
    sortDate: "2025-08-07",
    title: "GPT-5 veröffentlicht",
    description: "OpenAIs bisher leistungsstärkstes Modell erscheint – mit deutlichen Verbesserungen bei Reasoning, Kontextverständnis, Memory und Multimodalität gegenüber GPT-4.",
    category: "modell"
  },
  {
    date: "16. Juli 2025",
    sortDate: "2025-07-16",
    title: "Record Mode für Mac – Transkription in ChatGPT",
    description: "ChatGPT für Mac kann nun Meetings und Audioinhalte aufzeichnen, transkribieren und zusammenfassen. Aufnahmen bis 120 Minuten, Daten werden nach der Transkription gelöscht.",
    category: "feature"
  },
  {
    date: "04. Juni 2025",
    sortDate: "2025-06-04",
    title: "Connectors und Meeting-Recording starten",
    description: "ChatGPT erhält Integrationen für Google Drive, GitHub, HubSpot und andere Tools. Enterprise-Nutzer können auch eigene Verbindungen per MCP einrichten.",
    category: "feature"
  },
  {
    date: "16. Mai 2025",
    sortDate: "2025-05-16",
    title: "Codex Research Preview",
    description: "OpenAI stellt Codex als cloud-basierten Software-Engineering-Agenten vor. Er kann eigenständig Code schreiben, testen und Pull Requests erstellen.",
    category: "produkt"
  },
  {
    date: "Apr. 2025",
    sortDate: "2025-04-01",
    title: "Erweitertes Memory-System",
    description: "ChatGPT baut nun ein kontinuierliches Nutzerprofil aus dem Chatverlauf auf – über die bisherigen «Saved Memories» hinaus.",
    category: "feature"
  },
  {
    date: "03. Feb. 2025",
    sortDate: "2025-02-03",
    title: "Deep Research gestartet",
    description: "ChatGPT kann nun eigenständig mehrstufige Web-Recherchen durchführen und strukturierte, zitierfähige Berichte erstellen. Zunächst für Pro-Nutzer.",
    category: "feature"
  },
  {
    date: "02. Feb. 2025",
    sortDate: "2025-02-02",
    title: "EU AI Act: Schulungspflicht tritt in Kraft",
    description: "Artikel 4 der EU-KI-Verordnung wird wirksam: Unternehmen, die KI-Systeme einsetzen, müssen sicherstellen, dass ihre Mitarbeitenden über ausreichende KI-Kompetenz verfügen.",
    category: "policy"
  },
  {
    date: "Feb. 2025",
    sortDate: "2025-02-01",
    title: "Erste Pflicht-Trainings nach EU AI Act",
    description: "Yellow-Boat bietet als einer der ersten Anbieter zertifizierte Pflicht-Trainings gemäß EU AI Act an – immer mit dem Anspruch, Mitarbeitende tatsächlich zu befähigen, die ersten Schritte mit KI-gestützter Arbeit zu gehen.",
    category: "yellowboat"
  },
  {
    date: "2025",
    sortDate: "2025-01-15",
    title: "ChatGPT-Trainings.de geht an den Start",
    description: "Yellow-Boat Consulting launcht chatgpt-trainings.de als eigenständige Marke für ChatGPT-Schulungen. Trainingsportfolio von Kick-Offs bis Bootcamps, zugeschnitten auf die ChatGPT-Reife der Organisation.",
    category: "yellowboat"
  },
  // === 2024 ===
  {
    date: "Dez. 2024",
    sortDate: "2024-12-20",
    title: "300 Millionen wöchentliche Nutzer",
    description: "ChatGPT erreicht 300 Millionen aktive Nutzer pro Woche. Die Nutzerbasis hat sich innerhalb eines Jahres verdreifacht.",
    category: "produkt"
  },
  {
    date: "05. Dez. 2024",
    sortDate: "2024-12-05",
    title: "ChatGPT Pro für 200 $/Monat",
    description: "OpenAI führt ein Premium-Abo mit unbegrenztem Zugang zu allen Modellen, Advanced Voice und Deep Research ein.",
    category: "produkt"
  },
  {
    date: "24. Sep. 2024",
    sortDate: "2024-09-24",
    title: "Advanced Voice Mode für Plus-Nutzer",
    description: "Die natürliche Sprachausgabe mit Echtzeitgespräch rollt für alle ChatGPT-Plus-Abonnenten aus – mit Unterbrechungsmöglichkeit und Emotionserkennung.",
    category: "feature"
  },
  {
    date: "13. Mai 2024",
    sortDate: "2024-05-13",
    title: "GPT-4o vorgestellt",
    description: "Das «omni»-Modell kombiniert Text, Bild und Sprache in einem Modell. Schnellere Antworten, kostenloser Zugang für Free-Nutzer und neue Voice-Fähigkeiten.",
    category: "modell"
  },
  {
    date: "2024",
    sortDate: "2024-01-15",
    title: "Yellow-Boat stellt eigene Workflows auf KI um",
    description: "Yellow-Boat Consulting stellt die eigenen Arbeitsprozesse konsequent auf KI-gestützte Workflows um. Daraus entstehen die ersten strukturierten ChatGPT-Trainingsprogramme.",
    category: "yellowboat"
  },
  // === 2023 ===
  {
    date: "06. Nov. 2023",
    sortDate: "2023-11-06",
    title: "GPTs und der GPT Store",
    description: "Nutzer können eigene ChatGPT-Varianten erstellen und teilen. Der GPT Store wird zur Plattform für spezialisierte KI-Assistenten.",
    category: "produkt"
  },
  {
    date: "Okt. 2023",
    sortDate: "2023-10-01",
    title: "Erste KI-Trainings und Pilotprojekte",
    description: "Yellow-Boat startet erste ChatGPT-Workshops mit Unternehmenskunden in Köln und Leverkusen. Austausch mit dem DFKI (Deutsches Forschungszentrum für Künstliche Intelligenz) und intensive Auseinandersetzung mit Prompt Engineering und Nutzung im beruflichen Kontext.",
    category: "yellowboat"
  },
  {
    date: "14. März 2023",
    sortDate: "2023-03-14",
    title: "GPT-4 veröffentlicht",
    description: "Das multimodale Modell versteht erstmals Bilder und liefert deutlich bessere Ergebnisse bei komplexen Aufgaben als GPT-3.5.",
    category: "modell"
  },
  {
    date: "01. Feb. 2023",
    sortDate: "2023-02-01",
    title: "ChatGPT Plus gestartet",
    description: "Für 20 $/Monat erhalten Nutzer schnellere Antworten, Verfügbarkeit bei hoher Auslastung und bevorzugten Zugang zu neuen Features.",
    category: "produkt"
  },
  {
    date: "Jan. 2023",
    sortDate: "2023-01-30",
    title: "100 Millionen monatliche Nutzer",
    description: "Nur zwei Monate nach dem Start erreicht ChatGPT 100 Millionen monatlich aktive Nutzer – ein Rekord in der Geschichte digitaler Verbraucherprodukte.",
    category: "produkt"
  },
  // === 2022 ===
  {
    date: "05. Dez. 2022",
    sortDate: "2022-12-05",
    title: "Erster ChatGPT-Account bei Yellow-Boat",
    description: "Fünf Tage nach dem Launch erstellt Yellow-Boat Consulting den ersten ChatGPT-Account und beginnt mit ersten Versuchen. Seitdem: permanente und intensive Nutzung des Tools in der täglichen Arbeit.",
    category: "yellowboat"
  },
  {
    date: "30. Nov. 2022",
    sortDate: "2022-11-30",
    title: "ChatGPT geht online",
    description: "OpenAI veröffentlicht ChatGPT als kostenlose Vorschau. Innerhalb von fünf Tagen erreicht der Chatbot eine Million Nutzer – schneller als jedes andere Verbraucherprodukt.",
    category: "produkt"
  },
  // === 2011 ===
  {
    date: "2011",
    sortDate: "2011-01-01",
    title: "Gründung Yellow-Boat Consulting",
    description: "Martin Lang gründet Yellow-Boat Consulting in Köln. Schwerpunkt: agile Transformation, Teamstrukturen und Veränderungsprojekte in Konzernen und Mittelstand.",
    category: "yellowboat"
  }
];

const categoryColors: Record<TimelineEntry["category"], { bg: string; text: string; label: string }> = {
  modell: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-700 dark:text-blue-300", label: "Modell" },
  feature: { bg: "bg-emerald-100 dark:bg-emerald-900/30", text: "text-emerald-700 dark:text-emerald-300", label: "Feature" },
  produkt: { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-700 dark:text-purple-300", label: "Produkt" },
  policy: { bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-700 dark:text-amber-300", label: "Policy" },
  yellowboat: { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-700 dark:text-yellow-300", label: "Yellow-Boat" }
};

const ChatgptNews = () => {
  const author = getAuthor("martin-lang");
  const ids = generateSchemaIds(SLUG, 'wissen');
  const pageUrl = `https://chatgpt-trainings.de/wissen/${SLUG}`;
  const breadcrumbItems = generateWissenBreadcrumbItems(PAGE_TITLE, pageUrl);

  const articleSchema = author ? generateArticleSchema(
    {
      headline: PAGE_TITLE,
      description: "Alle wichtigen ChatGPT-Updates und OpenAI-Meilensteine chronologisch geordnet – vom Launch 2022 bis zu den neuesten Features 2026.",
      author: getAuthorSchemaMarkup(author),
      datePublished: PUBLISH_DATE,
      dateModified: MODIFIED_DATE,
      keywords: KEYWORDS,
      articleSection: "ChatGPT News"
    },
    ids,
    pageUrl
  ) : null;

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      ...(articleSchema ? [articleSchema] : []),
      breadcrumbSchema
    ]
  };

  // Gruppiere nach Jahr
  const groupedByYear: Record<string, TimelineEntry[]> = {};
  TIMELINE.forEach(entry => {
    const year = entry.sortDate.substring(0, 4);
    if (!groupedByYear[year]) groupedByYear[year] = [];
    groupedByYear[year].push(entry);
  });
  const years = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <>
      <SEOHead
        title={PAGE_TITLE}
        description="Alle wichtigen ChatGPT-Updates und OpenAI-Meilensteine chronologisch geordnet – vom Launch 2022 bis zu den neuesten Features 2026."
        keywords={KEYWORDS}
        canonicalUrl={pageUrl}
        schema={schema}
        author={author}
        publishedTime={PUBLISH_DATE}
        modifiedTime={MODIFIED_DATE}
      />
      <ContentLayout
        breadcrumbs={[
          { label: "Wissen", href: "/wissen" },
          { label: PAGE_TITLE, href: `/wissen/${SLUG}` }
        ]}
        title={PAGE_TITLE}
        description="Alle wichtigen ChatGPT-Updates und OpenAI-Meilensteine chronologisch geordnet – vom Launch 2022 bis zu den neuesten Features 2026."
        lastUpdated="02. Mrz. 2026"
        authorName="Martin Lang"
      >
        <div className="prose prose-lg max-w-none">
          <p>
            ChatGPT entwickelt sich in einem Tempo weiter, das selbst für Fachleute schwer zu überblicken ist.
            Neue Modelle, Features und Produktänderungen erscheinen fast wöchentlich. Dieser Zeitstrahl hält die
            wichtigsten Meilensteine fest – von der Veröffentlichung im November 2022 bis zu den aktuellsten
            Updates 2026.
          </p>

          {/* Legende */}
          <div className="flex flex-wrap gap-3 my-8 not-prose">
            {Object.entries(categoryColors).map(([key, val]) => (
              <span key={key} className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${val.bg} ${val.text}`}>
                {val.label}
              </span>
            ))}
          </div>
        </div>

        {/* Zeitstrahl */}
        <div className="not-prose">
          {years.map((year) => (
            <div key={year} className="mb-12">
              {/* Jahres-Header */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-primary">{year}</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Einträge */}
              <div className="relative pl-8 border-l-2 border-primary/20 space-y-6">
                {groupedByYear[year].map((entry, idx) => {
                  const cat = categoryColors[entry.category];
                  const isYB = entry.category === "yellowboat";
                  return (
                    <div key={idx} className="relative group">
                      {/* Punkt auf der Zeitlinie */}
                      <div className={`absolute -left-[25px] top-1.5 rounded-full border-2 transition-colors ${
                        isYB
                          ? "w-5 h-5 -left-[27px] top-1 border-yellow-500 bg-yellow-400 dark:bg-yellow-500"
                          : "w-4 h-4 border-primary bg-background group-hover:bg-primary"
                      }`} />

                      <div className={`rounded-xl p-5 border transition-colors ${
                        isYB
                          ? "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-300 dark:border-yellow-700 hover:border-yellow-400"
                          : "bg-card border-border/50 hover:border-primary/30"
                      }`}>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <time className="text-sm font-mono text-muted-foreground">{entry.date}</time>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${cat.bg} ${cat.text}`}>
                            {isYB ? "\u2693 " : ""}{cat.label}
                          </span>
                        </div>
                        <h3 className={`text-lg font-semibold mb-1 ${isYB ? "text-yellow-800 dark:text-yellow-200" : "text-foreground"}`}>{entry.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{entry.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Autor-Bio */}
        <div className="prose prose-lg max-w-none">
          {author && (
            <div className="mt-16 pt-8 border-t border-border/50">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-semibold text-lg">{author.name}</p>
                  <p className="text-sm text-muted-foreground mb-2">{author.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {author.bio}
                  </p>
                  {author.linkedin && (
                    <a
                      href={author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2"
                    >
                      LinkedIn-Profil
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 not-prose">
            <h3 className="text-2xl font-bold mb-3">Immer auf dem neuesten Stand bleiben</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              ChatGPT entwickelt sich schnell weiter – und Ihr Team sollte mithalten.
              In unseren Trainings lernen Ihre Mitarbeitenden nicht nur die aktuellen Features,
              sondern auch, wie sie neue Updates selbstständig einordnen und produktiv nutzen.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-semibold"
            >
              Training anfragen
            </Link>
          </div>
        </div>
      </ContentLayout>
    </>
  );
};

export default ChatgptNews;
