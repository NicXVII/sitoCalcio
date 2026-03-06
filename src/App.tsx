import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './layout/SiteLayout';

const HomePage = lazy(() => import('./pages/HomePage'));
const SocietyPage = lazy(() => import('./pages/SocietyPage'));
const HistoryPage = lazy(() => import('./pages/HistoryPage'));
const ResultsPage = lazy(() => import('./pages/ResultsPage'));
const TeamsPage = lazy(() => import('./pages/TeamsPage'));
const SchoolPage = lazy(() => import('./pages/SchoolPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const SponsorsPage = lazy(() => import('./pages/SponsorsPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const SafeguardingPage = lazy(() => import('./pages/SafeguardingPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const RouteFallback = () => (
  <div className="surface-card rounded-2xl border border-field-100 p-5 text-sm text-field-800">
    Caricamento pagina...
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/societa" element={<SocietyPage />} />
            <Route path="/storia" element={<HistoryPage />} />
            <Route path="/risultati" element={<ResultsPage />} />
            <Route path="/squadre" element={<TeamsPage />} />
            <Route path="/prime-squadre" element={<Navigate replace to="/squadre" />} />
            <Route path="/settore-giovanile" element={<Navigate replace to="/squadre" />} />
            <Route path="/media" element={<Navigate replace to="/" />} />
            <Route path="/scuola-calcio" element={<SchoolPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/sponsor" element={<SponsorsPage />} />
            <Route path="/contatti" element={<ContactsPage />} />
            <Route path="/tutela-minori" element={<SafeguardingPage />} />
            <Route path="/la-societa/tutela-minori" element={<Navigate replace to="/tutela-minori" />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
