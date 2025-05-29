import { FileText, Shield, Globe, Award, ArrowRight} from 'lucide-react';


const Services = () => {   
  const services = [
    {
      title: "Tax Consultancy",
      description: "Comprehensive tax planning and compliance services for individuals and businesses",
      icon: <FileText className="w-8 h-8" />,
      color: "from-emerald-400 to-cyan-400"
    },
    {
      title: "PF & ESIC Services", 
      description: "Complete provident fund and employee state insurance corporation services",
      icon: <Shield className="w-8 h-8" />,
      color: "from-violet-400 to-purple-400"
    },
    {
      title: "Business Registration",
      description: "All types of business registrations including GST, Company incorporation, and licensing",
      icon: <Award className="w-8 h-8" />,
      color: "from-pink-400 to-rose-400"
    },
    {
      title: "Government Liaison",
      description: "Expert assistance with various government procedures and documentation",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-400 to-amber-400"
    }
  ]; 
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-slate-900 to-slate-800 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
          Our <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
          Comprehensive solutions designed for the digital age, combining traditional expertise 
          with innovative technology to deliver exceptional results
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/10"
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
            
            <div className="relative z-10">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <button className="flex items-center text-cyan-400 font-semibold group-hover:text-white transition-colors duration-300">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  );
}

export default Services;    