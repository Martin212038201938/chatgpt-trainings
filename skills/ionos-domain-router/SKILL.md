# IONOS Domain Router

Configures IONOS domain DNS settings to point to AlwaysData servers. Uses Chrome browser automation via Claude Code to navigate IONOS interface, set A-Records and CNAME as needed. Verifies DNS propagation after configuration.

## Max Iterations
10

## Operationen

### 1. Browser-basierte Konfiguration (Claude Chrome Plugin)
- Navigiere zu IONOS Domain Management fuer `[domain]`
- Setze A-Record: `@` → AlwaysData IP (aus AlwaysData Docs oder .env)
- Setze CNAME: `www` → `[domain].`
- TTL: 3600 (1 Stunde)

### 2. DNS Propagation Check
- Warte 60 Sekunden
- Teste `nslookup [domain]`
- Validiere A-Record zeigt auf AlwaysData IP

## DNS Werte

```
A-Record:    @ → [ALWAYSDATA_IP]
CNAME:       www → [domain].
TTL:         3600
```

## Fallback

Falls Browser-Automation fehlschlaegt, gebe Martin exakte DNS-Werte zum manuellen Eintragen:

```
Bitte in IONOS fuer [domain] eintragen:
- A-Record: @ → [IP]
- CNAME: www → [domain].
- TTL: 3600
```

## Validation

```bash
# DNS Check
dig [domain]
# Expected: AlwaysData IP

# Connection Check
curl -I https://[domain]
# Expected: 200 oder 404 (aber verbindet zu AlwaysData)
```

## Best Practices
- Speichere Screenshots bei jedem Browser-Schritt
- Implementiere Timeout-Handling (max 5 Min pro Operation)
- Dokumentiere DNS-Werte auch wenn Automation funktioniert
