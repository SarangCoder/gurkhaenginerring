import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-primary-900 section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-lg text-white mb-6"
          >
            Ready to Start Your Next Construction Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary-100 text-lg mb-8"
          >
            Contact us today for a free consultation and estimate. Our team of experts is ready to help you bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-primary-900 font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-flex items-center justify-center"
            >
              <span>Get a Free Quote</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              to="/projects"
              className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-flex items-center justify-center"
            >
              View Our Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;