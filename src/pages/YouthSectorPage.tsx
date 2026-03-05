import SectionTitle from '../components/SectionTitle';
import TeamCard from '../components/TeamCard';
import { usePageTitle } from '../hooks/usePageTitle';
import { youthTeams } from '../data/siteData';

const YouthSectorPage = () => {
  usePageTitle('Settore Giovanile');

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Settore Giovanile"
        title="Juniores, Allievi, Giovanissimi"
        description="Percorso progressivo con metodologia unica, monitoraggio tecnico e attenzione educativa."
      />

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {youthTeams.map((team) => (
          <TeamCard key={team.name} team={team} />
        ))}
      </div>

      <section className="surface-card rounded-2xl border border-field-100 p-6">
        <h3 className="font-display text-3xl uppercase tracking-wide text-field-900">Piano Tecnico Annuale</h3>
        <p className="mt-3 text-field-800">
          Programmazione divisa per macro-cicli, con obiettivi tecnico-tattici e valutazioni periodiche condivise con
          famiglie e atleti.
        </p>
      </section>
    </div>
  );
};

export default YouthSectorPage;
