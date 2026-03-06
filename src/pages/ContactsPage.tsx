import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { documents } from '../data/documentsData';
import { contacts } from '../data/navigationData';
import { usePageTitle } from '../hooks/usePageTitle';

const ContactsPage = () => {
  usePageTitle('Contatti');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contatto dal sito - ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${contacts.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

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
            <p><a href={`mailto:${contacts.email}`} className="underline underline-offset-4 hover:text-field-600">{contacts.email}</a></p>
            <p><a href={`tel:${contacts.phone.replace(/\s/g, '')}`} className="underline underline-offset-4 hover:text-field-600">{contacts.phone}</a></p>
          </div>

          {submitted ? (
            <div className="mt-6 rounded-xl border border-field-200 bg-field-50 p-5 text-sm text-field-800">
              Il tuo client email si e aperto con il messaggio precompilato. Se non si e aperto, scrivi direttamente a{' '}
              <a href={`mailto:${contacts.email}`} className="font-semibold underline">{contacts.email}</a>.
            </div>
          ) : (
            <form className="mt-6 grid gap-3" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="contact-name" className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-field-700">Nome e Cognome</label>
                <input
                  id="contact-name"
                  className="surface-panel w-full rounded-xl border border-field-200 px-4 py-3 text-sm outline-none ring-field-400 transition placeholder:text-field-700/65 focus:ring"
                  placeholder="Mario Rossi"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-field-700">Email</label>
                <input
                  id="contact-email"
                  className="surface-panel w-full rounded-xl border border-field-200 px-4 py-3 text-sm outline-none ring-field-400 transition placeholder:text-field-700/65 focus:ring"
                  placeholder="mario@esempio.it"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-field-700">Messaggio</label>
                <textarea
                  id="contact-message"
                  className="surface-panel w-full min-h-32 rounded-xl border border-field-200 px-4 py-3 text-sm outline-none ring-field-400 transition placeholder:text-field-700/65 focus:ring"
                  placeholder="Scrivi il tuo messaggio..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-field-600 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-field-700"
              >
                Invia richiesta
              </button>
            </form>
          )}
        </article>

        <article className="surface-card rounded-2xl border border-field-100 p-6">
          <h3 className="font-display text-3xl uppercase tracking-wide text-field-900">Modulistica</h3>
          <ul className="mt-4 space-y-3 text-sm text-field-800">
            {documents.map((doc) => (
              <li key={doc.label} className="rounded-xl border border-field-100 bg-field-50 px-4 py-3">
                <a href={doc.href} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 hover:text-field-600">
                  <span>{doc.label}</span>
                  <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-field-700">PDF ↓</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 overflow-hidden rounded-xl border border-field-200">
            <p className="bg-field-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-field-700">{contacts.mapLabel}</p>
            <iframe
              title="Mappa Campo Barut - Centro Sportivo Domio"
              src="https://www.openstreetmap.org/export/embed.html?bbox=13.845%2C45.597%2C13.865%2C45.610&layer=mapnik&marker=45.6035%2C13.855"
              className="h-52 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </article>
      </section>
    </div>
  );
};

export default ContactsPage;
