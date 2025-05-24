import { motion } from 'framer-motion';
import { Award, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';

const AboutSection = () => {
  const stats = [
    {
      icon: Clock,
      value: '10+',
      label: 'Years of Experience',
    },
    {
      icon: Award,
      value: '200+',
      label: 'Projects Completed',
    },
    {
      icon: Users,
      value: '50+',
      label: 'Team Members',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4491882/pexels-photo-4491882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Gorkha Engineering team at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary-600 text-white p-6 rounded-lg shadow-xl max-w-[220px]">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-lg">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Text Content Side */}
          <div>
            <SectionHeading
              title="Nepal's Leading Construction & Consulting Firm"
              subtitle="Dedicated to excellence and innovation in civil engineering"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-secondary-600 mb-6"
            >
              At Gorkha Engineering, we combine technical expertise with creative solutions to deliver outstanding construction and consulting services. Our team of experienced professionals is committed to bringing your vision to life with precision and attention to detail.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-secondary-600 mb-8"
            >
              We specialize in 3D construction design, allowing clients to visualize projects before breaking ground. This innovative approach ensures clarity, reduces errors, and delivers buildings that perfectly match your expectations.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-2">
                    <stat.icon size={24} />
                  </div>
                  <p className="text-3xl font-bold text-secondary-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-secondary-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link to="/about" className="btn-primary inline-block">
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;