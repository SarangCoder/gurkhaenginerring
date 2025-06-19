import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/ui/CTASection';

const ProjectsPage = () => {
  const [category, setCategory] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Luxury', 'Eco-Friendly', 'Traditional'];

  const filteredProjects = category === 'All'
    ? projects
    : projects.filter(project => project.category === category);

  return (
    <>
      <Helmet>
        <title>Our Projects - Gorkha Engineering</title>
        <meta name="description" content="Explore our portfolio of completed construction and consulting projects by Gorkha Engineering in Nepal." />
        <meta name="keywords" content="Gurkha engineering consulting, house design in ghorahi, house design, engineering Consultancy in ghorahi, building design, naksha design, naksha pass, Ghar naksha " />
        <meta name="author" content="Codestack A Complete IT Solution" />
      </Helmet>

      <div className="bg-primary-900 pt-32 pb-16 text-white">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="heading-xl mb-4 text-center text-white"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-center max-w-3xl mx-auto text-primary-100"
          >
            Explore our portfolio of completed construction projects featuring modern design, quality craftsmanship, and innovative solutions.
          </motion.p>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors 
                  ${category === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="heading-md mb-4">No Projects Found</h3>
              <p className="text-secondary-600">
                There are currently no projects in this category. Please check back later or try another category.
              </p>
            </div>
          )}
        </div>
      </div>

      <CTASection />
    </>
  );
};

export default ProjectsPage;