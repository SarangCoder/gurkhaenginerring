import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Home, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Project } from '../types/Project';
import CTASection from '../components/ui/CTASection';

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  
  useEffect(() => {
    const foundProject = projects.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
      setSelectedImage(foundProject.images[0]);
    }
  }, [id]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="heading-lg mb-4">Project Not Found</h2>
          <p className="text-secondary-600 mb-6">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <div className="pt-24 pb-16 bg-white">
        <div className="container-custom">
          <Link
            to="/projects"
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 mb-8"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to Projects</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 rounded-lg overflow-hidden"
              >
                <img
                  src={selectedImage}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-4 gap-2"
              >
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-md overflow-hidden border-2 ${
                      selectedImage === image
                        ? 'border-primary-600'
                        : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - View ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Details Section */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="heading-lg mb-4"
              >
                {project.title}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-wrap gap-4 mb-6"
              >
                <div className="flex items-center text-secondary-600">
                  <MapPin size={16} className="mr-2" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-secondary-600">
                  <Calendar size={16} className="mr-2" />
                  {/* <span>Completed: {project.completionDate}</span> */}
                </div>
                <div className="flex items-center text-secondary-600">
                  <Home size={16} className="mr-2" />
                  <span>{project.category}</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6"
              >
                <div className="text-2xl font-bold text-accent-600 mb-2">
                  {/* NPR {project.price.toLocaleString()} */}
                </div>
                <p className="text-secondary-600">{project.fullDescription}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8"
              >
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Tag size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to="/contact" className="btn-primary">
                  Inquire About This Project
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection />
    </>
  );
};

export default ProjectDetailPage;