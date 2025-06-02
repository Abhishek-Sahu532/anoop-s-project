import { motion } from 'framer-motion';

const Stats = () => {   
    const stats = [
        { number: "500+", label: "Happy Clients" },
        { number: "1000+", label: "Cases Resolved" },
        { number: "15+", label: "Years Experience" },
        { number: "100%", label: "Compliance Rate" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Main gradient background matching your theme */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600"></div>
            <div className="absolute inset-0 bg-black/20"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    className="grid md:grid-cols-4 gap-8 text-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.10,
                                transition: { 
                                    type: "spring", 
                                    stiffness: 300 
                                }
                            }}
                            className="group transform transition-all duration-500"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            {/* Number */}
                            <motion.div 
                                className="text-6xl md:text-7xl font-black text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    type: "spring",
                                    stiffness: 200,
                                    delay: index * 0.1 + 0.3
                                }}
                            >
                                {stat.number}
                            </motion.div>
                            
                            {/* Label */}
                            <motion.div 
                                className="text-xl text-cyan-100 font-medium uppercase tracking-wider"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                            >
                                {stat.label}
                            </motion.div>

                            {/* Floating animation */}
                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.5
                                }}
                                className="absolute inset-0 pointer-events-none"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Stats;