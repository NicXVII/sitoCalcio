import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

const NotFoundPage = () => {
  usePageTitle('Pagina non trovata');

  return (
    <div className="surface-card rounded-2xl border border-field-100 p-10 text-center">
      <h1 className="font-display text-6xl uppercase tracking-wide text-field-900">404</h1>
      <p className="mt-3 text-field-800">La pagina richiesta non e disponibile.</p>
      <Link
        to="/"
        className="mt-6 inline-flex rounded-full bg-field-600 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-field-700"
      >
        Torna alla Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
