import React, { useState, useEffect } from 'react';
import './Footer.css';
import Niki from './Niki.jpg';
import Toka from './Toka.jpg';

const Footer = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const popupElement = document.querySelector('.popup');
        if (popupElement && showPopup) {
            popupElement.classList.add('popup-appear');
        } else if (popupElement && !showPopup) {
            popupElement.classList.remove('popup-appear');
        }
    }, [showPopup]);

    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <footer>
            <p onClick={handleShowPopup}>
                C'est c'ti là qui l'a fait ©
            </p>

            {showPopup && (
                <div className="popup">
                    <button className='popup-close-btn' onClick={handleClosePopup}>
                        X
                    </button>
                    <div>
                        <img src={Niki} alt="Niki" />
                        <p>
                            Cédric FRANÇOIS
                        </p>
                        <img src={Toka} alt="Toka" />
                    </div>
                </div>
            )}
            {showPopup && (
                <div className="popup-backdrop" onClick={handleClosePopup}></div>
            )}
        </footer>
    );
};

export default Footer;
