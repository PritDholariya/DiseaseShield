// InfoModel.js
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
    maxWidth: "400px", // Adjust the width as needed
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Add a semi-transparent black overlay for a blurred effect
  },
};

const InfoModel = ({ isOpen, onRequestClose, infodata }) => {
  useEffect(() => {
    // Set the app element to the root of your app (where Modal is being used)
    Modal.setAppElement("#root");
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyles}
    >
      <div className="text-center p-4">
        <p className="font-bold text-red-800 mb-2">{infodata}</p>
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

export default InfoModel;
