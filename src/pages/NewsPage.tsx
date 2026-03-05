import SectionTitle from '../components/SectionTitle';
import { newsHighlights } from '../data/siteData';
import { usePageTitle } from '../hooks/usePageTitle';

const NewsPage = () => {
  usePageTitle('News');

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="News"
        title="Comunicati, Risultati, Eventi"
        description="Struttura editoriale pulita: news recenti in primo piano, archivio separato per stagioni precedenti."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {newsHighlights.map((news) => (
          <article key={news.title} className="surface-card rounded-2xl border border-field-100 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-field-700">
              {news.tag} | {news.date}
            </p>
            <h3 className="mt-3 font-display text-3xl uppercase tracking-wide text-field-900">{news.title}</h3>
            <p className="mt-3 text-sm text-field-800">{news.summary}</p>
          </article>
        ))}
      </div>

      <section className="rounded-2xl border border-field-100 bg-field-50 p-6">
        <h3 className="font-display text-3xl uppercase tracking-wide text-field-900">Archivio Storico</h3>
        <p className="mt-2 text-sm text-field-800">
          Le notizie pre-2025 sono mantenute in archivio consultabile, senza occupare lo spazio editoriale principale.
        </p>
      </section>
    </div>
  );
};

export default NewsPage;
