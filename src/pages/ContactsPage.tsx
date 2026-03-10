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
        title="Come raggiungerci"
        description="Segreteria, campo e modulistica in una pagina unica per famiglie, atleti e partner."
      />

      {/* Map — full-width, prominent */}
      <section className="overflow-hidden rounded-2xl border border-field-200">
        <div className="bg-field-700 px-4 py-3">
          <p className="text-sm font-semibold text-white">{contacts.mapLabel}</p>
          <p className="text-xs text-field-200">{contacts.address}</p>
        </div>
        <iframe
          title="Mappa Campo Barut - Centro Sportivo Domio"
          src="https://www.openstreetmap.org/export/embed.html?bbox=13.845%2C45.597%2C13.865%2C45.610&layer=mapnik&marker=45.6035%2C13.855"
          className="h-64 w-full border-0 mobile-small:h-72 tablet-small:h-80"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </section>

      {/* Contact info + quick actions */}
      <section className="grid gap-4 tablet-small:grid-cols-3">
        <a href={`mailto:${contacts.email}`} className="group rounded-2xl border border-field-200 bg-white p-5 transition hover:border-field-300 hover:shadow-md">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-field-600">Email</p>
          <p className="mt-2 text-sm font-semibold text-field-900 group-hover:text-field-700">{contacts.email}</p>
        </a>
        <a href={`tel:${contacts.phone.replace(/\s/g, '')}`} className="group rounded-2xl border border-field-200 bg-white p-5 transition hover:border-field-300 hover:shadow-md">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-field-600">Telefono</p>
          <p className="mt-2 text-sm font-semibold text-field-900 group-hover:text-field-700">{contacts.phone}</p>
        </a>
        <a href={`https://wa.me/${contacts.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="group rounded-2xl border border-field-200 bg-white p-5 transition hover:border-green-400 hover:shadow-md">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-field-600">WhatsApp</p>
          <p className="mt-2 text-sm font-semibold text-field-900 group-hover:text-green-700">Scrivici su WhatsApp →</p>
        </a>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Contact form */}
        <article className="rounded-2xl border border-field-200 bg-white p-6">
          <h3 className="font-display text-2xl tracking-wide text-field-900">Contatta la societa</h3>

          {submitted ? (
            <div className="mt-6 rounded-xl border border-field-200 bg-field-50 p-5 text-sm text-field-700">
              Il tuo client email si e aperto con il messaggio precompilato. Se non si e aperto, scrivi direttamente a{' '}
              <a href={`mailto:${contacts.email}`} className="font-semibold underline">{contacts.email}</a>.
            </div>
          ) : (
            <form className="mt-6 grid gap-3" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="contact-name" className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-field-600">Nome e cognome</label>
                <input
                  id="contact-name"
                  className="w-full rounded-xl border border-field-200 bg-field-50/40 px-4 py-3 text-sm outline-none ring-field-400 transition placeholder:text-field-500 focus:ring"
                  placeholder="Mario Rossi"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-field-600">Email</label>
                <input
                  id="contact-email"
                  className="w-full rounded-xl border border-field-200 bg-field-50/40 px-4 py-3 text-sm outline-none ring-field-400 transition placeholder:text-field-500 focus:ring"
                  placeholder="mario@esempio.it"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-field-600">Messaggio</label>
                <textarea
                  id="contact-message"
                  className="w-full min-h-32 rounded-xl border border-field-200 bg-field-50/40 px-4 py-3 text-sm outline-none ring-field-400 transition placeholder:text-field-500 focus:ring"
                  placeholder="Scrivi il tuo messaggio..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-field-800 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-field-700"
              >
                Invia richiesta
              </button>
            </form>
          )}
        </article>

        {/* Documents */}
        <article className="rounded-2xl border border-field-200 bg-white p-6">
          <h3 className="font-display text-2xl tracking-wide text-field-900">Modulistica</h3>
          <ul className="mt-4 space-y-3">
            {documents.map((doc) => (
              <li key={doc.label}>
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-xl border border-field-200 bg-field-50/40 px-4 py-3 text-sm transition hover:border-field-300 hover:bg-field-50"
                >
                  <span className="text-field-800 group-hover:text-field-900">{doc.label}</span>
                  <span className="shrink-0 rounded-full bg-field-800 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-white">
                    PDF ↓
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
};

export default ContactsPage;
