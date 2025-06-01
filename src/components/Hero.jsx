import { ChevronRight, Play, Award, Users, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const features = [
    { icon: Award, text: "15+ Years Experience" },
    { icon: Users, text: "500+ Happy Clients" },
    { icon: FileCheck, text: "100% Compliance" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-primary-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        {/* Floating geometric shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className={`w-${8 + i * 2} h-${8 + i * 2} bg-primary-500 rounded-lg transform rotate-45`} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span 
                className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                Trusted Tax & Business Consultants
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
                Expert Financial Solutions for{' '}
                <span className="text-primary-600">Your Business</span>
              </h1>
              
              <p className="text-lg text-secondary-600 mb-8 max-w-2xl leading-relaxed">
                From GST registration to income tax filing, we provide comprehensive 
                accounting and compliance services with precision and professionalism. 
                Your success is our commitment.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button 
                  className="group bg-professional-gradient text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-glow hover:shadow-large transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Journey
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button 
                  className="group border-2 border-secondary-300 text-secondary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-primary-500 hover:text-primary-700 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </motion.button>
              </div>
              
              {/* Features */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <span className="text-secondary-700 font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image/Illustration */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative z-10">
              {/* Main Card */}
              <motion.div 
                className="bg-white rounded-3xl shadow-large p-8 mb-6"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900">Tax Dashboard</h3>
                    <p className="text-secondary-600">Real-time compliance tracking</p>
                  </div>
                  <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-success-600" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "GST Returns", status: "Filed", color: "success" },
                    { label: "Income Tax", status: "In Progress", color: "accent" },
                    { label: "PF Compliance", status: "Completed", color: "success" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                      <span className="font-medium text-secondary-800">{item.label}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.color === 'success' 
                          ? 'bg-success-100 text-success-700' 
                          : 'bg-accent-100 text-accent-700'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-medium p-6 w-48"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">₹2.5Cr+</div>
                  <div className="text-secondary-600 text-sm">Tax Savings Generated</div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-medium p-6 w-44"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-600 mb-2">24h</div>
                  <div className="text-secondary-600 text-sm">Average Response Time</div>
                </div>
              </motion.div>
            </div>

            {/* Background decorations */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl opacity-10 blur-xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-secondary-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;