import { motion } from 'framer-motion';
import { CheckCircle, Clock, Shield, Users, Award, AlertTriangle, FileText, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComplianceServices = () => {
  const complianceServices = [
    {
      title: "PF Registration & Returns",
      description: "Complete Provident Fund compliance and management",
      features: [
        "PF registration for new companies",
        "Monthly PF return filing",
        "Employee PF account opening",
        "PF withdrawal processing"
      ],
      pricing: "₹2,999 registration + ₹999/month",
      timeline: "5-7 business days"
    },
    {
      title: "ESIC Registration & Returns",
      description: "Employee State Insurance Corporation compliance",
      features: [
        "ESIC registration",
        "Monthly ESIC return filing", 
        "Employee ESIC card processing",
        "Medical claim assistance"
      ],
      pricing: "₹2,499 registration + ₹799/month",
      timeline: "3-5 business days"
    },
    {
      title: "Labour Law Compliance",
      description: "Complete labour law compliance management",
      features: [
        "Labour license registration",
        "Contract labour compliance",
        "Factory license & renewals",
        "Labour welfare fund compliance"
      ],
      pricing: "₹4,999 setup + ₹1,999/month",
      timeline: "10-15 business days"
    },
    {
      title: "Professional Tax",
      description: "State-wise professional tax registration and compliance",
      features: [
        "Professional tax registration",
        "Monthly PT return filing",
        "PT certificate issuance",
        "Multi-state PT compliance"
      ],
      pricing: "₹1,999 registration + ₹499/month",
      timeline: "2-3 business days"
    }
  ];

  const annualCompliance = [
    {
      title: "Annual Compliance Calendar",
      description: "Never miss any compliance deadline",
      services: [
        "Customized compliance calendar",
        "Monthly deadline reminders",
        "Quarterly review meetings",
        "Annual compliance report"
      ]
    },
    {
      title: "Statutory Audit",
      description: "Mandatory audit services for qualifying companies",
      services: [
        "Financial statements audit",
        "Internal control evaluation",
        "Compliance verification",
        "Management letter"
      ]
    },
    {
      title: "Secretarial Audit",
      description: "Corporate governance and secretarial compliance",
      services: [
        "Board meetings compliance",
        "Secretarial standards audit",
        "Corporate governance review",
        "Secretarial audit report"
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "100% Compliance",
      description: "Guaranteed compliance with all applicable labour laws and regulations"
    },
    {
      icon: Clock,
      title: "Timely Filing",
      description: "Never miss deadlines with our automated reminder and filing system"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated compliance experts with deep knowledge of labour laws"
    },
    {
      icon: Award,
      title: "Zero Penalties",
      description: "Avoid penalties and legal issues with proactive compliance management"
    }
  ];

  const complianceChecklist = [
    {
      category: "Monthly Compliance",
      items: [
        "PF Returns (ECR)",
        "ESIC Returns", 
        "Professional Tax Returns",
        "TDS Returns",
        "Payroll Processing"
      ]
    },
    {
      category: "Quarterly Compliance",
      items: [
        "PF Quarterly Returns",
        "ESIC Quarterly Returns",
        "Labour Welfare Fund",
        "Bonus Calculation",
        "Gratuity Provisions"
      ]
    },
    {
      category: "Annual Compliance",
      items: [
        "Annual PF Returns",
        "ESIC Annual Returns",
        "Labour License Renewals",
        "Statutory Audit",
        "Annual Compliance Certificate"
      ]
    },
    {
      category: "Ongoing Compliance",
      items: [
        "New Joiner Registrations",
        "Exit Formalities",
        "Salary Revisions",
        "Policy Updates",
        "Legal Updates"
      ]
    }
  ];

  const riskFactors = [
    {
      icon: AlertTriangle,
      title: "Penalty Risks",
      description: "Late filing penalties can range from ₹1,000 to ₹1,00,000 depending on the violation"
    },
    {
      icon: FileText,
      title: "Legal Notices",
      description: "Non-compliance can result in legal notices and prosecution by authorities"
    },
    {
      icon: Users,
      title: "Employee Issues",
      description: "Non-compliance affects employee benefits and can lead to employee grievances"
    },
    {
      icon: Calendar,
      title: "Business Impact",
      description: "Compliance issues can affect business operations and reputation"
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
              Compliance Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Complete <span className="text-secondary-600">Compliance Management</span>
            </h1>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Stay compliant with all labour laws, PF, ESIC, and statutory requirements. 
              We handle your compliance so you can focus on growing your business.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "300+", label: "Companies Managed" },
              { number: "Zero", label: "Compliance Penalties" },
              { number: "24/7", label: "Support Available" },
              { number: "100%", label: "On-time Filing" }
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
              Our Compliance Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Comprehensive compliance solutions for all your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {complianceServices.map((service, index) => (
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

      {/* Risk Factors */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Risks of Non-Compliance
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Understand the serious consequences of not maintaining proper compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {riskFactors.map((risk, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-red-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex p-3 bg-red-100 rounded-xl mb-4">
                  <risk.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-3">
                  {risk.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {risk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Checklist */}
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
              Compliance Checklist
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Comprehensive checklist of all compliance requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {complianceChecklist.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -3 }}
              >
                <h4 className="font-bold text-secondary-900 mb-4 text-lg">
                  {category.category}
                </h4>
                
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
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

      {/* Annual Compliance */}
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
              Annual Compliance Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Comprehensive annual compliance management and audit services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {annualCompliance.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-success-500 mr-3 flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{item}</span>
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
              Why Choose Our Compliance Services?
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Experience peace of mind with our comprehensive compliance management
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
              Stay Compliant, Stay Worry-Free
            </h2>
            <p className="text-xl text-secondary-100 mb-8 max-w-3xl mx-auto">
              Don't let compliance issues hold your business back. Get expert 
              compliance management and focus on what you do best.
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
                Get Compliance Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComplianceServices;