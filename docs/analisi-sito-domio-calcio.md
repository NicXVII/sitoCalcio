# Analisi UI/UX — Sito A.S.D. Domio Calcio

**Data analisi:** 6 marzo 2026  
**Analista:** Esperto UI/Web Development  
**Oggetto:** Audit completo del sito web A.S.D. Domio Calcio — architettura, design system, usabilità, accessibilità, performance, contenuti e congruenza funzionale.

---

## 1. Panoramica Generale

| Voce | Dettaglio |
|---|---|
| **Stack** | React 18 + TypeScript + Vite 5 + Tailwind CSS 3 + React Router 6 |
| **Tipo** | SPA (Single Page Application) con lazy loading delle pagine |
| **Target** | Famiglie, atleti, dirigenti, sponsor, comunità locale |
| **Lingua** | Italiano |
| **Pagine** | 12 pagine + 404 |
| **Responsive** | Sì, breakpoint custom (360px → 1280px) |
| **Hosting** | Static site (Vite build), nessun backend |

Il sito è moderno, snello e ben strutturato per una società sportiva dilettantistica. La scelta tecnologica (React + Vite + Tailwind) è adeguata al progetto: offre velocità di caricamento, facilità di manutenzione e una base scalabile.

---

## 2. Architettura dell'Informazione

### 2.1 Mappa del sito

```
/ (Home)
├── /societa (La Società)
├── /storia (La Nostra Storia)
├── /risultati (Risultati)
├── /prime-squadre (Prime Squadre)
├── /settore-giovanile (Settore Giovanile)
├── /scuola-calcio (Scuola Calcio)
├── /news (News)
├── /media (Media)
├── /sponsor (Sponsor)
├── /contatti (Contatti)
├── /tutela-minori (Safeguarding)
└── /* (404 - Not Found)
```

### 2.2 Navigazione

La navigazione è divisa in due livelli:

- **Navbar principale (visibile):** Home, La Società, Risultati, Sponsor, Contatti
- **Menu "Altro" (dropdown):** Storia, Prime Squadre, Settore Giovanile, Scuola Calcio, News, Media, Tutela Minori

**Valutazione:** La separazione main/extra è ragionevole per evitare un header troppo affollato, ma nasconde sotto "Altro" le pagine che per i genitori e i tifosi sono le più importanti (Prime Squadre, Settore Giovanile, News). Questo è un problema di prioritizzazione delle informazioni.

### 2.3 Giudizio Architettura

| Aspetto | Valutazione | Note |
|---|---|---|
| Gerarchia | ⚠️ Parziale | Le squadre e il settore giovanile sono "nascosti" nel dropdown |
| Profondità | ✅ Buona | Max 1 livello di profondità, accesso diretto a tutte le pagine |
| Naming URL | ✅ Ottimo | URL semantiche, in italiano, SEO-friendly |
| Redirect legacy | ✅ Presente | `/la-societa/tutela-minori` → `/tutela-minori` |

---

## 3. Design System e Visual Identity

### 3.1 Palette Colori

Il sito utilizza una palette naturalistica coerente con l'identità sportiva:

| Token | Colore | Uso |
|---|---|---|
| `field-900` | `#141f1a` | Testo principale |
| `field-800` | `#293d33` | Testo secondario |
| `field-700` | `#344e41` | Label, eyebrow |
| `field-600` | `#3a5a40` | CTA primaria, bottoni attivi |
| `field-500` | `#588157` | Accenti |
| `field-50 → 200` | verdi chiarissimi | Sfondi, badge, card |

**Valutazione:** ✅ La palette è armoniosa, evoca il campo sportivo, ha buoni rapporti di contrasto per l'accessibilità. I toni verdi/salvia/pino sono distintivi e riconoscibili.

### 3.2 Tipografia

- **Font display:** SF Pro Display / Helvetica Neue (system font stack)
- **Font body:** SF Pro Text / Helvetica Neue (system font stack)
- **Stile titoli:** UPPERCASE, tracking largo, display weight

**Valutazione:** ✅ L'uso dei system font è ottimo per le performance (zero web font da caricare). Lo stile uppercase con ampio tracking crea un'identità tipografica sportiva e contemporanea, coerente con il branding delle società calcistiche professionali.

