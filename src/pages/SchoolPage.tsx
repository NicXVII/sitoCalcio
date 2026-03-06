import SectionTitle from '../components/SectionTitle';
import TeamCard from '../components/TeamCard';
import { documents } from '../data/documentsData';
import { academyTeams } from '../data/teamsData';
import { usePageTitle } from '../hooks/usePageTitle';

const SchoolPage = () => {
  usePageTitle('Scuola Calcio');

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Scuola Calcio"
        title="Attivita di Base e Iscrizioni"
        description="Esordienti, Pulcini, Primi Calci e Piccoli Amici in un ambiente formativo, sicuro e motivante."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {academyTeams.map((team) => (
          <TeamCard key={team.name} team={team} />
        ))}
      </div>

      <section className="surface-card rounded-2xl border border-field-100 p-6">
        <h3 className="font-display text-3xl uppercase tracking-wide text-field-900">Modulistica 2025/2026</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {documents.map((doc) => (
            <li key={doc.label} className="rounded-xl border border-field-100 bg-field-50 px-4 py-3 text-sm text-field-800">
              <a href={doc.href} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 hover:text-field-600">
                <span>{doc.label}</span>
                <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-field-700">PDF ↓</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SchoolPage;
