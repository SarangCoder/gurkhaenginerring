export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  price: number;
  thumbnail: string;
  images: string[];
  features: string[];
  category: string;
  completionDate: string;
}