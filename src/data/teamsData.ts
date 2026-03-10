import type { Team } from './types';

export const firstTeams: Team[] = [
  {
    name: '1a Categoria',
    category: 'Prima Squadra',
    description:
      'Gruppo competitivo orientato a crescita tecnica, identita territoriale e continuita di risultati.',
    training: 'Martedi e giovedi 20:00 - 22:00 | Campo Barut',
    modules: ['Rosa', 'Calendario', 'Classifica']
  },
  {
    name: '3a Categoria',
    category: 'Nuova Sezione',
    description:
      'Percorso di valorizzazione per giovani senior e rientri agonistici, con forte attenzione alla formazione.',
    training: 'Lunedi e mercoledi 20:00 - 21:45 | Campo Barut',
    modules: ['Rosa', 'Calendario', 'Classifica']
  }
];

export const youthTeams: Team[] = [
  {
    name: 'Juniores Regionali',
    category: 'Under 19',
    description: 'Transizione verso il calcio senior con metodologia condivisa con la prima squadra.',
    training: 'Lunedi, mercoledi, venerdi 18:30 - 20:00',
    modules: ['Rosa', 'Calendario', 'Classifica']
  },
  {
    name: 'Allievi',
    category: 'Under 17/16',
    description: 'Sviluppo tecnico-tattico e preparazione atletica progressiva con monitoraggio individuale.',
    training: 'Martedi e giovedi 17:30 - 19:00',
    modules: ['Rosa', 'Calendario', 'Classifica']
  },
  {
    name: 'Giovanissimi',
    category: 'Under 15/14',
    description: 'Consolidamento dei fondamentali e crescita educativa in un ambiente inclusivo e sicuro.',
    training: 'Lunedi e mercoledi 17:00 - 18:30',
    modules: ['Rosa', 'Calendario', 'Classifica']
  }
];

export const academyTeams: Team[] = [
  {
    name: 'Esordienti',
    category: 'Attivita di Base',
    description: 'Costruzione tecnica avanzata e introduzione graduale ai principi collettivi di gioco.',
    training: 'Martedi e venerdi 17:00 - 18:30',
    modules: ['Programma', 'Staff', 'Calendario']
  },
  {
    name: 'Pulcini',
    category: 'Attivita di Base',
    description: 'Metodo ludico-formativo centrato su tecnica di base, coordinazione e collaborazione.',
    training: 'Martedi e giovedi 16:45 - 18:00',
    modules: ['Programma', 'Staff', 'Calendario']
  },
  {
    name: 'Primi Calci',
    category: 'Attivita di Base',
    description: 'Primo contatto con il calcio in un contesto positivo, educativo e strutturato.',
    training: 'Lunedi e mercoledi 16:30 - 17:30',
    modules: ['Programma', 'Staff', 'Iscrizioni']
  },
  {
    name: 'Piccoli Amici',
    category: 'Nuova Sezione',
    description: 'Percorso motorio e relazionale per i piu piccoli con attivita coinvolgenti e inclusive.',
    training: 'Sabato 10:00 - 11:00',
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
