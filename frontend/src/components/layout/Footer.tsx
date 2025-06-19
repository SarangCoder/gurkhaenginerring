import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="text-secondary-300 mb-6">
              Dedicated to civil construction and consulting works with 
              expertise in modern 3D construction solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100087866276128"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@gorkha_engineering_dang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent-400 transition-colors"
                aria-label="TikTok"
              >
              
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.005.595.034.88.12V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 5 20.97a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.16l-.04-.01z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-secondary-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-secondary-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-secondary-300 hover:text-white transition-colors"
                >
                  Our Works
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-secondary-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-secondary-300">3D Construction Design</li>
              <li className="text-secondary-300">Civil Engineering</li>
              <li className="text-secondary-300">Construction Consulting</li>
              <li className="text-secondary-300">Building Projects</li>
              <li className="text-secondary-300">Property Valuation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-secondary-300">
                  Dang, Ghorai, Nepal
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <a
                  href="tel:+9779864880095"
                  className="text-secondary-300 hover:text-white transition-colors"
                >
                  +977 9864880095
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <a
                  href="mailto:info@gorkhaengineering.com"
                  className="text-secondary-300 hover:text-white transition-colors"
                >
                  gurkhaengineering2@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-secondary-400 text-sm">
            &copy; {currentYear} Gorkha Engineering. All rights reserved.
          </p>
          <p className="text-secondary-400 text-sm mt-2 md:mt-0">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link
              to="/terms"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;