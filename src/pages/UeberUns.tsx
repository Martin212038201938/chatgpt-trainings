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
          "ChatGPT Enterprise",
          "ChatGPT Team",
          "KI-Enablement",
          "KI-Einführung",
          "KI-Adoption",
          "KI-gestützte Büroarbeit",
          "Prompt Engineering",
          "Custom GPTs"
        ],
        "slogan": "Büroarbeit durch ChatGPT und KI messbar produktiver, wirksamer und menschlicher machen",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "info@chatgpt-trainings.de",
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
        title="Über uns - chatgpt-trainings.de | Professionelle ChatGPT Trainings"
        description="ChatGPT-Trainings.de ist der spezialisierte Weiterbildungsanbieter für den professionellen Einsatz von ChatGPT und KI-Tools in Unternehmen. Tiefe Praxisnähe statt oberflächliche Tool-Übersichten."
        keywords={[
          "chatgpt-trainings",
          "ChatGPT Training Anbieter",
          "Yellow-Boat Consulting",
          "ChatGPT Schulung Deutschland",
          "ChatGPT Experte",
          "KI Training Partner"
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
              Ihr Partner für <span className="text-primary">professionelle ChatGPT</span> Weiterbildung
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed mb-4 animate-slide-up-delayed">
              <strong>ChatGPT-Trainings.de</strong> hat sich darauf spezialisiert, Unternehmen bei der professionellen Einführung und Nutzung von ChatGPT zu begleiten. Statt eines beliebigen Rundumschlags über verschiedenste KI-Tools konzentrieren wir uns gezielt auf die Werkzeuge, die in Ihrem Arbeitsalltag tatsächlich Wirkung zeigen.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unser Ziel: Ihre Mitarbeiter, Teams und Führungskräfte befähigen, ChatGPT sicher, effizient und wertschöpfend einzusetzen. Dabei verbinden wir echte Arbeitssituationen mit sofort umsetzbaren Methoden.
            </p>
          </div>

          {/* Mission, Vision, Werte */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <h2 className="text-2xl font-bold mb-4">Unsere Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir machen Wissensarbeit durch den gezielten Einsatz von ChatGPT und KI spürbar
                <strong> produktiver und wirkungsvoller</strong>.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <h2 className="text-2xl font-bold mb-4">Unsere Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir sehen eine Zukunft, in der KI als <strong>alltäglicher Sparringspartner</strong> am Arbeitsplatz dient und Menschen sich auf das konzentrieren können, was wirklich zählt: kreative, strategische und zwischenmenschliche Aufgaben.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <h2 className="text-2xl font-bold mb-4">Unsere Werte</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Praxisnähe, Wirksamkeit, Ehrlichkeit.</strong> Was wir vermitteln, funktioniert am nächsten Arbeitstag. Was nicht funktioniert, kommunizieren wir offen.
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

          {/* Vision Detail Block */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl blur-xl" />
              <div className="relative bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl rounded-2xl p-8 md:p-12 text-center border border-border/50 shadow-xl">
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Unsere Vision: KI als selbstverständlicher Sparringspartner
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
                  Wir stellen uns eine Arbeitswelt vor, in der KI als natürlicher Bestandteil des beruflichen Handelns angesehen wird und Mitarbeiter ihre volle Aufmerksamkeit auf Aufgaben richten können, die Innovationskraft, Kreativität und menschliche Interaktion erfordern. Jedes Trainingskonzept wird präzise nach den Anforderungen Ihrer Organisation, Ihrer Branche und Ihren strategischen Zielen ausgerichtet.
                </p>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                  Wir unterstützen KI-Einführungsprojekte umfassend – von der initialen Bedarfsanalyse über Governance-Konzepte bis zur nachhaltigen Verankerung im Arbeitsalltag.
                  Nach der Trainingsphase bieten wir Coaching und laufende Unterstützung für Leitungskräfte,
                  Projektverantwortliche und Transformationsteams, um KI-gestützte Arbeitsweisen dauerhaft zu etablieren.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <div className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-default">
                    <span className="text-primary text-2xl group-hover:scale-125 transition-transform">✓</span>
                    <span className="font-medium">Vor Ort oder Remote</span>
                  </div>
                  <div className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-default">
                    <span className="text-primary text-2xl group-hover:scale-125 transition-transform">✓</span>
                    <span className="font-medium">Flexible Termine</span>
                  </div>
                  <div className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-default">
                    <span className="text-primary text-2xl group-hover:scale-125 transition-transform">✓</span>
                    <span className="font-medium">Individueller Zuschnitt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kernprodukte & Dienstleistungen */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Unsere Kernprodukte & Dienstleistungen</h2>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold">1</span>
                  Praxistrainings & Workshops
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Praxistrainings und interaktive Workshops zu ChatGPT mit starkem Fokus auf echte Anwendungsfälle aus dem Arbeitsalltag. Hauptzielgruppe: <strong>Fachkräfte, Wissensarbeiter, Teams und Entscheider</strong>.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold">2</span>
                  Projektbegleitung & KI-Einführung
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Begleitung von KI-Einführungsprojekten – von der Bedarfsanalyse über Governance-Konzepte bis zur nachhaltigen Verankerung im Arbeitsalltag. Für <strong>mittelständische und große Organisationen</strong> im DACH-Raum.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold">3</span>
                  Führungs-Coaching & Strategieberatung
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Persönliches Coaching für Führungskräfte und Transformationsteams, die <strong>ChatGPT-gestützte Arbeitsweisen dauerhaft etablieren</strong> wollen.
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
                <h2 className="text-3xl font-bold mb-2">Unternehmensgeschichte</h2>
                <p className="text-muted-foreground">Über ein Jahrzehnt Erfahrung</p>
              </div>
            </div>

            <div className="relative border-l-2 border-primary/30 pl-8 space-y-8">
              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-primary rounded-full"></div>
                <div className="font-bold text-lg text-primary mb-1">2011</div>
                <h3 className="text-xl font-semibold mb-2">Gründung Yellow-Boat Consulting</h3>
                <p className="text-muted-foreground">
                  ChatGPT-Trainings.de ist eine Marke der im Jahr 2011 ins Leben gerufenen{" "}
                  <a
                    href="https://yellow-boat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Yellow-Boat Consulting
                    <ExternalLink className="w-3 h-3" />
                  </a>.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-primary/70 rounded-full"></div>
                <div className="font-bold text-lg text-primary mb-1">2011–2023</div>
                <h3 className="text-xl font-semibold mb-2">Spezialisierung auf Agile & Transformation</h3>
                <p className="text-muted-foreground">
                  Über mehr als ein Jahrzehnt hat Yellow-Boat Consulting umfangreiche Veränderungsprojekte umgesetzt und Hunderte von Scrum Mastern, Product Ownern und agilen Fachleuten ausgebildet.
                  Daneben berät das Unternehmen Organisationen aller Größen bei der Umsetzung agiler, flexibler, dezentraler und hybridarbeit-orientierter Teamstrukturen. Das Netzwerk „Yellow-Fleet" vereint hochqualifizierte, zertifizierte Berater und Trainern.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-primary/80 rounded-full"></div>
                <div className="font-bold text-lg text-primary mb-1">2023</div>
                <h3 className="text-xl font-semibold mb-2">Orientierung zur KI-gestützten Arbeit</h3>
                <p className="text-muted-foreground">
                  Schrittweise Neuausrichtung auf praxisnahe Schulungsangebote für die Transformation von Arbeitsabläufen durch Künstliche Intelligenz. 2023 starten erste KI-Anwendertrainings. Pilotprojekte erfolgen im Rahmen der Workshop-Serie in Köln, gefolgt von KI-Trainings mit unterschiedlichen Kundenorganisationen. Aktiver Austausch mit dem DFKI (Deutsche Forschungszentrum für Künstliche Intelligenz).
                  Gleichzeitig werden intensive Lernprogramme, Konferenzen und Fachdiskussionen genutzt, um fundierte Expertise in der Anwendung von KI im beruflichen Umfeld aufzubauen.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-primary/90 rounded-full"></div>
                <div className="font-bold text-lg text-primary mb-1">2024</div>
                <h3 className="text-xl font-semibold mb-2">AI-First Ansatz & ChatGPT Trainings</h3>
                <p className="text-muted-foreground">
                  Im Sommer 2024 stellt Yellow-Boat Consulting ihre Prozesse und Abläufe konsequent auf einen KI-zentrierten Arbeitsansatz um. In der Folge werden zahlreiche Softwareprojekte mit No-Code- und Low-Code-Technologien realisiert und von erfahrenen Entwicklern betreut und überwacht. Im Dezember 2024 wird das erste ChatGPT-Trainingsprogramm konzipiert und erfolgreich durchgeführt.
                </p>
              </div>

              <div className="relative mt-12">
                <div className="absolute -left-10 w-4 h-4 bg-primary rounded-full"></div>
                <div className="font-bold text-xl text-primary mb-1">2025</div>
                <h3 className="text-2xl font-semibold mb-2">Marktstart ChatGPT-Trainings</h3>
                <p className="text-muted-foreground text-lg">
                  Start von chatgpt-trainings.de und Aufbau eines kompetenten Trainer- und Beratungsteams für eine eigenständige,
                  spezialisierte Lernakademie mit deutlichem Schwerpunkt auf der beruflichen Anwendung von ChatGPT und KI-Systemen.
                  Gleichzeitig wird das Angebot strategisch erweitert um zusätzliche Formate wie praxisorientierte Launch-Veranstaltungen und spezialisierte Schulungsreisen. Das Partnernetzwerk wird um technische Dienstleistungsunternehmen ergänzt, um Softwareprojekte umzusetzen und zu unterstützen. Entwickler werden von spezialisierten KI-Experten in moderne, KI-gestützte Entwicklungsmethoden und Toollandschaften eingeführt.
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
                <h2 className="text-2xl font-bold mb-2">Marktpositionierung</h2>
                <p className="text-muted-foreground">Was uns unterscheidet</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Wir positionieren uns als <strong>Spezialist für echte Praxisanwendung</strong> mit
              tiefem Verständnis für die Realität moderner Wissensarbeit und Unternehmensstrukturen.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Im Vergleich zu Standard-Kursanbietern:</h4>
                <p className="text-muted-foreground text-sm">
                  Wir verzichten auf oberflächliche Übersichtskurse. Stattdessen fokussieren wir auf konkrete, unmittelbar umsetzbare Lösungen für Ihren Arbeitsalltag.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Im Vergleich zu technischen IT-Schulungen:</h4>
                <p className="text-muted-foreground text-sm">
                  Unser Angebot ist zugeschnitten auf die spezifischen Anforderungen jeder Gruppe von Teilnehmern und nutzt Szenarien aus ihrem eigentlichen beruflichen Umfeld.
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
            <h2 className="text-2xl font-bold mb-4">Bereit für ChatGPT und KI im Unternehmen?</h2>
            <p className="text-muted-foreground mb-6">
              Lassen Sie uns über Ihre KI-Strategie und ein passendes Trainingskonzept sprechen.
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
