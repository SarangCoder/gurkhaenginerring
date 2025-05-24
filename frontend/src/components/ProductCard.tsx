import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types/types';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart(product, 1);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Product badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.new && (
          <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">New</span>
        )}
        {product.bestSeller && (
          <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">Best Seller</span>
        )}
        {product.discountPrice && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% Off
          </span>
        )}
      </div>

      {/* Quick action buttons */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <button 
          className="bg-white text-gray-700 hover:text-red-500 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Add to wishlist"
        >
          <Heart size={18} />
        </button>
        <button 
          onClick={handleAddToCart}
          className="bg-white text-gray-700 hover:text-emerald-600 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Add to cart"
        >
          <ShoppingCart size={18} />
        </button>
      </div>

      <Link to={`/product/${product.id}`} className="block">
        {/* Product image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Product info */}
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
          
          <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
          
          <div className="flex items-center justify-between mt-2">
            <div>
              {product.discountPrice ? (
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-emerald-700">${product.discountPrice.toFixed(2)}</span>
                  <span className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-lg font-bold text-emerald-700">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <span className={`text-sm font-medium ${product.inStock ? 'text-emerald-600' : 'text-red-500'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>
      </Link>
      
      {/* View details + add to cart - visible on mobile or always visible option */}
      <div className="p-4 pt-0">
        <div className="grid grid-cols-2 gap-2">
          <Link 
            to={`/product/${product.id}`}
            className="btn-secondary text-center py-2 text-sm font-medium"
          >
            View Details
          </Link>
          <button 
            onClick={handleAddToCart}
            className="btn-primary py-2 text-sm font-medium flex items-center justify-center gap-1"
            disabled={!product.inStock}
          >
            <ShoppingCart size={16} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;