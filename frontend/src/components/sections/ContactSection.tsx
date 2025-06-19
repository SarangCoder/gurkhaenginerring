import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ContactForm from '../ui/ContactForm';
import GoogleMap from '../ui/GoogleMap';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+977 9864880095',
      link: 'tel:+9779864880095',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'gurkhaengineering 2@gmail.com',
      link: 'mailto:gurkhaengineering2@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Dang, Ghorahi, Nepal',
      link: 'https://goo.gl/maps/123',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <SectionHeading
          title="Contact Us"
          subtitle="Get in touch with our team for inquiries or consultations"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>

          {/* Map and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GoogleMap />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="bg-white p-6 rounded-lg shadow-custom text-center hover:shadow-lg transition-shadow duration-300 no-underline"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-secondary-600">{item.details}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;