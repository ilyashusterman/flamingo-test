import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { totalResponses } from './database';

const PETITION_START = new Date('2025-11-01T05:00:01Z'); // Nov 1, 00:00:01 CT (UTC)
const PETITION_END = new Date('2025-01-01T06:00:00Z');   // Jan 1, 00:00:00 CT (UTC+6)

const formatTimeLeft = (diff: number) => {
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return `${String(days).padStart(2, '0')}d:${String(hours).padStart(2, '0')}h:${String(minutes).padStart(2, '0')}m:${String(seconds).padStart(2, '0')}s`;
};

const LandingPage: React.FC = () => {
  const [responses, setResponses] = useState<number | null>(null);
  const [status, setStatus] = useState<string>('Loading...');
  const [actNow, setActNow] = useState<string>('');
  const [countdown, setCountdown] = useState<string>('');

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const responseCount = await totalResponses();
        setResponses(responseCount);
      } catch (error) {
        console.error('Error fetching total responses:', error);
        setResponses(0);
      }
    };
    fetchResponses();
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      if (now < PETITION_START) {
        const diff = PETITION_START.getTime() - now.getTime();
        setStatus('Petition starts in:');
        setCountdown(formatTimeLeft(diff));
        setActNow('Act now!');
      } else if (now >= PETITION_START && now < PETITION_END) {
        const diff = PETITION_END.getTime() - now.getTime();
        setStatus('Petition is now open!Time left:');
        setCountdown(formatTimeLeft(diff));
        setActNow('Act now!');
      } else {
        setStatus('Petition has ended.');
        setCountdown('');
        setActNow('');
      }
    };

    updateCountdown(); // call immediately
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4 text-center">
      <h1 className="text-4xl font-bold mb-6 max-w-3xl animate-fade-in">
        The government must step up and meet us where we stand, addressing our society's needs today!
      </h1>

      <p className="mb-2 text-xl">
        Total Petitions: {responses !== null ? responses : 'Loading...'}
      </p>

      <div className="text-2xl font-mono text-yellow-300 animate-pulse transition-all duration-1000 mb-6">
        {status}
        {countdown && <div>{countdown}</div>}
        {actNow}
      </div>

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
