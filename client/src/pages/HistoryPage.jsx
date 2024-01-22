import React, { useState, useEffect } from 'react';
import LoggedInHeader from '../components/LoggedInHeader';

const HistoryPage = () => {
  const [history, setHistory] = useState([
    { id: 1, disease: 'Diabetes', date: '2022-03-01' },
    { id: 2, disease: 'Heart Attack', date: '2022-03-05' },
    // Add more history items as needed
  ]);

  const [futureDisease, setFutureDisease] = useState('');

  const clearHistory = () => {
    setHistory([]);
  };

  const addFutureDisease = () => {
    if (futureDisease.trim() !== '') {
      const newHistoryItem = {
        id: Date.now(),
        disease: futureDisease,
        date: new Date().toLocaleDateString(),
      };
      setHistory((prevHistory) => [...prevHistory, newHistoryItem]);
      setFutureDisease('');
    }
  };

  return (
    <LoggedInHeader>
      <div className="history-page flex ml-72 items-center h-full ">
        <div className="bg-white p-8 shadow-md rounded-md w-full max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Disease History</h2>
          {history.length > 0 ? (
            <ul className="list-disc pl-6 mb-6">
              {history.map((item) => (
                <li key={item.id} className="text-lg font-semibold">
                  {item.disease} - Checked on {item.date}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-600">No disease history available.</p>
          )}

          {/* Input for future diseases */}
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Enter future disease..."
              value={futureDisease}
              onChange={(e) => setFutureDisease(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-600"
            />
            <button
              onClick={addFutureDisease}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out"
            >
              Add
            </button>
          </div>

          <button
            onClick={clearHistory}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none transition duration-300 ease-in-out"
          >
            Clear History
          </button>
        </div>
      </div>
    </LoggedInHeader>
  );
};

export default HistoryPage;
