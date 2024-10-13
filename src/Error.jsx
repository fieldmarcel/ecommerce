import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate(); // Programmatic navigation

  const goBackToHome = () => {
    navigate('/');  // Navigates to the home page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Uh oh! You're lost.</h2>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for does not exist or may have been moved.
      </p>

      <button
        onClick={goBackToHome}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default Error;
