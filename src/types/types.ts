export interface Product {
  id: string;
  name: string;
  category: 'sofa' | 'table' | 'chair' | 'curtain' | 'bed' | 'cupboard';
  price: number;
  discountPrice?: number;
  images: string[];
  description: string;
  features: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  materials: string[];
  colors: string[];
  inStock: boolean;
  featured?: boolean;
  bestSeller?: boolean;
  new?: boolean;
}

export interface FilterOptions {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  colors?: string[];
  materials?: string[];
  inStock?: boolean;
}

export interface SortOptions {
  field: 'price' | 'name';
  direction: 'asc' | 'desc';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  interestArea: string;
  message: string;
}