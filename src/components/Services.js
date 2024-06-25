import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChild, faSeedling, faRibbon, faChalkboardTeacher, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const services = [
  { icon: faUser, text: 'Empowerment' },
  { icon: faChild, text: 'Support for Orphans and Aged' },
  { icon: faSeedling, text: 'Food Security' },
  { icon: faRibbon, text: 'HIV/AIDS Support' },
  { icon: faChalkboardTeacher, text: 'Education Workshops' },
  { icon: faHandsHelping, text: 'Disaster Support' },
];

const Services = () => {
  return (
    <section className="text-center my-8">
      <h2 className="text-2xl font-bold mb-4">OUR SERVICES TO PROVIDE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="bg-blue-200 p-4 rounded-md shadow-md flex items-center justify-center space-x-4">
            <FontAwesomeIcon icon={service.icon} size="2x" className="text-blue-600" />
            <span>{service.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
