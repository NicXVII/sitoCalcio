import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './layout/SiteLayout';
import ContactsPage from './pages/ContactsPage';
import FirstTeamsPage from './pages/FirstTeamsPage';
import HomePage from './pages/HomePage';
import MediaPage from './pages/MediaPage';
import NewsPage from './pages/NewsPage';
import NotFoundPage from './pages/NotFoundPage';
import ResultsPage from './pages/ResultsPage';
import SafeguardingPage from './pages/SafeguardingPage';
import SchoolPage from './pages/SchoolPage';
import SocietyPage from './pages/SocietyPage';
import SponsorsPage from './pages/SponsorsPage';
import HistoryPage from './pages/HistoryPage';
import YouthSectorPage from './pages/YouthSectorPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/societa" element={<SocietyPage />} />
          <Route path="/storia" element={<HistoryPage />} />
          <Route path="/risultati" element={<ResultsPage />} />
          <Route path="/prime-squadre" element={<FirstTeamsPage />} />
          <Route path="/settore-giovanile" element={<YouthSectorPage />} />
          <Route path="/scuola-calcio" element={<SchoolPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/sponsor" element={<SponsorsPage />} />
          <Route path="/contatti" element={<ContactsPage />} />
          <Route path="/tutela-minori" element={<SafeguardingPage />} />
          <Route path="/la-societa/tutela-minori" element={<Navigate replace to="/tutela-minori" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