### 3.3 Componenti UI

| Componente | Qualità | Note |
|---|---|---|
| `SectionTitle` | ✅ Eccellente | Eyebrow + titolo + descrizione, riusato ovunque |
| `TeamCard` | ✅ Buono | Mostra info chiave, animazione hover sottile |
| `ClubLogo` | ✅ Ottimo | Formato WebP con fallback PNG, dimensioni esplicite |
| `surface-card` | ✅ Molto buono | Glassmorphism leggero con backdrop-filter |
| Card generiche | ⚠️ Da migliorare | Molte card sono inline (non componentizzate) |

### 3.4 Effetti Visivi

Il sito presenta un **effetto interattivo "metal glow"** basato sulla posizione del mouse:
- Gradiente radiale che segue il cursore con trailing
- Trail ritardato per effetto scia
- Conic gradient per riflessi metallici

**Gestione prestazioni:**
- ✅ Disattivato automaticamente su: touch device, schermi ≤1200px, dispositivi con poca RAM/CPU, connessioni lente, `prefers-reduced-motion`
- ✅ Versione "lite" per dispositivi mid-range
- ✅ Rendering via `requestAnimationFrame` con auto-stop quando il cursore è fermo

**Valutazione:** ✅ Implementazione sofisticata e responsabile. L'effetto è elegante su desktop e non penalizza i dispositivi meno potenti.

---

## 4. Analisi Pagina per Pagina

### 4.1 Home (`/`)

**Contenuto:** Hero con stagione, identità, prossima gara, novità. Sezione storia. Valori. News in evidenza.

| Aspetto | Giudizio |
|---|---|
| Hero | ✅ Efficace, con CTA chiare ("Scopri le Squadre", "Iscrizioni") |
| Prossima gara | ✅ Informazione utile, in primo piano |
| Valori | ✅ Comunicano missione e identità |
| News | ✅ 3 highlight recenti, non ingombrano |

**Criticità:**
- ⚠️ La sezione "Prossima Gara" ha dati statici hardcoded. Non c'è integrazione dinamica.
- ⚠️ Il collegamento "Iscrizioni 2025/2026" porta a `/contatti`, che non è una vera pagina iscrizioni.

### 4.2 La Società (`/societa`)

**Contenuto:** Timeline storica, direttivo & staff, tutela minori, info campo.

| Aspetto | Giudizio |
|---|---|
| Timeline | ✅ Sintetica e efficace |
| Staff | ✅ Informazioni essenziali presenti |
| Campo Barut | ✅ Indirizzo e strutture indicate |

**Criticità:**
- ⚠️ I nomi dello staff sembrano placeholder (Marco Rossi, Andrea Bianchi, Luca Fabbri, Elisa Verdi). Se sono reali, ok; se sono fittizi, vanno aggiornati con urgenza.
- ⚠️ Manca un organigramma visuale o una sezione foto dello staff.

### 4.3 La Nostra Storia (`/storia`)

**Contenuto:** Data fondazione, 17 soci fondatori, cronologia essenziale, note storiche.

**Valutazione:** ✅ Ottima pagina, ricca di contenuto storico concreto e verificabile. Dà dignità alla storia del club.

**Criticità:**
- ⚠️ Nessuna immagine/foto d'archivio. Per una pagina storica, il visual storytelling è fondamentale.

### 4.4 Prime Squadre (`/prime-squadre`)

**Contenuto:** Card 1ª e 3ª Categoria, area predisposta per widget FIGC.

**Valutazione:** ✅ Struttura chiara, due team ben presentati.

**Criticità:**
- ⚠️ Il widget FIGC/LND è ancora un **placeholder** ("Placeholder tecnico: integrare script/widget ufficiale FIGC per categoria"). È la funzione più attesa dai tifosi.
- ⚠️ Non ci sono rose giocatori, foto, né statistiche.

### 4.5 Settore Giovanile (`/settore-giovanile`)

**Contenuto:** Card Juniores, Allievi, Giovanissimi + piano tecnico.

**Valutazione:** ✅ Informazioni formative e orari ben presentati.

**Criticità:**
- ⚠️ Il "Piano Tecnico Annuale" è solo un testo descrittivo, senza documenti scaricabili o dettagli reali.

