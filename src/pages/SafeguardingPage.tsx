import SectionTitle from '../components/SectionTitle';
import { usePageTitle } from '../hooks/usePageTitle';

const SafeguardingPage = () => {
  usePageTitle('Tutela Minori');

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Tutela Minori"
        title="Safeguarding e Protezione Atleti"
        description="Sezione obbligatoria con policy, referenti e procedure per garantire un ambiente sicuro e rispettoso."
      />

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="surface-card rounded-2xl border border-field-100 p-6">
          <h3 className="font-display text-3xl uppercase tracking-wide text-field-900">Referenti Safeguarding</h3>
          <ul className="mt-4 space-y-3 text-sm text-field-800">
            <li>
              <strong>Responsabile Safeguarding:</strong> Dott.ssa Sara Gentili
            </li>
            <li>
              <strong>Email dedicata:</strong> safeguarding@domiocalcio.com
            </li>
            <li>
              <strong>Sportello ascolto:</strong> Martedi 18:00 - 19:00
            </li>
          </ul>
        </article>

        <article className="surface-card rounded-2xl border border-field-100 p-6">
          <h3 className="font-display text-3xl uppercase tracking-wide text-field-900">Procedura Segnalazioni</h3>
          <ol className="mt-4 space-y-3 text-sm text-field-800">
            <li className="rounded-xl border border-field-100 bg-field-50 px-4 py-3">1. Invio segnalazione via email riservata.</li>
            <li className="rounded-xl border border-field-100 bg-field-50 px-4 py-3">2. Presa in carico entro 48 ore.</li>
            <li className="rounded-xl border border-field-100 bg-field-50 px-4 py-3">3. Valutazione secondo policy federali e societarie.</li>
            <li className="rounded-xl border border-field-100 bg-field-50 px-4 py-3">4. Comunicazione esito e misure di tutela.</li>
          </ol>
        </article>
      </section>

      <section className="rounded-2xl border border-field-100 bg-field-50 p-6 text-sm text-field-800">
        Documenti disponibili: policy tutela minori, codice etico, linee guida comportamentali per staff, atleti e
        genitori.
      </section>
    </div>
  );
};

export default SafeguardingPage;
