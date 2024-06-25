import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Mission from './components/Mission';
import Footer from './components/Footer';
import CustomModal from './components/CustomModal';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main className="p-4">
        <Services />
        <Mission />
        <CustomModal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