### 4.6 Scuola Calcio (`/scuola-calcio`)

**Contenuto:** Card Esordienti, Pulcini, Primi Calci, Piccoli Amici + modulistica.

**Valutazione:** ✅ Pagina ben strutturata per i genitori, con modulistica in evidenza.

**Criticità:**
- ⚠️ I documenti nella modulistica sono solo testo (stringhe), non link a PDF scaricabili. Per i genitori è fondamentale poter scaricare i moduli.

### 4.7 Risultati (`/risultati`)

**Contenuto:** Dashboard con conteggi, prossimi appuntamenti, sezione agonistico/non agonistico con card dettagliate.

**Valutazione:** ✅ L'idea del "centro risultati" è eccellente. La separazione agonistico/non agonistico è molto chiara.

**Criticità:**
- ⚠️ Tutti i dati sono statici. Non c'è alcuna integrazione live.
- ⚠️ Anche qui il placeholder FIGC-LND è presente ma non implementato.

### 4.8 News (`/news`)

**Contenuto:** 3 news + sezione archivio storico.

**Valutazione:** ⚠️ Pagina troppo vuota. Solo 3 notizie, identiche a quelle in homepage.

**Criticità:**
- ❌ Non c'è un sistema di gestione contenuti (CMS). Le news sono hardcoded nel codice.
- ⚠️ L'archivio storico è solo un box di testo, non una vera funzionalità.
- ⚠️ Non c'è paginazione, filtri per tag, né date dinamiche.

### 4.9 Media (`/media`)

**Contenuto:** 6 blocchi tematici (Allenamento, Match Day, Open Day, Archivio, Sponsor, Dietro le Quinte).

**Valutazione:** ⚠️ Pagina completamente placeholder. Non contiene alcun media reale.

**Criticità:**
- ❌ Nessuna foto, nessun video, nessuna gallery reale. Solo card testuali con titoli.
- ⚠️ L'utente che arriva su questa pagina non trova nulla di fruibile.

### 4.10 Sponsor (`/sponsor`)

**Contenuto:** Main sponsor, partner ufficiali, partner territorio, CTA "Diventa Sponsor".

**Valutazione:** ✅ Pagina molto ben fatta. Struttura a livelli (main/official/community), loghi WebP, link ai siti, hover effects.

**Criticità:**
- ⚠️ "Fiocco d'oro" è l'unico sponsor senza logo (`logo: null`).
- ⚠️ Il link di alcuni sponsor punta a pagine esterne del vecchio sito (`domiocalcio.com`).

### 4.11 Contatti (`/contatti`)

**Contenuto:** Informazioni contatto, form, modulistica, placeholder mappa.

**Valutazione:** ⚠️ Parzialmente funzionale.

