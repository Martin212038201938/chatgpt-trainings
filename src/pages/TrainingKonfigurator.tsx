import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, ArrowRight, ArrowLeft, Send, Loader2, Calendar, HelpCircle, X, Plus, Trash2, Sparkles, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useToast } from "@/hooks/use-toast";

// Kategorien für die Module
interface ModuleCategory {
  id: string;
  title: string;
  description: string;
  modules: TrainingModule[];
}

type CompetencyLevel = "essentials" | "advanced" | "workflow-design";

interface TrainingModule {
  id: string;
  title: string;
  category: string;
  levels: CompetencyLevel[];
}

// Alle auswählbaren Trainingsmodule – nach Kompetenzstufe kategorisiert
const moduleCategories: ModuleCategory[] = [
  {
    id: "chatgpt-basics",
    title: "ChatGPT Grundlagen",
    description: "Einstieg in die produktive Nutzung von ChatGPT – Prompt Engineering und KI-Kompetenz",
    modules: [
      { id: "prompt-basics", title: "Prompt Engineering Grundlagen: Struktur, Kontext, Beispiele", levels: ["essentials"], category: "chatgpt-basics" },
      { id: "iterative-prompting", title: "Iteratives Prompting: Ergebnisse verfeinern, nachfragen, vertiefen", levels: ["essentials"], category: "chatgpt-basics" },
      { id: "web-search", title: "ChatGPT Web Search für Recherche: Web-Suche, Zusammenfassungen, Faktenprüfung", levels: ["essentials"], category: "chatgpt-basics" },
      { id: "text-work", title: "Textarbeit mit KI: Schreiben, Umformulieren, Kürzen, Übersetzen", levels: ["essentials"], category: "chatgpt-basics" },
      { id: "creative-ai", title: "Kreative Anwendungen: Brainstorming, Ideengenerierung, Perspektivwechsel", levels: ["essentials"], category: "chatgpt-basics" },
      { id: "ai-output-eval", title: "KI-Output kritisch bewerten: Halluzinationen erkennen, Grenzen verstehen", levels: ["essentials"], category: "chatgpt-basics" },
      { id: "prompt-library", title: "Eigene Prompt-Bibliothek aufbauen: Templates für wiederkehrende Aufgaben", levels: ["essentials", "advanced"], category: "chatgpt-basics" },
    ]
  },
  {
    id: "chatgpt-advanced",
    title: "Advanced Prompt Systems",
    description: "Fortgeschrittene Prompt-Techniken, Datenanalyse und strukturierte Ausgabeformate",
    modules: [
      { id: "data-analysis", title: "Datenanalyse mit ChatGPT: Dateien hochladen, Auswertungen, Visualisierungen", levels: ["advanced"], category: "chatgpt-advanced" },
      { id: "code-interpreter", title: "Code Interpreter: Python-Code ausführen, Ergebnisse analysieren, Automatisierung", levels: ["advanced"], category: "chatgpt-advanced" },
      { id: "dalle-generation", title: "Bildgenerierung mit DALL-E 3: Prompts for visuals, Variationen, Batch-Generierung", levels: ["advanced"], category: "chatgpt-advanced" },
      { id: "advanced-prompting", title: "Advanced Prompting Techniken: Chain-of-Thought, Few-Shot Learning, Role-Playing", levels: ["advanced"], category: "chatgpt-advanced" },
      { id: "multi-turn-convos", title: "Multi-Turn-Konversationen: Komplexe Dialoge, Kontextgeflecht, Zusammenhänge bewahren", levels: ["advanced"], category: "chatgpt-advanced" },
      { id: "file-handling", title: "File Handling & Batch-Processing: Mehrere Dateien verarbeiten, Export, Formate", levels: ["advanced"], category: "chatgpt-advanced" },
    ]
  },
  {
    id: "chatgpt-office",
    title: "ChatGPT im Arbeitsalltag",
    description: "ChatGPT für Ihre tägliche Arbeit – E-Mails, Meetings, Reporting, Projektmanagement",
    modules: [
      { id: "email-templates", title: "E-Mail-Vorlagen & -Schreiben: Professional Emails, Follow-ups, Templates", levels: ["essentials"], category: "chatgpt-office" },
      { id: "meeting-prep", title: "Meeting-Vorbereitung: Agendas, Unterlagen, Talking Points generieren", levels: ["essentials"], category: "chatgpt-office" },
      { id: "reporting", title: "Reporting & Dashboards: Status-Reports, Monatsberichte, Präsentationen", levels: ["essentials", "advanced"], category: "chatgpt-office" },
      { id: "project-mgmt", title: "Projektmanagement-Support: Zeitpläne, Meilensteine, Risiko-Analyse, Dokumentation", levels: ["advanced"], category: "chatgpt-office" },
      { id: "summaries", title: "Zusammenfassungen & Notizen: Meetings, Dokumente, E-Mails zusammenfassen", levels: ["essentials"], category: "chatgpt-office" },
      { id: "translations", title: "Professionelle Übersetzungen: Business Documents, E-Mails, multilingual Communication", levels: ["essentials"], category: "chatgpt-office" },
      { id: "content-calendars", title: "Content-Planung: Editorial Calendars, Social Media Posts, Newsletter", levels: ["essentials", "advanced"], category: "chatgpt-office" },
    ]
  },
  {
    id: "custom-gpts",
    title: "Custom GPTs & Automatisierung",
    description: "Erstellen Sie Ihre eigenen ChatGPT-Versionen für spezifische Use Cases",
    modules: [
      { id: "custom-gpts-basics", title: "Custom GPTs erstellen: Builder-Interface, Instructions, Knowledge hochladen", levels: ["workflow-design"], category: "custom-gpts" },
      { id: "gpt-actions", title: "GPT Actions & API-Integration: External APIs anbinden, Workflows automatisieren", levels: ["workflow-design"], category: "custom-gpts" },
      { id: "knowledge-upload", title: "Knowledge Base aufbauen: PDFs, Docs, Interne Wissensquellen integrieren", levels: ["workflow-design"], category: "custom-gpts" },
      { id: "workflow-automation", title: "Workflow-Automatisierung: Geschäftsprozesse mit Custom GPTs digitalisieren", levels: ["workflow-design"], category: "custom-gpts" },
      { id: "internal-chatbots", title: "Interne Chatbots: Employee Support, FAQ-Automatisierung, Self-Service", levels: ["workflow-design"], category: "custom-gpts" },
      { id: "gpt-governance", title: "Governance & Sharing: Team-GPTs, Rollen, Berechtigungen verwalten", levels: ["workflow-design"], category: "custom-gpts" },
      { id: "custom-gpt-examples", title: "Use Case Vorlagen: Sales Assistant, Customer Support, HR Bot, Content Generator", levels: ["workflow-design"], category: "custom-gpts" },
    ]
  },
  {
    id: "compliance",
    title: "Compliance, Recht & EU AI Act",
    description: "DSGVO-konforme und rechtssichere ChatGPT-Nutzung im Unternehmen",
    modules: [
      { id: "dsgvo", title: "DSGVO-konforme ChatGPT-Nutzung: Rechtsgrundlagen, Dokumentationspflichten", levels: ["essentials"], category: "compliance" },
      { id: "eu-ai-act", title: "EU AI Act Grundlagen: Anwendungsbereich, Risikoklassifizierung, Pflichten", levels: ["essentials"], category: "compliance" },
      { id: "ai-kompetenz", title: "Artikel 4 KI-Kompetenz: Was der Gesetzgeber fordert, Anforderungen erfüllen", levels: ["essentials"], category: "compliance" },
      { id: "data-protection", title: "Datenschutz-Impact-Assessment: Risiken identifizieren, Maßnahmen definieren", levels: ["advanced"], category: "compliance" },
      { id: "openai-security", title: "OpenAI Sicherheitsarchitektur: Datenflüsse, Verschlüsselung, Audit-Logs, Privacy", levels: ["advanced"], category: "compliance" },
      { id: "sensitive-data", title: "Umgang mit sensiblen Daten: Was darf rein, was nicht – Klassifizierung, Policies", levels: ["advanced"], category: "compliance" },
      { id: "legal-ip", title: "Rechtliche Aspekte: Urheberrecht, Haftungsfragen, Vertragsgestaltung, IP-Rechte", levels: ["essentials", "advanced"], category: "compliance" },
      { id: "eu-ai-certificate", title: "Schulungszertifikat gemäß EU AI Act für Audits und Behörden", levels: ["essentials", "advanced"], category: "compliance" },
    ]
  },
  {
    id: "strategy",
    title: "Strategie & Change Management",
    description: "Erfolgreiche Einführung und Skalierung von ChatGPT im Unternehmen",
    modules: [
      { id: "process-analysis", title: "Prozessanalyse: Welche Aufgaben profitieren am meisten von ChatGPT?", levels: ["advanced", "workflow-design"], category: "strategy" },
      { id: "roi-calculation", title: "ROI-Berechnung und Business Case: Kosteneinsparungen quantifizieren, Timeframes", levels: ["advanced", "workflow-design"], category: "strategy" },
      { id: "rollout-plan", title: "Phasenweiser Rollout-Plan: Pilot-Gruppen, Erfolgskriterien, Skalierung", levels: ["workflow-design"], category: "strategy" },
      { id: "change-mgmt", title: "Change Management und Adoption: Widerstände überwinden, Champions aufbauen", levels: ["workflow-design"], category: "strategy" },
      { id: "governance", title: "Governance Framework: Policies definieren, Verantwortlichkeiten klären, Audit Trails", levels: ["workflow-design"], category: "strategy" },
      { id: "kpis", title: "Success Metrics und KPIs: Nutzung messen, Produktivität tracken, Performance Monitoring", levels: ["advanced", "workflow-design"], category: "strategy" },
      { id: "rollout-learnings", title: "Erfahrungen aus erfolgreichen ChatGPT-Rollouts: Fallstudien und erprobte Muster", levels: ["advanced", "workflow-design"], category: "strategy" },
    ]
  },
  {
    id: "events-workshops",
    title: "Events, Workshops & Keynotes",
    description: "Hackathons, Keynotes, Eventtage – für maximales Engagement und Lerneffekt",
    modules: [
      { id: "hackathon-format", title: "ChatGPT Hackathon: Teambildung, Challenge-Briefing, Arbeitsphase, Pitch", levels: ["advanced", "workflow-design"], category: "events-workshops" },
      { id: "hackathon-ideation", title: "Use Case Ideation Workshop: Geschäftsprobleme mit ChatGPT lösen", levels: ["advanced", "workflow-design"], category: "events-workshops" },
      { id: "prompt-battle", title: "Prompt Engineering Battle: Wer entwickelt die effektivsten Prompts? Wettbewerb mit Preisen", levels: ["essentials", "advanced"], category: "events-workshops" },
      { id: "keynote-vision", title: "Keynote: Die Zukunft der Wissensarbeit mit KI – was kommt auf uns zu?", levels: ["essentials"], category: "events-workshops" },
      { id: "keynote-live-demos", title: "Live-Demonstrationen: Beeindruckende ChatGPT Use Cases in Action", levels: ["essentials"], category: "events-workshops" },
      { id: "launch-event", title: "Launch Event: Multistation Eventtag mit Keynote, Hands-on, Challenges, Networking", levels: ["essentials"], category: "events-workshops" },
      { id: "gamification", title: "Gamification & Interaktive Challenges: KI-Rätsel, Quizze, Leaderboards, Preise", levels: ["essentials", "advanced"], category: "events-workshops" },
    ]
  },
  {
    id: "lernreise",
    title: "KI-Workflow-Lernreise (8 Wochen)",
    description: "Begleitete Lernreise für nachhaltigen Kompetenzaufbau – von den Basics zum Workflow-Experten",
    modules: [
      { id: "woche1", title: "Woche 1: ChatGPT Grundlagen – Interface, erste Prompts + Use Case: E-Mail-Zusammenfassungen", levels: ["essentials"], category: "lernreise" },
      { id: "woche2", title: "Woche 2: Prompt Engineering Mastery + Use Case: Textoptimierung und Übersetzungen", levels: ["essentials", "advanced"], category: "lernreise" },
      { id: "woche3", title: "Woche 3: Web Search & Recherche + Use Case: Marktanalysen und Competitive Intelligence", levels: ["advanced"], category: "lernreise" },
      { id: "woche4", title: "Woche 4: Kreative Anwendungen + Use Case: Content-Generierung und Ideenfindung", levels: ["advanced"], category: "lernreise" },
      { id: "woche5", title: "Woche 5: Code Interpreter & Datenanalyse + Use Case: Automatisierte Reports", levels: ["advanced"], category: "lernreise" },
      { id: "woche6", title: "Woche 6: DALL-E & Bildgenerierung + Use Case: Visual Content erstellen", levels: ["advanced"], category: "lernreise" },
      { id: "woche7", title: "Woche 7: Custom GPTs & Automatisierung + Use Case: Eigenen KI-Assistent bauen", levels: ["workflow-design"], category: "lernreise" },
      { id: "woche8", title: "Woche 8: Compliance, Strategie & Skalierung + Use Case: Rollout-Plan für Ihr Team", levels: ["workflow-design"], category: "lernreise" },
    ]
  },
];

