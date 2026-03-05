import type { Team } from './types';

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
