import React from 'react';
import { Link } from 'react-router-dom';
import diabetes from '../assets/diabetes.png';
import heartAttack from '../assets/heart-attack.png';
import parkinson from '../assets/parkinson.png';
import LoggedInHeader from '../components/LoggedInHeader';

const specialties = [
  { name: 'Diabetes', image: diabetes, link: '/disease/diabetes', accuracy: "78.39%", model: "SVM" },
  { name: 'Heart Attack', image: heartAttack, link: '/disease/heartattack', accuracy: "85.48%", model: "SVM" },
  { name: 'Parkinson', image: parkinson, link: '/disease/parkinson', accuracy: "87.69%", model: "SVM" },
];

export default function DiseaseSpecialist() {
  return (
    <LoggedInHeader curActiveScreen={"disease"}>
      <div className="clinic-specialties bg-gray-100 p-6 rounded-md w-full shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Try And Kill Your Fear😊</h2>
        <p className="text-sm text-gray-600 mb-4">Accuracy calculated using SVM model</p>
        <div className="grid grid-cols-3 gap-4 text-center ml-7">
          {specialties.map((specialty, index) => (
            <Link to={specialty.link} key={index} className="hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
              <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
                <img src={specialty.image} alt={specialty.name} className="w-16 h-16 mb-2 rounded-full" />
                <p className="text-lg font-semibold text-gray-800">{specialty.name}</p>
                <p className="text-xs text-gray-600">Accuracy: {specialty.accuracy}</p>
                <p className="text-xs text-gray-600">Model: {specialty.model}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8">
  <h3 className="text-xl font-semibold mb-2">Advantages of Support Vector Machines (SVMs)</h3>
  <ul className="list-disc list-inside text-sm text-gray-800  text-center">
    <li className="mb-4">Effective in handling non-linear data by using different kernel functions.</li>
    <li className="mb-4">Robustness to overfitting due to the regularization parameter.</li>
    <li className="mb-4">Perform well in high-dimensional spaces, making them suitable for datasets with many features.</li>
    <li className="mb-4">Aim to find a clear margin of separation between classes, leading to better generalization performance.</li>
  </ul>
</div>



      </div>
    </LoggedInHeader>
  );
}
