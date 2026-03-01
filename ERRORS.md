# Errors & Issues Log

## Issue #1: IONOS DNS Manual Required
- **Date:** 2026-03-01
- **Severity:** Medium
- **Status:** Open - Requires Manual Action
- **Description:** Keine IONOS API-Credentials in .env. Browser-Automation nicht verfügbar aus CLI.
- **Required Action:** Manuell in IONOS DNS eintragen:
  - A-Record: `@` → `185.31.40.15`
  - CNAME: `www` → `chatgpt-trainings.de.`
  - TTL: 3600
- **Prevention:** IONOS API-Key in .env ergänzen für zukünftige Clones

## Issue #2: DB Naming Convention
- **Date:** 2026-03-01
- **Severity:** Low
- **Status:** Resolved
- **Description:** AlwaysData DB Naming nutzt Hyphens im Prefix (`y-b_`) nicht Underscores.
- **Fix:** Korrekte Naming: `y-b_chatgpt_trainings_main` statt `y_b_chatgpt_trainings_main`
