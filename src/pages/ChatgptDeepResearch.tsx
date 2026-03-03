import SEOHead from "@/components/SEOHead";
import ContentLayout from "@/components/ContentLayout";
import { getAuthor, getAuthorSchemaMarkup } from "@/data/authors";
import { generateSchemaIds, generateWissenBreadcrumbItems, generateArticleSchema, generateSimpleFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Link } from "react-router-dom";

const SLUG = "chatgpt-deep-research";
const PAGE_TITLE = "ChatGPT Deep Research: Der Modus, der Recherche zur Nebensache macht";

const PUBLISH_DATE = "2026-01-06";
const MODIFIED_DATE = "2026-01-06";

const KEYWORDS = [
  "ChatGPT Deep Research",
  "ChatGPT Deep Research Anleitung",
  "ChatGPT Deep Research Prompts",
  "ChatGPT Recherche",
  "ChatGPT Deep Research Limits",
  "ChatGPT Deep Research Unternehmen",
  "ChatGPT Marktanalyse",
  "ChatGPT Wettbewerbsanalyse",
  "Deep Research Workflow",
  "ChatGPT Recherche Tipps"
];

const FAQS = [
  {
    name: "Wir bräuchten regelmäßig Markt- und Wettbewerbsanalysen, aber unser Team hat dafür keine Kapazität – kann Deep Research das übernehmen?",
    answer: "Deep Research kann eine erste Analyse in zehn bis dreißig Minuten liefern, für die ein Mitarbeiter sonst einen halben Tag bräuchte. Es durchsucht Hunderte von Quellen, strukturiert die Ergebnisse und belegt jede Aussage. Allerdings ersetzt es nicht die fachliche Einordnung: Ob eine Marktentwicklung für das eigene Unternehmen relevant ist, muss am Ende ein Mensch entscheiden. chatgpt-trainings.de zeigt Teams in Workshops, wie sie Deep Research so prompten, dass die Ergebnisse direkt als Entscheidungsgrundlage nutzbar sind – nicht als Rohtext, den man erst aufbereiten muss."
  },
  {
    name: "Unsere Mitarbeiter nutzen ChatGPT für Recherche, aber die Ergebnisse sind oberflächlich und manchmal falsch – wird Deep Research das lösen?",
    answer: "Teilweise. Deep Research arbeitet gründlicher als der normale Chat, weil es systematisch viele Quellen durchgeht und Informationen gegenprüft. Die Ergebnisse enthalten Quellenangaben, sodass man Aussagen verifizieren kann. Aber auch Deep Research kann Fehler machen, besonders bei Nischenthemen oder wenn die Quellenlage dünn ist. Der entscheidende Unterschied zu normalem ChatGPT: Man bekommt einen strukturierten Bericht statt einer Chatantwort, und man kann nachvollziehen, woher die Informationen stammen. chatgpt-trainings.de vermittelt, wie man Deep-Research-Ergebnisse kritisch liest und effizient auf Korrektheit prüft."
  },
  {
    name: "Deep Research verbraucht viele Credits – wie setze ich die begrenzte Anzahl sinnvoll ein?",
    answer: "Mit zehn Anfragen pro Monat bei Plus-Konten muss man selektiv sein. Die Faustregel: Deep Research lohnt sich für Aufgaben, bei denen man sonst Stunden mit manueller Recherche verbringen würde. Eine schnelle Faktenfrage gehört in den normalen Chat, eine umfassende Wettbewerbsanalyse in Deep Research. Entscheidend ist die Qualität des Prompts – ein vager Prompt verschwendet Credits, ein präziser Prompt liefert direkt verwertbare Ergebnisse. chatgpt-trainings.de übt mit Teilnehmern konkret, wie man Prompts so formuliert, dass die begrenzten Credits maximalen Ertrag bringen."
  },
  {
    name: "Kann Deep Research auch auf unsere internen Unternehmensdaten zugreifen oder nur auf das Internet?",
    answer: "Seit Anfang 2026 kann Deep Research auf verbundene Quellen wie SharePoint und OneDrive zugreifen. Das bedeutet: Sie können eine Recherche starten, die sowohl öffentliche Quellen als auch Ihre internen Dokumente einbezieht. Zum Beispiel eine Wettbewerbsanalyse, die externe Marktdaten mit Ihren internen Vertriebszahlen kombiniert. Voraussetzung ist eine ChatGPT Team- oder Enterprise-Lizenz mit verbundenem SharePoint-Connector. chatgpt-trainings.de hilft bei der Einrichtung und zeigt, wie man interne und externe Recherche sinnvoll kombiniert."
  }
];

