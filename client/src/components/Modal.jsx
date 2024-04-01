// CustomModal.js
import React, { useEffect } from "react";
import Modal from "react-modal";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "300px", // Adjust the width as needed
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Add a semi-transparent black overlay for a blurred effect
  },
};

const CustomModal = ({ isOpen, onRequestClose, predictionResult , disease}) => {
  useEffect(() => {
    // Set the app element to the root of your app (where Modal is being used)
    Modal.setAppElement("#root");
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Prediction Result"
      style={modalStyles}
      disease = {disease}
    >
      <div className="text-center p-4">
        <h2 className="text-2xl font-bold text-red-800 mb-2">Prediction Result</h2>
        <p className={`text-${predictionResult ? "amber-900" : "green"} mb-4`}>
          {predictionResult ? `You may have ${disease}` : `You does not have ${disease}`}
        </p>
        <button
          onClick={onRequestClose}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none transition duration-300 ease-in-out"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default CustomModal;
