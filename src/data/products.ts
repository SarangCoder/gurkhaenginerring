import { Product } from '../types/types';

export const products: Product[] = [
  // Sofas
  {
    id: 'sofa-1',
    name: 'Harmony Curved Sofa',
    category: 'sofa',
    price: 1299.99,
    discountPrice: 1099.99,
    images: [
      'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg',
      'https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg'
    ],
    description: 'Embrace the elegance of our Harmony Curved Sofa. This statement piece features a gracefully curved silhouette that adds a touch of sophistication to any living space. Crafted with premium materials and meticulous attention to detail, this sofa combines style with exceptional comfort.',
    features: [
      'Curved design for visual interest and conversation-friendly seating',
      'Premium high-resilience foam cushions for lasting comfort',
      'Solid hardwood frame for durability',
      'Stain-resistant upholstery'
    ],
    dimensions: {
      width: 240,
      height: 85,
      depth: 95
    },
    materials: ['Velvet', 'Hardwood', 'High-resilience foam'],
    colors: ['Emerald Green', 'Navy Blue', 'Dusty Rose', 'Charcoal'],
    inStock: true,
    featured: true
  },
  {
    id: 'sofa-2',
    name: 'Serenity Sectional',
    category: 'sofa',
    price: 1899.99,
    images: [
      'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      'https://images.pexels.com/photos/6489127/pexels-photo-6489127.jpeg'
    ],
    description: 'Transform your living room with our versatile Serenity Sectional. This modular design allows you to create the perfect configuration for your space, while the plush cushioning provides exceptional comfort for family gatherings or movie nights.',
    features: [
      'Modular design for versatile configurations',
      'Deep seats for maximum comfort',
      'Removable and washable covers',
      'Hidden storage in chaise section',
      'Built-in USB charging ports'
    ],
    dimensions: {
      width: 320,
      height: 90,
      depth: 150
    },
    materials: ['Premium linen', 'Engineered hardwood', 'Memory foam'],
    colors: ['Sand', 'Stone Grey', 'Midnight Blue'],
    inStock: true,
    bestSeller: true
  },
  
  // Tables
  {
    id: 'table-1',
    name: 'Zenith Dining Table',
    category: 'table',
    price: 899.99,
    images: [
      'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
      'https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg',
      'https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg'
    ],
    description: 'The Zenith Dining Table combines timeless elegance with modern craftsmanship. The stunning natural edge table top showcases the wood\'s organic beauty, while the sleek metal base provides a contemporary geometric contrast.',
    features: [
      'Natural edge solid wood top',
      'Geometric metal base with anti-scratch floor protectors',
      'Water and heat resistant finish',
      'Seats up to 8 people comfortably'
    ],
    dimensions: {
      width: 200,
      height: 76,
      depth: 100
    },
    materials: ['Acacia wood', 'Powder-coated steel'],
    colors: ['Natural Wood/Black', 'Walnut/Brass', 'Oak/Matte Black'],
    inStock: true,
    featured: true
  },
  {
    id: 'table-2',
    name: 'Solstice Coffee Table',
    category: 'table',
    price: 549.99,
    discountPrice: 499.99,
    images: [
      'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg',
      'https://images.pexels.com/photos/1866059/pexels-photo-1866059.jpeg',
      'https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg'
    ],
    description: 'Elevate your living room with the Solstice Coffee Table. This multi-level design provides ample display space while maintaining a light, airy feel. The combination of natural marble and metal creates a sophisticated statement piece for any interior.',
    features: [
      'Genuine marble top',
      'Multi-level design for display flexibility',
      'Waterfall edge detail',
      'Anti-tip structure for safety'
    ],
    dimensions: {
      width: 120,
      height: 45,
      depth: 70
    },
    materials: ['Marble', 'Stainless steel'],
    colors: ['White Marble/Gold', 'Black Marble/Matte Black', 'Green Marble/Brass'],
    inStock: true
  },
  
  // Chairs
  {
    id: 'chair-1',
    name: 'Aurora Accent Chair',
    category: 'chair',
    price: 449.99,
    images: [
      'https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg',
      'https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg',
      'https://images.pexels.com/photos/7045014/pexels-photo-7045014.jpeg'
    ],
    description: 'Add a touch of elegance to any room with our Aurora Accent Chair. The sculptural silhouette combines mid-century modern inspiration with contemporary comfort, creating a versatile piece that works beautifully in living rooms, bedrooms, or reading nooks.',
    features: [
      'Sculptural curved backrest',
      'Swivel base for 360° movement',
      'High-density foam cushioning',
      'Reinforced hardwood frame'
    ],
    dimensions: {
      width: 75,
      height: 85,
      depth: 80
    },
    materials: ['Premium velvet', 'Walnut wood', 'High-density foam'],
    colors: ['Emerald Green', 'Blush Pink', 'Mustard Yellow', 'Slate Blue'],
    inStock: true,
    bestSeller: true
  },
  {
    id: 'chair-2',
    name: 'Esplanade Dining Chair Set',
    category: 'chair',
    price: 699.99,
    discountPrice: 599.99,
    images: [
      'https://images.pexels.com/photos/6489601/pexels-photo-6489601.jpeg',
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg'
    ],
    description: 'Complete your dining space with our Esplanade Chair Set. These ergonomically designed chairs combine comfort with sophisticated style, featuring gently curved backs and luxurious upholstery that invites lingering conversations around the dinner table.',
    features: [
      'Set of 4 matching chairs',
      'Ergonomic curved back support',
      'Stain-resistant fabric',
      'Reinforced joints for durability',
      'Protective floor glides'
    ],
    dimensions: {
      width: 50,
      height: 90,
      depth: 55
    },
    materials: ['Walnut wood', 'Premium linen', 'High-density foam'],
    colors: ['Cream', 'Charcoal', 'Sage Green', 'Terracotta'],
    inStock: true,
    featured: true
  },
  
  // Curtains
  {
    id: 'curtain-1',
    name: 'Cascade Velvet Curtains',
    category: 'curtain',
    price: 189.99,
    images: [
      'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg',
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg',
      'https://images.pexels.com/photos/6444281/pexels-photo-6444281.jpeg'
    ],
    description: 'Transform your windows with our luxurious Cascade Velvet Curtains. These heavyweight drapes create a dramatic focal point while providing excellent light blocking and insulation properties. The rich velvet fabric catches the light beautifully, adding depth and texture to any room.',
    features: [
      'Blackout lining for light control and privacy',
      'Thermal properties for energy efficiency',
      'Noise reduction benefits',
      'Rod pocket and back tab hanging options',
      'Machine washable for easy care'
    ],
    dimensions: {
      width: 140,
      height: 240,
      depth: 0
    },
    materials: ['Premium velvet', 'Blackout lining'],
    colors: ['Royal Blue', 'Emerald Green', 'Dusty Rose', 'Charcoal', 'Burgundy'],
    inStock: true
  },
  {
    id: 'curtain-2',
    name: 'Whisper Sheer Curtains',
    category: 'curtain',
    price: 129.99,
    images: [
      'https://images.pexels.com/photos/271649/pexels-photo-271649.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'
    ],
    description: 'Add an ethereal quality to your space with our Whisper Sheer Curtains. These lightweight, flowing curtains diffuse sunlight beautifully, creating a soft, dreamy atmosphere while maintaining daytime privacy. Perfect for layering or as standalone window treatments in spaces where natural light is desired.',
    features: [
      'Light-filtering without complete blackout',
      'UV protection to prevent furniture fading',
      'Weighted hem for elegant draping',
      'Compatible with standard curtain rods',
      'Gentle machine wash cycle safe'
    ],
    dimensions: {
      width: 140,
      height: 240,
      depth: 0
    },
    materials: ['Voile', 'Polyester blend'],
    colors: ['White', 'Ivory', 'Pale Blue', 'Blush Pink', 'Silver Grey'],
    inStock: true,
    new: true
  },
  
  // Beds
  {
    id: 'bed-1',
    name: 'Monarch Platform Bed',
    category: 'bed',
    price: 1299.99,
    images: [
      'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
      'https://images.pexels.com/photos/6186867/pexels-photo-6186867.jpeg'
    ],
    description: 'Transform your bedroom into a sanctuary with our Monarch Platform Bed. This statement piece features a striking upholstered headboard that extends to the floor, creating a dramatic backdrop for your bedroom retreat. The platform design eliminates the need for a box spring while providing ample support.',
    features: [
      'Floor-to-ceiling upholstered headboard',
      'Solid wood frame construction',
      'No box spring required',
      'Integrated LED lighting',
      'Under-bed storage drawers',
      'Adjustable headboard reading lights'
    ],
    dimensions: {
      width: 190,
      height: 150,
      depth: 215
    },
    materials: ['Solid oak', 'Premium velvet', 'High-density foam'],
    colors: ['Charcoal Grey', 'Navy Blue', 'Emerald Green', 'Blush Pink'],
    inStock: true,
    featured: true
  },
  {
    id: 'bed-2',
    name: 'Luna Canopy Bed',
    category: 'bed',
    price: 1799.99,
    discountPrice: 1599.99,
    images: [
      'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg',
      'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
      'https://images.pexels.com/photos/6316063/pexels-photo-6316063.jpeg'
    ],
    description: 'Create a dreamy bedroom sanctuary with our Luna Canopy Bed. This architectural piece combines the romance of a traditional canopy with clean, contemporary lines. The minimalist four-poster frame creates a sense of enclosure without overwhelming the space, perfect for draping with sheer fabrics or leaving elegantly bare.',
    features: [
      'Four-poster canopy design',
      'Solid wood construction',
      'Reinforced center support',
      'Adjustable height options',
      'Compatible with standard mattresses'
    ],
    dimensions: {
      width: 180,
      height: 210,
      depth: 220
    },
    materials: ['Solid walnut', 'Brushed brass'],
    colors: ['Walnut/Brass', 'Black/Matte Black', 'White Oak/Black'],
    inStock: true,
    bestSeller: true
  },
  
  // Cupboards
  {
    id: 'cupboard-1',
    name: 'Meridian Armoire',
    category: 'cupboard',
    price: 1599.99,
    images: [
      'https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg',
      'https://images.pexels.com/photos/6758799/pexels-photo-6758799.jpeg',
      'https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg'
    ],
    description: 'Elevate your bedroom storage with our Meridian Armoire. This sophisticated wardrobe combines generous storage capacity with refined aesthetics. The thoughtfully designed interior features hanging space, adjustable shelves, and specialized compartments to keep your clothing and accessories beautifully organized.',
    features: [
      'Full-length hanging section',
      'Adjustable shelving',
      'Built-in jewelry drawer with velvet lining',
      'Mirror on inside of door',
      'Soft-close drawers and doors',
      'Cable management holes for media storage'
    ],
    dimensions: {
      width: 120,
      height: 200,
      depth: 60
    },
    materials: ['Solid oak', 'Tempered glass', 'Brass hardware'],
    colors: ['Natural Oak', 'Walnut', 'White Oak/Brass'],
    inStock: true
  },
  {
    id: 'cupboard-2',
    name: 'Verona Display Cabinet',
    category: 'cupboard',
    price: 1299.99,
    images: [
      'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg',
      'https://images.pexels.com/photos/3952034/pexels-photo-3952034.jpeg',
      'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg'
    ],
    description: 'Showcase your treasured collections in our elegant Verona Display Cabinet. This sophisticated piece combines open and closed storage with glass-fronted display areas illuminated by subtle LED lighting. Perfect for dining rooms, living areas, or home offices where beautiful storage is essential.',
    features: [
      'Tempered glass shelves and doors',
      'LED display lighting with dimmer',
      'Mix of open and closed storage',
      'Adjustable shelf positions',
      'Soft-close doors with elegant hardware',
      'Cable management for media equipment'
    ],
    dimensions: {
      width: 110,
      height: 180,
      depth: 45
    },
    materials: ['Solid walnut', 'Tempered glass', 'Brass hardware'],
    colors: ['Walnut/Glass', 'Black/Glass', 'White/Glass'],
    inStock: true,
    new: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestSellerProducts = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.new);
};

