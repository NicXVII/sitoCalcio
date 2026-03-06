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
      {/* Hero */}
      <SectionTitle
        eyebrow="La Societa"
        title="Storia, Struttura, Visione"
        description="Dal 1972 il Domio Calcio e una storia di persone, sacrifici e continuita sportiva al servizio della comunita di San Dorligo della Valle."
      />

      {/* Organigramma + Contatti + Timeline - subito in evidenza */}
      <section className="grid gap-5 tablet-small:grid-cols-2">
        <article className="surface-card rounded-2xl border border-field-100 p-5 mobile-small:p-6">
          <h3 className="font-display text-3xl uppercase tracking-wide text-field-900">Direttivo e Staff</h3>
          <div className="mt-5 space-y-3 text-sm text-field-800">
            <p><strong>Presidente:</strong> Marco Rossi</p>
            <p><strong>Direttore Sportivo:</strong> Andrea Bianchi</p>
            <p><strong>Responsabile Settore Giovanile:</strong> Luca Fabbri</p>
            <p><strong>Responsabile Scuola Calcio:</strong> Elisa Verdi</p>
            <p><strong>Responsabile Safeguarding:</strong> Dott.ssa Sara Gentili</p>
            <p><strong>Segreteria:</strong> lun-ven 17:00 - 19:30</p>
          </div>
        </article>

        <article className="surface-card rounded-2xl border border-field-100 p-5 mobile-small:p-6">
          <h3 className="font-display text-3xl uppercase tracking-wide text-field-900">Timeline</h3>
          <ol className="mt-5 space-y-3">
            {timeline.map((item) => (
              <li key={item.year} className="rounded-xl border border-field-100 bg-field-50 p-3 mobile-small:p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-field-700">{item.year}</p>
                <p className="mt-1 text-sm text-field-800">{item.event}</p>
              </li>
            ))}
          </ol>
        </article>
      </section>

      {/* Campo Barut */}
      <section className="surface-card rounded-2xl border border-field-100 p-5 mobile-small:p-6">
        <h3 className="font-display text-3xl uppercase tracking-wide text-field-900">Campo Barut</h3>
        <p className="mt-3 text-field-800">
          Localita Mattonaia 610, San Dorligo della Valle (TS). Centro operativo per prime squadre, settore
          giovanile e attivita di base.
        </p>
        <div className="mt-4 rounded-xl bg-field-50 p-4 text-sm text-field-700">
          Strutture: campo principale, area allenamento tecnico, spogliatoi rinnovati e spazio accoglienza famiglie.
        </div>
      </section>

      {/* --- STORIA APPROFONDITA --- */}
      <section className="-mx-3 rounded-3xl bg-gradient-to-br from-field-800 via-field-900 to-field-900 px-5 py-10 text-center mobile-small:-mx-4 mobile-small:px-6 mobile:px-7 sm:-mx-6 sm:px-10 tablet-large:-mx-8 tablet-large:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-field-300">Approfondimento</p>
        <h2 className="mt-2 font-display text-4xl uppercase tracking-wide text-white mobile-small:text-5xl">La Nostra Storia</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-field-200/80">
          Memoria, territorio, tenacia: dal 1972 il Domio Calcio e una storia di persone, sacrifici e continuita sportiva.
        </p>
      </section>

      {/* Atto Costitutivo - numeri chiave */}
      <section className="surface-card space-y-5 rounded-3xl border border-field-100 p-5 mobile-small:p-6 tablet-small:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-field-700">Atto Costitutivo</p>
        <p className="text-base text-field-800">{historyFoundingDate}</p>

        <div className="grid gap-3 mobile:grid-cols-2 tablet-small:grid-cols-3">
          <article className="rounded-2xl border border-field-200 bg-white/70 p-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-700">Soci Fondatori</p>
            <p className="mt-2 font-display text-4xl uppercase text-field-900">17</p>
          </article>
          <article className="rounded-2xl border border-field-200 bg-white/70 p-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-700">Anno Fondazione</p>
            <p className="mt-2 font-display text-4xl uppercase text-field-900">1972</p>
          </article>
          <article className="rounded-2xl border border-field-200 bg-white/70 p-4 mobile:col-span-2 tablet-small:col-span-1">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-700">Identita</p>
            <p className="mt-2 text-sm text-field-800">Una societa radicata a San Dorligo della Valle e costruita dal lavoro dei soci.</p>
          </article>
        </div>
      </section>

      {/* I 17 Soci Fondatori */}
      <section className="surface-card rounded-3xl border border-field-100 p-5 mobile-small:p-6 tablet-small:p-8">
        <h3 className="font-display text-3xl uppercase tracking-wide text-field-900 mobile-small:text-4xl">I 17 Soci Fondatori</h3>
        <ul className="mt-5 grid gap-2 mobile:grid-cols-2 tablet-small:grid-cols-3">
          {historyFounders.map((founder, index) => (
            <li key={founder} className="rounded-xl border border-field-200 bg-white/70 px-3 py-2 text-sm text-field-800">
              <span className="mr-2 inline-flex w-5 justify-center text-field-700">{index + 1}.</span>
              {founder}
            </li>
          ))}
        </ul>
      </section>

      {/* Cronologia Essenziale */}
      <section className="space-y-5">
        <h3 className="font-display text-4xl uppercase tracking-wide text-field-900 mobile-small:text-5xl">Cronologia Essenziale</h3>
        <ol className="relative grid gap-4">
          {historyMilestones.map((milestone) => (
            <li key={`${milestone.year}-${milestone.title}`} className="surface-card rounded-2xl border border-field-100 p-5 mobile-small:p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-field-300 bg-field-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-field-800">
                  {milestone.year}
                </span>
                <h4 className="font-display text-2xl uppercase tracking-wide text-field-900 mobile-small:text-3xl">{milestone.title}</h4>
              </div>
              <p className="mt-3 text-sm text-field-800 mobile-small:text-base">{milestone.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Note storiche */}
      <section className="grid gap-4 tablet-small:grid-cols-2">
        <article className="surface-card rounded-2xl border border-field-100 p-5 mobile-small:p-6">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-700">Memoria Storica</p>
          <p className="mt-3 text-sm text-field-800">{historyNotes[0]}</p>
        </article>
        <article className="surface-card rounded-2xl border border-field-100 p-5 mobile-small:p-6">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-700">Plurisportivita</p>
          <p className="mt-3 text-sm text-field-800">{historyNotes[1]}</p>
        </article>
      </section>
    </div>
  );
};

export default SocietyPage;
