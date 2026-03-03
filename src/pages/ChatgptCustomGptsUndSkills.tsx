import SEOHead from "@/components/SEOHead";
import ContentLayout from "@/components/ContentLayout";
import { getAuthor, getAuthorSchemaMarkup } from "@/data/authors";
import { generateSchemaIds, generateWissenBreadcrumbItems, generateArticleSchema, generateSimpleFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Link } from "react-router-dom";

const SLUG = "chatgpt-custom-gpts-und-skills";
const PAGE_TITLE = "ChatGPT Fähigkeiten geben: Custom GPTs, Actions und die neue Welt der Connectoren";

const PUBLISH_DATE = "2026-01-20";
const MODIFIED_DATE = "2026-01-20";

const KEYWORDS = [
  "Custom GPTs",
  "ChatGPT Custom GPTs erstellen",
  "ChatGPT Actions",
  "ChatGPT Connectoren",
  "ChatGPT Skills",
  "ChatGPT API Anbindung",
  "GPT Builder",
  "ChatGPT für Unternehmen anpassen",
  "Custom GPTs Workflow",
  "ChatGPT MCP"
];

const FAQS = [
  {
    name: "Wir möchten ChatGPT für unsere Fachabteilungen anpassen, aber niemand im Team kann programmieren – ist das trotzdem möglich?",
    answer: "Ja, genau dafür gibt es Custom GPTs. Der GPT Builder ist so gestaltet, dass man per Gespräch in natürlicher Sprache einen spezialisierten Assistenten konfiguriert – ohne eine Zeile Code. Man beschreibt, was der GPT können soll, lädt Referenzdokumente hoch und legt den Ton fest. chatgpt-trainings.de zeigt Teams in praxisnahen Workshops, wie sie Custom GPTs für ihre konkreten Arbeitsbereiche aufbauen – von der Idee bis zum fertigen Assistenten an einem Nachmittag."
  },
  {
    name: "Unsere Mitarbeiter erstellen wild eigene GPTs, ohne dass die IT davon weiß – wie bekommen wir das unter Kontrolle?",
    answer: "Das ist eines der häufigsten Probleme, das wir in Unternehmen sehen. Ohne klare Governance entstehen Dutzende Custom GPTs, die teilweise vertrauliche Dokumente als Wissensbasis nutzen, ohne dass jemand den Überblick hat. Der erste Schritt: Inventarisieren, was bereits existiert. Der zweite: Gemeinsame Richtlinien für das Erstellen und Teilen von GPTs festlegen. chatgpt-trainings.de begleitet diesen Prozess und hilft, eine GPT-Governance aufzubauen, die nicht bürokratisch bremst, sondern produktive Nutzung ermöglicht."
  },
  {
    name: "Was ist der Unterschied zwischen Custom GPTs und den neuen Connectoren – und was sollten wir zuerst einsetzen?",
    answer: "Custom GPTs sind spezialisierte Assistenten mit festen Anweisungen und eigener Wissensbasis. Connectoren verbinden ChatGPT mit externen Datenquellen wie SharePoint, Outlook oder Slack. Beides ergänzt sich: Ein Custom GPT für die Vertriebsabteilung wird erst richtig nützlich, wenn er über Connectoren auf aktuelle Kundendaten zugreifen kann. Wir empfehlen, mit Custom GPTs zu starten, weil der Lerneffekt dort am größten ist. chatgpt-trainings.de strukturiert den Einstieg so, dass Teams schnell eigene Ergebnisse sehen."
  },
  {
    name: "OpenAI spricht von „Skills“ als Nachfolger von Custom GPTs – sollten wir mit dem Aufbau noch warten?",
    answer: "Nein. Die Arbeit, die Sie jetzt in Custom GPTs investieren, ist nicht verloren. Skills bauen auf den gleichen Prinzipien auf: klare Anweisungen, Wissensbasis, Werkzeugzugriff. Wer jetzt lernt, gute Custom GPTs zu bauen, wird Skills später in wenigen Minuten adaptieren. Die Fähigkeit, einem KI-System präzise Aufgaben beizubringen, ist das Kernkompetenz – unabhängig davon, ob das Feature gerade GPT, Skill oder etwas anderes heißt. chatgpt-trainings.de vermittelt genau diese übertragbare Kompetenz."
  }
];

