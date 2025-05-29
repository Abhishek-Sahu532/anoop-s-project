import { FileText } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            SM Accounting
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Pioneering the future of tax consultancy with innovation, integrity, and excellence.
          </p>
        </div>
        
        {[
          {
            title: "Services",
            items: ["Tax Consultancy", "PF & ESIC Services", "Business Registration", "Government Liaison"]
          },
          {
            title: "Company", 
            items: ["About Us", "Our Team", "Careers", "Privacy Policy"]
          },
          {
            title: "Contact",
            items: ["+91 98765 43210", "hello@taxproelite.com", "Mumbai, Maharashtra", "Business Hours: 9AM-7PM"]
          }
        ].map((section, index) => (
          <div key={index}>
            <h4 className="text-xl font-bold mb-6 text-white">{section.title}</h4>
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="border-t border-slate-800 mt-16 pt-8 text-center">
        <p className="text-slate-500">
          &copy; 2025 TaxPro Elite. All rights reserved. | Crafted with innovation and precision.
        </p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;