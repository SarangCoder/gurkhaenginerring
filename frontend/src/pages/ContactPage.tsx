import { Helmet } from 'react-helmet';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/ui/ContactForm';
import GoogleMap from '../components/ui/GoogleMap';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+977 9864880095',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@gorkhaengineering.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Dang, Ghorai, Nepal',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Sunday - Friday: 9AM - 6PM',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Gorkha Engineering</title>
        <meta name="description" content="Contact Gorkha Engineering for construction and consulting services in Dang, Nepal. Get in touch for inquiries or consultations." />
        <meta name="keywords" content="Gurkha engineering consulting, house design in ghorahi, house design, engineering Consultancy in ghorahi, building design, naksha design, naksha pass, Ghar naksha " />
        <meta name="author" content="Codestack A Complete IT Solution" />
      </Helmet>

      <div className="bg-primary-900 pt-32 pb-16 text-white">
        <div className="container-custom">
          <h1 className="heading-xl mb-4 text-center">Contact Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-primary-100">
            Get in touch with our team for inquiries, consultations, or to discuss your next project. We're here to help!
          </p>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <SectionHeading
                title="Get In Touch"
                subtitle="We're here to answer any questions you may have about our services"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mr-4 flex-shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="text-secondary-600">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-100 text-secondary-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-100 text-secondary-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.055-.059 1.37-.059 4.04 0 2.668.01 2.985.059 4.04.044.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.046 1.37.059 4.04.059 2.668 0 2.985-.01 4.04-.059.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.046-1.055.06-1.37.06-4.04 0-2.67-.01-2.986-.06-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.047-1.37-.059-4.04-.059zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                    </svg>
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-100 text-secondary-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                    aria-label="TikTok"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.005.595.034.88.12V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 5 20.97a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.16l-.04-.01z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>

          <div>
            <SectionHeading
              title="Find Us"
              subtitle="Visit our office in Dang, Ghorai, Nepal"
              centered
            />
            <GoogleMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;