import SectionTitle from '../components/SectionTitle';
import { documents } from '../data/documentsData';
import { contacts } from '../data/navigationData';
import { usePageTitle } from '../hooks/usePageTitle';

const ContactsPage = () => {
  usePageTitle('Contatti');

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Contatti"
        title="Come Raggiungerci"
        description="Segreteria, campo e modulistica in una pagina unica e chiara per famiglie, atleti e partner."
      />

      <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="surface-card rounded-2xl border border-field-100 p-6">
          <h3 className="font-display text-3xl uppercase tracking-wide text-field-900">Contatta la Societa</h3>
          <div className="mt-4 space-y-2 text-sm text-field-800">
            <p>{contacts.address}</p>
            <p>{contacts.email}</p>
            <p>{contacts.phone}</p>
          </div>

          <form className="mt-6 grid gap-3">
            <input
              className="surface-panel rounded-xl border border-field-200 px-4 py-3 text-sm outline-none ring-field-400 transition placeholder:text-field-700/65 focus:ring"
              placeholder="Nome e Cognome"
              type="text"
            />
            <input
              className="surface-panel rounded-xl border border-field-200 px-4 py-3 text-sm outline-none ring-field-400 transition placeholder:text-field-700/65 focus:ring"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="surface-panel min-h-32 rounded-xl border border-field-200 px-4 py-3 text-sm outline-none ring-field-400 transition placeholder:text-field-700/65 focus:ring"
              placeholder="Messaggio"
            />
            <button
              type="button"
              className="rounded-full bg-field-600 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-field-700"
            >
              Invia richiesta
            </button>
          </form>
        </article>

        <article className="surface-card rounded-2xl border border-field-100 p-6">
          <h3 className="font-display text-3xl uppercase tracking-wide text-field-900">Modulistica</h3>
          <ul className="mt-4 space-y-3 text-sm text-field-800">
            {documents.map((document) => (
              <li key={document} className="rounded-xl border border-field-100 bg-field-50 px-4 py-3">
                {document}
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl border border-field-200 bg-field-50 p-4 text-sm text-field-700">
            Mappa: {contacts.mapLabel}. Integrare qui iframe Google Maps o OpenStreetMap.
          </div>
        </article>
      </section>
    </div>
  );
};

export default ContactsPage;
