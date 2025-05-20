import { Home, Building2, PenTool, BarChart3, Hammer, PieChart } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes and multi-family residential buildings designed and built to the highest standards of quality and comfort.',
    },
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and multi-use commercial properties with a focus on functionality and return on investment.',
    },
    {
      icon: PenTool,
      title: '3D Design & Modeling',
      description: 'Cutting-edge 3D visualization services to help you see and perfect your project before construction begins.',
    },
    {
      icon: BarChart3,
      title: 'Construction Management',
      description: 'Comprehensive management of construction projects from planning to completion with meticulous attention to schedules and budgets.',
    },
    {
      icon: Hammer,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our expert renovation and remodeling services that blend functionality with aesthetic appeal.',
    },
    {
      icon: PieChart,
      title: 'Property Consulting',
      description: 'Expert advice on property development, investment potential, and optimization of existing real estate assets.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive construction and consulting solutions for all your needs"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;