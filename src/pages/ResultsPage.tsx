import SectionTitle from '../components/SectionTitle';
import { agonisticTeams, nonAgonisticTeams } from '../data/teamsData';
import { usePageTitle } from '../hooks/usePageTitle';

const ResultsPage = () => {
  usePageTitle('Risultati');

  return (
    <div className="space-y-10 mobile:space-y-12">
      <SectionTitle
        eyebrow="Risultati"
        title="Centro risultati"
        description="Ultimo risultato, prossime gare e classifiche per tutte le categorie del Domio."
      />

      {/* Scoreboard hero */}
      <section className="overflow-hidden rounded-3xl bg-field-900">
        <div className="grid gap-px tablet-small:grid-cols-2">
          {/* Last result */}
          <div className="p-5 mobile-small:p-6 tablet-small:p-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-field-400">Ultimo risultato · 3a Categoria</p>
            <div className="mt-5 flex items-center justify-center gap-4 mobile-small:gap-6">
              <div className="text-center">
                <p className="font-display text-2xl tracking-wide text-white mobile-small:text-3xl">Domio</p>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 mobile-small:px-5">
                <span className="font-display text-3xl text-white mobile-small:text-4xl">2</span>
                <span className="text-lg text-field-400">–</span>
                <span className="font-display text-3xl text-white mobile-small:text-4xl">1</span>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl tracking-wide text-white mobile-small:text-3xl">Muggia</p>
              </div>
            </div>
            <p className="mt-3 text-center text-sm text-field-400">Dom. 8 marzo 2026 · Campo Barut</p>
          </div>

          {/* Next match */}
          <div className="border-t border-white/10 p-5 mobile-small:p-6 tablet-small:border-l tablet-small:border-t-0 tablet-small:p-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-field-400">Prossima gara · 3a Categoria</p>
            <div className="mt-5 flex items-center justify-center gap-4 mobile-small:gap-6">
              <div className="text-center">
                <p className="font-display text-2xl tracking-wide text-white mobile-small:text-3xl">Domio</p>
              </div>
              <div className="rounded-lg bg-field-500/20 px-3 py-1.5 font-display text-lg text-field-300">VS</div>
              <div className="text-center">
                <p className="font-display text-2xl tracking-wide text-white mobile-small:text-3xl">Muggia 1967</p>
              </div>
            </div>
            <p className="mt-3 text-center text-sm text-field-400">Dom. 15 marzo · ore 15:30 · Campo Barut</p>
          </div>
        </div>
      </section>

      {/* Quick fixtures */}
      <section className="grid gap-3 tablet-small:grid-cols-2 desktop:grid-cols-4">
        {[...agonisticTeams, ...nonAgonisticTeams].slice(0, 4).map((team) => (
          <article key={team.name} className="rounded-2xl border border-field-200 bg-white p-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-field-600">Prossimo</p>
            <p className="mt-1 font-display text-lg text-field-900">{team.name}</p>
            <p className="mt-1 text-sm text-field-600">{team.nextMatch}</p>
          </article>
        ))}
      </section>

      {/* Agonistico */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-3xl tracking-wide text-field-900 mobile-small:text-4xl">Agonistico</h3>
          <span className="rounded-full bg-field-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
            Dagli Allievi in su
          </span>
        </div>

        <div className="grid gap-4 tablet-small:grid-cols-2 desktop:grid-cols-3">
          {agonisticTeams.map((team) => (
            <article key={team.name} className="rounded-2xl border border-field-300 bg-white p-4 mobile-small:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-600">{team.category}</p>
                  <h4 className="mt-1 font-display text-xl tracking-wide text-field-900 mobile-small:text-2xl">{team.name}</h4>
                </div>
                <span className="rounded-full bg-field-800 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white">
                  Campionato
                </span>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <p className="rounded-xl border border-field-100 bg-field-50/60 px-3 py-2 text-field-700">
                  <span className="font-semibold text-field-800">Prossimo:</span> {team.nextMatch}
                </p>
                <p className="text-field-600"><span className="font-semibold text-field-700">Allenamenti:</span> {team.training}</p>
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {team.modules.map((m) => (
                  <li key={m} className="rounded-full border border-field-200 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-field-600">{m}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Non Agonistico */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-3xl tracking-wide text-field-900 mobile-small:text-4xl">Non agonistico</h3>
          <span className="rounded-full border border-field-200 bg-field-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-field-700">
            Settore di base
          </span>
        </div>

        <div className="grid gap-4 tablet-small:grid-cols-2 desktop:grid-cols-3">
          {nonAgonisticTeams.map((team) => (
            <article key={team.name} className="rounded-2xl border border-field-200 bg-white p-4 mobile-small:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-600">{team.category}</p>
                  <h4 className="mt-1 font-display text-xl tracking-wide text-field-900 mobile-small:text-2xl">{team.name}</h4>
                </div>
                <span className="rounded-full border border-field-200 bg-field-50 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-field-600">
                  Formazione
                </span>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <p className="rounded-xl border border-field-100 bg-field-50/40 px-3 py-2 text-field-700">
                  <span className="font-semibold text-field-800">Prossimo:</span> {team.nextMatch}
                </p>
                <p className="text-field-600"><span className="font-semibold text-field-700">Allenamenti:</span> {team.training}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Integration notice */}
      <section className="rounded-2xl border border-field-200 bg-white p-5 text-sm text-field-700">
        <p className="font-semibold text-field-800">Integrazione FIGC-LND</p>
        <p className="mt-1">Area predisposta per risultati live, classifiche e prossimo turno automatici per il settore agonistico; calendario attivita per il non agonistico.</p>
      </section>
    </div>
  );
};

export default ResultsPage;
