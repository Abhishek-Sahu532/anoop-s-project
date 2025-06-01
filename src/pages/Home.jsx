import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <About />
      <Contact />
    </>
  );
};

export default Home;