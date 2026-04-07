import ContentLayout from "@/components/ContentLayout";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Lightbulb, Target, BookOpen, CheckCircle2, XCircle, Settings, Brain, MessageSquare, Layers, Linkedin, Mail } from "lucide-react";
import { getAuthor, getAuthorSchemaMarkup } from "@/data/authors";
import { generateSchemaIds, generateWissenBreadcrumbItems } from "@/lib/schema";
import { TrustBadge } from "@/components/TrustBadge";

const SLUG = "prompt-engineering";
const PAGE_TITLE = "ChatGPT Prompt Engineering: Von der ersten Anfrage zum Expertenlevel";

const PromptEngineering = () => {
  const author = getAuthor('martin-lang');

  const ids = generateSchemaIds(SLUG, 'wissen');
  const pageUrl = `https://chatgpt-trainings.de/wissen/${SLUG}`;
  const breadcrumbItems = generateWissenBreadcrumbItems(PAGE_TITLE, pageUrl);

  const tableOfContents = [
    { id: "was-ist", title: "Was ist Prompt Engineering bei ChatGPT?", level: 2 },
    { id: "craft-framework", title: "Das CRAFT-Framework für ChatGPT", level: 2 },
    { id: "custom-instructions", title: "Custom Instructions: ChatGPT dauerhaft konfigurieren", level: 2 },
    { id: "chatgpt-techniken", title: "Fortgeschrittene ChatGPT-Techniken", level: 2 },
    { id: "praxis-prompts", title: "Praxis-Prompts für den Unternehmensalltag", level: 2 },
    { id: "o3-reasoning", title: "Prompting für ChatGPT o3 und o4 (Reasoning-Modelle)", level: 2 },
    { id: "fehler", title: "Die 7 häufigsten Prompt-Fehler", level: 2 },
    { id: "custom-gpt-prompting", title: "Prompts skalieren: Custom GPTs bauen", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
    { id: "quellen", title: "Quellen und weiterführende Links", level: 2 }
  ];

  const faqs = [
    {
      name: "Gibt es einen strukturierten ChatGPT Prompt Engineering Kurs auf Deutsch?",
      answer: "Ja – die chatgpt-trainings.de bietet praxisnahe ChatGPT Prompt Engineering Kurse auf Deutsch an, speziell für Unternehmensteams. Anders als generische Online-Kurse arbeiten wir mit echten Use Cases aus Ihrer Branche. Halbtags-Workshops bis hin zu mehrtägigen Intensivformaten sind verfügbar. Kontaktieren Sie uns für ein unverbindliches Gespräch."
    },
    {
      name: "Warum liefert ChatGPT bei unseren Mitarbeitern so unterschiedliche Ergebnisse?",
      answer: "Der häufigste Grund: fehlende Prompt-Struktur. Ohne Framework wie CRAFT variieren Ergebnisse erheblich, weil ChatGPT aus mehrdeutigen Anweisungen unterschiedliche Schlüsse zieht. Hinzu kommt: Wer Custom Instructions nicht konfiguriert hat, gibt bei jedem Start bei null an. Ein halbtägiger Prompt-Engineering-Workshop schafft in den meisten Teams sofortige Konsistenz."
    },
    {
      name: "Was ist der Unterschied zwischen Prompt Engineering für ChatGPT und für andere KI-Tools?",
      answer: "ChatGPT reagiert besonders stark auf Rollenangaben und Kontext-Setup am Gesprächsanfang. Außerdem lässt sich ChatGPT durch Custom Instructions dauerhaft kalibrieren – ein Feature das bei vielen anderen Tools nicht existiert. Die Reasoning-Modelle (o3, o4-mini) erfordern zudem eine andere Technik: weniger Beispiele, dafür klar beschriebenes Ziel und Einschränkungen."
    },
    {
      name: "Wie lange dauert es, bis Mitarbeiter sicher und effizient mit ChatGPT prompten können?",
      answer: "Die Grundlagen (CRAFT, Custom Instructions, häufige Fehler vermeiden) sind in einem Halbtags-Workshop lernbar. Für fortgeschrittene Anwendungen wie Reasoning-Modelle oder komplexe Analyse-Workflows empfehlen wir eine Lernreise über mehrere Wochen mit kurzen Übungseinheiten. Erfahrungsgemäß verdreifachen Teams ihre Effizienz in ChatGPT nach einem guten Training."
    },
    {
      name: "Kann man ChatGPT so konfigurieren, dass es immer DSGVO-konform antwortet?",
      answer: "Teilweise ja: Über Custom Instructions können Sie ChatGPT anweisen, keine personenbezogenen Daten zu wiederholen oder zu speichern. Entscheidend ist aber die organisatorische Ebene – welche Daten Mitarbeiter überhaupt eingeben dürfen. Für Unternehmen mit erhöhten Compliance-Anforderungen empfehlen wir ChatGPT Enterprise, das keine Trainingsdaten-Nutzung vorsieht und EU-Datenspeicherung unterstützt."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": ids.article,
        "headline": PAGE_TITLE,
        "description": "Der vollständige deutschsprachige Leitfaden für ChatGPT Prompt Engineering im Unternehmen: CRAFT-Framework, Custom Instructions, Reasoning-Modelle und Praxis-Prompts für den Arbeitsalltag.",
        "author": getAuthorSchemaMarkup(author),
        "publisher": {
          "@id": "https://chatgpt-trainings.de/#organization"
        },
        "datePublished": "2025-11-07",
        "dateModified": "2026-04-07",
        "keywords": [
          "ChatGPT Prompt Engineering",
          "ChatGPT Prompt Engineering Kurs Deutsch",
          "ChatGPT Custom Instructions",
          "Prompt Engineering Unternehmen",
          "ChatGPT Einführung Mittelstand",
          "ChatGPT Tipps Deutsch"
        ],
        "articleSection": "ChatGPT Best Practices",
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
        title="ChatGPT Prompt Engineering: Vollständiger Leitfaden auf Deutsch | chatgpt-trainings.de"
        description="Der deutsche Leitfaden für ChatGPT Prompt Engineering im Unternehmen: CRAFT-Framework, Custom Instructions, Reasoning-Modelle und Praxis-Prompts. Jetzt trainieren."
        keywords={[
          "ChatGPT Prompt Engineering",
          "ChatGPT Prompt Engineering Kurs Deutsch",
          "ChatGPT Prompts Unternehmen",
          "Custom Instructions ChatGPT",
          "Prompt Engineering Deutsch",
          "ChatGPT Einführung Mittelstand"
        ]}
        canonicalUrl={pageUrl}
        schema={schema}
        publishedTime="2025-11-07"
        modifiedTime="2026-04-07"
      />

      <ContentLayout
        breadcrumbs={[
          { label: "Wissen", href: "/wissen" },
          { label: "ChatGPT Prompt Engineering", href: `/wissen/${SLUG}` }
        ]}
        title="ChatGPT Prompt Engineering: Von der ersten Anfrage zum Expertenlevel"
        description="Der vollständige deutschsprachige Leitfaden – CRAFT-Framework, Custom Instructions, Reasoning-Modelle und Praxis-Prompts für Ihren Unternehmensalltag."
        lastUpdated="07. April 2026"
        authorName="Martin Lang"
        tableOfContents={tableOfContents}
      >
        {/* Schnellantwort */}
        <Card className="border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/5 to-amber-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-orange-600" />
              Das Wichtigste in 30 Sekunden
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed">
              <strong>Prompt Engineering für ChatGPT bedeutet:</strong> Anfragen so formulieren, dass ChatGPT
              konsequent nützliche, präzise und formatgerechte Antworten liefert. Das{" "}
              <strong>CRAFT-Framework</strong> gibt jedem Prompt eine Struktur. <strong>Custom Instructions</strong>{" "}
              kalibrieren ChatGPT dauerhaft auf Ihre Arbeitsweise. Und für komplexe Analysen brauchen Sie bei den{" "}
              <strong>Reasoning-Modellen</strong> (o3, o4-mini) eine völlig andere Technik als bei GPT-4o.
              Wer das beherrscht, arbeitet mit ChatGPT dreimal schneller als ohne Training.
            </p>
          </CardContent>
        </Card>

        {/* Was ist Prompt Engineering bei ChatGPT */}
        <section id="was-ist">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-blue-500">
            Was ist Prompt Engineering bei ChatGPT?
          </h2>

          <p className="mb-4">
            ChatGPT versteht natürliche Sprache – aber das bedeutet nicht, dass jede natürliche Formulierung
            gleich gut funktioniert. Prompt Engineering ist die Fähigkeit, Anfragen so zu strukturieren, dass
            das Modell versteht was Sie wirklich brauchen: in welchem Kontext, in welchem Format, mit welchem
            Detailgrad und aus welcher Perspektive.
          </p>

          <p className="mb-6">
            Das klingt trivial, ist es aber nicht. ChatGPT füllt fehlende Informationen eigenständig mit
            plausiblen Annahmen. Schreiben Sie „Schreib mir eine E-Mail an unseren Lieferanten", formuliert
            ChatGPT etwas Generisches. Schreiben Sie stattdessen einen strukturierten Prompt mit Kontext,
            Ton und Ziel – erhalten Sie einen Entwurf, der kaum noch Nacharbeit braucht.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Target className="w-5 h-5 text-blue-600" />
                  Präzision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  ChatGPT interpretiert Mehrdeutigkeiten selbst. Präzise Prompts eliminieren unerwünschte
                  Interpretationsspielräume und liefern vorhersehbare Ergebnisse.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  Kontext
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Je mehr relevanter Kontext Sie mitgeben, desto weniger muss ChatGPT erraten. Branche,
                  Zielgruppe, Vorwissen des Empfängers – alles zählt.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Lightbulb className="w-5 h-5 text-purple-600" />
                  Iteration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ein gutes Ergebnis entsteht selten im ersten Versuch. ChatGPT-Gespräche sind Dialoge –
                  Nachfragen und Verfeinern gehört zum professionellen Arbeiten.
                </p>
              </CardContent>
            </Card>
          </div>

          <blockquote className="my-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/30 p-6 rounded-r-lg italic text-lg">
            In unseren Trainings beobachten wir immer dasselbe: Wer ChatGPT zum ersten Mal nutzt, schreibt
            einen Satz. Wer trainiert hat, schreibt einen Absatz – und bekommt dafür zehnmal bessere Ergebnisse.
          </blockquote>
        </section>

        {/* CRAFT Framework */}
        <section id="craft-framework">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-green-500">
            Das CRAFT-Framework für ChatGPT
          </h2>

          <p className="mb-4">
            CRAFT ist ein Strukturierungsrahmen, den wir in unseren ChatGPT-Trainings einsetzen. Er macht aus
            einer vagen Anfrage einen vollständigen Prompt – ohne dass man lange nachdenken muss. Einmal
            verinnerlicht, wird er zur zweiten Natur.
          </p>

          <div className="space-y-4 my-8">
            {[
              {
                letter: "C",
                name: "Context",
                deutsch: "Kontext",
                beschreibung: "Schildern Sie Ihre Ausgangssituation. ChatGPT kennt Ihr Unternehmen nicht – geben Sie die relevanten Rahmenbedingungen mit.",
                beispiel: "Ich bin Projektleiterin in einem Maschinenbauunternehmen mit 200 Mitarbeitern. Wir führen gerade ChatGPT Enterprise ein und bereiten die Kommunikation ans Team vor.",
                color: "blue"
              },
              {
                letter: "R",
                name: "Role",
                deutsch: "Rolle",
                beschreibung: "Weisen Sie ChatGPT eine Perspektive zu. Das Modell ändert messbar seinen Stil, seine Tiefe und seinen Fokus je nach zugewiesener Rolle.",
                beispiel: "Du bist ein erfahrener Change-Management-Berater mit Schwerpunkt digitale Transformation im Mittelstand.",
                color: "purple"
              },
              {
                letter: "A",
                name: "Action",
                deutsch: "Aktion",
                beschreibung: "Benennen Sie die konkrete Aufgabe. Ein Verb am Anfang hilft: Erstelle, Analysiere, Überarbeite, Fasse zusammen, Vergleiche.",
                beispiel: "Erstelle eine interne FAQ für Mitarbeitende, die Bedenken gegenüber KI-Tools haben. Gehe besonders auf Datenschutz und Arbeitsplatzsicherheit ein.",
                color: "orange"
              },
              {
                letter: "F",
                name: "Format",
                deutsch: "Format",
                beschreibung: "Legen Sie fest, wie das Ergebnis aussehen soll. ChatGPT kann Markdown, Listen, Tabellen, fließenden Text, Code und mehr produzieren.",
                beispiel: "Format: Maximal 10 Fragen mit jeweils 2–3 Sätzen Antwort. Ton: sachlich, beruhigend, kein Marketing-Jargon.",
                color: "cyan"
              },
              {
                letter: "T",
                name: "Tone",
                deutsch: "Tonalität",
                beschreibung: "Definieren Sie den Kommunikationsstil. Formell oder locker? Technisch oder laienverständlich? Motivierend oder nüchtern?",
                beispiel: "Professionell und vertrauensbildend. Keine Worthülsen wie 'state of the art'. Direkte Ansprache, Du-Form.",
                color: "emerald"
              }
            ].map((item, idx) => (
              <Card key={idx} className={`border-l-4 border-l-${item.color}-500`}>
                <CardHeader className={`bg-gradient-to-r from-${item.color}-500/10 to-${item.color}-600/5`}>
                  <CardTitle className="flex items-center gap-3">
                    <span className={`w-10 h-10 rounded-full bg-${item.color}-100 dark:bg-${item.color}-900 flex items-center justify-center text-${item.color}-600 font-bold text-xl`}>
                      {item.letter}
                    </span>
                    <div>
                      <span className={`text-${item.color}-700 dark:text-${item.color}-400`}>{item.name}</span>
                      <span className="text-muted-foreground text-sm ml-2">({item.deutsch})</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-3">{item.beschreibung}</p>
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <code className="text-sm italic">"{item.beispiel}"</code>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-green-500/30 bg-gradient-to-br from-green-500/5 to-emerald-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                CRAFT komplett: Ein reales Beispiel aus dem Unternehmensalltag
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-gray-900 text-gray-100 rounded-lg font-mono text-sm leading-relaxed">
                <p className="text-blue-400">[CONTEXT]</p>
                <p className="mb-3">Ich leite das HR-Team eines mittelständischen Handelsunternehmens (150 MA). Wir wollen ChatGPT für Stellenausschreibungen einführen, haben aber noch keine klaren Prozesse.</p>
                <p className="text-purple-400">[ROLE]</p>
                <p className="mb-3">Du bist ein HR-Spezialist mit Erfahrung in Employer Branding und modernem Recruiting im DACH-Raum.</p>
                <p className="text-orange-400">[ACTION]</p>
                <p className="mb-3">Erstelle eine Stellenausschreibung für eine Teamleitung Logistik (m/w/d). Schwerpunkt Lagerhaltung, Teamgröße 8 Personen, Einstieg Q3 2026.</p>
                <p className="text-cyan-400">[FORMAT]</p>
                <p className="mb-3">Klassische Stellenausschreibungsstruktur: Aufgaben (5–7 Bullets), Anforderungen (5 Bullets), Was wir bieten (4 Bullets). Max. 350 Wörter.</p>
                <p className="text-emerald-400">[TONE]</p>
                <p>Professionell, aber ansprechend. Keine Worthülsen. Zielgruppe: erfahrene Fachkräfte 30–45 Jahre.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Custom Instructions */}
        <section id="custom-instructions">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-purple-500">
            Custom Instructions: ChatGPT dauerhaft konfigurieren
          </h2>

          <p className="mb-4">
            Einer der größten Produktivitätsgewinne bei ChatGPT ist die konsequente Nutzung von{" "}
            <strong>Custom Instructions</strong> – und gleichzeitig das am häufigsten übersehene Feature.
            Custom Instructions sind eine Art dauerhafter Systemanweisung: Sie konfigurieren ChatGPT einmalig
            so, dass Sie bei jeder neuen Unterhaltung nicht mehr von vorne beginnen müssen.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Card className="border-t-4 border-t-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Settings className="w-5 h-5 text-purple-600" />
                  Was Sie in Custom Instructions hinterlegen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>✓ Ihre Rolle und Branche</p>
                <p>✓ Bevorzugte Antwortlänge und -struktur</p>
                <p>✓ Sprach- und Tonvorgaben (z. B. immer Deutsch, immer Sie-Form)</p>
                <p>✓ Wiederkehrende Kontextinfos (Firmengröße, Zielgruppe)</p>
                <p>✓ Was ChatGPT <em>nicht</em> tun soll (z. B. keine Einleitungsfloskeln)</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <MessageSquare className="w-5 h-5 text-orange-600" />
                  Praxis-Beispiel: Custom Instruction für Führungskräfte
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-mono leading-relaxed">
                  <p>Ich bin Geschäftsführerin eines Beratungsunternehmens in Deutschland (15 MA, B2B-Fokus). Antworte immer auf Deutsch, in Sie-Form. Halte Antworten prägnant – maximal 200 Wörter, außer ich frage explizit nach mehr. Keine einleitenden Sätze wie "Gerne helfe ich Ihnen dabei". Beginne direkt mit dem Inhalt.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-purple-500/20 bg-purple-50/30 dark:bg-purple-950/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-600" />
                ChatGPT Projects: Kontexte organisieren
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                Seit Ende 2024 bietet ChatGPT <strong>Projects</strong> an – separate Arbeitsbereiche mit
                eigenem Kontext, eigenen Dateien und eigenen Instruktionen. Das ist besonders für Teams relevant:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Projekt „Kundenkommunikation" mit Firmenstyle-Guide als hochgeladenem Dokument</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Projekt „Analyse" mit statistischem Kontext und bevorzugten Darstellungsformaten</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Projekt „Interne Docs" mit Unternehmenskontext und Tonalitätsvorgaben</span>
                </li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                ChatGPT-Nutzer, die Projects konsequent einsetzen, berichten von deutlich kürzeren
                Prompt-Texten bei gleichzeitig besseren Ergebnissen – weil der Kontext bereits gesetzt ist.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Fortgeschrittene Techniken */}
        <section id="chatgpt-techniken">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-orange-500">
            Fortgeschrittene ChatGPT-Techniken
          </h2>

          <p className="mb-6">
            Jenseits von CRAFT und Custom Instructions gibt es eine Reihe von Techniken, die in unserem
            ChatGPT Prompt Engineering Kurs auf Deutsch regelmäßig für Aha-Momente sorgen:
          </p>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Brain className="w-5 h-5 text-blue-600" />
                  Chain-of-Thought: Denkschritte sichtbar machen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">
                  Fügen Sie „Denke Schritt für Schritt" oder „Zeige deine Überlegung" zu komplexen Aufgaben
                  hinzu. ChatGPT macht seinen Denkprozess transparent – das führt zu nachvollziehbareren
                  und oft präziseren Ergebnissen.
                </p>
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">
                  ✓ "Analysiere diese Lieferantenverträge auf Risikopunkte. Denke Schritt für Schritt vor, welche Kategorien du prüfst."
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Layers className="w-5 h-5 text-green-600" />
                  Few-Shot Prompting: Durch Beispiele führen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">
                  Geben Sie ChatGPT 2–3 Beispiele des gewünschten Outputs, bevor Sie die eigentliche
                  Aufgabe stellen. Das Modell erkennt das Muster und reproduziert es – auch für ungewöhnliche
                  Formate oder Firmenstile.
                </p>
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">
                  ✓ "Hier sind zwei Beispiele unserer bisherigen Produktbeschreibungen: [Beispiel 1] [Beispiel 2]. Schreibe jetzt eine für Produkt XY im gleichen Stil."
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Target className="w-5 h-5 text-orange-600" />
                  Constraint Prompting: Durch Grenzen besser werden
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">
                  Definieren Sie explizit, was ChatGPT <em>nicht</em> tun soll. Einschränkungen führen
                  überraschend oft zu fokussierteren und relevanteren Ergebnissen.
                </p>
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">
                  ✓ "Erstelle eine Marketingstrategie. Keine Social Media, kein Paid Advertising, Budget unter 5.000 €, nur organische Maßnahmen."
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                  Perspektivwechsel: ChatGPT als kritischen Sparringspartner nutzen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">
                  Lassen Sie ChatGPT Ihre eigenen Ideen hinterfragen. Das geht am besten mit expliziter
                  Rollenangabe und der Aufforderung, konkrete Schwachstellen zu nennen – nicht nur
                  diplomatisch zu kommentieren.
                </p>
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">
                  ✓ "Du bist ein skeptischer Investor. Hier ist unser Businessplan. Nenne die drei schwächsten Argumente und erkläre warum. Keine Höflichkeitsfloskeln."
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Praxis-Prompts */}
        <section id="praxis-prompts">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-cyan-500">
            Praxis-Prompts für den Unternehmensalltag
          </h2>

          <p className="mb-6">
            Die folgenden Prompts sind direkt einsetzbar und basieren auf den häufigsten Anwendungsfällen,
            die wir in unseren ChatGPT-Trainings mit Unternehmensteams erarbeiten. Passen Sie die
            eckigen Klammern an Ihren Kontext an.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                kategorie: "E-Mail & Kommunikation",
                color: "blue",
                prompt: "Ich habe eine unbefriedigende Antwort von unserem Dienstleister [Name] zu Ticket [Thema] erhalten. Hier ist ihre Antwort: [Antwort einfügen]. Schreibe eine Nachfass-E-Mail: bestimmt, professionell, ohne Aggressivität. Ziel: konkrete Lösung bis [Datum] einfordern. Max. 150 Wörter."
              },
              {
                kategorie: "Analyse & Zusammenfassung",
                color: "green",
                prompt: "Hier ist ein Bericht/Protokoll/Artikel: [Text einfügen]. Fasse in maximal 5 Stichpunkten die wichtigsten Aussagen zusammen. Markiere danach die 2 Punkte, die sofortige Entscheidungen erfordern. Zielgruppe: Geschäftsführung, keine Fachkenntnisse voraussetzen."
              },
              {
                kategorie: "Präsentation & Konzepte",
                color: "orange",
                prompt: "Ich halte einen 20-minütigen Vortrag zu [Thema] für [Zielgruppe, z. B. Betriebsrat, Vertrieb, Neukunden]. Erstelle eine Gliederung mit 5–7 Folien. Pro Folie: Titel und 3 Kernaussagen als Bullets. Abschluss mit einer konkreten Handlungsempfehlung."
              },
              {
                kategorie: "Entscheidungsvorbereitung",
                color: "purple",
                prompt: "Wir stehen vor der Entscheidung: [Entscheidung beschreiben, z. B. Softwarewechsel, Lieferantenwechsel]. Erstelle eine strukturierte Pro-/Contra-Analyse mit je 4–5 Punkten. Berücksichtige dabei besonders: Kosten, Implementierungsaufwand, Risiken, langfristige Flexibilität."
              },
              {
                kategorie: "Recruiting & HR",
                color: "pink",
                prompt: "Ich führe nächste Woche ein Erstgespräch mit einem Bewerber für [Position]. Seine Unterlagen zeigen [kurze Beschreibung]. Erstelle 8 strukturierte Interviewfragen: 3 zur fachlichen Eignung, 3 zu Soft Skills und Teamfit, 2 situative Fragen ('Was würden Sie tun, wenn...'). Kein Small Talk."
              },
              {
                kategorie: "Textüberarbeitung",
                color: "teal",
                prompt: "Überarbeite folgenden Text für unsere Unternehmenswebsite: [Text einfügen]. Ziele: klarer, kürzer, lesefreundlicher. Behalte alle inhaltlichen Aussagen. Zielgruppe: [z. B. Einkaufsleiter im Mittelstand]. Maximale Länge nach der Überarbeitung: [Zeichenanzahl]."
              }
            ].map((item, idx) => (
              <Card key={idx} className={`border-t-4 border-t-${item.color}-500`}>
                <CardHeader className="pb-2">
                  <CardTitle className={`text-sm text-${item.color}-700 dark:text-${item.color}-400`}>
                    {item.kategorie}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs font-mono leading-relaxed text-muted-foreground bg-gray-50 dark:bg-gray-900 p-3 rounded">
                    {item.prompt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* O3 / Reasoning */}
        <section id="o3-reasoning">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-rose-500">
            Prompting für ChatGPT o3 und o4 (Reasoning-Modelle)
          </h2>

          <p className="mb-4">
            ChatGPT o3 und o4-mini sind keine normalen Sprachmodelle – sie sind{" "}
            <strong>Reasoning-Modelle</strong>, die komplexe Aufgaben durch ausgedehntes internes
            „Nachdenken" lösen. Das verändert die optimale Prompt-Strategie fundamental.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Was bei o3/o4 NICHT funktioniert
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>„Denke Schritt für Schritt" – das tut o3 intern bereits, der Zusatz stört eher</span>
                </p>
                <p className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Viele Few-Shot-Beispiele – das schränkt das eigenständige Reasoning ein</span>
                </p>
                <p className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Sehr kurze Prompts – o3 braucht klar beschriebene Ziele und Grenzen</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Was bei o3/o4 besonders gut funktioniert
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Klar beschriebenes Ziel + Einschränkungen + Bewertungskriterien</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Direkte Aufgabenstellung ohne Umwege – o3 liest und analysiert selbst</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Komplexe, mehrstufige Aufgaben die GPT-4o überfordern würden</span>
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-rose-500/20 bg-rose-50/20 dark:bg-rose-950/10">
            <CardHeader>
              <CardTitle className="text-base">Beispiel: Gleiche Aufgabe, unterschiedliche Prompt-Strategie</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <p className="text-blue-500 font-bold mb-1">GPT-4o Prompt:</p>
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded leading-relaxed">
                    "Du bist ein erfahrener Finanzanalyst. Denke Schritt für Schritt. Analysiere diese Kostenaufstellung [Daten] und identifiziere die 3 größten Einsparpotenziale. Format: Tabelle mit Potenzial, Aufwand, Empfehlung."
                  </div>
                </div>
                <div>
                  <p className="text-rose-500 font-bold mb-1">o3 Prompt:</p>
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded leading-relaxed">
                    "Hier ist eine Kostenaufstellung unseres Unternehmens [Daten]. Ziel: Identifiziere die 3 größten Einsparpotenziale. Kriterien: Einsparvolumen in €, Implementierungsaufwand (gering/mittel/hoch), Risiko. Ausgabe als Tabelle. Begründe jede Empfehlung in max. 2 Sätzen."
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Fehler */}
        <section id="fehler">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-red-500">
            Die 7 häufigsten Prompt-Fehler
          </h2>

          <p className="mb-6">
            Diese Fehler sehen wir in fast jedem ChatGPT-Training am ersten Tag. Sie sind leicht zu beheben
            – aber man muss erst wissen, dass man sie macht.
          </p>

          <div className="space-y-3">
            {[
              {
                fehler: "Kein Kontext = Generisches Ergebnis",
                erklärung: "\"Schreib einen Blogbeitrag über KI\" liefert immer dasselbe generische Ergebnis. ChatGPT weiß weder für wen noch in welchem Ton noch in welcher Tiefe.",
                fix: "Immer: Branche, Zielgruppe, Zweck des Textes mitgeben."
              },
              {
                fehler: "Zu viele Aufgaben in einem Prompt",
                erklärung: "\"Analysiere den Text, überarbeite ihn, erstelle eine Zusammenfassung und leite drei Maßnahmen ab\" – das Modell kompromittiert jede Teilaufgabe.",
                fix: "Eine Aufgabe pro Prompt. Ergebnisse sequenziell aufbauen."
              },
              {
                fehler: "Format nicht spezifiziert",
                erklärung: "ChatGPT wählt selbst ein Format. Das ist selten das, was Sie brauchen – besonders für Präsentationen, Berichte oder strukturierte Ausgaben.",
                fix: "Immer explizit: \"Format: Tabelle\", \"Format: 5 Bullets\", \"max. 200 Wörter\"."
              },
              {
                fehler: "Zu höfliche Aufforderungen",
                erklärung: "\"Könntest du vielleicht...\" und \"Wenn du Zeit hast...\" sind für Menschen höflich, für KI schlicht unnötig und manchmal verwirrend.",
                fix: "Direkte Imperative: \"Erstelle\", \"Analysiere\", \"Überarbeite\"."
              },
              {
                fehler: "Kein Widerspruch eingefordert",
                erklärung: "ChatGPT neigt dazu, Ihren Ansatz zu bestätigen, wenn Sie nicht explizit um Kritik bitten. Das ist die \"Ja-Sager-Falle\".",
                fix: "Aktiv formulieren: \"Nenne konkrete Schwächen\", \"Was spricht dagegen?\", \"Wo bin ich falsch?\"."
              },
              {
                fehler: "Erste Antwort als final akzeptieren",
                erklärung: "ChatGPT liefert auf Aufforderung oft besser überarbeitete Versionen als die erste Ausgabe – besonders bei kreativen Aufgaben.",
                fix: "\"Überarbeite das mit Fokus auf [Aspekt]\" oder \"Mach Version 2 mit mehr [X] und weniger [Y]\"."
              },
              {
                fehler: "Custom Instructions nie eingerichtet",
                erklärung: "Wer Custom Instructions ignoriert, gibt bei jeder neuen Konversation Kontext neu ein – oder bekommt generische Ergebnisse.",
                fix: "Einmalig 15 Minuten investieren und Custom Instructions konfigurieren. Danach dauerhafter Produktivitätsgewinn."
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-l-4 border-l-red-400">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-700 dark:text-red-400 mb-1">#{idx + 1} {item.fehler}</p>
                      <p className="text-sm text-muted-foreground mb-2">{item.erklärung}</p>
                      <p className="text-sm">
                        <span className="text-green-600 font-medium">Fix: </span>
                        {item.fix}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Custom GPT Prompting */}
        <section id="custom-gpt-prompting">
          <h2 className="text-3xl md:text-4xl font-bold pb-4 border-b-4 border-amber-500">
            Prompts skalieren: Custom GPTs bauen
          </h2>

          <p className="mb-4">
            Wenn ein Prompt so gut ist, dass Ihr Team ihn täglich nutzen soll – dann gehört er
            nicht in eine SharePoint-Liste, sondern in einen <strong>Custom GPT</strong>.
            Custom GPTs sind spezialisierte ChatGPT-Versionen, die Sie direkt im GPT Builder
            (verfügbar ab ChatGPT Plus) konfigurieren – mit festem System-Prompt, Wissensdateien
            und einem klaren Aufgabenfokus. Das Team öffnet einfach den Custom GPT und fängt
            an zu arbeiten – keine Prompt-Kenntnisse nötig.
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-8">
            {[
              {
                titel: "E-Mail-GPT",
                beschreibung: "Kennt Ihren Firmenstil, Ihre Tonalität und häufige Empfänger. Mitarbeitende beschreiben nur das Anliegen – der GPT formuliert.",
                icon: "✉️"
              },
              {
                titel: "Protokoll-GPT",
                beschreibung: "Strukturiert Gesprächsnotizen automatisch in Ihr bevorzugtes Protokollformat – mit Beschlüssen, Aufgaben und Verantwortlichen.",
                icon: "📋"
              },
              {
                titel: "Analyse-GPT",
                beschreibung: "Interpretiert hochgeladene Daten nach Ihrer Branchenlogik. Kann Referenzdokumente als Wissensquelle hinterlegt bekommen.",
                icon: "📊"
              }
            ].map((gpt, idx) => (
              <Card key={idx} className="border-t-4 border-t-amber-500 text-center">
                <CardHeader>
                  <CardTitle className="text-3xl mb-1">{gpt.icon}</CardTitle>
                  <CardTitle className="text-base">{gpt.titel}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{gpt.beschreibung}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-amber-500/30 bg-amber-50/20 dark:bg-amber-950/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-amber-600" />
                Custom GPT in 5 Minuten: Die System-Prompt-Vorlage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm">
                Dieser System-Prompt reicht für einen funktionsfähigen Unternehmens-GPT:
              </p>
              <div className="p-4 bg-gray-900 text-amber-100 rounded-lg font-mono text-sm leading-relaxed">
                <p className="text-amber-400 mb-2">// GPT Builder → "Configure" → "Instructions"</p>
                <p>
                  Du bist ein spezialisierter Assistent für [Aufgabenbereich] bei [Firmenname].
                  Antworte immer auf Deutsch, in [Sie/Du]-Form. Deine Ausgaben folgen diesem Format:
                  [Format beschreiben]. Verwende keine Einleitungsfloskeln. Wenn du Kontext brauchst,
                  stelle maximal zwei gezielte Fragen. Ausgaben sollen [X] Wörter nicht überschreiten,
                  außer der Nutzer bittet explizit um mehr. Du kennst unsere Branche: [Branche, 2–3 Sätze Kontext].
                </p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Wenn dieser System-Prompt gut funktioniert, teilen Sie den Custom GPT intern –
                jedes Teammitglied hat damit sofort einen perfekt konfigurierten ChatGPT-Assistenten,
                ohne selbst prompten zu müssen.
              </p>
            </CardContent>
          </Card>

          <TrustBadge className="mt-6" />
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
            Quellen und weiterführende Links
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "OpenAI Prompt Engineering Guide",
                url: "https://platform.openai.com/docs/guides/prompt-engineering",
                beschreibung: "Offizielle OpenAI-Dokumentation zu Prompting-Strategien für GPT-Modelle"
              },
              {
                title: "Anthropic Prompting Guide",
                url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
                beschreibung: "Vergleichende Perspektive: Wie Anthropic Prompting für Claude beschreibt (viele Prinzipien gelten auch für ChatGPT)"
              },
              {
                title: "Learn Prompting (Open Source)",
                url: "https://learnprompting.org",
                beschreibung: "Kostenlose, regelmäßig aktualisierte Ressource mit Techniken und Beispielen"
              },
              {
                title: "ChatGPT Enterprise – OpenAI",
                url: "https://openai.com/enterprise",
                beschreibung: "Informationen zu ChatGPT Enterprise und dessen Datenschutz-Garantien für Unternehmenseinsatz"
              }
            ].map((quelle, idx) => (
              <a
                key={idx}
                href={quelle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="h-full hover:border-orange-500/50 transition-colors cursor-pointer">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400">
                      {quelle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">{quelle.beschreibung}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* Autor */}
        {author && (
          <Card className="border-2 border-orange-500/20 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/20 dark:to-amber-950/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-lg">{author.name}</p>
                  <p className="text-sm text-muted-foreground mb-2">{author.role}</p>
                  <p className="text-sm leading-relaxed">{author.bio}</p>
                  <div className="flex gap-3 mt-3">
                    {author.linkedin && (
                      <a
                        href={author.linkedin}
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

export default PromptEngineering;
