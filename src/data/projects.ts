import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 'modern-family-home',
    title: 'Modern Family Home',
    shortDescription: 'A beautiful 3-bedroom modern family home with open concept living space',
    fullDescription: 'This stunning modern family home features 3 bedrooms, 2.5 bathrooms, and an open concept living area. The design incorporates large windows for natural light, energy-efficient appliances, and a spacious outdoor living area. Built with high-quality materials and attention to detail, this home combines comfort, style, and functionality.',
    location: 'Tulsipur, Dang',
    price: 15000000,
    thumbnail: './home1.jpg',
    images: [
      '/home1-A.jpg',
       '/home1-B.jpg',
        '/home1-C.jpg',
         '/home1-D.jpg',
          '/home1-E.jpg',
    ],
    features: [
      '3 Bedrooms',
      '2.5 Bathrooms',
      'Open concept kitchen and living room',
      'Energy-efficient appliances',
      'Large windows for natural light',
      'Hardwood flooring',
      'Spacious outdoor living area',
      'Double car garage'
    ],
    category: 'Residential',
    completionDate: 'March 2023'
  },
  {
    id: 'luxury-villa',
    title: 'Luxury Villa With Pool',
    shortDescription: 'An elegant 5-bedroom luxury villa with swimming pool and garden',
    fullDescription: 'This magnificent luxury villa offers 5 bedrooms, 4 bathrooms, and a range of premium amenities. The property features a large swimming pool, beautifully landscaped garden, and spacious living areas with high ceilings. The kitchen is equipped with top-of-the-line appliances, and the master suite includes a walk-in closet and en-suite bathroom with premium fixtures. The exterior combines modern design with traditional elements for a timeless appeal.',
    location: 'Ghorahi, Dang',
    price: 45000000,
    thumbnail: './home2.jpg',
    images: [
     '/home2-A.jpg',
      '/home2-B.jpg',
       '/home2-C.jpg',
        '/home2-D.jpg',
    ],
    features: [
      '5 Bedrooms',
      '4 Bathrooms',
      'Swimming pool',
      'Landscaped garden',
      'High ceilings',
      'Premium kitchen appliances',
      'Master suite with walk-in closet',
      'Smart home automation',
      'Outdoor entertaining area'
    ],
    category: 'Luxury',
    completionDate: 'December 2022'
  },
  {
    id: 'commercial-complex',
    title: 'Modern Commercial Complex',
    shortDescription: 'A state-of-the-art commercial building with retail and office spaces',
    fullDescription: 'This modern commercial complex offers a mix of retail and office spaces designed for maximum functionality and aesthetic appeal. The building features floor-to-ceiling windows, energy-efficient systems, and flexible floor plans that can be customized to tenant needs. The complex includes ample parking, security systems, and common areas for networking and collaboration. Located in a prime area, this property offers excellent visibility and accessibility.',
    location: 'Central Ghorahi, Dang',
    price: 75000000,
    thumbnail: './home3.jpg',
    images: [
      '/home3-A.jpg',
       '/home3-B.jpg',
        '/home3-C.jpg',
         '/home3-D.jpg',
          '/home3-E.jpg',
    ],
    features: [
      '10,000 sq ft of retail space',
      '15,000 sq ft of office space',
      'Floor-to-ceiling windows',
      'Energy-efficient HVAC systems',
      'Flexible floor plans',
      'Ample parking',
      'Security systems',
      'Common areas',
      'High-speed internet infrastructure'
    ],
    category: 'Commercial',
    completionDate: 'August 2023'
  },
  {
    id: 'apartment-complex',
    title: 'Modern Apartment Complex',
    shortDescription: 'A contemporary apartment building with 24 luxury units and amenities',
    fullDescription: 'This modern apartment complex features 24 luxury units ranging from one to three bedrooms. The building includes a range of amenities such as a fitness center, rooftop garden, and community lounge. Each apartment is designed with open floor plans, high-quality finishes, and smart home features. The complex is built to high energy-efficiency standards and incorporates sustainable building practices throughout.',
    location: 'Lamahi, Dang',
    price: 120000000,
    thumbnail: './home4.jpg',
    images: [
      '/home4-A.jpg',
        '/home4-B.jpg',
          '/home4-C.jpg',
            '/home4-D.jpg',
    ],
    features: [
      '24 luxury units',
      'One to three-bedroom layouts',
      'Fitness center',
      'Rooftop garden',
      'Community lounge',
      'Open floor plans',
      'High-quality finishes',
      'Smart home features',
      'Energy-efficient design'
    ],
    category: 'Residential',
    completionDate: 'May 2023'
  },
  {
    id: 'eco-friendly-house',
    title: 'Eco-Friendly Family House',
    shortDescription: 'A sustainable 4-bedroom house with solar panels and rainwater harvesting',
    fullDescription: 'This eco-friendly family house demonstrates our commitment to sustainable construction. The 4-bedroom home features solar panels, rainwater harvesting systems, and energy-efficient appliances and fixtures throughout. Built with sustainable and locally-sourced materials where possible, the house achieves a small ecological footprint without compromising on comfort or style. The design incorporates passive heating and cooling principles to minimize energy consumption year-round.',
    location: 'Tulsipur, Dang',
    price: 25000000,
    thumbnail: 'https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    features: [
      '4 Bedrooms',
      '3 Bathrooms',
      'Solar panel system',
      'Rainwater harvesting',
      'Energy-efficient appliances',
      'Sustainable building materials',
      'Passive heating and cooling design',
      'Low-VOC finishes',
      'Native landscaping'
    ],
    category: 'Eco-Friendly',
    completionDate: 'January 2023'
  },
  {
    id: 'traditional-nepali-home',
    title: 'Traditional Nepali Home',
    shortDescription: 'A beautiful blend of traditional Nepali architecture with modern amenities',
    fullDescription: 'This unique project combines traditional Nepali architectural elements with modern comforts and conveniences. The home features traditional woodwork, sloped roofs, and culturally significant design elements while incorporating modern plumbing, electrical systems, and interior finishes. The result is a beautiful blend of heritage and contemporary living that honors Nepali cultural traditions while providing all the comforts of a modern home.',
    location: 'Ghorahi, Dang',
    price: 18000000,
    thumbnail: 'https://images.pexels.com/photos/2816323/pexels-photo-2816323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/2816323/pexels-photo-2816323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    features: [
      'Traditional Nepali architectural elements',
      '3 Bedrooms',
      '2 Bathrooms',
      'Handcrafted wooden details',
      'Traditional courtyard',
      'Modern kitchen and bathrooms',
      'Energy-efficient updates',
      'Cultural design elements',
      'Blend of heritage and modern living'
    ],
    category: 'Traditional',
    completionDate: 'October 2022'
  }
];