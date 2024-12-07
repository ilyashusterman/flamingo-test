import React, { useState } from 'react';

const EmailComposition: React.FC = () => {
  const [emailProvider, setEmailProvider] = useState('');
  const [emailSubject, setEmailSubject] = useState('Please Reconsider: The Potential Harm of a Vape Flavor Ban');
  const [emailBody, setEmailBody] = useState('');

  const handleEmailProviderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailProvider(e.target.value);
  };

  const handleSubmit = () => {
    // Handle email submission, e.g., open the user's email client with the pre-filled information
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Email Composition</h1>
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="email-provider" className="block mb-2">
            Email Provider:
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="email-provider-gmail"
              name="email-provider"
              value="gmail"
              checked={emailProvider === 'gmail'}
              onChange={handleEmailProviderChange}
              className="mr-2"
            />
            <label htmlFor="email-provider-gmail" className="mr-4">
              Gmail
            </label>
            {/* Add other email provider options */}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email-subject" className="block mb-2">
            Subject:
          </label>
          <input
            type="text"
            id="email-subject"
            value={emailSubject}
            onChange={(e) => setEmailSubject(e.target.value)}
            className="bg-gray-700 border-gray-600 text-white p-3 rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email-body" className="block mb-2">
            Email Body:
          </label>
          <textarea
            id="email-body"
            value={emailBody}
            onChange={(e) => setEmailBody(e.target.value)}
            className="bg-gray-700 border-gray-600 text-white p-3 rounded-lg w-full h-32 resize-none"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default EmailComposition;