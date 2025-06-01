import { motion } from 'framer-motion';
import { CheckCircle, Clock, FileText, Calculator, Shield, Award,Heart, Users, TrendingUp, Search, AlertTriangle, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const StatutoryAuditServices = () => {
  const auditServices = [
    {
      title: "Company Statutory Audit",
      description: "Mandatory statutory audit for companies as per Companies Act",
      icon: Building,
      features: [
        "Complete financial statements audit",
        "Internal control evaluation",
        "Compliance verification",
        "Auditor's report preparation"
      ],
      eligibility: [
        "All companies (mandatory)",
        "Turnover-based requirements",
        "Public interest entities",
        "Subsidiary companies"
      ],
      pricing: "₹25,000 - ₹1,50,000",
      timeline: "30-60 business days"
    },
    {
      title: "Bank Audit",
      description: "Specialized audit services for banking and financial institutions",
      icon: Calculator,
      features: [
        "Concurrent audit",
        "Revenue audit",
        "Information system audit",
        "Credit audit"
      ],
      coverage: [
        "Loan portfolio review",
        "Risk assessment",
        "Regulatory compliance",
        "System controls"
      ],
      pricing: "₹50,000 - ₹5,00,000",
      timeline: "45-90 business days"
    },
    {
      title: "Cooperative Society Audit",
      description: "Audit services for cooperative societies and institutions",
      icon: Users,
      features: [
        "Financial audit",
        "Management audit",
        "Performance audit",
        "Compliance audit"
      ],
      areas: [
        "Credit societies",
        "Housing societies",
        "Agricultural cooperatives",
        "Consumer cooperatives"
      ],
      pricing: "₹15,000 - ₹75,000",
      timeline: "20-45 business days"
    },
    {
      title: "Trust & NGO Audit",
      description: "Specialized audit for trusts, NGOs, and charitable organizations",
      icon: Heart,
      features: [
        "Compliance with trust deed",
        "Donation utilization audit",
        "Tax exemption compliance",
        "Regulatory filing support"
      ],
      compliance: [
        "Income Tax Act provisions",
        "FCRA compliance",
        "12A & 80G regulations",
        "State trust laws"
      ],
      pricing: "₹10,000 - ₹50,000",
      timeline: "15-30 business days"
    }
  ];

  const auditThresholds = [
    {
      category: "Turnover Based",
      criteria: [
        {
          entity: "Public Companies",
          threshold: "Any turnover",
          requirement: "Mandatory audit",
          additionalInfo: "All public companies require audit"
        },
        {
          entity: "Private Companies",
          threshold: "Turnover > ₹2 Crores",
          requirement: "Mandatory audit",
          additionalInfo: "Or borrowings > ₹1 Crore"
        },
        {
          entity: "Small Companies",
          threshold: "Turnover ₹2-20 Crores",
          requirement: "Limited review",
          additionalInfo: "Simplified audit procedures"
        },
        {
          entity: "One Person Company",
          threshold: "Turnover > ₹2 Crores",
          requirement: "Mandatory audit",
          additionalInfo: "Same as private companies"
        }
      ]
    },
    {
      category: "Special Categories",
      criteria: [
        {
          entity: "Banking Companies",
          threshold: "All banks",
          requirement: "Mandatory audit",
          additionalInfo: "RBI regulations apply"
        },
        {
          entity: "Insurance Companies",
          threshold: "All insurers",
          requirement: "Mandatory audit",
          additionalInfo: "IRDAI regulations"
        },
        {
          entity: "Listed Companies",
          threshold: "All listed entities",
          requirement: "Mandatory audit",
          additionalInfo: "SEBI regulations"
        },
        {
          entity: "Government Companies",
          threshold: "All PSUs",
          requirement: "CAG audit",
          additionalInfo: "Comptroller & Auditor General"
        }
      ]
    }
  ];

  const auditStandards = [
    {
      standard: "SA 200",
      title: "Overall Objectives of Independent Auditor",
      focus: "Fundamental principles and responsibilities",
      keyAreas: [
        "Auditor independence",
        "Professional skepticism",
        "Reasonable assurance",
        "Audit opinion formation"
      ]
    },
    {
      standard: "SA 315",
      title: "Understanding Entity and Risk Assessment",
      focus: "Risk identification and assessment procedures",
      keyAreas: [
        "Business risk assessment",
        "Internal control evaluation",
        "Material misstatement risks",
        "Fraud risk factors"
      ]
    },
    {
      standard: "SA 330",
      title: "Auditor's Responses to Assessed Risks",
      focus: "Designing audit procedures based on risk assessment",
      keyAreas: [
        "Test of controls",
        "Substantive procedures",
        "Sampling techniques",
        "Audit evidence"
      ]
    },
    {
      standard: "SA 700",
      title: "Forming Opinion and Reporting",
      focus: "Audit opinion formation and reporting requirements",
      keyAreas: [
        "Opinion formation",
        "Report structure",
        "Key audit matters",
        "Going concern assessment"
      ]
    }
  ];

  const auditProcess = [
    {
      phase: "Planning Phase",
      duration: "Week 1-2",
      activities: [
        "Client understanding and risk assessment",
        "Materiality determination",
        "Audit strategy development",
        "Team allocation and timeline"
      ],
      deliverables: [
        "Audit planning memorandum",
        "Risk assessment report",
        "Audit program",
        "Engagement letter"
      ]
    },
    {
      phase: "Fieldwork Phase",
      duration: "Week 3-6",
      activities: [
        "Test of controls execution",
        "Substantive testing procedures",
        "Sample selection and testing",
        "Management discussions"
      ],
      deliverables: [
        "Working papers",
        "Test results documentation",
        "Issues identified",
        "Management letter points"
      ]
    },
    {
      phase: "Completion Phase",
      duration: "Week 7-8",
      activities: [
        "Analytical review procedures",
        "Going concern assessment",
        "Subsequent events review",
        "Management representations"
      ],
      deliverables: [
        "Audit completion checklist",
        "Subsequent events note",
        "Management representation letter",
        "Review notes"
      ]
    },
    {
      phase: "Reporting Phase",
      duration: "Week 9-10",
      activities: [
        "Audit opinion formation",
        "Report drafting and review",
        "Management discussion",
        "Final report issuance"
      ],
      deliverables: [
        "Auditor's report",
        "Management letter",
        "Board presentation",
        "Compliance certificates"
      ]
    }
  ];

  const documentsRequired = [
    {
      category: "Financial Records",
      documents: [
        "Trial balance and general ledger",
        "Financial statements (draft)",
        "Cash and bank statements",
        "Fixed asset register",
        "Inventory records and valuations",
        "Accounts receivable and payable schedules"
      ]
    },
    {
      category: "Legal & Compliance",
      documents: [
        "Memorandum and Articles of Association",
        "Board meeting minutes",
        "Statutory registers",
        "ROC filings and confirmations",
        "Tax returns and assessments",
        "Legal agreements and contracts"
      ]
    },
    {
      category: "Operational Records",
      documents: [
        "Purchase and sales registers",
        "Expense vouchers and bills",
        "Employee records and payroll",
        "Insurance policies",
        "Loan agreements and schedules",
        "Investment confirmations"
      ]
    },
    {
      category: "Internal Controls",
      documents: [
        "Internal control documentation",
        "Authorization matrices",
        "System access controls",
        "Segregation of duties matrix",
        "Risk management policies",
        "Internal audit reports"
      ]
    }
  ];

  const auditOpinions = [
    {
      opinion: "Unqualified Opinion",
      description: "Clean opinion indicating fair financial statements",
      conditions: [
        "No material misstatements",
        "Adequate disclosures",
        "Compliance with standards",
        "Proper accounting policies"
      ],
      impact: "Positive for stakeholders",
      color: "success"
    },
    {
      opinion: "Qualified Opinion",
      description: "Opinion with specific exceptions or limitations",
      conditions: [
        "Disagree with specific items",
        "Scope limitations",
        "Departure from standards",
        "Material but not pervasive"
      ],
      impact: "Requires explanation",
      color: "warning"
    },
    {
      opinion: "Adverse Opinion",
      description: "Opinion stating financial statements are not fairly presented",
      conditions: [
        "Material and pervasive misstatements",
        "Fundamental accounting errors",
        "Misleading financial statements",
        "Non-compliance with standards"
      ],
      impact: "Highly negative impact",
      color: "danger"
    },
    {
      opinion: "Disclaimer of Opinion",
      description: "Unable to form an opinion due to limitations",
      conditions: [
        "Insufficient audit evidence",
        "Multiple scope limitations",
        "Client imposed restrictions",
        "Going concern uncertainties"
      ],
      impact: "Unable to rely on statements",
      color: "neutral"
    }
  ];

  const auditBenefits = [
    {
      stakeholder: "Management",
      benefits: [
        "Objective assessment of financial position",
        "Identification of internal control weaknesses",
        "Recommendations for process improvements",
        "Compliance verification and assurance",
        "Enhanced decision-making information",
        "Risk identification and mitigation"
      ]
    },
    {
      stakeholder: "Shareholders/Investors",
      benefits: [
        "Independent verification of financial statements",
        "Confidence in reported financial information",
        "Assessment of management stewardship",
        "Transparency in financial reporting",
        "Risk assessment for investment decisions",
        "Corporate governance oversight"
      ]
    },
    {
      stakeholder: "Lenders/Creditors",
      benefits: [
        "Reliable financial information for credit decisions",
        "Assessment of repayment capacity",
        "Compliance with loan covenants",
        "Risk evaluation for lending",
        "Security for financial transactions",
        "Monitoring of financial health"
      ]
    },
    {
      stakeholder: "Regulatory Bodies",
      benefits: [
        "Compliance with statutory requirements",
        "Adherence to accounting standards",
        "Proper financial reporting",
        "Investor protection measures",
        "Market integrity maintenance",
        "Regulatory oversight facilitation"
      ]
    }
  ];

  const getOpinionColor = (color) => {
    const colors = {
      success: 'bg-success-100 text-success-700 border-success-200',
      warning: 'bg-orange-100 text-orange-700 border-orange-200',
      danger: 'bg-red-100 text-red-700 border-red-200',
      neutral: 'bg-neutral-100 text-neutral-700 border-neutral-200'
    };
    return colors[color] || colors.neutral;
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
              Statutory Audit Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Professional <span className="text-primary-600">Statutory Audit Services</span>
            </h1>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive statutory audit services ensuring compliance with regulatory requirements. 
              Expert auditors providing independent assurance and valuable business insights.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "300+", label: "Audits Completed" },
              { number: "100%", label: "Compliance Rate" },
              { number: "15+", label: "Years Experience" },
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
              Our Statutory Audit Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Specialized audit services for different types of entities and requirements
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
                    <h4 className="font-semibold text-secondary-900 mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-success-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-secondary-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">
                      {service.eligibility ? 'Eligibility' : service.coverage ? 'Coverage' : service.areas ? 'Areas' : 'Compliance'}
                    </h4>
                    <div className="space-y-2">
                      {(service.eligibility || service.coverage || service.areas || service.compliance || []).map((item, itemIndex) => (
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

      {/* Audit Thresholds */}
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
              Statutory Audit Requirements
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Understanding when statutory audit is mandatory for different entities
            </p>
          </motion.div>

          <div className="space-y-8">
            {auditThresholds.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  {category.category}
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-secondary-900">Entity Type</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-secondary-900">Threshold</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-secondary-900">Requirement</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-secondary-900">Additional Info</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      {category.criteria.map((criteria, index) => (
                        <tr key={index} className="hover:bg-neutral-50">
                          <td className="px-6 py-4 font-medium text-secondary-900">
                            {criteria.entity}
                          </td>
                          <td className="px-6 py-4 text-secondary-700">
                            {criteria.threshold}
                          </td>
                          <td className="px-6 py-4">
                            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                              {criteria.requirement}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-secondary-600 text-sm">
                            {criteria.additionalInfo}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process */}
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
              Our Audit Process
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Systematic and comprehensive audit process ensuring thorough examination
            </p>
          </motion.div>

          <div className="space-y-8">
            {auditProcess.map((phase, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-primary-500"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-secondary-900">
                    {phase.phase}
                  </h3>
                  <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">
                    {phase.duration}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-4">Key Activities</h4>
                    <div className="space-y-3">
                      {phase.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-center">
                          <Search className="w-4 h-4 text-primary-500 mr-3" />
                          <span className="text-secondary-700 text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-4">Deliverables</h4>
                    <div className="space-y-3">
                      {phase.deliverables.map((deliverable, delIndex) => (
                        <div key={delIndex} className="flex items-center">
                          <FileText className="w-4 h-4 text-success-500 mr-3" />
                          <span className="text-secondary-700 text-sm">{deliverable}</span>
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

      {/* Audit Opinions */}
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
              Types of Audit Opinions
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Understanding different audit opinions and their implications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {auditOpinions.map((opinion, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-secondary-900">
                    {opinion.opinion}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getOpinionColor(opinion.color)}`}>
                    {opinion.impact}
                  </span>
                </div>
                
                <p className="text-secondary-600 mb-4">
                  {opinion.description}
                </p>
                
                <div className="space-y-2">
                  {opinion.conditions.map((condition, condIndex) => (
                    <div key={condIndex} className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mr-2" />
                      <span className="text-secondary-700 text-sm">{condition}</span>
                    </div>
                  ))}
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
              Documents Required for Audit
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Comprehensive list of documents needed for statutory audit
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

      {/* Audit Benefits */}
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
              Benefits for Stakeholders
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              How statutory audit benefits different stakeholders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {auditBenefits.map((stakeholder, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -3 }}
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  {stakeholder.stakeholder}
                </h3>
                
                <div className="space-y-3">
                  {stakeholder.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
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
              Why Choose Our Audit Services?
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Professional excellence in statutory audit with proven expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Qualified Auditors",
                description: "Team of qualified Chartered Accountants with extensive audit experience",
                features: [
                  "CA qualified professionals",
                  "Industry expertise",
                  "Continuous training",
                  "Technical competence"
                ]
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Robust quality control procedures ensuring audit excellence",
                features: [
                  "Quality review process",
                  "Technical standards compliance",
                  "Independent review",
                  "Best practices adoption"
                ]
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description: "Commitment to meeting deadlines without compromising quality",
                features: [
                  "Project management approach",
                  "Milestone tracking",
                  "Regular updates",
                  "Deadline adherence"
                ]
              },
              {
                icon: Users,
                title: "Client Focus",
                description: "Client-centric approach with personalized service delivery",
                features: [
                  "Dedicated audit teams",
                  "Regular communication",
                  "Customized solutions",
                  "Post-audit support"
                ]
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex p-4 bg-primary-100 rounded-2xl mb-4">
                    <benefit.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-success-500 mr-2 flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
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
              Need Professional Statutory Audit Services?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Ensure regulatory compliance and gain valuable business insights with our 
              comprehensive statutory audit services. Get started today.
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

export default StatutoryAuditServices;