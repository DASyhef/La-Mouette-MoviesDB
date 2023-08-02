import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import BG from './components/home/BG';
import DM from './components/DM/DM';
import Footer from './components/Footer/Footer'

const App = () => {
  // États pour gérer les opacités de BG1 et BG2 dans App.js
  const [bg1Opacity, setBg1Opacity] = useState(1); // Opacité initiale à 1 (complètement opaque)
  const [bg2Opacity, setBg2Opacity] = useState(0); // Opacité initiale à 0 (complètement transparent)

  // Gestionnaire de mise à jour des opacités de BG1 et BG2
  const handleOpacityUpdate = () => {
    setBg1Opacity(1 - bg1Opacity);
    setBg2Opacity(1 - bg2Opacity);
  };

  return (
    <div>
      <Router>
        {/* Composant BG avec les opacités transmises en tant que props */}
        <BG bg1Opacity={bg1Opacity} bg2Opacity={bg2Opacity} />

        {/* Composant DM avec le gestionnaire de mise à jour des opacités */}
        <DM onRoundClick={handleOpacityUpdate} />

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        <Footer />

      </Router>
    </div>
  );
};

export default App;
