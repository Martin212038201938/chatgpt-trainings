#!/usr/bin/env node

/**
 * AI-Powered Content Generator
 *
 * Generiert automatisch hochwertige Wissensseiten aus YouTube-Transkripten
 * oder Texten unter Verwendung von OpenAI GPT-4.
 *
 * Features:
 * - Nicht-generische, authentische Texte
 * - Dual Schema.org Markup (Article + FAQPage)
 * - E-E-A-T optimiert
 * - Performance-optimiert
 * - SEO-freundlich
 *
 * Usage:
 *   node scripts/generate-content.js <transcript-file>
 *   node scripts/generate-content.js --interactive
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import readline from 'readline';
import { checkBeforeRequest, trackUsage, showStatistics } from './cost-tracker.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env.local') });

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const GUIDELINES_PATH = path.join(__dirname, 'content-generator-guidelines.md');
const EXAMPLE_PAGE_1 = path.join(__dirname, '../src/pages/MicrosoftCopilotEinsteigerGuide.tsx');
const EXAMPLE_PAGE_2 = path.join(__dirname, '../src/pages/MicrosoftCopilotMemoryGuide.tsx');

// Read guidelines
const guidelines = fs.readFileSync(GUIDELINES_PATH, 'utf-8');

// Read example pages for reference
const examplePage1 = fs.readFileSync(EXAMPLE_PAGE_1, 'utf-8');
const examplePage2 = fs.readFileSync(EXAMPLE_PAGE_2, 'utf-8');

/**
 * Research current information about a topic using OpenAI
 * This helps ensure articles include up-to-date information
 */
async function researchTopic(topic, transcript) {
  console.log('\n🔍 Recherchiere aktuelle Informationen zum Thema...');
  console.log(`📌 Thema: ${topic}`);

  // 🔒 SECURITY: Check cost limits before API call
  try {
    checkBeforeRequest();
  } catch (error) {
    console.log('⚠️  Überspringe Recherche wegen Cost-Limit');
    return null;
  }

  const researchPrompt = `Analysiere das folgende Transkript und identifiziere das Hauptthema. Dann erstelle eine strukturierte Zusammenfassung aktueller, wichtiger Informationen (Stand 2025) für dieses Thema, die in einem professionellen Fachartikel verwendet werden sollten.

TRANSKRIPT:
${transcript.substring(0, 3000)}

Liefere eine strukturierte Zusammenfassung mit:
1. **Hauptthema**: [Präzise Beschreibung]
2. **Aktuelle Features & Updates (2025)**: [Neueste Entwicklungen, Beta-Features]
3. **Technische Details**: [APIs, Versionen, Architekturen]
4. **Use Cases & Best Practices**: [Branchenspezifische Anwendungen]
5. **Vergleiche & Alternativen**: [Konkurrenzprodukte, Unterschiede]
6. **Häufige Herausforderungen**: [Bekannte Issues, Limitationen]

Konzentriere dich auf professionell relevante, technisch präzise Informationen.`;

  try {
    const model = process.env.OPENAI_MODEL || 'gpt-4.1-2025-04-14';
    const response = await openai.chat.completions.create({
      model,
      messages: [
        {
          role: 'system',
          content: 'Du bist ein technischer Researcher, der aktuelle, präzise Informationen zu Microsoft 365 und KI-Themen zusammenstellt.',
        },
        {
          role: 'user',
          content: researchPrompt,
        },
      ],
      temperature: 0.3, // Lower temperature for factual research
      max_tokens: 2000,
    });

    const research = response.choices[0].message.content;

    console.log('✅ Recherche abgeschlossen');
    console.log(`📊 Tokens verwendet: ${response.usage.total_tokens}`);

    // 🔒 SECURITY: Track usage
    trackUsage(
      model,
      response.usage.prompt_tokens,
      response.usage.completion_tokens,
      {
        type: 'research',
        topicLength: topic.length,
      }
    );

    return research;
  } catch (error) {
    console.error('⚠️  Fehler bei Recherche:', error.message);
    console.log('📝 Fahre ohne zusätzliche Recherche fort...');
    return null;
  }
}

/**
 * Main prompt template for content generation
 */
