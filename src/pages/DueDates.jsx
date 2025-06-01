import { Calendar, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const DueDates = () => {
  const dueDates = [
    {
      category: "GST Compliance",
      color: "primary",
      items: [
        { task: "GSTR-1", dueDate: "11th of next month", status: "upcoming" },
        { task: "GSTR-3B", dueDate: "20th of next month", status: "upcoming" },
        { task: "GSTR-9 (Annual)", dueDate: "31st December", status: "annual" },
        { task: "GSTR-4 (Quarterly)", dueDate: "18th of next quarter", status: "quarterly" }
      ]
    },
    {
      category: "Income Tax",
      color: "accent",
      items: [
        { task: "TDS Return", dueDate: "31st of next month", status: "upcoming" },
        { task: "Advance Tax (Q4)", dueDate: "15th March", status: "quarterly" },
        { task: "ITR Filing", dueDate: "31st July", status: "annual" },
        { task: "Audit Report", dueDate: "30th September", status: "annual" }
      ]
    },
    {
      category: "ROC Compliance",
      color: "success",
      items: [
        { task: "Form AOC-4", dueDate: "30th September", status: "annual" },
        { task: "Form MGT-7", dueDate: "60 days from AGM", status: "annual" },
        { task: "DIR-3 KYC", dueDate: "30th September", status: "annual" },
        { task: "Form MSC-1", dueDate: "30th September", status: "annual" }
      ]
    },
    {
      category: "Labour Law",
      color: "secondary",
      items: [
        { task: "PF Return", dueDate: "25th of next month", status: "upcoming" },
        { task: "ESIC Return", dueDate: "21st of next month", status: "upcoming" },
        { task: "Bonus Payment", dueDate: "Before Dussehra/Puja", status: "annual" },
        { task: "Form 5 (PF)", dueDate: "25th of next month", status: "monthly" }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-accent-100 text-accent-700 border-accent-200';
      case 'monthly':
        return 'bg-primary-100 text-primary-700 border-primary-200';
      case 'quarterly':
        return 'bg-secondary-100 text-secondary-700 border-secondary-200';
      case 'annual':
        return 'bg-success-100 text-success-700 border-success-200';
      default:
        return 'bg-neutral-100 text-neutral-700 border-neutral-200';
    }
  };

  const getCategoryColor = (color) => {
    const colors = {
      primary: {
        bg: "bg-primary-50",
        border: "border-primary-200",
        icon: "bg-primary-100 text-primary-600"
      },
      accent: {
        bg: "bg-accent-50",
        border: "border-accent-200", 
        icon: "bg-accent-100 text-accent-600"
      },
      success: {
        bg: "bg-success-50",
        border: "border-success-200",
        icon: "bg-success-100 text-success-600"
      },
      secondary: {
        bg: "bg-secondary-50",
        border: "border-secondary-200",
        icon: "bg-secondary-100 text-secondary-600"
      }
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="due-dates" className="py-24 bg-gradient-to-br from-neutral-50 to-primary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2L74 40h-2zm4 0l4-4v2L78 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
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
            Stay Compliant
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Important <span className="text-primary-600">Due Dates</span>
          </h2>
          
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Never miss a deadline again. Our comprehensive compliance calendar keeps 
            you informed about all important filing dates and requirements.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { icon: Calendar, label: "Upcoming Deadlines", count: "12", color: "primary" },
            { icon: Clock, label: "This Month", count: "8", color: "accent" },
            { icon: CheckCircle, label: "Completed", count: "45", color: "success" },
            { icon: AlertTriangle, label: "Critical", count: "3", color: "secondary" }
          ].map((stat, index) => {
            const colorClasses = getCategoryColor(stat.color);
            
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                <div className={`inline-flex p-3 rounded-lg ${colorClasses.icon} mb-3`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-secondary-900 mb-1">{stat.count}</div>
                <div className="text-secondary-600 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Due Dates Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {dueDates.map((category, categoryIndex) => {
            const colorClasses = getCategoryColor(category.color);
            
            return (
              <motion.div
                key={categoryIndex}
                className={`bg-white rounded-2xl border-2 ${colorClasses.border} overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                whileHover={{ y: -3 }}
              >
                {/* Header */}
                <div className={`${colorClasses.bg} p-6 border-b ${colorClasses.border}`}>
                  <h3 className="text-xl font-bold text-secondary-900 flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-primary-600" />
                    {category.category}
                  </h3>
                </div>

                {/* Items */}
                <div className="p-6">
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.2) + (itemIndex * 0.1), duration: 0.4 }}
                      >
                        <div className="flex-1">
                          <div className="font-semibold text-secondary-900 mb-1">
                            {item.task}
                          </div>
                          <div className="text-secondary-600 text-sm flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            Due: {item.dueDate}
                          </div>
                        </div>
                        
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center bg-white rounded-2xl p-12 shadow-soft"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-secondary-900 mb-4">
            Never Miss Another Deadline
          </h3>
          
          <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our compliance alerts and get personalized reminders 
            for all your important filing dates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="bg-professional-gradient text-white px-8 py-4 rounded-xl font-semibold shadow-glow hover:shadow-large transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe to Alerts
            </motion.button>
            
            <motion.button 
              className="border-2 border-primary-300 text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Calendar
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DueDates;