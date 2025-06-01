import { motion } from 'framer-motion';
import { CheckCircle, Clock, FileText, Calendar, Shield, Award, Users, AlertTriangle, Building, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ROCFilingServices = () => {
  const rocServices = [
    {
      title: "Annual Filing Services",
      description: "Complete annual compliance filing with ROC",
      icon: Calendar,
      features: [
        "Form AOC-4 (Financial Statements)",
        "Form MGT-7 (Annual Return)",
        "Board resolution preparation",
        "Digital signature support"
      ],
      inclusions: [
        "Financial statements preparation",
        "Annual return compilation",
        "Fee payment and filing",
        "Acknowledgment receipt"
      ],
      pricing: "₹4,999 - ₹12,999",
      timeline: "7-15 business days"
    },
    {
      title: "Event-Based Filing",
      description: "Filing for specific corporate events and changes",
      icon: Building,
      features: [
        "Director appointment/resignation",
        "Share capital changes",
        "Registered office change",
        "Object clause amendments"
      ],
      inclusions: [
        "Form preparation and filing",
        "Board resolutions",
        "Supporting documents",
        "Compliance verification"
      ],
      pricing: "₹1,999 - ₹8,999",
      timeline: "3-10 business days"
    },
    {
      title: "Compliance Management",
      description: "Ongoing ROC compliance monitoring and management",
      icon: Shield,
      features: [
        "Compliance calendar maintenance",
        "Deadline tracking and alerts",
        "Regular filing schedules",
        "Penalty avoidance strategies"
      ],
      inclusions: [
        "Monthly compliance review",
        "Deadline reminders",
        "Filing status tracking",
        "Annual compliance report"
      ],
      pricing: "₹2,999/month",
      timeline: "Ongoing support"
    },
    {
      title: "Penalty & Default Removal",
      description: "Resolution of ROC defaults and penalty removal",
      icon: AlertTriangle,
      features: [
        "Default status analysis",
        "Penalty calculation and payment",
        "Compounding application",
        "Status restoration"
      ],
      inclusions: [
        "Default assessment",
        "Penalty payment assistance",
        "Legal documentation",
        "Status restoration certificate"
      ],
      pricing: "₹8,999 - ₹25,999",
      timeline: "15-30 business days"
    }
  ];

  const mandatoryFilings = [
    {
      form: "AOC-4",
      title: "Financial Statements",
      dueDate: "30 days from AGM",
      penalty: "₹100/day + ₹5 per member",
      frequency: "Annual",
      description: "Filing of audited financial statements including Balance Sheet and P&L",
      applicability: "All Private & Public Companies"
    },
    {
      form: "MGT-7",
      title: "Annual Return",
      dueDate: "60 days from AGM",
      penalty: "₹100/day + ₹5 per member",
      frequency: "Annual",
      description: "Annual return containing company details, shareholding, and compliance",
      applicability: "All Private & Public Companies"
    },
    {
      form: "DIR-3 KYC",
      title: "Director KYC",
      dueDate: "30th September",
      penalty: "₹5,000 per director",
      frequency: "Annual",
      description: "Know Your Customer filing for all directors",
      applicability: "All Directors"
    },
    {
      form: "ADT-1",
      title: "Auditor Appointment",
      dueDate: "15 days from appointment",
      penalty: "₹100/day",
      frequency: "Event-based",
      description: "Filing for appointment of statutory auditor",
      applicability: "Companies appointing auditors"
    },
    {
      form: "DIR-12",
      title: "Director Appointment",
      dueDate: "30 days from appointment",
      penalty: "₹100/day",
      frequency: "Event-based",
      description: "Filing for appointment of new directors",
      applicability: "Companies appointing directors"
    },
    {
      form: "SH-7",
      title: "Share Transfer",
      dueDate: "30 days from transfer",
      penalty: "₹100/day",
      frequency: "Event-based",
      description: "Filing for transfer of shares between parties",
      applicability: "Companies with share transfers"
    }
  ];

  const complianceCalendar = [
    {
      month: "April",
      filings: [
        "Conduct Annual General Meeting",
        "Approve annual accounts",
        "Declare dividend (if any)"
      ]
    },
    {
      month: "May",
      filings: [
        "File AOC-4 (within 30 days of AGM)",
        "File dividend declaration forms"
      ]
    },
    {
      month: "June",
      filings: [
        "File MGT-7 (within 60 days of AGM)",
        "Update statutory registers"
      ]
    },
    {
      month: "September",
      filings: [
        "FILE DIR-3 KYC for all directors",
        "Update director details"
      ]
    },
    {
      month: "December",
      filings: [
        "Prepare for next year AGM",
        "Board meetings for accounts approval"
      ]
    },
    {
      month: "Ongoing",
      filings: [
        "Event-based filings as required",
        "Monitor compliance deadlines"
      ]
    }
  ];

  const documentsRequired = [
    {
      category: "Financial Documents",
      documents: [
        "Audited financial statements",
        "Balance Sheet and P&L Account",
        "Cash flow statement",
        "Notes to accounts",
        "Auditor's report",
        "Board report and annexures"
      ]
    },
    {
      category: "Corporate Documents",
      documents: [
        "Minutes of board meetings",
        "Minutes of AGM/EGM",
        "Board resolutions",
        "Share transfer documents",
        "Register of members",
        "Register of directors"
      ]
    },
    {
      category: "Statutory Documents",
      documents: [
        "Form 3CA/3CB (if applicable)",
        "Related party transactions details",
        "CSR compliance report",
        "Secretarial audit report",
        "Cost audit report (if applicable)",
        "Annual return of previous year"
      ]
    },
    {
      category: "Supporting Documents",
      documents: [
        "Director KYC documents",
        "Digital signature certificates",
        "Bank statements and reconciliation",
        "Investment confirmations",
        "Loan agreements and confirmations",
        "Property documents and valuations"
      ]
    }
  ];

  const penaltyStructure = [
    {
      category: "Late Filing Penalties",
      violations: [
        {
          violation: "AOC-4 Late Filing",
          penalty: "₹100 per day + ₹5 per member",
          maximum: "₹5,00,000",
          notes: "Additional penalty under Section 137"
        },
        {
          violation: "MGT-7 Late Filing",
          penalty: "₹100 per day + ₹5 per member",
          maximum: "₹5,00,000",
          notes: "Company may be struck off for non-filing"
        },
        {
          violation: "DIR-3 KYC Default",
          penalty: "₹5,000 per director",
          maximum: "DIN deactivation",
          notes: "Director disqualification possible"
        }
      ]
    },
    {
      category: "Non-Compliance Consequences",
      violations: [
        {
          violation: "Repeated Non-Filing",
          penalty: "Strike off proceedings",
          maximum: "Company dissolution",
          notes: "Section 248 strike off process"
        },
        {
          violation: "Director Disqualification",
          penalty: "₹1,00,000 fine",
          maximum: "5 years imprisonment",
          notes: "Under Section 164(2)"
        },
        {
          violation: "False Information",
          penalty: "₹1,00,000 to ₹5,00,000",
          maximum: "3 years imprisonment",
          notes: "Criminal prosecution possible"
        }
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "Timely Filing",
      description: "Never miss ROC deadlines with our systematic tracking and filing process",
      features: [
        "Advanced deadline tracking",
        "Automated reminders",
        "Priority filing system",
        "24/7 status updates"
      ]
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Qualified company secretaries and chartered accountants handling your compliance",
      features: [
        "CS & CA qualified team",
        "15+ years experience",
        "Corporate law expertise",
        "Regulatory updates"
      ]
    },
    {
      icon: Shield,
      title: "100% Compliance",
      description: "Guaranteed compliance with all Companies Act provisions and ROC requirements",
      features: [
        "Complete compliance coverage",
        "Zero penalty track record",
        "Legal backing",
        "Risk mitigation"
      ]
    },
    {
      icon: Award,
      title: "End-to-End Service",
      description: "Complete ROC compliance management from filing to status monitoring",
      features: [
        "Document preparation",
        "Filing and follow-up",
        "Status verification",
        "Ongoing support"
      ]
    }
  ];

  const commonDefaults = [
    {
      issue: "Late Filing of Annual Returns",
      impact: "High",
      consequences: [
        "Daily penalty accumulation",
        "Additional compliance burden",
        "Strike off proceedings risk",
        "Director disqualification"
      ],
      solution: "Immediate filing with penalty payment and compounding application"
    },
    {
      issue: "Non-Filing of Financial Statements",
      impact: "High",
      consequences: [
        "Section 137 penalty",
        "Auditor resignation",
        "Regulatory scrutiny",
        "Business disruption"
      ],
      solution: "Urgent AOC-4 filing with board resolution and audit completion"
    },
    {
      issue: "Director KYC Default",
      impact: "Medium",
      consequences: [
        "DIN deactivation",
        "Director disqualification",
        "Board composition issues",
        "Governance problems"
      ],
      solution: "DIR-3 KYC filing with penalty payment and regularization"
    },
    {
      issue: "Registered Office Non-Compliance",
      impact: "Medium",
      consequences: [
        "Notice non-receipt",
        "Communication breakdown",
        "Regulatory notices",
        "Service of process issues"
      ],
      solution: "Office verification and address regularization with ROC"
    }
  ];

  const getImpactColor = (impact) => {
    switch (impact.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'low':
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
              ROC Filing Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Complete <span className="text-primary-600">ROC Compliance Solutions</span>
            </h1>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Stay compliant with all ROC filing requirements. Expert handling of annual returns, 
              financial statements, and event-based filings with zero penalties guaranteed.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "1000+", label: "ROC Filings Done" },
              { number: "Zero", label: "Penalty Cases" },
              { number: "24h", label: "Filing Support" },
              { number: "100%", label: "Success Rate" }
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

      {/* ROC Services */}
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
              Our ROC Filing Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Comprehensive ROC compliance solutions for all your corporate filing needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {rocServices.map((service, index) => (
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
                    <h4 className="font-semibold text-secondary-900 mb-3">What's Included</h4>
                    <div className="space-y-2">
                      {service.inclusions.map((inclusion, inclusionIndex) => (
                        <div key={inclusionIndex} className="flex items-center">
                          <Award className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-secondary-700">{inclusion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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

      {/* Mandatory Filings */}
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
              Mandatory ROC Filings
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Complete list of mandatory filings with due dates and penalties
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Form</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Due Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Penalty</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Frequency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {mandatoryFilings.map((filing, index) => (
                    <motion.tr
                      key={index}
                      className="hover:bg-neutral-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <td className="px-6 py-4 font-bold text-primary-600">
                        {filing.form}
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-secondary-900">{filing.title}</div>
                          <div className="text-sm text-secondary-600">{filing.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-secondary-700">
                        {filing.dueDate}
                      </td>
                      <td className="px-6 py-4 text-red-600 font-medium text-sm">
                        {filing.penalty}
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                          {filing.frequency}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Calendar */}
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
              Annual Compliance Calendar
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Month-wise breakdown of important ROC compliance activities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {complianceCalendar.map((month, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -3 }}
              >
                <h4 className="font-bold text-secondary-900 mb-4 text-lg flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary-600" />
                  {month.month}
                </h4>
                
                <ul className="space-y-3">
                  {month.filings.map((filing, filingIndex) => (
                    <li
                      key={filingIndex}
                      className="flex items-start text-secondary-600"
                    >
                      <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-success-500 flex-shrink-0" />
                      <span className="text-sm">{filing}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
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
              Documents Required for ROC Filing
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Comprehensive checklist of documents needed for various ROC filings
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

      {/* Penalty Structure */}
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
              Penalty Structure & Consequences
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Understanding penalties for non-compliance and their serious consequences
            </p>
          </motion.div>

          <div className="space-y-8">
            {penaltyStructure.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.violations.map((violation, index) => (
                    <div key={index} className="grid md:grid-cols-4 gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
                      <div>
                        <div className="font-semibold text-secondary-900 text-sm">
                          {violation.violation}
                        </div>
                      </div>
                      <div>
                        <div className="text-red-600 font-medium text-sm">
                          {violation.penalty}
                        </div>
                      </div>
                      <div>
                        <div className="text-red-700 font-medium text-sm">
                          Max: {violation.maximum}
                        </div>
                      </div>
                      <div>
                        <div className="text-secondary-600 text-sm">
                          {violation.notes}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Defaults */}
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
              Common ROC Defaults & Solutions
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Typical compliance issues and their effective resolution strategies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {commonDefaults.map((defaultItem, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-secondary-900">
                    {defaultItem.issue}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getImpactColor(defaultItem.impact)}`}>
                    {defaultItem.impact} Impact
                  </span>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Consequences</h4>
                  <div className="space-y-2">
                    {defaultItem.consequences.map((consequence, conseqIndex) => (
                      <div key={conseqIndex} className="flex items-center">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-secondary-700 text-sm">{consequence}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-success-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-success-800 mb-2">Solution</h4>
                  <p className="text-success-700 text-sm">{defaultItem.solution}</p>
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
              Why Choose Our ROC Filing Services?
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Experience hassle-free ROC compliance with our expert team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {whyChooseUs.map((benefit, index) => (
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

      {/* Process Section */}
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
              Our ROC Filing Process
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Streamlined process ensuring timely and accurate ROC filings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Document Collection",
                description: "Gather all required documents and financial statements"
              },
              {
                step: "2", 
                title: "Review & Verification",
                description: "Thorough review and verification of all documents"
              },
              {
                step: "3",
                title: "Form Preparation",
                description: "Accurate preparation of required ROC forms"
              },
              {
                step: "4",
                title: "Digital Filing",
                description: "Online submission with digital signatures"
              },
              {
                step: "5",
                title: "Confirmation & Follow-up",
                description: "Filing confirmation and status tracking"
              }
            ].map((step, index) => (
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
                  {index < 4 && (
                    <div className="hidden xl:block absolute top-8 left-full w-full h-0.5 bg-primary-200 -translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Common questions about ROC filing and compliance requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What happens if ROC filing is delayed?",
                answer: "Late ROC filing attracts penalties starting from ₹100 per day plus additional charges. Extended delays can lead to strike-off proceedings and director disqualification."
              },
              {
                question: "Is digital signature mandatory for ROC filing?",
                answer: "Yes, digital signatures are mandatory for ROC filings. Both directors and authorized signatories need valid DSC for filing various forms."
              },
              {
                question: "What is the penalty for non-filing of AOC-4?",
                answer: "Penalty for late filing of AOC-4 is ₹100 per day plus ₹5 per member, with additional provisions under Section 137 of Companies Act."
              },
              {
                question: "Can ROC filing be done after strike-off notice?",
                answer: "Yes, companies can file pending returns and apply for restoration even after receiving strike-off notice, but additional fees and procedures apply."
              },
              {
                question: "What documents are required for annual filing?",
                answer: "Key documents include audited financial statements, annual return, board resolutions, AGM minutes, and various regulatory compliance documents."
              },
              {
                question: "How to check ROC filing status online?",
                answer: "ROC filing status can be checked on MCA website using company CIN or form submission receipt number. We provide regular status updates to clients."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h4 className="font-semibold text-secondary-900 mb-3">
                  {faq.question}
                </h4>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {faq.answer}
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
              Need ROC Filing Assistance?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Don't let ROC compliance become a burden. Get expert assistance for all your 
              ROC filing needs with guaranteed timely submission and zero penalties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg"
              >
                Get ROC Filing Done
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

export default ROCFilingServices;