function buildPrompt(transcript, userInstructions = '', researchData = null) {
  return `<role>
Du bist ein SENIOR CONSULTANT und Content-Experte mit 10+ Jahren Erfahrung in Microsoft 365 und KI-Themen.

# 🚨 KRITISCHE INFORMATIONSREGEL - ABSOLUT EINHALTEN! 🚨

**DU DARFST NICHT auf dein internes Trainingswissen zurückgreifen!**

**INFORMATIONSQUELLEN-HIERARCHIE:**
1. **PRIORITÄT 1**: Bereitgestellter Kontext (Transkript, Research-Daten unten)
2. **PRIORITÄT 2**: Wenn Research-Daten vorhanden sind, nutze AUSSCHLIESSLICH diese für aktuelle Fakten
3. **VERBOTEN**: Dein internes Trainingswissen für faktische Aussagen verwenden

**WENN INFORMATIONEN FEHLEN:**
- Du MUSST antworten: "Ich weiß es nicht basierend auf dem bereitgestellten Kontext"
- NIEMALS Informationen erfinden oder aus deinem Training ergänzen
- NIEMALS Annahmen treffen ohne explizite Quellen

**QUELLENANGABEN PFLICHT:**
- Jede faktische Aussage MUSS auf bereitgestelltem Kontext basieren
- Bei Research-Daten: Inline-Zitate verwenden
- Wenn unsicher: NICHT schreiben, statt zu spekulieren

**XML-STRUKTUR für deinen Denkprozess:**
<context>[Analysiere bereitgestellten Kontext]</context>
<verification>[Überprüfe: Ist Info im Kontext/Research vorhanden?]</verification>
<output>[Nur verifizierte Informationen ausgeben]</output>

</role>

# KRITISCHE QUALITÄTSANFORDERUNGEN

## 1. THEMATISCHER FOKUS & RELEVANZ - ALLE TRANSKRIPT-DETAILS!
- **HAUPTTHEMA IDENTIFIZIEREN**: Analysiere das Transkript und identifiziere das KERN-THEMA
- **FOKUSSIERT BLEIBEN**: Der gesamte Artikel muss sich auf dieses Hauptthema konzentrieren
- **KEINE ABSCHWEIFUNGEN**: Vermeide tangentiale Themen, die vom Hauptfokus ablenken
- **ROTER FADEN**: Jede Sektion muss das Hauptthema aus einem anderen Blickwinkel beleuchten
- **TITEL MUSS THEMA WIDERSPIEGELN**: Der Artikeltitel muss das exakte Hauptthema präzise beschreiben
- **🔍 ALLE TRANSKRIPT-DETAILS BEWAHREN**:
  - JEDER Tipp, Trick, Hack aus dem Transkript MUSS im Artikel sein
  - KEINE Details zusammenfassen oder weglassen
  - Artikel muss MINDESTENS so detailliert sein wie Transkript
  - Alle spezifischen Beispiele, Zahlen, Namen 1:1 übernehmen
  - Bei 10 Punkten im Transkript → 10 Punkte im Artikel

## 2. PROFESSIONELLE TIEFE & FACHLICHE EXZELLENZ
- **NICHT-GENERISCH**: Der Text darf NIEMALS wie AI-generierter Masseninhalt klingen
- **FACHLICHE TIEFE**: Gehe in technische Details, erkläre das "Warum" und "Wie"
- **MINIMUM-TIEFE PRO SEKTION**: Jede Hauptsektion benötigt mindestens 400-600 Wörter mit substantiellem Inhalt
- **TECHNISCHE PRÄZISION**: Nutze korrekte Fachbegriffe, API-Namen, exakte Versionsangaben, spezifische Produktnamen
- **ARCHITEKTUR-VERSTÄNDNIS**: Erkläre technische Zusammenhänge, Systemarchitekturen, Datenflüsse
- **VERMEIDE ABSOLUT**:
  - Floskeln wie "im heutigen digitalen Zeitalter", "revolutionär", "game-changer", "nahtlos"
  - Vage Aussagen wie "das Tool", "die Funktion", "viele Möglichkeiten"
  - Oberflächliche Beschreibungen ohne konkrete Details
  - Marketing-Sprache statt technischer Fakten

## 3. PRAXISRELEVANZ FÜR BERUFLICHEN ALLTAG
- **USE CASES SIND PFLICHT**: JEDE Hauptsektion muss MINDESTENS 3-5 konkrete, realistische Use Cases aus dem beruflichen Alltag enthalten
- **BRANCHENSPEZIFISCH**: Zeige Anwendungsbeispiele aus verschiedenen Branchen (Finance, Healthcare, Manufacturing, etc.)
- **ROLLEN-BASIERT**: Adressiere verschiedene Rollen (IT-Admin, Developer, Business User, Manager)
- **SCHRITT-FÜR-SCHRITT**: Biete detaillierte Anleitungen mit konkreten Schritten, nicht nur "Sie können X machen"
- **KONKRETE BEISPIELE**:
  - Echte Prompt-Beispiele mit Input/Output
  - Code-Snippets mit Erklärungen
  - Konfigurationsbeispiele mit tatsächlichen Werten
  - Screenshot-Beschreibungen von UI-Elementen
- **MESSBARE ERGEBNISSE**: Zeige ROI, Zeitersparnis, Effizienzgewinne mit konkreten Zahlen wo möglich
- **PROBLEMLÖSUNGEN**: Adressiere häufige Herausforderungen und biete Lösungsstrategien

## 4. PROFESSIONELLE VERGLEICHE & KONTEXT
- **ALTERNATIVEN DISKUTIEREN**: Vergleiche mit Konkurrenzprodukten oder alternativen Ansätzen
- **PROS & CONS**: Ehrliche Bewertung von Stärken UND Schwächen
- **WANN NUTZEN, WANN NICHT**: Klare Guidance, für welche Szenarien das Thema geeignet ist
- **MIGRATION/INTEGRATION**: Wie integriert sich das Thema in bestehende Systeme/Workflows?

## 5. LÄNGE & SUBSTANTIELLER INHALT - DEUTLICH AUSFÜHRLICHER!
- **KEINE VERKÜRZUNGEN**: Artikel müssen SUBSTANTIELL und UMFASSEND sein
- **ZIEL-LÄNGE**: 5.000-8.000 Wörter für wirklich tiefgehende Artikel (18-30 Minuten Lesezeit)
  - Falls das Thema zu komplex für einen einzelnen Artikel ist, erstelle EINEN sehr detaillierten Artikel mit mehreren Haupt-Sektionen
  - Jede Haupt-Sektion sollte 600-1000 Wörter haben, nicht nur 400-600
- **QUALITÄT ÜBER KÜRZE**: Lieber sehr ausführlich und umfassend wertvoll als nur "gut"
- **JEDE SEKTION SUBSTANZ**: Minimum 600-1000 Wörter pro Hauptsektion mit MAXIMALER Tiefe
- **FAQ-TIEFE**: Jede FAQ-Antwort sollte 100-200 Wörter haben mit echtem, substantiellem Mehrwert
- **MEHR DETAILS**: Füge mehr technische Details, mehr Beispiele, mehr Use Cases, mehr Erklärungen hinzu

## 6. STRUKTUR & FORMAT - PFLICHT-STRUKTUR FÜR MARKDOWN!
- **🚨 KRITISCH**: Verwende EXAKT diese Struktur (das System erwartet sie!):

```markdown
# [Artikeltitel]

[Kurze Einleitung: 2-3 Sätze die das Thema einführen]

## 🎯 Quick Answer

[Prägnante 150-200 Wort Zusammenfassung der Kernaussage - beantwortet die Hauptfrage sofort]

## 💡 [Erste Hauptsektion]

[Inhalt mit ###-Untersektionen...]

## 💡 [Weitere Hauptsektionen...]

[Jeweils 600-1000 Wörter pro Sektion...]

## ❓ Häufig gestellte Fragen (FAQ)

### [Erste Frage]?

[Ausführliche Antwort 100-200 Wörter]

### [Weitere Fragen...]

[Jeweils detaillierte Antworten]
```

- **PFLICHT**: `## 🎯 Quick Answer` MUSS die 2. Überschrift sein (direkt nach H1)
- **PFLICHT**: `## ❓ Häufig gestellte Fragen (FAQ)` MUSS am Ende stehen
- **PFLICHT**: Alle Hauptsektionen mit ## (außer H1 verwendet #)
- **VERWENDE NUR MARKDOWN**: ##, ###, **, -, *, \`\`\`, ---, > (NIEMALS HTML-Tags!)

## 7. TONALITÄT & SCHREIBSTIL - BUSINESS-LESER 35+
- **HÖFLICHKEITSFORM**: IMMER "Sie" verwenden, NIEMALS "du" oder "ihr"
  - ✅ RICHTIG: "Sie können...", "Ihre Daten...", "Wenn Sie möchten..."
  - ❌ FALSCH: "Du kannst...", "Deine Daten...", "Wenn du möchtest..."
- **ZIELGRUPPE**: Deutsche Business-Leser ab 35 Jahren
  - Professionell, aber nicht steif
  - Vertrauenswürdig und kompetent
  - Respektvoll und auf Augenhöhe
- **ATTRAKTIV & SPANNEND**:
  - Lebendige Sprache statt Amtsdeutsch
  - Kurze, knackige Sätze neben ausführlichen Erklärungen
  - Rhetorische Fragen zur Aktivierung
  - Storytelling-Elemente wo passend
- **METAPHERNREICH**:
  - Bildhafte Vergleiche aus der Geschäftswelt
  - "Copilot ist wie ein erfahrener Assistent, der Ihnen..."
  - "Denken Sie an... als würden Sie..."
  - Analogien, die Business-Konzepte greifbar machen
- **ANWENDUNGSFÄLLE-FOKUS**:
  - Konkrete Business-Szenarien: "Stellen Sie sich vor, Sie müssen..."
  - Praktische Beispiele aus dem Arbeitsalltag
  - ROI und Zeit-Ersparnis betonen
  - "In der Praxis bedeutet das für Sie..."

## 8. E-E-A-T SIGNALE FÜR PROFESSIONELLE AUTORITÄT
- **Experience**: "In Projekten mit Enterprise-Kunden haben wir festgestellt...", spezifische Projekterfahrungen mit Zahlen
- **Expertise**: Technische Tiefe, Architektur-Diagramm-Beschreibungen, API-Details, Performance-Metriken
- **Authoritativeness**: Verweise auf offizielle Microsoft Docs, technische Whitepapers, Case Studies
- **Trustworthiness**: Transparente Limitationen, bekannte Bugs/Issues, ehrliche Kostenanalyse

## 9. LLM-OPTIMIERUNG FÜR ZITIERBARKEIT
- **EXTRACTABLE FACTS**: Jede Information muss als eigenständiger Fakt extrahierbar sein
- **DEFINITIVE ANTWORTEN**: Beantworte Fragen direkt und vollständig
- **STRUKTURIERTE DATEN**: Nutze Listen, Tabellen, Vergleichsmatrizen
- **ZITIERBARE AUSSAGEN**: Formuliere Kerninformationen so, dass LLMs sie direkt zitieren können
- **SEMANTIC CHUNKS**: Ein Absatz = eine vollständige Idee (3-5 Sätze, nicht 2-3)
- **ENTITY-REICH**: Vollständige Namen statt Pronomen (z.B. "Microsoft Graph API" statt "die API")

## 10. SEO & AI-OPTIMIERUNG
- Erste 150-200 Wörter: Umfassende Antwort auf die Hauptfrage (Inversed Pyramid)
- Semantic Chunking: Ein Absatz = eine vollständige, substantielle Idee
- Entity-reich: Konkrete Namen, Produktversionen, spezifische Features
- Extractable Formate: Ausführliche Listen, Vergleichstabellen, Feature-Matrizen, Callout-Boxen
- Keywords natürlich einbinden (keine Keyword-Stuffing)
- Long-tail Keywords für Nischen-Szenarien

## 11. MARKDOWN FORMATIERUNG & LESBARKEIT
- **Überschriften**: Verwende ## für Hauptsektionen (H2), ### für Untersektionen (H3)
- **Listen**: Verwende - für ungeordnete Listen, 1. 2. 3. für geordnete Listen
- **Hervorhebungen**:
  - **Fett** für wichtige Begriffe und Schlüsselwörter
  - *Kursiv* für Betonung
  - `Code` für technische Begriffe, Befehle, API-Namen
- **Code-Blöcke**: Verwende ``` mit Sprach-Angabe für längere Code-Beispiele
  - ```powershell für PowerShell-Befehle
  - ```python für Python-Code
  - ```json für JSON-Strukturen
- **Blockquotes**: Verwende > für wichtige Hinweise, Zusammenfassungen, Zitate
- **Horizontale Linien**: Verwende --- um große Sektionen zu trennen
- **Links**: [Linktext](URL) für externe Referenzen
- **Tabellen**: Verwende Markdown-Tabellen für Vergleiche und strukturierte Daten

## 12. AKTUALITÄT & RECHERCHE - NUR VERIFIZIERTE QUELLEN!
- **BASIS**: Informationen aus dem Transkript und bereitgestellten Research-Daten
- **VERBOTEN**: Spekulationen oder Annahmen aus deinem Trainingswissen
- **NUR FAKTEN**: Nur Informationen verwenden, die im Kontext oder Research-Daten explizit genannt sind
${researchData ? '\n- **PFLICHT**: Nutze AUSSCHLIESSLICH die RECHERCHIERTEN INFORMATIONEN unten für aktuelle Details, Updates und Best Practices' : '\n- **KEINE RESEARCH-DATEN**: Verwende NUR das Transkript. Bei fehlenden Informationen: "Ich weiß es nicht" statt zu spekulieren'}
- **QUELLEN**: Wenn Research-Daten vorhanden, zitiere inline
- **WENN UNSICHER**: Lieber weglassen als erfinden

---

# TRANSKRIPT

${transcript}

${researchData ? `\n---\n\n# RECHERCHIERTE AKTUELLE INFORMATIONEN\n\n${researchData}\n\n**WICHTIG**: Integriere diese recherchierten Informationen in deinen Artikel, um Aktualität und fachliche Tiefe zu gewährleisten.` : ''}

---

# BEISPIEL-KOMPONENTEN (als Referenz für Struktur & Stil)

## Beispiel 1: MicrosoftCopilotEinsteigerGuide.tsx
\`\`\`tsx
${examplePage1.substring(0, 3000)}
// ... (gekürzt für Prompt-Länge)
\`\`\`

## Beispiel 2: MicrosoftCopilotMemoryGuide.tsx
\`\`\`tsx
${examplePage2.substring(0, 3000)}
// ... (gekürzt für Prompt-Länge)
\`\`\`

---

# GUIDELINES (vollständig)

${guidelines}

---

# ZUSÄTZLICHE ANWEISUNGEN

${userInstructions || 'Keine zusätzlichen Anweisungen.'}

---

# DEINE AUFGABE

Erstelle JETZT einen vollständigen, PROFESSIONELL TIEFGEHENDEN Markdown-Artikel basierend auf dem Transkript. Der Artikel MUSS erfüllen:

## KERN-ANFORDERUNGEN:

1. **THEMA-FOKUS**:
   - Identifiziere das exakte Hauptthema aus dem Transkript
   - Der gesamte Artikel fokussiert sich ausschließlich auf dieses Hauptthema
   - Titel beschreibt präzise das Hauptthema

2. **PROFESSIONELLE TIEFE - DEUTLICH AUSFÜHRLICHER**:
   - JEDE Hauptsektion: 600-1000 Wörter mit maximalem, substantiellem Fachinhalt
   - Technische Details, APIs, Architektur, Konfigurationen
   - Erklärung von "Warum" und "Wie", nicht nur "Was"
   - Mehr Details, mehr Beispiele, mehr Tiefe als üblich

3. **PRAXIS-USE-CASES**:
   - MINIMUM 3-5 konkrete Use Cases pro Hauptsektion
   - Branchenspezifische Beispiele (Finance, Healthcare, Manufacturing, Education, etc.)
   - Rollenspezifische Szenarien (IT-Admin, Developer, Business User, Manager)
   - Sehr detaillierte Schritt-für-Schritt Anleitungen mit konkreten Schritten
   - Echte Prompt-Beispiele mit Input/Output, Code-Snippets, Konfigurationen

4. **SUBSTANTIELLE LÄNGE - SEHR AUSFÜHRLICH**:
   - **WICHTIG**: Ziel: 5.000-8.000 Wörter (18-30 Minuten Lesezeit)
   - Die Lesezeit wird automatisch berechnet - schreibe ausführlich und umfassend!
   - KEINE Verkürzungen, die Artikel generisch machen
   - Qualität, Tiefe UND Ausführlichkeit über Kürze
   - FAQs mit 10-15 Fragen, jede Antwort 100-200 Wörter mit echtem Mehrwert
   - Jede Haupt-Sektion sollte wirklich umfassend sein (600-1000 Wörter)

5. **LLM-ZITIERBARKEIT**:
   - Extractable Facts: Jede Information als eigenständiger Fakt
   - Definitive Antworten auf spezifische Fragen
   - Strukturierte Daten: Listen, Tabellen, Vergleiche
   - Entity-reich: Vollständige Namen, keine Pronomen

6. **PROFESSIONELLE VERGLEICHE**:
   - Alternativen und Konkurrenzprodukte diskutieren
   - Ehrliche Pros & Cons
   - Wann nutzen, wann nicht nutzen
   - Integrations- und Migrations-Überlegungen

7. **🚨 KRITISCHE MARKDOWN-STRUKTUR**:
   - **PFLICHT-FORMAT** (System erwartet es exakt so!):
     1. `# [Titel]` - H1 Hauptüberschrift
     2. [2-3 Sätze Einleitung]
     3. `## 🎯 Quick Answer` - PFLICHT als 2. Sektion!
     4. [150-200 Wort Zusammenfassung]
     5. `## 💡 [Hauptsektionen]` - 8-12 Sektionen mit jeweils 600-1000 Wörtern
     6. `## ❓ Häufig gestellte Fragen (FAQ)` - PFLICHT am Ende!
     7. `### [Frage]?` - Jede FAQ mit ### und ausführlicher Antwort
   - Verwende Emojis: 🎯 für Quick Answer, 💡 für Hauptsektionen, ❓ für FAQ
   - Nutze Listen (-), Fett (**), Code-Blöcke (```), Blockquotes (>), Tabellen

8. **🚨 HÖFLICHKEITSFORM "SIE" - ABSOLUT KRITISCH**:
   - NIEMALS "du", "dich", "dein", "ihr", "euch", "euer" verwenden
   - IMMER "Sie", "Ihnen", "Ihr", "Ihre" verwenden
   - Business-Ton: Professionell aber zugänglich, nie steif
   - Metaphernreich und spannend für Leser 35+ Jahre
   - "Stellen Sie sich vor...", "Sie können...", "Für Sie bedeutet das..."

9. **QUALITÄTS-CHECKS**:
   - ✓ Durchgehend Höflichkeitsform "Sie" (NIEMALS "du")
   - ✓ Pflicht-Struktur: # → ## 🎯 Quick Answer → ## 💡 Sektionen → ## ❓ FAQ
   - ✓ Klingt NICHT wie AI-generierter Masseninhalt
   - ✓ Enthält technische Tiefe und Fachexpertise
   - ✓ Bietet echten Mehrwert für professionelle Praxis
   - ✓ Metaphernreich und spannend für Business-Leser 35+
   - ✓ Unterscheidet sich klar von generischen Artikeln
   - ✓ LLMs können präzise Informationen zitieren
   - ✓ **Minimum 5.000 Wörter** mit Substanz (Ziel: 5.000-8.000)
   - ✓ Korrekte Markdown-Syntax durchgehend verwendet (KEINE HTML-Tags!)
   - ✓ Klare Struktur mit Überschriften-Hierarchie

**WICHTIG**: Antworte NUR mit dem reinen Markdown-Content. Keine Erklärungen, keine Code-Wrapper, keine Zusammenfassungen. Starte direkt mit dem Artikel-Inhalt in Markdown-Format.

🚨 KRITISCH - MARKDOWN SYNTAX, KEIN JSX/HTML! 🚨
- VERWENDE: ##, ###, **, -, *, ` (Markdown-Syntax)
- NIEMALS: <h2>, <h3>, <p>, <div>, <ul>, <li>, <strong>, <code> (JSX/HTML-Tags)
- ALLE Inhalte müssen in Markdown sein!
- Beispiel RICHTIG: ## 🎯 Quick Answer
- Beispiel FALSCH: <h2>Quick Answer</h2>

🚨 KRITISCH - STRUKTUR-ANFORDERUNG! 🚨
1. `# [Titel]` - H1 Überschrift
2. [Kurze Einleitung]
3. `## 🎯 Quick Answer` ← PFLICHT!
4. [Schnellantwort-Content]
5. `## 💡 [Hauptsektionen]` ← 8-12 Sektionen
6. `## ❓ Häufig gestellte Fragen (FAQ)` ← PFLICHT!

🚨 KRITISCH - HÖFLICHKEITSFORM "SIE"! 🚨
- ✅ "Sie können...", "Ihre Daten...", "Stellen Sie sich vor..."
- ❌ NIEMALS: "du kannst", "deine Daten", "stell dir vor"

**DENKE DARAN**: Dies ist ein PROFESSIONELLER FACHARTIKEL für Business-Leser 35+ Jahre. Metaphernreich, spannend, anwendungsfallbezogen - aber immer mit "Sie" angesprochen!

🔍 TRANSKRIPT-DETAILS BEWAHREN:
- ALLE Tipps, Tricks, Hacks und Erkenntnisse aus dem Transkript MÜSSEN erhalten bleiben
- Der Artikel muss MINDESTENS so detailliert sein wie das Transkript
- KEINE Details weglassen oder zusammenfassen
- ALLE spezifischen Beispiele, Zahlen, Namen übernehmen
- Wenn im Transkript 10 Punkte sind, MÜSSEN alle 10 im Artikel sein

Beginne jetzt:`;
}

/**
 * Extract readable text content from TSX component
 * Removes imports, JSX tags, attributes, and code to get actual readable text
 */
function extractReadableText(component) {
  // Remove imports
  let text = component.replace(/^import\s+.*?;\s*$/gm, '');

  // Remove JSX/HTML tags and attributes
  text = text.replace(/<[^>]+>/g, ' ');

  // Remove curly braces content (JavaScript expressions)
  text = text.replace(/\{[^}]*\}/g, ' ');

  // Remove extra whitespace and count actual words
  text = text.replace(/\s+/g, ' ').trim();

  return text;
}

/**
 * Calculate realistic reading time based on actual text content
 */
function calculateReadingTime(component) {
  const readableText = extractReadableText(component);
  const words = readableText.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  // Realistic reading speed for German text: 250-280 words/minute
  // We use 260 as average
  const readTimeMinutes = Math.ceil(wordCount / 260);

  return {
    readTime: `${readTimeMinutes} Min. Lesezeit`,
    wordCount: wordCount,
  };
}

/**
 * Extract metadata from Markdown content
 */
function extractMarkdownMetadata(markdown) {
  // Extract title from first # heading
  const titleMatch = markdown.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : 'Generierte Wissensseite';

  // Extract description from first paragraph after title
  const lines = markdown.split('\n');
  let description = '';
  let foundTitle = false;
  for (const line of lines) {
    if (line.match(/^#\s+/)) {
      foundTitle = true;
      continue;
    }
    if (foundTitle && line.trim() && !line.match(/^#+\s+/)) {
      description = line.trim();
      break;
    }
  }
  if (description.length > 160) {
    description = description.substring(0, 157) + '...';
  }

  // Extract keywords from ## headings and bold terms
  const keywords = new Set(['Microsoft 365', 'Copilot']);
  const headings = markdown.match(/^##\s+(.+)$/gm) || [];
  headings.slice(0, 3).forEach(h => {
    const words = h.replace(/^##\s+/, '').split(/\s+/);
    words.forEach(w => {
      if (w.length > 3) keywords.add(w);
    });
  });

  return {
    title,
    description,
    keywords: Array.from(keywords).slice(0, 10),
  };
}

/**
 * Generate metadata for the draft JSON
 */
function generateMetadata(component, transcript) {
  // Check if content is Markdown or TSX
  const isMarkdown = !component.trim().startsWith('import');

  let title, description, keywords;

  if (isMarkdown) {
    // Extract metadata from Markdown
    const extracted = extractMarkdownMetadata(component);
    title = extracted.title;
    description = extracted.description;
    keywords = extracted.keywords;
  } else {
    // Extract metadata from TSX (legacy support)
    const titleMatch = component.match(/title="([^"]+)"/);
    title = titleMatch ? titleMatch[1] : 'Generierte Wissensseite';

    const descMatch = component.match(/description="([^"]+)"/);
    description = descMatch ? descMatch[1] : '';

    const keywordsMatch = component.match(/keywords=\{(\[[\s\S]*?\])\}/);
    if (keywordsMatch) {
      try {
        keywords = eval(keywordsMatch[1]);
      } catch (e) {
        keywords = ['Microsoft 365', 'Copilot', 'Produktivität'];
      }
    } else {
      keywords = ['Microsoft 365', 'Copilot', 'Produktivität'];
    }
  }

  // Generate slug from title
  const slug = title
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  // Calculate realistic reading time based on actual text content
  const { readTime, wordCount } = calculateReadingTime(component);
  console.log(`📖 Geschätzte Wortzahl: ${wordCount} Wörter`);

  // Generate component name from slug (for TSX files)
  const componentName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  // Calculate publish date (next Tuesday at 9:00 AM)
  const now = new Date();
  const daysUntilTuesday = (2 - now.getDay() + 7) % 7 || 7; // Next Tuesday
  const publishDate = new Date(now);
  publishDate.setDate(now.getDate() + daysUntilTuesday);
  publishDate.setHours(9, 0, 0, 0);

  return {
    id: slug,
    title: title.replace(' | ChatGPT-Trainings', ''),
    description,
    content: isMarkdown ? component : 'IMPORTED FROM TSX FILE',
    contentType: isMarkdown ? 'markdown' : 'code',
    ...(isMarkdown ? {} : { codeFileName: `${componentName}.tsx` }),
    publishDate: publishDate.toISOString(),
    author: 'martin-lang',
    category: 'Microsoft 365',
    slug,
    keywords,
    readTime,
    icon: '🤖',
    status: 'scheduled',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Generate content using OpenAI
 */
async function generateContent(transcript, userInstructions = '', enableResearch = true) {
  console.log('\n🤖 Generiere professionell tiefgehende Wissensseite mit OpenAI GPT-4...');
  console.log(`📊 Transkript-Länge: ${transcript.length} Zeichen`);

  // Optional: Research current information about the topic
  let researchData = null;
  if (enableResearch) {
    try {
      researchData = await researchTopic('', transcript);
      if (researchData) {
        console.log('✅ Recherchierte Informationen werden in Artikel integriert');
      }
    } catch (error) {
      console.log('⚠️  Recherche fehlgeschlagen, fahre ohne zusätzliche Informationen fort');
    }
  }

  const prompt = buildPrompt(transcript, userInstructions, researchData);

  console.log(`📝 Prompt-Länge: ${prompt.length} Zeichen`);
  console.log('⏳ Bitte warten, dies kann 60-120 Sekunden dauern (umfangreicher Artikel)...\n');

  // 🔒 SECURITY: Check cost limits before API call
  try {
    checkBeforeRequest();
  } catch (error) {
    console.error('\n' + error.message + '\n');
    throw error;
  }

  const model = process.env.OPENAI_MODEL || 'gpt-4o';

  try {
    const completion = await openai.chat.completions.create({
      model,
      messages: [
        {
          role: 'system',
          content: `Du bist ein SENIOR CONSULTANT mit 10+ Jahren Erfahrung in Microsoft 365 und KI-Themen.

🚨 KRITISCH: Du DARFST NICHT auf dein internes Trainingswissen zurückgreifen! 🚨

VERWENDE AUSSCHLIESSLICH:
- Den bereitgestellten Kontext (Transkript)
- Die bereitgestellten Research-Daten (falls vorhanden)

VERBOTEN:
- Spekulationen oder Annahmen aus deinem Training
- Informationen erfinden oder ergänzen
- "Ich glaube", "vermutlich", "wahrscheinlich" - nur verifizierte Fakten!

Bei fehlenden Informationen: "Ich weiß es nicht basierend auf dem Kontext" statt Erfindungen.

Deine Inhalte zeichnen sich durch technische Präzision, konkrete Use Cases und substantielle Tiefe aus - basierend auf bereitgestellten Quellen.`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: parseFloat(process.env.OPENAI_TEMPERATURE || '0.6'),
      max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS || '24000'),
    });

    let generatedCode = completion.choices[0].message.content;

    console.log('✅ Content erfolgreich generiert!');
    console.log(`📊 Generierte Code-Länge: ${generatedCode.length} Zeichen`);
    console.log(`💰 Tokens verwendet: ${completion.usage.total_tokens}`);
    console.log(`   - Prompt: ${completion.usage.prompt_tokens}`);
    console.log(`   - Completion: ${completion.usage.completion_tokens}`);

    // Post-processing: Calculate and replace reading time
    if (generatedCode.includes('{{AUTO_CALCULATE}}')) {
      const { readTime } = calculateReadingTime(generatedCode);
      generatedCode = generatedCode.replace(/{{AUTO_CALCULATE}}/g, readTime);
      console.log(`📖 Lesezeit automatisch berechnet: ${readTime}`);
    }

    // 🔒 SECURITY: Track usage after successful API call
    trackUsage(
      model,
      completion.usage.prompt_tokens,
      completion.usage.completion_tokens,
      {
        transcriptLength: transcript.length,
        promptLength: prompt.length,
        generatedLength: generatedCode.length,
      }
    );

    return generatedCode;
  } catch (error) {
    console.error('❌ Fehler bei OpenAI API Call:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
    throw error;
  }
}

/**
 * Edit existing content using AI with specific instructions
 */
async function editContent(existingComponent, editInstructions) {
  console.log('\n✏️  Bearbeite Artikel mit AI-Unterstützung...');
  console.log(`📊 Artikel-Länge: ${existingComponent.length} Zeichen`);
  console.log(`📝 Anweisungen: ${editInstructions}`);

  // 🔒 SECURITY: Check cost limits before API call
  try {
    checkBeforeRequest();
  } catch (error) {
    console.error('\n' + error.message + '\n');
    throw error;
  }

  const editPrompt = `Du bist ein SENIOR CONSULTANT und Content-Experte. Du hast einen bestehenden Fachartikel vor dir und sollst ihn gemäß den Anweisungen überarbeiten.

# WICHTIGE REGELN FÜR DIE BEARBEITUNG

1. **STRUKTURELLE INTEGRITÄT BEWAHREN**:
   - Behalte die TSX-Struktur EXAKT bei
   - Alle Imports müssen gleich bleiben
   - Schema.org Markup muss vollständig erhalten bleiben
   - Table of Contents struktur beibehalten

2. **QUALITÄTSSTANDARDS EINHALTEN**:
   - Professionelle Tiefe und fachliche Exzellenz
   - MINIMUM 3-5 konkrete Use Cases pro Sektion
   - Keine generischen AI-Phrasen
   - Technische Präzision

3. **ÄNDERUNGEN FOKUSSIERT DURCHFÜHREN**:
   - Nur die angeforderten Änderungen vornehmen
   - Keine unnötigen Umformulierungen
   - Bestehende gute Inhalte beibehalten

---

# BESTEHENDER ARTIKEL

\`\`\`tsx
${existingComponent}
\`\`\`

---

# ANWEISUNGEN FÜR DIE BEARBEITUNG

${editInstructions}

---

# DEINE AUFGABE

Überarbeite den Artikel gemäß den Anweisungen. Behalte die vollständige TSX-Struktur bei und gib den kompletten, überarbeiteten Code zurück.

**WICHTIG**: Antworte NUR mit dem vollständigen TSX-Code. Keine Erklärungen, keine Markdown-Wrapper. Starte direkt mit "import" und ende mit "export default".

Beginne jetzt:`;

  console.log(`📝 Prompt-Länge: ${editPrompt.length} Zeichen`);
  console.log('⏳ Bitte warten, dies kann 60-90 Sekunden dauern...\n');

  const model = process.env.OPENAI_MODEL || 'gpt-4o';

  try {
    const completion = await openai.chat.completions.create({
      model,
      messages: [
        {
          role: 'system',
          content: `Du bist ein SENIOR CONSULTANT und Content-Experte, der bestehende Fachartikel professionell überarbeitet.

🚨 KRITISCH: Du DARFST NICHT auf dein internes Trainingswissen zurückgreifen! 🚨

VERWENDE AUSSCHLIESSLICH:
- Den bereitgestellten bestehenden Artikel
- Die bereitgestellten Bearbeitungs-Anweisungen
- Bei faktischen Ergänzungen: NUR wenn explizit im Kontext vorhanden

VERBOTEN:
- Spekulationen oder neue Fakten aus deinem Training hinzufügen
- Informationen erfinden
- Annahmen treffen ohne Basis im bereitgestellten Kontext

Du behältst die technische Struktur bei und verbesserst gezielt die angeforderten Aspekte - basierend auf bereitgestellten Informationen.`,
        },
        {
          role: 'user',
          content: editPrompt,
        },
      ],
      temperature: parseFloat(process.env.OPENAI_TEMPERATURE || '0.6'),
      max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS || '24000'),
    });

    let editedCode = completion.choices[0].message.content;

    console.log('✅ Artikel erfolgreich überarbeitet!');
    console.log(`📊 Neue Code-Länge: ${editedCode.length} Zeichen`);
    console.log(`💰 Tokens verwendet: ${completion.usage.total_tokens}`);
    console.log(`   - Prompt: ${completion.usage.prompt_tokens}`);
    console.log(`   - Completion: ${completion.usage.completion_tokens}`);

    // Post-processing: Calculate and replace reading time
    if (editedCode.includes('{{AUTO_CALCULATE}}')) {
      const { readTime } = calculateReadingTime(editedCode);
      editedCode = editedCode.replace(/{{AUTO_CALCULATE}}/g, readTime);
      console.log(`📖 Lesezeit automatisch berechnet: ${readTime}`);
    } else {
      // If readTime exists but is hardcoded, recalculate it
      const { readTime } = calculateReadingTime(editedCode);
      const readTimeMatch = editedCode.match(/readTime="([^"]+)"/);
      if (readTimeMatch && readTimeMatch[1] !== readTime) {
        editedCode = editedCode.replace(/readTime="[^"]+"/g, `readTime="${readTime}"`);
        console.log(`📖 Lesezeit aktualisiert: ${readTimeMatch[1]} → ${readTime}`);
      }
    }

    // 🔒 SECURITY: Track usage after successful API call
    trackUsage(
      model,
      completion.usage.prompt_tokens,
      completion.usage.completion_tokens,
      {
        type: 'edit',
        originalLength: existingComponent.length,
        editedLength: editedCode.length,
      }
    );

    return editedCode;
  } catch (error) {
    console.error('❌ Fehler bei OpenAI API Call:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
    throw error;
  }
}

/**
 * Validate quality of generated content
 */
function validateContentQuality(component) {
  const issues = [];
  const warnings = [];

  // Check minimum word count (approximately)
  const wordCount = component.split(/\s+/).length;
  if (wordCount < 2500) {
    issues.push(`⚠️  KRITISCH: Artikel zu kurz (${wordCount} Wörter, Minimum: 2500)`);
  } else if (wordCount < 3000) {
    warnings.push(`⚠️  Artikel könnte länger sein (${wordCount} Wörter, Ziel: 3000-5000)`);
  } else {
    console.log(`✅ Länge: ${wordCount} Wörter (ausgezeichnet!)`);
  }

  // Check for generic AI phrases (should be minimal)
  const genericPhrases = [
    'im heutigen digitalen Zeitalter',
    'revolutionär',
    'game-changer',
    'nahtlos integriert',
    'spielend einfach',
  ];
  const foundGeneric = genericPhrases.filter(phrase =>
    component.toLowerCase().includes(phrase.toLowerCase())
  );
  if (foundGeneric.length > 0) {
    warnings.push(`⚠️  Generische Phrasen gefunden: ${foundGeneric.join(', ')}`);
  }

  // Check for FAQ section
  if (!component.includes('FAQPage') && !component.includes('faq')) {
    issues.push('⚠️  KRITISCH: Keine FAQ-Sektion gefunden');
  }

  // Check for table of contents
  if (!component.includes('tableOfContents')) {
    issues.push('⚠️  KRITISCH: Kein Table of Contents gefunden');
  }

  // Check for schema markup
  if (!component.includes('@type": "Article"')) {
    issues.push('⚠️  KRITISCH: Article Schema fehlt');
  }

  // Display results
  console.log('\n📊 QUALITÄTSPRÜFUNG:');

  if (issues.length === 0 && warnings.length === 0) {
    console.log('✅ Alle Qualitätschecks bestanden!');
  }

  if (warnings.length > 0) {
    console.log('\n⚠️  Warnungen:');
    warnings.forEach(w => console.log(`  ${w}`));
  }

  if (issues.length > 0) {
    console.log('\n❌ KRITISCHE PROBLEME:');
    issues.forEach(i => console.log(`  ${i}`));
    console.log('\n⚠️  Der Artikel sollte überarbeitet werden, bevor er veröffentlicht wird.');
  }

  return {
    passed: issues.length === 0,
    issues,
    warnings,
    wordCount,
  };
}

/**
 * Save generated content
 */
function saveContent(component, metadata, outputDir = null) {
  const baseDir = outputDir || path.join(__dirname, '..');
  const pagesDir = path.join(baseDir, 'src/pages');
  const draftsDir = path.join(baseDir, 'content/drafts');
  const publicDraftsDir = path.join(baseDir, 'public/content/drafts');

  // Ensure directories exist
  [draftsDir, publicDraftsDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  let componentPath = null;

  // Save TSX component only if contentType is 'code'
  if (metadata.contentType === 'code' && metadata.codeFileName) {
    if (!fs.existsSync(pagesDir)) {
      fs.mkdirSync(pagesDir, { recursive: true });
    }
    componentPath = path.join(pagesDir, metadata.codeFileName);
    fs.writeFileSync(componentPath, component, 'utf-8');
    console.log(`✅ TSX gespeichert: ${componentPath}`);
  } else {
    console.log(`ℹ️  Markdown-Content wird direkt im Draft JSON gespeichert (kein TSX)`);
  }

  // Save draft JSON
  const draftPath = path.join(draftsDir, `${metadata.slug}.json`);
  fs.writeFileSync(draftPath, JSON.stringify(metadata, null, 2), 'utf-8');
  console.log(`✅ Draft JSON gespeichert: ${draftPath}`);

  // Copy to public
  const publicDraftPath = path.join(publicDraftsDir, `${metadata.slug}.json`);
  fs.writeFileSync(publicDraftPath, JSON.stringify(metadata, null, 2), 'utf-8');
  console.log(`✅ Public Draft gespeichert: ${publicDraftPath}`);

  return {
    componentPath,
    draftPath,
    publicDraftPath,
  };
}

/**
 * Interactive mode
 */
async function interactiveMode() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = (prompt) =>
    new Promise((resolve) => rl.question(prompt, resolve));

  console.log('\n🎨 AI Content Generator - Interactive Mode\n');

  // Ask if user wants to create new or edit existing
  console.log('Was möchten Sie tun?');
  console.log('  [1] Neuen Artikel erstellen');
  console.log('  [2] Bestehenden Artikel einmalig bearbeiten');
  console.log('  [3] 💬 Chat-basierte iterative Bearbeitung (NEU!)');

  const mode = await question('\nWählen Sie (1/2/3): ');

  if (mode === '2') {
    // EDIT MODE
    await editMode(rl, question);
  } else if (mode === '3') {
    // CHAT EDIT MODE
    rl.close();
    await chatEditMode();
  } else {
    // CREATE MODE (existing logic)
    await createMode(rl, question);
  }
}

/**
 * Create new article mode
 */
async function createMode(rl, question) {
  const transcriptPath = await question('Transkript-Datei (oder "paste" für direktes Einfügen): ');

  let transcript = '';
  if (transcriptPath.toLowerCase() === 'paste') {
    console.log('Füge das Transkript ein (Drücke Ctrl+D wenn fertig):\n');
    transcript = await new Promise((resolve) => {
      let input = '';
      process.stdin.on('data', (chunk) => {
        input += chunk;
      });
      process.stdin.on('end', () => {
        resolve(input);
      });
    });
  } else {
    if (!fs.existsSync(transcriptPath)) {
      console.error(`❌ Datei nicht gefunden: ${transcriptPath}`);
      process.exit(1);
    }
    transcript = fs.readFileSync(transcriptPath, 'utf-8');
  }

  const instructions = await question('\nZusätzliche Anweisungen (optional, Enter überspringen): ');

  const researchInput = await question('\nAktuelle Informationen recherchieren? (j/N): ');
  const enableResearch = researchInput.toLowerCase() === 'j' || researchInput.toLowerCase() === 'ja';

  rl.close();

  // Generate
  const component = await generateContent(transcript, instructions, enableResearch);

  // Validate quality
  const validation = validateContentQuality(component);

  const metadata = generateMetadata(component, transcript);

  console.log('\n📋 Generierte Metadaten:');
  console.log(`   Titel: ${metadata.title}`);
  console.log(`   Slug: ${metadata.slug}`);
  console.log(`   Lesezeit: ${metadata.readTime}`);
  console.log(`   Publikation: ${new Date(metadata.publishDate).toLocaleDateString('de-DE')}`);

  // Save
  const paths = saveContent(component, metadata);

  console.log('\n🎉 Content erfolgreich generiert und gespeichert!');

  // Show cost statistics
  showStatistics();

  console.log('\nNächste Schritte:');
  console.log('1. Überprüfe die generierte Komponente');
  console.log('2. Teste die Vorschau im Admin-Dashboard');
  console.log('3. Passe bei Bedarf Details an');
  console.log('4. ⚠️  WICHTIG FÜR PRE-RENDERING:');
  console.log(`   → Füge Route zu package.json hinzu: "reactSnap.include": [..., "/wissen/${metadata.slug}"]`);
  console.log('   → Prüfe nach Deploy mit view-source: ob Meta-Tags im HTML sind');
  console.log('5. Commit und Push zum Repository');
}

/**
 * Edit existing article mode
 */
async function editMode(rl, question) {
  console.log('\n✏️  ARTIKEL-BEARBEITUNGS-MODUS\n');

  // Show available files
  const pagesDir = path.join(__dirname, '../src/pages');
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

  console.log('Verfügbare Artikel:');
  files.forEach((file, idx) => {
    console.log(`  [${idx + 1}] ${file}`);
  });

  const fileChoice = await question('\nDatei-Nummer oder vollständiger Pfad: ');

  let filePath;
  if (fileChoice.match(/^\d+$/)) {
    const idx = parseInt(fileChoice) - 1;
    if (idx < 0 || idx >= files.length) {
      console.error('❌ Ungültige Auswahl');
      process.exit(1);
    }
    filePath = path.join(pagesDir, files[idx]);
  } else {
    filePath = fileChoice;
  }

  if (!fs.existsSync(filePath)) {
    console.error(`❌ Datei nicht gefunden: ${filePath}`);
    process.exit(1);
  }

  const existingComponent = fs.readFileSync(filePath, 'utf-8');

  console.log(`\n📄 Geladener Artikel: ${path.basename(filePath)}`);
  console.log(`📊 Aktuelle Länge: ${existingComponent.length} Zeichen`);

  const { wordCount } = calculateReadingTime(existingComponent);
  console.log(`📖 Aktuelle Wortzahl: ${wordCount} Wörter`);

  console.log('\n💡 Beispiel-Anweisungen:');
  console.log('  - "Füge mehr Use Cases für die Healthcare-Branche hinzu"');
  console.log('  - "Verschiebe den Schwerpunkt auf Enterprise-Features"');
  console.log('  - "Ergänze technische Details zur API-Integration"');
  console.log('  - "Füge Vergleiche mit Microsoft Teams hinzu"');
  console.log('  - "Erweitere die FAQ-Sektion um Datenschutz-Fragen"\n');

  const editInstructions = await question('Bearbeitungs-Anweisungen: ');

  if (!editInstructions.trim()) {
    console.error('❌ Keine Anweisungen angegeben');
    process.exit(1);
  }

  rl.close();

  // Edit article
  const editedComponent = await editContent(existingComponent, editInstructions);

  // Validate quality
  const validation = validateContentQuality(editedComponent);

  // Update metadata
  const metadata = generateMetadata(editedComponent, '');

  console.log('\n📋 Aktualisierte Metadaten:');
  console.log(`   Titel: ${metadata.title}`);
  console.log(`   Slug: ${metadata.slug}`);
  console.log(`   Lesezeit: ${metadata.readTime}`);

  // Ask if user wants to save
  const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const saveChoice = await new Promise((resolve) =>
    rl2.question('\nÄnderungen speichern? (j/N): ', resolve)
  );

  rl2.close();

  if (saveChoice.toLowerCase() === 'j' || saveChoice.toLowerCase() === 'ja') {
    // Save edited component
    fs.writeFileSync(filePath, editedComponent, 'utf-8');
    console.log(`✅ Artikel gespeichert: ${filePath}`);

    // Update draft JSON if exists
    const draftPath = path.join(__dirname, '../content/drafts', `${metadata.slug}.json`);
    if (fs.existsSync(draftPath)) {
      const draft = JSON.parse(fs.readFileSync(draftPath, 'utf-8'));
      draft.readTime = metadata.readTime;
      draft.updatedAt = new Date().toISOString();
      fs.writeFileSync(draftPath, JSON.stringify(draft, null, 2), 'utf-8');
      console.log(`✅ Draft JSON aktualisiert: ${draftPath}`);

      // Update public draft
      const publicDraftPath = path.join(__dirname, '../public/content/drafts', `${metadata.slug}.json`);
      if (fs.existsSync(publicDraftPath)) {
        fs.writeFileSync(publicDraftPath, JSON.stringify(draft, null, 2), 'utf-8');
        console.log(`✅ Public Draft aktualisiert: ${publicDraftPath}`);
      }
    }

    console.log('\n🎉 Artikel erfolgreich bearbeitet und gespeichert!');
    console.log('\n⚠️  PRE-RENDERING: Stelle sicher, dass die Route in package.json reactSnap.include steht!');
  } else {
    console.log('\n❌ Änderungen wurden NICHT gespeichert');
  }

  // Show cost statistics
  showStatistics();
}

/**
 * Chat-based edit mode - iterative editing with multiple rounds
 */
async function chatEditMode() {
  console.log('\n💬 CHAT-BASIERTER BEARBEITUNGS-MODUS\n');

  // Get list of available articles
  const pagesDir = path.join(__dirname, '../src/pages');
  const files = fs.readdirSync(pagesDir)
    .filter(f => f.endsWith('.tsx') && f.startsWith('Microsoft'))
    .sort();

  if (files.length === 0) {
    console.error('❌ Keine Artikel gefunden in src/pages/');
    process.exit(1);
  }

  console.log('Verfügbare Artikel:');
  files.forEach((file, index) => {
    console.log(`  [${index + 1}] ${file}`);
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const fileChoice = await question('\nDatei-Nummer oder vollständiger Pfad: ');

  const filePath = fileChoice.match(/^\d+$/)
    ? path.join(pagesDir, files[parseInt(fileChoice) - 1])
    : fileChoice;

  rl.close();

  if (!fs.existsSync(filePath)) {
    console.error(`❌ Datei nicht gefunden: ${filePath}`);
    process.exit(1);
  }

  let currentComponent = fs.readFileSync(filePath, 'utf-8');

  console.log(`\n📄 Geladener Artikel: ${path.basename(filePath)}`);
  console.log(`📊 Aktuelle Länge: ${currentComponent.length} Zeichen`);

  const { wordCount: initialWordCount } = calculateReadingTime(currentComponent);
  console.log(`📖 Aktuelle Wortzahl: ${initialWordCount} Wörter`);

  let iterationCount = 0;
  let continueEditing = true;

  // Chat loop
  while (continueEditing) {
    iterationCount++;
    console.log(`\n${'='.repeat(70)}`);
    console.log(`💬 BEARBEITUNGS-RUNDE ${iterationCount}`);
    console.log(`${'='.repeat(70)}\n`);

    console.log('💡 Beispiel-Anweisungen:');
    console.log('  - "Füge mehr Use Cases für die Healthcare-Branche hinzu"');
    console.log('  - "Verschiebe den Schwerpunkt auf Enterprise-Features"');
    console.log('  - "Ergänze technische Details zur API-Integration"');
    console.log('  - "Füge einen Vergleich mit Konkurrenzprodukten hinzu"');
    console.log('  - "Erweitere die FAQ-Sektion um 5 weitere Fragen"\n');

    const rl2 = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const editInstructions = await new Promise((resolve) =>
      rl2.question('Bearbeitungs-Anweisung (oder "fertig" zum Beenden): ', resolve)
    );

    rl2.close();

    if (editInstructions.trim().toLowerCase() === 'fertig' || !editInstructions.trim()) {
      continueEditing = false;
      console.log('\n✅ Bearbeitung abgeschlossen');
      break;
    }

    console.log(`\n✏️  Bearbeite Artikel (Runde ${iterationCount})...`);

    // Edit article
    currentComponent = await editContent(currentComponent, editInstructions);

    // Show updated stats
    const { wordCount, readTime } = calculateReadingTime(currentComponent);
    console.log(`\n📊 Aktualisierte Statistik:`);
    console.log(`   Länge: ${currentComponent.length} Zeichen`);
    console.log(`   Wortzahl: ${wordCount} Wörter (+${wordCount - initialWordCount} seit Start)`);
    console.log(`   Lesezeit: ${readTime}`);

    // Ask if user wants to continue editing
    const rl3 = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const continueChoice = await new Promise((resolve) =>
      rl3.question('\nWeitere Änderungen vornehmen? (j/N): ', resolve)
    );

    rl3.close();

    if (continueChoice.toLowerCase() !== 'j' && continueChoice.toLowerCase() !== 'ja') {
      continueEditing = false;
    }
  }

  // Final validation
  console.log('\n📋 FINALE QUALITÄTSPRÜFUNG...');
  const validation = validateContentQuality(currentComponent);

  // Update metadata
  const metadata = generateMetadata(currentComponent, '');

  console.log('\n📋 Finale Metadaten:');
  console.log(`   Titel: ${metadata.title}`);
  console.log(`   Slug: ${metadata.slug}`);
  console.log(`   Lesezeit: ${metadata.readTime}`);
  console.log(`   Gesamt-Iterationen: ${iterationCount}`);

  // Ask if user wants to save
  const rl4 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const saveChoice = await new Promise((resolve) =>
    rl4.question('\nÄnderungen speichern? (j/N): ', resolve)
  );

  rl4.close();

  if (saveChoice.toLowerCase() === 'j' || saveChoice.toLowerCase() === 'ja') {
    // Save edited component
    fs.writeFileSync(filePath, currentComponent, 'utf-8');
    console.log(`✅ Artikel gespeichert: ${filePath}`);

    // Update draft JSON if exists
    const draftPath = path.join(__dirname, '../content/drafts', `${metadata.slug}.json`);
    if (fs.existsSync(draftPath)) {
      const draft = JSON.parse(fs.readFileSync(draftPath, 'utf-8'));
      draft.readTime = metadata.readTime;
      draft.updatedAt = new Date().toISOString();
      fs.writeFileSync(draftPath, JSON.stringify(draft, null, 2), 'utf-8');
      console.log(`✅ Draft JSON aktualisiert: ${draftPath}`);

      // Update public draft
      const publicDraftPath = path.join(__dirname, '../public/content/drafts', `${metadata.slug}.json`);
      if (fs.existsSync(publicDraftPath)) {
        fs.writeFileSync(publicDraftPath, JSON.stringify(draft, null, 2), 'utf-8');
        console.log(`✅ Public Draft aktualisiert: ${publicDraftPath}`);
      }
    }

    console.log(`\n🎉 Artikel erfolgreich in ${iterationCount} Runde(n) bearbeitet und gespeichert!`);
  } else {
    console.log('\n❌ Änderungen wurden NICHT gespeichert');
  }

  // Show cost statistics
  showStatistics();

  console.log('\nNächste Schritte:');
  console.log('1. Überprüfe die überarbeitete Komponente');
  console.log('2. Teste die Vorschau im Admin-Dashboard');
  console.log('3. Commit und Push zum Repository');
}

/**
 * CLI mode
 */
async function cliMode(transcriptPath, instructions = '') {
  if (!fs.existsSync(transcriptPath)) {
    console.error(`❌ Datei nicht gefunden: ${transcriptPath}`);
    process.exit(1);
  }

  const transcript = fs.readFileSync(transcriptPath, 'utf-8');

  // Generate (research enabled by default in CLI mode)
  const component = await generateContent(transcript, instructions, true);

  // Validate quality
  const validation = validateContentQuality(component);

  const metadata = generateMetadata(component, transcript);

  console.log('\n📋 Generierte Metadaten:');
  console.log(`   Titel: ${metadata.title}`);
  console.log(`   Slug: ${metadata.slug}`);
  console.log(`   Lesezeit: ${metadata.readTime}`);
  console.log(`   Publikation: ${new Date(metadata.publishDate).toLocaleDateString('de-DE')}`);

  // Save
  const paths = saveContent(component, metadata);

  console.log('\n🎉 Content erfolgreich generiert und gespeichert!');

  // Show cost statistics
  showStatistics();
}

/**
 * Main entry point
 */
async function main() {
  // Check for API key
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ OPENAI_API_KEY nicht gefunden in .env.local');
    console.error('Bitte erstelle eine .env.local Datei mit deinem OpenAI API Key.');
    process.exit(1);
  }

  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === '--interactive') {
    await interactiveMode();
  } else {
    const transcriptPath = args[0];
    const instructions = args[1] || '';
    await cliMode(transcriptPath, instructions);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('❌ Fehler:', error);
    process.exit(1);
  });
}

export { generateContent, generateMetadata, saveContent };
