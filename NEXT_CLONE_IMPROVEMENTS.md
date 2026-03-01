# Recommended Changes for Clone #2

## High Priority
- [ ] **lftp statt FTP-Deploy-Action**: deploy.yml Template direkt mit lftp erstellen (FTP-Deploy-Action hat ECONNRESET-Probleme mit AlwaysData)
- [ ] **FTP-User automatisch erstellen**: Bei AlwaysData Provisioning gleich einen dedizierten FTP-User pro Projekt über API anlegen (nicht auf .env-Credentials verlassen)
- [ ] **.env Passwörter validieren**: Vor dem Clone-Start FTP-Verbindung mit .env-Credentials testen
- [ ] **Domain-Setup vollständig automatisieren**: Nach DNS-Umstellung auch Domain in AlwaysData registrieren (Domains → Add a domain → Manage) und www-Adresse + Force HTTPS in der Site-Konfiguration aktivieren. Ohne diese Schritte funktioniert die Site nicht!
- [ ] **IONOS DNS korrekt**: Kein separater CNAME für www nötig – IONOS bietet automatisch an, www auf dieselbe IP zu setzen. Webhosting-Deaktivierungswarnung ist gewollt und muss bestätigt werden.

## Medium Priority
- [ ] **DB Naming Convention fix**: AlwaysData Prefix-Pattern dokumentieren: `y-b_` (Hyphen, nicht Underscore)
- [ ] **Content-Tiefe differenzieren**: Wissensartikel-Body-Text ist noch zu ähnlich zum Template (~60% Similarity). Für SEO mindestens H1, Meta-Desc und Intro-Paragraph pro Seite umschreiben
- [ ] **Logo-Asset**: Eigenes Logo für jede Clone-Site erstellen statt Placeholder
- [ ] **SSL-Verifizierung als Schritt**: Nach DNS-Umstellung automatisch prüfen: `curl -svI --resolve [domain]:443:185.31.40.15 https://[domain]` – erst wenn `subject: CN=[domain]` erscheint, ist HTTPS live

## Optional
- [ ] **Pre-render deaktivieren**: react-snap im Pilot erstmal weglassen, spart Build-Zeit
- [ ] **Trainings-Content anpassen**: Trainings-Beschreibungen von "Copilot" auf Primary Keyword umschreiben
- [ ] **validate-seo.js anpassen**: SEO-Validierung auf neue Domain referenzieren
