import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GamePage from './pages/GamePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import CookieBanner from './components/CookieBanner';
import './index.css';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content-wrapper">
          <Routes>
            <Route path="/" element={<GamePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/articles" element={<BlogPage />} />
            <Route path="/articles/:id" element={<ArticlePage />} />
          </Routes>
          <Footer />
        </div>
        <CookieBanner />
      </div>
    </Router>
  );
}
