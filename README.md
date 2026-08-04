# Trainingsportal

Statische Website mit Passwortsperre, Login, Dashboard und 5 Trainingsmodulen.

## Design

Einheitliches, modernes Theme über alle Seiten: dunkler Hintergrund mit
dezentem Verlauf, Eisblau (`#33c5ff`) als Akzentfarbe, „Space Grotesk" für
Überschriften und „Inter" als Fließtext-Schrift. Jede Modulseite hat eine
Topbar mit Link zurück zum Dashboard und einem Abmelden-Button.

Bei den Modulen 02 und 04 wurde die weiße Inhaltskarte (Tabellen, Ranking,
Analyse-Ansicht) bewusst beibehalten, da sie für die Lesbarkeit von Daten
wichtig ist – nur der Rahmen (Hintergrund, Kopfzeile, Navigation) wurde an
das neue Theme angepasst. Team- bzw. bahnspezifische Farben (Grün/Rot für
Mannschaften, Blau für „Bahn 1") sind funktional und wurden nicht verändert.

## Dateien

```
index.html                     Passwortschutz (Zugangscode-Eingabe)
login.html                     Login (Benutzername + Passwort)
dashboard.html                 Übersicht / Startseite nach dem Login
01_Trainingsmodus.html
02_Meisterschaftsmodus.html
03_Training_einfach.html
04_Trainingsanalyse.html
05_Trainingsmodus_Pro.html
style.css                      gemeinsames Design
auth.js                        einfache Zugriffslogik
```

## So legst du das Projekt auf GitHub an

1. **Repository erstellen**
   Auf github.com oben rechts auf **+ → New repository** klicken. Namen vergeben
   (z. B. `trainingsportal`), auf **Create repository** klicken.

2. **Dateien hochladen**
   Im leeren Repo auf **uploading an existing file** klicken (oder „Add file → Upload files“)
   und alle Dateien aus diesem Ordner per Drag-and-drop hochladen. Danach unten
   **Commit changes** klicken.

   Alternativ per Git auf der Kommandozeile:
   ```bash
   git init
   git add .
   git commit -m "Erste Version Trainingsportal"
   git branch -M main
   git remote add origin https://github.com/DEIN-NUTZERNAME/trainingsportal.git
   git push -u origin main
   ```

3. **GitHub Pages aktivieren** (damit die Seite im Browser aufrufbar ist)
   Im Repo auf **Settings → Pages**. Unter „Build and deployment“ als Source
   **Deploy from a branch** wählen, Branch `main` und Ordner `/ (root)` auswählen,
   **Save** klicken. Nach ein bis zwei Minuten ist die Seite unter
   `https://DEIN-NUTZERNAME.github.io/trainingsportal/` erreichbar.

4. **Zugangsdaten anpassen**
   In `auth.js` die Werte `SITE_PASSWORD`, `VALID_USER.user` und `VALID_USER.pass`
   ändern und die Datei erneut committen/pushen.

## Wichtiger Hinweis zur Sicherheit

Der Passwortschutz in `auth.js` läuft **komplett im Browser** (clientseitig).
Das Passwort steht im Klartext im Quellcode und kann von jedem, der die Seite
aufruft, im „Seitenquelltext anzeigen“ ausgelesen werden. Das reicht, um
neugierige Besucher fernzuhalten, ist aber **kein echter Zugriffsschutz** für
vertrauliche Inhalte.

Für echten Schutz gibt es zwei gängige Wege:
- **GitHub Pages bleibt öffentlich, aber mit echtem Login:** Statt reinem HTML
  ein Hosting mit serverseitiger Logik verwenden, z. B. Cloudflare Pages +
  Cloudflare Access, oder Netlify mit Netlify Identity.
- **Repository privat halten:** GitHub Pages kann auch aus einem privaten
  Repository veröffentlicht werden (bei GitHub Pro/Team/Enterprise, oder als
  privates Deployment über Vercel/Netlify), sodass nur eingeladene Personen
  überhaupt Zugriff auf den Code haben.

## Struktur erweitern

Jede Modulseite (`01_...html` bis `05_...html`) hat denselben Aufbau: Titelzeile,
eine Karte für den Inhalt und einen Link zurück zum Dashboard. Eigene Inhalte
einfach in die `<div class="card">` der jeweiligen Datei einfügen.
