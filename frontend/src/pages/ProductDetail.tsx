import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Truck, ShieldCheck, ArrowRight, Plus, Minus } from 'lucide-react';
import ProductGallery from '../components/ProductGallery';
import { getProductById, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import toast from 'react-hot-toast';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const { addToCart } = useCart();
  
  const product = id ? getProductById(id) : undefined;
  
  // Set default selected color when product loads
  useEffect(() => {
    if (product && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-medium mb-4">Product Not Found</h2>
        <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="btn-primary">
          Browse All Products
        </Link>
      </div>
    );
  }
  
  // Get related products (same category, excluding current product)
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-emerald-600 mb-6"
      >
        <ArrowLeft size={20} className="mr-2" /> Back to Products
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Product Gallery */}
        <div>
          <ProductGallery images={product.images} productName={product.name} />
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-serif font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-6">
            <p className="text-gray-600 capitalize mr-6">{product.category}</p>
            <span className={`px-3 py-1 text-sm rounded-full ${product.inStock ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          
          <div className="mb-6">
            {product.discountPrice ? (
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-emerald-700">${product.discountPrice.toFixed(2)}</span>
                <span className="text-xl text-gray-500 line-through">${product.price.toFixed(2)}</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 text-sm rounded-md">
                  Save ${(product.price - product.discountPrice).toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-emerald-700">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
            
            <div className="mt-6">
              <h3 className="font-medium mb-2">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Color: <span className="font-normal">{selectedColor}</span></h3>
            <div className="flex flex-wrap gap-3">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedColor === color 
                      ? 'border-emerald-600 ring-2 ring-emerald-200' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center border border-gray-300 rounded-md w-36">
              <button 
                onClick={decrementQuantity} 
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-emerald-600"
                disabled={quantity <= 1}
              >
                <Minus size={18} />
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 h-10 text-center border-x border-gray-300 focus:outline-none"
                min="1"
              />
              <button 
                onClick={incrementQuantity}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-emerald-600"
              >
                <Plus size={18} />
              </button>
            </div>
            
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="btn-primary flex-grow py-3"
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
          
          {/* Product Details */}
          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div>
              <h3 className="font-medium mb-1">Dimensions (cm):</h3>
              <p className="text-gray-700">
                W: {product.dimensions.width} × H: {product.dimensions.height} × D: {product.dimensions.depth}
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-1">Materials:</h3>
              <p className="text-gray-700">{product.materials.join(', ')}</p>
            </div>
          </div>
          
          {/* Shipping and Returns */}
          <div className="mt-8 space-y-3">
            <div className="flex items-start">
              <Truck className="text-emerald-600 mt-1 mr-3 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-medium">Free Delivery</h4>
                <p className="text-sm text-gray-600">Free shipping on orders over $999. Delivery in 5-7 business days.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <ShieldCheck className="text-emerald-600 mt-1 mr-3 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-medium">5-Year Warranty</h4>
                <p className="text-sm text-gray-600">All our products come with a 5-year warranty against manufacturing defects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif font-bold">You May Also Like</h2>
            <Link to={`/products/${product.category}`} className="text-emerald-600 hover:text-emerald-800 flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;