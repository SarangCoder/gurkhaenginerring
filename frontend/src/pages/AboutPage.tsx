import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, CheckSquare, TrendingUp } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/ui/CTASection';

const AboutPage = () => {
  const values = [
    {
      icon: CheckSquare,
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring the highest standards of quality and craftsmanship.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients, fostering open communication and partnership throughout the project lifecycle.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We conduct our business with unwavering integrity, honesty, and transparency in all our dealings.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We embrace innovative approaches and technologies to deliver cutting-edge solutions for our clients.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Gorkha Engineering</title>
        <meta name="description" content="Learn about Gorkha Engineering, Nepal's leading civil construction and consulting firm dedicated to excellence and innovation." />
        <meta name="keywords" content="Gurkha engineering consulting, house design in ghorahi, house design, engineering Consultancy in ghorahi, building design, naksha design, naksha pass, Ghar naksha " />
        <meta name="author" content="Codestack A Complete IT Solution" />
      </Helmet>
      
      <div className="bg-primary-900 pt-32 pb-16 text-white">
        <div className="container-custom">
          <h1 className="heading-xl mb-4 text-center text-white">About Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-primary-100">
            Learn about our journey, values, and commitment to excellence in civil construction and consulting.
          </p>
        </div>
      </div>
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <img
                  src="https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/500650348_679313678340835_7181844436156264175_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iOvnzGdrbO4Q7kNvwGzFwaO&_nc_oc=Adl8PlpY9ckqr2get92__D0lKfpxXsA0jqgo0m2XetgJscBMImi4T440NDTUl5Bh-U8&_nc_zt=23&_nc_ht=scontent.fktm20-1.fna&_nc_gid=dOBNdLIgKftvF1CSpqjvng&oh=00_AfNl_zS0d1mC77pT_jzya6o2qRAqhqsxW2tPfjbBLAN_ZQ&oe=6856DE8F"
                  
                  alt="Gorkha Engineering team"
                  className="rounded-lg shadow-custom"
                  style={{height: "90vh", width: "60vh"}}
                />
                
                <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-lg shadow-custom">
                  <p className="text-3xl font-bold text-primary-600">10+</p>
                  <p className="text-secondary-600 text-sm">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
            
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="The journey of Gorkha Engineering"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-secondary-600 mb-4"
              >
                Founded in 2015, Gorkha Engineering has grown from a small consulting firm to a leading construction and design company in Nepal. Our journey began with a vision to transform the construction landscape by introducing innovative approaches and technologies.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-secondary-600 mb-4"
              >
                Over the years, we have successfully completed numerous projects ranging from residential homes to commercial complexes, earning a reputation for quality, reliability, and innovation. Our introduction of 3D design and modeling has revolutionized how our clients visualize and plan their construction projects.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-secondary-600"
              >
                Today, Gorkha Engineering stands as a testament to dedication, expertise, and a commitment to excellence in the construction industry. Our team of skilled professionals continues to push boundaries and set new standards in construction and consulting.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide our work and relationships"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-custom text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-secondary-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Approach"
                subtitle="How we deliver exceptional results for our clients"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6"
              >
                <h3 className="text-xl font-semibold mb-2">1. Consultation & Planning</h3>
                <p className="text-secondary-600">
                  We begin with a thorough consultation to understand your vision, requirements, and constraints. Our team works closely with you to develop a comprehensive plan that aligns with your goals and budget.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-6"
              >
                <h3 className="text-xl font-semibold mb-2">2. Design & Visualization</h3>
                <p className="text-secondary-600">
                  Using cutting-edge 3D modeling technology, we create detailed designs that allow you to visualize your project before construction begins. This step ensures alignment with your expectations and facilitates early adjustments.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-6"
              >
                <h3 className="text-xl font-semibold mb-2">3. Execution & Quality Control</h3>
                <p className="text-secondary-600">
                  Our experienced team implements the project with precision and attention to detail. Rigorous quality control measures are applied throughout the construction process to ensure adherence to standards.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-2">4. Handover & Support</h3>
                <p className="text-secondary-600">
                  Upon completion, we provide a comprehensive handover of your project along with necessary documentation. Our relationship doesn't end there – we offer ongoing support and maintenance services to ensure lasting satisfaction.
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Construction planning"
                className="rounded-lg shadow-custom"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
};

export default AboutPage;