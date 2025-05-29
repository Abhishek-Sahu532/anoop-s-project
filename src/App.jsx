import { useEffect, useState } from 'react';
import './App.css'
import {Contact, Header, Services, AboutUs} from './pages';
import {Footer, Hero, Stats} from './components';

// import { FileText, Shield, Globe, Award, ArrowRight, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, ease: "backOut" }
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) rotate(5deg);
          }
          66% {
            transform: translateY(-10px) rotate(-3deg);
          }
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        * {
          cursor: none;
        }
        
        a, button {
          cursor: none;
        }
      `}</style>

      <div className="min-h-screen bg-slate-900 overflow-x-hidden">
        {/* Custom Cursor */}
        <div 
          className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
          style={{
            transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`
          }}
        />

        <Header />

        <Hero 
          scrollY={scrollY}
          mousePosition={mousePosition}
        />
        <Contact/>
        <Services />
        <AboutUs />
        <Stats /> 

        <Footer />
      </div>
    </>
  )
}

export default App