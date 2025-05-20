import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rajendra Sharma',
      position: 'Homeowner',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      stars: 5,
      text: 'Gorkha Engineering built our dream home with exceptional quality. The 3D design process helped us visualize everything before construction, making the experience stress-free.',
    },
    {
      name: 'Anita Gurung',
      position: 'Business Owner',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      stars: 5,
      text: 'We hired Gorkha for our commercial building project. Their attention to detail and professional approach resulted in a beautiful space that perfectly suits our business needs.',
    },
    {
      name: 'Bikash Thapa',
      position: 'Property Investor',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      stars: 5,
      text: 'Working with Gorkha Engineering was a delight. They delivered our apartment complex on time and within budget, with quality that exceeded our expectations.',
    },
  ];

  return (
    <section className="section-padding bg-primary-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-primary-800 rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-800 rounded-full opacity-50 translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Testimonials from satisfied clients across Nepal"
          centered
          light
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-800/50 backdrop-blur-sm p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-white">{testimonial.name}</h4>
                  <p className="text-primary-300 text-sm">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-primary-100">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;