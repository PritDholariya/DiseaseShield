import LoggedInHeader from "../components/LoggedInHeader";
import React, { useState } from "react";
import axios from "axios";
import CustomModal from "../components/Modal"; // Import your CustomModal component

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
      const response = await axios.post("http://localhost:8000/api/disease/diabetes", {
        formData,
      });
      const prediction = response.data.prediction;
      setPredictionResult(prediction === "The Person is diabetic");
      setModalOpen(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <LoggedInHeader>
      <div className='container w-4/5'>
        <div className="bg-white p-5 mx-auto w-full max-w-screen-lg">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
            Diabetes Checker
          </h2>
          <p className="mb-4 text-center text-gray-600">
            Check if you have diabetes or not! 👍😎
          </p>
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
      <CustomModal isOpen={modalOpen} onRequestClose={closeModal} predictionResult={predictionResult} disease = {'Diabetes'}/>
      </div>
    </LoggedInHeader>
  );
};

export default DiabetesPage;

// import LoggedInHeader from "../components/LoggedInHeader";
// import React, { useState } from "react";
// import axios from "axios";
// import CustomModal from "../components/Modal"; // Import your CustomModal component

// const DiabetesPage = () => {
//   const [formData, setFormData] = useState({
//     'Pregnancies': '5',
//     'Glucose': '116',
//     'BloodPressure': '74',
//     'SkinThickness': '0',
//     'Insulin': '0',
//     'BMI': '25.6',
//     'DiabetesPedigreeFunction': '0.201',
//     'Age': '30'
//   });

//   const [modalOpen, setModalOpen] = useState(false);
//   const [predictionResult, setPredictionResult] = useState(false);

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8000/api/disease/diabetes", {
//         formData,
//       });
//       const prediction = response.data.prediction;
//       setPredictionResult(prediction === "The Person is diabetic");
//       setModalOpen(true);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <LoggedInHeader>
//       <div className="diabetes-page flex items-center h-full">
//         <div className="bg-white p-5 ml-72 shadow-md rounded-md w-full max-w-md">
//           <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
//             Diabetes Checker
//           </h2>
//           <p className="mb-4 text-center text-gray-600">
//             Check if you have diabetes or not! 👍😎
//           </p>
//           <form onSubmit={handleFormSubmit} className="grid grid-cols-2 gap-4 mt-6">
//             {/* {Object.keys(formData).map((field) => (
//               <div key={field} className="mb-4">
//                 <label htmlFor={field} className="text-lg font-semibold text-blue-800 block mb-1">
//                   {field}
//                 </label>
//                 <input
//                   type="text"
//                   id={field}
//                   name={field}
//                   value={formData[field]}
//                   readOnly // Make the input read-only
//                   className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-600"
//                 />
//               </div>
//             ))} */}
//             <div className="col-span-2">
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out"
//               >
//                 Check Now
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <CustomModal isOpen={modalOpen} onRequestClose={closeModal} predictionResult={predictionResult} disease={'Diabetes'} />
//     </LoggedInHeader>
//   );
// };

// export default DiabetesPage;
