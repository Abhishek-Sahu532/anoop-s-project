import { motion } from 'framer-motion';
import { CheckCircle, Clock, FileText, Calculator, Shield, Award, Users, TrendingUp, AlertTriangle, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const TaxAuditServices = () => {
  const auditServices = [
    {
      title: "Statutory Tax Audit",
      description: "Mandatory tax audit for businesses with turnover above ₹1 Crore",
      icon: FileText,
      features: [
        "Complete books of accounts audit",
        "Form 3CA and 3CB preparation",
        "Tax audit report filing",
        "Compliance verification"
      ],
      eligibility: [
        "Business turnover > ₹1 Crore",
        "Professional income > ₹50 Lakhs",
        "Cash transactions > ₹20 Lakhs",
        "Total sales/receipts > ₹1 Crore"
      ],
      pricing: "₹15,000 - ₹50,000",
      timeline: "30-45 business days"
    },
    {
      title: "Internal Tax Audit",
      description: "Voluntary internal audit to ensure compliance and identify issues",
      icon: Search,
      features: [
        "Internal control evaluation",
        "Tax compliance review",
        "Risk assessment",
        "Process improvement recommendations"
      ],
      benefits: [
        "Early issue identification",
        "Improved compliance",
        "Risk mitigation",
        "Process optimization"
      ],
      pricing: "₹10,000 - ₹30,000",
      timeline: "15-25 business days"
    },
    {
      title: "GST Audit",
      description: "Comprehensive GST compliance audit and verification",
      icon: Calculator,
      features: [
        "GST return reconciliation",
        "Input tax credit verification",
        "Compliance gap analysis",
        "GST audit report preparation"
      ],
      coverage: [
        "GSTR filing accuracy",
        "ITC claim verification",
        "Rate classification review",
        "Documentation compliance"
      ],
      pricing: "₹8,000 - ₹25,000",
      timeline: "10-20 business days"
    },
    {
      title: "Special Tax Audit",
      description: "Audit for specific tax issues, assessments, or investigations",
      icon: AlertTriangle,
      features: [
        "Assessment support",
        "Notice response preparation",
        "Investigation assistance",
        "Appeal documentation"
      ],
      situations: [
        "Income tax notices",
        "Assessment proceedings",
        "Search and seizure cases",
        "Transfer pricing audits"
      ],
      pricing: "₹20,000 - ₹1,00,000",
      timeline: "Variable based on case"
    }
  ];

  const auditProcess = [
    {
      step: "1",
      title: "Engagement & Planning",
      description: "Initial consultation and audit planning",
      activities: [
        "Understanding business operations",
        "Risk assessment and planning",
        "Audit timeline preparation",
        "Document checklist creation"
      ],
      timeline: "2-3 days"
    },
    {
      step: "2",
      title: "Document Collection",
      description: "Gathering all necessary documents and records",
      activities: [
        "Books of accounts collection",
        "Financial statements review",
        "Supporting documents gathering",
        "Bank statements verification"
      ],
      timeline: "5-7 days"
    },
    {
      step: "3",
      title: "Audit Execution",
      description: "Detailed examination and verification",
      activities: [
        "Transaction testing",
        "Compliance verification",
        "Calculation validation",
        "Documentation review"
      ],
      timeline: "15-20 days"
    },
    {
      step: "4",
      title: "Report Preparation",
      description: "Compilation of findings and report preparation",
      activities: [
        "Audit findings compilation",
        "Report drafting",
        "Client discussion",
        "Final report preparation"
      ],
      timeline: "5-8 days"
    },
    {
      step: "5",
      title: "Filing & Follow-up",
      description: "Report filing and post-audit support",
      activities: [
        "Online report filing",
        "Compliance certificate issuance",
        "Recommendations implementation",
        "Ongoing support"
      ],
      timeline: "3-5 days"
    }
  ];

  const documentsRequired = [
    {
      category: "Financial Records",
      documents: [
        "Books of accounts (Cash book, Journal, Ledger)",
        "Trial Balance and Financial Statements",
        "Profit & Loss Account and Balance Sheet",
        "Bank statements and reconciliation",
        "Fixed asset register and depreciation schedule",
        "Inventory records and stock statements"
      ]
    },
    {
      category: "Tax Records",
      documents: [
        "Previous year ITR and tax audit reports",
        "TDS certificates and challans",
        "Advance tax payment details",
        "Assessment orders (if any)",
        "GST returns and records",
        "Service tax/VAT records (if applicable)"
      ]
    },
    {
      category: "Supporting Documents",
      documents: [
        "Purchase and sales invoices",
        "Contracts and agreements",
        "Board resolutions and minutes",
        "Loan agreements and sanction letters",
        "Insurance policies and claims",
        "Legal and professional fees receipts"
      ]
    },
    {
      category: "Compliance Documents",
      documents: [
        "ROC filings and annual returns",
        "PF and ESIC compliance records",
        "Labour law compliance documents",
        "Environmental clearances",
        "Import/Export documents",
        "Foreign exchange records"
      ]
    }
  ];

  const auditBenefits = [
    {
      icon: Shield,
      title: "Compliance Assurance",
      description: "Ensure 100% compliance with income tax laws and regulations",
      details: [
        "Identify compliance gaps",
        "Prevent penalties and interest",
        "Ensure accurate tax calculations",
        "Maintain proper documentation"
      ]
    },
    {
      icon: Search,
      title: "Risk Mitigation",
      description: "Identify and mitigate potential tax risks and exposures",
      details: [
        "Early detection of issues",
        "Proactive risk management",
        "Avoid future complications",
        "Strengthen internal controls"
      ]
    },
    {
      icon: TrendingUp,
      title: "Process Improvement",
      description: "Enhance financial processes and internal controls",
      details: [
        "Streamline accounting processes",
        "Improve documentation",
        "Enhance reporting quality",
        "Optimize tax efficiency"
      ]
    },
    {
      icon: Award,
      title: "Professional Credibility",
      description: "Enhance business credibility with stakeholders",
      details: [
        "Build investor confidence",
        "Improve bank relationships",
        "Enhance vendor credibility",
        "Strengthen regulatory standing"
      ]
    }
  ];

  const commonFindings = [
    {
      area: "Book-Tax Differences",
      issues: [
        "Depreciation method differences",
        "Provision timing differences",
        "Expense disallowances",
        "Income recognition variations"
      ],
      impact: "Medium to High"
    },
    {
      area: "Documentation Issues",
      issues: [
        "Missing supporting documents",
        "Inadequate expense justification",
        "Incomplete transaction records",
        "Poor audit trail maintenance"
      ],
      impact: "Medium"
    },
    {
      area: "Compliance Gaps",
      issues: [
        "TDS calculation errors",
        "Late payment penalties",
        "Incorrect tax deductions",
        "Missing form filings"
      ],
      impact: "High"
    },
    {
      area: "Classification Errors",
      issues: [
        "Revenue vs capital expenditure",
        "Business vs personal expenses",
        "Direct vs indirect expenses",
        "Asset classification issues"
      ],
      impact: "Medium to High"
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Qualified Team",
      description: "Experienced CAs and tax professionals with deep audit expertise"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Commitment to completing audits within agreed timelines"
    },
    {
      icon: FileText,
      title: "Comprehensive Reports",
      description: "Detailed audit reports with actionable recommendations"
    },
    {
      icon: Shield,
      title: "Confidentiality",
      description: "Strict confidentiality and data security protocols"
    }
  ];

  const getImpactColor = (impact) => {
    switch (impact.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium to high':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-neutral-100 text-neutral-700 border-neutral-200';
    }
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
              Tax Audit Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Professional <span className="text-primary-600">Tax Audit Services</span>
            </h1>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive tax audit services ensuring compliance, identifying risks, and 
              providing valuable insights for your business. Expert auditors with proven track record.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "200+", label: "Audits Completed" },
              { number: "100%", label: "Compliance Rate" },
              { number: "15+", label: "Years Experience" },
              { number: "Zero", label: "Penalty Cases" }
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

      {/* Audit Services */}
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
              Our Tax Audit Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Comprehensive audit solutions for all your compliance and risk management needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {auditServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <service.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-bold text-primary-600">
                        {service.pricing}
                      </div>
                      <div className="text-sm text-secondary-500">
                        {service.timeline}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">
                      {service.features ? 'Key Features' : service.eligibility ? 'Eligibility' : 'Coverage'}
                    </h4>
                    <div className="space-y-2">
                      {(service.features || service.eligibility || service.coverage || []).map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-success-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-secondary-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">
                      {service.eligibility ? 'Applicability' : service.benefits ? 'Benefits' : service.coverage ? 'Focus Areas' : 'Situations'}
                    </h4>
                    <div className="space-y-2">
                      {(service.eligibility || service.benefits || service.situations || []).map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-secondary-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-xl font-semibold text-center hover:from-primary-600 hover:to-primary-800 transition-all duration-300"
                >
                  Get Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process */}
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
              Our Audit Process
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Systematic and thorough approach ensuring comprehensive audit coverage
            </p>
          </motion.div>

          <div className="space-y-8">
            {auditProcess.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-secondary-900">
                        {step.title}
                      </h3>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        {step.timeline}
                      </span>
                    </div>
                    
                    <p className="text-secondary-600 mb-4">
                      {step.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center">
                          <FileText className="w-4 h-4 text-primary-500 mr-2" />
                          <span className="text-sm text-secondary-700">{activity}</span>
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
              Documents Required for Tax Audit
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Comprehensive list of documents needed for smooth audit execution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {documentsRequired.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  {category.category}
                </h3>
                
                <div className="space-y-3">
                  {category.documents.map((document, docIndex) => (
                    <div key={docIndex} className="flex items-start">
                      <FileText className="w-4 h-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{document}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Findings */}
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
              Common Audit Findings
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Understanding typical issues helps in better preparation and compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {commonFindings.map((finding, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-secondary-900">
                    {finding.area}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getImpactColor(finding.impact)}`}>
                    {finding.impact} Impact
                  </span>
                </div>
                
                <div className="space-y-3">
                  {finding.issues.map((issue, issueIndex) => (
                    <div key={issueIndex} className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{issue}</span>
                    </div>
                  ))}
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
              Benefits of Professional Tax Audit
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Why investing in professional tax audit services makes business sense
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {auditBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <benefit.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {benefit.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-success-500 mr-3 flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Our Tax Audit Services?
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Experience the difference of working with professional tax auditors
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
              Need Professional Tax Audit Services?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Ensure compliance and mitigate risks with our expert tax audit services. 
              Get started today with a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg"
              >
                Schedule Audit Consultation
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Get Audit Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TaxAuditServices;