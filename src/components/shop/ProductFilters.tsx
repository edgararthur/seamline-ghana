import { useState } from 'react';

const categories = ['All', 'Accessories', 'Apparel'];
const priceRanges = ['Under $50', '$50 - $100', '$100 - $200', 'Over $200'];

export default function ProductFilters() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mr-2"
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range} className="flex items-center">
              <input
                type="radio"
                name="priceRange"
                value={range}
                checked={selectedPriceRange === range}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="mr-2"
              />
              {range}
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          setSelectedCategory('All');
          setSelectedPriceRange(null);
        }}
        className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200"
      >
        Reset Filters
      </button>
    </div>
  );
}