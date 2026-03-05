import SectionTitle from '../components/SectionTitle';
import { usePageTitle } from '../hooks/usePageTitle';

const mediaBlocks = [
  'Allenamento Prima Squadra',
  'Match Day Settore Giovanile',
  'Open Day Scuola Calcio',
  'Storia e Archivio Fotografico',
  'Eventi con Sponsor',
  'Dietro le Quinte'
];

const MediaPage = () => {
  usePageTitle('Media');

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Media"
        title="Foto Gallery e Video"
        description="Contenuti organizzati per categorie per raccontare stagione, risultati e vita societaria."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {mediaBlocks.map((block) => (
          <article
            key={block}
            className="relative overflow-hidden surface-card rounded-2xl border border-field-100 p-6"
          >
            <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-3xl bg-field-200/60" aria-hidden="true" />
            <h3 className="relative font-display text-3xl uppercase tracking-wide text-field-900">{block}</h3>
            <p className="relative mt-3 text-sm text-field-800">
              Sezione pronta per media aggiornati, caricamento ottimizzato e fruizione mobile-first.
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MediaPage;
