import { Product } from '../../types';
import ProductCard from './ProductCard';

const products: Product[] = [
  {
    id: '1',
    name: 'Detachable Collar',
    description: 'Elegant detachable collar with pearl embellishments',
    price: 49.99,
    category: 'accessories',
    images: ['https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e'],
    inStock: true,
    customizable: true
  },
  {
    id: '2',
    name: 'Stylish Cape',
    description: 'Modern cape design perfect for any occasion',
    price: 129.99,
    category: 'apparel',
    images: ['https://images.unsplash.com/photo-1539109136881-3be0616acf4b'],
    inStock: true,
    customizable: true
  }
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}