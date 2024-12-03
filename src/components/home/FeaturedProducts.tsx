import { Product } from '../../types';

const featuredProducts: Product[] = [
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

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">GHS {product.price}</span>
                  <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}