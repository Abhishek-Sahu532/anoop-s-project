import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, FileText, Shield, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const PartnershipFirm = () => {
  const partnershipTypes = [
    {
      title: "General Partnership",
      description: "All partners have unlimited liability and participate in management",
      features: [
        "Minimum 2 partners required",
        "No maximum limit on partners",
        "Simple formation process",
        "Shared profits and losses"
      ],
      suitableFor: [
        "Small businesses",
        "Professional services",
        "Family businesses",
        "Service providers"
      ]
    },
    {
      title: "Limited Partnership",
      description: "Mix of general and limited partners with different liability levels",
      features: [
        "At least one general partner",
        "Limited partners with restricted liability",
        "Limited partners cannot participate in management",
        "More complex structure"
      ],
      suitableFor: [
        "Investment businesses",
        "Real estate ventures",
        "Private equity",
        "Joint ventures"
      ]
    }
  ];

  const registrationProcess = [
    {
      step: "1",
      title: "Partnership Deed Drafting",
      description: "Prepare comprehensive partnership deed with all terms and conditions",
      timeline: "1-2 days",
      documents: ["Partner details", "Business objectives", "Profit sharing ratio", "Management structure"]
    },
    {
      step: "2",
      title: "PAN Registration",
      description: "Apply for PAN card for the partnership firm",
      timeline: "15-20 days",
      documents: ["Partnership deed", "Address proof", "Identity proof", "Application form"]
    },
    {
      step: "3",
      title: "Bank Account Opening",
      description: "Open current account in the name of partnership firm",
      timeline: "3-5 days",
      documents: ["PAN card", "Partnership deed", "Address proof", "Partner KYC"]
    },
    {
      step: "4",
      title: "Registration Certificate",
      description: "Obtain partnership registration certificate from Registrar",
      timeline: "7-10 days",
      documents: ["Application form", "Partnership deed", "Fees payment", "Affidavit"]
    }
  ];

  const advantages = [
    {
      icon: Users,
      title: "Easy Formation",
      description: "Simple and cost-effective business structure with minimal compliance requirements"
    },
    {
      icon: TrendingUp,
      title: "Shared Resources",
      description: "Pool resources, skills, and expertise of multiple partners for business growth"
    },
    {
      icon: Shield,
      title: "Tax Benefits",
      description: "No separate tax on firm, profits taxed in hands of individual partners"
    },
    {
      icon: Award,
      title: "Flexibility",
      description: "Flexible management structure and decision-making process among partners"
    }
  ];

  const keyDocuments = [
    {
      category: "Partnership Deed",
      items: [
        "Names and addresses of all partners",
        "Nature and scope of business",
        "Capital contribution by each partner",
        "Profit and loss sharing ratio",
        "Rights and duties of partners",
        "Admission and retirement procedures"
      ]
    },
    {
      category: "Required Documents",
      items: [
        "PAN card of all partners",
        "Aadhaar card of all partners",
        "Address proof of firm",
        "Passport size photographs",
        "Bank statements",
        "Rental agreement (if applicable)"
      ]
    }
  ];

  const complianceRequirements = [
    {
      frequency: "Annual",
      requirement: "Income Tax Return Filing",
      dueDate: "30th September",
      penalty: "₹5,000"
    },
    {
      frequency: "Monthly",
      requirement: "TDS Return (if applicable)",
      dueDate: "7th of next month",
      penalty: "₹200/day"
    },
    {
      frequency: "Quarterly",
      requirement: "GST Returns (if applicable)",
      dueDate: "20th of next month",
      penalty: "₹50/day"
    },
    {
      frequency: "Annual",
      requirement: "Audit (if turnover > ₹1 Cr)",
      dueDate: "30th September",
      penalty: "₹1,50,000"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-neutral-50 to-success-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-success-100 text-success-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Partnership Firm Registration
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Register Your <span className="text-success-600">Partnership Firm</span>
            </h1>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Start your business partnership with proper legal documentation and registration. 
              We handle all aspects of partnership firm formation with expert guidance.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "₹2,999", label: "Starting Price" },
              { number: "3-5", label: "Days Process" },
              { number: "200+", label: "Firms Registered" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl font-bold text-success-600 mb-2">{stat.number}</div>
                <div className="text-secondary-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
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
              Types of Partnership
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Choose the right partnership structure for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-secondary-600 mb-6">
                  {type.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-success-500 mr-2" />
                          <span className="text-sm text-secondary-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">Suitable For</h4>
                    <div className="space-y-2">
                      {type.suitableFor.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-success-500 mr-2" />
                          <span className="text-sm text-secondary-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-success-500 to-success-700 text-white px-6 py-3 rounded-xl font-semibold text-center block hover:from-success-600 hover:to-success-800 transition-all duration-300"
                  >
                    Register This Type
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-success-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Registration Process
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Step-by-step process for partnership firm registration
            </p>
          </motion.div>

          <div className="space-y-8">
            {registrationProcess.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-success-500 to-success-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-secondary-900">
                        {step.title}
                      </h3>
                      <span className="bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm font-medium">
                        {step.timeline}
                      </span>
                    </div>
                    
                    <p className="text-secondary-600 mb-4">
                      {step.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.documents.map((doc, docIndex) => (
                        <div key={docIndex} className="flex items-center">
                          <FileText className="w-4 h-4 text-success-500 mr-2" />
                          <span className="text-sm text-secondary-700">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
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
              Advantages of Partnership Firm
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Why partnership firm is the right choice for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex p-4 bg-success-100 rounded-2xl mb-6">
                  <advantage.icon className="w-8 h-8 text-success-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-success-50">
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
              Documents needed for partnership firm registration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyDocuments.map((docCategory, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  {docCategory.category}
                </h3>
                
                <div className="space-y-3">
                  {docCategory.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <FileText className="w-5 h-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Requirements */}
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
              Ongoing Compliance
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Compliance requirements after partnership firm registration
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-success-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Frequency</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Requirement</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Due Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Penalty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {complianceRequirements.map((requirement, index) => (
                    <motion.tr
                      key={index}
                      className="hover:bg-neutral-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <td className="px-6 py-4">
                        <span className="bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm font-medium">
                          {requirement.frequency}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-secondary-900 font-medium">
                        {requirement.requirement}
                      </td>
                      <td className="px-6 py-4 text-secondary-600">
                        {requirement.dueDate}
                      </td>
                      <td className="px-6 py-4 text-red-600 font-medium">
                        {requirement.penalty}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-success-500 to-success-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Partnership?
            </h2>
            <p className="text-xl text-success-100 mb-8 max-w-3xl mx-auto">
              Get your partnership firm registered today with expert guidance and 
              complete legal documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-success-600 px-8 py-4 rounded-xl font-semibold hover:bg-success-50 transition-all duration-300 shadow-lg"
              >
                Start Registration Now
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-success-600 transition-all duration-300"
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

export default PartnershipFirm;