import { Brain, Users, TrendingUp, Zap, GraduationCap, Mic, PartyPopper } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ChatGPTTier = "free" | "paid";

export interface TrainingFAQ {
  question: string;
  answer: string;
}

export interface Training {
  slug: string;
  icon: LucideIcon;
  title: string;
  duration: string;
  description: string;
  features: string[];
  tiers: ChatGPTTier[];
  // SEO-Felder
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  // FAQ für strukturierte Daten
  faqs?: TrainingFAQ[];
}

// Alle Trainingsmodule – Kern-Trainings und begleitende Veranstaltungen
export const trainings: Training[] = [
  // ═══════════════════════════════════════════
  // KERN-TRAININGS
  // ═══════════════════════════════════════════
  {
    slug: "chatgpt-kick-off",
    icon: Zap,
    title: "ChatGPT Kick-Off – Der kompakte Einstieg in 4 Stunden",
    duration: "4 Stunden (Halbtag)",
    description: "Der schnelle Einstieg für Teams, die ChatGPT ab sofort produktiv nutzen wollen. In vier intensiven Stunden vermitteln wir die wichtigsten Grundlagen: Wie funktioniert ChatGPT? Welche Aufgaben lassen sich sofort an die KI delegieren? Und wie formulieren Sie Prompts, die wirklich brauchbare Ergebnisse liefern? Am Ende des Kick-Offs geht jeder Teilnehmer mit mindestens drei fertigen Workflows für den eigenen Arbeitsalltag nach Hause.",
    features: [
      "ChatGPT verstehen: Wie die KI denkt, was sie kann und wo die Grenzen liegen",
      "Sofort loslegen: Die ersten 10 Prompts, die jeden Büroalltag verändern",
      "Prompt-Handwerk: Struktur, Kontext und Rollenanweisungen richtig einsetzen",
      "Live-Übungen: Jeder Teilnehmer baut eigene Prompts für reale Aufgaben",
      "Quick Wins identifizieren: Welche täglichen Aufgaben ChatGPT sofort übernehmen kann",
      "Sicherheit und Datenschutz: Was darf rein, was bleibt draußen – die wichtigsten Regeln",
      "Persönliche Prompt-Sammlung: Drei fertige Workflows zum Mitnehmen"
    ],
    tiers: ["free", "paid"],
    metaTitle: "ChatGPT Kick-Off Training – 4 Stunden Kompakt-Einstieg | chatgpt-trainings.de",
    metaDescription: "In 4 Stunden vom ChatGPT-Einsteiger zum produktiven Anwender. Kompakter Kick-Off mit Live-Übungen und fertigen Workflows für den Arbeitsalltag.",
    keywords: ["ChatGPT Kick-Off", "ChatGPT Halbtag Training", "ChatGPT Einstieg", "ChatGPT Kompakt Schulung", "KI Kick-Off Unternehmen"],
    faqs: [
      {
        question: "Reichen 4 Stunden wirklich, um ChatGPT produktiv nutzen zu lernen?",
        answer: "Ja – der Kick-Off ist bewusst auf schnelle Handlungsfähigkeit ausgelegt. Statt Theorie-Überladung konzentrieren wir uns auf die Techniken, die im Büroalltag den größten Unterschied machen. Teilnehmer verlassen das Training mit fertigen Prompts und können sofort loslegen. Für tiefere Themen empfehlen wir anschließend das Starter Training oder die Lernreise."
      },
      {
        question: "Eignet sich der Kick-Off auch als Auftakt für eine breitere ChatGPT-Einführung im Unternehmen?",
        answer: "Absolut. Viele Unternehmen nutzen den Kick-Off als ersten Schritt, um Begeisterung zu wecken und die Basis zu legen. Danach folgen oft das Starter Training für ausgewählte Teams oder eine Lernreise für die nachhaltige Verankerung. Wir beraten Sie gerne zur passenden Kombination."
      },
      {
        question: "Können wir den Kick-Off für verschiedene Abteilungen mit unterschiedlichen Aufgaben durchführen?",
        answer: "Ja, wir passen die Live-Übungen und Beispiele an Ihre Teilnehmergruppe an. Ob Marketing, HR, Vertrieb oder Finanzen – jeder arbeitet an Prompts für die eigenen Aufgaben. Bei sehr heterogenen Gruppen empfehlen wir abteilungsspezifische Sessions."
      }
    ]
  },
  {
    slug: "chatgpt-starter-training",
    icon: Brain,
    title: "ChatGPT Starter Training – Solide Grundlagen für den Arbeitsalltag",
    duration: "1 Tag (7h) oder 2 × 3,5 Stunden",
    description: "Das umfassende Grundlagen-Training für alle, die ChatGPT systematisch in ihren Arbeitsalltag integrieren wollen. In einem vollen Tag oder zwei Halbtagen erarbeiten sich Ihre Mitarbeiter ein fundiertes Verständnis von Prompt Engineering, lernen fortgeschrittene Techniken wie Chain-of-Thought und Few-Shot-Prompting kennen und entwickeln abteilungsspezifische Workflows. Dieses Training ist der ideale Einstieg, um ChatGPT nicht nur auszuprobieren, sondern wirklich wirksam einzusetzen.",
    features: [
      "Prompt Engineering von Grund auf: Von einfachen Anfragen bis zu komplexen Mehrstufenprompts",
      "Fortgeschrittene Techniken: Chain-of-Thought, Few-Shot-Prompting, Rollenanweisungen, System-Prompts",
      "ChatGPT für Textarbeit: E-Mails, Reports, Zusammenfassungen, Protokolle – schneller und besser",
      "Recherche mit KI: Web-Suche nutzen, Quellen prüfen, Halluzinationen erkennen",
      "Datenanalyse leicht gemacht: Tabellen auswerten, Trends erkennen, Erkenntnisse aufbereiten",
      "Abteilungsspezifische Workshops: Jeder Teilnehmer baut Workflows für die eigenen Aufgaben",
      "Eigene Prompt-Bibliothek erstellen: Wiederverwendbare Templates für wiederkehrende Aufgaben",
      "Datenschutz und sichere Nutzung: DSGVO-konforme Arbeit mit ChatGPT im Unternehmenskontext",
      "Flexibles Format: Wahlweise als kompakter Ganztag oder zwei aufeinander aufbauende Halbtage"
    ],
    tiers: ["free", "paid"],
    metaTitle: "ChatGPT Starter Training – Ganztag oder 2×3,5h | chatgpt-trainings.de",
    metaDescription: "Umfassendes ChatGPT Grundlagen-Training: Prompt Engineering, Textarbeit, Recherche und Datenanalyse. Als Ganztag (7h) oder 2×3,5h buchbar.",
    keywords: ["ChatGPT Starter Training", "ChatGPT Grundlagen Schulung", "ChatGPT Ganztag Training", "Prompt Engineering Kurs", "ChatGPT Workshop Unternehmen"],
    faqs: [
      {
        question: "Was ist der Unterschied zwischen dem Kick-Off und dem Starter Training?",
        answer: "Der Kick-Off (4h) vermittelt die wichtigsten Grundlagen für einen schnellen Einstieg. Das Starter Training geht deutlich tiefer: Fortgeschrittene Prompt-Techniken, abteilungsspezifische Workshops und der Aufbau einer eigenen Prompt-Bibliothek brauchen mehr Zeit. Wir empfehlen den Kick-Off als Appetitanreger und das Starter Training als solide Basis."
      },
      {
        question: "Sollen wir den Ganztag oder die zwei Halbtage buchen?",
        answer: "Beide Formate decken den gleichen Inhalt ab. Die zwei Halbtage haben den Vorteil, dass Teilnehmer zwischen den Sessions das Gelernte im Arbeitsalltag ausprobieren können. Der Ganztag ist kompakter und eignet sich, wenn Terminkoordination wichtiger ist als Übungszeit dazwischen. Wir beraten Sie gerne."
      },
      {
        question: "Brauchen unsere Mitarbeiter Vorkenntnisse für das Starter Training?",
        answer: "Nein. Das Starter Training beginnt bei den Grundlagen und baut systematisch auf. Wer vorher den Kick-Off besucht hat, steigt schneller ein – aber es ist keine Voraussetzung. Wichtig ist nur, dass alle Teilnehmer einen ChatGPT-Zugang haben."
      },
      {
        question: "Wie stellen Sie sicher, dass jeder Teilnehmer etwas Relevantes für seinen Job mitnimmt?",
        answer: "Durch abteilungsspezifische Live-Workshops: Jeder Teilnehmer arbeitet an seinen eigenen Aufgaben und baut Prompts für den eigenen Arbeitsalltag. Ein Marketing-Manager arbeitet an anderen Prompts als eine Controllerin – und genau das macht den Unterschied zu generischen KI-Schulungen."
      }
    ]
  },
  {
    slug: "chatgpt-intensiv-bootcamp",
    icon: GraduationCap,
    title: "KI-gestützte Wissensarbeit Intensiv – Das 2-Tage-Bootcamp",
    duration: "2 Tage (je 7 Stunden)",
    description: "Zwei Tage, die Ihre Art zu arbeiten nachhaltig verändern. Dieses Intensiv-Bootcamp geht weit über Prompt Engineering hinaus: Ihre Mitarbeiter lernen, komplexe Wissensarbeit systematisch mit KI-Unterstützung zu erledigen – von der strategischen Analyse über die Erstellung umfangreicher Dokumente bis hin zu automatisierten Workflows. Am Ende des Bootcamps beherrschen Teilnehmer fortgeschrittene Techniken wie Custom GPTs, mehrstufige Arbeitsprozesse und die Integration von ChatGPT in bestehende Tools und Abläufe.",
    features: [
      "Tag 1 – Fortgeschrittenes Prompting: Komplexe Aufgaben in Teilschritte zerlegen und mit ChatGPT systematisch lösen",
      "Mehrstufige Workflows: Recherche → Analyse → Synthese → Ergebnis – durchgängig KI-gestützt",
      "Custom GPTs bauen: Eigene spezialisierte KI-Assistenten für wiederkehrende Aufgaben erstellen",
      "Dokumentenarbeit auf neuem Niveau: Umfangreiche Reports, Konzepte und Strategiepapiere mit KI-Unterstützung",
      "Tag 2 – Integration in den Arbeitsalltag: ChatGPT mit bestehenden Tools verbinden und Routinen aufbauen",
      "Automatisierung: Wiederkehrende Aufgaben identifizieren und systematisch an die KI delegieren",
      "Qualitätssicherung: KI-Outputs professionell prüfen, verfeinern und auf Unternehmensstandards bringen",
      "Capstone-Projekt: Jeder Teilnehmer löst eine echte Aufgabe aus dem eigenen Arbeitskontext",
      "Peer-Learning: Gegenseitiges Feedback und Best-Practice-Austausch im Team",
      "Nachhaltige Verankerung: Persönlicher Aktionsplan für die ersten 30 Tage nach dem Bootcamp"
    ],
    tiers: ["paid"],
    metaTitle: "ChatGPT Intensiv-Bootcamp – 2 Tage Wissensarbeit mit KI | chatgpt-trainings.de",
    metaDescription: "2-Tage-Bootcamp für KI-gestützte Wissensarbeit: Custom GPTs, mehrstufige Workflows, Dokumentenerstellung und Automatisierung. Für erfahrene Anwender.",
    keywords: ["ChatGPT Bootcamp", "KI Intensiv Training", "ChatGPT Advanced Schulung", "Wissensarbeit mit KI", "ChatGPT 2 Tage Training", "Custom GPTs lernen"],
    faqs: [
      {
        question: "Für wen eignet sich das Intensiv-Bootcamp?",
        answer: "Für Mitarbeiter, die ChatGPT bereits grundlegend nutzen und jetzt den nächsten Schritt machen wollen. Das Bootcamp richtet sich an Wissensarbeiter, die komplexe Aufgaben bearbeiten: Analysten, Projektmanager, Berater, Fachexperten, Führungskräfte. Die Grundlagen sollten bekannt sein – idealerweise durch unser Starter Training oder vergleichbare Erfahrung."
      },
      {
        question: "Was unterscheidet das Bootcamp vom Starter Training?",
        answer: "Das Starter Training vermittelt die Grundlagen des Prompt Engineering. Das Bootcamp baut darauf auf und zeigt, wie Sie komplexe Wissensarbeit durchgängig mit KI-Unterstützung erledigen: mehrstufige Analyseprojekte, Custom GPTs für Ihre Abteilung, automatisierte Workflows. Der Fokus liegt auf Tiefe und Integration statt auf Breite."
      },
      {
        question: "Können wir das Bootcamp auf unsere Branche oder Abteilung zuschneiden?",
        answer: "Ja, das ist sogar empfehlenswert. Im Vorfeld besprechen wir Ihre Use Cases und passen die Übungen und das Capstone-Projekt an Ihre realen Aufgaben an. So maximieren Sie den Transfer in den Arbeitsalltag."
      },
      {
        question: "Lohnen sich 2 Tage – oder reicht ein kürzeres Format?",
        answer: "Fortgeschrittene Techniken wie Custom GPTs, mehrstufige Workflows und die Integration in bestehende Arbeitsprozesse brauchen Zeit zum Üben und Verinnerlichen. Die zwei Tage sind so aufgebaut, dass Tag 1 die Techniken vermittelt und Tag 2 die Anwendung und Verankerung sicherstellt. Das ist eine Investition, die sich durch die Produktivitätsgewinne schnell rechnet."
      }
    ]
  },
  {
    slug: "chatgpt-lernreise",
    icon: TrendingUp,
    title: "ChatGPT Lernreise – Nachhaltiger Kompetenzaufbau über Wochen",
    duration: "4 × 2 Stunden oder 6 × 2 Stunden (über 4–8 Wochen)",
    description: "Lernen, anwenden, reflektieren, vertiefen – die Lernreise verteilt den Kompetenzaufbau auf mehrere Wochen und sorgt so für nachhaltige Verankerung im Arbeitsalltag. Zwischen den Live-Sessions wenden Teilnehmer das Gelernte direkt an, sammeln Erfahrungen und bringen konkrete Fragen mit in die nächste Runde. Dieses Format ist ideal für Organisationen, die eine breite und dauerhafte ChatGPT-Adoption anstreben – nicht nur ein einmaliges Training, sondern eine echte Verhaltensänderung.",
    features: [
      "Verteiltes Lernen: 4 oder 6 Sessions à 2 Stunden über mehrere Wochen",
      "Session 1: ChatGPT-Grundlagen und erste Gehversuche mit dem eigenen Account",
      "Session 2: Fortgeschrittenes Prompting und abteilungsspezifische Anwendungen",
      "Session 3: Komplexe Workflows, Recherche und Dokumentenerstellung mit KI",
      "Session 4: Custom GPTs und Automatisierung (in der 4er-Variante: Abschluss + Aktionsplan)",
      "Session 5 (6er): Vertiefung und Spezialthemen nach Bedarf der Gruppe",
      "Session 6 (6er): Abschluss mit Peer-Review, Best Practices und persönlichem Aktionsplan",
      "Praxis-Aufgaben zwischen den Sessions: Gelerntes direkt im Arbeitsalltag anwenden",
      "Erfahrungsaustausch: Erfolge und Hürden in der Gruppe besprechen",
      "Flexibel skalierbar: Parallele Lerngruppen für größere Rollouts möglich"
    ],
    tiers: ["free", "paid"],
    metaTitle: "ChatGPT Lernreise – 4×2h oder 6×2h Blended Learning | chatgpt-trainings.de",
    metaDescription: "Nachhaltiger ChatGPT-Kompetenzaufbau über Wochen: 4 oder 6 Live-Sessions mit Praxis-Aufgaben. Ideal für breite KI-Adoption in Unternehmen.",
    keywords: ["ChatGPT Lernreise", "ChatGPT Blended Learning", "KI Lernprogramm Unternehmen", "ChatGPT nachhaltig lernen", "ChatGPT Adoption Programm"],
    faqs: [
      {
        question: "Warum eine Lernreise statt eines kompakten Trainings?",
        answer: "Forschung zeigt: Verteiltes Lernen mit Anwendungsphasen dazwischen führt zu deutlich besserer Verankerung als kompakte Formate. In der Lernreise wenden Ihre Mitarbeiter das Gelernte zwischen den Sessions im echten Arbeitsalltag an, sammeln Erfahrungen und klären offene Fragen in der nächsten Runde. Das Ergebnis: Nachhaltige Verhaltensänderung statt Strohfeuer."
      },
      {
        question: "Sollen wir die 4er- oder 6er-Variante buchen?",
        answer: "Die 4er-Variante (4×2h) deckt die Kernthemen kompakt ab und eignet sich für Teams mit wenig Zeitbudget. Die 6er-Variante (6×2h) bietet mehr Raum für Vertiefung, Spezialthemen und Peer-Learning. Für eine breite Einführung empfehlen wir die 6er-Variante, für gezielte Auffrischung reicht die 4er."
      },
      {
        question: "Können mehrere Teams parallel die Lernreise durchlaufen?",
        answer: "Ja, das ist sogar ein häufiges Szenario. Bei größeren Rollouts starten wir mehrere Lerngruppen parallel oder versetzt. Jede Gruppe kann inhaltlich auf ihre Abteilung zugeschnitten werden – Marketing arbeitet an anderen Use Cases als Controlling."
      },
      {
        question: "Was passiert, wenn ein Teilnehmer eine Session verpasst?",
        answer: "Kein Problem. Wir stellen Materialien und Aufzeichnungen bereit, sodass verpasste Inhalte nachgeholt werden können. Bei der nächsten Session holen wir kurz auf und stellen sicher, dass alle auf dem gleichen Stand sind."
      }
    ]
  },

  // ═══════════════════════════════════════════
  // BEGLEITENDE VERANSTALTUNGEN
  // ═══════════════════════════════════════════
  {
    slug: "chatgpt-keynote",
    icon: Mic,
    title: "Keynote: KI und die Zukunft der Arbeit – Impulsvortrag für Ihr Unternehmen",
    duration: "60–90 Minuten",
    description: "Ein packender Impulsvortrag, der Begeisterung weckt und Orientierung gibt. Ideal als Auftakt für Ihre KI-Initiative, als Programmpunkt bei Firmenevents oder als Impuls für Führungskräfte. Martin Lang zeigt anhand konkreter Beispiele, wie ChatGPT und KI die Wissensarbeit bereits heute transformieren – und was das für Ihr Unternehmen bedeutet. Keine Buzzwords, sondern Substanz: Was funktioniert, was nicht, und wo es sich lohnt zu investieren.",
    features: [
      "Einblick in den aktuellen Stand der KI: Was kann ChatGPT heute wirklich – jenseits des Hypes?",
      "Live-Demonstrationen: Beeindruckende Anwendungen, die sofort verstanden werden",
      "Branchenspezifische Relevanz: Wie verändert KI Ihre Branche und Ihre Arbeitsprozesse?",
      "Orientierung für Entscheider: Wo investieren, wo abwarten, wo Risiken managen",
      "Mitarbeiter mitnehmen: Wie Sie Begeisterung statt Angst vor KI erzeugen",
      "Interaktive Elemente: Q&A und Live-Ausprobieren mit dem Publikum",
      "Individuell anpassbar: Schwerpunkte nach Ihren Themen und Ihrer Zielgruppe"
    ],
    tiers: ["free", "paid"],
    metaTitle: "ChatGPT Keynote – Impulsvortrag KI & Zukunft der Arbeit | chatgpt-trainings.de",
    metaDescription: "Keynote zu ChatGPT und KI in der Arbeitswelt: Live-Demos, Branchenrelevanz und klare Orientierung. Ideal als Auftakt für Ihre KI-Initiative.",
    keywords: ["ChatGPT Keynote", "KI Impulsvortrag", "KI Keynote Speaker", "ChatGPT Vortrag Unternehmen", "KI Zukunft der Arbeit"],
    faqs: [
      {
        question: "Für welches Publikum eignet sich die Keynote?",
        answer: "Für alle – von der Geschäftsführung über Führungskräfte bis zu allen Mitarbeitenden. Der Vortrag ist bewusst so aufgebaut, dass er sowohl strategische als auch praktische Perspektiven bietet. Wir passen den Schwerpunkt an Ihre Zielgruppe an."
      },
      {
        question: "Kann die Keynote als Auftakt für eine ChatGPT-Einführung dienen?",
        answer: "Ja, genau dafür wird sie häufig gebucht. Die Keynote schafft Bewusstsein und Begeisterung, bevor die eigentlichen Trainings starten. Sie ist der ideale erste Schritt, um die Organisation auf die KI-Reise mitzunehmen."
      }
    ]
  },
  {
    slug: "chatgpt-launch-event",
    icon: PartyPopper,
    title: "KI-Launch-Event – Der große Auftakt für Ihre ChatGPT-Einführung",
    duration: "Halbtag oder Ganztag",
    description: "Machen Sie den Start Ihrer KI-Initiative zum Erlebnis. Unser Launch-Event kombiniert eine inspirierende Keynote mit Hands-on-Workshops, Live-Demonstrationen und interaktiven Stationen. Ihre Mitarbeiter erleben ChatGPT nicht als trockene Schulung, sondern als spannende Entdeckungsreise. Das Event schafft den kommunikativen Rahmen, der eine erfolgreiche Einführung braucht – mit Begeisterung statt Pflichtprogramm.",
    features: [
      "Keynote: Inspirierender Auftakt mit Live-Demos und konkreten Anwendungsbeispielen",
      "Hands-on-Stationen: Teilnehmer probieren ChatGPT an verschiedenen Thementischen selbst aus",
      "Abteilungs-Workshops: Erste Use Cases für Marketing, HR, Finanzen, Vertrieb etc. entwickeln",
      "Leadership-Session: Separater Block für Führungskräfte zu Strategie und Governance",
      "Kommunikationspaket: Vorlagen für interne Kommunikation rund um die KI-Einführung",
      "Erfolgsgeschichten: Praxisberichte von Unternehmen, die ChatGPT bereits produktiv nutzen",
      "Roadmap-Workshop: Gemeinsam die nächsten Schritte für Ihr Unternehmen planen",
      "Skalierbar: Von 20 bis 500+ Teilnehmer, vor Ort oder hybrid"
    ],
    tiers: ["free", "paid"],
    metaTitle: "ChatGPT Launch-Event – Erlebnistag für Ihre KI-Einführung | chatgpt-trainings.de",
    metaDescription: "KI-Launch-Event mit Keynote, Workshops und Live-Demos: Der perfekte Auftakt für Ihre ChatGPT-Einführung. Von 20 bis 500+ Teilnehmer.",
    keywords: ["ChatGPT Launch Event", "KI Einführung Event", "ChatGPT Kick-Off Veranstaltung", "KI Erlebnistag", "ChatGPT Rollout Event"],
    faqs: [
      {
        question: "Was unterscheidet das Launch-Event von einem normalen Training?",
        answer: "Das Launch-Event ist keine Schulung, sondern eine Kommunikationsmaßnahme. Es geht darum, Begeisterung zu wecken, Berührungsängste abzubauen und die gesamte Organisation auf die KI-Reise mitzunehmen. Die eigentlichen Trainings folgen danach – mit Mitarbeitern, die motiviert statt skeptisch sind."
      },
      {
        question: "Wie groß kann das Event sein?",
        answer: "Von einer Abteilung mit 20 Personen bis zu unternehmensweiten Events mit 500+ Teilnehmern. Wir passen Format, Stationen und Workshop-Gruppen an Ihre Größe an. Hybrid-Formate mit Remote-Teilnehmern sind ebenfalls möglich."
      },
      {
        question: "Übernehmen Sie auch die organisatorische Planung?",
        answer: "Ja, wir unterstützen bei Agenda-Gestaltung, Technik-Setup, Kommunikationsvorlagen und Moderation. Sie können das Event komplett bei uns buchen oder nur einzelne Bausteine. Wir haben Erfahrung mit Events in Unternehmen jeder Größe."
      }
    ]
  },
  {
    slug: "chatgpt-hackathon",
    icon: Users,
    title: "KI-Hackathon – Innovation und Teamgeist in einem Tag",
    duration: "1 Tag (7–8 Stunden)",
    description: "Ein Tag, an dem Teams im freundschaftlichen Wettbewerb die besten KI-Anwendungen für Ihr Unternehmen entwickeln. Der Hackathon bringt Kreativität, Praxis und Teamgeist zusammen: Abteilungsübergreifende Teams identifizieren echte Probleme, entwickeln KI-gestützte Lösungen mit ChatGPT und präsentieren ihre Ergebnisse vor einer Jury. Die besten Ideen werden anschließend tatsächlich umgesetzt – so entsteht echter Mehrwert statt PowerPoint-Innovation.",
    features: [
      "Challenge-Definition: Echte Probleme aus Ihrem Unternehmen als Hackathon-Aufgaben",
      "Team-Bildung: Abteilungsübergreifende Teams für maximale Perspektivenvielfalt",
      "Guided Hacking: Erfahrene KI-Mentoren begleiten jedes Team",
      "Prototyp-Entwicklung: Teams bauen funktionierende Lösungen mit ChatGPT und Custom GPTs",
      "Pitch-Session: Jedes Team präsentiert seine Lösung vor Jury und Publikum",
      "Prämierung und nächste Schritte: Die besten Ideen bekommen einen Umsetzungsplan",
      "Dokumentation: Alle Ergebnisse werden festgehalten und für die Organisation aufbereitet",
      "Teambuilding-Effekt: KI-Kompetenz aufbauen und Zusammenarbeit stärken"
    ],
    tiers: ["free", "paid"],
    metaTitle: "KI-Hackathon mit ChatGPT – Innovation im Team | chatgpt-trainings.de",
    metaDescription: "KI-Hackathon für Unternehmen: Teams entwickeln im Wettbewerb echte ChatGPT-Lösungen. Kreativität, Praxis und Teamgeist an einem Tag.",
    keywords: ["KI Hackathon", "ChatGPT Hackathon", "KI Innovation Tag", "ChatGPT Team Event", "KI Wettbewerb Unternehmen"],
    faqs: [
      {
        question: "Brauchen die Teilnehmer Programmierkenntnisse für den Hackathon?",
        answer: "Nein. Der Hackathon ist bewusst so gestaltet, dass alle Mitarbeiter teilnehmen können – von der Assistenz bis zur Geschäftsführung. Die Lösungen werden mit ChatGPT und Custom GPTs gebaut, nicht mit Code. Technische Vorkenntnisse sind kein Muss."
      },
      {
        question: "Werden die Hackathon-Ergebnisse auch wirklich umgesetzt?",
        answer: "Das ist unser Anspruch. Die besten Ideen bekommen direkt einen Umsetzungsplan und Verantwortliche zugewiesen. Wir haben die Erfahrung, dass ein gut moderierter Hackathon Lösungen hervorbringt, die tatsächlich im Arbeitsalltag ankommen – oft schneller als klassische Innovationsprozesse."
      }
    ]
  }
];

export function getTrainingBySlug(slug: string): Training | undefined {
  return trainings.find(t => t.slug === slug);
}
