import SectionTitle from '../components/SectionTitle';
import {
  historyFounders,
  historyFoundingDate,
  historyMilestones,
  historyNotes,
  timeline,
} from '../data/historyData';
import { usePageTitle } from '../hooks/usePageTitle';

const SocietyPage = () => {
  usePageTitle('La Societa');

  return (
    <div className="space-y-14">
      <SectionTitle
        eyebrow="La societa"
        title="Storia, struttura, visione"
        description="Dal 1972 il Domio Calcio e una storia di persone, sacrifici e continuita sportiva al servizio della comunita di San Dorligo della Valle."
      />

      {/* Organigramma + Timeline */}
      <section className="grid gap-5 tablet-small:grid-cols-2">
        <article className="rounded-2xl border border-field-200 bg-white p-5 mobile-small:p-6">
          <h3 className="font-display text-2xl tracking-wide text-field-900">Dirigenza</h3>
          <ul className="mt-5 space-y-2">
            <li className="rounded-xl border border-field-100 bg-field-50/40 p-3 mobile-small:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-field-600">Presidente</p>
              <p className="mt-1 text-sm text-field-700">Organo direttivo</p>
            </li>
            <li className="rounded-xl border border-field-100 bg-field-50/40 p-3 mobile-small:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-field-600">Segretario</p>
              <p className="mt-1 text-sm text-field-700">Gestione amministrativa</p>
            </li>
          </ul>
        </article>
        <article className="rounded-2xl border border-field-200 bg-white p-5 mobile-small:p-6">
          <h3 className="font-display text-2xl tracking-wide text-field-900">Timeline</h3>
          <ol className="mt-5 space-y-3">
            {timeline.map((item) => (
              <li key={item.year} className="rounded-xl border border-field-100 bg-field-50/40 p-3 mobile-small:p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-field-600">{item.year}</p>
                <p className="mt-1 text-sm text-field-700">{item.event}</p>
              </li>
            ))}
          </ol>
        </article>
      </section>

      {/* Campo Barut */}
      <section className="rounded-2xl border border-field-200 bg-white p-5 mobile-small:p-6">
        <h3 className="font-display text-2xl tracking-wide text-field-900">Campo Barut</h3>
        <p className="mt-3 text-field-700">
          Localita Mattonaia 610, San Dorligo della Valle (TS). Centro operativo per prime squadre, settore
          giovanile e attivita di base.
        </p>
        <div className="mt-4 rounded-xl bg-field-50/60 p-4 text-sm text-field-600">
          Strutture: campo principale, area allenamento tecnico, spogliatoi rinnovati e spazio accoglienza famiglie.
        </div>
      </section>

      {/* --- STORIA APPROFONDITA --- */}
      <section className="-mx-3 rounded-3xl bg-field-700 px-5 py-10 text-center mobile-small:-mx-4 mobile-small:px-6 mobile:px-7 sm:-mx-6 sm:px-10 tablet-large:-mx-8 tablet-large:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-field-300">Approfondimento</p>
        <h2 className="mt-2 font-display text-4xl tracking-wide text-white mobile-small:text-5xl">La nostra storia</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-field-100">
          Memoria, territorio, tenacia: dal 1972 il Domio Calcio e una storia di persone, sacrifici e continuita sportiva.
        </p>
      </section>

      {/* Atto Costitutivo */}
      <section className="space-y-5 rounded-3xl border border-field-200 bg-white p-5 mobile-small:p-6 tablet-small:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-field-600">Atto costitutivo</p>
        <p className="text-base text-field-700">{historyFoundingDate}</p>

        <div className="grid gap-3 mobile:grid-cols-2 tablet-small:grid-cols-3">
          <article className="rounded-2xl border border-field-200 bg-field-50/40 p-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-600">Soci fondatori</p>
            <p className="mt-2 font-display text-4xl text-field-900">17</p>
          </article>
          <article className="rounded-2xl border border-field-200 bg-field-50/40 p-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-600">Anno fondazione</p>
            <p className="mt-2 font-display text-4xl text-field-900">1972</p>
          </article>
          <article className="rounded-2xl border border-field-200 bg-field-50/40 p-4 mobile:col-span-2 tablet-small:col-span-1">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-600">Identita</p>
            <p className="mt-2 text-sm text-field-700">Una societa radicata a San Dorligo della Valle e costruita dal lavoro dei soci.</p>
          </article>
        </div>
      </section>

      {/* I 17 Soci Fondatori */}
      <section className="rounded-3xl border border-field-200 bg-white p-5 mobile-small:p-6 tablet-small:p-8">
        <h3 className="font-display text-3xl tracking-wide text-field-900 mobile-small:text-4xl">I 17 soci fondatori</h3>
        <ul className="mt-5 grid gap-2 mobile:grid-cols-2 tablet-small:grid-cols-3">
          {historyFounders.map((founder, index) => (
            <li key={founder} className="rounded-xl border border-field-200 bg-field-50/40 px-3 py-2 text-sm text-field-700">
              <span className="mr-2 inline-flex w-5 justify-center text-field-600">{index + 1}.</span>
              {founder}
            </li>
          ))}
        </ul>
      </section>

      {/* Cronologia Essenziale */}
      <section className="space-y-5">
        <h3 className="font-display text-3xl tracking-wide text-field-900 mobile-small:text-4xl">Cronologia essenziale</h3>
        <ol className="relative grid gap-4">
          {historyMilestones.map((milestone) => (
            <li key={`${milestone.year}-${milestone.title}`} className="rounded-2xl border border-field-200 bg-white p-5 mobile-small:p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-field-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  {milestone.year}
                </span>
                <h4 className="font-display text-xl tracking-wide text-field-900 mobile-small:text-2xl">{milestone.title}</h4>
              </div>
              <p className="mt-3 text-sm text-field-700 mobile-small:text-base">{milestone.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Note storiche */}
      <section className="grid gap-4 tablet-small:grid-cols-2">
        <article className="rounded-2xl border border-field-200 bg-white p-5 mobile-small:p-6">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-600">Memoria storica</p>
          <p className="mt-3 text-sm text-field-700">{historyNotes[0]}</p>
        </article>
        <article className="rounded-2xl border border-field-200 bg-white p-5 mobile-small:p-6">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-600">Plurisportivita</p>
          <p className="mt-3 text-sm text-field-700">{historyNotes[1]}</p>
        </article>
      </section>
    </div>
  );
};

export default SocietyPage;
