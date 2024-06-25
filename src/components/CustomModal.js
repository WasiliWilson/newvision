import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app root element for accessibility

const CustomModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="text-center">
      <button onClick={() => setModalIsOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out">
        Open Modal
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="modal">
        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
        <p className="mb-4">Modal content goes here.</p>
        <button onClick={() => setModalIsOpen(false)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded">
          Close
        </button>
      </Modal>
    </div>
  );
};

export default CustomModal;