**Criticità:**
- ❌ Il form di contatto ha `type="button"` sul bottone invio — **non fa nulla**. Non c'è né `onSubmit` né integrazione backend/mail.
- ❌ La mappa è un placeholder testuale, non una vera mappa interattiva.
- ⚠️ La modulistica è duplicata (stessa dell'area Scuola Calcio) e non scaricabile.

### 4.12 Tutela Minori (`/tutela-minori`)

**Contenuto:** Referenti, procedura segnalazioni, documenti.

**Valutazione:** ✅ Sezione importante e obbligatoria per le società sportive. Contenuto chiaro.

**Criticità:**
- ⚠️ I documenti (policy tutela, codice etico, linee guida) sono citati ma non scaricabili/consultabili.
- ⚠️ L'email `safeguarding@domiocalcio.com` non è un link `mailto:`.

### 4.13 404 (Not Found)

**Valutazione:** ✅ Semplice, efficace, con link di ritorno alla home.

---

## 5. Responsiveness e Mobile

### 5.1 Breakpoint System

| Nome | Valore | Note |
|---|---|---|
| `mobile-small` | 360px | Smartphone compatti |
| `mobile` | 430px | Smartphone standard |
| `tablet-small` | 768px | Tablet portrait |
| `tablet-large` | 1024px | Tablet landscape / soglia navbar |
| `desktop` | 1280px | Desktop |

**Valutazione:** ✅ Sistema ben pensato, granulare. La progressione è logica.

### 5.2 Mobile UX

- ✅ Menu hamburger con overlay e scroll lock
- ✅ Padding progressivi per ogni breakpoint
- ✅ Card in griglia singola su mobile, multi-colonna su tablet/desktop
- ✅ Effetti visivi disattivati su touch/small screen

**Criticità:**
- ⚠️ Il pulsante "Menu" è solo testo, non un'icona hamburger. Potrebbe non essere immediatamente riconoscibile.
- ⚠️ Il menu mobile non ha icone accanto alle voci.

---

## 6. Performance

### 6.1 Punti Forti

- ✅ **Lazy loading pagine:** Tutte le pagine sono importate con `React.lazy()` + `Suspense`
- ✅ **System fonts:** Zero richieste font esterne
- ✅ **WebP per loghi sponsor:** Con dimensioni `width`/`height` esplicite e `loading="lazy"`
- ✅ **Logo club:** `<picture>` con source WebP e fallback PNG, preload nella `<head>`
- ✅ **Effetti GPU-friendly:** Uso di `transform`, `opacity`, `will-change` impliciti via Tailwind
- ✅ **No dipendenze pesanti:** Solo React, React Router, zero librerie UI esterne

### 6.2 Punti Deboli

- ⚠️ Le immagini sponsor hanno `width={320} height={160}` fisse per tutti — non rispecchiano le dimensioni reali
- ⚠️ Nessun `<meta>` Open Graph per condivisione social
- ⚠️ Nessun `manifest.json` per PWA
- ⚠️ Nessun service worker per caching offline

---

## 7. Accessibilità (a11y)

### 7.1 Punti Forti

- ✅ `lang="it"` nel `<html>`
- ✅ `aria-hidden="true"` sugli elementi decorativi
- ✅ `aria-expanded` e `aria-label` sui menu
- ✅ `aria-controls` sui dropdown
- ✅ Chiusura menu con `Escape`
- ✅ `prefers-reduced-motion` rispettato completamente
- ✅ Alt text su tutte le immagini

### 7.2 Criticità

- ⚠️ Il form di contatto non ha `<label>` associati agli input (usa solo `placeholder`)
- ⚠️ Mancano `role="navigation"` espliciti e landmark ARIA
- ⚠️ I link sponsor (`target="_blank"`) hanno `rel="noreferrer"` ma mancano di un indicatore visivo che si aprono in nuova finestra
- ⚠️ Nessun skip-link per raggiungere il contenuto principale

---

## 8. SEO

| Aspetto | Stato |
|---|---|
| `<title>` dinamico | ✅ Via `usePageTitle()` — es. "Prime Squadre \| A.S.D. Domio Calcio" |
| `<meta description>` | ⚠️ Presente solo in `index.html`, statica, non cambia per pagina |
| URL semantiche | ✅ `/prime-squadre`, `/settore-giovanile`, etc. |
| Open Graph | ❌ Assente |
| Structured Data (JSON-LD) | ❌ Assente |
| Sitemap XML | ❌ Assente |
| robots.txt | ❌ Assente |
| SSR/SSG | ❌ SPA pura — il crawler vede solo `<div id="root">` |

**Nota critica:** Essendo una SPA senza SSR (Server-Side Rendering), Google potrebbe avere difficoltà nell'indicizzare correttamente le pagine interne. Per un sito di società sportiva locale, questo è un problema significativo per la visibilità nelle ricerche locali.

---

## 9. Sicurezza

| Aspetto | Stato |
|---|---|
| Link esterni `rel="noreferrer"` | ✅ Presente |
| Form senza backend | ✅ Nessun rischio injection (il form non fa nulla) |
| No dati sensibili client-side | ✅ |
| Dipendenze aggiornate | ✅ React 18.3, Vite 5.4, Tailwind 3.4 |
| `type="button"` su bottoni non-submit | ✅ Previene invii accidentali |

---

## 10. Congruenza Funzionale — Verdetto

### Il sito è congruo alla sua funzione?

**Risposta: PARZIALMENTE SÌ, con importanti lacune operative.**

#### ✅ Cosa funziona bene

1. **Identità visiva forte** — Il design è moderno, coerente, professionale. Superiore alla media dei siti ASD.
2. **Architettura informativa logica** — Le sezioni coprono tutti i bisogni: squadre, risultati, storia, contatti, sponsor, tutela minori.
3. **Mobile-first** — L'esperienza su smartphone è curata e funzionale.
4. **Performance** — Il sito è veloce, leggero, senza bloat.
5. **Codice pulito** — TypeScript rigoroso, componenti riutilizzabili, dati separati dalla presentazione.
6. **Sponsor** — Sezione completa e professionale, con loghi reali e link funzionanti.
7. **Storia** — Contenuto ricco e autentico che dà profondità alla società.

#### ❌ Cosa manca per essere pienamente operativo

| Priorità | Problema | Impatto |
|---|---|---|
| **ALTA** | Form contatti non funzionante | L'utente non può contattare la società dal sito |
| **ALTA** | Risultati/classifiche statici (nessun widget FIGC) | I tifosi/genitori non trovano i risultati aggiornati |
| **ALTA** | News hardcoded (no CMS) | Impossibile aggiornare senza sviluppatore |
| **ALTA** | Documenti non scaricabili | I genitori non possono scaricare moduli iscrizione |
| **ALTA** | SPA senza SSR → SEO debole | Scarsa visibilità su Google per ricerche locali |
| **MEDIA** | Pagina Media completamente vuota | Aspettative deluse, pagina inutile allo stato attuale |
| **MEDIA** | Nessuna mappa interattiva | Difficoltà a trovare il campo |
| **MEDIA** | Sezioni squadre senza rose giocatori | Manca l'informazione più cercata dai tifosi |
| **BASSA** | Nessun Open Graph / social card | Link condivisi su WhatsApp/Facebook senza anteprima |
| **BASSA** | Email safeguarding non cliccabile | Frizione nell'usabilità |

---

## 11. Raccomandazioni Prioritarie

### Fase 1 — Correzioni Immediate (Quick Win)

1. **Rendere il form contatti funzionale** — Integrare un servizio come Formspree, EmailJS o Netlify Forms.
2. **Rendere i documenti scaricabili** — Caricare i PDF nella cartella `public/` e trasformare le stringhe in link `<a href>`.
3. **Aggiungere `mailto:` all'email safeguarding** — Una riga di codice.
4. **Aggiungere mappa** — Embed iframe Google Maps o OpenStreetMap nel contatti.
5. **Nascondere la pagina Media** o sostituirla con un redirect/placeholder dichiarato ("Coming soon").

### Fase 2 — Evoluzione Strutturale

6. **Integrare widget risultati FIGC/LND** — Classifiche e risultati live per le squadre agonistiche.
7. **Implementare un headless CMS** — (es. Strapi, Sanity, Contentful, o anche file Markdown con frontmatter) per gestire news senza toccare il codice.
8. **Aggiungere SSR/SSG** — Migrare a Next.js o Astro per migliorare SEO e first-paint.
9. **Aggiungere rose giocatori** — Per ogni squadra, elenco con nome, ruolo, numero di maglia.
10. **Aggiungere foto reali** — Specialmente per: storia, staff, squadre, media.

### Fase 3 — Polish & Scalabilità

11. **Open Graph meta tags** per ogni pagina.
12. **Sitemap XML + robots.txt** per SEO.
13. **PWA manifest + service worker** per accesso offline.
14. **Skip-link** per accessibilità.
15. **Icona hamburger** al posto del testo "Menu".

---

## 12. Conclusione

Il sito A.S.D. Domio Calcio è un **ottimo prototipo funzionale** con un design di qualità superiore alla media delle società dilettantistiche. L'identità visiva è forte, il codice è pulito, e l'architettura informativa copre tutti i casi d'uso fondamentali.

Tuttavia, allo stato attuale è più una **vetrina statica** che un sito operativo: le funzionalità interattive (form, risultati, documenti, media) sono predisposte ma non implementate. Per diventare uno strumento realmente utile per famiglie, atleti e tifosi, servono le integrazioni della Fase 1 e 2.

**Voto complessivo: 7/10** — Eccellente base tecnica e di design, da completare sul piano funzionale.

---

*Documento generato il 6 marzo 2026 — Analisi del sito A.S.D. Domio Calcio*
