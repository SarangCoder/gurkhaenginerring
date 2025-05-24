import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Phone, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts, getBestSellerProducts, getNewArrivals } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const bestSellers = getBestSellerProducts();
  const newArrivals = getNewArrivals();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg" 
            alt="Modern living room with elegant furniture" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Transform Your Space
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Discover our collection of exquisite, nature-inspired furniture pieces designed for modern living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-primary">
                Shop Collection
              </Link>
              <Link to="/consultation" className="btn-secondary">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Shop by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['sofa', 'table', 'chair', 'curtain', 'bed', 'cupboard'].map((category) => (
              <Link 
                key={category}
                to={`/products/${category}`}
                className="group block relative rounded-lg overflow-hidden aspect-square"
              >
                <img 
                  src={`https://images.pexels.com/photos/${
                    category === 'sofa' ? '1866149' : 
                    category === 'table' ? '1395967' : 
                    category === 'chair' ? '6707628' : 
                    category === 'curtain' ? '1743227' : 
                    category === 'bed' ? '1648768' : 
                    '6758773'
                  }/pexels-photo-${
                    category === 'sofa' ? '1866149' : 
                    category === 'table' ? '1395967' : 
                    category === 'chair' ? '6707628' : 
                    category === 'curtain' ? '1743227' : 
                    category === 'bed' ? '1648768' : 
                    '6758773'
                  }.jpeg`}
                  alt={`${category} category`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/50 transition-colors">
                  <span className="text-white text-xl font-medium capitalize">{category}s</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif font-bold">Featured Products</h2>
            <Link to="/products" className="text-emerald-600 hover:text-emerald-800 flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Truck size={32} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on all orders over $999. We deliver nationwide.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Shield size={32} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">All our products come with a 5-year warranty for peace of mind.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Phone size={32} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Expert Support</h3>
              <p className="text-gray-600">Our design experts are available to help with any questions.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Star size={32} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Easy Returns</h3>
              <p className="text-gray-600">Not satisfied? Return within 30 days for a full refund.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif font-bold">Best Sellers</h2>
            <Link to="/products" className="text-emerald-600 hover:text-emerald-800 flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      {newArrivals.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-serif font-bold">New Arrivals</h2>
              <Link to="/products" className="text-emerald-600 hover:text-emerald-800 flex items-center">
                View All <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {newArrivals.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mb-4">"The Aurora Accent Chair is absolutely stunning. The quality is exceptional and it perfectly complements my living room. Highly recommend!"</p>
              <p className="font-medium">- Sarah Johnson</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mb-4">"I was hesitant to buy furniture online, but Prakriti Furniture exceeded my expectations. The Monarch Platform Bed is beautiful and delivery was smooth."</p>
              <p className="font-medium">- Michael Chen</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mb-4">"The consultation service was invaluable. Their designer helped me choose the perfect pieces for my home office. The result is stunning!"</p>
              <p className="font-medium">- Emma Thompson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Transform Your Space Today</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Ready to elevate your home with our premium furniture collection? Shop now or book a consultation with our design experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-white">
              Shop Now
            </Link>
            <Link to="/consultation" className="btn-outline-white">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;