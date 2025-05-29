import { Users, CheckCircle} from 'lucide-react';


const AboutUs = () => { 
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Why Choose 
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Excellence?
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 leading-relaxed">
            We're not just consultants – we're your strategic partners in navigating 
            the complex world of tax and business compliance with precision and innovation.
          </p>
          
          <div className="space-y-6">
            {[
              "AI-powered compliance monitoring",
              "Expert team with 15+ years of experience", 
              "100% compliance guarantee with real-time tracking",
              "24/7 premium support with dedicated account manager"
            ].map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 transition-all duration-300" />
                </div>
                <span className="text-slate-300 text-lg group-hover:text-white transition-colors duration-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-10 relative overflow-hidden group hover:border-slate-600/50 transition-all duration-500 transform hover:-translate-y-2">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="inline-flex p-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white mb-8 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-12 h-12" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                Our Vision
              </h3>
              
              <p className="text-lg text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                To revolutionize the consultancy landscape by seamlessly blending traditional 
                expertise with cutting-edge technology, creating unprecedented value for our clients 
                while setting new industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default AboutUs;