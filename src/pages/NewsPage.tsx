import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { newsHighlights } from '../data/newsData';
import { usePageTitle } from '../hooks/usePageTitle';

const categories = ['Tutti', 'Prime Squadre', 'Settore Giovanile', 'Comunicati'];

const tagColorMap: Record<string, string> = {
  'Prime Squadre': 'bg-field-800 text-white',
  'Settore Giovanile': 'bg-field-500 text-white',
  'Comunicati': 'bg-field-600 text-white',
};

const premiumZoomTags = ['Comunicati', 'Prime Squadre', 'Settore Giovanile'];

const NewsPage = () => {
  usePageTitle('News');
  const [activeTag, setActiveTag] = useState('Tutti');

  const filteredNews = activeTag === 'Tutti'
    ? newsHighlights
    : newsHighlights.filter((n) => n.tag === activeTag);

  const featured = filteredNews[0];
  const rest = filteredNews.slice(1);

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="News"
        title="Comunicati, risultati, eventi"
        description="News recenti in primo piano. Filtra per categoria per trovare cio che ti interessa."
      />

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveTag(cat)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
              activeTag === cat
                ? 'bg-field-800 text-white'
                : 'border border-field-200 bg-white text-field-700 hover:bg-field-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {featured ? (
        <>
          {/* Featured article */}
          <article
            className={`overflow-hidden rounded-3xl border border-field-200 bg-field-700 p-5 transition duration-300 mobile-small:p-6 tablet-small:p-8 ${
              premiumZoomTags.includes(featured.tag)
                ? 'transform-gpu hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-2xl hover:shadow-field-900/35'
                : 'hover:shadow-lg'
            }`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] ${tagColorMap[featured.tag] ?? 'bg-field-600 text-white'}`}>
                {featured.tag}
              </span>
              <span className="text-xs text-field-300">{featured.date}</span>
            </div>
            <h3 className="mt-4 font-display text-2xl tracking-wide text-white mobile-small:text-3xl tablet-small:text-4xl">{featured.title}</h3>
            <p className="mt-3 max-w-3xl text-base text-field-100">{featured.summary}</p>
          </article>

          {/* Rest of news */}
          {rest.length > 0 && (
            <div className="grid gap-4 tablet-small:grid-cols-2 desktop:grid-cols-3">
              {rest.map((news) => (
                <article
                  key={news.title}
                  className="rounded-2xl border border-field-200 bg-white p-4 transition duration-300 hover:shadow-md mobile-small:p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] ${tagColorMap[news.tag] ?? 'bg-field-600 text-white'}`}>
                      {news.tag}
                    </span>
                    <span className="text-xs text-field-600">{news.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl tracking-wide text-field-900 mobile-small:text-2xl">{news.title}</h3>
                  <p className="mt-2 text-sm text-field-700">{news.summary}</p>
                </article>
              ))}
            </div>
          )}
        </>
      ) : (
        <p className="text-sm text-field-600">Nessuna news per questa categoria.</p>
      )}

      <section className="rounded-2xl border border-field-400 bg-white p-6">
        <h3 className="font-display text-2xl tracking-wide text-field-900">Archivio storico</h3>
        <p className="mt-2 text-sm text-field-700">
          Le notizie pre-2025 sono mantenute in archivio consultabile, senza occupare lo spazio editoriale principale.
        </p>
      </section>
    </div>
  );
};

export default NewsPage;
