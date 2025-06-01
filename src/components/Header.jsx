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
        { name: "GST Registration & Returns", path: "/services/gst" },
        { name: "Income Tax Filing", path: "/services/income-tax" },
        { name: "Tax Planning & Advisory", path: "/services/income-tax" },
        { name: "Tax Audit Services", path: "/services/income-tax" }
      ]
    },
    {
      category: "Business Services", 
      items: [
        { name: "Company Registration", path: "/services/company-registration" },
        { name: "Partnership Firm", path: "/services/company-registration" },
        { name: "LLP Registration", path: "/services/company-registration" },
        { name: "ROC Filing", path: "/services/company-registration" }
      ]
    },
    {
      category: "Compliance",
      items: [
        { name: "PF & ESIC Services", path: "/services/compliance" },
        { name: "Labour Department", path: "/services/compliance" },
        { name: "Annual Compliance", path: "/services/compliance" },
        { name: "Statutory Audit", path: "/services/compliance" }
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
                    Proprietor: [Owner Name]
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
                  
                  {/* Services Dropdown */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden"
                      >
                        <div className="grid grid-cols-1 gap-6 p-6">
                          {services.map((service, idx) => (
                            <div key={idx} className="space-y-3">
                              <h4 className="font-semibold text-secondary-900 text-sm">
                                {service.category}
                              </h4>
                              <ul className="space-y-2">
                                {service.items.map((serviceItem, serviceIdx) => (
                                  <li key={serviceIdx}>
                                    <Link
                                      to={serviceItem.path}
                                      className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 text-sm block py-1"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {serviceItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          <div className="mt-4 pt-4 border-t border-neutral-200">
                            <Link
                              to="/services"
                              className="block text-center bg-primary-50 text-primary-700 px-4 py-2 rounded-lg hover:bg-primary-100 transition-colors font-medium"
                              onClick={() => setActiveDropdown(null)}
                            >
                              View All Services
                            </Link>
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
            className="fixed inset-0 bg-white z-40 lg:hidden"
          >
            <div className="flex flex-col pt-20 px-4">
              {navigationItems.map((item, index) => (
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
              
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/contact"
                  className="mt-8 inline-block bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-xl font-semibold self-start shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
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