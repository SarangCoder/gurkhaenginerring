import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/projects', label: 'Our Works' },
    {path:'/our-teams' ,label:'Our Team'},
    { path: '/contact', label: 'Contact Us' },
    
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="z-10">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors duration-300 hover:text-primary-600 ${
                    isActive
                      ? 'text-primary-600'
                      : isScrolled
                      ? 'text-secondary-800'
                      : 'text-white'
                  }`
                }
                end
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="btn-primary flex items-center space-x-1"
            >
              <span>Get a Quote</span>
              <ChevronDown size={16} />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary-800 z-10"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-secondary-800" />
            ) : (
              <Menu
                size={24}
                className={isScrolled ? 'text-secondary-800' : 'text-white'}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-1 pt-24 px-6">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive ? 'text-primary-600' : 'text-secondary-800'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
                end
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="btn-primary inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;