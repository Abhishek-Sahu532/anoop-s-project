import { CheckCircle, Award, Users, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    "15+ years of proven expertise in tax and accounting",
    "Qualified team of CA, CS, and CMA professionals",
    "100% compliance rate with zero penalties",
    "Personalized service for each client's unique needs",
    "Latest technology for efficient service delivery",
    "24/7 support and consultation availability"
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our professional dealings and client relationships."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering superior service quality that exceeds client expectations consistently."
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "Your success is our priority. We tailor our services to meet your specific business requirements."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Embracing latest technology and methodologies to provide efficient and effective solutions."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-neutral-50 to-primary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                About SM Accounting Solution
              </motion.span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
                Your Trusted Partner in 
                <span className="text-primary-600"> Financial Excellence</span>
              </h2>
              
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                With over 15 years of experience in tax consultancy and business advisory services, 
                SM Accounting Solution has been helping businesses navigate complex financial 
                regulations while maximizing their growth potential.
              </p>
              
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                Our team of qualified professionals, led by experienced Chartered Accountants, 
                provides comprehensive solutions from GST registration to corporate compliance, 
                ensuring your business stays ahead in today's competitive market.
              </p>
              
              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-success-500" />
                    </div>
                    <span className="text-secondary-700 leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.button 
                className="bg-professional-gradient text-white px-8 py-4 rounded-xl font-semibold shadow-glow hover:shadow-large transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More About Us
              </motion.button>
            </motion.div>
          </div>

          {/* Visual Content */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main Achievement Card */}
            <div className="bg-white rounded-3xl shadow-large p-8 mb-8">
              <div className="text-center">
                <div className="inline-flex p-4 bg-primary-100 rounded-2xl mb-6">
                  <Award className="w-10 h-10 text-primary-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  Professional Excellence
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                    <div className="text-secondary-600 text-sm">Satisfied Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-600 mb-2">15+</div>
                    <div className="text-secondary-600 text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-medium p-6 w-48"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-success-600 mb-2">100%</div>
                <div className="text-secondary-600 text-sm">Compliance Rate</div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-medium p-6 w-44"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-600 mb-2">24/7</div>
                <div className="text-secondary-600 text-sm">Support Available</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              The principles that guide our service delivery and client relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 border border-neutral-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex p-4 bg-primary-100 rounded-2xl mb-6">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                
                <h4 className="text-xl font-bold text-secondary-900 mb-4">
                  {value.title}
                </h4>
                
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;