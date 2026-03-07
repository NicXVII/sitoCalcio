import SectionTitle from '../components/SectionTitle';
import TeamCard from '../components/TeamCard';
import { agonisticTeams, nonAgonisticTeams } from '../data/teamsData';
import { usePageTitle } from '../hooks/usePageTitle';

const TeamsPage = () => {
  usePageTitle('Squadre');

  return (
    <div className="space-y-12">
      <SectionTitle
        eyebrow="Le nostre squadre"
        title="Agonistica e settore giovanile"
        description="Tutte le formazioni del Domio: dal settore competitivo alle categorie di base, un percorso unico di crescita sportiva e umana."
      />

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="font-display text-3xl tracking-wide text-field-900 mobile-small:text-4xl">Settore agonistico</h2>
          <span className="rounded-full bg-field-800 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white mobile-small:text-xs">
            Competitivo
          </span>
        </div>
        <p className="max-w-2xl text-sm text-field-700">
          Le squadre che competono nei campionati FIGC/LND: Prima Categoria, Terza Categoria e le formazioni giovanili agonistiche.
        </p>

        <div className="grid gap-5 tablet-small:grid-cols-2">
          {agonisticTeams.map((team) => (
            <TeamCard key={team.name} team={team} variant="agonistico" />
          ))}
        </div>
      </section>

      <hr className="border-field-200" />

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="font-display text-3xl tracking-wide text-field-900 mobile-small:text-4xl">Settore non agonistico</h2>
          <span className="rounded-full border border-field-200 bg-field-50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-field-700 mobile-small:text-xs">
            Formazione
          </span>
        </div>
        <p className="max-w-2xl text-sm text-field-700">
          Attivita di base e percorsi formativi per i piu giovani: coordinazione, tecnica e divertimento in un ambiente educativo.
        </p>

        <div className="grid gap-5 tablet-small:grid-cols-2 desktop:grid-cols-3">
          {nonAgonisticTeams.map((team) => (
            <TeamCard key={team.name} team={team} variant="base" />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-field-200 bg-white p-6">
        <h3 className="font-display text-2xl tracking-wide text-field-900">Widget risultati e classifiche</h3>
        <p className="mt-3 text-sm text-field-700">
          Area predisposta per integrazione automatica FIGC/LND: risultati live, classifica aggiornata e prossimo
          turno.
        </p>
        <div className="mt-4 rounded-xl border border-dashed border-field-300 bg-field-50 p-5 text-sm text-field-600">
          Placeholder tecnico: integrare script/widget ufficiale FIGC per categoria.
        </div>
      </section>
    </div>
  );
};

export default TeamsPage;