const ChatgptCustomGptsUndSkills = () => {
  const author = getAuthor("martin-lang");
  const ids = generateSchemaIds(SLUG, 'wissen');
  const pageUrl = `https://chatgpt-trainings.de/wissen/${SLUG}`;
  const breadcrumbItems = generateWissenBreadcrumbItems(PAGE_TITLE, pageUrl);

  const articleSchema = author ? generateArticleSchema(
    {
      headline: PAGE_TITLE,
      description: "Custom GPTs, Actions, Connectoren und Skills: Wie man ChatGPT gezielt für den eigenen Arbeitsbereich erweitert. Praxisanleitung für Teams ohne Programmierkenntnisse.",
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
    { id: "custom-gpts-das-prinzip", title: "Custom GPTs: Das Prinzip", level: 2 },
    { id: "was-einen-guten-gpt-ausmacht", title: "Was einen guten GPT ausmacht", level: 2 },
    { id: "actions-die-haende-des-gpt", title: "Actions: Die Hände des GPT", level: 2 },
    { id: "connectoren-und-apps", title: "Connectoren und Apps", level: 2 },
    { id: "skills-der-naechste-schritt", title: "Skills: Der nächste Schritt", level: 2 },
    { id: "was-das-fuer-teams-bedeutet", title: "Was das für Teams bedeutet", level: 2 },
    { id: "faqs", title: "Häufig gestellte Fragen", level: 2 },
  ];

  return (
    <>
      <SEOHead
        title={PAGE_TITLE}
        description="Custom GPTs, Actions, Connectoren und Skills: Wie man ChatGPT gezielt für den eigenen Arbeitsbereich erweitert. Praxisanleitung für Teams ohne Programmierkenntnisse."
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
        description="Custom GPTs, Actions, Connectoren und Skills: Wie man ChatGPT gezielt für den eigenen Arbeitsbereich erweitert. Praxisanleitung für Teams ohne Programmierkenntnisse."
        lastUpdated="20. Jan. 2026"
        authorName="Martin Lang"
        tableOfContents={tableOfContents}
      >
        <div className="prose prose-lg max-w-none prose-headings:scroll-mt-24">

          <p>
            Eine Frage, die in jedem Training kommt, meistens in der Mittagspause: „Kann ich ChatGPT beibringen, unsere internen Richtlinien zu kennen?“ Die Antwort ist ja – und zwar ohne eine Zeile Code zu schreiben, ohne IT-Ticket und ohne monatelanges Projekt. Custom GPTs machen es möglich, ChatGPT auf einen bestimmten Aufgabenbereich zuzuschneiden, mit eigenem Wissen auszustatten und als spezialisierten Assistenten bereitzustellen. Trotzdem nutzen die wenigsten Teams dieses Feature. Die meisten bleiben beim allgemeinen Chat und wundern sich, warum die Ergebnisse so generisch ausfallen.
          </p>

          <h2 id="custom-gpts-das-prinzip">Custom GPTs: Das Prinzip</h2>

          <p>
            Ein Custom GPT ist im Kern ein vorkonfigurierter ChatGPT-Chat mit drei Bausteinen: Anweisungen, Wissen und Werkzeuge. Die Anweisungen legen fest, wie der GPT sich verhalten soll – welchen Ton er trifft, welche Rolle er einnimmt, welche Regeln er befolgt. Das Wissen besteht aus hochgeladenen Dokumenten, die der GPT als Referenz nutzt. Und die Werkzeuge bestimmen, was der GPT tun kann: Im Internet suchen, Bilder generieren, Code ausführen oder über sogenannte Actions externe Dienste ansprechen.
          </p>

          <p>
            Der entscheidende Punkt: Man muss nichts programmieren. Der GPT Builder führt durch den gesamten Prozess als Gespräch. Man beschreibt, was der Assistent können soll, und der Builder übersetzt das in die technische Konfiguration. Wer will, kann die Konfiguration anschließend manuell nachjustieren – aber für die allermeisten Anwendungsfälle reicht der Dialog.
          </p>

          <h2 id="was-einen-guten-gpt-ausmacht">Was einen guten GPT ausmacht</h2>

          <p>
            Ich sehe in Unternehmen regelmäßig zwei Extreme. Das eine: GPTs ohne klare Anweisungen, die im Grunde ein umbenannter Standard-Chat sind und keinen erkennbaren Vorteil bieten. Das andere: GPTs mit seitenweisen Anweisungen, die so überfrachtet sind, dass sie sich in Widersprüchen verheddern und schlechtere Ergebnisse liefern als der normale Chat.
          </p>

          <p>
            Ein guter Custom GPT hat präzise, aber knappe Anweisungen. Er weiß, für wen er arbeitet („Du unterstützt Controller bei der Quartalsberichterstattung“), wie er antworten soll („Formell, auf Deutsch, mit Quellenangaben“) und was er nicht tun soll („Keine Empfehlungen zu Personalentscheidungen“). Dazu kommen ein bis fünf Dokumente als Wissensbasis: die relevanten Richtlinien, Templates oder Referenzmaterialien. Nicht mehr. Wer zwanzig Dokumente hochlädt, verdünnt die Relevanz, statt sie zu erhöhen.
          </p>

          <p>
            Der häufigste Fehler: Unternehmen bauen einen Mega-GPT, der alles können soll. Besser sind spezialisierte GPTs für klar abgegrenzte Aufgaben. Ein GPT für das Onboarding neuer Mitarbeiter, einer für die Angebotserstellung, einer für die interne Kommunikation. Je enger der Fokus, desto besser die Ergebnisse.
          </p>

          <h2 id="actions-die-haende-des-gpt">Actions: Die Hände des GPT</h2>

          <p>
            Custom GPTs können nicht nur antworten, sondern auch handeln. Dafür gibt es Actions: Schnittstellen, über die ein GPT externe Dienste aufruft. Im einfachsten Fall ist das eine API, die Daten liefert – etwa aktuelle Wechselkurse, Wetterdaten oder den Status einer Lieferung. Im komplexeren Fall kann ein GPT Daten in ein CRM schreiben, eine E-Mail versenden oder einen Kalendereintrag anlegen.
          </p>

          <p>
            Für die Einrichtung von Actions braucht man eine OpenAPI-Spezifikation – eine technische Beschreibung der Schnittstelle, die man ansprechen will. Das klingt abschreckend, ist aber für viele populäre Dienste bereits vorbereitet. Und selbst wenn nicht: ChatGPT selbst kann bei der Erstellung der Spezifikation helfen, wenn man ihm die API-Dokumentation gibt. Trotzdem ist das der Punkt, an dem die IT-Abteilung ins Spiel kommt – nicht als Bremse, sondern als Partner, der sicherstellt, dass die Anbindung sicher und stabil läuft.
          </p>

          <p>
            Ein ehrliches Wort dazu: Actions sind mächtig, aber sie haben ihre Tücken. Die Fehlersuche, wenn ein API-Call nicht funktioniert, erfordert technisches Verständnis. Und die Frage, welche externen Systeme ein GPT ansprechen darf, ist eine Governance-Entscheidung, die nicht jeder Mitarbeiter allein treffen sollte.
          </p>

          <h2 id="connectoren-und-apps">Connectoren und Apps</h2>

          <p>
            Seit Ende 2025 hat OpenAI die bisherigen Connectoren in „Apps“ umbenannt und das System vereinheitlicht. Der Unterschied zu Actions: Apps sind vorgefertigte Integrationen, die von OpenAI oder Drittanbietern bereitgestellt werden und die man mit wenigen Klicks aktiviert. OneDrive, SharePoint, Outlook, Google Drive, Slack, Notion, HubSpot, GitHub – das sind keine selbstgebauten Schnittstellen, sondern fertige Verbindungen, die sofort funktionieren.
          </p>

          <p>
            Für die meisten Unternehmens-Use-Cases sind Apps der schnellere Weg, weil sie keinen technischen Aufbau erfordern. Wer seinen SharePoint mit ChatGPT verbindet, muss keine API-Spezifikation schreiben. Man authentifiziert sich mit seinem Microsoft-Account, und ChatGPT kann auf die freigegebenen Dateien zugreifen. Die Apps respektieren dabei die bestehenden Berechtigungen: Wer im SharePoint keinen Zugriff auf einen Ordner hat, hat ihn auch über ChatGPT nicht.
          </p>

          <p>
            Das Zusammenspiel wird interessant, wenn man Apps und Custom GPTs kombiniert. Ein Custom GPT für das Projektmanagement, der auf den SharePoint-Projektordner zugreifen kann und gleichzeitig die internen Reporting-Richtlinien als Wissensbasis hat – das ist kein Zukunftsszenario, sondern etwas, das man heute Nachmittag aufsetzen kann.
          </p>

          <h2 id="skills-der-naechste-schritt">Skills: Der nächste Schritt</h2>

          <p>
            OpenAI arbeitet unter dem internen Projektnamen „Hazelnut“ an einem Feature namens Skills. Die Idee: Statt einen ganzen GPT zu konfigurieren, bringt man ChatGPT einzelne Fähigkeiten bei, die dann in jedem Chat verfügbar sind. Ein Skill könnte sein: „Schreibe E-Mails im Stil unserer Unternehmenskommunikation.“ Oder: „Analysiere Tabellen nach unserem Standard-Reporting-Format.“
          </p>

          <p>
            Der Unterschied zu Custom GPTs: Skills sind modular. Man muss nicht einen separaten GPT öffnen, um eine bestimmte Fähigkeit zu nutzen. Stattdessen aktiviert man Skills wie Plugins, die dann im normalen Chat verfügbar sind. Das löst ein echtes Problem, denn viele Teams haben irgendwann fünfzehn Custom GPTs und wissen nicht mehr, welchen sie für welche Aufgabe öffnen sollen.
          </p>

          <p>
            Ob und wann Skills den Weg in die stabile Version finden, ist zum Zeitpunkt dieses Artikels noch nicht bestätigt. Aber das Konzept zeigt, wohin die Reise geht: ChatGPT wird von einem allgemeinen Assistenten zu einer anpassbaren Arbeitsplattform, die sich dem Nutzer und seinem Arbeitsbereich angleicht.
          </p>

          <h2 id="was-das-fuer-teams-bedeutet">Was das für Teams bedeutet</h2>

          <p>
            Die meisten Teams, die ich betreue, stehen an einem ähnlichen Punkt: Sie haben ChatGPT ausprobiert, ein paar Leute nutzen es regelmäßig, aber die Nutzung bleibt oberflächlich. Die Prompts sind ad hoc, jeder erfindet das Rad neu, und das institutionelle Wissen über gute Nutzungsmuster verbreitet sich nicht.
          </p>

          <p>
            Custom GPTs sind der Hebel, um von individueller Nutzung zu einer teamweiten Arbeitsweise zu kommen. Wenn die Abteilung einen GPT für das Quartalsreporting hat, muss nicht jeder Controller seinen eigenen Prompt entwickeln. Wenn der Vertrieb einen GPT für Angebotsentwürfe nutzt, sind die Ergebnisse konsistenter, als wenn jeder frei formuliert. Und wenn die IT die relevanten Apps und Actions freigibt, können diese GPTs auf aktuelle Daten zugreifen, statt nur auf hochgeladene Dokumente.
          </p>

          <p>
            Die Kompetenz, die hier gefragt ist, lässt sich in einem Satz zusammenfassen: einem KI-System präzise beibringen, was es tun und wissen soll. Ob das dann Custom GPT, Skill oder in zwei Jahren etwas ganz anderes heißt, ist zweitrangig. Wer diese Fähigkeit beherrscht, wird jede neue Entwicklung in wenigen Minuten adaptieren. Wer sie nicht hat, wird auch mit dem besten Feature nur generische Ergebnisse bekommen.
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
            <h3 className="text-2xl font-bold mb-3">Custom GPTs für Ihr Team aufbauen</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sie möchten, dass Ihr Team nicht nur ChatGPT nutzt, sondern eigene spezialisierte Assistenten für den Arbeitsalltag baut?
              In unseren Workshops lernen Ihre Mitarbeitenden, Custom GPTs zu erstellen, mit Unternehmenswissen auszustatten
              und sicher mit Connectoren zu verbinden.
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

export default ChatgptCustomGptsUndSkills;
