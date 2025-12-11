import { useEffect } from 'react'; // 1. Import useEffect
import { useLocation } from 'react-router-dom'; // 2. Import useLocation
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import ClientsTicker from '../components/ClientsTicker/ClientsTicker';
import GallerySection from '../components/GallerySection/GallerySection';
import TrainingPreview from '../components/TrainingPreview/TrainingPreview';
import CourseSection from '../components/CourseSection/CourseSection';
import PublicationsPreview from '../components/Publications/PublicationsPreview';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <SEO 
        description="Welcome to the official portfolio of Prof. Dr. Adnan Anwar, a leading medical expert specializing in cardiology and internal medicine. Explore his research, training programs, and services." title={''}      />
      <Navbar />
      <Hero />
      <Stats />
      <ClientsTicker />
      <GallerySection />
      <TrainingPreview />
      <CourseSection />
      <PublicationsPreview />
      <ServicesSection/>
      <Footer />
    </div>
  );
};

export default Home;