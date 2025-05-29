


const Stats = () => {   
    const stats = [
        { number: "500+", label: "Happy Clients" },
        { number: "1000+", label: "Cases Resolved" },
        { number: "15+", label: "Years Experience" },
        { number: "100%", label: "Compliance Rate" }
      ];
    return (
        <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group transform hover:scale-110 transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-6xl md:text-7xl font-black text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-xl text-cyan-100 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
    }

    export default Stats;