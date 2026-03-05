# A.S.D. Domio Calcio - Nuovo Sito (React + Tailwind)

Nuova base web scalabile costruita su React, TypeScript e Tailwind CSS, progettata a partire dal report di analisi del 5 marzo 2026.

## Obiettivi implementati

- Nuova architettura menu con pagine chiare e navigazione moderna.
- Inserimento squadra **3a Categoria** nelle Prime Squadre.
- Sezione dedicata **Tutela Minori / Safeguarding**.
- Struttura pronta per **rose, calendari, risultati e classifiche** per categoria.
- Sezione **Scuola Calcio** con categorie complete (inclusi Piccoli Amici).
- Contenuti aggiornati alla stagione **2025/2026**.
- Design responsive, palette verde/bianco, UI gerarchica e orientata alla user experience.

## Stack

- React 18
- React Router DOM 6
- TypeScript
- Vite 5
- Tailwind CSS 3

## Base Responsive

Breakpoints semantici configurati in Tailwind:

- `base` (fino a 359px): piccoli smartphone
- `mobile-small` (>= 360px): smartphone compatti
- `mobile` (>= 430px): smartphone standard/grandi
- `tablet-small` (>= 768px): tablet piccoli
- `tablet-large` (>= 1024px): tablet grandi / piccoli laptop
- `desktop` (>= 1280px): schermi desktop

I componenti principali (`SiteLayout`, `SectionTitle`, `TeamCard`, `HomePage`) sono stati aggiornati con questa base responsive.

## Avvio locale

```bash
npm install
npm run dev
```

## Build produzione

```bash
npm run build
npm run preview
```

## Struttura principale

- `src/layout/SiteLayout.tsx`: header, navigazione, footer.
- `src/data/siteData.ts`: dati centralizzati per squadre, news, valori, sponsor, documenti.
- `src/pages/*`: pagine sezionali del sito.
- `src/components/*`: componenti riusabili.

## Integrazioni pronte

- Area placeholder per widget FIGC/LND in `Prime Squadre`.
- Sezione mappa in `Contatti` pronta per iframe Google Maps/OpenStreetMap.

## Note ambiente sandbox

Nel sandbox corrente l'installazione dipendenze non completa per limiti rete (`EAI_AGAIN` verso `registry.npmjs.org`). Il codice e la struttura sono comunque pronti all'esecuzione in ambiente con accesso npm.
