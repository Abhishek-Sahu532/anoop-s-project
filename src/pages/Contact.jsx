import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 98765 43210",
      secondary: "+91 87654 32109",
      color: "primary"
    },
    {
      icon: Mail,
      title: "Email Us", 
      primary: "info@smaccounting.com",
      secondary: "support@smaccounting.com",
      color: "accent"
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      primary: "123 Business District",
      secondary: "Bhopal, Madhya Pradesh 462001",
      color: "success"
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Mon - Sat: 9:00 AM - 7:00 PM",
      secondary: "Sunday: By Appointment",
      color: "secondary"
    }
  ];

  const services = [
    "GST Registration & Returns",
    "Income Tax Filing",
    "Company Registration", 
    "PF & ESIC Services",
    "ROC Filing",
    "Tax Planning",
    "Business Advisory",
    "Compliance Management"
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: {
        bg: "bg-primary-50",
        icon: "bg-primary-100 text-primary-600",
        border: "border-primary-200"
      },
      accent: {
        bg: "bg-accent-50",
        icon: "bg-accent-100 text-accent-600",
        border: "border-accent-200"
      },
      success: {
        bg: "bg-success-50",
        icon: "bg-success-100 text-success-600",
        border: "border-success-200"
      },
      secondary: {
        bg: "bg-secondary-50",
        icon: "bg-secondary-100 text-secondary-600",
        border: "border-secondary-200"
      }
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-2.866 31.16l1.732-1 10 17.32-1.732 1-10-17.32zM20 9v2H0V9h20zm31.732 14.598l-1.732 1L40 7.278l1.732-1L51.732 23.598zM80 9v2H60V9h20zM20 69v2H0v-2h20zm62.066-31.16l1.732 1-10 17.32-1.732-1 10-17.32zm.866-18.84l-1.732-1L91.134 0l1.732 1L82.932 18.84zM60 29v2H40v-2h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Get In Touch
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Let's Discuss Your <span className="text-primary-600">Business Needs</span>
          </h2>
          
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Ready to streamline your business operations? Contact us today for expert 
            consultation and personalized solutions tailored to your requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-secondary-900 mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const colorClasses = getColorClasses(info.color);
                  
                  return (
                    <motion.div
                      key={index}
                      className={`p-6 rounded-2xl border-2 ${colorClasses.border} ${colorClasses.bg} hover:shadow-medium transition-all duration-300`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 p-3 rounded-xl ${colorClasses.icon}`}>
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary-900 mb-2">
                            {info.title}
                          </h4>
                          <p className="text-secondary-700 font-medium mb-1">
                            {info.primary}
                          </p>
                          <p className="text-secondary-600 text-sm">
                            {info.secondary}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick Services */}
              <motion.div
                className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <h4 className="font-semibold text-secondary-900 mb-4">
                  Our Services
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="text-secondary-700 text-sm flex items-center"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                      {service}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-2xl shadow-large p-8 border border-neutral-200"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-primary-100 rounded-xl mr-4">
                  <MessageSquare className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900">
                    Send us a Message
                  </h3>
                  <p className="text-secondary-600">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-secondary-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-secondary-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-secondary-700 font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-secondary-700 font-medium mb-2">
                      Service Required
                    </label>
                    <select className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors">
                      <option value="">Select a service</option>
                      <option value="gst">GST Services</option>
                      <option value="income-tax">Income Tax</option>
                      <option value="company-registration">Company Registration</option>
                      <option value="pf-esic">PF & ESIC</option>
                      <option value="roc-filing">ROC Filing</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-secondary-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                    required
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-professional-gradient text-white px-8 py-4 rounded-xl font-semibold shadow-glow hover:shadow-large transition-all duration-300 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Find Us on Map
          </h3>
          
          <div className="bg-neutral-100 rounded-2xl h-96 flex items-center justify-center border border-neutral-200">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-secondary-900 mb-2">
                SM Accounting Solution
              </h4>
              <p className="text-secondary-600">
                123 Business District<br />
                Bhopal, Madhya Pradesh 462001
              </p>
              <motion.button
                className="mt-4 bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Directions
              </motion.button>
            </div>
          </div>
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
            Ready to Get Started?
          </h3>
          
          <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards simplified compliance and business growth. 
            Schedule a free consultation with our experts today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="bg-professional-gradient text-white px-8 py-4 rounded-xl font-semibold shadow-glow hover:shadow-large transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Free Consultation
            </motion.button>
            
            <motion.button 
              className="border-2 border-primary-300 text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;