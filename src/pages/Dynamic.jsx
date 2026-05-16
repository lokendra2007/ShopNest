import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Product not found');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-100">
        <div className="text-xl text-gray-600">Loading product details...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex justify-center items-center min-h-100">
        <div className="text-xl text-red-600">{error || 'Something went wrong'}</div>
      </div>
    );
  }

  const hasDiscount = product.discountPercentage > 0;
  const discountedPrice = hasDiscount
    ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
    : null;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-indigo-600 hover:underline mb-4 inline-block">
        ← Back to Products
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="p-6">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full rounded-lg object-cover"
            />
            {/* Additional images if available */}
            {product.images && product.images.length > 0 && (
              <div className="flex gap-2 mt-4">
                {product.images.slice(0, 3).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.title} view ${idx + 1}`}
                    className="w-20 h-20 object-cover rounded-md cursor-pointer hover:opacity-80"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-gray-500 mt-1">{product.brand} • {product.category}</p>

            <div className="flex items-center mt-2">
              <span className="text-yellow-500 text-xl">⭐</span>
              <span className="text-lg font-semibold ml-1">{product.rating.toFixed(1)}</span>
              <span className="text-gray-500 ml-2">({product.reviews?.length || 0} reviews)</span>
            </div>

            <div className="mt-4">
              {hasDiscount ? (
                <>
                  <span className="text-3xl font-bold text-indigo-600">${discountedPrice}</span>
                  <span className="text-lg text-gray-400 line-through ml-3">${product.price.toFixed(2)}</span>
                  <span className="ml-2 text-red-500 font-semibold">-{product.discountPercentage}%</span>
                </>
              ) : (
                <span className="text-3xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
              )}
            </div>

            <p className="mt-4 text-gray-600">{product.description}</p>

            <div className="mt-4 space-y-2">
              <p><strong>Stock:</strong> {product.stock} units</p>
              <p><strong>Availability:</strong> {product.availabilityStatus}</p>
              <p><strong>Shipping:</strong> {product.shippingInformation}</p>
              <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
              <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
            </div>

            <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
        {product.reviews && product.reviews.length > 0 && (
          <div className="p-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
            <div className="space-y-4">
              {product.reviews.map((review, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4">
                  <div className="flex items-center">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-semibold ml-1">{review.rating}</span>
                    <span className="text-gray-500 ml-3">{review.reviewerName}</span>
                    <span className="text-gray-400 text-sm ml-3">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-1">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}