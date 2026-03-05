import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { timeline } from '../data/historyData';
import { usePageTitle } from '../hooks/usePageTitle';

const SocietyPage = () => {
  usePageTitle('La Societa');

  return (
    <div className="space-y-12">
      <SectionTitle
        eyebrow="La Societa"
        title="Storia, Struttura, Visione"
        description="Una struttura organizzata, trasparente e orientata alla crescita sportiva e umana di ogni atleta."
      />

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="surface-card rounded-2xl border border-field-100 p-6">
          <h3 className="font-display text-3xl uppercase tracking-wide text-field-900">Timeline Storica</h3>
          <ol className="mt-5 space-y-4">
            {timeline.map((item) => (
              <li key={item.year} className="rounded-xl border border-field-100 bg-field-50 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-field-700">{item.year}</p>
                <p className="text-sm text-field-800">{item.event}</p>
              </li>
            ))}
          </ol>
          <Link
            to="/storia"
            className="mt-5 inline-flex rounded-full bg-field-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-field-700"
          >
            Vai alla storia completa
          </Link>
        </article>

        <article className="surface-card rounded-2xl border border-field-100 p-6">
          <h3 className="font-display text-3xl uppercase tracking-wide text-field-900">Direttivo e Staff</h3>
          <div className="mt-5 space-y-3 text-sm text-field-800">
            <p>
              <strong>Presidente:</strong> Marco Rossi
            </p>
            <p>
              <strong>Direttore Sportivo:</strong> Andrea Bianchi
            </p>
            <p>
              <strong>Responsabile Settore Giovanile:</strong> Luca Fabbri
            </p>
            <p>
              <strong>Responsabile Scuola Calcio:</strong> Elisa Verdi
            </p>
            <p>
              <strong>Segreteria:</strong> lun-ven 17:00 - 19:30
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-field-200 bg-field-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-field-700">Tutela Minori</p>
            <p className="mt-2 text-sm text-field-800">
              Sezione obbligatoria con policy safeguarding, referenti e procedura di segnalazione.
            </p>
            <Link
              to="/tutela-minori"
              className="mt-3 inline-flex rounded-full bg-field-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-field-700"
            >
              Apri sezione dedicata
            </Link>
          </div>
        </article>
      </section>

      <section className="surface-card rounded-2xl border border-field-100 p-6">
        <h3 className="font-display text-3xl uppercase tracking-wide text-field-900">Campo Barut</h3>
        <p className="mt-3 text-field-800">
          Localita Mattonaia 610, San Dorligo della Valle (TS). Centro operativo per prime squadre, settore
          giovanile e attivita di base.
        </p>
        <div className="mt-5 rounded-xl bg-field-50 p-4 text-sm text-field-700">
          Strutture: campo principale, area allenamento tecnico, spogliatoi rinnovati e spazio accoglienza famiglie.
        </div>
      </section>
    </div>
  );
};

export default SocietyPage;
