import { motion } from 'framer-motion';
import { CheckCircle, Clock, FileText, Calculator, Users, Award, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const IncomeTaxServices = () => {
  const taxServices = [
    {
      title: "Individual ITR Filing",
      description: "Personal income tax return filing for salaried and business individuals",
      features: [
        "ITR-1, ITR-2, ITR-3, ITR-4 filing",
        "Capital gains computation",
        "Loss carry forward",
        "Refund claim assistance"
      ],
      price: "₹999 - ₹4,999",
      timeline: "3-5 business days"
    },
    {
      title: "Business Tax Returns", 
      description: "Corporate and partnership firm income tax compliance",
      features: [
        "Company ITR filing",
        "Partnership firm returns",
        "Tax audit reports",
        "Transfer pricing documentation"
      ],
      price: "₹4,999 - ₹25,000",
      timeline: "7-15 business days"
    },
    {
      title: "TDS Compliance",
      description: "Complete TDS return filing and compliance management",
      features: [
        "Quarterly TDS returns",
        "TDS certificate issuance",
        "Lower deduction certificates",
        "TDS reconciliation"
      ],
      price: "₹2,999/quarter",
      timeline: "Before due date"
    },
    {
      title: "Tax Planning & Advisory",
      description: "Strategic tax planning to minimize tax liability",
      features: [
        "Investment planning under 80C",
        "Capital gains tax planning",
        "Business restructuring advice",
        "Tax optimization strategies"
      ],
      price: "₹999/hour",
      timeline: "Ongoing consultation"
    }
  ];

  const benefits = [
    {
      icon: Calculator,
      title: "Maximum Tax Savings",
      description: "Expert advice to legally minimize your tax liability through proper planning"
    },
    {
      icon: Shield,
      title: "Audit Protection", 
      description: "Complete documentation and support in case of income tax scrutiny"
    },
    {
      icon: Clock,
      title: "Timely Filing",
      description: "Never miss ITR deadlines with our systematic filing process"
    },
    {
      icon: Users,
      title: "Expert CA Support",
      description: "Direct access to qualified Chartered Accountants for tax matters"
    }
  ];

  const taxDeductions = [
    {
      section: "Section 80C",
      limit: "₹1.5 Lakh",
      investments: [
        "PPF, ELSS, NSC",
        "Life Insurance Premium",
        "Home Loan Principal",
        "Children's Tuition Fees"
      ]
    },
    {
      section: "Section 80D", 
      limit: "₹25,000 - ₹50,000",
      investments: [
        "Health Insurance Premium",
        "Medical Check-up",
        "Parents Health Insurance",
        "Critical Illness Cover"
      ]
    },
    {
      section: "Section 24(b)",
      limit: "₹2 Lakh",
      investments: [
        "Home Loan Interest",
        "Let-out Property Interest",
        "Construction Loan Interest",
        "Renovation Loan Interest"
      ]
    },
    {
      section: "Other Sections",
      limit: "Various Limits",
      investments: [
        "80E - Education Loan",
        "80G - Donations",
        "80TTA - Savings Interest",
        "80EEA - Home Loan Interest"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Document Collection",
      description: "Gather Form 16, investment proofs, and other relevant documents"
    },
    {
      step: "2",
      title: "Tax Computation",
      description: "Calculate tax liability and identify available deductions"
    },
    {
      step: "3",
      title: "ITR Preparation",
      description: "Prepare accurate income tax return with all details"
    },
    {
      step: "4",
      title: "E-Filing & Verification",
      description: "File return online and complete verification process"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-neutral-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Income Tax Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Expert <span className="text-accent-600">Income Tax Solutions</span>
            </h1>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive income tax services from ITR filing to tax planning. 
              Maximize your savings and ensure 100% compliance with tax laws.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "1000+", label: "ITRs Filed" },
              { number: "₹50L+", label: "Tax Savings" },
              { number: "Zero", label: "Penalties" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl font-bold text-accent-600 mb-2">{stat.number}</div>
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
              Our Tax Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Complete income tax solutions for individuals and businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {taxServices.map((service, index) => (
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
                    <div className="text-2xl font-bold text-accent-600 mb-1">
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
                  className="block w-full bg-gradient-to-r from-accent-500 to-accent-700 text-white px-6 py-3 rounded-xl font-semibold text-center hover:from-accent-600 hover:to-accent-800 transition-all duration-300"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Deductions Section */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Tax Saving Opportunities
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Maximize your tax savings with these legal deductions and investments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {taxDeductions.map((deduction, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">
                    {deduction.section}
                  </h3>
                  <div className="text-2xl font-bold text-accent-600">
                    {deduction.limit}
                  </div>
                </div>

                <ul className="space-y-2">
                  {deduction.investments.map((investment, investmentIndex) => (
                    <li key={investmentIndex} className="flex items-center text-sm">
                      <TrendingUp className="w-4 h-4 text-success-500 mr-2 flex-shrink-0" />
                      <span className="text-secondary-700">{investment}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our Tax Services?
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Professional expertise ensuring maximum savings and compliance
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
                <div className="inline-flex p-4 bg-accent-100 rounded-2xl mb-6">
                  <benefit.icon className="w-8 h-8 text-accent-600" />
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
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our ITR Filing Process
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Simple, transparent process for hassle-free tax filing
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
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-700 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden xl:block absolute top-8 left-full w-full h-0.5 bg-accent-200 -translate-x-8"></div>
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
      <section className="py-16 bg-gradient-to-r from-accent-500 to-accent-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to File Your ITR?
            </h2>
            <p className="text-xl text-accent-100 mb-8 max-w-3xl mx-auto">
              Don't wait until the last minute. Start your income tax filing today 
              and ensure maximum savings with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-accent-600 px-8 py-4 rounded-xl font-semibold hover:bg-accent-50 transition-all duration-300 shadow-lg"
              >
                Start ITR Filing
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-accent-600 transition-all duration-300"
              >
                Tax Planning Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IncomeTaxServices;