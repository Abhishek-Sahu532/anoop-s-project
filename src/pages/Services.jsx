import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Calculator, 
  Building, 
  Shield, 
  Users, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  Award
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: "GST Services",
      description: "Complete GST registration, returns filing, and compliance solutions",
      icon: Calculator,
      color: "primary",
      link: "/services/gst",
      features: [
        "GST Registration in 3-5 days",
        "Monthly & Annual Returns",
        "Input Tax Credit Optimization",
        "Notice Handling & Support"
      ],
      price: "Starting ₹1,499/month"
    },
    {
      title: "Income Tax Services",
      description: "Expert income tax filing and planning for individuals and businesses",
      icon: FileText,
      color: "accent",
      link: "/services/income-tax",
      features: [
        "Individual & Business ITR Filing",
        "Tax Planning & Advisory",
        "TDS Returns & Compliance",
        "Assessment & Appeals"
      ],
      price: "Starting ₹999/return"
    },
    {
      title: "Company Registration",
      description: "Business incorporation and registration services",
      icon: Building,
      color: "success",
      link: "/services/company-registration", 
      features: [
        "Private Limited Company",
        "Partnership & LLP Registration",
        "ROC Filing & Compliance",
        "Digital Signature Certificate"
      ],
      price: "Starting ₹4,999"
    },
    {
      title: "Compliance Services",
      description: "Complete compliance management for your business",
      icon: Shield,
      color: "secondary",
      link: "/services/compliance",
      features: [
        "PF & ESIC Registration",
        "Labour Law Compliance",
        "Annual Compliance Calendar",
        "Statutory Audit Services"
      ],
      price: "Starting ₹2,499/month"
    }
  ];

  const specializedServices = [
    {
      category: "Tax Planning",
      services: [
        "Personal Tax Planning",
        "Business Tax Strategy",
        "Investment Tax Planning",
        "Retirement Planning"
      ]
    },
    {
      category: "Business Setup",
      services: [
        "Business Model Advisory",
        "Licensing & Permits",
        "Bank Account Opening",
        "Business Plan Preparation"
      ]
    },
    {
      category: "Accounting",
      services: [
        "Bookkeeping Services",
        "Financial Statements",
        "Management Reporting",
        "Internal Audit"
      ]
    },
    {
      category: "Advisory",
      services: [
        "CFO Services",
        "Financial Advisory",
        "Merger & Acquisition",
        "Due Diligence"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Proven track record with hundreds of satisfied clients"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Qualified CAs, CSs, and CMAs for specialized services"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Never miss deadlines with our efficient processes"
    },
    {
      icon: CheckCircle,
      title: "100% Compliance",
      description: "Guaranteed compliance with latest regulations"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: {
        bg: "bg-primary-50",
        icon: "bg-primary-100 text-primary-600",
        border: "border-primary-200",
        button: "bg-primary-500 hover:bg-primary-600"
      },
      accent: {
        bg: "bg-accent-50", 
        icon: "bg-accent-100 text-accent-600",
        border: "border-accent-200",
        button: "bg-accent-500 hover:bg-accent-600"
      },
      success: {
        bg: "bg-success-50",
        icon: "bg-success-100 text-success-600",
        border: "border-success-200",
        button: "bg-success-500 hover:bg-success-600"
      },
      secondary: {
        bg: "bg-secondary-50",
        icon: "bg-secondary-100 text-secondary-600",
        border: "border-secondary-200",
        button: "bg-secondary-500 hover:bg-secondary-600"
      }
    };
    return colors[color] || colors.primary;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Comprehensive <span className="text-primary-600">Business Solutions</span>
            </h1>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              From tax planning to business registration, we offer end-to-end financial 
              and compliance services tailored to your business needs.
            </p>
          </motion.div>

          {/* Service Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "15+", label: "Service Categories" },
              { number: "100%", label: "Compliance Rate" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-secondary-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Service Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Professional services designed to handle all your business compliance needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {serviceCategories.map((category, index) => {
              const colorClasses = getColorClasses(category.color);
              
              return (
                <motion.div
                  key={index}
                  className={`bg-white rounded-2xl border-2 ${colorClasses.border} p-8 hover:shadow-xl transition-all duration-300 group`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className={`inline-flex p-4 rounded-2xl ${colorClasses.icon} mb-4`}>
                        <category.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                        {category.title}
                      </h3>
                      <p className="text-secondary-600 mb-6">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-success-500 mr-3 flex-shrink-0" />
                        <span className="text-secondary-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-primary-600">
                      {category.price}
                    </div>
                    <Link
                      to={category.link}
                      className={`${colorClasses.button} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Specialized Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Additional expert services to support your business growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {specializedServices.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -3 }}
              >
                <h4 className="font-bold text-secondary-900 mb-4 text-lg">
                  {section.category}
                </h4>
                
                <ul className="space-y-3">
                  {section.services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      className="flex items-start text-secondary-600 hover:text-primary-600 transition-colors cursor-pointer"
                    >
                      <TrendingUp className="w-4 h-4 mr-3 mt-0.5 text-success-500 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose SM Accounting Solution?
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Experience the difference of working with true professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex p-4 bg-primary-100 rounded-2xl mb-6">
                  <reason.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Streamline Your Business?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Get personalized consultation and discover how our services can help 
              your business grow while staying compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;