const ChatgptDeepResearch = () => {
  const author = getAuthor("martin-lang");
  const ids = generateSchemaIds(SLUG, 'wissen');
  const pageUrl = `https://chatgpt-trainings.de/wissen/${SLUG}`;
  const breadcrumbItems = generateWissenBreadcrumbItems(PAGE_TITLE, pageUrl);

  const articleSchema = author ? generateArticleSchema(
    {
      headline: PAGE_TITLE,
      description: "ChatGPT Deep Research durchsucht Hunderte Quellen und liefert strukturierte Berichte. Wie der Modus funktioniert, wie man ihn richtig promptet und welche Limits gelten.",
      author: getAuthorSchemaMarkup(author),
      datePublished: PUBLISH_DATE,
      dateModified: MODIFIED_DATE,
      keywords: KEYWORDS,
      articleSection: "ChatGPT Praxis"
    },
    ids,
    pageUrl
  ) : null;

  const faqSchema = generateSimpleFAQSchema(FAQS, ids.faq);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      ...(articleSchema ? [articleSchema] : []),
      faqSchema,
      breadcrumbSchema
    ]
  };

  const tableOfContents = [
    { id: "was-deep-research-anders-macht", title: "Was Deep Research anders macht", level: 2 },
    { id: "so-promptet-man-deep-research", title: "So promptet man Deep Research", level: 2 },
    { id: "ein-prompt-der-funktioniert", title: "Ein Prompt, der funktioniert", level: 2 },
    { id: "die-limits-kennen", title: "Die Limits kennen", level: 2 },
    { id: "wann-deep-research-die-falsche-wahl-ist", title: "Wann Deep Research die falsche Wahl ist", level: 2 },
    { id: "deep-research-mit-eigenen-daten", title: "Deep Research mit eigenen Daten", level: 2 },
    { id: "faqs", title: "Häufig gestellte Fragen", level: 2 },
  ];

  return (
    <>
      <SEOHead
        title={PAGE_TITLE}
        description="ChatGPT Deep Research durchsucht Hunderte Quellen und liefert strukturierte Berichte. Wie der Modus funktioniert, wie man ihn richtig promptet und welche Limits gelten."
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
        description="ChatGPT Deep Research durchsucht Hunderte Quellen und liefert strukturierte Berichte. Wie der Modus funktioniert, wie man ihn richtig promptet und welche Limits gelten."
        lastUpdated="06. Jan. 2026"
        authorName="Martin Lang"
        tableOfContents={tableOfContents}
      >
        <div className="prose prose-lg max-w-none prose-headings:scroll-mt-24">

          <p>
            Vor ein paar Wochen saß ich mit dem Geschäftsführer eines mittelständischen IT-Dienstleisters zusammen, der mir erklärte, sein Team verbringe pro Woche acht bis zwölf Stunden mit Recherche: Wettbewerber beobachten, Ausschreibungsunterlagen auswerten, technische Entwicklungen verfolgen. Er wollte wissen, ob ChatGPT das beschleunigen könnte. Ich zeigte ihm Deep Research. Nach fünfzehn Minuten hatte er einen Bericht auf dem Bildschirm, der drei seiner vier Wochenfragen beantwortete – mit Quellenangaben, strukturiert, in einem Format, das er direkt an sein Team weiterleiten konnte. Sein Kommentar: „Warum hat mir das noch niemand gezeigt?“ Genau das ist das Problem. Deep Research existiert seit Anfang 2025, aber die meisten ChatGPT-Nutzer wissen nicht einmal, dass es diesen Modus gibt.
          </p>

          <h2 id="was-deep-research-anders-macht">Was Deep Research anders macht</h2>

          <p>
            Im normalen Chat beantwortet ChatGPT Fragen aus dem, was es gelernt hat – seinem Trainingsstand. Manchmal sucht es dazu im Internet, aber diese Suche ist oberflächlich: ein paar Treffer, schnell zusammengefasst, ohne tieferes Eintauchen. Deep Research arbeitet fundamental anders. Es bekommt eine Aufgabe, erstellt einen Rechercheplan, durchsucht dann systematisch Dutzende bis Hunderte von Quellen, liest Texte, PDFs und Datenbanken, vergleicht Informationen aus verschiedenen Quellen und erstellt am Ende einen zusammenhängenden Bericht. Dieser Prozess dauert zwischen fünf und dreißig Minuten – je nach Komplexität der Fragestellung.
          </p>

          <p>
            Der Unterschied zum normalen Chat ist kein gradueller. Es ist ein anderer Modus. Während der normale Chat reagiert, agiert Deep Research. Es stellt sich selbst Zwischenfragen, verfolgt Spuren, verwirft Sackgassen und baut schrittweise ein Bild auf. Man sieht den Fortschritt in einer Sidebar: welche Quellen gerade gelesen werden, welche Zwischenergebnisse vorliegen, wie sich der Bericht formt. Das ist keine Spielerei – es macht den Prozess nachvollziehbar und erlaubt, früh einzugreifen, wenn die Recherche in die falsche Richtung läuft.
          </p>

          <h2 id="so-promptet-man-deep-research">So promptet man Deep Research</h2>

          <p>
            Und hier kommt der Punkt, an dem die meisten scheitern. Deep Research ist kein besserer Chat. Man kann nicht einfach „Recherchiere mal zum Thema XY“ eingeben und ein brauchbares Ergebnis erwarten. Was man bekommt, hängt direkt davon ab, wie präzise man die Aufgabe formuliert. Der Unterschied zu normalem Prompting: Bei Deep Research promptet man nicht für eine Antwort, sondern für einen Auftrag. Man beschreibt, was man am Ende in den Händen halten will.
          </p>

          <p>
            Ein guter Deep-Research-Prompt enthält vier Elemente. Erstens: das Ziel, also was genau man wissen möchte. Nicht „Etwas über den deutschen Markt für Projektmanagement-Software“, sondern „Die fünf größten Anbieter von Projektmanagement-Software im DACH-Raum, mit Marktanteilen, Preismodellen und typischen Zielgruppen.“ Zweitens: der Umfang. Soll der Bericht zwei Seiten haben oder zehn? Soll er als Executive Summary funktionieren oder als ausführliche Analyse? Drittens: die Einschränkungen. Welcher Zeitraum? Welche Branchen? Welche Quellen sind erwünscht, welche nicht? Und viertens: das Ausgabeformat. Tabelle, Fließtext, Vergleichsmatrix, Präsentationsvorlage.
          </p>

          <p>
            Was viele nicht wissen: Es gibt eine versteckte Zeichenbegrenzung von etwa 1.300 Zeichen für den Prompt. Wer länger schreibt, riskiert, dass der Prompt abgeschnitten wird, ohne dass eine Fehlermeldung erscheint. Das bedeutet: Man muss dicht und präzise formulieren statt ausschweifend. Jeder Satz im Prompt sollte eine Information tragen, die das Ergebnis steuert.
          </p>

          <h2 id="ein-prompt-der-funktioniert">Ein Prompt, der funktioniert</h2>

          <p>
            Ein Beispiel, das ich in Trainings verwende: „Erstelle eine Wettbewerbsanalyse der drei größten Anbieter von ChatGPT-Schulungen im deutschsprachigen Raum. Berücksichtige Preismodelle, Zielgruppen, Trainingsformate und Online-Sichtbarkeit. Begrenze die Analyse auf Anbieter mit eigener Website und erkennbarem Geschäftsbetrieb. Ausgabe als strukturierter Bericht mit Vergleichstabelle, maximal fünf Seiten.“
          </p>

          <p>
            Dieser Prompt funktioniert, weil er alle vier Elemente enthält und trotzdem unter der Zeichengrenze bleibt. Was ChatGPT daraus macht, ist ein Bericht, der in der Regel acht bis fünfzehn Quellen auswertet, die Informationen in einer Tabelle zusammenfasst und die wichtigsten Unterschiede herausarbeitet. Perfekt? Nein. Aber als Ausgangspunkt für eine Entscheidung oder ein Strategiegespräch deutlich brauchbarer als das, was der normale Chat liefern würde.
          </p>

          <p>
            Ein zweites Beispiel, das im Unternehmensalltag häufig vorkommt: „Recherchiere aktuelle regulatorische Entwicklungen zum Thema KI in der EU, die für Unternehmen mit 50–500 Mitarbeitern relevant sind. Fokus auf den AI Act und branchenspezifische Regelungen für den Finanzsektor. Zeitraum: letzte sechs Monate. Ausgabe als Briefing für die Geschäftsführung, maximal drei Seiten.“ Hier ist die Zielgruppe definiert, der thematische und zeitliche Rahmen gesetzt und das Format klar. Deep Research liefert darauf einen Bericht, den man mit minimaler Nacharbeit weiterreichen kann.
          </p>

          <h2 id="die-limits-kennen">Die Limits kennen</h2>

          <p>
            Deep Research ist nicht unbegrenzt verfügbar, und das sorgt bei vielen für Frustration. Mit einem ChatGPT-Plus-Abo bekommt man zehn Anfragen im vollen Modus pro Monat, dazu fünfzehn auf einem leichteren Modell, das schneller, aber weniger gründlich arbeitet. Wer ein Pro-Abo hat, erhält 125 plus 125. Kostenlose Nutzer bekommen fünf leichte Anfragen.
          </p>

          <p>
            Zehn Anfragen klingen nach wenig, sind aber mehr als die meisten brauchen, wenn man sie richtig einsetzt. Der Fehler, den ich oft sehe: Leute verbrauchen ihre Anfragen für Fragen, die der normale Chat genauso gut beantworten könnte. „Was ist der Unterschied zwischen Scrum und Kanban?“ braucht kein Deep Research. „Vergleiche die fünf führenden Scrum-Tools hinsichtlich Preis, Funktionsumfang und Integration mit Jira für ein mittelständisches Softwareunternehmen“ dagegen schon. Die Daumenregel: Wenn man für die manuelle Recherche mehr als eine Stunde bräuchte, lohnt sich Deep Research.
          </p>

          <p>
            Ein Tipp, der Credits spart: Bevor man Deep Research startet, kann man im normalen Chat eine Vorrecherche machen und die Fragestellung schärfen. Je präziser der Prompt, desto seltener muss man nachrecherchieren, weil das Ergebnis nicht das Richtige getroffen hat.
          </p>

          <h2 id="wann-deep-research-die-falsche-wahl-ist">Wann Deep Research die falsche Wahl ist</h2>

          <p>
            Nicht jede Recherche gehört in Deep Research. Für Faktenfragen („Wann wurde das Unternehmen X gegründet?“) ist der normale Chat schneller und verbraucht keine Credits. Für Aufgaben, die internes Wissen erfordern, das nirgendwo im Internet steht, liefert Deep Research keine besseren Ergebnisse als eine leere Seite. Und für kreative Aufgaben – Texte schreiben, Ideen entwickeln, Konzepte entwerfen – ist der normale Chat oder der Canvas-Modus das richtige Werkzeug.
          </p>

          <p>
            Wo Deep Research glänzt: bei Fragestellungen, die eine breite Quellenauswertung erfordern. Marktanalysen, Technologievergleiche, regulatorische Übersichten, Branchenberichte, Wettbewerbsbeobachtung. Also genau die Aufgaben, für die Unternehmen bisher entweder teure Beraterstunden gebucht oder eigene Mitarbeiter tagelang an den Schreibtisch gesetzt haben. Nicht dass Deep Research die Berater ersetzt – aber es liefert eine Grundlage, auf der Berater und Fachleute aufbauen können, statt bei null anzufangen.
          </p>

          <h2 id="deep-research-mit-eigenen-daten">Deep Research mit eigenen Daten</h2>

          <p>
            Seit Anfang 2026 kann Deep Research nicht nur das öffentliche Internet durchsuchen, sondern auch auf verbundene Unternehmensdaten zugreifen. Wer seinen SharePoint oder sein OneDrive mit ChatGPT verknüpft hat, kann Recherchen starten, die beide Welten kombinieren: externe Quellen und interne Dokumente. Das eröffnet Anwendungsfälle, die vorher nicht möglich waren. Zum Beispiel: „Vergleiche unsere interne Produktstrategie für 2026 mit den öffentlich verfügbaren Roadmaps unserer drei Hauptwettbewerber und identifiziere Lücken und Überschneidungen.“
          </p>

          <p>
            Das klingt nach Zukunftsmusik, ist aber Gegenwart. Die Kombination aus interner und externer Recherche ist der Punkt, an dem Deep Research von einem nützlichen Werkzeug zu einem strategischen Instrument wird. Voraussetzung: ein ChatGPT Team- oder Enterprise-Plan, korrekt eingerichtete Connectoren und – das ist der Teil, der in keinem Feature-Announcement steht – die Fähigkeit, die richtigen Fragen zu stellen. Denn auch hier gilt: Die Qualität des Outputs hängt direkt an der Qualität des Prompts. Und genau diese Fähigkeit ist es, die den Unterschied macht zwischen Teams, die ChatGPT als Spielzeug betrachten, und solchen, die damit arbeiten.
          </p>

          {/* Author Bio */}
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

          {/* FAQ Section */}
          <div className="mt-16" id="faqs">
            <h2>Häufig gestellte Fragen</h2>
            <div className="space-y-8 not-prose">
              {FAQS.map((faq, index) => (
                <div key={index} className="bg-muted/30 rounded-xl p-6 border border-border/50">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">{faq.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 not-prose">
            <h3 className="text-2xl font-bold mb-3">Deep Research im Team einführen</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sie möchten, dass Ihr Team ChatGPT Deep Research gezielt für Recherche, Analysen und Entscheidungsvorlagen einsetzt?
              In unseren Trainings üben Teilnehmer mit echten Fragestellungen aus ihrem Arbeitsalltag und lernen,
              wie man Prompts formuliert, die das Maximum aus den begrenzten Credits herausholen.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-semibold"
            >
              Unverbindlich anfragen
            </Link>
          </div>
        </div>
      </ContentLayout>
    </>
  );
};

export default ChatgptDeepResearch;
