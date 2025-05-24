import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
       <div className="absolute inset-0 z-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover filter brightness-110 contrast-125"
    >
      <source src="/home.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/80 to-secondary-900/70"></div>
  </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 pt-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center mb-6"
          >
            <div className="bg-primary-600 p-2 rounded-full mr-4">
              <Building size={24} className="text-white" />
            </div>
            <h2 className="text-lg md:text-xl font-medium text-white">
              Excellence in Civil Engineering & Design
            </h2>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="heading-xl text-white mb-6"
          >
            Building Excellence with Modern 3D Construction Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg md:text-xl text-secondary-200 mb-8"
          >
            Gorkha Engineering delivers innovative construction and consulting 
            services with cutting-edge 3D design technology for superior results
            throughout Nepal.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              to="/projects"
              className="btn-secondary inline-flex items-center"
            >
              <span>Explore Our Projects</span>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
        <svg
          className="relative block w-full"
          height="80"
          preserveAspectRatio="none"
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C320,100 760,0 1440,60 L1440,80 L0,80 Z"
            fill="#f8fafc"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;