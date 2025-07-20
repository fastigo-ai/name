import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Error from '../assets/New folder/error.png'

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 text-center">
      {/* AI Generated Image Placeholder */}
      <img
        src={Error}
        alt="Error Illustration"
        className="mb-8 rounded shadow-lg h-[60vh]"
      />

      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Page not found</h1>
      <p className="text-gray-600 mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        <ArrowLeft size={20} />
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
