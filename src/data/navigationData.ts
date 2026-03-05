import type { ContactInfo, NavItem } from './types';

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

export const contacts: ContactInfo = {
  address: 'Localita Mattonaia 610, San Dorligo della Valle (TS)',
  email: 'segreteria@domiocalcio.com',
  phone: '+39 040 000 0000',
  mapLabel: 'Campo Barut - Centro Sportivo Domio'
};
