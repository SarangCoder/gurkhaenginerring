import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Project } from '../../types/Project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg shadow-custom bg-white"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="heading-md mb-2">{project.title}</h3>
        <p className="text-secondary-600 mb-4 line-clamp-2">
          {project.shortDescription}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-accent-600 font-medium">
            NPR {project.price.toLocaleString()}
          </span>
          <Link
            to={`/projects/${project.id}`}
            className="flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            <span>View Details</span>
            <ExternalLink size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;