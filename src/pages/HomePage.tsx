import { Helmet } from 'react-helmet';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';
import CTASection from '../components/ui/CTASection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Gorkha Engineering - Civil Construction & Consulting Services</title>
        <meta name="description" content="Gorkha Engineering provides professional civil construction and consulting services with 3D design expertise in Dang, Nepal." />
      </Helmet>
      
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
    <ContactSection />
      <CTASection />
    </>
  );
};

export default HomePage;