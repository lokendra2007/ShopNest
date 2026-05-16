import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative w-20 h-20">
        {/* Outer Ring */}
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-100 rounded-full"></div>
        {/* Spinning Ring */}
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        {/* Inner Pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loader;
