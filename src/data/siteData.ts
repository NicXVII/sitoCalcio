export type NavItem = {
  label: string;
  path: string;
};

export type Team = {
  name: string;
  category: string;
  description: string;
  training: string;
  nextMatch: string;
  modules: string[];
};

export type NewsItem = {
  title: string;
  tag: string;
  date: string;
  summary: string;
};

export type HistoryMilestone = {
  year: string;
  title: string;
  text: string;
};

export type Sponsor = {
  name: string;
  logo: string | null;
  website: string | null;
  tier: 'main' | 'official' | 'community';
  summary: string;
};

export const mainNavItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'La Societa', path: '/societa' },
  { label: 'Risultati', path: '/risultati' },
  { label: 'Sponsor', path: '/sponsor' },
  { label: 'Contatti', path: '/contatti' }
];

export const extraNavItems: NavItem[] = [
  { label: 'La Nostra Storia', path: '/storia' },
  { label: 'Prime Squadre', path: '/prime-squadre' },
  { label: 'Settore Giovanile', path: '/settore-giovanile' },
  { label: 'Scuola Calcio', path: '/scuola-calcio' },
  { label: 'News', path: '/news' },
  { label: 'Media', path: '/media' },
  { label: 'Tutela Minori', path: '/tutela-minori' }
];

export const firstTeams: Team[] = [
  {
    name: '1a Categoria',
    category: 'Prima Squadra',
    description:
      'Gruppo competitivo orientato a crescita tecnica, identita territoriale e continuita di risultati.',
    training: 'Martedi e giovedi 20:00 - 22:00 | Campo Barut',
    nextMatch: 'Domio vs Muggia 1967 - Domenica 15 marzo 2026, ore 15:30',
    modules: ['Rosa', 'Calendario', 'Risultati', 'Classifica']
  },
  {
    name: '3a Categoria',
    category: 'Nuova Sezione',
    description:
      'Percorso di valorizzazione per giovani senior e rientri agonistici, con forte attenzione alla formazione.',
    training: 'Lunedi e mercoledi 20:00 - 21:45 | Campo Barut',
    nextMatch: 'Domio 3a vs Primorje - Sabato 14 marzo 2026, ore 17:00',
    modules: ['Rosa', 'Calendario', 'Risultati', 'Classifica']
  }
];

export const youthTeams: Team[] = [
  {
    name: 'Juniores Regionali',
    category: 'Under 19',
    description: 'Transizione verso il calcio senior con metodologia condivisa con la prima squadra.',
    training: 'Lunedi, mercoledi, venerdi 18:30 - 20:00',
    nextMatch: 'Domio U19 vs Chiarbola - Sabato 14 marzo 2026, ore 15:00',
    modules: ['Rosa', 'Calendario', 'Risultati', 'Classifica']
  },
  {
    name: 'Allievi',
    category: 'Under 17/16',
    description: 'Sviluppo tecnico-tattico e preparazione atletica progressiva con monitoraggio individuale.',
    training: 'Martedi e giovedi 17:30 - 19:00',
    nextMatch: 'Domio U17 vs San Luigi - Domenica 15 marzo 2026, ore 11:00',
    modules: ['Rosa', 'Calendario', 'Risultati', 'Classifica']
  },
  {
    name: 'Giovanissimi',
    category: 'Under 15/14',
    description: 'Consolidamento dei fondamentali e crescita educativa in un ambiente inclusivo e sicuro.',
    training: 'Lunedi e mercoledi 17:00 - 18:30',
    nextMatch: 'Domio U15 vs Zarja - Sabato 14 marzo 2026, ore 16:00',
    modules: ['Rosa', 'Calendario', 'Risultati', 'Classifica']
  }
];

export const academyTeams: Team[] = [
  {
    name: 'Esordienti',
    category: 'Attivita di Base',
    description: 'Costruzione tecnica avanzata e introduzione graduale ai principi collettivi di gioco.',
    training: 'Martedi e venerdi 17:00 - 18:30',
    nextMatch: 'Concentramento FIGC - Domenica 22 marzo 2026',
    modules: ['Programma', 'Staff', 'Calendario']
  },
  {
    name: 'Pulcini',
    category: 'Attivita di Base',
    description: 'Metodo ludico-formativo centrato su tecnica di base, coordinazione e collaborazione.',
    training: 'Martedi e giovedi 16:45 - 18:00',
    nextMatch: 'Festival Scuola Calcio - Sabato 21 marzo 2026',
    modules: ['Programma', 'Staff', 'Calendario']
  },
  {
    name: 'Primi Calci',
    category: 'Attivita di Base',
    description: 'Primo contatto con il calcio in un contesto positivo, educativo e strutturato.',
    training: 'Lunedi e mercoledi 16:30 - 17:30',
    nextMatch: 'Attivita interna - Sabato 14 marzo 2026',
    modules: ['Programma', 'Staff', 'Iscrizioni']
  },
  {
    name: 'Piccoli Amici',
    category: 'Nuova Sezione',
    description: 'Percorso motorio e relazionale per i piu piccoli con attivita coinvolgenti e inclusive.',
    training: 'Sabato 10:00 - 11:00',
    nextMatch: 'Open Day Scuola Calcio - Sabato 28 marzo 2026',
    modules: ['Programma', 'Staff', 'Iscrizioni']
  }
];

