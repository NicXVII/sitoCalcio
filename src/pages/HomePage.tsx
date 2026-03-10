import { Link } from 'react-router-dom';
import ClubLogo from '../components/ClubLogo';
import SectionTitle from '../components/SectionTitle';
import { newsHighlights, values } from '../data/newsData';
import { usePageTitle } from '../hooks/usePageTitle';

const HomePage = () => {
  usePageTitle('Home');

  return (
    <div className="space-y-10 mobile:space-y-12 sm:space-y-14">
      {/* Hero — dark, immersive, athletic */}
      <section className="relative -mx-3 -mt-6 overflow-hidden bg-field-900 mobile-small:-mx-4 mobile-small:-mt-8 mobile:-mx-5 sm:-mx-6 sm:-mt-10 tablet-large:-mx-8 desktop:-mt-12">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAwdjYwTTAgMzBoNjAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2cpIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiLz48L3N2Zz4=')] opacity-60" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-field-900/40 via-transparent to-field-900" aria-hidden="true" />
        {/* Accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-field-500 via-field-400 to-field-500" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-3 pb-10 pt-10 mobile-small:px-4 mobile-small:pb-12 mobile-small:pt-12 mobile:px-5 sm:px-6 sm:pb-16 sm:pt-14 tablet-large:px-8 tablet-large:pb-20 tablet-large:pt-16 ultrawide:max-w-[1536px]">
          <div className="grid gap-8 tablet-large:grid-cols-[1.3fr_0.7fr] tablet-large:items-center">
            <div className="space-y-5 mobile:space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-field-300">
                <span className="h-2 w-2 rounded-full bg-field-400 animate-pulse" aria-hidden="true"></span>
                Stagione 2025/2026
              </p>
              <h1 className="font-display text-4xl leading-[0.95] tracking-wide text-white mobile:text-5xl sm:text-6xl tablet-large:text-7xl">
                A.S.D. Domio Calcio
              </h1>
              <p className="max-w-xl text-base text-field-200/85 mobile-small:text-lg">
                Sport, educazione e comunita dal 1972. Il cuore sportivo di San Dorligo della Valle.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/squadre"
                  className="rounded-full bg-field-500 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-field-500/25 transition hover:bg-field-400"
                >
                  Le nostre squadre
                </Link>
                <Link
                  to="/contatti"
                  className="rounded-full border border-white/20 bg-white/8 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white/15"
                >
                  Iscrizioni 2025/2026
                </Link>
              </div>
            </div>

            {/* Match card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-field-400">Prossima gara</p>
              <div className="mt-4 flex items-center justify-center gap-4 mobile-small:gap-5">
                <div className="text-center">
                  <ClubLogo
                    alt="Logo Domio"
                    loading="eager"
                    fetchPriority="low"
                    className="mx-auto h-14 w-14 rounded-xl border border-white/15 bg-white p-1.5 object-contain mobile-small:h-16 mobile-small:w-16"
                  />
                  <p className="mt-2 font-display text-lg uppercase tracking-wide text-white mobile-small:text-xl">Domio</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="rounded-lg bg-field-500/20 px-3 py-1.5 font-display text-lg text-field-300">VS</span>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-white/15 bg-white/10 mobile-small:h-16 mobile-small:w-16">
                    <span className="text-2xl font-bold text-white/60">M</span>
                  </div>
                  <p className="mt-2 font-display text-lg uppercase tracking-wide text-white mobile-small:text-xl">Muggia</p>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-field-300/80">Dom. 15 marzo · ore 15:30 · Campo Barut</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick-access strip */}
      <section className="grid grid-cols-2 gap-3 tablet-small:grid-cols-4">
        <Link to="/risultati" className="group rounded-2xl border border-field-200 bg-white p-4 transition hover:border-field-300 hover:shadow-md">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-field-600">Ultimo risultato</p>
          <p className="mt-1 font-display text-xl text-field-900 group-hover:text-field-700">Domio 2 – 1</p>
          <p className="text-sm text-field-600">Muggia 1967</p>
        </Link>
        <Link to="/risultati" className="group rounded-2xl border border-field-200 bg-white p-4 transition hover:border-field-300 hover:shadow-md">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-field-600">Classifica</p>
          <p className="mt-1 font-display text-xl text-field-900 group-hover:text-field-700">3a Categoria</p>
          <p className="text-sm text-field-600">Girone A</p>
        </Link>
        <Link to="/squadre" className="group rounded-2xl border border-field-200 bg-white p-4 transition hover:border-field-300 hover:shadow-md">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-field-600">Squadre attive</p>
          <p className="mt-1 font-display text-xl text-field-900 group-hover:text-field-700">9 formazioni</p>
          <p className="text-sm text-field-600">Agonistico e base</p>
        </Link>
        <Link to="/contatti" className="group rounded-2xl border border-field-200 bg-white p-4 transition hover:border-field-300 hover:shadow-md">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-field-600">Iscrizioni aperte</p>
          <p className="mt-1 font-display text-xl text-field-900 group-hover:text-field-700">2025/2026</p>
          <p className="text-sm text-field-600">Tutte le categorie</p>
        </Link>
      </section>

      {/* Story card */}
      <section className="rounded-3xl border border-field-200 bg-white p-5 mobile-small:p-6 tablet-small:p-8">
        <div className="grid gap-5 tablet-small:grid-cols-[1.2fr_0.8fr] tablet-small:items-center">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-600">La nostra storia</p>
            <h2 className="mt-2 font-display text-3xl tracking-wide text-field-900 mobile-small:text-4xl">
              Dal 22 maggio 1972, una comunita in movimento
            </h2>
            <p className="mt-3 text-sm text-field-700 mobile-small:text-base">
              Dall'atto costitutivo davanti al Notaio Giovanni Tomasi, passando per la costruzione e la perdita del
              primo campo, fino all'intitolazione a Marino Barut: la storia del Domio e il cuore del club.
            </p>
          </div>
          <div className="rounded-2xl border border-field-100 bg-field-50/60 p-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-600">Focus storico</p>
            <p className="mt-2 text-sm text-field-700">
              I 17 soci fondatori, il supporto di Stanko e MOVITER, la Promozione 1999-2000 e il Torneo internazionale
              giovanile.
            </p>
            <Link
              to="/societa"
              className="mt-4 inline-flex rounded-full bg-field-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-field-700"
            >
              Leggi la storia completa
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="space-y-6">
        <SectionTitle
          eyebrow="Valori"
          title="Sport, educazione, comunita"
          description="Il Domio cresce con una visione chiara: competitivita in campo e responsabilita educativa fuori dal campo."
        />

        <div className="grid gap-4 tablet-small:grid-cols-2 desktop:grid-cols-3">
          {values.map((value, index) => (
            <article key={value.title} className="relative overflow-hidden rounded-2xl border border-field-200 bg-white p-4 pl-5 mobile-small:p-6 mobile-small:pl-7">
              <div className={`absolute left-0 top-0 h-full w-1 ${index === 0 ? 'bg-field-500' : index === 1 ? 'bg-field-600' : 'bg-field-700'}`} aria-hidden="true" />
              <h3 className="font-display text-xl tracking-wide text-field-900 mobile-small:text-2xl">{value.title}</h3>
              <p className="mt-3 text-sm text-field-700">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* News */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <SectionTitle
            eyebrow="News"
            title="In evidenza"
            description="Comunicazioni e aggiornamenti dal club."
          />
          <Link to="/news" className="rounded-full border border-field-500 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-field-700 transition hover:bg-white">
            Tutte le news →
          </Link>
        </div>

        <div className="grid gap-4 tablet-small:grid-cols-2 desktop:grid-cols-3">
          {newsHighlights.map((news) => (
            <article key={news.title} className="rounded-2xl border border-field-200 bg-white p-4 mobile-small:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-field-800 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white">
                  {news.tag}
                </span>
                <span className="text-xs text-field-600">{news.date}</span>
              </div>
              <h3 className="mt-3 font-display text-xl tracking-wide text-field-900 mobile-small:text-2xl">{news.title}</h3>
              <p className="mt-2 text-sm text-field-700">{news.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
