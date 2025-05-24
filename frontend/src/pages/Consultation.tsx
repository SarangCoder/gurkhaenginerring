import React from 'react';
import { Users, Clock, Coffee, Image, CheckCircle } from 'lucide-react';
import ConsultationForm from '../components/ConsultationForm';

const Consultation: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" 
            alt="Interior design consultation" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Design Consultation Services
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              Transform your space with expert guidance from our design consultants. Whether you're furnishing a single room or an entire home, our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Consultation Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">How Our Consultation Works</h2>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <Users size={24} className="text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Book Your Appointment</h3>
                    <p className="text-gray-600">
                      Schedule a consultation with our design experts using the form. Choose a date and time that works for you, and let us know what you're looking to achieve.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <Coffee size={24} className="text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Consultation Session</h3>
                    <p className="text-gray-600">
                      Meet with our designer to discuss your style preferences, space requirements, and budget. We'll help you explore options that match your vision.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <Image size={24} className="text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Design Proposal</h3>
                    <p className="text-gray-600">
                      After the consultation, we'll prepare a detailed design proposal including furniture recommendations, layout suggestions, and a comprehensive quote.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <CheckCircle size={24} className="text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Implementation</h3>
                    <p className="text-gray-600">
                      Once you approve the design, we'll handle everything from ordering to delivery and installation, ensuring a seamless experience.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Why Choose Our Design Service</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Expert designers with years of industry experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Personalized approach tailored to your unique style</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Access to exclusive furniture collections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Comprehensive service from design to installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Special pricing on furniture purchases through our service</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right Column - Consultation Form */}
            <div>
              <ConsultationForm 
                title="Schedule Your Free Consultation" 
                description="Our design experts are ready to help you create your dream space. Book your free 30-minute consultation today."
              />
              
              <div className="mt-8 bg-emerald-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Clock size={20} className="text-emerald-600 mr-3" />
                  <h3 className="text-lg font-medium">Consultation Hours</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our design consultants are available for appointments during the following hours:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                  <li>Saturday: 10:00 AM - 4:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  Can't make it during these hours? Let us know in the message field, and we'll try to accommodate your schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Client Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-4">"The design consultation transformed our living room completely. The designer understood our style perfectly and helped us choose furniture that worked with our existing pieces."</p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" 
                  alt="Jennifer R." 
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <p className="font-medium">Jennifer R.</p>
                  <p className="text-sm text-gray-600">Living Room Redesign</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-4">"We were overwhelmed trying to furnish our new home, but the consultation made everything so much easier. The designer helped us create a cohesive look throughout our entire house."</p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                  alt="Mark & Sarah T." 
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <p className="font-medium">Mark & Sarah T.</p>
                  <p className="text-sm text-gray-600">Whole Home Design</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-4">"The home office design exceeded my expectations. The consultant listened to my needs and created a functional, beautiful space that has improved my productivity tremendously."</p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                  alt="Alex M." 
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <p className="font-medium">Alex M.</p>
                  <p className="text-sm text-gray-600">Home Office Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Book your free design consultation today and take the first step toward creating your dream home.
          </p>
          <button 
            onClick={() => {
              // Scroll to the consultation form
              const formElement = document.querySelector('form');
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-white"
          >
            Book Your Consultation Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Consultation;