export const getAllCategories = (): string[] => {
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
};

export const filterProducts = (
  products: Product[],
  filters: {
    category?: string;
    priceRange?: { min: number; max: number };
    materials?: string[];
    colors?: string[];
    inStock?: boolean;
  }
): Product[] => {
  return products.filter(product => {
    // Filter by category
    if (filters.category && product.category !== filters.category) {
      return false;
    }
    
    // Filter by price range
    if (filters.priceRange) {
      const price = product.discountPrice || product.price;
      if (price < filters.priceRange.min || price > filters.priceRange.max) {
        return false;
      }
    }
    
    // Filter by materials
    if (filters.materials && filters.materials.length > 0) {
      if (!product.materials.some(material => filters.materials?.includes(material))) {
        return false;
      }
    }
    
    // Filter by colors
    if (filters.colors && filters.colors.length > 0) {
      if (!product.colors.some(color => filters.colors?.includes(color))) {
        return false;
      }
    }
    
    // Filter by stock
    if (filters.inStock !== undefined && product.inStock !== filters.inStock) {
      return false;
    }
    
    return true;
  });
};

export const sortProducts = (
  products: Product[],
  sortBy: string
): Product[] => {
  const sortedProducts = [...products];
  
  switch (sortBy) {
    case 'price-asc':
      return sortedProducts.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
    case 'price-desc':
      return sortedProducts.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
    case 'name-asc':
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return sortedProducts;
  }
};