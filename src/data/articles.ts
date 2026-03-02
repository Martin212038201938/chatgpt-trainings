// ============================================================================
// ZENTRALE ARTIKEL-DATENBANK
// ============================================================================
// Diese Datei ist die einzige Quelle der Wahrheit für alle Wissensartikel.
// Sowohl Wissen.tsx als auch EditorialCalendar.tsx lesen von hier.
//
// Workflow für neue Artikel:
// 1. TSX-Datei in src/pages/ erstellen
// 2. Route in App.tsx hinzufügen
// 3. HIER einen Eintrag hinzufügen (PFLICHT!)
//    → Wissen.tsx und EditorialCalendar zeigen den Artikel automatisch an
//
// SORTIERUNG: Nach publishDate absteigend (neueste zuerst)
// ============================================================================

export interface ArticleData {
  id: string;
  title: string;
  description: string;
  link: string;
  badge: string;
  icon: string;
  readTime?: string;
  lastUpdated: string;
  publishDate: string;      // ISO Format: "2026-02-04"
  publishTime?: string;     // Optional: "10:00"
  isDraft?: boolean;        // true = Artikel ist ein Draft (nicht veröffentlicht), false/undefined = veröffentlicht
}

// Alle Artikel - sortiert nach Veröffentlichungsdatum (neueste zuerst)
export const ALL_ARTICLES: ArticleData[] = [
  {
    id: "chatgpt-canvas-mode",
    title: "ChatGPT Canvas: Der verkannte Arbeitsmodus, der nichts mit Canva zu tun hat",
    description: "ChatGPT Canvas ist kein Grafikdesign-Tool, sondern ein Arbeitsmodus für Texte und Code. Was Canvas kann, warum es die meisten übersehen und wie ein Workflow ohne Copy-Paste aussieht.",
    link: "/wissen/chatgpt-canvas-mode",
    badge: "ChatGPT Praxis",
    icon: "📝",
    lastUpdated: "02. Mrz. 2026",
    publishDate: "2026-03-02",
    publishTime: "14:00",
    isDraft: false
  },
  {
    id: "chatgpt-news",
    title: "ChatGPT News: Alle Updates und Meilensteine im Zeitstrahl",
    description: "Alle wichtigen ChatGPT-Updates und OpenAI-Meilensteine chronologisch geordnet – vom Launch 2022 bis zu den neuesten Features 2026.",
    link: "/wissen/chatgpt-news",
    badge: "ChatGPT News",
    icon: "📰",
    lastUpdated: "02. Mrz. 2026",
    publishDate: "2026-03-02",
    publishTime: "10:00",
    isDraft: false
  },
  {
    id: "chatgpt-erinnerungen",
    title: "ChatGPT und Erinnerungen: Was weiß ChatGPT über mich?",
    description: "ChatGPT merkt sich mehr über Sie als die meisten vermuten. Wie das Memory-System funktioniert, was gespeichert wird und wie Sie die Kontrolle behalten.",
    link: "/wissen/chatgpt-erinnerungen",
    badge: "ChatGPT Praxis",
    icon: "🧠",
    lastUpdated: "01. Mrz. 2026",
    publishDate: "2026-03-01",
    publishTime: "09:00",
    isDraft: false
  }
];

// Hilfsfunktion: Artikel nach ID finden
export function getArticleById(id: string): ArticleData | undefined {
  return ALL_ARTICLES.find(a => a.id === id);
}

// Hilfsfunktion: Artikel nach Link finden
export function getArticleByLink(link: string): ArticleData | undefined {
  return ALL_ARTICLES.find(a => a.link === link);
}

// Hilfsfunktion: Alle Artikel-IDs
export function getAllArticleIds(): string[] {
  return ALL_ARTICLES.map(a => a.id);
}
