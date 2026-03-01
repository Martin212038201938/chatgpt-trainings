# Recommended Changes for Clone #2

## High Priority
- [ ] **lftp statt FTP-Deploy-Action**: deploy.yml Template direkt mit lftp erstellen (FTP-Deploy-Action hat ECONNRESET-Probleme mit AlwaysData)
- [ ] **FTP-User automatisch erstellen**: Bei AlwaysData Provisioning gleich einen dedizierten FTP-User pro Projekt über API anlegen (nicht auf .env-Credentials verlassen)
- [ ] **IONOS API-Credentials**: IONOS Developer API-Key beschaffen und in .env aufnehmen für automatisches DNS-Routing
- [ ] **.env Passwörter validieren**: Vor dem Clone-Start FTP-Verbindung mit .env-Credentials testen

## Medium Priority
- [ ] **DB Naming Convention fix**: AlwaysData Prefix-Pattern dokumentieren: `y-b_` (Hyphen, nicht Underscore)
- [ ] **Content-Tiefe differenzieren**: Wissensartikel-Body-Text ist noch zu ähnlich zum Template (~60% Similarity). Für SEO mindestens H1, Meta-Desc und Intro-Paragraph pro Seite umschreiben
- [ ] **Logo-Asset**: Eigenes Logo für jede Clone-Site erstellen statt Placeholder

## Optional
- [ ] **Pre-render deaktivieren**: react-snap im Pilot erstmal weglassen, spart Build-Zeit
- [ ] **Trainings-Content anpassen**: Trainings-Beschreibungen von "Copilot" auf Primary Keyword umschreiben
- [ ] **validate-seo.js anpassen**: SEO-Validierung auf neue Domain referenzieren
