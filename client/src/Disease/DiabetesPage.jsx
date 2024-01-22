import React, { useState } from 'react';
import LoggedInHeader from "../components/LoggedInHeader";

const DiabetesPage = () => {
  const [formData, setFormData] = useState({
    Pregnancies: '',
    Glucose: '',
    BloodPressure: '',
    SkinThickness: '',
    Insulin: '',
    BMI: '',
    DiabetesPedigreeFunction: '',
    Age: '',
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
      Pregnancies: '',
      Glucose: '',
      BloodPressure: '',
      SkinThickness: '',
      Insulin: '',
      BMI: '',
      DiabetesPedigreeFunction: '',
      Age: '',
    });
  };

  return (
    <LoggedInHeader >
      <div className="diabetes-page flex items-center h-full">
        <div className="bg-white p-8 ml-72 shadow-md rounded-md w-full max-w-md">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
            Diabetes Checker
          </h2>
          {/* Your existing content */}
          <p className="mb-4 text-center text-gray-600 font-serif">
            Check if you have diabetes or not! 👍😎
          </p>

          {/* Include the form within the page */}
          <form onSubmit={handleFormSubmit} className="grid grid-cols-2 gap-4 mt-6">
            {Object.keys(formData).map((field) => (
              <div key={field} className="mb-4">
                <label htmlFor={field} className="text-lg font-semibold text-blue-800 block mb-1">
                  {field}
                </label>
                <input
                  type="text"
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-600"
                />
              </div>
            ))}
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out"
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

export default DiabetesPage;
