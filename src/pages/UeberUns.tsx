import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import KoelnTraining from "@/components/KoelnTraining";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Award, ArrowRight, ExternalLink } from "lucide-react";
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
        "description": "ChatGPT-Trainings.de vermittelt Prompt Engineering, Modellverständnis und strukturierte KI-Workflows an Unternehmen im DACH-Raum. Spezialisiert auf ChatGPT und OpenAI-Produkte.",
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
          "Datenschutzkonforme KI-Nutzung"
        ],
        "slogan": "Prompt-Kompetenz und LLM-Verständnis für Unternehmen, die ChatGPT systematisch einsetzen wollen",
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
        "description": "Spezialisierte Akademie für Prompt Engineering, LLM-Verständnis und ChatGPT-Workflows in Unternehmen",
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
        title="Über uns - chatgpt-trainings.de | Professionelle ChatGPT Trainings"
        description="ChatGPT-Trainings.de vermittelt Prompt Engineering und LLM-Verständnis an Unternehmen. Spezialisiert auf ChatGPT und OpenAI – keine generischen KI-Übersichten."
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
              Wer wir sind und <span className="text-primary">warum ChatGPT</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed mb-4 animate-slide-up-delayed">
              <strong>ChatGPT-Trainings.de</strong> vermittelt Prompt Engineering, Modellverständnis und strukturierte KI-Workflows an Teams, die ChatGPT nicht nur ausprobieren, sondern systematisch in ihre Arbeit einbauen wollen. Kein Tool-Überblick, kein Feature-Bingo – sondern Tiefe in einem Werkzeug.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wir zeigen, wie man Prompts baut, die reproduzierbare Ergebnisse liefern. Wie man Halluzinationen erkennt und vermeidet. Und wie Teams gemeinsame Standards für die Arbeit mit großen Sprachmodellen entwickeln.
            </p>
          </div>

          {/* Mission, Vision, Werte */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <h2 className="text-2xl font-bold mb-4">Unsere Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Teams befähigen, ChatGPT als <strong>verlässliches Arbeitswerkzeug</strong> einzusetzen – mit Verständnis für die Mechanik hinter den Ergebnissen.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <h2 className="text-2xl font-bold mb-4">Unsere Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Eine Arbeitswelt, in der Prompt-Kompetenz so selbstverständlich ist wie der Umgang mit E-Mail – und in der jeder Wissensarbeiter weiß, <strong>wann und wie er KI sinnvoll einsetzt</strong>.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <h2 className="text-2xl font-bold mb-4">Unsere Werte</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Tiefe statt Breite. Klartext statt Marketing.</strong> Wir zeigen, was funktioniert – und sagen offen, wo die Grenzen von ChatGPT liegen.
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
                  Unser Ansatz: Vom Prompt zum Arbeitsergebnis
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
                  Wir glauben, dass der Unterschied zwischen produktiver und unproduktiver ChatGPT-Nutzung im Verständnis liegt – nicht im Tool selbst. Wer weiß, wie Tokenisierung funktioniert, warum Kontext entscheidend ist und wann ein Prompt scheitert, arbeitet auf einem völlig anderen Niveau. Genau dieses Verständnis vermitteln wir, angepasst an die Aufgaben und Rollen Ihrer Teilnehmer.
                </p>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                  Über das reine Training hinaus begleiten wir den Aufbau von Prompt-Standards, die Entwicklung von Custom GPTs für Ihre Organisation und die Einführung von Qualitätskriterien für KI-generierte Arbeitsergebnisse. Für Führungskräfte und Projektverantwortliche bieten wir Coaching zur strategischen ChatGPT-Integration.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <div className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-default">
                    <span className="text-primary text-2xl group-hover:scale-125 transition-transform">✓</span>
                    <span className="font-medium">Vor Ort & Remote</span>
                  </div>
                  <div className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-default">
                    <span className="text-primary text-2xl group-hover:scale-125 transition-transform">✓</span>
                    <span className="font-medium">ChatGPT Free & Enterprise</span>
                  </div>
                  <div className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-default">
                    <span className="text-primary text-2xl group-hover:scale-125 transition-transform">✓</span>
                    <span className="font-medium">Branchen-Use-Cases</span>
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
                  Prompt Engineering Trainings
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hands-on-Trainings, in denen Teilnehmer lernen, wie Prompts aufgebaut sein müssen, damit ChatGPT zuverlässig brauchbare Ergebnisse liefert. Von der Rollenanweisung über Multi-Step-Prompts bis zu strukturierten Outputs in JSON oder Tabellenform. Für <strong>Fachkräfte, Wissensarbeiter und Führungskräfte</strong>.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold">2</span>
                  ChatGPT-Rollout & Prompt-Standards
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Begleitung beim Aufbau von Custom GPTs, Qualitätsstandards für KI-generierte Arbeitsergebnisse und datenschutzkonformen Nutzungsrichtlinien. Inklusive Regelwerk für DSGVO-konforme Nutzung und Leitlinien für den verantwortungsvollen Umgang mit LLM-Outputs. Für <strong>mittelständische und große Organisationen</strong> im DACH-Raum.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold">3</span>
                  Führungskräfte-Coaching
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Persönliches Coaching für Entscheider, die verstehen wollen, was ChatGPT leisten kann, wo die Risiken liegen und wie sich <strong>KI-gestützte Arbeitsweisen im Team verankern</strong> lassen – jenseits von Pilotprojekten.
                </p>
              </Card>
            </div>
          </div>

          {/* Zielgruppe */}
          {/* Unternehmensgeschichte */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Unternehmensgeschichte</h2>
                <p className="text-muted-foreground">Von Agile Coaching zu KI-Trainings</p>
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
                <div className="font-bold text-lg text-primary mb-1">2011–2022</div>
                <h3 className="text-xl font-semibold mb-2">Über ein Jahrzehnt Veränderungsprojekte</h3>
                <p className="text-muted-foreground">
                  Yellow-Boat Consulting begleitet Veränderungsprojekte in Konzernen und Mittelstand – mit dem Fokus auf agile Arbeitsweisen und die Befähigung von Teams und Führungskräften. Diese Erfahrung mit Organisations- und Lernprozessen bildet die Grundlage für unsere heutigen KI-Trainings.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-primary/80 rounded-full"></div>
                <div className="font-bold text-lg text-primary mb-1">November 2022</div>
                <h3 className="text-xl font-semibold mb-2">ChatGPT geht online</h3>
                <p className="text-muted-foreground">
                  OpenAI veröffentlicht ChatGPT als kostenlose Vorschau. Innerhalb von fünf Tagen erreicht der Chatbot eine Million Nutzer – schneller als jedes andere Verbraucherprodukt zuvor.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-yellow-500 rounded-full border-2 border-yellow-300"></div>
                <div className="font-bold text-lg text-yellow-600 mb-1">Dezember 2022</div>
                <h3 className="text-xl font-semibold mb-2">Erster ChatGPT-Account bei Yellow-Boat</h3>
                <p className="text-muted-foreground">
                  Fünf Tage nach dem Launch erstellt Yellow-Boat Consulting den ersten ChatGPT-Account und beginnt mit ersten Versuchen. Seitdem: permanente und intensive Nutzung des Tools in der täglichen Arbeit.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-primary/80 rounded-full"></div>
                <div className="font-bold text-lg text-primary mb-1">Januar 2023</div>
                <h3 className="text-xl font-semibold mb-2">100 Millionen Nutzer in zwei Monaten</h3>
                <p className="text-muted-foreground">
                  ChatGPT erreicht 100 Millionen monatlich aktive Nutzer – ein Rekord in der Geschichte digitaler Verbraucherprodukte. Das Thema KI rückt endgültig in den Mainstream.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-yellow-500 rounded-full border-2 border-yellow-300"></div>
                <div className="font-bold text-lg text-yellow-600 mb-1">Oktober 2023</div>
                <h3 className="text-xl font-semibold mb-2">Erste KI-Trainings und Pilotprojekte</h3>
                <p className="text-muted-foreground">
                  Yellow-Boat startet erste ChatGPT-Workshops mit Unternehmenskunden in Köln und Leverkusen. Austausch mit dem DFKI (Deutsches Forschungszentrum für Künstliche Intelligenz) und intensive Auseinandersetzung mit Prompt Engineering und Nutzung im beruflichen Kontext.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-primary/80 rounded-full"></div>
                <div className="font-bold text-lg text-primary mb-1">Mai 2024</div>
                <h3 className="text-xl font-semibold mb-2">GPT-4o verändert die Spielregeln</h3>
                <p className="text-muted-foreground">
                  Mit GPT-4o kombiniert OpenAI Text, Bild und Sprache in einem Modell – und macht leistungsfähige KI erstmals für alle kostenlos zugänglich. Die Nachfrage nach Trainings steigt spürbar.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-yellow-500 rounded-full border-2 border-yellow-300"></div>
                <div className="font-bold text-lg text-yellow-600 mb-1">2024</div>
                <h3 className="text-xl font-semibold mb-2">KI-Workflows in eigener Praxis</h3>
                <p className="text-muted-foreground">
                  Yellow-Boat stellt die eigenen Arbeitsprozesse konsequent auf KI-gestützte Workflows um. Daraus entstehen die ersten strukturierten ChatGPT-Trainingsprogramme – basierend auf der eigenen Erfahrung, was funktioniert und was nicht. ChatGPT erreicht Ende des Jahres 300 Millionen wöchentliche Nutzer.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-primary/80 rounded-full"></div>
                <div className="font-bold text-lg text-primary mb-1">Februar 2025</div>
                <h3 className="text-xl font-semibold mb-2">EU AI Act: Schulungspflicht tritt in Kraft</h3>
                <p className="text-muted-foreground">
                  Artikel 4 der EU-KI-Verordnung wird wirksam: Unternehmen, die KI-Systeme einsetzen, müssen sicherstellen, dass ihre Mitarbeitenden über ausreichende KI-Kompetenz verfügen.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-yellow-500 rounded-full border-2 border-yellow-300"></div>
                <div className="font-bold text-lg text-yellow-600 mb-1">Februar 2025</div>
                <h3 className="text-xl font-semibold mb-2">Erste Pflicht-Trainings nach EU AI Act</h3>
                <p className="text-muted-foreground">
                  Yellow-Boat bietet als einer der ersten Anbieter zertifizierte Pflicht-Trainings gemäß EU AI Act an – immer mit dem Anspruch, Mitarbeitende tatsächlich zu befähigen, die ersten Schritte mit KI-gestützter Arbeit zu gehen.
                </p>
              </div>

              <div className="relative mt-12">
                <div className="absolute -left-10 w-5 h-5 bg-primary rounded-full border-2 border-primary/50"></div>
                <div className="font-bold text-xl text-primary mb-1">2025</div>
                <h3 className="text-2xl font-semibold mb-2">ChatGPT-Trainings.de geht an den Start</h3>
                <p className="text-muted-foreground text-lg">
                  Launch von chatgpt-trainings.de als eigenständige Marke für ChatGPT-Schulungen. Das Angebotsportfolio umfasst Kick-Offs, Ganztagstrainings, Bootcamps, begleitete Lernreisen, Hackathons und Launch-Events – jeweils zugeschnitten auf die ChatGPT-Reife der teilnehmenden Organisation.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-5 h-5 bg-yellow-500 rounded-full border-2 border-yellow-300"></div>
                <div className="font-bold text-xl text-yellow-600 mb-1">2025</div>
                <h3 className="text-2xl font-semibold mb-2">Gründung{" "}
                  <a
                    href="https://copilotenschule.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Copilotenschule.de
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </h3>
                <p className="text-muted-foreground text-lg">
                  Um gezielt tiefe Trainings für Firmen und Teams anzubieten, die in der Microsoft Copilot Welt starten, gründet Yellow-Boat die{" "}
                  <a
                    href="https://copilotenschule.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Copilotenschule.de
                  </a>{" "}
                  als zweite spezialisierte Trainingsmarke.
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
            <h2 className="text-2xl font-bold mb-4">Prompt-Kompetenz für Ihr Team aufbauen?</h2>
            <p className="text-muted-foreground mb-6">
              Lassen Sie uns besprechen, welches Format zu Ihrem Team und Ihren Zielen passt.
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
