# Learnings: Website-Clone & Rebranding Session
## Projekt: copilotenschule.de → chatgpt-trainings.de
**Datum:** 2026-03-01
**Umfang:** 87 Dateien, 1.642 Insertions, 23.168 Deletions

---

## 1. Content-Differenzierung (SEO-kritisch!)

### Problem
Nach dem Clone war die Seite ein 1:1 Duplikat der Quell-Seite. Google bestraft Duplicate Content massiv – beide Seiten verlieren Rankings.

### Was gemacht werden musste
- **Alle Wissensartikel löschen** (22 Copilot-spezifische Artikel entfernt, ~15.000 Zeilen)
- **Hero.tsx komplett neu schreiben** – nicht nur Keywords tauschen, sondern eigene Tonalität, eigene Stats, eigene Value Proposition
- **BecomeTrainer.tsx komplett neu schreiben** – alle drei Trainer-Pfade, Job-Beschreibungen, gesamter Text
- **TrainingKonfigurator.tsx komplett umbauen** – neue Modul-Kategorien passend zum neuen Thema (war: Microsoft 365/GitHub Copilot → jetzt: ChatGPT Basics/Advanced/Custom GPTs/etc.)
- **trainings.ts komplett umbauen** – neue Trainingsformate mit eigenem Typ-System (`ChatGPTTier: "free" | "paid"`)
- **faqs.ts komplett umschreiben** – neue kundenorientierte FAQs passend zum ChatGPT-Thema
- **Benefits.tsx umschreiben** – eigene Verkaufsargumente
- **Index.tsx Schema-Daten anpassen** – `trainingModulesForSchema` Array komplett neu

### Learning für den Skill
> **Regel:** Nach dem Clone gibt es KEINE "quick find-and-replace" Lösung. Jede sichtbare Seite muss inhaltlich eigenständig werden. Plane mindestens 60% der Gesamtzeit für Content-Differenzierung ein, nicht für technisches Setup.

### Priorisierung
1. **Sofort löschen:** Alle Wissensartikel der Quell-Seite (sind themenspezifisch und nicht übertragbar)
2. **Komplett neu schreiben:** Hero, BecomeTrainer, TrainingKonfigurator, Trainings-Daten
3. **Anpassen reicht:** FAQ, Benefits, Footer, Impressum, Datenschutz
4. **Automatisch OK:** Seiten die aus Data-Files rendern (UnsereAngebote.tsx importiert aus trainings.ts)

---

## 2. Typ-System bei trainings.ts

### Problem
Das originale Typ-System (`CopilotTier: "standard" | "advanced" | "studio"`) passte nicht zum neuen Produkt. TypeScript-Compiler bricht ab, wenn man Trainings mit falschen Tier-Werten anlegt.

### Lösung
Eigenes Typ-System definieren das zum neuen Thema passt:
```typescript
type ChatGPTTier = "free" | "paid";
```

### Learning für den Skill
> **Regel:** Beim Clone das Typ-System in `trainings.ts` als ERSTES anpassen. Alle anderen Dateien die diesen Typ importieren, müssen dann ebenfalls angepasst werden. Reihenfolge: Types → Data → Components → Pages.

---

## 3. Schema.org und SEO-Metadaten

### Problem
Nach dem Clone zeigten Schema.org Daten, Meta-Tags und Canonical URLs noch auf die Quell-Domain.

### Was angepasst werden musste
- `src/lib/schema.ts` – Organization-Schema (Name, URL, Logo, Description)
- `src/lib/organizationSchema.ts` – Komplett-Daten der neuen Organisation
- `src/data/authors.ts` – Autor-Profil anpassen (neue Organisation, neue Bio)
- `src/components/SEOHead.tsx` – Default-OG-Image und Site-Name
- `public/sitemap.xml` – Alle URLs auf neue Domain
- `public/robots.txt` – Sitemap-URL
- `public/llm.txt` + `public/llms.txt` – LLM-Informationsdateien
- `index.html` – Title, Meta-Tags, OG-Tags

### Learning für den Skill
> **Regel:** Erstelle eine Checkliste aller Stellen wo die Quell-Domain hardcoded ist. Nutze `grep -r "copilotenschule" src/` als Ausgangspunkt. Es gibt IMMER mehr Stellen als man denkt.

---

## 4. App.tsx Route-Bereinigung

### Problem
App.tsx enthielt Routes zu allen 22 gelöschten Wissensartikeln. Build bricht ab weil die Imports nicht mehr existieren.

### Lösung
Alle Artikel-Imports und Routes entfernen. Auch:
- `react-snap include`-Liste in `package.json` bereinigen
- `Wissen.tsx` – `staticKnowledgeTopics` Array leeren
- `EditorialCalendar.tsx` – `DEFAULT_STATIC_ARTICLES` leeren

### Learning für den Skill
> **Regel:** Wissensartikel sind an 4 Stellen registriert (TSX-Datei, App.tsx Route, Wissen.tsx Liste, EditorialCalendar.tsx Liste, package.json react-snap). Beim Löschen ALLE 5 Stellen bereinigen, sonst bricht der Build.

---

## 5. Deployment-Pipeline (GitHub Actions → FTP)

### Problem
Die originale FTP-Deploy-Action (`SamKirkland/FTP-Deploy-Action@v4.3.5`) hat ECONNRESET-Fehler mit AlwaysData FTPS.

### Lösung
Umstellung auf `lftp` in der deploy.yml:
```yaml
- name: Deploy via LFTP
  run: |
    lftp -e "set ssl:verify-certificate no; set ftp:ssl-allow yes; set ftp:ssl-protect-data yes; mirror -R --delete dist/ /www/chatgpt-trainings/ ; quit" -u ${{ secrets.FTP_USERNAME }},${{ secrets.FTP_PASSWORD }} ${{ secrets.FTP_SERVER }}
```

