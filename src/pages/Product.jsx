import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(12);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
      setProducts(response.data.products);
      setError(null);
    } catch (error) {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [limit]); 

  const handleLimitChange = (e) => {
    setLimit(Number(e.target.value));
  };

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
    <div className="container my-3 mx-auto px-10 py-8">
      {/* Header row with title and limit selector */}
      <div className="flex flex-wrap justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Our Products</h1>
        <div className="flex items-center gap-3">
          <label className="text-gray-700">Show:</label>
          <select
            value={limit}
            onChange={handleLimitChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={40}>40</option>
            <option value={80}>80</option>
            <option value={120}>120</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}