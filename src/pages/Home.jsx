import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [limit, setLimit] = useState(12);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // for mobile toggle

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products/categories');
        setCategories(res.data);
      } catch (err) {
        console.error('Failed to load categories', err);
      }
    };
    fetchCategories();
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = `https://dummyjson.com/products?limit=${limit}`;
        if (selectedCategory && selectedCategory !== '') {
          url = `https://dummyjson.com/products/category/${selectedCategory}?limit=${limit}`;
        }
        const response = await axios.get(url);
        setProducts(response.data.products);
        setError(null);
      } catch (err) {
        setError('Failed to load products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory, limit]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  const handleLimitChange = (e) => {
    setLimit(Number(e.target.value));
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setLimit(12);
  };
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-100">
        <div className="text-xl text-gray-600">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-100">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Products</h1>
      <div className="md:hidden mb-4">
        <button
          onClick={toggleSidebar}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {isSidebarOpen ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <aside
          className={`md:w-64 md:block flex-shrink-0 ${isSidebarOpen ? 'block' : 'hidden'} 
            md:block bg-white rounded-lg shadow-sm p-4
          `}
        >
          <div className="space-y-2 max-h-[70vh] overflow-y-auto">
            <button
              onClick={() => handleCategorySelect('')}
              className={`w-full text-left px-3 py-2 rounded-md transition ${
                selectedCategory === ''
                  ? 'bg-indigo-100 text-indigo-700 font-medium'
                  : 'hover:bg-gray-100 text-gray-700 font-bold '
              }`}
              >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug || cat}
                onClick={() => handleCategorySelect(cat.slug || cat)}
                className={`w-full text-left px-3 py-2 rounded-md transition capitalize ${
                  selectedCategory === (cat.slug || cat)
                    ? 'bg-indigo-100 text-indigo-700 font-medium'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {cat.name || cat}
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-1">
          {products.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-gray-500">No products found in this category.</p>
            </div>
          ) : (
            <>
              <div className="text-sm text-gray-500 mb-3">
                Showing {products.length} products
                {selectedCategory && ` in ${selectedCategory}`}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}