export const agonisticTeams: Team[] = [
  ...firstTeams,
  ...youthTeams.filter((team) => team.name === 'Juniores Regionali' || team.name === 'Allievi')
];

export const nonAgonisticTeams: Team[] = [
  ...youthTeams.filter((team) => team.name === 'Giovanissimi'),
  ...academyTeams
];

export const newsHighlights: NewsItem[] = [
  {
    title: 'Nuova modulistica stagione sportiva 2025/2026',
    tag: 'Comunicati',
    date: '05 Marzo 2026',
    summary:
      'Disponibili online i documenti aggiornati per tesseramento, certificati medici e liberatorie.'
  },
  {
    title: 'Presentata ufficialmente la rosa della 3a Categoria',
    tag: 'Prime Squadre',
    date: '03 Marzo 2026',
    summary:
      'Avvio del nuovo progetto tecnico con staff dedicato e piano annuale di crescita.'
  },
  {
    title: 'Weekend settore giovanile: calendario e convocazioni',
    tag: 'Settore Giovanile',
    date: '02 Marzo 2026',
    summary:
      'Pubblicati gli impegni di Juniores, Allievi e Giovanissimi con aggiornamenti in tempo reale.'
  }
];

export const values = [
  {
    title: 'Crescita dei Giovani',
    text: 'Ogni atleta viene seguito con un percorso tecnico, educativo e umano coerente in tutte le categorie.'
  },
  {
    title: 'Identita Territoriale',
    text: 'Il Domio e un presidio sportivo per San Dorligo della Valle, aperto alle famiglie e alla comunita.'
  },
  {
    title: 'Cultura del Rispetto',
    text: 'Promuoviamo inclusione, tutela dei minori e responsabilita condivisa tra staff, atleti e genitori.'
  }
];

export const timeline = [
  {
    year: '1972',
    event: 'Costituzione del Circolo Sportivo DOMIO davanti al Notaio Giovanni Tomasi a Trieste.'
  },
  {
    year: '1976',
    event: 'Costruzione del primo campo sportivo grazie ai soci e al supporto di Radovic Stanislao.'
  },
  {
    year: '1985',
    event: 'Perdita del campo per la Grande Viabilita di Trieste e trasferimento temporaneo.'
  },
  {
    year: '1999-2000',
    event: 'Prima storica partecipazione al campionato di Promozione.'
  },
  {
    year: '2000-2001',
    event: 'Intitolazione ufficiale del campo a Marino Barut e dedicazione del bassorilievo.'
  }
];

export const historyFoundingDate =
  "22 maggio 1972, Trieste - costituzione del Circolo Sportivo DOMIO davanti all'Avv. Dott. Giovanni Tomasi, Notaio.";

export const historyFounders = [
  'Livio Nardin',
  'Luciano Hervatich',
  'Giordano Kral',
  'Rodolfo Cendak',
  'Gino (detto Marino) Barut',
  'Arduino Giacomini',
  'Olivio Bertesina',
  'Gino Bertesina',
  'Antonio Bersenda',
  'Giordano Bigotto',
  'Emilio Comari',
  'Claudio Stefani',
  'Ferruccio Mauro',
  'Sergio Martinotti',
  'Celestino Bersenda',
  'Dionisio Zocchi',
  'Vegliach Delio'
];

