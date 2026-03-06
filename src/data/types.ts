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

export type ValueItem = {
  title: string;
  text: string;
};

export type HistoryMilestone = {
  year: string;
  title: string;
  text: string;
};

export type TimelineItem = {
  year: string;
  event: string;
};

export type Sponsor = {
  name: string;
  logo: string | null;
  website: string | null;
  tier: 'main' | 'official' | 'community';
  summary: string;
};

export type ContactInfo = {
  address: string;
  email: string;
  phone: string;
  mapLabel: string;
};

export type Document = {
  label: string;
  href: string;
};
