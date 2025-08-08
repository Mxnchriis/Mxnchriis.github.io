import './Body.css'; 
import React, { useState, useEffect } from 'react';
import screengame2 from './assets/img/Screengame(2).png';
import screengame3 from './assets/img/Screengame(3).png';


function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion">
      <button
        className="accordion-title"
        onClick={() => setOpen((o) => !o)}
      >
        {title} {open ? "▲" : "▼"}
      </button>
        <div className={`accordion-content${open ? "" : " closed"}`}>
          {children}
        </div>
    </div>
  );
}

function MPMtest() {
  const [text, setText] = useState('');
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  const handleChange = (e) => {
    setText(e.target.value);
    if (!isRunning) {
      setIsRunning(true);
      setStartTime(Date.now());
    }
    if (e.target.value.length > 0) {
      const elapsedTime = (Date.now() - startTime) / 60000; // Convert milliseconds to minutes
      const wordsTyped = e.target.value.trim().split(/\s+/).length;
      setWpm(Math.round(wordsTyped / elapsedTime));
    }
  };
  const handleReset = () => {
    setText('');
    setTime(0);
    setIsRunning(false);
    setStartTime(null);
    setWpm(0);
  }
  return (
    <>
    <div className="mpm-test">
      <p>Le chat bondit agilement sur la rambarde, défiant la gravité comme si le vide n’existait pas. Le vent du soir caressait les toits pendant que la lune, silencieuse, éclairait la scène d’un halo argenté. À quelques mètres, un chien le regardait fixement, prêt à défendre ses précieuses croquettes. Le duel était inévitable.</p>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Tapez ici..."
        rows="5"
        cols="50"
      />
    </div>
      <div className="mpm-controls">
        <button onClick={handleReset}>Réinitialiser</button>
        <p>MPM: {wpm}</p>
      <div className="mpm-info">
        <p>Temps écoulé : {isRunning ? ((Date.now() - startTime) / 1000).toFixed(2) : 0} secondes</p>
        <p>Nombre de mots : {text.trim().split(/\s+/).length}</p>
      </div>
    </div>
    </>
  );
}

function ColorPicker(){
  const [color, setColor] = useState('#000000');

  function getTextColor(bgColor) {
    const hex = bgColor.replace('#', '');
    const r = parseInt(hex.substring(0,2), 16);
    const g = parseInt(hex.substring(2,4), 16);
    const b = parseInt(hex.substring(4,6), 16);
    const luminance = (0.299*r + 0.587*g + 0.114*b);
    return luminance > 150 ? '#222' : '#fff';
  }

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="color-picker-container">
      <div
        className="color-display"
        onClick={() => navigator.clipboard.writeText(color)}
        style={{
          backgroundColor: color,
          color: getTextColor(color)
        }}
      >
        {color}
      </div>
      <label>Choisissez une couleur :</label>
      <input type='color' value={color} onChange={handleColorChange} />
    </div>
  );
}

function Placeholder() {
  return (
    <>
      <div className="defilement-lisse">
        <div className="contenu">
          En cours...
        </div>
      </div>
    </>
  );
}

const FigmaPrototype = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="figma-container">
      {!loaded && <div className="placeholder">Chargement du prototype...</div>}
      <iframe
        title="Prototype Figma"
        onLoad={() => setLoaded(true)}
        className='figma-embed'
        style={{
          display: loaded ? 'block' : 'none',
        }}
        src="https://embed.figma.com/proto/LoHy5usBRI598X3Cg9i2JE/UI-UX-Gaspiypa?node-id=2-89&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A89&embed-host=share"
        allowFullScreen
      ></iframe>
    </div>
  );
};


function Projets() {
  return (
    <div className="projets">
      <h1>Mes Projets</h1>
      <div className="image-wrapper">
      <img src="https://www.univ-smb.fr/espace-etudiant/wp-content/uploads/sites/81/2022/09/projet-etudiant.jpg" alt="" className='mainimg'/>
      </div>
      <p>Quelques-uns de mes projets récents :</p>
      <ul>
        <Accordion title="Projet React 1">
          <h2>Test de Mots par Minute (MPM)</h2>
          <MPMtest />
          <p>Un projet de test de mot par minute, il permet de tester la vitesse de frappe d'un utilisateur en lui demandant de taper un texte aléatoire.</p>
        </Accordion>
        <Accordion title="Projet React 2">
          <h2>Color Picker</h2>
          <ColorPicker />
          <p>Un sélecteur de couleur simple qui permet à l'utilisateur de choisir une couleur, l'afficher puis la copier dans son presse-papier.</p>
        </Accordion>
        
        <Accordion title="Projet Angular">
          {/* <li>En cours...</li> */}
          <Placeholder />
        </Accordion>

        <Accordion title="Projet UI/UX">
          <h2>Gaspiypa</h2>
          <FigmaPrototype />
          <br />
          <p>Gaspiypa est une application de gestion alimentaires. Elle permet aux utilisateurs de suivre et de réduire leur gaspillage alimentaire en fournissant des conseils personnalisés, des recettes et des statistiques sur leurs habitudes de consommation.</p>
          <p>Le prototype interactif complet est disponible sur Figma. Vous pouvez l'explorer en cliquant sur le lien ci-dessous :</p>
          <a href="https://www.figma.com/design/LoHy5usBRI598X3Cg9i2JE/UI-UX-Gaspiypa?node-id=2-89&t=Zu0LTVRSElo3BKhA-1" target="_blank" rel="noopener noreferrer">UI/UX Gaspiypa</a>
        </Accordion>

        <Accordion title="Projet Gaming">
          <h2>Cat'N Dog</h2>
          <div className="boximg">
            <img src= {screengame2} alt="Cat'N Dog screen1" className='screengame'/>
            <img src={screengame3} alt="Cat'N Dog screen2" className='screengame'/>
          </div>
          <p>Cat'N Dog est un jeu de fight-platformer où les joueurs incarnent un chat et un chien dans un univers coloré et dynamique.
            Le but du jeu est de voler la croquette adverse, pour cela vous devez éliminer votre adversaire pour débloquer l'accès au différente zone donnant accès à la croquette.
            Le jeu propose des combats en arène avec des mécaniques de plateforme, permettant aux joueurs de sauter, courir et combattre dans des environnements variés.</p>
          <br />
          <p>Télécharger la démo : (Pas encore disponible)</p>
        </Accordion>

        <p>Voici également quelques sites web sur lequel j'ai pu travaillé :</p>
        <li><a href="http://icea-edu.fr">icea-edu.fr</a></li>
        <li><a href="https://www.nasdy.fr/">nasdy.fr</a></li>
        <li><a href="https://akaya.odoo.com/">akaya.odoo.com</a></li>
      </ul>
    </div>
  );
}

export default Projets;