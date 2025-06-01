import { motion } from 'framer-motion';
import { CheckCircle, Clock, Building, Shield, Users, Award, FileText, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyRegistration = () => {
  const registrationTypes = [
    {
      title: "Private Limited Company",
      description: "Most popular choice for startups and growing businesses",
      features: [
        "Limited liability protection",
        "Separate legal entity",
        "Easy fundraising options",
        "Professional credibility"
      ],
      requirements: [
        "Minimum 2 Directors",
        "Minimum ₹1 Lakh capital",
        "Registered office address",
        "DIN & DSC for directors"
      ],
      price: "₹6,999",
      timeline: "10-15 business days"
    },
    {
      title: "Limited Liability Partnership",
      description: "Perfect blend of partnership flexibility and corporate benefits",
      features: [
        "Limited liability for partners",
        "Flexible management structure",
        "No minimum capital requirement",
        "Easy compliance"
      ],
      requirements: [
        "Minimum 2 Partners",
        "DPIN for all partners",
        "LLP Agreement",
        "Registered office address"
      ],
      price: "₹4,999",
      timeline: "7-10 business days"
    },
    {
      title: "Partnership Firm",
      description: "Traditional business structure for small to medium businesses",
      features: [
        "Easy formation process",
        "Shared profits and losses",
        "Flexible operations",
        "Tax benefits"
      ],
      requirements: [
        "Minimum 2 Partners",
        "Partnership Deed",
        "PAN registration",
        "Bank account opening"
      ],
      price: "₹2,999",
      timeline: "3-5 business days"
    },
    {
      title: "One Person Company",
      description: "Ideal for single entrepreneurs wanting corporate structure",
      features: [
        "Single person ownership",
        "Limited liability",
        "Separate legal entity",
        "Easy conversion to Pvt Ltd"
      ],
      requirements: [
        "Only 1 Director/Member",
        "1 Nominee required",
        "Registered office",
        "DIN & DSC"
      ],
      price: "₹5,999",
      timeline: "12-18 business days"
    }
  ];

  const complianceServices = [
    {
      title: "ROC Annual Filing",
      description: "Annual compliance with Registrar of Companies",
      includes: [
        "Annual Return (MGT-7)",
        "Financial Statements (AOC-4)",
        "Board Meeting Minutes",
        "Compliance Certificate"
      ],
      price: "₹4,999/year"
    },
    {
      title: "Board Meetings",
      description: "Mandatory board meetings and documentation",
      includes: [
        "Meeting agenda preparation",
        "Minutes of meeting",
        "Resolutions drafting",
        "Compliance tracking"
      ],
      price: "₹999/meeting"
    },
    {
      title: "Statutory Audit",
      description: "Mandatory audit for qualifying companies",
      includes: [
        "Financial statements audit",
        "Compliance verification",
        "Audit report preparation",
        "Tax audit if required"
      ],
      price: "₹15,000/year"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Limited liability protection for directors and shareholders"
    },
    {
      icon: Building,
      title: "Business Credibility",
      description: "Enhanced credibility with customers, vendors, and banks"
    },
    {
      icon: Globe,
      title: "Global Expansion",
      description: "Easier international business and investment opportunities"
    },
    {
      icon: Users,
      title: "Easy Ownership Transfer",
      description: "Simple transfer of ownership through share transfers"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Name Reservation",
      description: "Reserve unique company name with MCA"
    },
    {
      step: "2",
      title: "Document Preparation",
      description: "Prepare MOA, AOA, and other incorporation documents"
    },
    {
      step: "3",
      title: "Digital Signatures",
      description: "Obtain DIN and DSC for all directors"
    },
    {
      step: "4",
      title: "Incorporation",
      description: "File incorporation application with MCA"
    },
    {
      step: "5",
      title: "Certificate Issuance",
      description: "Receive Certificate of Incorporation"
    },
    {
      step: "6",
      title: "Post-Incorporation",
      description: "PAN, TAN, bank account, and other registrations"
    }
  ];

  const documents = [
    "PAN Card of all Directors/Partners",
    "Aadhaar Card of all Directors/Partners", 
    "Passport size photographs",
    "Registered office address proof",
    "Rent agreement (if rented premises)",
    "NOC from property owner",
    "Bank statements of directors",
    "Utility bills for address proof"
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
              Company Registration
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Start Your <span className="text-success-600">Business Journey</span>
            </h1>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Register your company with complete legal compliance. From Private Limited 
              to Partnership firms, we handle all types of business registrations.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "500+", label: "Companies Registered" },
              { number: "100%", label: "Success Rate" },
              { number: "7 Days", label: "Average Timeline" },
              { number: "24/7", label: "Support Available" }
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

      {/* Registration Types */}
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
              Choose Your Business Structure
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Select the right business structure for your venture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {registrationTypes.map((type, index) => (
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
                      {type.title}
                    </h3>
                    <p className="text-secondary-600 mb-6">
                      {type.description}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-success-600 mb-1">
                      {type.price}
                    </div>
                    <div className="text-sm text-secondary-500">
                      {type.timeline}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">Features</h4>
                    <div className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-success-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-secondary-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">Requirements</h4>
                    <div className="space-y-2">
                      {type.requirements.map((requirement, reqIndex) => (
                        <div key={reqIndex} className="flex items-center">
                          <FileText className="w-4 h-4 text-secondary-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-secondary-700">{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-success-500 to-success-700 text-white px-6 py-3 rounded-xl font-semibold text-center hover:from-success-600 hover:to-success-800 transition-all duration-300"
                >
                  Start Registration
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Services */}
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
              Post-Registration Compliance
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Ongoing compliance services to keep your company in good standing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {complianceServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-success-500 mr-3 flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-success-600 mb-4">
                    {service.price}
                  </div>
                  <Link
                    to="/contact"
                    className="bg-success-100 text-success-700 px-6 py-2 rounded-lg hover:bg-success-200 transition-colors font-medium"
                  >
                    Learn More
                  </Link>
                </div>
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
              Benefits of Company Registration
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Why registering your business is essential for growth and success
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
                <div className="inline-flex p-4 bg-success-100 rounded-2xl mb-6">
                  <benefit.icon className="w-8 h-8 text-success-600" />
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
              Simple step-by-step process for company registration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-success-500 to-success-700 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
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

      {/* Documents Section */}
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
              Documents needed for company registration process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {documents.map((document, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-4 bg-success-50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <FileText className="w-5 h-5 text-success-600 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700">{document}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-secondary-600 mb-6">
                  Don't have all documents ready? No problem! We'll guide you through the entire process.
                </p>
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-success-500 to-success-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-success-600 hover:to-success-800 transition-all duration-300"
                >
                  Get Document Checklist
                </Link>
              </div>
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
              Ready to Register Your Company?
            </h2>
            <p className="text-xl text-success-100 mb-8 max-w-3xl mx-auto">
              Take the first step towards building your business empire. 
              Get expert guidance for hassle-free company registration.
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

export default CompanyRegistration;