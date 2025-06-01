import { motion } from 'framer-motion';
import { CheckCircle, Clock, FileText, Calculator, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const GSTServices = () => {
  const gstServices = [
    {
      title: "GST Registration",
      description: "Complete GST registration process for new businesses",
      features: [
        "Document preparation and verification",
        "Online application filing",
        "ARN number tracking",
        "GSTIN certificate delivery"
      ],
      price: "₹2,999",
      timeline: "3-5 business days"
    },
    {
      title: "GST Monthly Returns",
      description: "GSTR-1, GSTR-3B monthly filing services",
      features: [
        "GSTR-1 sales return filing",
        "GSTR-3B summary return",
        "Input tax credit reconciliation",
        "Payment calculation and advisory"
      ],
      price: "₹1,499/month",
      timeline: "Before due date"
    },
    {
      title: "GST Annual Returns",
      description: "GSTR-9 annual return and reconciliation",
      features: [
        "Annual return preparation",
        "Books reconciliation",
        "Audit assistance if required",
        "Compliance certificate"
      ],
      price: "₹8,999",
      timeline: "15-20 business days"
    },
    {
      title: "GST Advisory Services",
      description: "Expert consultation and compliance advisory",
      features: [
        "GST impact analysis",
        "Process optimization",
        "Notice handling",
        "Refund claim assistance"
      ],
      price: "₹499/hour",
      timeline: "On-demand"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Timely Filing",
      description: "Never miss a GST deadline with our automated reminder system"
    },
    {
      icon: Calculator,
      title: "Accurate Calculations",
      description: "Error-free tax calculations and input tax credit optimization"
    },
    {
      icon: Users,
      title: "Expert Support", 
      description: "Dedicated GST experts available for consultation and support"
    },
    {
      icon: Award,
      title: "Compliance Assurance",
      description: "100% compliance guarantee with latest GST rules and regulations"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Document Collection",
      description: "We collect all necessary documents and business information"
    },
    {
      step: "2", 
      title: "Application Preparation",
      description: "Our experts prepare and review your GST application"
    },
    {
      step: "3",
      title: "Online Filing",
      description: "We file your application online and track the progress"
    },
    {
      step: "4",
      title: "Registration Complete",
      description: "Receive your GSTIN and start GST-compliant operations"
    }
  ];

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
              GST Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Complete <span className="text-primary-600">GST Solutions</span>
            </h1>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              From registration to returns filing, we handle all your GST requirements 
              with precision and expertise. Stay compliant and focus on growing your business.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "500+", label: "GST Registrations" },
              { number: "2000+", label: "Returns Filed" },
              { number: "100%", label: "Success Rate" },
              { number: "24h", label: "Support Available" }
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

      {/* Services Grid */}
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
              Our GST Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Comprehensive GST solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {gstServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {service.description}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-primary-600 mb-1">
                      {service.price}
                    </div>
                    <div className="text-sm text-secondary-500">
                      {service.timeline}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-success-500 mr-3 flex-shrink-0" />
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-xl font-semibold text-center hover:from-primary-600 hover:to-primary-800 transition-all duration-300"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our GST Services?
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Experience the difference of working with GST experts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our GST Registration Process
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Simple, transparent, and efficient process to get you GST registered
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden xl:block absolute top-8 left-full w-full h-0.5 bg-primary-200 -translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600">
                  {step.description}
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
              Ready to Get GST Registered?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses who trust us with their GST compliance. 
              Get started today and stay worry-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg"
              >
                Start GST Registration
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GSTServices;