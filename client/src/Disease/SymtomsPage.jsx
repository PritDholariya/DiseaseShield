import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoggedInHeader from '../components/LoggedInHeader';
import { FiPlus, FiTrash } from 'react-icons/fi';
import Modal from 'react-modal';

const SymptomsPage = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [newSymptom, setNewSymptom] = useState('');
  const [error, setError] = useState('');
  const [testResult, setTestResult] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const symptomsList = [
    'itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering',
    'chills', 'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting',
    'vomiting', 'burning_micturition', 'spotting_urination', 'fatigue', 'weight_gain', 'anxiety',
    'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy', 'patches_in_throat',
    'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 'breathlessness', 'sweating',
    'dehydration', 'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea',
    'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain',
    'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure',
    'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise',
    'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes', 'sinus_pressure',
    'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate',
    'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus',
    'neck_pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels',
    'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties',
    'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech',
    'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints',
    'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness',
    'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort', 'foul_smell_of_urine',
    'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)',
    'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body',
    'belly_pain', 'abnormal_menstruation', 'dischromic_patches', 'watering_from_eyes',
    'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum',
    'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion',
    'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen',
    'history_of_alcohol_consumption', 'fluid_overload', 'blood_in_sputum',
    'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples',
    'blackheads', 'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails',
    'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze', 'prognosis'
  ];
  const [currentuser, setCurrentuser] = useState();
  useEffect(() => {
    setCurrentuser(JSON.parse(localStorage.getItem('user')))
  }, []);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setNewSymptom(event.target.value)
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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

  const predictDisease = async (e) => {
    try {
      const response = await axios.post("http://localhost:8000/api/disease/symptoms", {
        'symptoms': symptoms,
        curruser : currentuser
      });
      const prediction = response.data.prediction;
      setTestResult(prediction)
      setModalIsOpen(true)
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <LoggedInHeader curActiveScreen={"symtoms"}>
      <div className='container w-4/5 '>
        <div className="symptoms-page h-3/5 w-full">
          <div className="p-8 w-full">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">Symptoms Tracker</h2>
            {/* Your existing content */}
            <p className="mb-4 text-center text-gray-600">Track and manage your symptoms! 🩹📋</p>
            <h2 className='font-bold text-gray-600 drop-shadow-md	'>Model Used : Random Forest</h2>
            {/* Input for new symptom */}
            <div className="mb-4 flex items-center">
              {/* <input
              type="text"
              placeholder="Enter a symptom..."
              value={newSymptom}
              onChange={(e) => setNewSymptom(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-600"
            /> */}
              <label htmlFor="dropdown">Select symtoms</label>
              <select id="dropdown" value={selectedOption} onChange={handleSelectChange} className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-600">
                <option value="">-- Select --</option>
                {symptomsList.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
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
        <div className="symptoms-page h-2/5 w-full">
          {testResult &&
            <div class="w-full mx-auto max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-white-800 dark:border-gray-700">
              <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-black">You May have</h5>
              </div>
              <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                  {testResult.map((disease, index) => (
                    <li key={index} class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-1 min-w-0 ms-4">
                          <p class=" font-medium text-gray-900 truncate dark:text-red-500">
                            {disease}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          }
        </div>
        
      </div>
    </LoggedInHeader>
  );
};

export default SymptomsPage;

