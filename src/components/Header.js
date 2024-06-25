import React from 'react';

const Header = () => {
  const handleDonate = () => {
    window.location.href = '/donate';
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">THE NEW VISION FOUNDATION TRUST</h1>
      <button onClick={handleDonate} className="bg-white text-blue-600 px-4 py-2 rounded-full shadow-md hover:bg-gray-200">
        DONATE
      </button>
    </header>
  );
};

export default Header;
