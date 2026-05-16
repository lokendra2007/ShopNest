import React from 'react';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="relative">
        <h1 className="text-9xl font-extrabold text-blue-600/10 select-none">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl font-bold text-gray-800">Oops! Page Not Found</p>
        </div>
      </div>
      
      <p className="mt-4 text-gray-600 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <Link 
        to="/" 
        className="mt-8 flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 active:scale-95"
      >
        <IoHomeOutline className="text-xl" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
