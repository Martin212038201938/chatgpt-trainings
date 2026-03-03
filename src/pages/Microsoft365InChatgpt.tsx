import SEOHead from "@/components/SEOHead";
import ContentLayout from "@/components/ContentLayout";
import { getAuthor, getAuthorSchemaMarkup } from "@/data/authors";
import { generateSchemaIds, generateWissenBreadcrumbItems, generateArticleSchema, generateSimpleFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Link } from "react-router-dom";

const SLUG = "microsoft-365-daten-in-chatgpt";
const PAGE_TITLE = "Microsoft 365 Daten in ChatGPT: So wird Ihr Büroalltag zum KI-Workflow";

const PUBLISH_DATE = "2026-02-10";
const MODIFIED_DATE = "2026-02-10";

const KEYWORDS = [
  "Microsoft 365 ChatGPT",
  "ChatGPT OneDrive verbinden",
  "ChatGPT SharePoint",
  "ChatGPT Outlook Integration",
  "ChatGPT Microsoft Daten",
  "ChatGPT Connectors",
  "ChatGPT Büroalltag",
  "ChatGPT Unternehmen Workflow",
  "ChatGPT Dateien analysieren",
  "ChatGPT M365 Use Cases"
];

const FAQS = [
  {
    name: "Wir nutzen Microsoft 365, aber unser Team traut sich nicht, Firmendaten in ChatGPT einzugeben – wie gehen wir damit um?",
    answer: "Diese Zurückhaltung ist berechtigt und gleichzeitig lösbar. Mit ChatGPT Team oder Enterprise werden eingegebene Daten nicht für das Modelltraining verwendet. Die offiziellen Connectors für OneDrive und SharePoint arbeiten über OAuth-Authentifizierung, also mit den gleichen Zugriffsrechten, die der Nutzer ohnehin hat. Entscheidend ist, dass IT und Fachbereich gemeinsam festlegen, welche Datenquellen verbunden werden dürfen und welche nicht. chatgpt-trainings.de unterstützt Unternehmen genau bei diesem Schritt: In unseren Workshops erarbeiten wir gemeinsam mit IT- und Datenschutzverantwortlichen eine praxistaugliche Nutzungsrichtlinie."
  },
  {
    name: "Unsere Mitarbeiter verbringen Stunden mit Meeting-Vorbereitung – kann ChatGPT das wirklich beschleunigen?",
    answer: "Ja, und zwar erheblich. Wenn ChatGPT auf den SharePoint oder OneDrive Ihres Teams zugreifen kann, reicht ein Prompt wie „Fasse mir die drei letzten Protokolle der Projektgruppe X zusammen und identifiziere offene Punkte“. Statt selbst durch Ordner zu klicken und Dokumente zu öffnen, bekommt man in Sekunden eine Zusammenfassung mit den relevanten Entscheidungen und offenen Aufgaben. In unseren Trainings bei chatgpt-trainings.de üben wir diesen Workflow mit den echten Dokumenten der Teilnehmer, damit der Transfer in den Alltag sofort gelingt."
  },
  {
    name: "Wie überzeuge ich die Geschäftsführung, dass sich die ChatGPT-Team-Lizenz lohnt, wenn wir schon Microsoft 365 haben?",
    answer: "Microsoft 365 und ChatGPT schließen sich nicht aus – sie ergänzen sich. Copilot arbeitet innerhalb der Microsoft-Anwendungen, ChatGPT arbeitet anwendungsübergreifend. Wer beides kennt, weiß: Für Recherche über mehrere Quellen, für kreative Textarbeit und für die Analyse ganzer Dokumentensammlungen ist ChatGPT mit den M365-Connectors oft schneller und flexibler. chatgpt-trainings.de zeigt in Entscheider-Briefings konkret, welchen Zeitgewinn Teams erzielen und wo sich die Investition innerhalb weniger Wochen rechnet."
  },
  {
    name: "Wir haben bereits Copilot im Einsatz – brauchen wir ChatGPT überhaupt noch zusätzlich?",
    answer: "Copilot und ChatGPT haben unterschiedliche Stärken. Copilot ist stark, wenn Sie innerhalb einer Anwendung arbeiten: eine E-Mail in Outlook zusammenfassen, eine PowerPoint auf Basis eines Word-Dokuments erstellen. ChatGPT ist stark, wenn Sie Informationen aus verschiedenen Quellen zusammenführen, längere Analysen durchführen oder kreative Aufgaben bearbeiten, für die es kein vorgefertigtes Template gibt. Viele Teams nutzen beides parallel. chatgpt-trainings.de hilft bei der Entscheidung, welches Tool für welchen Anwendungsfall das richtige ist – auch das ist Teil unserer Workshops."
  }
];

