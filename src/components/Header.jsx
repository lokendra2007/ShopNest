import React, { useContext, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'; 
import { store } from '../context/Context';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {cart}=useContext(store);
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            ShopNest 🛍️
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 text-xl hover:text-indigo-600 hover:font-bold transition">Home</Link>
            <Link to="/products" className="text-gray-700 text-xl hover:text-indigo-600 hover:font-bold transition">Products</Link>
            <Link to="/about" className="text-gray-700 text-xl hover:text-indigo-600 hover:font-bold transition">About</Link>
            <Link to="/contact" className="text-gray-700 text-xl hover:text-indigo-600 hover:font-bold transition">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/cart">
              <button className="relative cursor-pointer">
                <FaShoppingCart className='w-7 h-7  text-indigo-600'  />
                <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs  font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              </button>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 py-2">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-indigo-600 py-2">Products</Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 py-2">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600 py-2">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;