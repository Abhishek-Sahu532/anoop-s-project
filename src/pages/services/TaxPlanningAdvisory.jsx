import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Calculator, Shield, Award, Users, FileText, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const TaxPlanningAdvisory = () => {
  const planningServices = [
    {
      title: "Personal Tax Planning",
      description: "Optimize individual tax liability through strategic planning",
      icon: Users,
      features: [
        "Salary structuring optimization",
        "Investment planning under 80C",
        "Capital gains tax planning",
        "HRA and LTA optimization"
      ],
      benefits: [
        "Save up to ₹1.5 Lakh annually",
        "Reduce tax liability legally",
        "Maximize take-home salary",
        "Plan for long-term wealth"
      ],
      pricing: "₹2,999/year"
    },
    {
      title: "Business Tax Planning",
      description: "Strategic tax planning for businesses and corporations",
      icon: TrendingUp,
      features: [
        "Business structure optimization",
        "Expense planning and timing",
        "Depreciation strategies",
        "Tax-efficient investments"
      ],
      benefits: [
        "Minimize corporate tax burden",
        "Improve cash flow",
        "Strategic business decisions",
        "Compliance with regulations"
      ],
      pricing: "₹9,999/year"
    },
    {
      title: "Investment Advisory",
      description: "Tax-efficient investment strategies and portfolio planning",
      icon: Target,
      features: [
        "ELSS mutual fund planning",
        "PPF and EPF optimization",
        "Tax-saving insurance planning",
        "Retirement planning strategies"
      ],
      benefits: [
        "Tax savings + wealth creation",
        "Diversified portfolio",
        "Risk management",
        "Long-term financial goals"
      ],
      pricing: "₹4,999/year"
    },
    {
      title: "Estate Planning",
      description: "Succession and wealth transfer planning",
      icon: Shield,
      features: [
        "Will and testament planning",
        "Trust structure advisory",
        "Succession planning",
        "Gift and inheritance tax"
      ],
      benefits: [
        "Minimize estate taxes",
        "Smooth wealth transfer",
        "Family financial security",
        "Legal compliance"
      ],
      pricing: "₹14,999/consultation"
    }
  ];

  const taxSavingStrategies = [
    {
      category: "Salary Optimization",
      strategies: [
        {
          strategy: "HRA Planning",
          description: "Optimize House Rent Allowance to save taxes",
          savings: "Up to ₹2 Lakh"
        },
        {
          strategy: "LTA Utilization",
          description: "Plan Leave Travel Allowance effectively",
          savings: "Up to ₹25,000"
        },
        {
          strategy: "Flexible Benefits",
          description: "Restructure salary with tax-free components",
          savings: "Up to ₹1 Lakh"
        }
      ]
    },
    {
      category: "Investment Planning",
      strategies: [
        {
          strategy: "Section 80C Investments",
          description: "PPF, ELSS, Insurance premium planning",
          savings: "₹46,800 (30% tax)"
        },
        {
          strategy: "Section 80D Planning",
          description: "Health insurance premium optimization",
          savings: "Up to ₹15,000"
        },
        {
          strategy: "NPS Investment",
          description: "Additional ₹50,000 deduction under 80CCD(1B)",
          savings: "₹15,000"
        }
      ]
    }
  ];

  const businessTaxStrategies = [
    {
      title: "Expense Optimization",
      strategies: [
        "Business meal expenses (50% deductible)",
        "Employee welfare expenses",
        "Research and development costs",
        "Marketing and advertising expenses",
        "Professional development costs"
      ]
    },
    {
      title: "Timing Strategies",
      strategies: [
        "Advance payment of expenses",
        "Bonus and incentive timing",
        "Asset purchase timing",
        "Income recognition timing",
        "Provision creation strategies"
      ]
    },
    {
      title: "Structure Optimization",
      strategies: [
        "Holding company structures",
        "Business division strategies",
        "Joint venture planning",
        "International tax planning",
        "Transfer pricing optimization"
      ]
    }
  ];

  const planningProcess = [
    {
      step: "1",
      title: "Financial Assessment",
      description: "Comprehensive analysis of your financial situation",
      activities: [
        "Income and expense analysis",
        "Current tax liability calculation",
        "Investment portfolio review",
        "Risk assessment"
      ]
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Custom tax planning strategy creation",
      activities: [
        "Tax saving opportunities identification",
        "Investment planning recommendations",
        "Structure optimization suggestions",
        "Timeline and implementation plan"
      ]
    },
    {
      step: "3",
      title: "Implementation",
      description: "Execute the tax planning strategy",
      activities: [
        "Investment execution",
        "Documentation and compliance",
        "Salary restructuring",
        "Business structure changes"
      ]
    },
    {
      step: "4",
      title: "Monitoring & Review",
      description: "Regular monitoring and strategy adjustments",
      activities: [
        "Quarterly reviews",
        "Performance tracking",
        "Strategy adjustments",
        "Regulatory updates"
      ]
    }
  ];

  const planningBenefits = [
    {
      icon: Calculator,
      title: "Maximize Savings",
      description: "Legally minimize tax liability through strategic planning and optimal utilization of deductions"
    },
    {
      icon: TrendingUp,
      title: "Wealth Creation",
      description: "Tax-efficient investments that help build long-term wealth while saving current taxes"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Protect your wealth through proper planning and compliance with tax regulations"
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Professional advice from qualified CAs with years of tax planning experience"
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
              Tax Planning & Advisory
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Strategic <span className="text-accent-600">Tax Planning</span> Services
            </h1>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Maximize your tax savings and build wealth through expert tax planning strategies. 
              Our qualified CAs provide personalized advisory services for individuals and businesses.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "₹2.5L+", label: "Average Tax Savings" },
              { number: "300+", label: "Clients Served" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Legal Compliance" }
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

      {/* Planning Services */}
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
              Our Tax Planning Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Comprehensive tax planning solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {planningServices.map((service, index) => (
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
                  <div className="p-3 bg-accent-100 rounded-xl">
                    <service.icon className="w-8 h-8 text-accent-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {service.description}
                    </p>
                    <div className="text-2xl font-bold text-accent-600">
                      {service.pricing}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">Features</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                          <span className="text-sm text-secondary-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">Benefits</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-success-500 mr-2" />
                          <span className="text-sm text-secondary-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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

      {/* Tax Saving Strategies */}
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
              Individual Tax Saving Strategies
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Proven strategies to minimize your tax liability legally
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {taxSavingStrategies.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.strategies.map((strategy, strategyIndex) => (
                    <div key={strategyIndex} className="border-l-4 border-accent-200 pl-4">
                      <h4 className="font-semibold text-secondary-900 mb-1">
                        {strategy.strategy}
                      </h4>
                      <p className="text-secondary-600 text-sm mb-2">
                        {strategy.description}
                      </p>
                      <div className="text-accent-600 font-medium text-sm">
                        Potential Savings: {strategy.savings}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Tax Strategies */}
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
              Business Tax Planning Strategies
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Advanced strategies for businesses to optimize tax efficiency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessTaxStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  {strategy.title}
                </h3>
                
                <div className="space-y-3">
                  {strategy.strategies.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Process */}
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
              Our Tax Planning Process
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Systematic approach to develop your personalized tax strategy
            </p>
          </motion.div>

          <div className="space-y-8">
            {planningProcess.map((step, index) => (
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
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-secondary-600 mb-4">
                      {step.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center">
                          <FileText className="w-4 h-4 text-accent-500 mr-2" />
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
              Why Choose Our Tax Planning Services?
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Professional expertise that delivers real value and peace of mind
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {planningBenefits.map((benefit, index) => (
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
              Start Your Tax Planning Journey
            </h2>
            <p className="text-xl text-accent-100 mb-8 max-w-3xl mx-auto">
              Don't wait until the last minute. Start planning now and maximize 
              your tax savings with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-accent-600 px-8 py-4 rounded-xl font-semibold hover:bg-accent-50 transition-all duration-300 shadow-lg"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-accent-600 transition-all duration-300"
              >
                Get Tax Planning Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TaxPlanningAdvisory;