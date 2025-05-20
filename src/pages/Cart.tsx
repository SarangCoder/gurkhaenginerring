import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } = useCart();

  const handleRemoveItem = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast.success(`${productName} removed from cart`);
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  // Calculate subtotal, tax and total
  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08; // 8% tax rate
  const shipping = subtotal > 999 ? 0 : 99.99;
  const total = subtotal + tax + shipping;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <ShoppingCart size={32} className="text-gray-500" />
          </div>
          <h1 className="text-3xl font-serif font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet. 
            Continue shopping to find beautiful furniture for your home.
          </p>
          <Link to="/products" className="btn-primary">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold mb-8">Your Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-medium">Cart Items ({getTotalItems()})</h2>
            </div>

            <ul className="divide-y">
              {items.map((item) => (
                <li key={item.product.id} className="p-6 flex flex-col sm:flex-row gap-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <Link to={`/product/${item.product.id}`}>
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        className="w-24 h-24 object-cover rounded-md"
                      />
                    </Link>
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow">
                    <Link to={`/product/${item.product.id}`}>
                      <h3 className="text-lg font-medium">{item.product.name}</h3>
                    </Link>
                    <p className="text-sm text-gray-500 capitalize mb-2">{item.product.category}</p>
                    
                    <div className="flex flex-wrap justify-between items-end mt-auto">
                      <div className="flex items-center mt-2">
                        <button 
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value) || 1)}
                          className="w-12 h-8 border-y border-gray-300 text-center"
                        />
                        <button 
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <div className="flex items-center mt-2">
                        <p className="font-medium mr-4">
                          ${((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
                        </p>
                        <button 
                          onClick={() => handleRemoveItem(item.product.id, item.product.name)}
                          className="text-red-500 hover:text-red-700"
                          aria-label={`Remove ${item.product.name} from cart`}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-medium mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between pt-4 border-t font-medium text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {shipping > 0 && (
              <p className="text-sm text-gray-500 mb-6">
                Free shipping on orders over $999. 
                Add ${(999 - subtotal).toFixed(2)} more to qualify for free shipping.
              </p>
            )}

            <Link 
              to="/checkout" 
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              Proceed to Checkout
              <ArrowRight size={18} />
            </Link>

            <div className="mt-6">
              <Link 
                to="/products" 
                className="text-emerald-600 hover:text-emerald-800 text-sm font-medium"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;