# All4running Crosscircuit

Vue 3-website met acht pagina’s, een responsive ontwerp voor GitHub Pages. De teksten zijn voorlopige invulling; wedstrijdnamen en contactgegevens zijn overgenomen uit de aangeleverde screenshot. De aangeleverde logo’s van All4running, Univé en Primera staan in `src/assets/`.

## Starten

Vereist Node.js 22.12+ of 24+ en npm.

```sh
npm install
npm run dev
```

Open de URL uit de terminal. Pas pagina-inhoud, wedstrijden en contactgegevens aan in `src/content.json`. Er is geen beheeromgeving of schrijf-API.

De pagina’s en navigatie staan in deze volgorde: Wedstrijdkalender, Hall of fame, Over crosscircuit, Inschrijven, Algemene voorwaarden, Uitslagen, Klassement en Fotoalbum.

## Publiceren op GitHub Pages

1. Maak een GitHub-repository aan en push deze map naar de branch `main` (inclusief `package-lock.json`).
2. Kies in de repository **Settings → Pages → Source → GitHub Actions**.
3. De meegeleverde workflow bouwt en publiceert automatisch na iedere push naar `main`. De uiteindelijke URL vind je bij **Actions** en **Settings → Pages**.

Na een inhoudswijziging: commit `src/content.json` en push naar GitHub. De workflow publiceert vervolgens de nieuwe versie. Hash-routes en relatieve bestanden ondersteunen zowel een repository-URL als een eigen domein.

```sh
npm run build
npm run preview
```

De productieversie staat in `dist/`. Google Fonts is optioneel; bij afwezigheid van internet worden lokale fallbacklettertypen gebruikt.
