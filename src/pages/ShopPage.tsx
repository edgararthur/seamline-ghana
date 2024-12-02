import { useState } from 'react';
import { Filter } from 'lucide-react';
import ProductGrid from '../components/shop/ProductGrid';
import ProductFilters from '../components/shop/ProductFilters';

export default function ShopPage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center space-x-2 text-gray-600"
        >
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className={`md:w-64 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <ProductFilters />
        </aside>
        <main className="flex-1">
          <ProductGrid />
        </main>
      </div>
    </div>
  );
}