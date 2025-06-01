import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Shield, Award, TrendingUp, FileText, Building, Globe, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const LLPRegistration = () => {
  const llpServices = [
    {
      title: "LLP Registration",
      description: "Complete LLP incorporation with all legal formalities",
      icon: Building,
      features: [
        "Name reservation and approval",
        "LLP Agreement drafting",
        "DPIN allocation for partners",
        "Certificate of incorporation"
      ],
      inclusions: [
        "Form FiLLiP filing",
        "LLP Agreement (customized)",
        "DPIN for 2 partners",
        "Digital signature support"
      ],
      pricing: "₹6,999",
      timeline: "7-10 business days"
    },
    {
      title: "LLP Compliance",
      description: "Annual compliance and statutory filing services",
      icon: FileText,
      features: [
        "Annual filing (Form 11)",
        "Statement of accounts filing",
        "Income tax return filing",
        "ROC compliance management"
      ],
      inclusions: [
        "Form 11 preparation",
        "Financial statements",
        "Annual return filing",
        "Compliance calendar"
      ],
      pricing: "₹4,999/year",
      timeline: "Ongoing support"
    },
    {
      title: "LLP Conversion",
      description: "Convert existing business to LLP structure",
      icon: TrendingUp,
      features: [
        "Partnership to LLP conversion",
        "Private company to LLP",
        "Asset transfer assistance",
        "Legal documentation"
      ],
      inclusions: [
        "Conversion application",
        "Asset valuation support",
        "Legal formalities",
        "Registration certificates"
      ],
      pricing: "₹12,999",
      timeline: "15-20 business days"
    },
    {
      title: "LLP Modifications",
      description: "Changes in LLP structure and agreements",
      icon: Users,
      features: [
        "Partner addition/removal",
        "LLP agreement amendments",
        "Registered office change",
        "Capital contribution changes"
      ],
      inclusions: [
        "Amendment applications",
        "Updated agreements",
        "ROC filings",
        "Compliance updates"
      ],
      pricing: "₹2,999 onwards",
      timeline: "5-7 business days"
    }
  ];

  const llpAdvantages = [
    {
      icon: Shield,
      title: "Limited Liability",
      description: "Partners have limited liability protection, personal assets are protected from business debts",
      details: [
        "Personal assets protection",
        "Limited liability for partners",
        "Protection from partner defaults",
        "Separate legal entity status"
      ]
    },
    {
      icon: TrendingUp,
      title: "Operational Flexibility",
      description: "Flexible management structure with minimal compliance requirements",
      details: [
        "No mandatory board meetings",
        "Flexible profit sharing",
        "Simple decision making",
        "Easy management structure"
      ]
    },
    {
      icon: Calculator,
      title: "Tax Benefits",
      description: "Pass-through taxation and various tax advantages",
      details: [
        "No double taxation",
        "Direct taxation on partners",
        "Tax efficient structure",
        "Deduction benefits"
      ]
    },
    {
      icon: Globe,
      title: "Business Credibility",
      description: "Enhanced credibility with customers, vendors, and financial institutions",
      details: [
        "Professional business image",
        "Better bank relationships",
        "Vendor confidence",
        "Investment opportunities"
      ]
    }
  ];

  const registrationProcess = [
    {
      step: "1",
      title: "Name Reservation",
      description: "Reserve unique LLP name with MCA",
      activities: [
        "Name availability search",
        "Form RUN-LLP filing",
        "Name approval waiting",
        "Name reservation certificate"
      ],
      timeline: "1-2 days",
      documents: ["Proposed names list", "Name approval form"]
    },
    {
      step: "2",
      title: "DPIN Allocation",
      description: "Obtain Designated Partner Identification Number",
      activities: [
        "DPIN application filing",
        "Partner verification",
        "DPIN certificate issuance",
        "Digital signature preparation"
      ],
      timeline: "2-3 days",
      documents: ["Partner PAN cards", "Address proofs", "ID proofs"]
    },
    {
      step: "3",
      title: "LLP Agreement",
      description: "Draft comprehensive LLP agreement",
      activities: [
        "Agreement drafting",
        "Partner consultation",
        "Terms finalization",
        "Legal review"
      ],
      timeline: "2-3 days",
      documents: ["Business details", "Partner contributions", "Profit sharing ratio"]
    },
    {
      step: "4",
      title: "Form FiLLiP Filing",
      description: "File incorporation application with MCA",
      activities: [
        "Form preparation",
        "Document compilation",
        "Online submission",
        "Application tracking"
      ],
      timeline: "1 day",
      documents: ["All prepared documents", "LLP Agreement", "DPIN certificates"]
    },
    {
      step: "5",
      title: "Certificate Issuance",
      description: "Receive LLP incorporation certificate",
      activities: [
        "Application processing",
        "Certificate generation",
        "LLP registration completion",
        "Post-incorporation setup"
      ],
      timeline: "3-5 days",
      documents: ["Certificate of incorporation", "LLP registration number"]
    }
  ];

  const documentsRequired = [
    {
      category: "Partner Documents",
      documents: [
        "PAN card of all designated partners",
        "Aadhaar card/Voter ID/Passport",
        "Recent passport size photographs",
        "Educational qualification certificates",
        "Experience certificates (if any)",
        "Residential address proof"
      ]
    },
    {
      category: "Registered Office",
      documents: [
        "Registered office address proof",
        "Rent agreement/Lease deed",
        "No objection certificate from owner",
        "Utility bills (electricity/telephone)",
        "Property tax receipt",
        "Society NOC (if applicable)"
      ]
    },
    {
      category: "Business Documents",
      documents: [
        "LLP Agreement (to be prepared)",
        "Consent of designated partners",
        "Business plan and activities",
        "Capital contribution details",
        "Bank account opening documents",
        "Professional qualification proofs"
      ]
    },
    {
      category: "Additional Documents",
      documents: [
        "Digital signature certificates",
        "Form DIR-12 (if converting)",
        "Board resolution (for conversion)",
        "Audited financial statements",
        "NOC from existing partners",
        "Asset transfer documents"
      ]
    }
  ];

  const complianceRequirements = [
    {
      frequency: "Annual",
      requirement: "Form 11 (Annual Return)",
      dueDate: "30th May",
      penalty: "₹100/day + ₹5 per partner",
      description: "Annual filing with statement of accounts and solvency"
    },
    {
      frequency: "Annual",
      requirement: "Statement of Accounts",
      dueDate: "30th October",
      penalty: "₹100/day",
      description: "Filing of financial statements if turnover > ₹40 Lakhs"
    },
    {
      frequency: "Annual",
      requirement: "Income Tax Return",
      dueDate: "31st October",
      penalty: "₹5,000 + interest",
      description: "LLP income tax return filing"
    },
    {
      frequency: "Event Based",
      requirement: "Changes/Modifications",
      dueDate: "30 days from change",
      penalty: "₹100/day",
      description: "Any changes in partners, agreement, or registered office"
    }
  ];

  const llpVsOthers = [
    {
      parameter: "Liability",
      llp: "Limited liability for partners",
      partnership: "Unlimited liability",
      company: "Limited liability for shareholders",
      winner: "LLP/Company"
    },
    {
      parameter: "Compliance",
      llp: "Minimal compliance requirements",
      partnership: "Very simple",
      company: "High compliance burden",
      winner: "Partnership"
    },
    {
      parameter: "Taxation",
      llp: "Pass-through taxation",
      partnership: "Pass-through taxation",
      company: "Double taxation",
      winner: "LLP/Partnership"
    },
    {
      parameter: "Credibility",
      llp: "High business credibility",
      partnership: "Moderate credibility",
      company: "Highest credibility",
      winner: "Company"
    },
    {
      parameter: "Fundraising",
      llp: "Limited options",
      partnership: "Very limited",
      company: "Multiple options",
      winner: "Company"
    },
    {
      parameter: "Perpetual Succession",
      llp: "Yes, independent existence",
      partnership: "No, dissolves on exit",
      company: "Yes, independent existence",
      winner: "LLP/Company"
    }
  ];

  const eligibilityCriteria = [
    {
      title: "Minimum Requirements",
      criteria: [
        "Minimum 2 designated partners required",
        "At least one partner must be Indian resident",
        "Maximum partners - no limit specified",
        "Minimum capital contribution - no requirement"
      ]
    },
    {
      title: "Partner Qualifications",
      criteria: [
        "Individual or body corporate can be partner",
        "Foreign nationals can be partners",
        "Professional qualifications beneficial",
        "Business experience preferred"
      ]
    },
    {
      title: "Business Activities",
      criteria: [
        "Any lawful business activity allowed",
        "Professional services preferred structure",
        "Trading, manufacturing, services - all permitted",
        "Banking and insurance activities restricted"
      ]
    },
    {
      title: "Restricted Activities",
      criteria: [
        "Banking business not permitted",
        "Insurance business not allowed",
        "Non-banking financial company restrictions",
        "Investment in stock exchange membership"
      ]
    }
  ];

  const getWinnerColor = (winner, current) => {
    if (winner.toLowerCase().includes(current.toLowerCase())) {
      return 'bg-success-100 text-success-700 font-semibold';
    }
    return 'bg-neutral-100 text-neutral-700';
  };

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
              LLP Registration
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Register Your <span className="text-success-600">Limited Liability Partnership</span>
            </h1>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Get the perfect blend of partnership flexibility and corporate benefits. 
              LLP registration with complete legal compliance and expert guidance.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "₹6,999", label: "Starting Price" },
              { number: "7-10", label: "Days Process" },
              { number: "150+", label: "LLPs Registered" },
              { number: "100%", label: "Success Rate" }
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

      {/* LLP Services */}
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
              Our LLP Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Comprehensive LLP solutions from registration to ongoing compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {llpServices.map((service, index) => (
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
                  <div className="p-3 bg-success-100 rounded-xl">
                    <service.icon className="w-8 h-8 text-success-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-success-600">
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
                          <Award className="w-4 h-4 text-success-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-secondary-700">{inclusion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-success-500 to-success-700 text-white px-6 py-3 rounded-xl font-semibold text-center hover:from-success-600 hover:to-success-800 transition-all duration-300"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LLP Advantages */}
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
              Advantages of LLP Structure
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Why LLP is the preferred choice for modern businesses and professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {llpAdvantages.map((advantage, index) => (
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
                  <div className="p-3 bg-success-100 rounded-xl">
                    <advantage.icon className="w-8 h-8 text-success-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {advantage.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {advantage.details.map((detail, detailIndex) => (
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

      {/* Registration Process */}
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
              LLP Registration Process
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Step-by-step process for seamless LLP registration
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
                transition={{ delay: index * 0.1, duration: 0.6 }}
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
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-3">Activities</h4>
                        <div className="space-y-2">
                          {step.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-center">
                              <TrendingUp className="w-4 h-4 text-success-500 mr-2" />
                              <span className="text-sm text-secondary-700">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-3">Documents</h4>
                        <div className="space-y-2">
                          {step.documents.map((document, docIndex) => (
                            <div key={docIndex} className="flex items-center">
                              <FileText className="w-4 h-4 text-success-500 mr-2" />
                              <span className="text-sm text-secondary-700">{document}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
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
              Documents Required
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Complete list of documents needed for LLP registration
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
                      <FileText className="w-4 h-4 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{document}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
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
              Requirements and qualifications for LLP registration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {eligibilityCriteria.map((criteria, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -3 }}
              >
                <h4 className="font-bold text-secondary-900 mb-4 text-lg">
                  {criteria.title}
                </h4>
                
                <ul className="space-y-3">
                  {criteria.criteria.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start text-secondary-600"
                    >
                      <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-success-500 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LLP vs Others Comparison */}
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
              LLP vs Other Business Structures
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Compare LLP with partnership and company structures
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-success-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Parameter</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-secondary-900">LLP</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-secondary-900">Partnership</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-secondary-900">Company</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {llpVsOthers.map((comparison, index) => (
                    <motion.tr
                      key={index}
                      className="hover:bg-neutral-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <td className="px-6 py-4 font-medium text-secondary-900">
                        {comparison.parameter}
                      </td>
                      <td className={`px-6 py-4 text-center text-sm ${getWinnerColor(comparison.winner, 'partnership')}`}>
                        {comparison.partnership}
                      </td>
                      <td className={`px-6 py-4 text-center text-sm ${getWinnerColor(comparison.winner, 'company')}`}>
                        {comparison.company}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
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
              LLP Compliance Requirements
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Ongoing compliance obligations for LLP operations
            </p>
          </motion.div>

          <div className="space-y-6">
            {complianceRequirements.map((requirement, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div>
                    <span className="bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm font-medium">
                      {requirement.frequency}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-secondary-900 mb-1">
                      {requirement.requirement}
                    </h4>
                    <p className="text-secondary-600 text-sm">
                      Due: {requirement.dueDate}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-red-600 font-medium text-sm">
                      Penalty: {requirement.penalty}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-secondary-600 text-sm">
                      {requirement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Our LLP Services?
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Experience hassle-free LLP registration with our expert guidance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Quick Registration",
                description: "Fast and efficient LLP registration process within 7-10 days"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Qualified professionals with extensive LLP registration experience"
              },
              {
                icon: Shield,
                title: "100% Compliance",
                description: "Complete legal compliance with all MCA requirements and regulations"
              },
              {
                icon: Award,
                title: "Post-Registration Support",
                description: "Ongoing support for compliance, modifications, and business growth"
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

      {/* Frequently Asked Questions */}
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
              Common questions about LLP registration and operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What is the minimum capital required for LLP?",
                answer: "There is no minimum capital requirement for LLP registration. Partners can contribute any amount as per the LLP agreement."
              },
              {
                question: "Can foreign nationals be partners in Indian LLP?",
                answer: "Yes, foreign nationals can be partners in LLP, but at least one designated partner must be an Indian resident."
              },
              {
                question: "Is audit mandatory for LLP?",
                answer: "Audit is mandatory if LLP's contribution exceeds ₹25 lakhs or turnover exceeds ₹40 lakhs in any financial year."
              },
              {
                question: "Can LLP be converted to a company later?",
                answer: "Yes, LLP can be converted to a private or public company as per the provisions of Companies Act and LLP Act."
              },
              {
                question: "What happens if LLP compliance is not done?",
                answer: "Non-compliance attracts penalties ranging from ₹100 per day plus additional charges as specified in the LLP Act."
              },
              {
                question: "Is GST registration required for LLP?",
                answer: "GST registration is required if LLP's annual turnover exceeds ₹20 lakhs (₹10 lakhs for special category states)."
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
      <section className="py-16 bg-gradient-to-r from-success-500 to-success-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Register Your LLP?
            </h2>
            <p className="text-xl text-success-100 mb-8 max-w-3xl mx-auto">
              Get the perfect business structure with limited liability and operational flexibility. 
              Start your LLP registration journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-success-600 px-8 py-4 rounded-xl font-semibold hover:bg-success-50 transition-all duration-300 shadow-lg"
              >
                Start LLP Registration
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

export default LLPRegistration;