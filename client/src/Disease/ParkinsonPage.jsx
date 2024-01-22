import React, { useState } from 'react';
import LoggedInHeader from "../components/LoggedInHeader";

const ParkinsonPage = () => {
  const [formData, setFormData] = useState({
    'MDVP:Fo(Hz)': '',
    'MDVP:Fhi(Hz)': '',
    'MDVP:Flo(Hz)': '',
    'MDVP:Jitter(%)': '',
    'MDVP:Jitter(Abs)': '',
    'MDVP:RAP': '',
    'MDVP:PPQ': '',
    'Jitter:DDP': '',
    'MDVP:Shimmer': '',
    'MDVP:Shimmer(dB)': '',
    'Shimmer:APQ3': '',
    'Shimmer:APQ5': '',
    'MDVP:APQ': '',
    'Shimmer:DDA': '',
    'NHR': '',
    'HNR': '',
    'RPDE': '',
    'DFA': '',
    'spread1': '',
    'spread2': '',
    'D2': '',
    'PPE': '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle the form data submission, for example, send it to the server
    console.log(formData);
    // Optionally, you can reset the form after submission
    setFormData({
      'MDVP:Fo(Hz)': '',
      'MDVP:Fhi(Hz)': '',
      'MDVP:Flo(Hz)': '',
      'MDVP:Jitter(%)': '',
      'MDVP:Jitter(Abs)': '',
      'MDVP:RAP': '',
      'MDVP:PPQ': '',
      'Jitter:DDP': '',
      'MDVP:Shimmer': '',
      'MDVP:Shimmer(dB)': '',
      'Shimmer:APQ3': '',
      'Shimmer:APQ5': '',
      'MDVP:APQ': '',
      'Shimmer:DDA': '',
      'NHR': '',
      'HNR': '',
      'RPDE': '',
      'DFA': '',
      'spread1': '',
      'spread2': '',
      'D2': '',
      'PPE': '',
    });
  };

  return (
    <LoggedInHeader>
      <div className="parkinson-page flex items-center h-full">
        <div className="bg-white ml-28 shadow-sm rounded-sm w-full px-4">
          <h2 className="text-2xl font-bold text-green-800 mb-2 text-center p-2">
            Parkinson Disease Checker
          </h2>
          {/* Your existing content */}
          <p className="mb-2 text-center text-gray-600">
            Check if you might have symptoms of Parkinson's Disease! 🧠🔍
          </p>

          {/* Include the form within the page */}
          <form onSubmit={handleFormSubmit} className="grid grid-cols-3 gap-4 mt-2">
            {Object.keys(formData).map((field) => (
              <div key={field} className="mb-2">
                <label htmlFor={field} className="text-lg font-semibold text-green-800 block mb-1">
                  {field}
                </label>
                <input
                  type="text"
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500 transition duration-300 ease-in-out hover:border-green-600"
                />
              </div>
            ))}
            <div className="col-span-4">
              <button
                type="submit"
                className="w-2/3 bg-green-500 pb-1 mb-1 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none transition duration-300 ease-in-out"
              >
                Check Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </LoggedInHeader>
  );
};

export default ParkinsonPage;
