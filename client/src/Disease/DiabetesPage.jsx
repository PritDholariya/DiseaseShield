import React, { useState, useEffect } from "react";
import axios from "axios";
import LoggedInHeader from "../components/LoggedInHeader";
import CustomModal from "../components/Modal";
import InfoModel from "../components/InfoModel";

const DiabetesPage = () => {
  // State variables
  const [formData, setFormData] = useState({
    Pregnancies: 0,
    GlucoseLevel: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [predictionResult, setPredictionResult] = useState(false);
  const [currentuser, setCurrentuser] = useState();
  const [prob, setProb] = useState();
  const [infoOpen, setInfoOpen] = useState(false);
  const [infodata, setInfodata] = useState();

  // Fetch current user on component mount
  useEffect(() => {
    setCurrentuser(JSON.parse(localStorage.getItem("user")));
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/disease/diabetes",
        {
          formData,
          curruser: currentuser,
        }
      );
      const prediction = response.data.prediction;
      setProb(response.data.probabilities);
      setPredictionResult(prediction === "The Person is diabetic");
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

  // Close the prediction modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Get description based on the field name
  const getDescription = (field) => {
    const descriptions = {
      GlucoseLevel: "Plasma glucose concentration a 2 hours in an oral glucose tolerance test",
      BloodPressure: "Diastolic blood pressure (mm Hg)",
      SkinThickness: "Triceps skin fold thickness (mm)",
      Insulin: "2-Hour serum insulin (mu U/ml)",
      BMI: "Body mass index (weight in kg/(height in m)^2)",
      DiabetesPedigreeFunction: "Diabetes pedigree function",
      Age: "Age (years)",
    };
    return descriptions[field] || "";
  };

  return (
    <LoggedInHeader>
      <div className="container w-4/5">
        <div className="bg-white p-5 mx-auto w-full max-w-screen-lg">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
            Diabetes Checker
          </h2>
          <p className="mb-4 text-center text-gray-600">
            Check if you have diabetes or not! 👍😎
          </p>
          <form
            onSubmit={handleFormSubmit}
            className="grid grid-cols-2 gap-4 mt-6"
          >
            {Object.keys(formData).map((field) => (
              field !== "Pregnancies" && (
                <div key={field} className="mb-4">
                  <label
                    htmlFor={field}
                    className="text-lg font-semibold text-blue-800 block mb-1"
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
                    className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-600"
                  />
                </div>
              )
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
        <CustomModal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          predictionResult={predictionResult}
          disease={"Diabetes"}
          prob={prob}
        />
        <InfoModel
          isOpen={infoOpen}
          onRequestClose={closeinfoModal}
          infodata={infodata}
        />
      </div>
    </LoggedInHeader>
  );
};

export default DiabetesPage;
