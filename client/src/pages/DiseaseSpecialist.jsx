import React from 'react';
import { Link } from 'react-router-dom';
import diabetes from '../assets/diabetes.png';
import heartAttack from '../assets/heart-attack.png';
import parkinson from '../assets/parkinson.png';
import LoggedInHeader from '../components/LoggedInHeader';

const specialties = [
  { name: 'Diabetes', image: diabetes, link: '/disease/diabetes' },
  { name: 'Heart Attack', image: heartAttack, link: '/disease/heartattack' },
  { name: 'Parkinson', image: parkinson, link: '/disease/parkinson' },
];

export default function DiseaseSpecialist() {
  return (
    <LoggedInHeader curActiveScreen={"disease"}>
    <div className="clinic-specialties bg-gray-100 p-6 rounded-md w-full shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Try And Kill Your Fear😊</h2>
      <div className="grid grid-cols-3 gap-4 text-center ml-7 mt-8">
        {specialties.map((specialty, index) => (
          <Link to={specialty.link} key={index} className="hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
              <img src={specialty.image} alt={specialty.name} className="w-16 h-16 mb-2 rounded-full" />
              <p className="text-lg font-bold text-gray-800">{specialty.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
        </LoggedInHeader>
  );
}
