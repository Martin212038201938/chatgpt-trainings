# Errors & Issues Log

## Issue #1: IONOS DNS – Unvollständige Anleitung
- **Date:** 2026-03-01
- **Severity:** High
- **Status:** Resolved
- **Description:** Ursprüngliche Anleitung enthielt CNAME für www, was unnötig ist. IONOS bietet automatisch an, www auf dieselbe IP zu setzen. Außerdem fehlte der Hinweis auf die Webhosting-Deaktivierungswarnung, die bestätigt werden muss.
- **Fix:** Vollständiges Deployment-Runbook erstellt. Korrekte Schritte:
  1. IONOS: A-Record `@` → `185.31.40.15` (www wird automatisch angeboten)
  2. IONOS: Warnung "Service wird deaktiviert" bestätigen (deaktiviert alte AAAA/A/TXT Records)
  3. AlwaysData: Domain registrieren (Domains → Add a domain → Manage)
  4. AlwaysData: Site-Adressen konfigurieren (www hinzufügen) + Force HTTPS aktivieren
  5. Warten auf DNS-Propagation + Let's Encrypt Zertifikat (15-90 Min)
- **Prevention:** Runbook in IONOS Domain Router Skill hinterlegt.

## Issue #2: AlwaysData Domain-Registrierung vergessen
- **Date:** 2026-03-01
- **Severity:** High
- **Status:** Resolved
- **Description:** Die Domain wurde bei IONOS umgestellt, aber nicht in AlwaysData als "Managed Domain" registriert. Ohne diesen Schritt kann AlwaysData die Domain nicht bedienen.
- **Fix:** Domain nachträglich in AlwaysData Admin → Domains → Add a domain hinzugefügt.
- **Prevention:** Schritt 4+5 im AlwaysData Provisioner Skill ergänzt.

## Issue #3: AlwaysData Site – www-Adresse und Force HTTPS fehlten
- **Date:** 2026-03-01
- **Severity:** Medium
- **Status:** Resolved
- **Description:** Site hatte nur `chatgpt-trainings.de` als Adresse, nicht `www.chatgpt-trainings.de`. Force HTTPS war nicht aktiviert.
- **Fix:** In AlwaysData Sites → Zahnrad (Modify) → www hinzugefügt + Force HTTPS aktiviert.
- **Prevention:** Als Pflichtschritt im AlwaysData Provisioner Skill aufgenommen.

## Issue #4: DB Naming Convention
- **Date:** 2026-03-01
- **Severity:** Low
- **Status:** Resolved
- **Description:** AlwaysData DB Naming nutzt Hyphens im Prefix (`y-b_`) nicht Underscores.
- **Fix:** Korrekte Naming: `y-b_chatgpt_trainings_main` statt `y_b_chatgpt_trainings_main`

## Issue #5: FTP Password in .env veraltet
- **Date:** 2026-03-01
- **Severity:** High
- **Status:** Resolved
- **Description:** Passwort in .env funktioniert für keinen FTP-User auf AlwaysData.
- **Fix:** Neuen FTP-User `y-b_chatgpt` mit neuem Passwort über API erstellt.
- **Prevention:** .env aktualisieren oder FTP-Credentials pro Projekt über API erstellen.

## Issue #6: FTP-Deploy-Action ECONNRESET
- **Date:** 2026-03-01
- **Severity:** High
- **Status:** Resolved
- **Description:** SamKirkland/FTP-Deploy-Action@v4.3.5 hat ECONNRESET auf Data Socket bei AlwaysData FTPS.
- **Fix:** Umstellung auf `lftp` in deploy.yml.
- **Prevention:** Für alle zukünftigen Clones direkt lftp verwenden statt FTP-Deploy-Action.
