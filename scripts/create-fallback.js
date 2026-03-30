/**
 * create-fallback.js
 *
 * Erstellt _fallback.html aus dist/index.html BEVOR react-snap die Datei
 * mit der pre-gerenderten Homepage überschreibt.
 *
 * Problem: react-snap ersetzt dist/index.html durch die pre-gerenderte Homepage
 * (enthält <link rel="canonical" href="https://chatgpt-trainings.de/" />).
 * Der .htaccess SPA-Fallback liefert index.html für jede unbekannte URL.
 * → Google sieht Homepage-Canonical auf /blog, /schulungen, etc.
 * → Google behandelt diese als Duplikate und indexiert sie nicht.
 *
 * Lösung: Vor react-snap eine saubere _fallback.html erstellen:
 * - Kein Canonical-Tag (wird client-seitig von React gesetzt)
 * - noindex Meta-Tag (unbekannte URLs sollen nicht indexiert werden)
 * - .htaccess nutzt _fallback.html statt index.html als SPA-Fallback
 *
 * Build-Reihenfolge:
 * 1. vite build        → dist/index.html (sauberes Template, kein Canonical)
 * 2. create-fallback   → dist/_fallback.html (Kopie + noindex)
 * 3. react-snap        → dist/index.html wird zur pre-gerenderten Homepage
 * 4. .htaccess         → unbekannte URLs → _fallback.html (sauber, noindex)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');
const fallbackPath = path.join(distDir, '_fallback.html');

// Prüfe ob dist/index.html existiert
if (!fs.existsSync(indexPath)) {
  console.error('❌ dist/index.html nicht gefunden! Wurde "vite build" ausgeführt?');
  process.exit(1);
}

let html = fs.readFileSync(indexPath, 'utf-8');

// noindex Meta-Tag einfügen → unbekannte URLs werden NICHT indexiert
// Das verhindert, dass Google 404-Seiten als Duplikate der Homepage behandelt
html = html.replace(
  '<meta charset="UTF-8" />',
  '<meta charset="UTF-8" />\n    <meta name="robots" content="noindex, nofollow">'
);

fs.writeFileSync(fallbackPath, html);

const fallbackSize = fs.statSync(fallbackPath).size;
console.log(`✅ _fallback.html erstellt (${(fallbackSize / 1024).toFixed(1)} KB)`);
console.log('   → noindex Meta-Tag eingefügt');
console.log('   → Wird als SPA-Fallback für unbekannte URLs verwendet');
console.log('   → Kein Canonical-Tag = keine Duplikat-Probleme');
