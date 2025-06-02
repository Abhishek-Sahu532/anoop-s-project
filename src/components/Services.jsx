import { 
  FileText, 
  Calculator, 
  Building, 
  Shield, 
  Users, 
  Briefcase, 
  FileCheck,
  TrendingUp,
  ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const serviceCategories = [
    {
      title: "Tax Services",
      description: "Comprehensive tax solutions for individuals and businesses",
      icon: Calculator,
      color: "primary",
      services: [
        "GST Registration & Returns",
        "Income Tax Filing & Planning",
        "Tax Advisory & Consultation",
        "Statutory Audit Services"
      ]
    },
    {
      title: "Business Registration",
      description: "Complete business setup and registration services",
      icon: Building,
      color: "accent",
      services: [
        "Company Registration",
        "Partnership Firm Formation",
        "LLP Registration",
        "ROC Filing & Compliance"
      ]
    },
    {
      title: "Compliance & Legal",
      description: "Ensure your business stays compliant with regulations",
      icon: Shield,
      color: "success",
      services: [
        "PF & ESIC Services",
        "Labour Department Compliance",
        "Annual Compliance Management",
        "Legal Documentation"
      ]
    },
    {
      title: "Financial Advisory",
      description: "Strategic financial planning and business growth",
      icon: TrendingUp,
      color: "secondary",
      services: [
        "Business Financial Planning",
        "Investment Advisory",
        "Cash Flow Management",
        "Financial Health Check"
      ]
    }
  ];

  const specializedServices = [
    {
      title: "GST Services",
      items: [
        "GST Registration",
        "Monthly/Quarterly Returns",
        "GST Audit & Advisory",
        "Input Tax Credit Optimization"
      ]
    },
    {
      title: "Income Tax",
      items: [
        "Individual ITR Filing",
        "Business Tax Returns",
        "Tax Planning Strategies", 
        "Notice Handling"
      ]
    },
    {
      title: "Corporate Services",
      items: [
        "Company Incorporation",
        "Board Meetings & Resolutions",
        "Annual Compliance",
        "Merger & Acquisitions"
      ]
    },
    {
      title: "HR & Payroll",
      items: [
        "PF Registration & Returns",
        "ESIC Compliance",
        "Payroll Management",
        "Employee Benefits"
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: {
        bg: "bg-primary-50",
        icon: "bg-primary-100 text-primary-600",
        border: "border-primary-200",
        hover: "hover:border-primary-300"
      },
      accent: {
        bg: "bg-accent-50", 
        icon: "bg-accent-100 text-accent-600",
        border: "border-accent-200",
        hover: "hover:border-accent-300"
      },
      success: {
        bg: "bg-success-50",
        icon: "bg-success-100 text-success-600",
        border: "border-success-200",
        hover: "hover:border-success-300"
      },
      secondary: {
        bg: "bg-secondary-50",
        icon: "bg-secondary-100 text-secondary-600",
        border: "border-secondary-200",
        hover: "hover:border-secondary-300"
      }
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Expertise
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Comprehensive <span className="text-primary-600">Business Solutions</span>
          </h2>
          
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            From tax planning to business registration, we offer end-to-end financial 
            and compliance services tailored to your business needs.
          </p>
        </motion.div>

        {/* Main Service Categories */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {serviceCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <motion.div
                key={index}
                className={`group relative bg-white rounded-2xl border-2 ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 hover:shadow-large overflow-hidden`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${colorClasses.bg} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 p-8">
                  <div className={`inline-flex p-4 rounded-2xl ${colorClasses.icon} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {category.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-secondary-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {specializedServices.map((section, index) => (
            <motion.div
              key={index}
              className="bg-neutral-50 rounded-xl p-6 hover:bg-white hover:shadow-medium transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h4 className="font-semibold text-secondary-900 mb-4 text-lg">
                {section.title}
              </h4>
              
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    className="flex items-start text-secondary-600 hover:text-primary-600 transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <FileCheck className="w-4 h-4 mr-3 mt-0.5 text-success-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-secondary-900 mb-4">
            Ready to Streamline Your Business?
          </h3>
          
          <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
            Get personalized consultation and discover how our services can help 
            your business grow while staying compliant.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
                 className=" bg-professional-gradient text-secondary-700 border border-1  border-primary-500  px-8 py-4 rounded-xl font-semibold shadow-glow hover:shadow-large transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Consultation
            </motion.button>
            
            <motion.button 
              className="border-2 border-primary-300 text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Service Guide
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;