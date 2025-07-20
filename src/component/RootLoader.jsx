import React from 'react';

const RootLoader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Spinner Animation */}
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-600 border-solid mb-6"></div>

      <h1 className="text-2xl font-semibold text-gray-700">Loading, please wait...</h1>
    </div>
  );
};

export default RootLoader;
