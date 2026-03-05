import SectionTitle from '../components/SectionTitle';
import TeamCard from '../components/TeamCard';
import { firstTeams } from '../data/siteData';
import { usePageTitle } from '../hooks/usePageTitle';

const FirstTeamsPage = () => {
  usePageTitle('Prime Squadre');

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Prime Squadre"
        title="1a Categoria e 3a Categoria"
        description="Una struttura completa con rose, calendario, risultati e classifica per entrambe le squadre senior."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {firstTeams.map((team) => (
          <TeamCard key={team.name} team={team} />
        ))}
      </div>

      <section className="surface-card rounded-2xl border border-field-100 p-6">
        <h3 className="font-display text-3xl uppercase tracking-wide text-field-900">Widget Risultati e Classifiche</h3>
        <p className="mt-3 text-field-800">
          Area predisposta per integrazione automatica FIGC/LND: risultati live, classifica aggiornata e prossimo
          turno.
        </p>
        <div className="mt-4 rounded-xl border border-dashed border-field-300 bg-field-50 p-5 text-sm text-field-700">
          Placeholder tecnico: integrare script/widget ufficiale FIGC per categoria.
        </div>
      </section>
    </div>
  );
};

export default FirstTeamsPage;
