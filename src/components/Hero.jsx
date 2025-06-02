import { ChevronRight, Award, Users, FileCheck, Calculator, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  
  const features = [
    { icon: Award, text: "15+ Years Experience" },
    { icon: Users, text: "Expert CA Team" },
    { icon: FileCheck, text: "100% Compliance" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-8, 8, -8],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen  h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-primary-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <motion.div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        {/* Animated Floating Shapes */}
        <motion.div
          className="absolute top-20 left-[10%] w-16 h-16 bg-primary-200/40 rounded-full"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-[15%] w-12 h-12 bg-accent-200/40 rounded-full"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-[20%] w-20 h-20 bg-success-200/40 rounded-full"
          animate={{
            y: [-15, 15, -15],
            x: [-15, 15, -15],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        <motion.div
          className="absolute top-1/2 right-[25%] w-8 h-8 bg-primary-300/50 rounded-full"
          animate={{
            y: [10, -30, 10],
            x: [-5, 15, -5],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[10%] w-14 h-14 bg-accent-300/30 rounded-full"
          animate={{
            y: [-25, 25, -25],
            x: [20, -20, 20],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-100/30 to-accent-100/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-success-100/30 to-primary-100/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating Mathematical Symbols */}
        <motion.div
          className="absolute top-[15%] left-[5%] text-primary-200/30 text-2xl font-bold"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          %
        </motion.div>
        <motion.div
          className="absolute top-[60%] right-[8%] text-accent-200/40 text-3xl font-bold"
          animate={{
            y: [15, -15, 15],
            rotate: [0, -15, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          ₹
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] left-[8%] text-success-200/35 text-xl font-bold"
          animate={{
            y: [-8, 12, -8],
            rotate: [0, 20, 0],
            opacity: [0.35, 0.6, 0.35]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          +
        </motion.div>
        
        {/* Subtle Moving Lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-200/20 to-transparent"
          animate={{
            x: ["-100%", "100%"]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-200/15 to-transparent"
          animate={{
            x: ["100%", "-100%"]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div 
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary-900 mb-8 leading-tight"
              variants={itemVariants}
            >
              Expert Financial Solutions for{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">
                  Your Business
                </span>
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-secondary-600 mb-10 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              From GST registration to income tax filing, we provide comprehensive 
              accounting and compliance services with precision and professionalism. 
              <span className="font-semibold text-primary-700">Your success is our commitment.</span>
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Link to="/services">
                <motion.button 
                  className="group bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center w-full"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center">
                    Explore Our Services
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button 
                  className="group border-2 border-secondary-300 text-secondary-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-primary-500 hover:text-primary-700 hover:bg-primary-50 transition-all duration-300 flex items-center justify-center w-full"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calculator className="mr-2 w-5 h-5" />
                  Get Free Consultation
                </motion.button>
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-6"
              variants={itemVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md border border-white/40"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 + index * 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="text-secondary-700 font-semibold text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Section - Service Cards */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Service Cards */}
              {[
                { 
                  title: "GST Services", 
                  description: "Registration & Returns", 
                  icon: "📊", 
                  color: "from-primary-400 to-primary-600",
                  delay: 0.8,
                  link: "/services/gst"
                },
                { 
                  title: "Income Tax", 
                  description: "Filing & Planning", 
                  icon: "💰", 
                  color: "from-accent-400 to-accent-600",
                  delay: 1.0,
                  link: "/services/income-tax"
                },
                { 
                  title: "Company Registration", 
                  description: "Business Setup", 
                  icon: "🏢", 
                  color: "from-success-400 to-success-600",
                  delay: 1.2,
                  link: "/services/company-registration"
                },
                { 
                  title: "Compliance", 
                  description: "PF, ESIC, Labour", 
                  icon: "✅", 
                  color: "from-secondary-400 to-secondary-600",
                  delay: 1.4,
                  link: "/services/compliance"
                }
              ].map((service, index) => (
                <Link key={index} to={service.link} className="block">
                  <motion.div
                    className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: service.delay, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate(service.link)}
                  >
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white text-lg sm:text-xl shadow-lg`}>
                        {service.icon}
                      </div>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <h3 className="font-bold text-secondary-900 mb-1 sm:mb-2 group-hover:text-primary-700 transition-colors text-sm sm:text-base">{service.title}</h3>
                    <p className="text-secondary-600 text-xs sm:text-sm group-hover:text-secondary-700 transition-colors">{service.description}</p>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Floating Achievement Badge */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 border border-white/50"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              variants={floatingVariants}
              animate="float"
            >
              <div className="text-center">
                <div className="text-lg font-black bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  15+ Years
                </div>
                <div className="text-secondary-600 text-xs font-medium">Trusted Service</div>
              </div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-primary-200/20 via-accent-200/20 to-success-200/20 rounded-3xl blur-2xl opacity-50"></div>
          </motion.div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-secondary-300 rounded-full flex justify-center p-2 bg-white/50 backdrop-blur-sm"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;