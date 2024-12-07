import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuestionnaireForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    province: '',
    city: '',
    postalCode: '',
    age: '',
    userType: '',
    newsletter: false,
  });

  const navigate = useNavigate();

  // List of Manitoba cities
  const manitobaCities = ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson', 'Portage la Prairie'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });

      // Reset city if province changes
      if (name === 'province') {
        setFormData((prevState) => ({
          ...prevState,
          city: '', // Clear city when province changes
        }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/terms');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-red-600 text-white text-center py-4 text-sm font-bold">
        We need the government to meet us where we are at - Click here to give a suggestion to the government with a quick questionnaire
      </header>

      {/* Progress Bar */}
      <div className="flex justify-center space-x-2 bg-red-500 text-white text-sm py-2">
        <div className="font-bold">STEP 1 - Your Info</div>
        <div className="text-gray-300">|</div>
        <div>STEP 2 - Send the letter</div>
      </div>

      {/* Form */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Generating Submission</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block font-semibold mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your first name"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block font-semibold mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your last name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block font-semibold mb-1">
              Phone Number (optional)
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Province */}
          <div>
            <label htmlFor="province" className="block font-semibold mb-1">
              Province <span className="text-red-500">*</span>
            </label>
            <select
              id="province"
              name="province"
              value={formData.province}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Please select</option>
              <option value="Manitoba">Manitoba</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block font-semibold mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              required
              disabled={!formData.province} // Disable until province is selected
            >
              <option value="">Please select</option>
              {formData.province === 'Manitoba' &&
                manitobaCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>

          {/* Postal Code */}
          <div>
            <label htmlFor="postalCode" className="block font-semibold mb-1">
              Postal Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your postal code"
              required
            />
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className="block font-semibold mb-1">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your age"
              required
            />
          </div>

          {/* I am */}
          <div>
            <label htmlFor="userType" className="block font-semibold mb-1">
              I am: <span className="text-red-500">*</span>
            </label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Please select</option>
              <option value="Option1">Option 1</option>
              <option value="Option2">Option 2</option>
            </select>
          </div>

          {/* Newsletter */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor="newsletter" className="text-sm text-black">
              Sign me up for the Rights4Vapers newsletters
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-md"
            >
              BACK
            </button>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              NEXT
            </button>
          </div>
        </form>
        <p className="text-sm text-red-500 mt-4">
          * Please fill out all the required fields above before pressing next
        </p>
      </div>
    </div>
  );
};

export default QuestionnaireForm;
