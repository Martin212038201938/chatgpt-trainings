import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import KoelnTraining from "@/components/KoelnTraining";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Building, Award, ArrowRight, ExternalLink } from "lucide-react";
import ueberUns from "@/assets/ueber-uns.png";

const UeberUns = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://chatgpt-trainings.de/#organization",
        "name": "chatgpt-trainings.de",
        "alternateName": "ChatGPT-Trainings",
        "url": "https://chatgpt-trainings.de",
        "logo": "https://chatgpt-trainings.de/og-image.jpg",
        "description": "ChatGPT-Trainings.de ist der spezialisierte Weiterbildungsanbieter für den professionellen Einsatz von ChatGPT und KI-Tools in Unternehmen. Wir setzen auf tiefgreifende Praxisnähe statt oberflächliche Tool-Übersichten.",
        "foundingDate": "2025",
        "founder": {
          "@type": "Person",
          "name": "Martin Lang"
        },
        "parentOrganization": {
          "@type": "Organization",
          "@id": "https://yellow-boat.com/#organization",
          "name": "Yellow-Boat Consulting",
          "url": "https://yellow-boat.com",
          "foundingDate": "2011",
          "founder": {
            "@type": "Person",
            "name": "Martin Lang"
          }
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "50.9375",
            "longitude": "6.9603"
          },
          "geoRadius": "1000 km",
          "name": "DACH-Region (Deutschland, Österreich, Schweiz)"
        },
        "knowsAbout": [
          "ChatGPT",
          "OpenAI",
          "Prompt Engineering",
          "LLM-Architektur",
          "KI-Workflow-Design",
          "Custom GPTs",
          "ChatGPT API",
          "KI-Strategie",
          "KI-gestützte Wissensarbeit",
          "Prompt-Bibliotheken"
        ],
        "slogan": "ChatGPT strategisch einsetzen – vom ersten Prompt bis zum produktiven KI-Workflow",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "post@yellow-boat.com",
          "telephone": "+49 221 950 187 74",
          "availableLanguage": ["de", "en"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Nussbaumerstrasse 26",
          "addressLocality": "Köln",
          "postalCode": "50823",
          "addressCountry": "DE"
        },
        "sameAs": [
          "https://www.linkedin.com/company/yellow-boat-consulting",
          "https://yellow-boat.com"
        ]
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://chatgpt-trainings.de/#educationalOrganization",
        "name": "chatgpt-trainings.de",
        "url": "https://chatgpt-trainings.de",
        "description": "Spezialisierte Akademie für professionelle ChatGPT und KI-Weiterbildung",
        "foundingDate": "2025",
        "parentOrganization": {
          "@id": "https://yellow-boat.com/#organization"
        },
        "areaServed": "DACH",
        "educationalCredentialAwarded": "ChatGPT Zertifikat",
        "teaches": [
          "ChatGPT für Büroarbeit",
          "ChatGPT für Entwickler",
          "Custom GPTs und KI-Agenten",
          "Prompt Engineering",
          "KI Governance und Compliance"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://chatgpt-trainings.de/ueber-uns",
        "name": "Über uns - chatgpt-trainings.de",
        "description": "Erfahren Sie mehr über chatgpt-trainings.de, die spezialisierte Weiterbildungsplattform für ChatGPT. Eine Marke der Yellow-Boat Consulting.",
        "url": "https://chatgpt-trainings.de/ueber-uns",
        "inLanguage": "de-DE",
        "isPartOf": {
          "@id": "https://chatgpt-trainings.de/#website"
        },
        "about": {
          "@id": "https://chatgpt-trainings.de/#organization"
        },
        "mainEntity": {
          "@id": "https://chatgpt-trainings.de/#organization"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Über uns - chatgpt-trainings.de | Prompt Engineering & KI-Workflow-Design"
        description="Wir verbinden LLM-Verständnis mit systematischem Workflow-Design. ChatGPT-Trainings.de zeigt Unternehmen, wie sie von einzelnen Prompts zu produktiven KI-Arbeitsabläufen kommen."
        keywords={[
          "ChatGPT Training Anbieter",
          "Prompt Engineering Training",
          "KI-Workflow-Design",
          "LLM Verständnis Unternehmen",
          "ChatGPT Schulung DACH",
          "Custom GPTs Training",
          "KI-Strategie Beratung"
        ]}
        canonicalUrl="https://chatgpt-trainings.de/ueber-uns"
        schema={organizationSchema}
      />
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section - Apple-inspired clean design */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
              Von Prompt Engineering zu <span className="text-primary">produktiven KI-Workflows</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed mb-4 animate-slide-up-delayed">
              <strong>ChatGPT-Trainings.de</strong> verbindet tiefes Verständnis für Large Language Models mit systematischem Workflow-Design. Wir zeigen Unternehmen, wie sie ChatGPT nicht als Spielzeug, sondern als strategisches Arbeitsinstrument einsetzen – von der Prompt-Architektur über Custom GPTs bis zum produktiven Dauerbetrieb.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unser Ansatz: Wer versteht, wie ein LLM denkt, schreibt bessere Prompts, baut bessere Workflows und trifft bessere Entscheidungen über KI im Unternehmen.
            </p>
          </div>

          {/* Mission, Vision, Werte */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <h2 className="text-2xl font-bold mb-4">Unsere Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir befähigen Unternehmen, ChatGPT als <strong>strategisches Werkzeug für Wissensarbeit</strong> einzusetzen – mit fundiertem LLM-Verständnis, systematischem Prompt Engineering und produktiven KI-Workflows.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <h2 className="text-2xl font-bold mb-4">Unsere Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Teams, die verstehen, wie Large Language Models funktionieren, und dieses Wissen in <strong>wiederholbare, skalierbare Arbeitsabläufe</strong> übersetzen – vom ersten Prompt bis zum automatisierten Workflow.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <h2 className="text-2xl font-bold mb-4">Unsere Werte</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Tiefe statt Breite. Verstehen statt Nachplappern.</strong> Wir vermitteln keine Tool-Oberflächen, sondern die Mechanik dahinter. Was wir zeigen, funktioniert am nächsten Arbeitstag.
              </p>
            </Card>
          </div>

          {/* Team Bild */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={ueberUns}
                alt="Das Team der ChatGPT-Trainings"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Methodik Detail Block */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl blur-xl" />
              <div className="relative bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl rounded-2xl p-8 md:p-12 text-center border border-border/50 shadow-xl">
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Unser Ansatz: Vom Modellverständnis zum produktiven Workflow
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
                  Die meisten ChatGPT-Schulungen zeigen, wo man klicken muss. Wir gehen tiefer: Wir vermitteln, wie Token-basierte Sprachmodelle Informationen verarbeiten, warum bestimmte Prompt-Strukturen funktionieren und wie man dieses Wissen in systematische Arbeitsabläufe überträgt. Vom einzelnen Prompt über Prompt-Bibliotheken bis zu Custom GPTs und automatisierten Workflows.
                </p>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                  Jedes Training wird auf die konkreten Arbeitssituationen, Rollen und strategischen Ziele Ihrer Organisation zugeschnitten. Nach der Trainingsphase begleiten wir Führungskräfte und Projektverantwortliche beim Aufbau unternehmensweiter Prompt-Standards und KI-Governance.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <div className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-default">
                    <span className="text-primary text-2xl group-hover:scale-125 transition-transform">✓</span>
                    <span className="font-medium">LLM-Verständnis statt Klick-Anleitung</span>
                  </div>
                  <div className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-default">
                    <span className="text-primary text-2xl group-hover:scale-125 transition-transform">✓</span>
                    <span className="font-medium">Prompt-Architektur & Standards</span>
                  </div>
                  <div className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-default">
                    <span className="text-primary text-2xl group-hover:scale-125 transition-transform">✓</span>
                    <span className="font-medium">Vom Prompt zum Workflow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kernprodukte & Dienstleistungen */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Was wir anbieten</h2>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold">1</span>
                  Prompt Engineering & LLM-Verständnis
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trainings, die beim Fundament anfangen: Wie funktioniert ein LLM? Warum reagiert es so, wie es reagiert? Darauf aufbauend: systematisches Prompt Engineering, Prompt-Bibliotheken und Team-Standards für <strong>Fachkräfte, Wissensarbeiter und Entwickler</strong>.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold">2</span>
                  KI-Workflow-Design & Automation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Vom einzelnen Prompt zum skalierbaren Workflow: Custom GPTs, API-Anbindungen und automatisierte Prozessketten. Wir begleiten <strong>Teams und Organisationen</strong> beim Aufbau produktiver KI-Arbeitsabläufe, die über Copy-Paste hinausgehen.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold">3</span>
                  KI-Strategie & Governance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beratung für Führungskräfte und Entscheider: <strong>Wie wird ChatGPT zum Standardwerkzeug</strong> im Unternehmen? Von der Lizenz-Strategie über Prompt-Governance bis zur nachhaltigen Verankerung im Arbeitsalltag.
                </p>
              </Card>
            </div>
          </div>

          {/* Zielgruppe */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Ideales Kundenprofil</h2>
                <p className="text-muted-foreground">Für wen wir arbeiten</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Unser ideales Kundenprofil sind <strong>wissensintensive Organisationen und Unternehmen
              mit 20–5.000 Mitarbeitenden</strong> im deutschsprachigen Raum (DACH).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Primäre Ansprechpartner:</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Geschäftsführung</li>
                  <li>• CIOs / Head of IT</li>
                  <li>• Head of HR</li>
                  <li>• Head of Learning & Development</li>
                  <li>• Agile Coaches & Transformation Leads</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Teilnehmer unserer Trainings:</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Büroangestellte & Wissensarbeiter</li>
                  <li>• Teams & Abteilungen</li>
                  <li>• Führungskräfte</li>
                  <li>• IT-Teams & Administratoren</li>
                  <li>• Softwareentwickler</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Unternehmensgeschichte */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Wie wir hierher gekommen sind</h2>
                <p className="text-muted-foreground">Vom Agile Coaching zum KI-Workflow-Design</p>
              </div>
            </div>

            <div className="relative border-l-2 border-primary/30 pl-8 space-y-8">
              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-primary rounded-full"></div>
                <div className="font-bold text-lg text-primary mb-1">2011</div>
                <h3 className="text-xl font-semibold mb-2">Gründung Yellow-Boat Consulting</h3>
                <p className="text-muted-foreground">
                  ChatGPT-Trainings.de ist eine Marke der{" "}
                  <a
                    href="https://yellow-boat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Yellow-Boat Consulting
                    <ExternalLink className="w-3 h-3" />
                  </a>, gegründet 2011 in Köln. Der Schwerpunkt lag zunächst auf agiler Transformation und Teamstrukturen.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-primary/70 rounded-full"></div>
                <div className="font-bold text-lg text-primary mb-1">2011–2023</div>
                <h3 className="text-xl font-semibold mb-2">Über ein Jahrzehnt Veränderungsprojekte</h3>
                <p className="text-muted-foreground">
                  Yellow-Boat hat in dieser Zeit Hunderte von Scrum Mastern, Product Ownern und agilen Fachleuten ausgebildet – und dabei gelernt, wie Organisationen tatsächlich arbeiten, wo Prozesse haken und welche Interventionen wirklich greifen. Das klingt weit weg von KI, aber genau dieses Verständnis für reale Arbeitsabläufe ist der Grund, warum unsere ChatGPT-Trainings anders funktionieren als reine Tool-Schulungen.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-primary/80 rounded-full"></div>
                <div className="font-bold text-lg text-primary mb-1">2023</div>
                <h3 className="text-xl font-semibold mb-2">Erste KI-Trainings und Pilotprojekte</h3>
                <p className="text-muted-foreground">
                  Die Neuausrichtung beginnt: Erste KI-Anwendertrainings, Workshop-Serien in Köln, Pilotprojekte mit verschiedenen Kundenorganisationen. Parallel dazu intensiver Austausch mit dem DFKI und systematischer Aufbau von Expertise rund um Large Language Models, Prompt Engineering und die OpenAI-Plattform.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-primary/90 rounded-full"></div>
                <div className="font-bold text-lg text-primary mb-1">2024</div>
                <h3 className="text-xl font-semibold mb-2">KI-Workflows in eigener Praxis</h3>
                <p className="text-muted-foreground">
                  Yellow-Boat stellt die eigenen Prozesse konsequent auf KI-gestützte Arbeitsweisen um. Softwareprojekte werden mit No-Code/Low-Code und ChatGPT-API realisiert. Die Erfahrung: Was wir unseren Kunden empfehlen, nutzen wir selbst täglich. Im Dezember 2024 entsteht das erste strukturierte ChatGPT-Trainingsprogramm.
                </p>
              </div>

              <div className="relative mt-12">
                <div className="absolute -left-10 w-4 h-4 bg-primary rounded-full"></div>
                <div className="font-bold text-xl text-primary mb-1">2025</div>
                <h3 className="text-2xl font-semibold mb-2">ChatGPT-Trainings.de geht an den Start</h3>
                <p className="text-muted-foreground text-lg">
                  Mit chatgpt-trainings.de bündeln wir alles, was wir über produktive KI-Nutzung gelernt haben, in einer eigenständigen Trainingsplattform. Der Fokus: Prompt Engineering, LLM-Verständnis und KI-Workflow-Design – für Teams, die ChatGPT nicht nur ausprobieren, sondern als dauerhaftes Arbeitsinstrument etablieren wollen.
                </p>
              </div>
            </div>
          </div>

          {/* Marktpositionierung */}
          <div className="bg-gradient-to-br from-card/80 to-card/60 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mb-16 border border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Warum wir anders arbeiten</h2>
                <p className="text-muted-foreground">Keine Tool-Tour, sondern Workflow-Kompetenz</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Die meisten ChatGPT-Schulungen zeigen Oberflächen. Wir vermitteln, <strong>was unter der Oberfläche passiert</strong> – und wie man dieses Wissen in Arbeitsabläufe übersetzt, die täglich funktionieren.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Anders als Übersichtskurse:</h4>
                <p className="text-muted-foreground text-sm">
                  Wir erklären nicht, wo man klickt. Wir erklären, warum ein LLM auf eine bestimmte Prompt-Struktur besser reagiert als auf eine andere – und wie man daraus ein System baut.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Anders als reine IT-Schulungen:</h4>
                <p className="text-muted-foreground text-sm">
                  Jedes Training arbeitet mit echten Aufgaben aus dem Arbeitsalltag der Teilnehmer. Keine generischen Beispiele, sondern Prompts und Workflows für die tatsächlichen Rollen im Raum.
                </p>
              </div>
            </div>
          </div>

          {/* Fakten */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Zahlen, Daten, Fakten</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-card rounded-xl border border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">2011</div>
                <div className="text-sm text-muted-foreground">Gründung Yellow-Boat</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">2025</div>
                <div className="text-sm text-muted-foreground">Gründung chatgpt-trainings.de</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">DACH</div>
                <div className="text-sm text-muted-foreground">Region</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">Köln</div>
                <div className="text-sm text-muted-foreground">Standort</div>
              </div>
            </div>
          </div>

          {/* Köln Training Location */}
          <KoelnTraining />

          {/* CTA */}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">ChatGPT produktiv einsetzen – nicht nur ausprobieren</h2>
            <p className="text-muted-foreground mb-6">
              Wir zeigen Ihrem Team, wie aus einzelnen Prompts systematische Arbeitsabläufe werden. Sprechen wir darüber.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to="/#contact">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://yellow-boat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Yellow-Boat Consulting
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UeberUns;
