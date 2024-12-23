import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { totalResponses } from './database';

const LandingPage: React.FC = () => {
  // State to store total responses
  const [responses, setResponses] = useState<number | null>(null);

  // Fetch total responses when the component mounts
  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const responseCount = await totalResponses();
        setResponses(responseCount);
      } catch (error) {
        console.error('Error fetching total responses:', error);
        setResponses(0); // Default to 0 if an error occurs
      }
    };

    fetchResponses();
  }, []);

  // Render UI
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">
        The government must step up and meet us where we stand, addressing our society's needs today!
      </h1>
      <p className="mb-4 text-xl">
        Total Petitions: {responses !== null ? responses : 'Loading...'}
      </p>
      <Link
        to="/questionnaire"
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
      >
        Click here to take a stand and make your voice heard NOW!
      </Link>
    </div>
  );
};

export default LandingPage;
