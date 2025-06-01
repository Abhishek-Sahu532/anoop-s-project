import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import DueDates from './pages/DueDates';
import Team from './pages/Team';
import Contact from './pages/Contact';
import GSTServices from './pages/services/GSTServices';
import IncomeTaxServices from './pages/services/IncomeTaxServices';
import CompanyRegistration from './pages/services/CompanyRegistration';
import ComplianceServices from './pages/services/ComplianceServices';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-700 z-50 origin-left"
          style={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Header */}
        <Header />

        {/* Scroll to top on route change */}
        <ScrollToTop />

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/gst" element={<GSTServices />} />
            <Route path="/services/income-tax" element={<IncomeTaxServices />} />
            <Route path="/services/company-registration" element={<CompanyRegistration />} />
            <Route path="/services/compliance" element={<ComplianceServices />} />
            <Route path="/due-dates" element={<DueDates />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <motion.button
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-40 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </Router>
  );
}

export default App;