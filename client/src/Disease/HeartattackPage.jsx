import LoggedInHeader from "../components/LoggedInHeader";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomModal from "../components/Modal"; // Import your CustomModal component

const HeartAttackPage = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [predictionResult, setPredictionResult] = useState(false);
  const [currentuser, setCurrentuser] = useState();
  const [prob , setProb] = useState();
  useEffect(() => {
    setCurrentuser(JSON.parse(localStorage.getItem('user')))
  }, []);


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
      const response = await axios.post("http://localhost:8000/api/disease/heart_attack", {
        formData, 
        curruser : currentuser,
      });
      const prediction = response.data.prediction;
      setProb(response.data.probabilities);
      setPredictionResult(prediction === "The Person has Heart Disease");
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
        <div className="bg-white p-5 mx-auto my-auto w-full h-full max-w-screen-lg">
          <h2 className="text-3xl font-bold text-red-800 mb-4 text-center">
            Heart Attack Checker
          </h2>
          <p className="mb-4 text-center text-gray-600">
            Check if you are at risk of a heart attack! ❤️🚨
          </p>
          <form onSubmit={handleFormSubmit} className="grid grid-cols-3 gap-4 mt-6">
            {Object.keys(formData).map((field) => (
              <div key={field} className="mb-4">
                <label htmlFor={field} className="text-lg font-semibold text-red-800 block mb-1">
                  {field}
                </label>
                <input
                  type="text"
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:border-red-500 transition duration-300 ease-in-out hover:border-red-600"
                />
              </div>
            ))}
            <div className="col-span-3">
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none transition duration-300 ease-in-out"
              >
                Check Now
              </button>
            </div>
          </form>
        </div>
      <CustomModal isOpen={modalOpen} onRequestClose={closeModal} predictionResult={predictionResult} disease = {'Heart Attack'} prob = {prob}/>
      </div>
    </LoggedInHeader>
  );
};

export default HeartAttackPage;

    // setFormData({
    //   age: '',
    //   sex: '',
    //   cp: '',
    //   trestbps: '',
    //   chol: '',
    //   fbs: '',
    //   restecg: '',
    //   thalach: '',
    //   exang: '',
    //   oldpeak: '',
    //   slope: '',
    //   ca: '',
    //   thal: '',
    // });