// Alle Module flach für einfache Suche
const allModules = moduleCategories.flatMap(cat => cat.modules);

type LevelFilter = "all" | CompetencyLevel;

const levelFilterOptions: { value: LevelFilter; label: string }[] = [
  { value: "all", label: "Alle Module" },
  { value: "essentials", label: "Essentials" },
  { value: "advanced", label: "Advanced" },
  { value: "workflow-design", label: "Workflow-Design" },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  licenseType: string;
  employeeCount: string;
  trainingCount: string;
  locationType: string;
  trainingLocation: string;
  groupCount: string;
  additionalInfo: string;
}

const TrainingKonfigurator = () => {
  const [step, setStep] = useState(1);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [levelFilter, setLevelFilter] = useState<LevelFilter>("all");
  const [showLevelHelp, setShowLevelHelp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);
  const [customModules, setCustomModules] = useState<string[]>([]);
  const [customModuleInput, setCustomModuleInput] = useState("");
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    licenseType: "",
    employeeCount: "",
    trainingCount: "",
    locationType: "",
    trainingLocation: "",
    groupCount: "",
    additionalInfo: ""
  });

  // Gefilterte Kategorien basierend auf Level-Filter
  const filteredCategories = useMemo(() => {
    if (levelFilter === "all") return moduleCategories;

    return moduleCategories
      .map(cat => ({
        ...cat,
        modules: cat.modules.filter(m => m.levels.includes(levelFilter))
      }))
      .filter(cat => cat.modules.length > 0);
  }, [levelFilter]);

  const toggleModule = (moduleId: string) => {
    setSelectedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Custom Module hinzufügen
  const addCustomModule = () => {
    if (customModuleInput.trim() && !customModules.includes(customModuleInput.trim())) {
      setCustomModules(prev => [...prev, customModuleInput.trim()]);
      setCustomModuleInput("");
    }
  };

  // Custom Module entfernen
  const removeCustomModule = (moduleToRemove: string) => {
    setCustomModules(prev => prev.filter(m => m !== moduleToRemove));
  };

  // Deduplizierte Liste der ausgewählten Module-Titel (inkl. Custom)
  const selectedModuleTitles = useMemo(() => {
    const titles = selectedModules
      .map(id => allModules.find(m => m.id === id)?.title)
      .filter(Boolean) as string[];
    return [...new Set(titles)];
  }, [selectedModules]);

  // Alle Module für Anzeige (Standard + Custom)
  const allSelectedTitles = useMemo(() => {
    return [...selectedModuleTitles, ...customModules];
  }, [selectedModuleTitles, customModules]);

  // Prüfen ob Module ausgewählt sind
  const hasAnySelection = selectedModules.length > 0 || customModules.length > 0;

  // E-Mail beim Termin buchen senden und Bookings öffnen
  const handleBookingClick = () => {
    const bookingWindow = window.open('https://outlook.office.com/book/CopilotErstgesprch@yellow-boat.com/', '_blank');

    if (!bookingWindow) {
      toast({
        title: "Popup blockiert",
        description: "Bitte erlauben Sie Popups für diese Seite oder öffnen Sie den Booking-Link manuell.",
        variant: "destructive"
      });
    }

    setIsBookingSubmitting(true);

    const messageWithModules = `
KONFIGURATION FÜR TERMIN-BUCHUNG

AUSGEWÄHLTE TRAININGSMODULE (${selectedModuleTitles.length} Module):
${selectedModuleTitles.map(t => `• ${t}`).join('\n')}
${customModules.length > 0 ? `
---
EIGENE MODULWÜNSCHE (${customModules.length}):
${customModules.map(t => `★ ${t}`).join('\n')}` : ''}

---
KONTAKTDATEN:
Vorname: ${formData.firstName}
Nachname: ${formData.lastName}
Unternehmen: ${formData.company}
E-Mail: ${formData.email}
Telefon: ${formData.phone}

---
ZUSÄTZLICHE ANGABEN:
${formData.licenseType ? `Lizenztyp: ${formData.licenseType}` : ''}
${formData.employeeCount ? `Unternehmensgröße: ${formData.employeeCount} Mitarbeiter` : ''}
${formData.trainingCount ? `Zu schulende Mitarbeiter: ${formData.trainingCount}` : ''}
${formData.locationType ? `Durchführungsart: ${formData.locationType}` : ''}
${formData.trainingLocation ? `Standort: ${formData.trainingLocation}` : ''}
${formData.groupCount ? `Anzahl Gruppen: ${formData.groupCount}` : ''}

${formData.additionalInfo ? `---\nINFORMATIONEN UND WEITERE BENÖTIGTE INHALTE:\n${formData.additionalInfo}` : ''}
    `.trim();

    fetch('/api/send-contact-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: messageWithModules,
        subject: `Konfiguration für Kunde (${formData.company}, ${formData.firstName}, ${formData.lastName})`
      }),
    })
    .then(async (response) => {
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }
      const result = await response.json();
      if (!result.success) {
        throw new Error(result.error || 'Unbekannter Fehler');
      }
      toast({
        title: "Konfiguration gesendet!",
        description: "Ihre Auswahl wurde übermittelt.",
      });
    })
    .catch((error) => {
      console.error('Konfigurator E-Mail Fehler:', error);
      toast({
        title: "Hinweis",
        description: "Terminbuchung geöffnet. E-Mail-Übermittlung wird nachgeholt.",
      });
    })
    .finally(() => {
      setIsBookingSubmitting(false);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.phone) {
      toast({
        title: "Fehlende Angaben",
        description: "Bitte füllen Sie alle Pflichtfelder aus (Vorname, Nachname, E-Mail, Unternehmen, Telefon).",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    const messageWithModules = `
AUSGEWÄHLTE TRAININGSMODULE (${selectedModuleTitles.length} Module):
${selectedModuleTitles.map(t => `• ${t}`).join('\n')}
${customModules.length > 0 ? `
---
EIGENE MODULWÜNSCHE (${customModules.length}):
${customModules.map(t => `★ ${t}`).join('\n')}` : ''}

---
ZUSÄTZLICHE ANGABEN:
${formData.licenseType ? `Lizenztyp: ${formData.licenseType}` : ''}
${formData.employeeCount ? `Unternehmensgröße: ${formData.employeeCount} Mitarbeiter` : ''}
${formData.trainingCount ? `Zu schulende Mitarbeiter: ${formData.trainingCount}` : ''}
${formData.locationType ? `Durchführungsart: ${formData.locationType}` : ''}
${formData.trainingLocation ? `Standort: ${formData.trainingLocation}` : ''}
${formData.groupCount ? `Anzahl Gruppen: ${formData.groupCount}` : ''}

${formData.additionalInfo ? `---\nINFORMATIONEN UND WEITERE BENÖTIGTE INHALTE:\n${formData.additionalInfo}` : ''}
    `.trim();

    const totalModuleCount = selectedModuleTitles.length + customModules.length;

    try {
      const response = await fetch('/api/send-contact-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: messageWithModules,
          subject: `Training-Anfrage: ${totalModuleCount} Module ausgewählt${customModules.length > 0 ? ` (inkl. ${customModules.length} eigene Wünsche)` : ''}`
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.error || 'Unbekannter Fehler');
      }

      toast({
        title: "Anfrage gesendet!",
        description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      });
      setStep(1);
      setSelectedModules([]);
      setCustomModules([]);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        licenseType: "",
        employeeCount: "",
        trainingCount: "",
        locationType: "",
        trainingLocation: "",
        groupCount: "",
        additionalInfo: ""
      });
    } catch (error) {
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Training Konfigurator | Prompt Engineering & KI-Workflow-Module zusammenstellen"
        description="Stellen Sie Ihr individuelles ChatGPT-Training zusammen: Prompt Engineering, LLM-Verständnis, Custom GPTs und KI-Workflow-Design – modularer Baukasten für Ihr Team."
        canonicalUrl="https://chatgpt-trainings.de/training-konfigurator"
      />
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header - Apple-inspired clean design */}
          <div className="text-center mb-8">
            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
              Training Konfigurator
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto mb-6 animate-slide-up-delayed">
              Stellen Sie Ihr individuelles ChatGPT-Training zusammen.
              Wählen Sie die Module, die für Ihr Team relevant sind, und erhalten Sie ein maßgeschneidertes Angebot.
            </p>

            {/* Kompetenzstufen-Erklärung */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 border border-blue-200">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-100 text-[11px] px-2 py-0.5">
                  Essentials
                </Badge>
                <span className="text-sm text-muted-foreground">Prompting Basics, Textarbeit</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-50 border border-purple-200">
                <Badge className="bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-100 text-[11px] px-2 py-0.5">
                  Advanced
                </Badge>
                <span className="text-sm text-muted-foreground">Multi-Step Prompts, Rollenlogik</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-50 border border-orange-200">
                <Badge className="bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-100 text-[11px] px-2 py-0.5">
                  Workflow-Design
                </Badge>
                <span className="text-sm text-muted-foreground">Automatisierung, Custom GPTs</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mt-4">
              Drei Kompetenzstufen – wählen Sie die Module, die zum aktuellen Stand Ihres Teams passen.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                1
              </div>
              <span className="font-medium hidden sm:inline">Module auswählen</span>
            </div>
            <div className={`w-16 h-1 rounded ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                2
              </div>
              <span className="font-medium hidden sm:inline">Angebot anfordern</span>
            </div>
          </div>

          {/* Step 1: Module Selection */}
          {step === 1 && (
            <div className="animate-fade-in">
              {/* Level Filter */}
              <div className="flex justify-center mb-10">
                <div className="inline-flex items-center gap-1 p-1 bg-muted/60 rounded-lg border">
                  {levelFilterOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setLevelFilter(option.value)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        levelFilter === option.value
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Module Categories - left 2/3 */}
                <div className="lg:col-span-2 space-y-4">
                  {filteredCategories.map((category, categoryIndex) => {
                    // Anzahl der ausgewählten Module in dieser Kategorie
                    const selectedInCategory = category.modules.filter(m => selectedModules.includes(m.id)).length;

                    return (
                      <details
                        key={category.id}
                        className="group rounded-xl border bg-card shadow-sm overflow-hidden"
                        open={categoryIndex === 0}
                      >
                        {/* Summary - immer sichtbar, klickbar zum Auf-/Zuklappen */}
                        <summary className="flex items-center gap-4 p-4 cursor-pointer list-none hover:bg-muted/50 transition-colors select-none">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                              {selectedInCategory > 0 && (
                                <Badge className="bg-primary text-primary-foreground text-[10px] px-1.5 py-0">
                                  {selectedInCategory} ausgewählt
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mt-0.5">{category.description}</p>
                          </div>
                          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                        </summary>

                        {/* Module-Content - immer im DOM für SEO, nur visuell versteckt */}
                        <div className="px-4 pb-4 pt-2 border-t border-border/50">
                          <div className="grid sm:grid-cols-2 gap-3">
                            {category.modules.map((module) => {
                              const isSelected = selectedModules.includes(module.id);
                              return (
                                <label
                                  key={module.id}
                                  htmlFor={`module-${module.id}`}
                                  className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 hover:bg-muted/50 ${
                                    isSelected
                                      ? 'border-primary bg-primary/5'
                                      : 'border-border hover:border-primary/50'
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    id={`module-${module.id}`}
                                    checked={isSelected}
                                    onChange={() => toggleModule(module.id)}
                                    className="mt-1 h-4 w-4 rounded border-primary text-primary focus:ring-primary cursor-pointer"
                                  />
                                  <div className="flex-1">
                                    <span className="text-sm leading-tight block">{module.title}</span>
                                    <div className="flex gap-1 mt-1.5">
                                      {module.levels.map((level) => (
                                        <Badge
                                          key={level}
                                          className={`${
                                            level === "essentials" ? "bg-blue-100 text-blue-800 border-blue-200" :
                                            level === "advanced" ? "bg-purple-100 text-purple-800 border-purple-200" :
                                            "bg-orange-100 text-orange-800 border-orange-200"
                                          } hover:opacity-90 text-[10px] px-1.5 py-0`}
                                        >
                                          {level === "essentials" ? "Essentials" : level === "advanced" ? "Advanced" : "Workflow-Design"}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </label>
                              );
                            })}
                          </div>
                        </div>
                      </details>
                    );
                  })}

                  {/* Eigene Module anfragen */}
                  <Card className="overflow-hidden border-dashed border-2 border-primary/30 bg-primary/5">
                    <CardHeader className="bg-primary/10 pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        Eigene Module anfragen
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Fehlt Ihnen ein Thema? Fügen Sie hier beliebig viele eigene Modulwünsche hinzu.
                      </p>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="flex gap-2 mb-4">
                        <Input
                          placeholder="z.B. ChatGPT für Legal Teams, KI in der Produktion..."
                          value={customModuleInput}
                          onChange={(e) => setCustomModuleInput(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addCustomModule())}
                          className="flex-1"
                        />
                        <Button
                          type="button"
                          onClick={addCustomModule}
                          disabled={!customModuleInput.trim()}
                          className="gap-1"
                        >
                          <Plus className="w-4 h-4" />
                          Hinzufügen
                        </Button>
                      </div>

                      {customModules.length > 0 && (
                        <div className="space-y-2">
                          {customModules.map((module, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between gap-3 p-3 rounded-lg border border-primary/30 bg-card"
                            >
                              <div className="flex items-center gap-2">
                                <Badge className="bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-100 text-[10px] px-1.5 py-0">
                                  Eigenes Modul
                                </Badge>
                                <span className="text-sm">{module}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeCustomModule(module)}
                                className="text-muted-foreground hover:text-destructive transition-colors p-1"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      {customModules.length === 0 && (
                        <p className="text-sm text-muted-foreground italic text-center py-4">
                          Noch keine eigenen Module hinzugefügt. Geben Sie oben Ihren Wunsch ein und klicken Sie auf "Hinzufügen".
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Real-time selection summary - right 1/3 */}
                <div className="lg:col-span-1">
                  <div className="sticky top-28">
                    <Card className={`${hasAnySelection ? 'border-primary' : ''}`}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <CheckCircle2 className={`w-5 h-5 ${hasAnySelection ? 'text-primary' : 'text-muted-foreground'}`} />
                          Ihre gewünschten Trainingsinhalte
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {!hasAnySelection
                            ? "Noch keine Module ausgewählt"
                            : `${allSelectedTitles.length} Modul${allSelectedTitles.length > 1 ? 'e' : ''} ausgewählt`
                          }
                        </p>
                      </CardHeader>
                      <CardContent>
                        {hasAnySelection ? (
                          <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                            {/* Standard-Module */}
                            {selectedModuleTitles.map((title, idx) => (
                              <div key={`std-${idx}`} className="flex items-start gap-2 text-sm">
                                <span className="text-primary mt-0.5">✓</span>
                                <span>{title}</span>
                              </div>
                            ))}
                            {/* Eigene Module */}
                            {customModules.length > 0 && selectedModuleTitles.length > 0 && (
                              <div className="border-t my-2 pt-2">
                                <span className="text-xs text-muted-foreground font-medium">Eigene Modulwünsche:</span>
                              </div>
                            )}
                            {customModules.map((title, idx) => (
                              <div key={`custom-${idx}`} className="flex items-start gap-2 text-sm">
                                <Sparkles className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                <span>{title}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground italic">
                            Wählen Sie links die gewünschten Module aus. Diese erscheinen dann hier in Ihrer individuellen Zusammenstellung.
                          </p>
                        )}

                        <Button
                          size="lg"
                          onClick={() => setStep(2)}
                          disabled={!hasAnySelection}
                          className="w-full mt-6 gap-2"
                        >
                          Weiter zum Angebot
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Contact Form */}
          {step === 2 && (
            <div className="animate-fade-in max-w-4xl mx-auto">
              {/* Selected modules summary */}
              <Card className="mb-8 bg-primary/5 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Ihre Auswahl ({allSelectedTitles.length} Module)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                    {selectedModuleTitles.map((title, idx) => (
                      <Badge key={`std-${idx}`} variant="secondary" className="py-1 px-3 text-xs">
                        {title}
                      </Badge>
                    ))}
                    {customModules.map((title, idx) => (
                      <Badge key={`custom-${idx}`} className="py-1 px-3 text-xs bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-100">
                        <Sparkles className="w-3 h-3 mr-1" />
                        {title}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="link"
                    className="mt-2 p-0 h-auto text-primary"
                    onClick={() => setStep(1)}
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Module ändern
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <form onSubmit={handleSubmit}>
                <Card>
                  <CardHeader>
                    <CardTitle>Ihre Kontaktdaten</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Füllen Sie das Formular aus und wir erstellen Ihnen ein individuelles Angebot.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Required fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Vorname *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="Ihr Vorname"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nachname *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Ihr Nachname"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="ihre@email.de"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Unternehmen *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Ihr Unternehmen"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon *</Label>
                        <Input
                          id="phone"
                          type="text"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+49 ..."
                          required
                        />
                      </div>
                    </div>

                    {/* Optional fields section */}
                    <div className="border-t pt-6">
                      <h3 className="font-semibold mb-4 text-muted-foreground">
                        Optionale Angaben für ein genaueres Angebot
                      </h3>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="licenseType">ChatGPT Lizenztyp</Label>
                          <Select
                            value={formData.licenseType}
                            onValueChange={(value) => handleInputChange('licenseType', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Bitte wählen" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="free">ChatGPT Free (kostenlos)</SelectItem>
                              <SelectItem value="plus">ChatGPT Plus / Team</SelectItem>
                              <SelectItem value="enterprise">ChatGPT Enterprise</SelectItem>
                              <SelectItem value="mixed">Gemischt (verschiedene Lizenzen)</SelectItem>
                              <SelectItem value="unsure">Noch nicht bekannt</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="employeeCount">Mitarbeiteranzahl</Label>
                          <Select
                            value={formData.employeeCount}
                            onValueChange={(value) => handleInputChange('employeeCount', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Bitte wählen" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-50">1–50</SelectItem>
                              <SelectItem value="51-200">51–200</SelectItem>
                              <SelectItem value="201-500">201–500</SelectItem>
                              <SelectItem value="501-1000">501–1.000</SelectItem>
                              <SelectItem value="1001-5000">1.001–5.000</SelectItem>
                              <SelectItem value="5000+">Über 5.000</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="trainingCount">Zu schulende Mitarbeiter</Label>
                          <Select
                            value={formData.trainingCount}
                            onValueChange={(value) => handleInputChange('trainingCount', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Bitte wählen" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-10">1–10 Personen</SelectItem>
                              <SelectItem value="11-30">11–30 Personen</SelectItem>
                              <SelectItem value="31-50">31–50 Personen</SelectItem>
                              <SelectItem value="51-100">51–100 Personen</SelectItem>
                              <SelectItem value="100+">Über 100 Personen</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="locationType">Durchführungsart</Label>
                          <Select
                            value={formData.locationType}
                            onValueChange={(value) => handleInputChange('locationType', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Bitte wählen" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="inhouse">Inhouse bei Ihnen</SelectItem>
                              <SelectItem value="remote">Online / Remote</SelectItem>
                              <SelectItem value="koeln">In unseren Räumen (Köln)</SelectItem>
                              <SelectItem value="flexible">Flexibel / noch offen</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="trainingLocation">Standort (falls Inhouse)</Label>
                          <Input
                            id="trainingLocation"
                            value={formData.trainingLocation}
                            onChange={(e) => handleInputChange('trainingLocation', e.target.value)}
                            placeholder="z.B. München, Hamburg..."
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="groupCount">Anzahl Gruppen</Label>
                          <Select
                            value={formData.groupCount}
                            onValueChange={(value) => handleInputChange('groupCount', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Bitte wählen" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Gruppe</SelectItem>
                              <SelectItem value="2-3">2–3 Gruppen</SelectItem>
                              <SelectItem value="4-6">4–6 Gruppen</SelectItem>
                              <SelectItem value="7+">Mehr als 6 Gruppen</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2 mt-4">
                        <Label htmlFor="additionalInfo">Informationen und weitere benötigte Inhalte</Label>
                        <Textarea
                          id="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                          placeholder="Gibt es besondere Anforderungen, Wunschtermine oder andere Hinweise? Benötigen Sie Module, die oben nicht aufgeführt sind? Beschreiben Sie hier weitere gewünschte Trainingsinhalte."
                          rows={3}
                        />
                      </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Zurück
                      </Button>
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1 gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Wird gesendet...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Angebot anfordern
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Optional: Termin buchen */}
                    <div className="border-t pt-6">
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">Lieber direkt einen Termin vereinbaren?</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Lassen Sie uns das zeitraubende "Schiffe-Versenken Spiel" zur Terminfindung umgehen! Buchen Sie hier einen freien Slot für ein unverbindliches 15-minütiges Erstgespräch. Ihre oben gewählte Modul-Konfiguration wird dabei automatisch an uns übermittelt, sodass wir bestens vorbereitet ins Gespräch starten können.
                            </p>
                            <Button
                              type="button"
                              variant="default"
                              className="gap-2"
                              onClick={handleBookingClick}
                              disabled={isBookingSubmitting || !formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.phone}
                            >
                              {isBookingSubmitting ? (
                                <>
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                  Wird übermittelt...
                                </>
                              ) : (
                                <>
                                  <Calendar className="w-4 h-4" />
                                  Termin buchen
                                </>
                              )}
                            </Button>
                            <p className="text-xs text-muted-foreground mt-3">
                              Pflichtfelder müssen ausgefüllt sein, um einen Termin zu buchen.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </form>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* CSS für details/summary Styling - versteckt native Marker */}
      <style>{`
        details summary::-webkit-details-marker {
          display: none;
        }
        details summary::marker {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TrainingKonfigurator;
