import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center p-4">
      <h2 className="text-xl font-bold mb-4">CONTACT US</h2>
      <div className="flex justify-center space-x-4">
        <a href="#" className="hover:text-gray-200">
          <FontAwesomeIcon icon={faWhatsapp} size="1x" />
        </a>
        <a href="#" className="hover:text-gray-200">
          <FontAwesomeIcon icon={faFacebook} size="1x" />
        </a>
        <a href="#" className="hover:text-gray-200">
          <FontAwesomeIcon icon={faTelegram} size="1x" />
        </a>
        <a href="#" className="hover:text-gray-200">
          <FontAwesomeIcon icon={faEnvelope} size="1x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
