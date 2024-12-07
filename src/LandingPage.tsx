import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">
        We need the government to meet us where we are at
      </h1>
      <Link
        to="/questionnaire"
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
      >
        Click here to give a suggestion to the government with a quick questionnaire
      </Link>
    </div>
  );
};

export default LandingPage;