import { FileText, Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube, ChevronRight, Calculator, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const taxServices = [
    { name: "GST Registration & Returns", path: "/services/gst" },
    { name: "Income Tax Filing", path: "/services/income-tax" },
    { name: "Tax Planning & Advisory", path: "/services/tax-planning" },
    { name: "Tax Audit Services", path: "/services/tax-audit" }
  ];

  const businessServices = [
    { name: "Company Registration", path: "/services/company-registration" },
    { name: "Partnership Firm", path: "/services/partnership-firm" },
    { name: "LLP Registration", path: "/services/llp-registration" },
    { name: "ROC Filing Services", path: "/services/roc-filing" }
  ];

  const complianceServices = [
    { name: "PF & ESIC Services", path: "/services/pf-esic" },
    { name: "Labour Department", path: "/services/labour-department" },
    { name: "Compliance Management", path: "/services/compliance" },
    { name: "Statutory Audit", path: "/services/statutory-audit" }
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Due Dates", path: "/due-dates" },
    { name: "Our Team", path: "/team" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Careers", path: "/careers" }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      action: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@smaccounting.com", "support@smaccounting.com"],
      action: "mailto:info@smaccounting.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Business District", "Bhopal, Madhya Pradesh 462001"],
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By Appointment"],
      action: "#"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-700" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-600" }
  ];

  const achievements = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Cases Resolved" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Compliance Rate" }
  ];

  return (
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2L74 40h-2zm4 0l4-4v2L78 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Top Section */}
        <div className="border-b border-secondary-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Company Info */}
              <motion.div 
                className="lg:col-span-2 space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Calculator className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400 bg-clip-text text-transparent">
                        SM Accounting Solution
                      </h3>
                      <p className="text-secondary-300 font-medium">Your Trusted Tax & Business Partner</p>
                    </div>
                  </div>
                  <p className="text-secondary-300 leading-relaxed text-lg">
                    Pioneering excellence in tax consultancy and business advisory services with over 15 years of expertise. 
                    We transform complex compliance challenges into growth opportunities for your business.
                  </p>
                </div>



               
              </motion.div>

              {/* Services Links */}
              <motion.div 
                className="lg:col-span-3 grid md:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Tax Services */}
                <div>
                  <h4 className="text-xl font-bold mb-6 text-white border-b border-primary-500 pb-2">Tax Services</h4>
                  <ul className="space-y-3">
                    {taxServices.map((service, index) => (
                      <li key={index}>
                        <Link
                          to={service.path}
                          className="group flex items-center text-secondary-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-2"
                        >
                          <ChevronRight className="w-4 h-4 mr-2 group-hover:text-primary-400 transition-colors" />
                          <span className="text-sm">{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business Services */}
                <div>
                  <h4 className="text-xl font-bold mb-6 text-white border-b border-accent-500 pb-2">Business Services</h4>
                  <ul className="space-y-3">
                    {businessServices.map((service, index) => (
                      <li key={index}>
                        <Link
                          to={service.path}
                          className="group flex items-center text-secondary-300 hover:text-accent-400 transition-all duration-300 hover:translate-x-2"
                        >
                          <ChevronRight className="w-4 h-4 mr-2 group-hover:text-accent-400 transition-colors" />
                          <span className="text-sm">{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compliance Services */}
                <div>
                  <h4 className="text-xl font-bold mb-6 text-white border-b border-success-500 pb-2">Compliance</h4>
                  <ul className="space-y-3">
                    {complianceServices.map((service, index) => (
                      <li key={index}>
                        <Link
                          to={service.path}
                          className="group flex items-center text-secondary-300 hover:text-success-400 transition-all duration-300 hover:translate-x-2"
                        >
                          <ChevronRight className="w-4 h-4 mr-2 group-hover:text-success-400 transition-colors" />
                          <span className="text-sm">{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Copyright */}
              <motion.div 
                className="text-center md:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-secondary-400 text-sm">
                  &copy; 2025 SM Accounting Solution. All rights reserved. 
                  <span className="hidden sm:inline"> | Crafted with excellence for your success.</span>
                </p>
                <p className="text-secondary-500 text-xs mt-1">
                  Professional Tax & Business Consultancy Services in Bhopal, Madhya Pradesh
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-secondary-400 text-sm mr-2">Follow Us:</span>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`p-3 bg-secondary-800/50 rounded-lg text-secondary-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-secondary-700/50`}
                    aria-label={social.label}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;