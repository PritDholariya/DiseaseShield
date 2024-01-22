import React, { useState, useEffect } from 'react';
import LoggedInHeader from '../components/LoggedInHeader';
import { FiPlus, FiTrash } from 'react-icons/fi';

const SymptomsPage = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [newSymptom, setNewSymptom] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Load symptoms from local storage on page load
    const savedSymptoms = JSON.parse(localStorage.getItem('symptoms')) || [];
    setSymptoms(savedSymptoms);
  }, []);

  const addSymptom = () => {
    if (newSymptom.trim() === '') {
      setError('Symptom name cannot be empty.');
      return;
    }

    if (symptoms.includes(newSymptom)) {
      setError('Symptom already exists.');
      return;
    }

    setError('');
    setSymptoms((prevSymptoms) => [...prevSymptoms, newSymptom]);
    setNewSymptom('');
  };

  const clearAllSymptoms = () => {
    setSymptoms([]);
    localStorage.removeItem('symptoms');
  };

  const removeSymptom = (index) => {
    const updatedSymptoms = [...symptoms.slice(0, index), ...symptoms.slice(index + 1)];
    setSymptoms(updatedSymptoms);
    localStorage.setItem('symptoms', JSON.stringify(updatedSymptoms));
  };

  const predictDisease = () => {
    // Send the symptoms to your ML model for prediction
    // You can use an API endpoint to make a request to your ML model
    // Update the UI with the predicted disease or other relevant information
    console.log('Symptoms:', symptoms);
    // Example: You can replace this with an actual API request
    // axios.post('/api/predict', { symptoms })
    //   .then(response => console.log('Prediction:', response.data))
    //   .catch(error => console.error('Error predicting disease:', error));
  };

  return (
    <LoggedInHeader curActiveScreen={"symtoms"}>
      <div className="symptoms-page flex items-center h-full">
        <div className="bg-white p-8 ml-72 shadow-md rounded-md w-full max-w-md">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">Symptoms Tracker</h2>
          {/* Your existing content */}
          <p className="mb-4 text-center text-gray-600">Track and manage your symptoms! 🩹📋</p>

          {/* Input for new symptom */}
          <div className="mb-4 flex items-center">
            <input
              type="text"
              placeholder="Enter a symptom..."
              value={newSymptom}
              onChange={(e) => setNewSymptom(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-600"
            />
            <button
              type="button"
              onClick={addSymptom}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out"
            >
              <FiPlus />
            </button>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Display entered symptoms */}
          <ul className="list-disc pl-6">
            {symptoms.map((symptom, index) => (
              <li key={index} className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold text-blue-800">{symptom}</span>
                <button
                  type="button"
                  onClick={() => removeSymptom(index)}
                  className="text-red-500 hover:text-red-600 focus:outline-none"
                >
                  <FiTrash />
                </button>
              </li>
            ))}
          </ul>

          {/* Clear all symptoms button */}
          {symptoms.length > 0 && (
            <button
              type="button"
              onClick={clearAllSymptoms}
              className="m-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none transition duration-300 ease-in-out"
            >
              Clear All
            </button>
          )}

          {/* Predict disease button */}
          {symptoms.length > 0 && (
            <button
              type="button"
              onClick={predictDisease}
              className="mt-4 bg-green-500  text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none transition duration-300 ease-in-out"
            >
              Predict Disease
            </button>
          )}
        </div>
      </div>
    </LoggedInHeader>
  );
};

export default SymptomsPage;
