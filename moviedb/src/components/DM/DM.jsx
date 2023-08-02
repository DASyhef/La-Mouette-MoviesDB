import React, { useState } from 'react';
import './DM.css';
import lighthouse from './DM.png';

const DM = ({ onRoundClick }) => {
  // État pour gérer l'inversion des couleurs de l'élément "round"
  const [isRoundInverted, setIsRoundInverted] = useState(false);

  // Gestionnaire d'événement pour le clic sur la div avec la classe "round"
  const handleRoundClick = () => {
    // Inverser l'état isRoundInverted
    setIsRoundInverted(!isRoundInverted);
    // Appeler la fonction de rappel (callback) pour inverser l'opacité de BG1 et BG2
    onRoundClick();
  };

  return (
    <div>
      {/* Div "round" avec le gestionnaire d'événement et la classe conditionnelle pour l'inversion */}
      <div className={`round ${isRoundInverted ? 'invert' : ''}`} onClick={handleRoundClick}>
        <img src={lighthouse} alt="dark-mode" />
      </div>
    </div>
  );
};

export default DM;