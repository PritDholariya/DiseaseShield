import React, { useState, useEffect } from 'react';
import LoggedInHeader from '../components/LoggedInHeader';
import axios from 'axios';

const HistoryPage = () => {
  const [historyData, setHistoryData] = useState([]);
  const [currentuser, setCurrentuser] = useState();

  useEffect(() => {
    // Fetch current user from localStorage when the component mounts
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    setCurrentuser(userFromLocalStorage);
  }, []);

  useEffect(() => {
    // Fetch history data from the backend when the current user is set
    if (currentuser) {
      fetchHistoryData();
    }
  }, [currentuser]);

  const fetchHistoryData = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/history', {
        curruser: currentuser
      });
  
      // Check if response.data is empty or null
      if (!response.data || response.data.length === 0) {
        console.error('Error fetching history data: Response data is empty');
        return;
      }
  
      // Update frontend parsing logic to handle list of dictionaries
      setHistoryData(response.data.history_data);
    } catch (error) {
      console.error('Error fetching history data:', error);
    }
  };

  return (
    <LoggedInHeader curActiveScreen="history">
      <div className="container w-4/5 mx-auto mt-14">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">History</h2>
        <div className="overflow-x-auto mt-20">
          <div className="max-h-96 overflow-y-auto">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-200 px-4 py-2">User</th>
                  <th className="border border-gray-200 px-4 py-2">Prediction Type</th>
                  <th className="border border-gray-200 px-4 py-2">Symptoms</th>
                  <th className="border border-gray-200 px-4 py-2">Disease</th>
                  <th className="border border-gray-200 px-4 py-2">Prediction Result</th>
                  <th className="border border-gray-200 px-4 py-2">Time</th>
                </tr>
              </thead>
              <tbody>
                {historyData && historyData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="border border-gray-200 px-4 py-2">{item?.user}</td>
                    <td className="border border-gray-200 px-4 py-2">{item?.prediction_type}</td>
                    <td className="border border-gray-200 px-4 py-2">{item?.symptoms}</td>
                    <td className="border border-gray-200 px-4 py-2">{item?.disease}</td>
                    <td className="border border-gray-200 px-4 py-2">{item?.prediction_result}</td>
                    <td className="border border-gray-200 px-4 py-2">{item?.timestamp}</td>
                  </tr>
                ))}
                {!historyData && (
                  <tr>
                    <td colSpan="6" className="text-center">No history data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LoggedInHeader>
  );
};

export default HistoryPage;
