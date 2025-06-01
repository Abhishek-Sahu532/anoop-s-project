import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Calculator, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const services = [
    {
      category: "Tax Services",
      items: [
        { name: "GST Registration & Returns", path: "/services/gst", description: "Complete GST solutions" },
        { name: "Income Tax Filing", path: "/services/income-tax", description: "Individual & business ITR" },
        { name: "Tax Planning & Advisory", path: "/services/tax-planning", description: "Strategic tax planning" },
        { name: "Tax Audit Services", path: "/services/tax-audit", description: "Statutory & internal audits" }
      ]
    },
    {
      category: "Business Registration",
      items: [
        { name: "Company Registration", path: "/services/company-registration", description: "Private Limited & Public" },
        { name: "Partnership Firm", path: "/services/partnership-firm", description: "Partnership registration" },
        { name: "LLP Registration", path: "/services/llp-registration", description: "Limited Liability Partnership" },
        { name: "ROC Filing Services", path: "/services/roc-filing", description: "Annual & event-based filings" }
      ]
    },
    {
      category: "Compliance & Legal",
      items: [
        { name: "PF & ESIC Services", path: "/services/pf-esic", description: "Employee benefits compliance" },
        { name: "Labour Department", path: "/services/labour-department", description: "Labour law compliance" },
        { name: "Compliance Services", path: "/services/compliance", description: "Annual compliance management" },
        { name: "Statutory Audit", path: "/services/statutory-audit", description: "Professional audit services" }
      ]
    }
  ];

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Due Dates", path: "/due-dates" },
    { name: "Our Team", path: "/team" },
    { name: "Contact", path: "/contact" }
  ];

  const isActivePath = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-neutral-200' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-xl">
                    <Calculator className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-secondary-900">
                    SM Accounting Solution
                  </span>
                  <span className="text-xs text-secondary-600 font-medium">
                    Your Trusted Tax & Business Partner
                  </span>
                </div>
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.hasDropdown ? (
                      <span className={`flex items-center cursor-pointer font-medium transition-colors duration-200 ${
                        isActivePath(item.path) 
                          ? 'text-primary-600' 
                          : 'text-secondary-700 hover:text-primary-600'
                      }`}>
                        {item.name}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </span>
                    ) : (
                      <Link
                        to={item.path}
                        className={`flex items-center font-medium transition-colors duration-200 ${
                          isActivePath(item.path) 
                            ? 'text-primary-600' 
                            : 'text-secondary-700 hover:text-primary-600'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                  
                  {/* Services Mega Dropdown */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-50"
                        style={{ transform: 'translateX(-50%)' }}
                      >
                        <div className="p-8">
                          <div className="grid grid-cols-3 gap-8">
                            {services.map((service, idx) => (
                              <div key={idx} className="space-y-4">
                                <h4 className="font-bold text-secondary-900 text-lg border-b border-neutral-200 pb-2">
                                  {service.category}
                                </h4>
                                <ul className="space-y-3">
                                  {service.items.map((serviceItem, serviceIdx) => (
                                    <li key={serviceIdx}>
                                      <Link
                                        to={serviceItem.path}
                                        className="block text-secondary-600 hover:text-primary-600 transition-colors duration-200 group"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        <div className="font-medium text-sm group-hover:text-primary-600 mb-1">
                                          {serviceItem.name}
                                        </div>
                                        <div className="text-xs text-secondary-500 group-hover:text-primary-500">
                                          {serviceItem.description}
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between">
                            <div>
                              <h5 className="font-semibold text-secondary-900 mb-1">Need help choosing?</h5>
                              <p className="text-sm text-secondary-600">Speak with our experts to find the right service for your needs.</p>
                            </div>
                            <div className="flex space-x-3">
                              <Link
                                to="/services"
                                className="bg-primary-50 text-primary-700 px-4 py-2 rounded-lg hover:bg-primary-100 transition-colors font-medium text-sm"
                                onClick={() => setActiveDropdown(null)}
                              >
                                View All Services
                              </Link>
                              <Link
                                to="/contact"
                                className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors font-medium text-sm"
                                onClick={() => setActiveDropdown(null)}
                              >
                                Get Consultation
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
            
            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="hidden md:block bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:from-primary-600 hover:to-primary-800 transition-all duration-300"
                >
                  Get Quote
                </Link>
              </motion.div>
              
              <button 
                className="lg:hidden text-secondary-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col pt-20 px-4 pb-6">
              {/* Mobile Navigation Items */}
              {navigationItems.filter(item => !item.hasDropdown).map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`block py-4 text-lg font-medium transition-colors border-b border-neutral-200 ${
                      isActivePath(item.path) 
                        ? 'text-primary-600' 
                        : 'text-secondary-700 hover:text-primary-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Services Section */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="py-4 border-b border-neutral-200"
              >
                <h3 className="text-lg font-medium text-secondary-900 mb-4">Our Services</h3>
                {services.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-6">
                    <h4 className="font-semibold text-secondary-800 mb-3 text-base">
                      {category.category}
                    </h4>
                    <div className="space-y-2 ml-4">
                      {category.items.map((serviceItem, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          to={serviceItem.path}
                          className="block text-secondary-600 hover:text-primary-600 transition-colors py-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="font-medium text-sm">{serviceItem.name}</div>
                          <div className="text-xs text-secondary-500">{serviceItem.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
              
              {/* Mobile CTA */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 space-y-3"
              >
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-4 rounded-xl font-semibold text-center shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/services"
                  className="block w-full border-2 border-primary-300 text-primary-700 px-6 py-4 rounded-xl font-semibold text-center hover:bg-primary-50 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View All Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;