import React, { useState, useEffect } from 'react';
import LoggedInHeader from '../components/LoggedInHeader';
import axios from 'axios';
import Slider from '../components/Slider';
import Header from '../components/Header';

const LoggedHome = (props) => {
  // Dummy data about developers
  const developer1Info = {
    name: 'Prit Dholariya',
    role: 'Co-Founder & Developer',
    description: 'Experienced developer with a focus on backend systems and infrastructure. Enjoys building scalable and efficient solutions.',
    phoneNumber: '+91 7016497046',
    email: 'pritdholariya@gmail.com',
  };

  const developer2Info = {
    name: 'Om Chikhaliya',
    role: 'Co-Founder & Developer',
    description: 'Passionate about creating meaningful applications that solve real-world problems. Expertise in frontend development and UI/UX design.',
    phoneNumber: '+91 9875053749',
    email: 'omchikhaliya@gmail.com',
  };

  // Define background gradient style with lighter colors
  const cardStyle = {
    background: 'linear-gradient(135deg, #fff0e6, #ffe6cc)', // Lighter skin color gradient
  };

  // Actual disease data
  const diseaseData = [
    {
      name: 'COVID-19 Pandemic',
      description: 'The COVID-19 pandemic, caused by the novel coronavirus SARS-CoV-2, has significantly impacted the world. As of now, there have been over 400 million confirmed cases globally, with more than 5.8 million deaths reported. Vaccination efforts continue to play a crucial role in controlling the spread of the virus.',
    },
    {
      name: 'Malaria',
      description: 'Malaria remains a major health concern, particularly in tropical and subtropical regions. Approximately 229 million cases of malaria occur annually, leading to around 409,000 deaths. Prevention measures such as insecticide-treated bed nets and antimalarial medications are essential.',
    },

  ];

  return (
    <div className='flex-auto float '>
      <div className=''>
        <LoggedInHeader curActiveScreen={"home"} setisAuthenticated={props.setisAuthenticated}>
          <div className="container mx-auto mt-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to DiseaseShield</h2>
            <p className="text-lg text-gray-600 mb-6">Get insights about various diseases and their predictions based on data science and machine learning.</p>
            <div className="grid grid-cols-2 gap-8 m-2">
              <div className="p-6 rounded-lg shadow-md " style={cardStyle}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{developer1Info.name}</h3>
                <p className="text-gray-600">{developer1Info.role}</p>
                <p className="text-gray-700 mt-4">{developer1Info.description}</p>
                <p className="text-gray-700 mt-4">Phone Number: {developer1Info.phoneNumber}</p>
                <p className="text-gray-700 mt-4">Email: {developer1Info.email}</p>
              </div>
              <div className="p-6 rounded-lg shadow-md" style={cardStyle}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{developer2Info.name}</h3>
                <p className="text-gray-600">{developer2Info.role}</p>
                <p className="text-gray-700 mt-4">{developer2Info.description}</p>
                <p className="text-gray-700 mt-4">Phone Number: {developer2Info.phoneNumber}</p>
                <p className="text-gray-700 mt-4">Email: {developer2Info.email}</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Disease Data</h3>
              <ul className="list-disc list-inside text-gray-700 mt-4">
                {diseaseData.map((disease, index) => (
                  <li key={index}>
                    <h4 className="font-semibold">{disease.name}</h4>
                    <p>{disease.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </LoggedInHeader>
      </div>
    </div>
  );
};

export default LoggedHome;
