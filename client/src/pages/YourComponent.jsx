import React from 'react';

const YourComponent = () => {
  const yourList = [
    {'user': 'prit', 'prediction_type': 'Disease', 'symptoms': null, 'disease': 'Diabetes', 'prediction_result': 'The Person is diabet', 'timestamp': '2024-03-08T21:56:28.362999+00:00'},
    {'user': 'prit', 'prediction_type': 'Disease', 'symptoms': null, 'disease': 'Parkinson', 'prediction_result': 'The person has Parki', 'timestamp': '2024-03-08T21:58:54.793694+00:00'},
    {'user': 'prit', 'prediction_type': 'Symptoms', 'symptoms': '["itching"]', 'disease': null, 'prediction_result': "['Fungal infection']", 'timestamp': '2024-03-08T22:04:21.882435+00:00'},
    {'user': 'prit', 'prediction_type': 'Symptoms', 'symptoms': '["itching", "continuous_sneezing"]', 'disease': null, 'prediction_result': "['Dimorphic hemmorho']", 'timestamp': '2024-03-08T22:04:39.672792+00:00'},
    {'user': 'prit', 'prediction_type': 'Symptoms', 'symptoms': 'itching, continuous_sneezing', 'disease': null, 'prediction_result': "['Dimorphic hemmorho']", 'timestamp': '2024-03-08T22:07:23.997102+00:00'},
    {'user': 'prit', 'prediction_type': 'Symptoms', 'symptoms': 'itching, continuous_sneezing', 'disease': null, 'prediction_result': 'Allergy', 'timestamp': '2024-03-08T22:09:41.051192+00:00'}
  ];

  return (
    <div>
      {yourList.map((item, index) => (
        <div key={index}>
          <p>User: {item.user}</p>
          <p>Prediction Type: {item.prediction_type}</p>
          <p>Symptoms: {item.symptoms}</p>
          <p>Disease: {item.disease}</p>
          <p>Prediction Result: {item.prediction_result}</p>
          <p>Timestamp: {new Date(item.timestamp).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default YourComponent;
