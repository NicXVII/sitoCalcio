import SectionTitle from '../components/SectionTitle';
import { agonisticTeams, nonAgonisticTeams } from '../data/teamsData';
import { usePageTitle } from '../hooks/usePageTitle';

type ResultCardProps = {
  category: 'agonistico' | 'non-agonistico';
  name: string;
  categoryLabel: string;
  training: string;
  nextMatch: string;
  modules: string[];
};

const ResultCard = ({
  category,
  name,
  categoryLabel,
  training,
  nextMatch,
  modules
}: ResultCardProps) => {
  const toneClass =
    category === 'agonistico'
      ? 'border-field-300 bg-gradient-to-br from-field-100/80 via-white/90 to-field-50/70'
      : 'border-field-200 bg-gradient-to-br from-field-50/90 via-white/90 to-field-100/60';

  const badgeClass =
    category === 'agonistico'
      ? 'border border-field-300 bg-field-200/60 text-field-800'
      : 'border border-field-200 bg-field-100/80 text-field-700';

  return (
    <article className={`surface-panel rounded-2xl border p-4 transition duration-300 hover:-translate-y-1 mobile-small:p-5 ${toneClass}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-700">{categoryLabel}</p>
          <h3 className="mt-1 font-display text-2xl uppercase tracking-wide text-field-900 mobile-small:text-3xl">{name}</h3>
        </div>
        <span className={`rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] ${badgeClass}`}>
          {category === 'agonistico' ? 'Campionato' : 'Formazione'}
        </span>
      </div>

      <div className="mt-4 space-y-2 text-sm text-field-800">
        <p className="rounded-xl border border-field-200/70 bg-white/60 px-3 py-2">
          <strong className="text-field-900">Prossimo evento:</strong> {nextMatch}
        </p>
        <p>
          <strong className="text-field-900">Allenamenti:</strong> {training}
        </p>
      </div>

      <ul className="mt-4 flex flex-wrap gap-2">
        {modules.map((module) => (
          <li key={module} className="rounded-full border border-field-200 bg-white/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-field-800">
            {module}
          </li>
        ))}
      </ul>
    </article>
  );
};

const ResultsPage = () => {
  usePageTitle('Risultati');

  const totalTeams = agonisticTeams.length + nonAgonisticTeams.length;
  const totalMatchWidgets = agonisticTeams.length;

  return (
    <div className="space-y-10 mobile:space-y-12">
      <SectionTitle
        eyebrow="Risultati"
        title="Centro Risultati Domio"
        description="Dashboard unica per risultati, prossimi eventi e categorie: separazione chiara tra agonistico e non agonistico."
      />

      <section className="surface-card overflow-hidden rounded-3xl border border-field-100">
        <div className="grid gap-4 border-b border-field-100 bg-gradient-to-r from-field-100/70 via-field-50/90 to-white/90 p-4 mobile-small:p-5 tablet-small:grid-cols-3">
          <article className="rounded-2xl border border-field-200 bg-white/70 p-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-700">Squadre Totali</p>
            <p className="mt-2 font-display text-4xl uppercase text-field-900">{totalTeams}</p>
          </article>
          <article className="rounded-2xl border border-field-200 bg-white/70 p-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-700">Sezioni Agonistiche</p>
            <p className="mt-2 font-display text-4xl uppercase text-field-900">{agonisticTeams.length}</p>
          </article>
          <article className="rounded-2xl border border-field-200 bg-white/70 p-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-700">Widget Classifica</p>
            <p className="mt-2 font-display text-4xl uppercase text-field-900">{totalMatchWidgets}</p>
          </article>
        </div>

        <div className="grid gap-4 p-4 mobile-small:p-5 tablet-small:grid-cols-2 desktop:grid-cols-4">
          {[...agonisticTeams, ...nonAgonisticTeams].slice(0, 4).map((team) => (
            <article key={team.name} className="surface-panel rounded-2xl border border-field-200 p-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-700">Prossimo appuntamento</p>
              <p className="mt-2 text-sm font-semibold text-field-900">{team.name}</p>
              <p className="mt-1 text-sm text-field-800">{team.nextMatch}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-4xl uppercase tracking-wide text-field-900 mobile-small:text-5xl">Agonistico</h3>
          <span className="rounded-full border border-field-300 bg-field-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-field-800">
            Dagli Allievi in su
          </span>
        </div>

        <div className="grid gap-4 tablet-small:grid-cols-2 desktop:grid-cols-3">
          {agonisticTeams.map((team) => (
            <ResultCard
              key={team.name}
              category="agonistico"
              name={team.name}
              categoryLabel={team.category}
              training={team.training}
              nextMatch={team.nextMatch}
              modules={team.modules}
            />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-4xl uppercase tracking-wide text-field-900 mobile-small:text-5xl">Non Agonistico</h3>
          <span className="rounded-full border border-field-200 bg-field-50/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-field-700">
            Pre-Allievi
          </span>
        </div>

        <div className="grid gap-4 tablet-small:grid-cols-2 desktop:grid-cols-3">
          {nonAgonisticTeams.map((team) => (
            <ResultCard
              key={team.name}
              category="non-agonistico"
              name={team.name}
              categoryLabel={team.category}
              training={team.training}
              nextMatch={team.nextMatch}
              modules={team.modules}
            />
          ))}
        </div>
      </section>

      <section className="surface-card rounded-2xl border border-field-100 p-6 text-sm text-field-800">
        Area tecnica pronta per integrazione automatica FIGC-LND: risultati live, classifiche e prossimo turno per
        il blocco agonistico; calendario attivita per il non agonistico.
      </section>
    </div>
  );
};

export default ResultsPage;
