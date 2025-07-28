import React, { useState, useEffect } from 'react';
import './App.css'; 
import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';
import jsLogo from './assets/js.png';
import javaLogo from './assets/java.svg';
import nodeLogo from './assets/node.png';
import angularLogo from './assets/angular.png';
import cLogo from './assets/c.png';
import cppLogo from './assets/cpp.png';
import csharpLogo from './assets/csharp.png';
import phpLogo from './assets/php.png';
import sqlLogo from './assets/sql.png';
import bashLogo from './assets/bash.png';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import selfie from './assets/img/selfie.jpg';

const langImages = [
  { src: htmlLogo, alt: "HTML" },
  { src: cssLogo, alt: "CSS" },
  { src: jsLogo, alt: "JavaScript" },
  { src: javaLogo, alt: "Java" },
  { src: reactLogo, alt: "React" },
  { src: nodeLogo, alt: "Node.js" },
  { src: viteLogo, alt: "Vite" },
  { src: angularLogo, alt: "Angular" },
  { src: cLogo, alt: "C" },
  { src: cppLogo, alt: "C++" },
  { src: csharpLogo, alt: "C#" },
  { src: phpLogo, alt: "PHP" },
  { src: sqlLogo, alt: "SQL" },
  { src: bashLogo, alt: "Bash" },
];

function Carrousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + langImages.length) % langImages.length);
  const next = () => setIndex((index + 1) % langImages.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % langImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carrousel">
      <button onClick={prev}>&lt;</button>
      <img
        src={langImages[(index - 1 + langImages.length) % langImages.length].src}
        alt={langImages[(index - 1 + langImages.length) % langImages.length].alt}
        style={{ width: 100, height: 100, objectFit: 'contain', margin: '0 20px' }}
      />
      <img
        src={langImages[index].src}
        alt={langImages[index].alt}
        className='logo'
        style={{ width: 100, height: 100, objectFit: 'contain', margin: '0 20px' }}
      />
      <img
        src={langImages[(index + 1) % langImages.length].src}
        alt={langImages[(index + 1) % langImages.length].alt}
        style={{ width: 100, height: 100, objectFit: 'contain', margin: '0 20px' }}
      />
      <button onClick={next}>&gt;</button>
      <div style={{ marginTop: 10 }}>{langImages[index].alt}</div>
    </div>
  );
}



function Accueil() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="accueil">
      <h1>Qui suis-je ?</h1>
      <div className="image-wrapper">
        <div className="blur-background"></div>
        <img
          src={selfie}
          alt=""
          className="mainimg"
          style={{ cursor: "pointer" }}
          onClick={() => setModalOpen(true)}
        />
      </div>

      {/* Modal pour afficher la photo en grand */}
      {modalOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setModalOpen(false)}
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
          }}
        >
          <img
            src={selfie}
            alt=""
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: "10px",
              boxShadow: "0 0 30px #000"
            }}
            onClick={e => e.stopPropagation()} // Pour ne pas fermer en cliquant sur la photo
          />
        </div>
      )}

      <p>
        Je suis AGOT Manchris, un jeune développeur de 21ans passionné par la création d'applications web modernes et interactives sur Montpellier.
        Mon parcours m'a permis d'acquérir des compétences solides en développement front-end et back-end, 
        ainsi qu'une compréhension approfondie des technologies web.
      </p>

      <div className="slide">
      <h2>Mes compétences</h2>
        <ul>
          <li>Développement front-end avec des framework</li>
          <li>Création d'interfaces utilisateur réactives et intuitives</li>
          <li>Intégration d'API et gestion des données</li>
          <li>Conception de bases de données et développement back-end</li>
          <li>Utilisation de Git pour le contrôle de version</li>
        </ul>
      </div>

      <hr/>

      <div className="slide">
      <h2>Mes langages de programmation</h2>
        <ul>
          <li>HTML, CSS, JavaScript, Java</li>
          <li>Frameworks : React, Node.js, Angular</li>
          <li>C, C++, C#</li>
          <li>PHP, SQL, Bash</li>
        </ul>
        <Carrousel />
      </div>

       <hr/>

      <div className="slide">
      <h2>Mes outils de développement</h2>
        <ul>
          <li>Visual Studio Code</li>
          <li>Figma, Canvas</li>
          <li>Git, GitHub</li>
          <li>VirtualBox, PuTTY </li>
          <li>Wordpress, Odoo</li>
          <li>Office 365 (Word, Excel, PowerPoint, ect...)</li>
          <li>ChatGPT, Copilot</li>
          <li>Unreal Engine 5, Unity</li>
        </ul>
      </div>

       <hr/>

      <div className="slide">
      <h2>Mon parcours</h2>
        <p>
            J'ai commencé un parcours classique en passant par le lycée, où j'ai pu obtenir mon baccalauréat général 
            spécialité NSI(Numérique et Sciences Informatiques) et LLCER Anglais (Langues, Littératures et Civilisations étrangères et Régionales).
            Par la suite, j'ai entamé une Licence Sciences Du Numérique à l'ICEA, où j'ai approfondi mes connaissances en informatique et en développement web.
            Actuellement je suis inscrit pour de l'alternance en MBA Developpeur Full Stack à MyDigitalSchool de Montpellier. En effet, je suis à la recherche d'une entreprise afin de pouvoir mettre en pratique mes compétences et d'acquérir de l'expérience professionnelle.
        </p>
      </div>

       <hr/>

      <div className="slide">
      <h2>Mon objectif</h2>
        <p>Je veux pouvoir créer ma propre entreprise de développement web et contribuer à des projets innovants qui améliorent l'expérience utilisateur.</p>
      </div>

       <hr/>

      <div className="slide">
      <h2>Mes passions</h2>
        <p>En dehors du développement, je suis passionné par l'informatique en général, les jeux-vidéo, la musique et le sport. 
            J'aime apprendre de nouvelles choses et je suis un amoureux de la nature.</p>
      </div>
  </div>
  );
}

export default Accueil;