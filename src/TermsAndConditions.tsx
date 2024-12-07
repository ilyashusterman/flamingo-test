import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TermsAndConditions: React.FC = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    // Handle terms and conditions acceptance
    navigate('/email');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions and Privacy Policy</h1>
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Terms and conditions content */}
        <div className="flex justify-between mt-8">
          <Link
            to="/questionnaire"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Back
          </Link>
          <button
            onClick={handleAccept}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;