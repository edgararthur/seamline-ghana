export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'accessories' | 'apparel';
  images: string[];
  inStock: boolean;
  customizable: boolean;
}

export interface TestimonialType {
  id: string;
  name: string;
  image: string;
  comment: string;
  rating: number;
}