import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About ShopNest</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're on a mission to provide the best online shopping experience with quality products,
            fast delivery, and exceptional customer service.
          </p>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2024, ShopNest started as a small passion project by a group of friends who
                wanted to make online shopping simple, trustworthy, and enjoyable. What began as a
                tiny warehouse has grown into a platform serving thousands of happy customers across
                the country.
              </p>
              <p className="text-gray-600">
                Today, we curate only the best products from trusted brands and independent creators.
                Every item you see is hand‑picked for quality, value, and style. We believe that
                shopping should be an experience, not a chore.
              </p>
            </div>
            <div className="bg-indigo-600 p-8 md:p-10 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-5xl mb-3">🛍️</div>
                <p className="text-lg font-semibold">Making shopping delightful since 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To empower customers with access to high‑quality products at fair prices, while
              delivering a seamless and trustworthy shopping experience.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become the most loved and trusted online marketplace, known for exceptional quality,
              customer obsession, and innovative solutions.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl mb-2">❤️</div>
              <h4 className="font-semibold text-gray-800">Customer First</h4>
              <p className="text-sm text-gray-500 mt-1">Your satisfaction drives everything we do</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl mb-2">⭐</div>
              <h4 className="font-semibold text-gray-800">Quality Guarantee</h4>
              <p className="text-sm text-gray-500 mt-1">Every product meets our high standards</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-semibold text-gray-800">Innovation</h4>
              <p className="text-sm text-gray-500 mt-1">Constantly improving your experience</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl mb-2">🤝</div>
              <h4 className="font-semibold text-gray-800">Integrity</h4>
              <p className="text-sm text-gray-500 mt-1">Honest and transparent with you</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto flex items-center justify-center text-4xl mb-3">
                👨‍💼
              </div>
              <h3 className="font-semibold text-gray-800">Priyanshu Swami</h3>
              <p className="text-indigo-600 text-sm">CEO & Founder</p>
              <p className="text-gray-500 text-xs mt-1">10+ years in e‑commerce</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto flex items-center justify-center text-4xl mb-3">
                👨‍💻
              </div>
              <h3 className="font-semibold text-gray-800">Dishant Saini</h3>
              <p className="text-indigo-600 text-sm">Lead Developer</p>
              <p className="text-gray-500 text-xs mt-1">Full‑stack expert</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto flex items-center justify-center text-4xl mb-3">
                🎨
              </div>
              <h3 className="font-semibold text-gray-800">Dimpal Singh </h3>
              <p className="text-indigo-600 text-sm">Product Designer</p>
              <p className="text-gray-500 text-xs mt-1">Creates beautiful experiences</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto flex items-center justify-center text-4xl mb-3">
                📦
              </div>
              <h3 className="font-semibold text-gray-800">Lokendra Singh</h3>
              <p className="text-indigo-600 text-sm">Operations Lead</p>
              <p className="text-gray-500 text-xs mt-1">Logistics & customer happiness</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-indigo-600 rounded-xl p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-indigo-200 text-sm mt-1">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-indigo-200 text-sm mt-1">Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-indigo-200 text-sm mt-1">Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-indigo-200 text-sm mt-1">Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Want to join our team?</h2>
          <p className="text-gray-600 mb-6">We're always looking for passionate people.</p>
          <Link
            to="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}