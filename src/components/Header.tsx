import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getAllCategories } from '../data/products';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();
  const categories = getAllCategories();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-emerald-800">
              Prakriti Furniture
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-emerald-700 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <Link to="/products" className="text-gray-800 hover:text-emerald-700 transition-colors">
                Products
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 transform scale-0 group-hover:scale-100 transition-transform origin-top duration-150 ease-in-out">
                {categories.map((category) => (
                  <Link 
                    key={category}
                    to={`/products/${category}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 capitalize"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/contact" className="text-gray-800 hover:text-emerald-700 transition-colors">
              Contact
            </Link>
            <Link to="/consultation" className="text-gray-800 hover:text-emerald-700 transition-colors">
              Consultation
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center">
            <button className="p-2 text-gray-800 hover:text-emerald-700">
              <Search size={20} />
            </button>
            <Link to="/cart" className="p-2 text-gray-800 hover:text-emerald-700 relative">
              <ShoppingCart size={20} />
              {getTotalItems() > 0 && (
                <span className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <button className="p-2 text-gray-800 hover:text-emerald-700 hidden md:block">
              <User size={20} />
            </button>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu}
              className="p-2 ml-2 text-gray-800 hover:text-emerald-700 md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <nav className="flex flex-col px-4 py-2">
            <Link to="/" className="py-3 text-gray-800 hover:text-emerald-700 border-b border-gray-100">
              Home
            </Link>
            <Link to="/products" className="py-3 text-gray-800 hover:text-emerald-700 border-b border-gray-100">
              All Products
            </Link>
            {categories.map((category) => (
              <Link 
                key={category}
                to={`/products/${category}`}
                className="py-2 pl-4 text-gray-700 hover:text-emerald-700 capitalize text-sm"
              >
                {category}
              </Link>
            ))}
            <Link to="/contact" className="py-3 text-gray-800 hover:text-emerald-700 border-b border-gray-100">
              Contact
            </Link>
            <Link to="/consultation" className="py-3 text-gray-800 hover:text-emerald-700">
              Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;