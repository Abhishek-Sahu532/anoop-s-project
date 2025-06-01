import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Shield, Award, AlertTriangle, FileText, Building, Heart, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const LabourDepartmentServices = () => {
  const labourServices = [
    {
      title: "Labour License Registration",
      description: "Complete labour license registration for establishments",
      icon: Building,
      features: [
        "Contract Labour License",
        "Factory License registration",
        "Shops & Establishment License",
        "Interstate Migrant License"
      ],
      inclusions: [
        "Application preparation",
        "Document compilation",
        "Government liaison",
        "License certificate"
      ],
      pricing: "₹4,999 - ₹15,999",
      timeline: "15-30 business days"
    },
    {
      title: "Labour Compliance Management",
      description: "Ongoing compliance with all labour law requirements",
      icon: Shield,
      features: [
        "Monthly compliance monitoring",
        "Statutory register maintenance",
        "Policy documentation",
        "Audit and inspection support"
      ],
      inclusions: [
        "Compliance calendar",
        "Register maintenance",
        "Policy drafting",
        "Inspector handling"
      ],
      pricing: "₹2,999/month",
      timeline: "Ongoing support"
    },
    {
      title: "Wage & Benefits Management",
      description: "Complete wage structure and benefits administration",
      icon: Calculator,
      features: [
        "Minimum wage compliance",
        "Overtime calculation",
        "Bonus and gratuity computation",
        "Leave and holiday management"
      ],
      inclusions: [
        "Wage structure design",
        "Benefit calculations",
        "Payment processing",
        "Compliance verification"
      ],
      pricing: "₹1,999/month",
      timeline: "Monthly processing"
    },
    {
      title: "Employee Welfare Services",
      description: "Employee welfare and safety compliance services",
      icon: Heart,
      features: [
        "Safety policy implementation",
        "Welfare committee formation",
        "Medical benefit administration",
        "Grievance redressal system"
      ],
      inclusions: [
        "Safety audit",
        "Committee setup",
        "Welfare schemes",
        "Grievance handling"
      ],
      pricing: "₹3,999/quarter",
      timeline: "Quarterly review"
    }
  ];

  const licenseTypes = [
    {
      license: "Contract Labour License",
      threshold: "20+ contract workers",
      validity: "5 years",
      applicableActs: [
        "Contract Labour (R&A) Act, 1970",
        "Central/State Rules",
        "Minimum Wages Act",
        "Payment of Wages Act"
      ],
      requirements: [
        "Establishment registration",
        "Contractor registration", 
        "Security deposit",
        "Compliance certificate"
      ],
      penalty: "₹1,000 to ₹10,000 + imprisonment"
    },
    {
      license: "Factory License",
      threshold: "10+ workers with power / 20+ without power",
      validity: "12 months (renewable)",
      applicableActs: [
        "Factories Act, 1948",
        "State Factory Rules",
        "Occupational Safety Act",
        "Environmental Laws"
      ],
      requirements: [
        "Factory plan approval",
        "Safety measures",
        "Pollution clearance",
        "Medical facilities"
      ],
      penalty: "₹25,000 to ₹2,00,000 + closure"
    },
    {
      license: "Shops & Establishment",
      threshold: "All commercial establishments",
      validity: "5 years (varies by state)",
      applicableActs: [
        "Shops & Establishment Act",
        "State-specific rules",
        "Working hours regulations",
        "Holiday provisions"
      ],
      requirements: [
        "Business registration",
        "Employee details",
        "Working hour compliance",
        "Holiday schedule"
      ],
      penalty: "₹500 to ₹5,000 per violation"
    },
    {
      license: "Interstate Migrant License",
      threshold: "5+ interstate migrant workers",
      validity: "5 years",
      applicableActs: [
        "Interstate Migrant Workers Act",
        "Minimum Wages Act",
        "Payment of Wages Act",
        "Equal Remuneration Act"
      ],
      requirements: [
        "Contractor registration",
        "Worker details",
        "Journey allowance",
        "Return journey provision"
      ],
      penalty: "₹500 to ₹2,000 + imprisonment"
    }
  ];

  const complianceRequirements = [
    {
      area: "Wage & Payment Compliance",
      frequency: "Monthly",
      requirements: [
        "Minimum wage payment verification",
        "Overtime calculation and payment",
        "Wage register maintenance",
        "Payment within prescribed time",
        "Wage slip issuance",
        "Bank payment compliance"
      ],
      penalties: "₹1,000 to ₹10,000 per violation"
    },
    {
      area: "Working Hours & Leave",
      frequency: "Daily/Weekly",
      requirements: [
        "Maximum 48 hours per week",
        "Daily 9 hours maximum",
        "Weekly rest day provision",
        "Annual leave entitlement",
        "Sick leave provisions",
        "Maternity leave compliance"
      ],
      penalties: "₹500 to ₹5,000 per violation"
    },
    {
      area: "Safety & Welfare",
      frequency: "Ongoing",
      requirements: [
        "Safety equipment provision",
        "First aid facilities",
        "Drinking water arrangement",
        "Rest room facilities",
        "Canteen facilities (if applicable)",
        "Crèche facilities (if applicable)"
      ],
      penalties: "₹25,000 to ₹1,00,000 + closure"
    },
    {
      area: "Record Maintenance",
      frequency: "Daily",
      requirements: [
        "Attendance register",
        "Wage register",
        "Overtime register",
        "Leave register",
        "Accident register",
        "Medical examination records"
      ],
      penalties: "₹1,000 to ₹5,000 per missing record"
    }
  ];

  const statutoryRegisters = [
    {
      register: "Muster Roll",
      purpose: "Daily attendance recording",
      details: "Record of daily attendance, working hours, overtime",
      retention: "3 years",
      inspectionFreq: "Monthly"
    },
    {
      register: "Wage Register",
      purpose: "Wage payment details",
      details: "Detailed wage calculation, deductions, net payment",
      retention: "3 years", 
      inspectionFreq: "Monthly"
    },
    {
      register: "Overtime Register",
      purpose: "Overtime work recording",
      details: "Extra hours worked, overtime rate, payment details",
      retention: "3 years",
      inspectionFreq: "Monthly"
    },
    {
      register: "Leave Register",
      purpose: "Leave entitlement tracking",
      details: "Leave earned, taken, balance, leave with wages",
      retention: "3 years",
      inspectionFreq: "Quarterly"
    },
    {
      register: "Accident Register",
      purpose: "Workplace accident recording",
      details: "Accident details, injury description, action taken",
      retention: "5 years",
      inspectionFreq: "As required"
    },
    {
      register: "Medical Register",
      purpose: "Health examination records",
      details: "Pre-employment and periodic medical examination",
      retention: "5 years",
      inspectionFreq: "Annually"
    }
  ];

  const inspectionProcess = [
    {
      stage: "Pre-Inspection",
      activities: [
        "Notice receipt and verification",
        "Document preparation",
        "Register updates",
        "Policy compliance check"
      ],
      timeline: "2-3 days before inspection"
    },
    {
      stage: "During Inspection",
      activities: [
        "Inspector coordination",
        "Document presentation",
        "Worker interview facilitation",
        "Compliance demonstration"
      ],
      timeline: "1-3 hours typically"
    },
    {
      stage: "Post-Inspection",
      activities: [
        "Report review",
        "Non-compliance rectification",
        "Response submission",
        "Follow-up coordination"
      ],
      timeline: "7-15 days for response"
    }
  ];

  const labourActs = [
    {
      act: "Minimum Wages Act, 1948",
      coverage: "All employees",
      keyProvisions: [
        "Minimum wage rates",
        "Revision of wages",
        "Payment within time",
        "Overtime calculation"
      ],
      penalties: "₹500 to ₹10,000 + imprisonment"
    },
    {
      act: "Payment of Wages Act, 1936",
      coverage: "Employees earning up to ₹24,000/month",
      keyProvisions: [
        "Timely wage payment",
        "Authorized deductions only",
        "Wage slip provision",
        "Payment in legal tender"
      ],
      penalties: "Compensation + ₹1,000 to ₹5,000"
    },
    {
      act: "Contract Labour Act, 1970",
      coverage: "Contract workers",
      keyProvisions: [
        "License for contractors",
        "Welfare facilities",
        "Equal treatment",
        "Social security benefits"
      ],
      penalties: "₹1,000 to ₹10,000 + imprisonment"
    },
    {
      act: "Factories Act, 1948", 
      coverage: "Manufacturing establishments",
      keyProvisions: [
        "Working hours limits",
        "Safety measures",
        "Health provisions",
        "Welfare facilities"
      ],
      penalties: "₹25,000 to ₹2,00,000 + closure"
    },
    {
      act: "Industrial Disputes Act, 1947",
      coverage: "All industrial establishments",
      keyProvisions: [
        "Dispute resolution",
        "Retrenchment procedures",
        "Closure notifications",
        "Standing orders"
      ],
      penalties: "₹1,000 to ₹10,000 + imprisonment"
    },
    {
      act: "Employees' Compensation Act, 2010",
      coverage: "All employees",
      keyProvisions: [
        "Accident compensation",
        "Occupational disease coverage",
        "Medical treatment",
        "Disability benefits"
      ],
      penalties: "₹10,000 to ₹50,000"
    }
  ];

  const riskMitigation = [
    {
      risk: "Inspector Raids & Penalties",
      impact: "High",
      preventiveMeasures: [
        "Regular compliance audits",
        "Updated statutory registers",
        "Policy documentation",
        "Staff training programs"
      ],
      ourSolution: "24/7 compliance monitoring and inspector handling support"
    },
    {
      risk: "Employee Grievances",
      impact: "Medium",
      preventiveMeasures: [
        "Clear grievance procedures",
        "Regular worker meetings",
        "Fair wage practices",
        "Welfare committee formation"
      ],
      ourSolution: "Grievance redressal system setup and management"
    },
    {
      risk: "Wage & Hour Violations",
      impact: "High",
      preventiveMeasures: [
        "Automated time tracking",
        "Overtime management",
        "Minimum wage compliance",
        "Payment schedule adherence"
      ],
      ourSolution: "Comprehensive wage management and compliance system"
    },
    {
      risk: "Safety & Welfare Non-Compliance",
      impact: "High", 
      preventiveMeasures: [
        "Safety policy implementation",
        "Regular safety training",
        "Welfare facility provision",
        "Medical facility arrangement"
      ],
      ourSolution: "Complete safety and welfare compliance management"
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-neutral-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Labour Department Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Complete <span className="text-secondary-600">Labour Law Compliance</span>
            </h1>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive labour department services ensuring full compliance with all labour laws. 
              Protect your business from penalties and maintain harmonious employee relations.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Licenses Processed" },
              { number: "Zero", label: "Penalty Cases" },
              { number: "15+", label: "Labour Acts Covered" },
              { number: "24/7", label: "Compliance Support" }
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

      {/* Labour Services */}
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
              Our Labour Department Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              End-to-end labour compliance solutions for your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {labourServices.map((service, index) => (
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
                  <div className="p-3 bg-secondary-100 rounded-xl">
                    <service.icon className="w-8 h-8 text-secondary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-bold text-secondary-600">
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
                          <Award className="w-4 h-4 text-secondary-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-secondary-700">{inclusion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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

      {/* License Types */}
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
              Labour License Types
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Understanding different labour licenses and their requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {licenseTypes.map((license, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -3 }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {license.license}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full">
                      {license.threshold}
                    </span>
                    <span className="text-secondary-600">
                      Validity: {license.validity}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Applicable Acts</h4>
                    <div className="space-y-1">
                      {license.applicableActs.map((act, actIndex) => (
                        <div key={actIndex} className="flex items-center">
                          <FileText className="w-3 h-3 text-secondary-500 mr-2" />
                          <span className="text-sm text-secondary-700">{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Key Requirements</h4>
                    <div className="space-y-1">
                      {license.requirements.map((req, reqIndex) => (
                        <div key={reqIndex} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-success-500 mr-2" />
                          <span className="text-sm text-secondary-700">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-red-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-1">Penalty for Non-Compliance</h4>
                    <p className="text-red-700 text-sm">{license.penalty}</p>
                  </div>
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
              Key Compliance Areas
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Critical compliance requirements for labour law adherence
            </p>
          </motion.div>

          <div className="space-y-8">
            {complianceRequirements.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-secondary-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-secondary-900">
                    {area.area}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                      {area.frequency}
                    </span>
                    <span className="text-red-600 font-medium text-sm">
                      Penalty: {area.penalties}
                    </span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {area.requirements.map((requirement, reqIndex) => (
                    <div key={reqIndex} className="flex items-center p-3 bg-secondary-50 rounded-lg">
                      <Shield className="w-4 h-4 text-secondary-600 mr-3 flex-shrink-0" />
                      <span className="text-secondary-800 text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statutory Registers */}
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
              Mandatory Statutory Registers
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Essential registers required for labour law compliance
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Register</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Purpose</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Key Details</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Retention</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">Inspection</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {statutoryRegisters.map((register, index) => (
                    <motion.tr
                      key={index}
                      className="hover:bg-neutral-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <td className="px-6 py-4 font-medium text-secondary-900">
                        {register.register}
                      </td>
                      <td className="px-6 py-4 text-secondary-700">
                        {register.purpose}
                      </td>
                      <td className="px-6 py-4 text-secondary-600 text-sm">
                        {register.details}
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-sm">
                          {register.retention}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-secondary-600 text-sm">
                        {register.inspectionFreq}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Major Labour Acts */}
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
              Major Labour Acts & Provisions
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Key labour legislation and their important provisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {labourActs.map((act, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -3 }}
              >
                <h3 className="text-lg font-bold text-secondary-900 mb-3">
                  {act.act}
                </h3>
                
                <div className="mb-4">
                  <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                    {act.coverage}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-secondary-900 mb-2">Key Provisions</h4>
                  <div className="space-y-1">
                    {act.keyProvisions.map((provision, provIndex) => (
                      <div key={provIndex} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-success-500 mr-2" />
                        <span className="text-sm text-secondary-700">{provision}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-red-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-1">Penalties</h4>
                  <p className="text-red-700 text-sm">{act.penalties}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Process */}
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
              Labour Inspection Process
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Understanding the labour department inspection process and preparation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {inspectionProcess.map((stage, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-700 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {stage.stage}
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    {stage.timeline}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {stage.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-success-500 mr-3 flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{activity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
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
              Risk Mitigation Strategies
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Proactive strategies to minimize labour law compliance risks
            </p>
          </motion.div>

          <div className="space-y-8">
            {riskMitigation.map((risk, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-secondary-900">
                    {risk.risk}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getImpactColor(risk.impact)}`}>
                    {risk.impact} Risk
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">Preventive Measures</h4>
                    <div className="space-y-2">
                      {risk.preventiveMeasures.map((measure, measureIndex) => (
                        <div key={measureIndex} className="flex items-center">
                          <Shield className="w-4 h-4 text-secondary-500 mr-2" />
                          <span className="text-secondary-700 text-sm">{measure}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-secondary-900 mb-3">Our Solution</h4>
                    <div className="bg-success-50 p-4 rounded-lg">
                      <p className="text-success-800 font-medium">{risk.ourSolution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Our Labour Services?
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Expert labour law compliance with comprehensive protection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Complete Protection",
                description: "Comprehensive protection against all labour law violations and penalties",
                features: [
                  "Full legal compliance",
                  "Penalty protection",
                  "Inspector handling",
                  "Risk mitigation"
                ]
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Qualified labour law experts with extensive experience",
                features: [
                  "Labour law specialists",
                  "Government liaison",
                  "Inspector relations",
                  "Dispute resolution"
                ]
              },
              {
                icon: Clock,
                title: "Timely Compliance",
                description: "Proactive compliance management with deadline tracking",
                features: [
                  "Compliance calendar",
                  "Automated alerts",
                  "Regular updates",
                  "Timely submissions"
                ]
              },
              {
                icon: Award,
                title: "End-to-End Service",
                description: "Complete labour department services from licensing to compliance",
                features: [
                  "License procurement",
                  "Register maintenance",
                  "Policy documentation",
                  "Ongoing support"
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
                  <div className="inline-flex p-4 bg-secondary-100 rounded-2xl mb-4">
                    <benefit.icon className="w-8 h-8 text-secondary-600" />
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

      {/* Emergency Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-r from-red-500 to-red-700 rounded-2xl p-12 text-center text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Emergency Labour Department Support
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Facing a labour department inspection or notice? Get immediate expert assistance 
              to handle the situation and minimize any potential impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 shadow-lg"
              >
                Emergency Support - Call Now
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Schedule Urgent Consultation
              </Link>
            </div>
          </motion.div>
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
              Secure Your Business with Complete Labour Compliance
            </h2>
            <p className="text-xl text-secondary-100 mb-8 max-w-3xl mx-auto">
              Don't let labour law non-compliance put your business at risk. Get comprehensive 
              labour department services and maintain harmonious employee relations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-secondary-600 px-8 py-4 rounded-xl font-semibold hover:bg-secondary-50 transition-all duration-300 shadow-lg"
              >
                Start Compliance Management
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-secondary-600 transition-all duration-300"
              >
                Get Labour Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LabourDepartmentServices;