import LoggedInHeader from "../components/LoggedInHeader";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomModal from "../components/Modal"; // Import your CustomModal component
import InfoModel from "../components/InfoModel";

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
  const [infoOpen, setInfoOpen] = useState(false);
  const [infodata, setInfodata] = useState();

  useEffect(() => {
    setCurrentuser(JSON.parse(localStorage.getItem('user')))
  }, []);

  const getDescription = (field) => {
    const descriptions = {
      age: "Age of the person ",
      sex: "Gender of the person (1 = male; 0 = female)",
      cp: "Chest Pain type chest pain type",
      trestbps: "Resting blood pressure (in mm Hg)",
      chol: "Cholestoral in mg/dl fetched via BMI sensor",
      fbs: "(Fasting blood sugar > 120 mg/dl) (1 = true; 0 = false)",
      restecg: "Resting electrocardiographic results",
      thalach: "Maximum heart rate achieved",
      exang: "Exercise induced angina (1 = yes; 0 = no)",
      oldpeak: "Previous peak",
      slope: "Slope",
      ca: "Number of major vessels (0-3)",
      thal: "Thal rate",
    };
    return descriptions[field] || "";
  };
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
 // Handle click on field info button
  const handleFieldInfoClick = (info) => {
    setInfoOpen(true);
    setInfodata(info);
  };

  // Close the info modal
  const closeinfoModal = () => {
    setInfoOpen(false);
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
                <label htmlFor={field} className="text-lg font-semibold text-red-800 block mb-1"
                    onClick={() => handleFieldInfoClick(getDescription(field))}
                >
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
      <InfoModel
          isOpen={infoOpen}
          onRequestClose={closeinfoModal}
          infodata={infodata}
        />
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