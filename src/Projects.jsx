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
      {open && (
        <div className="accordion-content" style={{ padding: "10px 20px", background: "#242424" }}>
          {children}
        </div>
      )}
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
    <div style={{ position: 'relative', paddingTop: '60%' }}>
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