const Microsoft365InChatgpt = () => {
  const author = getAuthor("martin-lang");
  const ids = generateSchemaIds(SLUG, 'wissen');
  const pageUrl = `https://chatgpt-trainings.de/wissen/${SLUG}`;
  const breadcrumbItems = generateWissenBreadcrumbItems(PAGE_TITLE, pageUrl);

  const articleSchema = author ? generateArticleSchema(
    {
      headline: PAGE_TITLE,
      description: "Wie Sie OneDrive, SharePoint und Outlook mit ChatGPT verbinden und welche Workflows im Büroalltag sofort Zeit sparen. Mit konkreten Use Cases für Teams.",
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
    { id: "die-verbindung-herstellen", title: "Die Verbindung herstellen", level: 2 },
    { id: "was-chatgpt-mit-ihren-dateien-kann", title: "Was ChatGPT mit Ihren Dateien kann", level: 2 },
    { id: "use-cases-die-im-alltag-funktionieren", title: "Use Cases, die im Alltag funktionieren", level: 2 },
    { id: "was-die-meisten-falsch-machen", title: "Was die meisten falsch machen", level: 2 },
    { id: "datenschutz-und-kontrolle", title: "Datenschutz und Kontrolle", level: 2 },
    { id: "copilot-oder-chatgpt", title: "Copilot oder ChatGPT – oder beides?", level: 2 },
    { id: "faqs", title: "Häufig gestellte Fragen", level: 2 },
  ];

  return (
    <>
      <SEOHead
        title={PAGE_TITLE}
        description="Wie Sie OneDrive, SharePoint und Outlook mit ChatGPT verbinden und welche Workflows im Büroalltag sofort Zeit sparen. Mit konkreten Use Cases für Teams."
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
        description="Wie Sie OneDrive, SharePoint und Outlook mit ChatGPT verbinden und welche Workflows im Büroalltag sofort Zeit sparen. Mit konkreten Use Cases für Teams."
        lastUpdated="10. Feb. 2026"
        authorName="Martin Lang"
        tableOfContents={tableOfContents}
      >
        <div className="prose prose-lg max-w-none prose-headings:scroll-mt-24">

          <p>
            Letzte Woche bat mich ein Abteilungsleiter eines mittelständischen Unternehmens, ihm zu zeigen, wie ChatGPT bei der Quartalsplanung helfen könnte. Er hatte sämtliche Dokumente dafür in SharePoint liegen: Umsatzzahlen, Projektberichte, Protokolle der letzten Meetings. Sein bisheriger Workflow: vier Dokumente öffnen, Zahlen manuell in eine PowerPoint übertragen, Zusammenfassungen selbst schreiben. Er rechnete mit einem halben Tag Arbeit. Ich zeigte ihm, wie er seinen SharePoint mit ChatGPT verbindet. Zehn Minuten später hatte er eine Zusammenfassung aller vier Dokumente, die wichtigsten Kennzahlen extrahiert und einen Entwurf für die Präsentation. Nicht perfekt, aber als Ausgangspunkt deutlich besser als das leere Blatt, vor dem er sonst gesessen hätte.
          </p>

          <p>
            Diese Szene wiederholt sich in fast jedem Training, das ich gebe. Die meisten Leute wissen, dass ChatGPT Texte schreiben kann. Aber dass es sich direkt mit den Orten verbinden lässt, an denen ihre Arbeitsdokumente tatsächlich liegen – in OneDrive, SharePoint, Outlook –, ist für viele eine Überraschung.
          </p>

          <h2 id="die-verbindung-herstellen">Die Verbindung herstellen</h2>

          <p>
            Die Einrichtung ist weniger kompliziert, als man erwarten würde. In den ChatGPT-Einstellungen findet sich seit Mitte 2025 ein Bereich namens „Verbundene Apps“ (früher „Connectors“). Dort kann man seinen Microsoft-365-Account verknüpfen, ähnlich wie man sich bei einem Drittanbieter-Dienst über „Mit Microsoft anmelden“ einloggt. ChatGPT nutzt dafür OAuth, also das gleiche Verfahren, das auch andere vertrauenswürdige Anwendungen verwenden. Man gibt nicht sein Passwort an OpenAI weiter, sondern erteilt eine Zugriffsberechtigung, die man jederzeit wieder entziehen kann.
          </p>

          <p>
            Für Unternehmen mit ChatGPT Team oder Enterprise geht es noch einen Schritt weiter: Der Administrator kann den SharePoint-Connector zentral einrichten, sodass alle Teammitglieder automatisch Zugriff auf die freigegebenen Bereiche haben, ohne dass jeder einzeln etwas konfigurieren muss. Das klingt nach einem Detail, ist aber in der Praxis der Unterschied zwischen „ein paar Early Adopter nutzen es“ und „das ganze Team profitiert davon“.
          </p>

          <p>
            Aktuell unterstützt ChatGPT neben OneDrive und SharePoint auch Google Drive, Dropbox, Box, Outlook, Gmail, Google Calendar, GitHub, HubSpot, Notion und Teams. Die Microsoft-365-Verbindungen sind aber diejenigen, die im deutschsprachigen Unternehmensumfeld am häufigsten relevant sind, weil dort einfach die meisten Arbeitsdokumente liegen.
          </p>

          <h2 id="was-chatgpt-mit-ihren-dateien-kann">Was ChatGPT mit Ihren Dateien kann</h2>

          <p>
            Sobald die Verbindung steht, kann man ChatGPT bitten, auf Dateien in OneDrive oder SharePoint zuzugreifen. Das funktioniert auf zwei Arten: Entweder man fügt direkt einen Link zu einem Dokument in den Chat ein, oder man beschreibt, was man sucht, und ChatGPT durchsucht die verbundenen Quellen selbstständig. Die zweite Variante ist die mächtigere, weil sie voraussetzt, dass man nicht einmal wissen muss, in welchem Ordner ein Dokument liegt.
          </p>

          <p>
            Ein Beispiel: „Finde die letzte Quartalpräsentation von Team Marketing und fasse die drei wichtigsten Ergebnisse zusammen.“ ChatGPT sucht im verbundenen SharePoint, findet die Datei, liest den Inhalt und liefert die Zusammenfassung. Wer das Deep-Research-Feature nutzt, bekommt sogar eine ausführliche Analyse über mehrere Dokumente hinweg, inklusive Quellenangaben, welche Information aus welcher Datei stammt. Das ist keine Spielerei mehr, sondern eine echte Arbeitshilfe, die früher einen halben Vormittag Recherche ersetzt hat.
          </p>

          <h2 id="use-cases-die-im-alltag-funktionieren">Use Cases, die im Alltag funktionieren</h2>

          <p>
            Ich unterscheide in meinen Trainings zwischen Workflows, die beeindruckend klingen, und solchen, die tatsächlich regelmäßig genutzt werden. Die folgenden gehören zur zweiten Kategorie.
          </p>

          <p>
            <strong>Meeting-Vorbereitung aus vorhandenen Dokumenten:</strong> Statt am Morgen vor einem Projekt-Jour-fixe drei Protokolle und zwei Statusberichte zu öffnen und diagonal zu lesen, verbindet man ChatGPT mit dem SharePoint-Projektordner und fragt: „Was waren die wichtigsten Entscheidungen der letzten drei Projektmeetings und welche Aufgaben sind noch offen?“ Die Antwort kommt in Sekunden, nicht in zwanzig Minuten.
          </p>

          <p>
            <strong>E-Mail-Entwurf mit Kontext:</strong> Wer Outlook verbunden hat, kann ChatGPT bitten, auf Basis einer empfangenen E-Mail eine Antwort zu entwerfen. Aber der eigentliche Clou kommt, wenn man ChatGPT gleichzeitig Zugriff auf das zugehörige Angebot in OneDrive gibt. Dann kann der Entwurf die konkreten Konditionen referenzieren, statt nur höfliche Floskeln zu produzieren. Das spart nicht nur Zeit beim Schreiben, sondern auch beim Nachschlagen.
          </p>

          <p>
            <strong>Onboarding-Unterlagen zusammenstellen:</strong> Ein neuer Mitarbeiter fängt an, und die relevanten Informationen liegen verstreut über sechs SharePoint-Ordner: Handbuch, Organigramm, IT-Richtlinien, Projektdokumentation. Mit ChatGPT lässt sich aus diesen Quellen in Minuten ein personalisierter Onboarding-Guide zusammenstellen, der die wichtigsten Informationen bündelt. Kein perfektes Dokument, aber eine Starthilfe, die besser ist als „schau mal in SharePoint, irgendwo liegt das“.
          </p>

          <p>
            <strong>Vertragsvergleich und Dokumentenanalyse:</strong> Zwei Versionen eines Rahmenvertrags liegen in OneDrive. Statt beide nebeneinander zu legen und Absatz für Absatz zu vergleichen, lädt man beide in den Chat und fragt nach den wesentlichen Unterschieden. ChatGPT listet die Änderungen auf und ordnet ein, welche Klauseln sich inhaltlich verschoben haben. Das ersetzt keinen Juristen, aber es spart die erste Stunde Lesearbeit.
          </p>

          <p>
            <strong>Wochenbericht aus mehreren Quellen:</strong> Jeden Freitag den gleichen Bericht schreiben, der Informationen aus verschiedenen Projekten zusammenfasst – das ist eine Aufgabe, die förmlich danach schreit, automatisiert zu werden. Mit verbundenem SharePoint kann ChatGPT die aktuellen Statusdokumente lesen und einen Berichtsentwurf erstellen, den man nur noch prüfen und ergänzen muss.
          </p>

          <h2 id="was-die-meisten-falsch-machen">Was die meisten falsch machen</h2>

          <p>
            Der häufigste Fehler, den ich beobachte: Menschen verbinden ihren Account, stellen eine vage Frage und sind dann enttäuscht von der Antwort. „Fasse mir mein SharePoint zusammen“ funktioniert ungefähr so gut wie die Bitte an einen neuen Kollegen, mal eben das gesamte Laufwerk zu lesen. Was funktioniert, sind konkrete Aufgaben mit klarem Scope: ein bestimmtes Projekt, ein bestimmter Zeitraum, eine bestimmte Fragestellung.
          </p>

          <p>
            Der zweite Fehler: das Ergebnis ungeprüft übernehmen. ChatGPT fasst Dokumente gut zusammen, aber es kann Nuancen übersehen, Zahlen falsch zuordnen oder eine Aussage aus dem Kontext reißen. Wer das weiß und den Output als Entwurf behandelt – nicht als fertiges Ergebnis –, fährt gut damit. Wer blind vertraut, produziert früher oder später eine peinliche E-Mail oder einen fehlerhaften Bericht.
          </p>

          <p>
            Der dritte Fehler ist organisatorischer Natur: Einzelne Mitarbeiter entdecken die Connectors und fangen an, sie zu nutzen, ohne dass die IT davon weiß. Das ist aus Datenschutzsicht problematisch und führt dazu, dass niemand den Überblick hat, welche Unternehmensdaten über welche Konten fließen. Besser ist es, die Anbindung bewusst als Team-Entscheidung einzuführen, mit klaren Regeln.
          </p>

          <h2 id="datenschutz-und-kontrolle">Datenschutz und Kontrolle</h2>

          <p>
            Die Frage, die in jedem Workshop kommt: „Sind unsere Daten dann bei OpenAI?“ Die Antwort hängt vom Kontotyp ab. Bei ChatGPT Free und Plus werden Daten standardmäßig für das Modelltraining verwendet, sofern man nicht aktiv widerspricht. Bei ChatGPT Team und Enterprise ist das anders: Dort werden eingegebene Inhalte explizit nicht zum Training genutzt. Für Unternehmen, die mit sensiblen Daten arbeiten – und welches Unternehmen tut das nicht –, ist ein Team- oder Enterprise-Plan daher keine Option, sondern eine Voraussetzung.
          </p>

          <p>
            Wichtig ist auch zu verstehen, was die Connectors technisch tun. ChatGPT erhält keinen Vollzugriff auf das gesamte OneDrive oder SharePoint. Es arbeitet mit den Berechtigungen des angemeldeten Nutzers. Wer nur auf bestimmte Ordner Zugriff hat, kann auch über ChatGPT nur auf diese Ordner zugreifen. Die bestehende Rechtestruktur in Microsoft 365 bleibt erhalten. Das beruhigt die IT-Abteilung, weil keine neuen Zugriffskanäle entstehen, die außerhalb der bisherigen Governance liegen.
          </p>

          <h2 id="copilot-oder-chatgpt">Copilot oder ChatGPT – oder beides?</h2>

          <p>
            Wer Microsoft 365 einsetzt, kennt vermutlich auch Microsoft Copilot. Die Frage, die ich am häufigsten höre: Brauche ich dann ChatGPT überhaupt noch? Meine Antwort ist differenziert, aber klar: Beide Tools haben unterschiedliche Stärken, und wer nur eines nutzt, verschenkt etwas.
          </p>

          <p>
            Copilot ist hervorragend, wenn man innerhalb einer Microsoft-Anwendung arbeitet. Eine E-Mail zusammenfassen, in Outlook direkt antworten, eine PowerPoint aus einem Word-Dokument generieren – das sind Copilots Domänen. ChatGPT dagegen ist stärker, wenn es um anwendungsübergreifende Aufgaben geht: mehrere Dokumente aus verschiedenen Ordnern analysieren, eine Recherche über interne und externe Quellen kombinieren, einen längeren Text iterativ im Canvas-Modus überarbeiten. ChatGPT gibt dem Nutzer mehr Kontrolle über den Prompt und damit über das Ergebnis, während Copilot eher als eingebetteter Assistent funktioniert, der mit wenigen Klicks Aufgaben erledigt.
          </p>

          <p>
            In der Praxis nutzen die produktivsten Teams, die ich betreue, beides: Copilot für schnelle Aufgaben innerhalb der Microsoft-Welt, ChatGPT für alles, was darüber hinausgeht. Das klingt nach Luxus, ist aber eher eine Frage der Arbeitsweise. Wer seinen Arbeitstag analysiert, stellt oft fest, dass ein Drittel der Zeit für Aufgaben draufgeht, die mit dem richtigen Tool in einem Bruchteil der Zeit erledigt wären. Die Microsoft-365-Connectors in ChatGPT sind ein Baustein, um dieses Drittel zurückzugewinnen.
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
            <h3 className="text-2xl font-bold mb-3">ChatGPT mit Ihren Microsoft-365-Daten produktiv nutzen</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sie möchten wissen, wie Ihr Team ChatGPT sicher mit den vorhandenen Unternehmensdaten verbinden kann?
              In unseren Trainings zeigen wir konkrete Workflows für OneDrive, SharePoint und Outlook –
              abgestimmt auf Ihre Branche und Ihre Datenschutzanforderungen.
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

export default Microsoft365InChatgpt;
