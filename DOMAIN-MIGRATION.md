# Domain-Migration: chatgpt-trainings.de → copilotenschule.de

**Datum:** 23. April 2026
**Status:** abgeschlossen
**Ziel:** Duplicate-Content-Problem zwischen chatgpt-trainings.de und copilotenschule.de auflösen und alle SEO-Signale auf copilotenschule.de konsolidieren.

---

## Hintergrund

chatgpt-trainings.de und copilotenschule.de hatten weitgehend identischen Content (chatgpt-trainings.de war aus dem Template von copilotenschule.de geklont). Es bestand der Verdacht, dass Google copilotenschule.de aufgrund des Duplicate Contents abgewertet oder teilweise deindexiert hat. Entscheidung: chatgpt-trainings.de komplett hinter 301-Redirects "verschwinden lassen" und alle Ranking-Signale zur stärkeren Hauptdomain übertragen.

## Gewählte Strategie

**Alle URLs → Startseite copilotenschule.de** (kein 1:1-Mapping).

Begründung:
- Inhalte auf copilotenschule.de haben andere Slugs / Struktur — 1:1-Mapping wäre aufwendig und fehleranfällig
- chatgpt-trainings.de soll perspektivisch mit neuem Content neu gestartet werden — saubere Trennung besser
- 301 auf Startseite transferiert Domain-Autorität vollständig; Google verteilt die Linkkraft intern passend

## Technische Umsetzung

### 1. `.htaccess` — globale 301-Redirects

Alle Anfragen (außer Ausnahmen unten) werden permanent auf `https://copilotenschule.de/` umgeleitet. `QSD` (Query String Discard) sorgt dafür, dass UTM-Parameter u. ä. nicht mitgeschleppt werden.

Ausnahmen (werden direkt ausgeliefert, nicht weitergeleitet):
- `robots.txt` — muss für Crawler erreichbar bleiben, sonst können 301-Signale nicht verarbeitet werden
- `[0-9a-f]{32}.txt` — IndexNow-Key-Dateien im Root
- `favicon.ico` — vermeidet Browser-Fehler

Zusätzlich: HTTPS-Erzwingung als Fallback und Sicherheits-Header (X-Frame-Options, X-Content-Type-Options, Referrer-Policy).

### 2. `robots.txt` — Crawling explizit erlaubt

Kontraintuitiv, aber kritisch: Suchmaschinen müssen die Domain weiter crawlen dürfen, damit sie die 301-Redirects überhaupt finden und verarbeiten. Ein `Disallow: /` würde die Migration blockieren.

### 3. `sitemap.xml`, `llms.txt`, `llm.txt` — Stubs

Auf leere Platzhalter mit Hinweis auf Migration reduziert. Keine aktiven URL-Listen mehr, die Suchmaschinen oder LLMs zur alten Domain zurückführen könnten.

### 4. React-SPA nicht mehr ausgeliefert

Die alte Vite-Build wird nicht mehr deployed — alles geht in den globalen 301. `index.html` und Assets existieren nicht mehr öffentlich.

## Meldungen an Suchmaschinen

### Google Search Console — Adressänderung

Am 23. April 2026 über die Funktion "Adressänderung" in GSC eingereicht:
- Von: chatgpt-trainings.de
- Auf: copilotenschule.de
- Bestätigung: "Die Adresse dieser Website ändert sich momentan"

Google wird über mehrere Wochen hinweg den Ranking-Signal-Transfer durchführen.

### Bing — IndexNow-Ping + 301-Discovery

- IndexNow-Ping mit 31 URLs an Bing gesendet (HTTP 200) → Bing bekommt sofort Bescheid, die alten URLs neu zu crawlen und die 301s zu sehen
- Bing Webmaster Tools hat **kein** Site-Move-Tool mehr (Microsoft hat die Funktion aus der UI entfernt, die alte `/sitemove`-URL liefert "Keine Seiten gefunden"). Die Migration wird bei Bing automatisch über die 301-Redirects + IndexNow erkannt — kein manueller Schritt erforderlich.

## Verifikation

Live getestet nach Deployment via curl:
- Alle relevanten URLs liefern `HTTP/1.1 301 Moved Permanently` mit `Location: https://copilotenschule.de/`
- `robots.txt` liefert weiterhin `HTTP/1.1 200 OK`
- UTM-Parameter werden durch QSD korrekt verworfen

## Erwartete Timeline

- **Woche 1–2:** Google & Bing beginnen, alte URLs neu zu crawlen und 301s zu verarbeiten
- **Woche 2–4:** Erste Ranking-Signal-Transfers sichtbar
- **Woche 4–8:** chatgpt-trainings.de verschwindet schrittweise aus dem Index; copilotenschule.de übernimmt die Rankings
- **Nach 3–6 Monaten:** Migration aus SEO-Sicht vollständig abgeschlossen

## Monitoring

In den nächsten Wochen sollten folgende Signale beobachtet werden:

- **Google Search Console (chatgpt-trainings.de):** Rückgang der gecrawlten/indexierten Seiten; sollte gegen null tendieren
- **Google Search Console (copilotenschule.de):** Anstieg der Impressionen und Klicks; neue indexierte URLs aus Signal-Transfer
- **Bing Webmaster Tools (copilotenschule.de):** vergleichbare Entwicklung wie bei Google
- **Stichprobe:** `curl -I https://chatgpt-trainings.de/beliebige-alte-url` muss dauerhaft 301 auf copilotenschule.de liefern

## Rollback (falls nötig)

Sollte sich herausstellen, dass die Migration Probleme verursacht:

1. `.htaccess` auf alten Stand zurücksetzen (Git-History vorhanden)
2. `robots.txt` bleibt wie jetzt (ist unkritisch)
3. Google-Adressänderung in GSC abbrechen/zurückziehen
4. chatgpt-trainings.de wieder normal ausliefern

**Wichtig:** Je länger die Migration läuft, desto schwieriger wird ein sauberes Rollback, weil Google/Bing die URLs bereits umgeschrieben haben. Entscheidung zum Rollback sollte innerhalb der ersten 4 Wochen fallen.

## Zukunftsperspektive

chatgpt-trainings.de kann nach der Migration mit komplett neuem Content (andere Zielgruppe, andere Nische) neu aufgezogen werden, ohne dass Duplicate-Content-Risiken zu copilotenschule.de bestehen. Dafür müsste der globale 301-Redirect aufgehoben werden, sobald die Signal-Übertragung abgeschlossen ist (frühestens in 3–6 Monaten).
