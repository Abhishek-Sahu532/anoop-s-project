import { Award, BookOpen, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: "[Proprietor Name]",
      position: "Proprietor & Founder",
      qualification: "CA, CS, CMA",
      experience: "15+ Years",
      specialization: "Tax Planning & Corporate Law",
      image: "/api/placeholder/300/300",
      achievements: [
        "Chartered Accountant",
        "Company Secretary", 
        "Cost & Management Accountant",
        "Tax Law Expert"
      ]
    },
    {
      name: "Senior Tax Consultant",
      position: "Senior Tax Consultant",
      qualification: "CA",
      experience: "8+ Years",
      specialization: "GST & Income Tax",
      image: "/api/placeholder/300/300",
      achievements: [
        "GST Specialist",
        "Income Tax Expert",
        "Audit Professional",
        "Compliance Expert"
      ]
    },
    {
      name: "Business Advisor",
      position: "Business Registration Expert",
      qualification: "CS, LLB",
      experience: "6+ Years", 
      specialization: "Corporate Compliance",
      image: "/api/placeholder/300/300",
      achievements: [
        "Company Secretary",
        "Legal Advisor",
        "ROC Expert",
        "Corporate Law"
      ]
    },
    {
      name: "HR & Payroll Specialist",
      position: "HR & Compliance Manager",
      qualification: "MBA (HR)",
      experience: "5+ Years",
      specialization: "Labour Law & ESIC/PF",
      image: "/api/placeholder/300/300",
      achievements: [
        "HR Management",
        "Labour Law Expert",
        "PF/ESIC Specialist",
        "Payroll Management"
      ]
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "100%", label: "Compliance Rate", icon: Star },
    { number: "24/7", label: "Support Available", icon: BookOpen }
  ];

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Our Expert Team
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Meet Our <span className="text-primary-600">Professionals</span>
          </h2>
          
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Our team of qualified professionals brings decades of combined experience 
            in tax, accounting, and business advisory services.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 hover:shadow-medium transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <div className="inline-flex p-3 bg-primary-100 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">{stat.number}</div>
              <div className="text-secondary-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-neutral-200 hover:border-primary-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {/* Member Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                  <Users className="w-20 h-20 text-primary-400" />
                </div>
                <div className="absolute inset-0 bg-professional-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-1">{member.position}</p>
                  <p className="text-secondary-600 text-sm mb-2">{member.qualification}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-secondary-600">
                    <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full">
                      {member.experience}
                    </span>
                  </div>
                </div>

                {/* Specialization */}
                <div className="mb-4">
                  <p className="text-center text-secondary-700 font-medium text-sm">
                    {member.specialization}
                  </p>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  {member.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex items-center text-secondary-600 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Our Team */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Why Choose Our Team?
            </h3>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our professionals are not just qualified, they're passionate about helping 
              your business succeed while maintaining the highest standards of compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Qualifications",
                description: "CA, CS, CMA, and other professional certifications",
                icon: Award
              },
              {
                title: "Continuous Learning", 
                description: "Regular training on latest tax laws and regulations",
                icon: BookOpen
              },
              {
                title: "Client-Focused Approach",
                description: "Personalized service tailored to your business needs",
                icon: Users
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="inline-flex p-4 bg-white rounded-2xl shadow-soft mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-xl font-bold text-secondary-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;