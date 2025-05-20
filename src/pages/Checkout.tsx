import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, Shield, Check, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface PaymentInfo {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US'
  });
  
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  
  // Check if cart is empty and redirect to products
  if (items.length === 0) {
    navigate('/products');
    return null;
  }
  
  // Calculate amounts
  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08; // 8% tax rate
  const shipping = subtotal > 999 ? 0 : 99.99;
  const total = subtotal + tax + shipping;
  
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo(0, 0);
  };
  
  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Clear cart and show success
      clearCart();
      setStep(3);
      window.scrollTo(0, 0);
    } catch (error) {
      toast.error('There was a problem processing your payment. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      const formattedValue = value
        .replace(/\s/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim()
        .slice(0, 19);
      
      setPaymentInfo(prev => ({ ...prev, [name]: formattedValue }));
      return;
    }
    
    // Format expiry date with slash
    if (name === 'expiryDate') {
      const formattedValue = value
        .replace(/\//g, '')
        .replace(/(\d{2})(\d{0,2})/, '$1/$2')
        .slice(0, 5);
      
      setPaymentInfo(prev => ({ ...prev, [name]: formattedValue }));
      return;
    }
    
    setPaymentInfo(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Checkout Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center">
          <div className={`flex items-center ${step >= 1 ? 'text-emerald-600' : 'text-gray-400'}`}>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full mr-2 ${
              step >= 1 ? 'bg-emerald-100' : 'bg-gray-200'
            }`}>
              {step > 1 ? <Check size={16} /> : 1}
            </div>
            <span className="font-medium">Shipping</span>
          </div>
          
          <div className={`w-12 h-0.5 mx-2 ${step > 1 ? 'bg-emerald-600' : 'bg-gray-200'}`}></div>
          
          <div className={`flex items-center ${step >= 2 ? 'text-emerald-600' : 'text-gray-400'}`}>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full mr-2 ${
              step >= 2 ? 'bg-emerald-100' : 'bg-gray-200'
            }`}>
              {step > 2 ? <Check size={16} /> : 2}
            </div>
            <span className="font-medium">Payment</span>
          </div>
          
          <div className={`w-12 h-0.5 mx-2 ${step > 2 ? 'bg-emerald-600' : 'bg-gray-200'}`}></div>
          
          <div className={`flex items-center ${step >= 3 ? 'text-emerald-600' : 'text-gray-400'}`}>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full mr-2 ${
              step >= 3 ? 'bg-emerald-100' : 'bg-gray-200'
            }`}>
              {step > 3 ? <Check size={16} /> : 3}
            </div>
            <span className="font-medium">Confirmation</span>
          </div>
        </div>
      </div>
      
      {/* Step 1: Shipping Information */}
      {step === 1 && (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h1 className="text-2xl font-serif font-bold mb-6">Shipping Information</h1>
            
            <form onSubmit={handleShippingSubmit} className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={shippingInfo.firstName}
                    onChange={handleShippingChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={shippingInfo.lastName}
                    onChange={handleShippingChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={shippingInfo.email}
                    onChange={handleShippingChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={shippingInfo.phone}
                    onChange={handleShippingChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleShippingChange}
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleShippingChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={shippingInfo.state}
                    onChange={handleShippingChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={shippingInfo.zipCode}
                    onChange={handleShippingChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                  />
                </div>
                
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={shippingInfo.country}
                    onChange={handleShippingChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                  >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => navigate('/cart')}
                  className="flex items-center text-gray-600 hover:text-emerald-600"
                >
                  <ArrowLeft size={16} className="mr-1" /> Back to Cart
                </button>
                
                <button type="submit" className="btn-primary">
                  Continue to Payment
                </button>
              </div>
            </form>
          </div>
          
          <div className="lg:w-1/3">
            <OrderSummary 
              items={items} 
              subtotal={subtotal} 
              tax={tax} 
              shipping={shipping} 
              total={total} 
            />
          </div>
        </div>
      )}
      
      {/* Step 2: Payment Information */}
      {step === 2 && (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h1 className="text-2xl font-serif font-bold mb-6">Payment Information</h1>
            
            <form onSubmit={handlePaymentSubmit} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium">Payment Details</h2>
                <div className="flex items-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png" alt="Visa" className="h-6 mr-2" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 mr-2" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="American Express" className="h-6" />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentInfo.cardNumber}
                    onChange={handlePaymentChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 pl-10"
                  />
                  <CreditCard size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                  Name on Card *
                </label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={paymentInfo.cardName}
                  onChange={handlePaymentChange}
                  placeholder="John Doe"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date *
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={paymentInfo.expiryDate}
                    onChange={handlePaymentChange}
                    placeholder="MM/YY"
                    maxLength={5}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                    Security Code (CVV) *
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={paymentInfo.cvv}
                    onChange={handlePaymentChange}
                    placeholder="123"
                    maxLength={4}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              
              <div className="mb-6 p-4 bg-gray-50 rounded-md">
                <div className="flex items-start">
                  <Shield size={20} className="text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">
                    Your payment information is secured with industry-standard encryption. 
                    We never store your full card details on our servers.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center text-gray-600 hover:text-emerald-600"
                >
                  <ArrowLeft size={16} className="mr-1" /> Back to Shipping
                </button>
                
                <button 
                  type="submit" 
                  className="btn-primary"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Place Order'}
                </button>
              </div>
            </form>
          </div>
          
          <div className="lg:w-1/3">
            <OrderSummary 
              items={items} 
              subtotal={subtotal} 
              tax={tax} 
              shipping={shipping} 
              total={total} 
            />
          </div>
        </div>
      )}
      
      {/* Step 3: Order Confirmation */}
      {step === 3 && (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Check size={32} className="text-emerald-600" />
            </div>
            <h1 className="text-3xl font-serif font-bold mb-2">Thank You for Your Order!</h1>
            <p className="text-gray-600">
              Your order has been placed successfully. You will receive an email confirmation shortly.
            </p>
          </div>
          
          <div className="mb-8 p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Order Number:</span>
              <span>PRK-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Order Date:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Total Amount:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4">Shipping Information</h2>
            <p className="mb-1">
              {shippingInfo.firstName} {shippingInfo.lastName}
            </p>
            <p className="mb-1">{shippingInfo.address}</p>
            <p className="mb-1">
              {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}
            </p>
            <p className="mb-1">{shippingInfo.email}</p>
            <p>{shippingInfo.phone}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4">What Happens Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-emerald-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-emerald-600 font-medium">1</span>
                </div>
                <div>
                  <h3 className="font-medium">Order Processing</h3>
                  <p className="text-gray-600">Your order will be processed within 24 hours.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-emerald-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-emerald-600 font-medium">2</span>
                </div>
                <div>
                  <h3 className="font-medium">Shipment</h3>
                  <p className="text-gray-600">Your items will be shipped within 3-5 business days.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-emerald-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-emerald-600 font-medium">3</span>
                </div>
                <div>
                  <h3 className="font-medium">Delivery</h3>
                  <p className="text-gray-600">You will receive a tracking number once your order ships.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/products')}
              className="btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Order Summary Component
interface OrderSummaryProps {
  items: {
    product: {
      id: string;
      name: string;
      price: number;
      discountPrice?: number;
      images: string[];
    };
    quantity: number;
  }[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, subtotal, tax, shipping, total }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
      <h2 className="text-xl font-medium mb-6">Order Summary</h2>
      
      <div className="max-h-80 overflow-y-auto mb-6">
        {items.map((item) => (
          <div key={item.product.id} className="flex items-center mb-4">
            <img 
              src={item.product.images[0]} 
              alt={item.product.name} 
              className="w-16 h-16 object-cover rounded-md mr-4"
            />
            <div className="flex-grow">
              <h3 className="text-sm font-medium">{item.product.name}</h3>
              <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">
                ${((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="space-y-3 pt-4 border-t">
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
        <div className="flex justify-between pt-3 border-t font-bold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="mt-6 space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Truck size={18} className="mr-2 text-emerald-600" />
          {shipping === 0 
            ? 'Free shipping applied'
            : 'Free shipping on orders over $999'
          }
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Shield size={18} className="mr-2 text-emerald-600" />
          Secure payment processing
        </div>
      </div>
    </div>
  );
};

export default Checkout;