### Learning für den Skill
> **Regel:** Für ALLE AlwaysData-Deployments direkt `lftp` verwenden. Die FTP-Deploy-Action funktioniert nicht zuverlässig mit AlwaysData FTPS.

---

## 6. DNS & Domain-Setup (IONOS → AlwaysData)

### Die vollständige Reihenfolge
1. **GitHub Repo erstellen** + Secrets setzen (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD)
2. **AlwaysData:** FTP-User anlegen (oder über API erstellen)
3. **AlwaysData:** Site anlegen mit Domain + www als Adressen + Force HTTPS
4. **AlwaysData:** Domain registrieren (Domains → Add a domain → Manage)
5. **IONOS:** A-Record `@` → `185.31.40.15` (www wird automatisch angeboten)
6. **IONOS:** Webhosting-Deaktivierungs-Warnung bestätigen
7. **Warten:** 15-90 Minuten für DNS-Propagation + Let's Encrypt Zertifikat

### Bekannte Fallstricke
- IONOS braucht keinen separaten CNAME für www – wird automatisch angeboten
- AlwaysData Domain-Registrierung (Schritt 4) wird gerne vergessen – ohne geht nichts
- `curl --resolve` nutzen um DNS-Cache zu umgehen beim Testen

### Learning für den Skill
> **Regel:** Domain-Setup hat 7 Schritte, nicht 3. Besonders Schritte 3 (www + HTTPS) und 4 (Domain registrieren) werden gerne vergessen.

---

## 7. Git & Repo-Management

### Problem 1: Sandbox hat keine GitHub-Credentials
Die Cowork-Sandbox hat weder `gh` CLI, noch SSH-Keys, noch gespeicherte Git-Credentials. Push ist aus der Sandbox heraus nicht möglich.

### Problem 2: Falsches Repo gepusht
User hat versehentlich Dateien per GitHub Desktop ins falsche Repo (copilotenschule statt chatgpt-trainings) gepusht.

### Lösung
- `git revert <hash> --no-edit` im betroffenen Repo
- User muss beide Pushes manuell über GitHub Desktop machen

### Learning für den Skill
> **Regel 1:** Git-Commits in der Sandbox vorbereiten, aber dem User KLAR kommunizieren welches Repo gepusht werden muss. Explizit den Repo-Namen nennen, nicht nur "Push origin".
>
> **Regel 2:** Bei mehreren Repos im selben Workspace ist Verwechslungsgefahr hoch. Vor dem Push-Auftrag immer sagen: "Bitte stelle sicher, dass du im Repo **[exakter Name]** bist."
>
> **Regel 3:** `git revert` ist die sichere Methode um Commits rückgängig zu machen. NIEMALS `git reset --hard` oder `git push --force`.

---

## 8. Logo & Branding-Assets

### Problem
Das Clone hatte noch das alte Logo. Ein neues Logo musste erstellt und in allen Referenzen getauscht werden.

### Betroffene Dateien
- `public/images/chatgpt-trainings-logo.png` (neues Asset)
- `index.html` – Favicon/OG-Image Referenzen
- `src/components/Header.tsx` – Logo-Import
- `src/components/Footer.tsx` – Logo-Import
- `src/lib/organizationSchema.ts` – Logo-URL im Schema

### Learning für den Skill
> **Regel:** Logo als einen der ersten Schritte erstellen. Es wird an mindestens 5 Stellen referenziert.

---

## 9. index.lock Dateien

### Problem
Git-Operationen schlugen fehl wegen einer stale `index.lock` Datei (vermutlich von GitHub Desktop hinterlassen).

### Lösung
```bash
rm .git/index.lock
```

### Learning für den Skill
> **Regel:** Wenn Git-Operationen mit "index.lock exists" fehlschlagen: Lock-Datei löschen. In der Cowork-Sandbox braucht man dafür ggf. `allow_cowork_file_delete` Berechtigung.

---

## 10. Build-Validierung vor Commit

### Problem
Ohne vorherigen Build-Test können kaputte Imports oder TypeScript-Fehler ins Repo gelangen.

### Lösung
Immer `npm run build` vor dem Commit ausführen.

### Learning für den Skill
> **Regel:** IMMER `npm run build` als letzten Schritt VOR dem Git-Commit. Das fängt ab:
> - Fehlende Imports (gelöschte Dateien aber Route noch da)
> - TypeScript-Typ-Fehler (falsches Typ-System)
> - react-snap Fehler (fehlende Einträge in include-Liste)
> - validate-seo.js Fehler (falsche Canonical URLs)

---

## Zusammenfassung: Optimale Reihenfolge für Website-Clone

```
1. Repo erstellen + Clone + Remote konfigurieren
2. deploy.yml anpassen (lftp, neue Secrets)
3. Domain-Setup (AlwaysData + IONOS)  ← 7 Schritte!
4. Logo erstellen
5. Typ-System anpassen (trainings.ts Types)
6. Trainingsdaten komplett umschreiben
7. Wissensartikel ALLE löschen + an 5 Stellen deregistrieren
8. Schema.org + SEO-Metadaten (grep nach alter Domain)
9. Seiten mit einzigartigem Content neu schreiben:
   - Hero.tsx
   - BecomeTrainer.tsx
   - TrainingKonfigurator.tsx
   - faqs.ts
   - Benefits.tsx
10. Global grep: Restliche Referenzen zur alten Domain finden
11. npm run build → Fehler fixen
12. Git commit + Push + Live-Test
```

**Geschätzte Gesamtdauer:** 3-4 Stunden (davon ~60% Content-Arbeit)
