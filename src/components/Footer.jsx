import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white">ShopNest</h2>
            <p className="mt-2 text-sm">
              Your one‑stop shop for the latest trends. Quality products, fast delivery.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold text-white">Shop</h3>
            <ul className="mt-2 space-y-1">
              <li><Link to="/products" className="text-sm hover:text-white transition">All Products</Link></li>
              <li><Link to="/new-arrivals" className="text-sm hover:text-white transition">New Arrivals</Link></li>
              <li><Link to="/sale" className="text-sm hover:text-white transition">Sale</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="mt-2 space-y-1">
              <li><Link to="/faq" className="text-sm hover:text-white transition">FAQ</Link></li>
              <li><Link to="/shipping" className="text-sm hover:text-white transition">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-sm hover:text-white transition">Returns</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>📧 support@shopnest.com</li>
              <li>📞 +91 (007) 780-9487</li>
              <li>📍 Main Street,Gopalpura ,Jaipur Rajasthan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} ShopNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;