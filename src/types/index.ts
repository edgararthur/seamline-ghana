export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: Category;
  stock: number;
  is_customizable: boolean;
  created_at: string;
  updated_at: string;
  images: ProductImage[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface ProductImage {
  id: string;
  image: string;
  alt_text: string;
  is_feature: boolean;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  author: User;
  featured_image: string;
  created_at: string;
  updated_at: string;
  is_published: boolean;
  comments: Comment[];
}

export interface Comment {
  id: string;
  post: string;
  author: User;
  content: string;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  phone_number?: string;
  address?: string;
}

export interface Order {
  id: string;
  user: User;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total_amount: number;
  shipping_address: string;
  created_at: string;
  updated_at: string;
  items: OrderItem[];
}

export interface OrderItem {
  id: string;
  order: string;
  product: Product;
  quantity: number;
  price: number;
  customization_details?: Record<string, unknown>;
}