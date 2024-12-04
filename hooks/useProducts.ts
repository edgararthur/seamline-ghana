import { useState, useEffect } from 'react';
import { productService } from '../src/services/products';
import { Product, Category } from '../types';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetchProducts({});
    fetchCategories();
  }, []);

  const fetchProducts = async (params?: Parameters<typeof productService.getProducts>[0]) => {
    try {
      setLoading(true);
      const response = await productService.getProducts(params);
      setProducts(response.results);
      setError(null);
    } catch (error) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await productService.getCategories();
      setCategories(data);
    } catch (error) {
      setError('Failed to fetch categories');
    }
  };

  return {
    products,
    categories,
    loading,
    error,
    fetchProducts
  };
}