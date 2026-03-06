import type { ContactInfo, NavItem } from './types';

export const mainNavItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'La Societa', path: '/societa' },
  { label: 'Squadre', path: '/prime-squadre' },
  { label: 'Settore Giovanile', path: '/settore-giovanile' },
  { label: 'Risultati', path: '/risultati' },
  { label: 'News', path: '/news' },
  { label: 'Contatti', path: '/contatti' }
];

export const extraNavItems: NavItem[] = [
  { label: 'La Nostra Storia', path: '/storia' },
  { label: 'Scuola Calcio', path: '/scuola-calcio' },
  { label: 'Media', path: '/media' },
  { label: 'Sponsor', path: '/sponsor' },
  { label: 'Tutela Minori', path: '/tutela-minori' }
];

export const contacts: ContactInfo = {
  address: 'Localita Mattonaia 610, San Dorligo della Valle (TS)',
  email: 'segreteria@domiocalcio.com',
  phone: '+39 040 000 0000',
  mapLabel: 'Campo Barut - Centro Sportivo Domio'
};