export const historyMilestones: HistoryMilestone[] = [
  {
    year: '1972-1973',
    title: 'Fondazione e primi campionati',
    text: "Nei primi anni il Circolo partecipa alla Terza Categoria. Gia nel 1973 nasce la prima squadra del settore giovanile, iscritta al campionato Allievi, e il vivaio inizia a crescere in modo significativo."
  },
  {
    year: '1976',
    title: 'Il primo campo del Domio',
    text: 'Con grandi sacrifici dei soci e con il supporto di Radovic Stanislao (Stanko), la societa costruisce il proprio campo sportivo.'
  },
  {
    year: '1985',
    title: 'La perdita del campo',
    text: "Il campo viene sacrificato per la costruzione della Grande Viabilita di Trieste. La societa non si ferma e si trasferisce temporaneamente sul campo comunale di San Dorligo della Valle."
  },
  {
    year: 'Anni successivi',
    title: 'Ricostruzione e rilancio',
    text: "Con tenacia, macchinari e operai messi a disposizione da Stanko e dalla ditta MOVITER, su terreni concessi dal Comune di San Dorligo e dall'Ente Zona Industriale, nasce l'attuale campo sportivo. Parallelamente viene ricostruito da zero un settore giovanile di alto livello, con il contributo concreto dell'amico Lando Strain."
  },
  {
    year: '1998-2000',
    title: 'Memoria e traguardi storici',
    text: "Nel 1998 la societa perde prematuramente il presidente e socio fondatore Marino Barut. Nel suo ricordo prosegue il progetto sportivo e nel 1999-2000 arriva, per la prima volta, la Promozione, insieme a inserimenti di giovani atleti in squadre professionistiche."
  },
  {
    year: '2000-2001',
    title: 'Intitolazioni e torneo internazionale',
    text: 'Il 20 aprile 2000 il campo viene ufficialmente intitolato a Marino Barut. Nello stesso periodo nasce il Torneo internazionale giovanile (prima edizione 21-22 aprile 2000). Il 7 aprile 2001 viene dedicato a Marino Barut anche il bassorilievo posto nella parte antistante il campo.'
  }
];

export const historyNotes = [
  'Il titolo del giornale locale all epoca della perdita del campo fu: "QUEL PASTICCIACCIO BRUTTO DEL CAMPO DOMIO".',
  'Il Circolo Sportivo DOMIO e stato affiliato anche alla Federazione ciclistica e alla Federazione bocciofila.'
];

export const sponsors: Sponsor[] = [
  {
    name: "Beck's Next",
    logo: '/sponsors/becks-next.webp',
    website: 'http://becks.de',
    tier: 'main',
    summary: 'Partner storico del Domio e presenza consolidata nelle attivita del club.'
  },
  {
    name: 'Proced srl',
    logo: '/sponsors/proced.webp',
    website: 'http://www.proced.it',
    tier: 'main',
    summary: "Supporto al progetto Domio con servizi e soluzioni per l'ufficio e la tecnologia."
  },
  {
    name: 'Korman Italia',
    logo: '/sponsors/korman-italia.webp',
    website: 'https://korman.it/',
    tier: 'main',
    summary: 'Logistica e spedizioni internazionali, partner vicino al territorio.'
  },
  {
    name: 'C.M.G. (Costruzioni Manutenzioni Generali)',
    logo: '/sponsors/cmg.webp',
    website: 'http://www.cmg-trieste.it/',
    tier: 'official',
    summary: 'Impresa tecnica locale con lunga esperienza in manutenzioni industriali.'
  },
  {
    name: 'Gelateria Jimmy',
    logo: '/sponsors/gelateria-jimmy.webp',
    website: 'https://www.domiocalcio.com/gelateria-jimmy.htm',
    tier: 'official',
    summary: 'Realta del territorio che sostiene la societa e gli eventi del vivaio.'
  },
  {
    name: 'ZKB - Zadruzna Kraska Banka',
    logo: '/sponsors/zkb.webp',
    website: 'http://www.zkb.it/it/banca/filiali/domio.html',
    tier: 'official',
    summary: 'Istituto radicato nella comunita locale e vicino al percorso sportivo del Domio.'
  },
  {
    name: 'Sara Clean & Wash',
    logo: '/sponsors/sara-clean-wash.webp',
    website: 'http://www.saracleanewash.com/',
    tier: 'official',
    summary: 'Forniture professionali e supporto continuo alle iniziative societarie.'
  },
  {
    name: 'City Sport',
    logo: '/sponsors/city-sport.webp',
    website: 'http://www.facebook.com/citysporttrieste/',
    tier: 'official',
    summary: 'Media partner dedicato alla visibilita dello sport locale e giovanile.'
  },
  {
    name: "Fiocco d'oro",
    logo: null,
    website: 'https://www.domiocalcio.com/fiocco-d-oro.htm',
    tier: 'community',
    summary: 'Sponsor della rete territoriale Domio, presente nella sezione ufficiale del club.'
  }
];

export const documents = [
  'Modulo iscrizione stagione 2025/2026',
  'Regolamento interno societario',
  'Informativa privacy e trattamento dati',
  'Linee guida tutela minori e safeguarding'
];

export const contacts = {
  address: 'Localita Mattonaia 610, San Dorligo della Valle (TS)',
  email: 'segreteria@domiocalcio.com',
  phone: '+39 040 000 0000',
  mapLabel: 'Campo Barut - Centro Sportivo Domio'
};
