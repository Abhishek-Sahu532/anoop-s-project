import { motion } from 'framer-motion';
import { CheckCircle, Shield, Users, Clock, FileText, Calculator, Heart, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const PFESICServices = () => {
  const services = [
    {
      title: "PF Registration",
      description: "Provident Fund registration for new establishments",
      icon: Briefcase,
      features: [
        "Online PF registration",
        "Establishment code allotment",
        "Employee enrollment",
        "Compliance setup"
      ],
      pricing: "₹2,999",
      timeline: "5-7 business days"
    },
    {
      title: "ESIC Registration",
      description: "Employee State Insurance Corporation registration",
      icon: Heart,
      features: [
        "ESIC establishment registration",
        "Employee IP number allocation",
        "Medical benefits setup",
        "Contribution calculation"
      ],
      pricing: "₹2,499",
      timeline: "3-5 business days"
    },
    {
      title: "Monthly Compliance",
      description: "Monthly PF and ESIC return filing",
      icon: Calculator,
      features: [
        "ECR preparation and filing",
        "ESIC monthly returns",
        "Challan generation",
        "Payment processing"
      ],
      pricing: "₹999/month",
      timeline: "Before due date"
    },
    {
      title: "Employee Services",
      description: "Individual employee PF and ESIC services",
      icon: Users,
      features: [
        "PF account opening",
        "ESIC card generation",
        "Claim processing",
        "Transfer services"
      ],
      pricing: "₹499/employee",
      timeline: "7-10 business days"
    }
  ];

  const pfBenefits = [
    {
      title: "For Employees",
      benefits: [
        "Retirement savings with 8.1% interest",
        "Employer contribution (12% of basic salary)",
        "Tax benefits under Section 80C",
        "Loan facility against PF balance",
        "Pension scheme benefits"
      ]
    },
    {
      title: "For Employers",
      benefits: [
        "Legal compliance with labour laws",
        "Employee retention and satisfaction",
        "Tax deduction on contributions",
        "Avoid penalties and legal issues",
        "Professional reputation enhancement"
      ]
    }
  ];

  const esicBenefits = [
    {
      title: "Medical Benefits",
      benefits: [
        "Free medical treatment",
        "Hospitalization expenses",
        "Specialist consultation",
        "Diagnostic tests coverage",
        "Medicine and surgery costs"
      ]
    },
    {
      title: "Cash Benefits",
      benefits: [
        "Sickness benefit (50% of wages)",
        "Maternity benefit (100% for 26 weeks)",
        "Disability benefit",
        "Dependent benefit",
        "Funeral expenses"
      ]
    }
  ];

  const eligibilityCriteria = [
    {
      scheme: "Provident Fund (PF)",
      criteria: [
        "Establishments with 20+ employees",
        "Monthly salary up to ₹15,000",
        "All types of industries covered",
        "Both permanent and temporary employees"
      ]
    },
    {
      scheme: "ESIC",
      criteria: [
        "Establishments with 10+ employees",
        "Monthly salary up to ₹21,000",
        "Manufacturing, mining, hotels, restaurants",
        "Medical and cash benefits included"
      ]
    }
  ];

  const complianceCalendar = [
    {
      task: "ECR Filing (PF)",
      frequency: "Monthly",
      dueDate: "15th of next month",
      penalty: "₹100 per day per member"
    },
    {
      task: "ESIC Returns",
      frequency: "Monthly", 
      dueDate: "21st of next month",
      penalty: "₹100 per day per member"
    },
    {
      task: "Annual PF Return",
      frequency: "Annual",
      dueDate: "30th April",
      penalty: "₹1,000 + ₹25 per day"
    },
    {
      task: "ESIC Annual Return",
      frequency: "Annual",
      dueDate: "30th April",
      penalty: "₹5,000 + ₹25 per day"
    }
  ];

  const documentRequired = [
    {
      purpose: "PF Registration",
      documents: [
        "Trade license or incorporation certificate",
        "Bank account details",
        "Employee details with UAN",
        "Salary register",
        "Cancelled cheque",
        "Rent agreement or property documents"
      ]
    },
    {
      purpose: "ESIC Registration",
      documents: [
        "Establishment registration proof",
        "Employee list with details",
        "Salary records",
        "Bank account proof",
        "Address proof of establishment",
        "Factory license (if applicable)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-neutral-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              PF & ESIC Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Complete <span className="text-secondary-600">PF & ESIC Solutions</span>
            </h1>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive Provident Fund and Employee State Insurance services. 
              Ensure employee benefits and legal compliance with expert management.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Employees Managed" },
              { number: "100+", label: "Companies Served" },
              { number: "Zero", label: "Penalty Cases" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl font-bold text-secondary-600 mb-2">{stat.number}</div>
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
              Our PF & ESIC Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Complete employee benefit solutions for your organization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
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
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-secondary-100 rounded-xl">
                      <service.icon className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-secondary-600 mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-secondary-600 mb-1">
                      {service.pricing}
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
                  className="block w-full bg-gradient-to-r from-secondary-500 to-secondary-700 text-white px-6 py-3 rounded-xl font-semibold text-center hover:from-secondary-600 hover:to-secondary-800 transition-all duration-300"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              PF & ESIC Benefits
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Understanding the benefits of PF and ESIC for employees and employers
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* PF Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
                Provident Fund Benefits
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {pfBenefits.map((category, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <h4 className="text-xl font-bold text-secondary-900 mb-4">
                      {category.title}
                    </h4>
                    <div className="space-y-3">
                      {category.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-secondary-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
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
              Eligibility Criteria
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Who needs to register for PF and ESIC
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {eligibilityCriteria.map((scheme, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-secondary-200 hover:border-secondary-300 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  {scheme.scheme}
                </h3>
                
                <div className="space-y-4">
                  {scheme.criteria.map((criteria, criteriaIndex) => (
                    <div key={criteriaIndex} className="flex items-start">
                      <Shield className="w-5 h-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-700">{criteria}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Calendar */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Compliance Calendar
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Important due dates and compliance requirements
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Task</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Frequency</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Due Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Penalty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {complianceCalendar.map((item, index) => (
                    <motion.tr
                      key={index}
                      className="hover:bg-neutral-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <td className="px-6 py-4 font-medium text-secondary-900">
                        {item.task}
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm font-medium">
                          {item.frequency}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-secondary-600">
                        {item.dueDate}
                      </td>
                      <td className="px-6 py-4 text-red-600 font-medium">
                        {item.penalty}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
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
              Required Documents
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Documents needed for PF and ESIC registration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {documentRequired.map((docCategory, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  {docCategory.purpose}
                </h3>
                
                <div className="space-y-3">
                  {docCategory.documents.map((doc, docIndex) => (
                    <div key={docIndex} className="flex items-start">
                      <FileText className="w-5 h-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose Our PF & ESIC Services?
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Professional expertise ensuring compliance and employee satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "100% Compliance",
                description: "Guaranteed compliance with all PF and ESIC regulations"
              },
              {
                icon: Clock,
                title: "Timely Filing",
                description: "Never miss deadlines with our automated systems"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Dedicated professionals with deep PF/ESIC knowledge"
              },
              {
                icon: FileText,
                title: "Complete Documentation",
                description: "Proper documentation and record maintenance"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex p-4 bg-secondary-100 rounded-2xl mb-6">
                  <benefit.icon className="w-8 h-8 text-secondary-600" />
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-500 to-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Secure Your Employees' Future
            </h2>
            <p className="text-xl text-secondary-100 mb-8 max-w-3xl mx-auto">
              Ensure proper employee benefits and legal compliance with our 
              comprehensive PF and ESIC services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-secondary-600 px-8 py-4 rounded-xl font-semibold hover:bg-secondary-50 transition-all duration-300 shadow-lg"
              >
                Start Registration
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-secondary-600 transition-all duration-300"
              >
                Get Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PFESICServices;