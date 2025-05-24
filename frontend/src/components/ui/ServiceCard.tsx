import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-custom p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-600 mb-4">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;