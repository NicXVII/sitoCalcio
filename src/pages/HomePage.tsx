import { Link } from 'react-router-dom';
import ClubLogo from '../components/ClubLogo';
import SectionTitle from '../components/SectionTitle';
import { newsHighlights, values } from '../data/newsData';
import { usePageTitle } from '../hooks/usePageTitle';

const HomePage = () => {
  usePageTitle('Home');

  return (
    <div className="space-y-10 mobile:space-y-12 sm:space-y-14">
      <section className="surface-card relative overflow-hidden rounded-3xl border border-field-100 p-4 mobile-small:p-6 mobile:p-7 sm:p-10 tablet-large:p-12">
        <div className="absolute -left-24 -top-20 h-64 w-64 rounded-full bg-field-200/50 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-field-400/30 blur-3xl" aria-hidden="true" />

        <div className="relative grid gap-6 mobile:gap-7 tablet-large:grid-cols-[1.2fr_0.8fr] tablet-large:items-end">
          <div className="space-y-5 mobile:space-y-6">
            <p className="inline-flex rounded-full border border-field-200 bg-field-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-field-700">
              Stagione 2025/2026
            </p>
            <h1 className="font-display text-4xl uppercase leading-[0.95] tracking-wide text-field-900 mobile:text-5xl sm:text-6xl tablet-large:text-7xl">
              Il Nuovo Domio Calcio
            </h1>
            <p className="max-w-2xl text-base text-field-800 mobile-small:text-lg">
              Un sito moderno, veloce e orientato alle famiglie: piu chiarezza, piu risultati aggiornati, piu
              spazio alla crescita dei nostri atleti.
            </p>
            <div className="grid gap-3 mobile:flex mobile:flex-wrap">
              <Link
                to="/prime-squadre"
                className="rounded-full bg-field-600 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-field-700"
              >
                Scopri le Squadre
              </Link>
              <Link
                to="/contatti"
                className="rounded-full border border-field-300 bg-white px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-field-900 transition hover:border-field-500"
              >
                Iscrizioni 2025/2026
              </Link>
            </div>
          </div>

          <div className="grid gap-4 rounded-2xl border border-field-100 bg-field-50/70 p-4 mobile-small:p-5">
            <div className="surface-panel flex items-center gap-3 rounded-xl border p-3 mobile-small:p-4">
              <ClubLogo
                alt="Logo Domio Calcio"
                loading="eager"
                fetchPriority="low"
                className="h-14 w-14 rounded-xl border border-field-200 bg-white p-1 object-contain"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-field-700">Identita Domio</p>
                <p className="font-display text-2xl uppercase tracking-wide text-field-900">Una Societa, Un Territorio</p>
              </div>
            </div>
            <div className="surface-panel rounded-xl border p-3 mobile-small:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-field-700">Prossima Gara</p>
              <p className="mt-2 font-display text-2xl uppercase text-field-900 mobile-small:text-3xl">Domio vs Muggia 1967</p>
              <p className="text-sm text-field-700">Domenica 15 marzo 2026, ore 15:30</p>
            </div>
            <div className="surface-panel rounded-xl border p-3 mobile-small:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-field-700">Novita</p>
              <p className="mt-2 text-sm text-field-800">
                Attiva la nuova sezione dedicata a tutela minori e safeguarding con referenti ufficiali societari.
              </p>
              <Link to="/societa" className="mt-3 inline-block text-sm font-semibold text-field-700 underline">
                Vai alla sezione societa
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-card rounded-3xl border border-field-100 p-5 mobile-small:p-6 tablet-small:p-8">
        <div className="grid gap-5 tablet-small:grid-cols-[1.2fr_0.8fr] tablet-small:items-center">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-700">La Nostra Storia</p>
            <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-field-900 mobile-small:text-4xl">
              Dal 22 Maggio 1972 Una Comunita in Movimento
            </h2>
            <p className="mt-3 text-sm text-field-800 mobile-small:text-base">
              Dall atto costitutivo davanti al Notaio Giovanni Tomasi, passando per la costruzione e la perdita del
              primo campo, fino all intitolazione a Marino Barut: la storia del Domio e il cuore del club.
            </p>
          </div>

          <div className="rounded-2xl border border-field-200 bg-field-50/80 p-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-700">Focus Storico</p>
            <p className="mt-2 text-sm text-field-800">
              I 17 soci fondatori, il supporto di Stanko e MOVITER, la Promozione 1999-2000 e il Torneo internazionale
              giovanile.
            </p>
            <Link
              to="/storia"
              className="mt-4 inline-flex rounded-full bg-field-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-field-700"
            >
              Leggi la storia completa
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow="Valori"
          title="Sport, Educazione, Comunita"
          description="Il Domio cresce con una visione chiara: competitivita in campo e responsabilita educativa fuori dal campo."
        />

        <div className="grid gap-4 tablet-small:grid-cols-2 desktop:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="surface-card rounded-2xl border border-field-100 p-4 mobile-small:p-6">
              <h3 className="font-display text-2xl uppercase tracking-wide text-field-900 mobile-small:text-3xl">{value.title}</h3>
              <p className="mt-3 text-field-800">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow="News"
          title="In Evidenza"
          description="Solo contenuti attuali e utili: stop a notizie obsolete, spazio a comunicazioni aggiornate."
        />

        <div className="grid gap-4 tablet-small:grid-cols-2 desktop:grid-cols-3">
          {newsHighlights.map((news) => (
            <article key={news.title} className="surface-card rounded-2xl border border-field-100 p-4 mobile-small:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-field-700">
                {news.tag} | {news.date}
              </p>
              <h3 className="mt-3 font-display text-2xl uppercase tracking-wide text-field-900 mobile-small:text-3xl">{news.title}</h3>
              <p className="mt-3 text-sm text-field-800">{news.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
