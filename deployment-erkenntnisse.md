# Deployment-Runbook: Neue Domain auf AlwaysData einrichten

## Voraussetzungen

- Domain bei IONOS registriert
- AlwaysData-Account (aktuell: `y-b`, User: martin@yellow-boat.com)
- Site-Dateien bereits per FTP/GitHub Actions auf AlwaysData deployed
- AlwaysData-IP: `185.31.40.15`

---

## Schritt 1: DNS bei IONOS umstellen

### A-Record `@` ändern
1. IONOS Admin → Domains & SSL → Domain auswählen → Tab **"DNS"**
2. Bestehenden A-Record `@` bearbeiten (Stift-Icon)
3. "Zeigt auf" ändern auf: `185.31.40.15`
4. TTL: **1 Stunde** (3600) – ist IONOS-Default

### www-Record
- IONOS bietet beim Speichern automatisch an, den `www`-Record auf dieselbe IP zu setzen (als A-Record)
- Das reicht aus – ein separater CNAME ist nicht nötig

### Webhosting-Konflikt-Warnung
IONOS zeigt: *"Der Service wird deaktiviert"* – das ist gewollt. Folgende alte Records werden automatisch deaktiviert:

- AAAA `@` (IPv6 IONOS)
- A `@` (alte IONOS-IP)
- AAAA `www`
- A `www` (alte IONOS-IP)
- TXT `_dep_ws_mutex`

**Mail-Records bleiben unberührt:** MX, SPF, DKIM, DMARC werden nicht angefasst.

→ Bestätigen und **Speichern**.

---

## Schritt 2: Domain in AlwaysData hinzufügen

1. AlwaysData Admin → **Domains** → "+ Add a domain"
2. Domain eingeben (z.B. `meine-domain.de`) → Submit
3. **"Manage"** auswählen (nicht Transfer) → Next step
4. Domain erscheint als "N/A (external domain name)"

---

## Schritt 3: AlwaysData Site konfigurieren

### Variante A: Site existiert bereits
1. AlwaysData Admin → **Web → Sites**
2. Zahnrad-Icon (Modify) bei der Site klicken – **nicht** den Domain-Link (der navigiert zur Live-Domain!)
3. Tab "Configuration" → **Addresses**: `www.meine-domain.de` als zweite Adresse hinzufügen
4. Tab "SSL" → **"Force HTTPS"** aktivieren
5. **Submit**

### Variante B: Neue Site anlegen
1. AlwaysData Admin → Web → Sites → "+ Add a site"
2. Addresses: `meine-domain.de` + `www.meine-domain.de`
3. Typ: "Static files" (für Vite/React-Builds) oder "PHP" (falls .htaccess-Rewrites nötig)
4. Document Root auf den richtigen Pfad setzen (z.B. `/www/meine-domain/`)
5. SSL → "Force HTTPS" aktivieren
6. Submit

---

## Schritt 4: Warten & Verifizieren

### DNS-Propagation prüfen
```bash
dig +short meine-domain.de A
# Erwartet: 185.31.40.15

dig +short www.meine-domain.de A
# Erwartet: 185.31.40.15
```

### HTTPS prüfen (direkt gegen AlwaysData, umgeht DNS-Cache)
```bash
curl -svI --resolve meine-domain.de:443:185.31.40.15 https://meine-domain.de 2>&1 | grep -E "subject|issuer|HTTP"
```

**Zertifikat bereit:**
```
subject: CN=meine-domain.de
HTTP/2 200
```

**Zertifikat noch nicht bereit:**
```
subject: CN=*.alwaysdata.net
SSL: no alternative certificate subject name matches
```
→ DNS noch nicht propagiert. Let's Encrypt braucht erfolgreiche DNS-Validierung.

### Timing
| Schritt | Dauer |
|---|---|
| DNS-Propagation | 10–60 Min (TTL 3600) |
| Let's Encrypt Zertifikat | wenige Minuten nach DNS-Propagation |
| **Gesamt bis HTTPS live** | **ca. 15–90 Minuten** |

---

## Bekannte Fallstricke

| Problem | Lösung |
|---|---|
| IONOS-Session läuft schnell ab | Erneut einloggen, URL bleibt erhalten |
| AlwaysData Site-Links navigieren zur Domain | Immer Zahnrad-Icon für Einstellungen verwenden |
| SSL zeigt `*.alwaysdata.net` Wildcard | DNS noch nicht propagiert – abwarten |
| `curl` Exit Code 60 (Cert-Fehler) | Zertifikat noch nicht ausgestellt – mit `-k` Flag testen ob Site antwortet |
| AAAA-Records (IPv6) stören | IONOS deaktiviert sie automatisch bei A-Record-Änderung |
| www geht, aber Hauptdomain nicht | DNS-Caches unterschiedlich – einfach warten |

---

## Checkliste für neue Deployments

- [ ] Site-Dateien per FTP/CI auf AlwaysData deployen
- [ ] `.htaccess` prüfen (Rewrites für SPA, Caching-Header)
- [ ] DNS bei IONOS umstellen (A-Record `@` + `www` → 185.31.40.15)
- [ ] Domain in AlwaysData hinzufügen ("Manage")
- [ ] Site-Adressen konfigurieren (Domain + www)
- [ ] Force HTTPS aktivieren
- [ ] DNS-Propagation abwarten
- [ ] HTTPS mit curl verifizieren
- [ ] Seite im Browser testen (ggf. Cache leeren / Inkognito)
