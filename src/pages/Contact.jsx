
import {  Phone, Mail, MapPin} from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-slate-900 to-black relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
          Let's <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
          Ready to transform your business? Let's discuss how we can elevate your 
          tax and compliance strategy to new heights.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {[
          { 
            icon: <Phone className="w-10 h-10" />, 
            title: "Call Us", 
            info: "+91 98765 43210",
            color: "from-green-400 to-emerald-500"
          },
          { 
            icon: <Mail className="w-10 h-10" />, 
            title: "Email Us", 
            info: "hello@taxproelite.com",
            color: "from-blue-400 to-cyan-500"
          },
          { 
            icon: <MapPin className="w-10 h-10" />, 
            title: "Visit Us", 
            info: "Tech Hub, Business District\nMumbai, Maharashtra",
            color: "from-purple-400 to-pink-500"
          }
        ].map((contact, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-10 rounded-3xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-r ${contact.color} text-white mb-8 group-hover:scale-110 transition-transform duration-300`}>
              {contact.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
              {contact.title}
            </h3>
            
            <p className="text-slate-400 text-lg whitespace-pre-line group-hover:text-slate-300 transition-colors duration-300">
              {contact.info}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

export default Contact;