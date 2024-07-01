import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Mission from './components/Mission';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-purple-500 to-indigo-600">
      <div className="bg-white bg-opacity-90">
        <Header />
        <main className="p-4">
          <Services />
          <Mission />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
