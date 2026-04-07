import ContentLayout from "@/components/ContentLayout";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp, TrendingDown, Building2, Target, CheckCircle2, XCircle,
  Users, Euro, Clock, Brain, Lightbulb, AlertTriangle, BarChart3, Linkedin, Mail
} from "lucide-react";
import { getAuthor, getAuthorSchemaMarkup } from "@/data/authors";
import { generateSchemaIds, generateWissenBreadcrumbItems } from "@/lib/schema";
import { TrustBadge } from "@/components/TrustBadge";

const SLUG = "ki-realitaet-beratungsfirmen-2026";
const PAGE_TITLE = "ChatGPT Einführung im Mittelstand: Was wirklich funktioniert – und was nicht";

const KiRealitaet2026 = () => {
  const martinLang = getAuthor('martin-lang')!;

  const ids = generateSchemaIds(SLUG, 'wissen');
  const pageUrl = `https://chatgpt-trainings.de/wissen/${SLUG}`;
  const breadcrumbItems = generateWissenBreadcrumbItems(PAGE_TITLE, pageUrl);

  const tableOfContents = [
    { id: "status-quo", title: "ChatGPT im Mittelstand: Der Status quo 2026", level: 2 },
    { id: "warum-scheitern", title: "Warum viele ChatGPT-Einführungen scheitern", level: 2 },
    { id: "roi", title: "ROI und Amortisation: Was man realistisch erwarten kann", level: 2 },
    { id: "einfuehrung-schritt", title: "ChatGPT-Einführung Schritt für Schritt", level: 2 },
    { id: "quick-wins", title: "Quick Wins: Wo ChatGPT sofort Wirkung zeigt", level: 2 },
    { id: "enterprise-vs-standard", title: "ChatGPT Free vs. Plus vs. Team vs. Enterprise", level: 2 },
    { id: "chatgpt-vs-copilot", title: "ChatGPT oder Microsoft 365 Copilot? Ehrliche Entscheidungshilfe", level: 2 },
    { id: "erfolgsfaktoren", title: "Was erfolgreiche Einführungen gemeinsam haben", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
    { id: "quellen", title: "Studien und Quellen", level: 2 }
  ];

  const faqs = [
    {
      name: "Wie führe ich ChatGPT in einem mittelständischen Unternehmen ein?",
      answer: "Der bewährteste Ansatz: Klein anfangen mit einer Pilotgruppe von 5–10 motivierten Mitarbeitenden aus verschiedenen Abteilungen. Diese lernen ChatGPT kennen, entwickeln erste Use Cases und werden zu internen Multiplikatoren. Erst wenn erste Erfolge dokumentiert sind, folgt der breite Rollout. Der häufigste Fehler: flächendeckende Einführung ohne Vorbereitung – das erzeugt Frustration statt Produktivitätsgewinn. chatgpt-trainings.de begleitet Mittelständler durch genau diesen Prozess."
    },
    {
      name: "Wann sehen wir erste Ergebnisse nach einer ChatGPT-Einführung?",
      answer: "Quick Wins in Textarbeit (E-Mails, Protokolle, Zusammenfassungen) sind nach einem guten Einstiegstraining innerhalb von Wochen spürbar. Tiefergehende Prozessoptimierungen, bei denen ChatGPT in Workflows integriert wird, brauchen 2–4 Monate. Belastbarer ROI ist laut Deloitte-Studie typischerweise nach 12–24 Monaten messbar. Entscheidend: Was als 'Ergebnis' gilt, muss vorab definiert werden – sonst ist jede ROI-Rechnung Kaffeesatz."
    },
    {
      name: "Braucht der Mittelstand ChatGPT Enterprise oder reicht Team?",
      answer: "Für die meisten mittelständischen Unternehmen reicht ChatGPT Team (ab $25 pro Nutzer/Monat) für den Einstieg. Es bietet kein Training mit Unternehmensdaten und eigene Admin-Steuerung. ChatGPT Enterprise lohnt sich, wenn: regulatorische Anforderungen bestehen, sehr große Teams (100+ Nutzer), eigene Datensicherheits-Policy oder Custom GPT-Verwaltung auf Unternehmensebene benötigt wird. Wir helfen bei der Lizenzentscheidung."
    },
    {
      name: "Wie überzeugen wir skeptische Mitarbeitende, ChatGPT auszuprobieren?",
      answer: "Der wirksamste Weg: konkretes Zeigen statt abstraktes Erklären. In Trainings erleben Skeptiker, wie ChatGPT eine Aufgabe löst, die sie selbst gerade auf dem Schreibtisch haben – in Minuten statt Stunden. Das ist überzeugender als jede Strategie-Präsentation. Wichtig: Bedenken zu Jobsicherheit und Datenschutz ernst nehmen und mit konkreten Antworten begegnen, nicht abtun."
    },
    {
      name: "Was kostet eine professionelle ChatGPT-Einführung im Mittelstand?",
      answer: "Die Kosten setzen sich zusammen aus: ChatGPT-Lizenzen (ab ca. $30 pro Nutzer/Monat für Team), Training (Einstiegs-Workshop: ab 2.500 € für eine Gruppe; komplette Lernreise: 8.000–20.000 € je nach Teamgröße), und ggf. IT-Integration. Die Gegenrechnung: Wenn 20 Mitarbeitende täglich 30 Minuten einsparen, entspricht das bei einem durchschnittlichen Stundensatz von 60 € rund 180.000 € Jahreswert – bei guten Trainings durchaus realistisch."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": ids.article,
        "headline": PAGE_TITLE,
        "description": "Praxisleitfaden für die ChatGPT-Einführung im Mittelstand: Was funktioniert, was scheitert, welche Quick Wins realistisch sind – und was erfolgreiche von gescheiterten ChatGPT-Projekten unterscheidet.",
        "author": getAuthorSchemaMarkup(martinLang),
        "publisher": {
          "@id": "https://chatgpt-trainings.de/#organization"
        },
        "datePublished": "2026-02-02",
        "dateModified": "2026-04-07",
        "keywords": [
          "ChatGPT Einführung Mittelstand",
          "ChatGPT Unternehmen einführen",
          "ChatGPT Rollout Deutschland",
          "ChatGPT ROI Mittelstand",
          "ChatGPT Schulung Mittelstand",
          "KI Einführung Unternehmen 2026"
        ],
        "articleSection": "ChatGPT-Strategie",
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
        title="ChatGPT Einführung im Mittelstand 2026: Was wirklich funktioniert | chatgpt-trainings.de"
        description="Praxisleitfaden für ChatGPT-Einführung im Mittelstand: Quick Wins, ROI-Realität, Lizenzvergleich und warum 60% der Einführungen scheitern. Mit konkreten Schritten."
        keywords={[
          "ChatGPT Einführung Mittelstand",
          "ChatGPT Unternehmen einführen",
          "ChatGPT ROI",
          "ChatGPT Rollout",
          "KI Einführung Mittelstand 2026",
          "ChatGPT Schulung Unternehmen"
        ]}
        canonicalUrl={pageUrl}
        schema={schema}
        publishedTime="2026-02-02"
        modifiedTime="2026-04-07"
      />

      <ContentLayout
        breadcrumbs={[
          { label: "Wissen", href: "/wissen" },
          { label: "ChatGPT Einführung Mittelstand", href: `/wissen/${SLUG}` }
        ]}
        title="ChatGPT Einführung im Mittelstand: Was wirklich funktioniert – und was nicht"
        description="Ein Praxisleitfaden für Entscheider: Quick Wins, ROI-Realität, Lizenzvergleich und was erfolgreiche ChatGPT-Projekte von gescheiterten unterscheidet."
        lastUpdated="07. April 2026"
        authorName="Martin Lang"
        tableOfContents={tableOfContents}
      >
        {/* Schnellantwort */}
        <Card className="border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-indigo-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-6 h-6 text-blue-600" />
              Das Wichtigste für Entscheider
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed">
              Laut McKinsey sehen <strong>80% der Unternehmen keinen messbaren Effekt</strong> ihrer
              KI-Investitionen. Das liegt nicht am Tool – sondern an der Einführungsstrategie.
              ChatGPT-Einführungen scheitern fast immer am gleichen Muster: Lizenzen kaufen,
              kurzes Onboarding, hohe Erwartungen, schnelle Enttäuschung.{" "}
              <strong>Was funktioniert:</strong> Pilotgruppe, echte Use Cases, Training mit eigenem
              Kontext – und dann skalieren. Dieser Artikel zeigt, wie das konkret aussieht.
            </p>
          </CardContent>
        </Card>

        {/* Status Quo */}
        <section id="status-quo">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-blue-500">
            ChatGPT im Mittelstand: Der Status quo 2026
          </h2>

          <p className="mb-4">
            Das Interesse an ChatGPT im deutschen Mittelstand ist groß – die tatsächliche
            produktive Nutzung hinkt aber weit hinterher. Was die aktuellen Studien zeigen:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            {[
              { wert: "67%", label: "der deutschen KMUs testen KI-Tools", trend: "up", quelle: "Bitkom 2025" },
              { wert: "23%", label: "nutzen KI produktiv im Alltag", trend: "down", quelle: "IW Köln 2025" },
              { wert: "0,35%", label: "des Umsatzes investiert der Mittelstand in KI", trend: "down", quelle: "Horváth 2026" },
              { wert: "79%", label: "fehlen laut KPMG KI-Kompetenzen im Team", trend: "down", quelle: "KPMG 2025" }
            ].map((stat, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-blue-600">{stat.wert}</span>
                    {stat.trend === "up"
                      ? <TrendingUp className="w-5 h-5 text-green-500" />
                      : <TrendingDown className="w-5 h-5 text-red-400" />
                    }
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">Quelle: {stat.quelle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mb-4">
            Die Lücke zwischen "wir testen ChatGPT" und "wir arbeiten produktiv damit" ist das zentrale
            Problem. ChatGPT steht in vielen Unternehmen im Browser – aber meistens nutzen es nur
            einzelne Enthusiasten, während der Rest des Teams außen vor bleibt.
          </p>

          <blockquote className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/30 p-6 rounded-r-lg italic">
            Das häufigste Bild, das wir in Erstgesprächen hören: "Wir haben ChatGPT-Lizenzen, aber
            eigentlich weiß keiner so richtig, wie man das richtig nutzt." Das ist kein Einzelfall –
            das ist die Regel.
          </blockquote>
        </section>

        {/* Warum scheitern */}
        <section id="warum-scheitern">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-red-500">
            Warum viele ChatGPT-Einführungen scheitern
          </h2>

          <p className="mb-6">
            Laut BCG ist der Anteil abgebrochener KI-Projekte von 17% (2023) auf 42% (2025) gestiegen.
            Die Gründe sind fast immer dieselben:
          </p>

          <div className="space-y-4">
            {[
              {
                grund: "\"Hier sind eure Lizenzen\" ohne Training",
                erklärung: "ChatGPT kaufen und verteilen ohne Einführung funktioniert nicht. Mitarbeitende probieren es einmal, bekommen eine enttäuschende Antwort auf eine schlecht formulierte Frage – und gehen zurück zu gewohnten Prozessen.",
                lösung: "Mindestens ein strukturierter Einführungs-Workshop mit eigenen Use Cases aus dem Alltag."
              },
              {
                grund: "Keine klaren Use Cases definiert",
                erklärung: '„Wir führen ChatGPT ein" ist kein Ziel. Ohne konkrete Aufgaben, bei denen ChatGPT eingesetzt werden soll, bleibt die Nutzung zufällig und oberflächlich.',
                lösung: "Pro Team 3–5 konkrete Anwendungsfälle definieren, bevor die Einführung beginnt."
              },
              {
                grund: "Überhöhte Erwartungen von Anfang an",
                erklärung: "Wenn das Management erwartet, dass ChatGPT sofort strategische Analysen liefert und Projekte leitet, folgt auf Begeisterung schnell Ernüchterung.",
                lösung: "Erwartungsmanagement: ChatGPT ist ein Produktivitätswerkzeug, kein autonomer Mitarbeiter."
              },
              {
                grund: "Keine Multiplkatoren im Team",
                erklärung: "Ohne interne Champions, die ChatGPT wirklich beherrschen und anderen helfen, bleibt das Wissen bei einzelnen Personen.",
                lösung: "Pilotgruppe mit 5–10 motivierten Personen aus verschiedenen Bereichen als erste Kohorte."
              },
              {
                grund: "DSGVO-Unsicherheit lähmt die Nutzung",
                erklärung: "Wenn unklar ist, was eingegeben werden darf, entscheiden sich Mitarbeitende im Zweifel für Nicht-Nutzung. Das ist das Gegenteil von Produktivität.",
                lösung: "Klare, schriftliche Richtlinie für die erlaubte ChatGPT-Nutzung – idealerweise mit Beispielen."
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-l-4 border-l-red-400">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-start gap-2 text-base">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    {item.grund}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">{item.erklärung}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-green-700 dark:text-green-400">{item.lösung}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ROI */}
        <section id="roi">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-green-500">
            ROI und Amortisation: Was man realistisch erwarten kann
          </h2>

          <p className="mb-6">
            Die Frage nach dem ROI von ChatGPT ist berechtigt – aber die ehrliche Antwort ist komplex.
            Hier sind die realistischen Zahlen und was sie bedeuten:
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-6">
            <Card className="border-t-4 border-t-green-500">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Clock className="w-5 h-5 text-green-600" />
                  Zeithorizont Quick Wins
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600 mb-1">2–6 Wochen</p>
                <p className="text-xs text-muted-foreground">
                  Nach gutem Einstiegstraining: messbare Zeitersparnis in Textarbeit, E-Mails,
                  Zusammenfassungen. Typisch: 30–60 Min. täglich pro Nutzer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  Belastbarer ROI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 mb-1">12–24 Mon.</p>
                <p className="text-xs text-muted-foreground">
                  Laut Deloitte-Studie: messbare Ergebnisse im mittleren ROI-Horizont.
                  Nur 6% berichten Amortisation unter 12 Monaten.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-purple-500">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Euro className="w-5 h-5 text-purple-600" />
                  Rechenbeispiel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-purple-600 mb-1">~180.000 €</p>
                <p className="text-xs text-muted-foreground">
                  Jahreswert wenn 20 MA täglich 30 Min. einsparen (60 €/Std.).
                  ChatGPT Team kostet diese Gruppe ~7.200 €/Jahr.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-amber-500/20 bg-amber-50/20 dark:bg-amber-950/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                Die ROI-Falle vermeiden
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Viele Unternehmen messen den ROI von ChatGPT nie – weil sie nie festgelegt haben, was
                sie messen wollen. Definieren Sie vorab: Welche Zeitaufgaben sollen schneller werden?
                Wie messen wir das? Was ist unsere Messbasis vor der Einführung? Ohne diese Baseline
                bleibt jede Erfolgsmessung Schätzung.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Einführung Schritt für Schritt */}
        <section id="einfuehrung-schritt">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-purple-500">
            ChatGPT-Einführung Schritt für Schritt
          </h2>

          <p className="mb-6">
            Das ist der Einführungspfad, den wir mit mittelständischen Unternehmen erarbeiten.
            Er ist nicht für alle gleich – aber die Grundstruktur hat sich bewährt.
          </p>

          <div className="space-y-4">
            {[
              {
                schritt: "1",
                titel: "Ziele und Use Cases definieren",
                zeitraum: "Woche 1–2",
                details: [
                  "Welche Bereiche sollen als erste ChatGPT nutzen?",
                  "Was sind 3–5 konkrete Aufgaben, die ChatGPT übernehmen oder unterstützen soll?",
                  "Was ist die Messbasis (Zeitaufwand, Qualitätscheck)?",
                  "Wer ist intern verantwortlich?"
                ],
                color: "blue"
              },
              {
                schritt: "2",
                titel: "Pilotgruppe aufbauen und schulen",
                zeitraum: "Woche 3–6",
                details: [
                  "5–10 motivierte Mitarbeitende aus relevanten Bereichen",
                  "Halbtags-Workshop: ChatGPT kennenlernen mit eigenen Use Cases",
                  "Custom Instructions einrichten und Prompting-Framework vermitteln",
                  "Wöchentliche kurze Feedback-Runde (30 Min.)"
                ],
                color: "green"
              },
              {
                schritt: "3",
                titel: "Erste Erfolge dokumentieren",
                zeitraum: "Woche 6–10",
                details: [
                  "Zeitersparnis in definierten Use Cases messen",
                  "2–3 Erfolgsgeschichten aus dem Piloten aufschreiben",
                  "Probleme und Hindernisse sammeln und lösen",
                  "Interne Multiplikatoren identifizieren"
                ],
                color: "orange"
              },
              {
                schritt: "4",
                titel: "Rollout vorbereiten",
                zeitraum: "Monat 3–4",
                details: [
                  "ChatGPT-Richtlinie für das Unternehmen erstellen (DSGVO)",
                  "Onboarding-Material aus Pilot-Erfahrungen aufbauen",
                  "Lizenzmodell für breitere Gruppe entscheiden",
                  "Weitere Trainingsrunden planen"
                ],
                color: "purple"
              },
              {
                schritt: "5",
                titel: "Skalieren und tief integrieren",
                zeitraum: "Monat 4+",
                details: [
                  "Rollout auf alle relevanten Teams",
                  "Vertiefungsworkshops für spezifische Bereiche (Vertrieb, HR, Service...)",
                  "Erste Custom GPTs oder Workflow-Integrationen bauen",
                  "ROI-Messung und Optimierungsrunde"
                ],
                color: "cyan"
              }
            ].map((item, idx) => (
              <Card key={idx} className={`border-l-4 border-l-${item.color}-500`}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full bg-${item.color}-100 dark:bg-${item.color}-900 text-${item.color}-700 dark:text-${item.color}-300 flex items-center justify-center font-bold flex-shrink-0`}>
                      {item.schritt}
                    </span>
                    <div>
                      <span className="text-base">{item.titel}</span>
                      <span className={`ml-2 text-xs text-${item.color}-600 dark:text-${item.color}-400`}>{item.zeitraum}</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {item.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className={`w-4 h-4 text-${item.color}-500 flex-shrink-0 mt-0.5`} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Wins */}
        <section id="quick-wins">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-green-500">
            Quick Wins: Wo ChatGPT sofort Wirkung zeigt
          </h2>

          <p className="mb-6">
            Diese Use Cases haben in unseren Trainings mit Mittelständlern immer sofortige
            Wirkung gezeigt – weil sie alltagsnah sind und keine technische Vorkenntnisse erfordern:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                bereich: "Textarbeit & Kommunikation",
                beispiele: [
                  "E-Mails kürzen, schärfen, übersetzen",
                  "Protokolle aus Notizen erstellen",
                  "Stellenanzeigen schreiben und testen",
                  "Kundenbriefe personalisieren"
                ],
                zeitersparnis: "30–60 Min./Tag"
              },
              {
                bereich: "Analyse & Recherche",
                beispiele: [
                  "Lange Dokumente zusammenfassen",
                  "Verträge auf kritische Punkte prüfen",
                  "Marktrecherchen strukturieren",
                  "Wettbewerbsvergleiche erstellen"
                ],
                zeitersparnis: "1–3 Std./Woche"
              },
              {
                bereich: "Präsentation & Konzepte",
                beispiele: [
                  "Foliengliederungen entwickeln",
                  "Argumentationsketten strukturieren",
                  "Business Cases vorbereiten",
                  "FAQs für neue Produkte generieren"
                ],
                zeitersparnis: "2–4 Std./Projekt"
              },
              {
                bereich: "HR & Recruiting",
                beispiele: [
                  "Interviewfragen entwickeln",
                  "Onboarding-Dokumente erstellen",
                  "Beurteilungsformulierungen überarbeiten",
                  "Zeugnistexte formulieren"
                ],
                zeitersparnis: "1–2 Std./Vorgang"
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-t-4 border-t-green-500">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between text-sm">
                    <span>{item.bereich}</span>
                    <span className="text-xs text-green-600 dark:text-green-400 font-normal">
                      Ø {item.zeitersparnis}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {item.beispiele.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <TrendingUp className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Lizenzvergleich */}
        <section id="enterprise-vs-standard">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-cyan-500">
            ChatGPT Free vs. Plus vs. Team vs. Enterprise
          </h2>

          <p className="mb-6">
            Die Lizenzkategorie hat direkte Auswirkungen auf DSGVO-Konformität, Funktionsumfang
            und Administrationsmöglichkeiten. Für Mittelständler gelten andere Kriterien als für Konzerne.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="text-left p-3 font-semibold">Lizenz</th>
                  <th className="text-left p-3 font-semibold">Preis</th>
                  <th className="text-left p-3 font-semibold">Training mit Daten?</th>
                  <th className="text-left p-3 font-semibold">Geeignet für</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-medium">Free</td>
                  <td className="p-3">Kostenlos</td>
                  <td className="p-3"><span className="text-red-500">Ja (Standard)</span></td>
                  <td className="p-3 text-muted-foreground">Ausprobieren, kein Unternehmenseinsatz</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-medium">Plus</td>
                  <td className="p-3">$20/Monat</td>
                  <td className="p-3"><span className="text-amber-500">Opt-out möglich</span></td>
                  <td className="p-3 text-muted-foreground">Einzelpersonen, keine sensiblen Unternehmensdaten</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-green-50/30 dark:bg-green-950/10">
                  <td className="p-3 font-medium">Team</td>
                  <td className="p-3">$25–30/Nutzer/Monat</td>
                  <td className="p-3"><span className="text-green-600">Nein</span></td>
                  <td className="p-3 text-muted-foreground"><strong>Mittelstand-Einstieg</strong> – eigene Admin-Konsole, kein Training</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Enterprise</td>
                  <td className="p-3">Verhandlung (ab $60+)</td>
                  <td className="p-3"><span className="text-green-600">Nein + EU-Option</span></td>
                  <td className="p-3 text-muted-foreground">Regulierte Branchen, 100+ Nutzer, eigene Compliance</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            Für die meisten deutschen Mittelständler ist <strong>ChatGPT Team</strong> die richtige
            Wahl für den Start: keine Trainingsdatennutzung, Admin-Kontrolle, voller Funktionsumfang
            inklusive GPT-4o und Bildgenerierung. Bei spezifischen Compliance-Anforderungen
            lohnt sich das Gespräch über Enterprise.
          </p>
        </section>

        {/* ChatGPT vs Copilot */}
        <section id="chatgpt-vs-copilot">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-cyan-500">
            ChatGPT oder Microsoft 365 Copilot? Ehrliche Entscheidungshilfe
          </h2>

          <p className="mb-4">
            Die häufigste Frage in Erstgesprächen mit Mittelständlern: „Wir haben schon Microsoft 365 –
            brauchen wir dann überhaupt ChatGPT?" Die ehrliche Antwort: Es kommt darauf an.
            Beide Tools haben klare Stärken, unterschiedliche Einsatzbereiche und unterschiedliche
            Lernkurven. Hier ist die nüchterne Einschätzung aus der Praxis.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="text-left p-3 font-semibold border border-slate-200 dark:border-slate-700">Kriterium</th>
                  <th className="text-left p-3 font-semibold border border-slate-200 dark:border-slate-700 text-green-700 dark:text-green-400">ChatGPT</th>
                  <th className="text-left p-3 font-semibold border border-slate-200 dark:border-slate-700 text-blue-700 dark:text-blue-400">Microsoft 365 Copilot</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    kriterium: "Stärke",
                    chatgpt: "Freies Arbeiten, kreative Aufgaben, Deep Research, Custom GPTs, Coding",
                    copilot: "Integration in Word, Excel, Outlook, Teams – Daten aus Ihrem M365-Tenant"
                  },
                  {
                    kriterium: "Lizenzkosten",
                    chatgpt: "Ab $0 (Free) bis $30/Nutzer/Monat (Team) – kein M365-Abo nötig",
                    copilot: "Zusätzlich zum M365-Abo: ca. €30/Nutzer/Monat – hoher Grundpreis"
                  },
                  {
                    kriterium: "Datenzugriff",
                    chatgpt: "Kein Zugriff auf interne Systeme (ohne Integration)",
                    copilot: "Zugriff auf SharePoint, E-Mails, Teams-Chats, Kalender"
                  },
                  {
                    kriterium: "Flexibilität",
                    chatgpt: "Sehr hoch – Custom GPTs, API, Voice, Canvas, Web-Suche",
                    copilot: "Mittelhoch – auf M365-Ecosystem optimiert"
                  },
                  {
                    kriterium: "Einstiegshürde",
                    chatgpt: "Niedrig – jeder kann sofort loslegen",
                    copilot: "Mittel – erfordert M365-Kenntnisse, IT-Freigabe"
                  },
                  {
                    kriterium: "Empfehlung",
                    chatgpt: "Für vielseitige Nutzung, KMU-Einstieg, kreative Teams",
                    copilot: "Für M365-intensive Teams, die interne Daten einbinden wollen"
                  }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white dark:bg-slate-900" : "bg-slate-50 dark:bg-slate-800/50"}>
                    <td className="p-3 font-medium border border-slate-200 dark:border-slate-700">{row.kriterium}</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-green-800 dark:text-green-300">{row.chatgpt}</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-blue-800 dark:text-blue-300">{row.copilot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Card className="border-2 border-cyan-500/30 bg-cyan-50/20 dark:bg-cyan-950/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-600" />
                Unsere Empfehlung für den Mittelstand
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                Für die meisten Mittelständler gilt: <strong>Starten Sie mit ChatGPT</strong> – weil der
                Einstieg sofort möglich ist, die Kosten überschaubar bleiben und das Tool die breiteste
                Anwendungspalette bietet. Microsoft 365 Copilot macht erst dann Sinn, wenn Ihr Team
                bereits produktiv mit KI arbeitet und konkrete Anforderungen an die M365-Integration
                formulieren kann. Eine Einführung beider Tools gleichzeitig überfordert Teams regelmäßig –
                und führt zu geringer Nutzung von beiden. <a href="/wissen/chatgpt-kosten-und-lizenzen-unternehmen"
                className="text-cyan-600 hover:underline">Alle Lizenzoptionen im Detail.</a>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Erfolgsfaktoren */}
        <section id="erfolgsfaktoren">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-slate-500">
            Was erfolgreiche Einführungen gemeinsam haben
          </h2>

          <p className="mb-6">
            Aus unserer Trainingserfahrung mit mittelständischen Unternehmen lassen sich klare
            Erfolgsmuster erkennen:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                faktor: "Führungskraft geht voran",
                beschreibung: "Wenn Geschäftsführung oder Bereichsleitung ChatGPT sichtbar selbst nutzt, sinkt die Hemmschwelle im Team dramatisch."
              },
              {
                faktor: "Eigene Use Cases aus dem Arbeitsalltag",
                beschreibung: "Training mit generischen Prompts bringt wenig. Training mit echten Aufgaben aus dem eigenen Postfach – das bleibt hängen."
              },
              {
                faktor: "Klare DSGVO-Richtlinie von Anfang an",
                beschreibung: "Unklarheit über erlaubte Nutzung erzeugt Lähmung. Eine einseitige, klare Richtlinie nimmt die Unsicherheit."
              },
              {
                faktor: "Interne Multiplikatoren",
                beschreibung: "Mindestens eine Person pro Team, die ChatGPT wirklich gut kann und anderen schnell hilft. Das skaliert besser als externes Training allein."
              },
              {
                faktor: "Messung von Anfang an",
                beschreibung: "Wer nicht misst, kann keinen Erfolg zeigen. Selbst eine einfache Tabelle mit gesparter Zeit pro Woche macht den ROI sichtbar."
              },
              {
                faktor: "Iteratives Vorgehen",
                beschreibung: "Keine Big Bang Einführung. Piloten, Lernen, Anpassen, Skalieren – das ist der Weg zu nachhaltiger ChatGPT-Nutzung."
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-l-4 border-l-green-500">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">{item.faktor}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.beschreibung}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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

        {/* Quellen */}
        <section id="quellen">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-gray-400">
            Studien und Quellen
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { quelle: "McKinsey Global AI Survey 2025", link: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" },
              { quelle: "BCG AI Radar 2026", link: "https://www.bcg.com/publications/2024/ai-radar" },
              { quelle: "Bitkom KI-Monitor Deutschland 2025", link: "https://www.bitkom.org" },
              { quelle: "Deloitte AI ROI-Studie 2025", link: "https://www2.deloitte.com/insights/us/en/focus/tech-trends/artificial-intelligence.html" }
            ].map((q, idx) => (
              <a key={idx} href={q.link} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="hover:border-blue-400/50 transition-colors h-full">
                  <CardContent className="pt-4">
                    <p className="text-sm text-blue-600 dark:text-blue-400">{q.quelle}</p>
                  </CardContent>
                </Card>
              </a>
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
                      <a href={martinLang.linkedin} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-blue-600 hover:underline">
                        <Linkedin className="w-3 h-3" /> LinkedIn
                      </a>
                    )}
                    <a href="mailto:Info@ChatGPT-Trainings.de"
                      className="flex items-center gap-1 text-xs text-orange-600 hover:underline">
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

export default KiRealitaet2026;
