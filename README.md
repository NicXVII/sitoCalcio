# A.S.D. Domio Calcio - Sito Ufficiale

Sito web ufficiale di A.S.D. Domio Calcio, sviluppato come piattaforma moderna, responsive e orientata alle famiglie, agli atleti e ai partner del club.

## Funzione del progetto

Il progetto fornisce un unico punto di accesso per:

- presentazione societaria e storia del club;
- gestione delle sezioni sportive (prime squadre, settore giovanile, scuola calcio);
- comunicazione news e aggiornamenti stagione;
- area sponsor con loghi ottimizzati;
- contatti, modulistica e sezione tutela minori/safeguarding.

## Caratteristiche principali

- Navigazione completa con menu principale + sezione `Altro`.
- Routing client-side con pagine dedicate per ogni area del sito.
- Struttura dati modulare (`news`, `teams`, `history`, `sponsors`, `documents`, `navigation`).
- Code splitting per route (`React.lazy` + `Suspense`) per ridurre il carico iniziale.
- Interfaccia responsive con breakpoint personalizzati Tailwind.
- Ottimizzazioni performance:
  - chunking Vite per librerie di routing;
  - logo ottimizzato in WebP con fallback PNG;
  - immagini sponsor lazy-loaded con `decoding="async"`;
  - effetti visuali adattivi disattivati automaticamente su dispositivi meno performanti.

## Tecnologie usate

- React 18
- React Router DOM 6
- TypeScript 5
- Vite 5
- Tailwind CSS 3
- PostCSS + Autoprefixer

## Requisiti

- Node.js 18+
- npm 9+

## Avvio locale

```bash
npm install
npm run dev
```

Server di sviluppo: `http://localhost:5173`

## Build e preview produzione

```bash
npm run build
npm run preview
```

## Script disponibili

- `npm run dev`: avvio ambiente di sviluppo.
- `npm run build`: type-check + build produzione.
- `npm run preview`: anteprima locale della build.

## Struttura progetto

- `src/layout/`: layout globale (header, nav, footer).
- `src/pages/`: pagine del sito.
- `src/components/`: componenti riusabili UI.
- `src/data/`: sorgenti dati separate per dominio funzionale.
- `src/hooks/`: hook condivisi (es. gestione titolo pagina).
- `public/`: asset statici (logo e sponsor).

## Breakpoint responsive

- `mobile-small`: `360px`
- `mobile`: `430px`
- `tablet-small`: `768px`
- `tablet-large`: `1024px`
- `desktop`: `1280px`
