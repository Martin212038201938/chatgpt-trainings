import ContentLayout from "@/components/ContentLayout";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, XCircle, Brain, Shield, Search, FileText, Users, Zap, Linkedin, Mail } from "lucide-react";
import { getAuthor, getAuthorSchemaMarkup } from "@/data/authors";
import { generateSchemaIds, generateWissenBreadcrumbItems } from "@/lib/schema";
import { TrustBadge } from "@/components/TrustBadge";

const SLUG = "ki-halluzinationen-vermeiden";
const PAGE_TITLE = "ChatGPT-Halluzinationen verstehen und verlässlich damit umgehen";

const KiHalluzinationenVermeiden = () => {
  const martinLang = getAuthor('martin-lang')!;

  const ids = generateSchemaIds(SLUG, 'wissen');
  const pageUrl = `https://chatgpt-trainings.de/wissen/${SLUG}`;
  const breadcrumbItems = generateWissenBreadcrumbItems(PAGE_TITLE, pageUrl);

  const tableOfContents = [
    { id: "warum-chatgpt-halluziniert", title: "Warum ChatGPT halluziniert – die technische Ursache", level: 2 },
    { id: "chatgpt-fehlertypen", title: "Die 5 häufigsten ChatGPT-Fehlertypen in der Praxis", level: 2 },
    { id: "erkennen", title: "Halluzinationen erkennen: Warnsignale im Output", level: 2 },
    { id: "prompting", title: "Prompting-Strategien für verlässlichere Ergebnisse", level: 2 },
    { id: "chatgpt-prueft-chatgpt", title: "ChatGPT prüft ChatGPT: Der Self-Review-Workflow", level: 2 },
    { id: "team-workflows", title: "Verlässlichkeits-Workflows für Unternehmensteams", level: 2 },
    { id: "risikoklassen", title: "Wann ist Prüfung Pflicht? Risikoklassen im Unternehmensalltag", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 }
  ];

  const faqs = [
    {
      name: "Wie erkenne ich eine ChatGPT-Halluzination schnell?",
      answer: 'Drei verlässliche Warnsignale: erstens überraschend präzise Zahlen oder Daten ohne Quellenangabe (z. B. exakte Prozentwerte aus Studien, die ChatGPT nicht kennen kann); zweitens URLs oder Zitate, die bei einfacher Suche nicht existieren; drittens Antworten, die Ihren Wunsch bestätigen ohne Gegenargumente zu nennen. Ein schneller Test: Fragen Sie ChatGPT direkt „Welche Quelle hast du für diese Aussage?" – wenn es keine belastbare Quelle nennen kann, ist Skepsis angebracht.'
    },
    {
      name: "Kann man ChatGPT so einstellen, dass es nicht mehr halluziniert?",
      answer: "Nein – Halluzinationen sind eine strukturelle Eigenschaft aller Sprachmodelle, kein Konfigurationsfehler. Was Sie durch gutes Prompting und DSGVO-konforme Unternehmensrichtlinien erreichen können: die Fehlerrate erheblich reduzieren. Konkret hilft: Eigene Dokumente als Kontext mitgeben (statt ChatGPT frei generieren zu lassen), explizit nach Belegen fragen, und Antworten auf Ihren definierten Wissensrahmen einschränken. Unser ChatGPT-Training zeigt Teams, wie sie das in ihren Alltagsworkflows umsetzen."
    },
    {
      name: "Ist ChatGPT mit Web-Suche verlässlicher als ohne?",
      answer: "Grundsätzlich ja – wenn ChatGPT die Websuche tatsächlich aktiviert und auf aktuelle Seiten zugreift, ist die Halluzinationsrate bei Faktenfragen erheblich geringer. Aber: ChatGPT zeigt nicht immer an, ob es eine Suchanfrage gestellt hat. Und selbst mit Suche kann es Quellen falsch zusammenfassen. Unser Empfehlung: Bei kritischen Fakten immer die angegebene Quelle selbst öffnen und überprüfen – auch wenn ChatGPT einen Link mitliefert."
    },
    {
      name: "Wie schulen wir Mitarbeitende, ChatGPT-Output kritisch zu prüfen?",
      answer: "Das geht am schnellsten durch ein konkretes Trainingsformat: Mitarbeitende lernen anhand realer Beispiele aus dem eigenen Arbeitsbereich, wo ChatGPT typischerweise Fehler macht – und wie sie das erkennen. Risikoklassen nach Konsequenz (interner Entwurf vs. Kundenpräsentation vs. Vertragstext) helfen dabei, proportional zu prüfen. In unseren ChatGPT-Schulungen für Unternehmen ist Halluzinationssensibilisierung fester Bestandteil des Programms."
    },
    {
      name: "Wie hängen ChatGPT-Halluzinationen und DSGVO zusammen?",
      answer: "Halluzinationen können DSGVO-Risiken erzeugen, wenn ChatGPT falsche Informationen über reale Personen generiert. Das klassische Szenario: ChatGPT erfindet Details zu einer Person (Funktion, Zitate, Handlungen), die falsch sind. Werden solche Ausgaben unkritisch in Dokumente übernommen, die dann verbreitet werden, kann das rechtliche Konsequenzen haben. Eine klare Unternehmensrichtlinie – was darf in ChatGPT eingegeben werden, was muss geprüft werden – reduziert dieses Risiko. Wir beraten Unternehmen auch zur DSGVO-konformen ChatGPT-Nutzung."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": ids.article,
        "headline": PAGE_TITLE,
        "description": "Wie ChatGPT-Halluzinationen entstehen, wie man die 5 häufigsten Fehlertypen erkennt, und welche Prompting-Strategien und Team-Workflows Fehler im Unternehmensalltag verlässlich reduzieren.",
        "author": getAuthorSchemaMarkup(martinLang),
        "publisher": {
          "@id": "https://chatgpt-trainings.de/#organization"
        },
        "datePublished": "2026-02-15",
        "dateModified": "2026-04-03",
        "keywords": [
          "ChatGPT Halluzinationen",
          "ChatGPT Fehler vermeiden",
          "ChatGPT verlässlich",
          "ChatGPT Qualitätssicherung",
          "ChatGPT Schulung DSGVO konform",
          "ChatGPT Unternehmen Risiken"
        ],
        "articleSection": "ChatGPT Sicherheit & Qualität",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": pageUrl
        }
      },
      {
        "@type": "FAQPage",
        "@id": ids.faq,
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.name,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": ids.breadcrumb,
        "itemListElement": breadcrumbItems.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="ChatGPT-Halluzinationen verstehen und im Unternehmensalltag verlässlich damit umgehen"
        description="Wie ChatGPT-Halluzinationen entstehen, welche 5 Fehlertypen es gibt, und welche Prompting-Strategien und Team-Workflows Fehler verlässlich reduzieren. Inkl. DSGVO-Hinweise."
        keywords={[
          "ChatGPT Halluzinationen vermeiden",
          "ChatGPT Fehler erkennen",
          "ChatGPT Qualitätssicherung Unternehmen",
          "ChatGPT DSGVO konform",
          "ChatGPT Schulung DSGVO konform",
          "ChatGPT verlässlich nutzen"
        ]}
        canonicalUrl={pageUrl}
        schema={schema}
        publishedTime="2026-02-15"
        modifiedTime="2026-04-03"
      />

      <ContentLayout
        breadcrumbs={[
          { label: "Wissen", href: "/wissen" },
          { label: "ChatGPT-Halluzinationen", href: `/wissen/${SLUG}` }
        ]}
        title="ChatGPT-Halluzinationen verstehen und verlässlich damit umgehen"
        description="Wie ChatGPT-Halluzinationen entstehen, welche 5 Fehlertypen im Unternehmensalltag auftreten – und was Teams tun können, um verlässlich damit umzugehen."
        lastUpdated="03. April 2026"
        authorName="Martin Lang"
        tableOfContents={tableOfContents}
      >
        {/* Schnellantwort */}
        <Card className="border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-orange-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              Das Wichtigste vorab
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed">
              ChatGPT halluziniert nicht, weil es lügt – sondern weil es{" "}
              <strong>statistische Sprachwahrscheinlichkeiten</strong> berechnet, keine Fakten prüft.
              Das lässt sich nicht abstellen, aber mit den richtigen Techniken{" "}
              <strong>auf ein beherrschbares Niveau reduzieren</strong>. Entscheidend: Wissen, bei welchen
              Aufgabentypen ChatGPT besonders fehleranfällig ist – und einen{" "}
              <strong>proportionalen Prüfprozess</strong> im Team etablieren.
            </p>
          </CardContent>
        </Card>

        {/* Warum ChatGPT halluziniert */}
        <section id="warum-chatgpt-halluziniert">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-amber-500">
            Warum ChatGPT halluziniert – die technische Ursache
          </h2>

          <p className="mb-4">
            ChatGPT ist kein Datenbank-System, das Fakten abruft. Es ist ein Sprachmodell, das auf Basis
            von Milliarden Trainingstexten lernt, welches Wort statistisch wahrscheinlich auf ein anderes
            folgt. Das Modell „weiß" Dinge nicht – es berechnet, was eine plausible Antwort wäre.
          </p>

          <p className="mb-6">
            Wenn ChatGPT gefragt wird „Was kostet ein mittlerer ChatGPT-Enterprise-Vertrag?", prüft es
            keine aktuelle Preisliste. Es generiert eine Antwort, die auf Basis seiner Trainingsdaten
            plausibel klingt. Liegt die Realität außerhalb der Trainingsdaten – oder hat sich etwas
            geändert – entsteht eine Halluzination, ohne dass das Modell daran „zweifelt".
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-6">
            <Card className="border-t-4 border-t-amber-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Brain className="w-4 h-4 text-amber-600" />
                  Kein Faktenspeicher
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  ChatGPT speichert keine verifizierten Fakten – es lernt Sprachmuster. Präzise klingende
                  Zahlen oder Namen können frei generiert sein.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  Kein Zweifel-Signal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  ChatGPT erkennt meist nicht, wenn es falsch liegt. Es formuliert Halluzinationen
                  genauso selbstsicher wie korrekte Antworten.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-600" />
                  Knowledge Cutoff
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  ChatGPT ohne Web-Suche kennt keine Ereignisse nach seinem Trainingsdatensatz.
                  Aktuelle Informationen werden dennoch plausibel klingend generiert.
                </p>
              </CardContent>
            </Card>
          </div>

          <blockquote className="border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/30 p-6 rounded-r-lg italic">
            Das Tückische an ChatGPT-Halluzinationen ist nicht, dass sie offensichtlich falsch klingen –
            sondern dass sie überzeugend richtig klingen. Ein Sprachmodell, das gut darin ist,
            plausiblen Text zu erzeugen, ist auch gut darin, plausibel falsch zu sein.
          </blockquote>
        </section>

        {/* 5 Fehlertypen */}
        <section id="chatgpt-fehlertypen">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-red-500">
            Die 5 häufigsten ChatGPT-Fehlertypen in der Praxis
          </h2>

          <p className="mb-6">
            In unseren Unternehmens-Trainings sehen wir immer wieder dieselben Fehlerkategorien.
            Wer diese kennt, kann gezielt gegensteuern.
          </p>

          <div className="space-y-4">
            {[
              {
                nr: "1",
                typ: "Erfundene Quellenangaben und URLs",
                häufigkeit: "Sehr häufig",
                häufigkeitColor: "red",
                beschreibung: "ChatGPT gibt Studien, Artikel oder URLs an, die nicht existieren. Das Modell \"weiß\", dass Quellenangaben zu guten Antworten gehören – und generiert sie, wenn keine realen vorhanden sind.",
                warnsignal: "URL direkt aufrufen oder Titel in Suchmaschine eingeben. Nicht gefunden? Halluzination.",
                beispiel: "\"Laut einer Studie der Uni München (2024) zeigen 73% der Unternehmen...\" – Studie existiert nicht."
              },
              {
                nr: "2",
                typ: "Falsche Fakten mit korrektem Drumherum",
                häufigkeit: "Häufig",
                häufigkeitColor: "orange",
                beschreibung: "Die Antwort ist strukturell korrekt und klingt kompetent – aber ein zentrales Datum, eine Zahl oder ein Name ist falsch. Besonders gefährlich, weil der Kontext das Vertrauen erhöht.",
                warnsignal: "Kritische Zahlen und Eigennamen separat verifizieren, besonders wenn Sie die Antwort extern weitergeben.",
                beispiel: "Korrekte Beschreibung eines Gesetzes, aber mit falschem Inkrafttreten-Datum."
              },
              {
                nr: "3",
                typ: "Veraltete Information als aktuell präsentiert",
                häufigkeit: "Häufig",
                häufigkeitColor: "orange",
                beschreibung: "ChatGPT ohne Websuche kennt keinen Zeitpunkt. Es präsentiert seinen Trainingsstand als gegenwärtig, auch wenn sich Preise, Gesetze, Produktversionen oder Marktlagen geändert haben.",
                warnsignal: "Immer fragen: \"Wann wurden diese Informationen zuletzt aktualisiert?\" Oder Websuche explizit aktivieren.",
                beispiel: "Aktuelle ChatGPT-Preise, Steuersätze, Produktspezifikationen aus 2023 als \"aktuell\" präsentiert."
              },
              {
                nr: "4",
                typ: "Falsche Informationen über reale Personen",
                häufigkeit: "Mittel",
                häufigkeitColor: "amber",
                beschreibung: "ChatGPT erfindet Details zu realen Personen: Zitate, Positionen, Handlungen oder biografische Daten. Das ist nicht nur faktisch falsch, sondern potenziell rechtlich problematisch.",
                warnsignal: "Jede Aussage über reale, namentlich genannte Personen ist zu verifizieren – besonders vor externer Verwendung.",
                beispiel: "Fiktives Zitat einem echten Manager zugeschrieben, der das nie gesagt hat."
              },
              {
                nr: "5",
                typ: "Bestätigungsfehler (Sycophancy)",
                häufigkeit: "Mittel",
                häufigkeitColor: "amber",
                beschreibung: "ChatGPT bestätigt tendenziell, was der Fragende impliziert. Wenn Sie nach Belegen für Ihre These suchen, findet ChatGPT Belege – auch wenn die Gegenargumente stärker wären.",
                warnsignal: "Explizit nach Gegenargumenten fragen: \"Warum könnte mein Ansatz falsch sein?\" oder \"Was spricht dagegen?\"",
                beispiel: "\"Stimmt es, dass Methode X besser ist als Y?\" → ChatGPT bestätigt X, ohne die Schwächen zu nennen."
              }
            ].map((item, idx) => (
              <Card key={idx} className={`border-l-4 border-l-${item.häufigkeitColor}-500`}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-start justify-between gap-2">
                    <span className="text-base">#{item.nr} {item.typ}</span>
                    <span className={`text-xs px-2 py-1 rounded-full bg-${item.häufigkeitColor}-100 dark:bg-${item.häufigkeitColor}-900 text-${item.häufigkeitColor}-700 dark:text-${item.häufigkeitColor}-300 flex-shrink-0`}>
                      {item.häufigkeit}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm">{item.beschreibung}</p>
                  <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded text-xs text-muted-foreground italic">
                    Beispiel: {item.beispiel}
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-green-700 dark:text-green-400">{item.warnsignal}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Erkennen */}
        <section id="erkennen">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-blue-500">
            Halluzinationen erkennen: Warnsignale im Output
          </h2>

          <p className="mb-6">
            Nicht jede ChatGPT-Antwort braucht aufwändige Verifikation. Folgende Warnsignale erhöhen
            das Prüfbedürfnis erheblich:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { signal: "Exakte Prozentzahlen ohne Quelle", erklärung: "\"74,3% der Unternehmen...\" klingt präzise – aber woher? Ohne benannte Studie ist das ein rotes Flag." },
              { signal: "Namen von Personen oder Firmen", erklärung: "ChatGPT kombiniert Namen mit erdachten Details. Vor der externen Verwendung immer verifizieren." },
              { signal: "Gesetzliche oder regulatorische Aussagen", erklärung: "Recht ändert sich, und ChatGPT kennt die aktuelle Rechtslage nicht zuverlässig." },
              { signal: "Konkrete Preisangaben", erklärung: "Preise ändern sich. Jede Zahl sollte direkt beim Anbieter geprüft werden." },
              { signal: "Zitate und direkte Rede", erklärung: "\"Wie [Person] sagte: '...'\" – solche Zitate sind hochgradig halluzinationsanfällig." },
              { signal: "Technische Spezifikationen", erklärung: "Versionsnummern, API-Parameter oder Systemanforderungen können veraltet oder frei erfunden sein." }
            ].map((item, idx) => (
              <Card key={idx} className="border-l-4 border-l-red-400">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">{item.signal}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.erklärung}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Prompting */}
        <section id="prompting">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-green-500">
            Prompting-Strategien für verlässlichere Ergebnisse
          </h2>

          <p className="mb-6">
            Die wichtigste Erkenntnis aus unseren ChatGPT-Trainings: Halluzinationsrate und Prompt-Qualität
            hängen direkt zusammen. Je mehr Kontext und Einschränkungen Sie geben, desto weniger muss
            ChatGPT selbst "erfinden".
          </p>

          <div className="space-y-4">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <FileText className="w-5 h-5 text-green-600" />
                  Eigene Dokumente als Wissensgrundlage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">
                  Statt ChatGPT frei generieren zu lassen: Eigene Dokumente hochladen (Berichte, Verträge,
                  Datensätze) und ChatGPT darauf referenzieren lassen. So kann ChatGPT nicht halluzinieren,
                  was ohnehin im Dokument steht.
                </p>
                <div className="p-2 bg-green-50 dark:bg-green-950/30 rounded text-xs font-mono">
                  ✓ "Basiere deine Antwort ausschließlich auf dem hochgeladenen Dokument. Wenn die
                  Information dort nicht steht, sage es explizit."
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Search className="w-5 h-5 text-blue-600" />
                  Websuche für aktuelle Fakten aktivieren
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">
                  Bei aktuellen Preisen, Marktdaten oder rechtlichen Informationen: Explizit die
                  Web-Suchfunktion von ChatGPT einfordern. Auch dann: Die Quell-URL direkt aufrufen
                  und prüfen.
                </p>
                <div className="p-2 bg-blue-50 dark:bg-blue-950/30 rounded text-xs font-mono">
                  ✓ "Suche aktuell im Web nach den ChatGPT-Enterprise-Preisen und nenne mir die
                  Quell-URL deiner Antwort."
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <AlertTriangle className="w-5 h-5 text-purple-600" />
                  Unsicherheiten explizit einfordern
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">
                  ChatGPT verschweigt seine Unsicherheit standardmäßig. Wenn Sie explizit danach fragen,
                  werden Lücken sichtbar.
                </p>
                <div className="p-2 bg-purple-50 dark:bg-purple-950/30 rounded text-xs font-mono">
                  ✓ "Markiere in deiner Antwort, welche Aussagen du mit hoher Sicherheit machst und
                  welche du nur schätzst oder nicht verifizieren konntest."
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Brain className="w-5 h-5 text-orange-600" />
                  Gegenargumente aktiv einfordern
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">
                  Gegen den Bestätigungsfehler: Aktiv nach Schwächen, Gegenargumenten oder
                  alternativen Sichtweisen fragen.
                </p>
                <div className="p-2 bg-orange-50 dark:bg-orange-950/30 rounded text-xs font-mono">
                  ✓ "Ich neige zu Ansatz X. Erkläre mir, wo dieser Ansatz falsch oder riskant sein
                  könnte. Sei konkret, nicht diplomatisch."
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Self-Review */}
        <section id="chatgpt-prueft-chatgpt">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-cyan-500">
            ChatGPT prüft ChatGPT: Der Self-Review-Workflow
          </h2>

          <p className="mb-4">
            Eines der wirkungsvollsten Werkzeuge im Unternehmenseinsatz: ChatGPT nutzen, um
            ChatGPT-Output zu prüfen. Das klingt widersprüchlich – funktioniert aber gut, wenn man
            einen entscheidenden Punkt beachtet: den Prüf-Prompt anders formulieren als den Erstellungs-Prompt.
          </p>

          <Card className="border-2 border-cyan-500/30 bg-cyan-50/20 dark:bg-cyan-950/10 my-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                Der 3-Schritt Self-Review
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <div>
                    <p className="font-medium text-sm">Text erstellen lassen</p>
                    <p className="text-xs text-muted-foreground mt-1">ChatGPT schreibt den Entwurf mit normalem Prompt</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <div>
                    <p className="font-medium text-sm">Neue Konversation öffnen</p>
                    <p className="text-xs text-muted-foreground mt-1">Kein Kontext aus dem Erstellungs-Chat – das Modell soll unvoreingenommen prüfen</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <div>
                    <p className="font-medium text-sm">Review-Prompt einsetzen</p>
                    <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono mt-2">
                      "Hier ist ein Text, den ich veröffentlichen möchte: [Text]. Prüfe kritisch: Welche
                      Faktenaussagen sind nicht belegbar? Wo fehlen wichtige Einschränkungen oder Gegenargumente?
                      Markiere konkrete Stellen – keine allgemeinen Kommentare."
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground">
            Wichtig: Das Modell prüft keinen Fakten-Datenbank-Check. Es analysiert, ob Aussagen
            sprachlich plausibel belegt sind oder ungesichert klingen. Das ist ein anderes Ziel –
            und für redaktionelle und interne Texte sehr wirkungsvoll.
          </p>
        </section>

        {/* Team-Workflows */}
        <section id="team-workflows">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-purple-500">
            Verlässlichkeits-Workflows für Unternehmensteams
          </h2>

          <p className="mb-4">
            Einzelne Techniken helfen wenig, wenn das Team keinen gemeinsamen Standard hat. In unseren
            ChatGPT-Schulungen für Unternehmen entwickeln wir mit Teams praxistaugliche Workflows –
            abhängig von Branche und Risikobereitschaft.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Users className="w-5 h-5 text-purple-600" />
                  Was im Team festgelegt sein sollte
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Welche Dokumenttypen dürfen direkt mit ChatGPT erstellt werden?</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Welche Ausgaben müssen vor externer Nutzung verifiziert werden?</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Welche Informationen dürfen in ChatGPT eingegeben werden? (DSGVO)</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Wer ist für die Endkontrolle bei externen Dokumenten verantwortlich?</span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Shield className="w-5 h-5 text-blue-600" />
                  DSGVO-Aspekt: Was ChatGPT nicht eingeben sollte
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-muted-foreground mb-2">
                  Standard-ChatGPT (Free/Plus) kann Nutzerdaten für Trainings verwenden.
                  Folgendes sollte nicht unverschlüsselt eingegeben werden:
                </p>
                <p className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Namen + Kontaktdaten realer Kunden oder Mitarbeitender</span>
                </p>
                <p className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Vertrauliche Vertrags- oder Finanzdokumente</span>
                </p>
                <p className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Personenbezogene medizinische oder HR-Daten</span>
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  ChatGPT Enterprise und ChatGPT Team bieten bessere Datenschutzgarantien –
                  wir beraten Sie zur richtigen Lizenzwahl.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Risikoklassen */}
        <section id="risikoklassen">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-slate-500">
            Wann ist Prüfung Pflicht? Risikoklassen im Unternehmensalltag
          </h2>

          <p className="mb-6">
            Nicht jede ChatGPT-Ausgabe braucht dieselbe Prüfintensität. Proportionaler Aufwand
            schützt dort, wo es wichtig ist – ohne die Produktivität zu bremsen.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="text-left p-3 font-semibold">Risikoklasse</th>
                  <th className="text-left p-3 font-semibold">Beispiele</th>
                  <th className="text-left p-3 font-semibold">Empfohlene Prüfung</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 font-medium">
                      Niedrig
                    </span>
                  </td>
                  <td className="p-3 text-muted-foreground">Brainstorming, interne Entwürfe, Meeting-Agenden, erste Zusammenfassungen</td>
                  <td className="p-3">Flüchtiger Lesecheck – grobe Fehler reichen zu erkennen</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3">
                    <span className="px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 font-medium">
                      Mittel
                    </span>
                  </td>
                  <td className="p-3 text-muted-foreground">Newsletter, Blog-Artikel, Präsentationen, Stellenanzeigen</td>
                  <td className="p-3">Fachlicher Check durch zuständige Person; kritische Zahlen verifizieren</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3">
                    <span className="px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 font-medium">
                      Hoch
                    </span>
                  </td>
                  <td className="p-3 text-muted-foreground">Kundenangebote, Pressemitteilungen, technische Dokumentationen</td>
                  <td className="p-3">Vollständige fachliche Prüfung + Quellenverifikation kritischer Fakten</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 font-medium">
                      Kritisch
                    </span>
                  </td>
                  <td className="p-3 text-muted-foreground">Vertragsklauseln, Rechtsgutachten, medizinische/finanzielle Empfehlungen</td>
                  <td className="p-3">Fachexperte (Anwalt, Steuerberater etc.) prüft; ChatGPT nur als Vorentwurf</td>
                </tr>
              </tbody>
            </table>
          </div>

          <TrustBadge className="mt-8" />
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-slate-500">
            Häufig gestellte Fragen
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-base font-semibold">{faq.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Autor */}
        {martinLang && (
          <Card className="border-2 border-orange-500/20 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/20 dark:to-amber-950/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <img
                  src={martinLang.image}
                  alt={martinLang.name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-lg">{martinLang.name}</p>
                  <p className="text-sm text-muted-foreground mb-2">{martinLang.role}</p>
                  <p className="text-sm leading-relaxed">{martinLang.bio}</p>
                  <div className="flex gap-3 mt-3">
                    {martinLang.linkedin && (
                      <a
                        href={martinLang.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-blue-600 hover:underline"
                      >
                        <Linkedin className="w-3 h-3" /> LinkedIn
                      </a>
                    )}
                    <a
                      href="mailto:Info@ChatGPT-Trainings.de"
                      className="flex items-center gap-1 text-xs text-orange-600 hover:underline"
                    >
                      <Mail className="w-3 h-3" /> Kontakt
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </ContentLayout>
    </>
  );
};

export default KiHalluzinationenVermeiden;
