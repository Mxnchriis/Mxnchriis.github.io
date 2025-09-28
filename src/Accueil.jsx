import React, { useState, useEffect } from 'react';
// import './Body.css'; 
import './Accueil.css';
import selfie from './assets/img/selfie.jpg';
import { useNavigate } from 'react-router-dom';

function Accueil() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="accueil-container">
      <div className="accueil-content">
        <img src={selfie} alt="" />
        <h1>Bienvenue sur mon portfolio</h1>
        <p>Découvrez mes projets et compétences en développement web.</p>
        <button onClick={() => navigate("/contenu")}>Découvrir</button>
      </div>
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </div>
  );
}

export default Accueil;