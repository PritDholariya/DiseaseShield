import React, { useState } from 'react';
import LoggedInHeader from '../components/LoggedInHeader';
import axios from 'axios';
import CustomModal from '../components/Modal';

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

  const [modalOpen, setModalOpen] = useState(false);
  const [predictionResult, setPredictionResult] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/disease/parkinson', {
        formData,
      });
      const prediction = response.data.prediction;
      setPredictionResult(prediction === "The person has Parkinson's disease");
      setModalOpen(true);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <LoggedInHeader>
      <div className='container w-4/5'>
        <div className="bg-white mx-auto w-full p-5 max-w-screen-lg h-full">
          <h2 className="text-2xl font-bold text-green-800 mb-2 text-center p-2">
            Parkinson Disease Checker
          </h2>
          <p className="mb-2 text-center text-gray-600">
            Check if you might have symptoms of Parkinson's Disease! 🧠🔍
          </p>
          <form onSubmit={handleFormSubmit} className="grid grid-cols-4 gap-4 mt-2">
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
                className="w-full bg-green-500 pb-1 mb-1 text-white py-2 px-auto rounded-md hover:bg-green-600 focus:outline-none transition duration-300 ease-in-out"
              >
                Check Now
              </button>
            </div>
          </form>
        </div>
      <CustomModal isOpen={modalOpen} onRequestClose={closeModal} predictionResult={predictionResult} disease={'Parkinson Disease'} />
      </div>
    </LoggedInHeader>
  );
};

export default ParkinsonPage;


// import React, { useState } from 'react';
// import LoggedInHeader from '../components/LoggedInHeader';
// import axios from 'axios';
// import CustomModal from '../components/Modal';

// const ParkinsonPage = () => {
//   const [formData, setFormData] = useState({
//     'MDVP:Fo(Hz)': '148.143',
//     'MDVP:Fhi(Hz)': '155.982',
//     'MDVP:Flo(Hz)': '135.041',
//     'MDVP:Jitter(%)': '0.00392',
//     'MDVP:Jitter(Abs)': '0.00003',
//     'MDVP:RAP': '0.00204',
//     'MDVP:PPQ': '0.00231',
//     'Jitter:DDP': '0.00612',
//     'MDVP:Shimmer': '0.0145',
//     'MDVP:Shimmer(dB)': '0.131',
//     'Shimmer:APQ3': '0.00725',
//     'Shimmer:APQ5': '0.00876',
//     'MDVP:APQ': '0.01263',
//     'Shimmer:DDA': '0.02175',
//     'NHR': '0.0054',
//     'HNR': '23.683',
//     'RPDE': '0.398499',
//     'DFA': '0.778349',
//     'spread1': '-5.711205',
//     'spread2': '0.240875',
//     'D2': '2.845109',
//     'PPE': '0.19273'
//   });

//   const [modalOpen, setModalOpen] = useState(false);
//   const [predictionResult, setPredictionResult] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8000/api/disease/parkinson', {
//         formData,
//       });
//       const prediction = response.data.prediction;
//       setPredictionResult(prediction === "The person has Parkinson's disease");
//       setModalOpen(true);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <LoggedInHeader>
//       <div className="parkinson-page flex items-center h-full">
//         <div className="bg-white ml-28 shadow-sm rounded-sm w-full px-4">
//           <h2 className="text-2xl font-bold text-green-800 mb-2 text-center p-2">
//             Parkinson Disease Checker
//           </h2>
//           <p className="mb-2 text-center text-gray-600">
//             Check if you might have symptoms of Parkinson's Disease! 🧠🔍
//           </p>
//           <form onSubmit={handleFormSubmit} className="grid grid-cols-3 gap-4 mt-2">
//             {/* {Object.keys(formData).map((field) => (
//               <div key={field} className="mb-2">
//                 <label htmlFor={field} className="text-lg font-semibold text-green-800 block mb-1">
//                   {field}
//                 </label>
//                 <input
//                   type="text"
//                   id={field}
//                   name={field}
//                   value={formData[field]}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:border-green-500 transition duration-300 ease-in-out hover:border-green-600"
//                 />
//               </div>
//             ))} */}
//             <div className="col-span-4">
//               <button
//                 type="submit"
//                 className="w-2/3 bg-green-500 pb-1 mb-1 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none transition duration-300 ease-in-out"
//               >
//                 Check Now
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <CustomModal isOpen={modalOpen} onRequestClose={closeModal} predictionResult={predictionResult} disease={'Parkinson Disease'} />
//     </LoggedInHeader>
//   );
// };

// export default ParkinsonPage;
