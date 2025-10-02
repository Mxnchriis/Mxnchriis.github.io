import React, { useState, useEffect } from 'react';
import './Body.css'; 
import pythonLogo from './assets/python.png';
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
import linkedinLogo from './assets/contact/linkedin.png'
import githubLogo from './assets/contact/github.png'
import emailLogo from './assets/contact/email.png'
import mobileLogo from './assets/contact/mobile.png'
import wwwLogo from './assets/www.png'
import figmaLogo from './assets/figma.png'
import programpooLogo from './assets/programpoo.png'
import serveurLogo from './assets/img/serveur.png'
import office365Logo from './assets/img/office365.png'

const langImages = [
  { src: pythonLogo, alt: "Python" },
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
  const [dragStartX, setDragStartX] = useState(null);

  // Défilement automatique
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % langImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Empêche le drag d'image natif
  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  // Gestion du glissement (touch)
  const handleTouchStart = (e) => {
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (dragStartX === null) return;
    const dragEndX = e.changedTouches[0].clientX;
    const diff = dragEndX - dragStartX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setIndex((index - 1 + langImages.length) % langImages.length); // swipe droite
      } else {
        setIndex((index + 1) % langImages.length); // swipe gauche
      }
    }
    setDragStartX(null);
  };

  // Gestion du glissement (souris)
  const handleMouseDown = (e) => {
    setDragStartX(e.clientX);
  };
  const handleMouseUp = (e) => {
    if (dragStartX === null) return;
    const dragEndX = e.clientX;
    const diff = dragEndX - dragStartX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setIndex((index - 1 + langImages.length) % langImages.length);
      } else {
        setIndex((index + 1) % langImages.length);
      }
    }
    setDragStartX(null);
  };

  return (
    <div
      className="carrousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{ userSelect: "none", cursor: "grab" }}
    >
      <div className="carrousel-bloc">
        <img
          src={langImages[(index - 1 + langImages.length) % langImages.length].src}
          alt={langImages[(index - 1 + langImages.length) % langImages.length].alt}
          style={{ opacity: 0.5 }}
          draggable={false}
          onDragStart={preventDragHandler}
        />
        <img
          src={langImages[index].src}
          alt={langImages[index].alt}
          className='mainlogo'
          draggable={false}
          onDragStart={preventDragHandler}
        />
        <img
          src={langImages[(index + 1) % langImages.length].src}
          alt={langImages[(index + 1) % langImages.length].alt}
          style={{ opacity: 0.5 }}
          draggable={false}
          onDragStart={preventDragHandler}
        />
      </div>
      <div className='programName'>{langImages[index].alt}</div>
    </div>
  );
}



function ImageModal({ src, alt, open, onClose }) {
  if (!open) return null;
  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
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
        src={src}
        alt={alt}
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          borderRadius: "10px",
          boxShadow: "0 0 30px #000"
        }}
        onClick={e => e.stopPropagation()} // Pour ne pas fermer en cliquant sur la photo
      />
    </div>
  );
}

function ImageWrapper({ src, alt }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="image-wrapper">
        <div className="blur-background"></div>
        <img
          src={src}
          alt={alt}
          id='mainimg'
          style={{ cursor: "pointer" }}
          onClick={() => setModalOpen(true)}
        />
      </div>
      <ImageModal src={src} alt={alt} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

function Accueil() {
  return (
    <>
      <section id="apropos">
        <div className="Bloc-content">
          <h1>
            Qui <span id='Colored'>suis-je</span> ?
          </h1>
          <p>
            Je suis AGOT Manchris, un jeune développeur de 20ans passionné par la création d'applications web modernes et interactives sur Montpellier.
            Mon parcours m'a permis d'acquérir des compétences solides en développement front-end et back-end, 
            ainsi qu'une compréhension approfondie des technologies web.
          </p>

          <div className="grid-container">

            <div className="box-content-column" id='info-perso' >
              <h2><span id='Colored2'>AGOT</span> Manchris</h2>
              <h2>DÉVELOPPEUR <span className='fullstack' id='Colored2'>FULL-STACK</span></h2>
              <h2><span id='Colored2'>20</span> ans</h2>
              <h2>Le Crès 34920, <span id='Colored2'>France</span></h2>
            </div>

            <div className="box-content-column">
              {/* <ImageWrapper src={selfie} alt="" /> */}

              <div className="box-content-column" id='links-container'>
                <a href="https://www.linkedin.com/in/manchris-a-144b79272/" style={{ textDecoration: 'none' }}>
                  <div className="box-content-row" id='card-styled'>
                    <img src={linkedinLogo} alt="LinkedIn Logo" className="linkedin-logo" /><h3>LinkedIn</h3>
                  </div>
                </a>
                <a href="https://github.com/Mxnchriis" style={{ textDecoration: 'none' }}>
                  <div className="box-content-row" id='card-styled'>
                    <img src={githubLogo} alt="" /><h3>GitHub</h3>
                  </div>
                </a>
                <a href="mailto:manchrisagot@gmail.com" style={{ textDecoration: 'none' }}>
                  <div className="box-content-row" id='card-styled'>
                    <img src={emailLogo} alt="" /><h3>E-mail</h3>
                  </div>
                </a>
                <a href="tel:+33743607709" style={{ textDecoration: 'none' }}>
                  <div className="box-content-row" id='card-styled'>
                    <img src={mobileLogo} alt="" /><h3>Téléphone</h3>
                  </div>
                </a>
              </div>

            </div>

          </div>

          <h2 id='info-utile'>Infos utiles</h2>
          <div className="box-content-row">
            <div className="box-content-column" id='box-styled'>
              <h3>Anglais</h3>
              <p>Niveau B2</p>
            </div>
            <div className="box-content-column" id='box-styled'>
              <h3>Espagnol</h3>
              <p>Niveau A2</p>
            </div>
            <div className="box-content-column" id='box-styled'>
              <h3>Permis B</h3>
              <p>Non-Véhiculé</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="Bloc-content">
          <h1>Mes</h1>
          <h1 id='Colored'>Compétences</h1>
          <p>Voici un aperçu des compétences techniques que j'ai développées au fil de mon parcours.</p>
            <div className="grid-container" id='skills-container'>
              <div className="box-content-column" id='skill-box'>
                <img src={wwwLogo} alt="Logo" />
                <h2>Développement Web</h2>
                <p>Création de sites web responsives et interactifs en utilisant HTML, CSS, JavaScript, des frameworks modernes comme React et Angular etc...</p>
                <div className="box-content-row" id="skills-list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Vite</li>
                  <li>Node.js</li>
                  <li>Wordpress</li>
                  <li>Odoo</li>
                </div>
              </div>
              <div className="box-content-column" id='skill-box'>
                <img src={programpooLogo} alt="Logo" />
                <h2>Progammation et POO</h2>
                <p>Maîtrise des concepts de la programmation de base et de l'orientée objet (POO) pour structurer et organiser le code de manière efficace et réutilisable.</p>
                <div className="box-content-row" id="skills-list">
                  <li>Python</li>
                  <li>Java</li>
                  <li>C</li>
                  <li>C++</li>
                  <li>C#</li>
                  <li>PHP</li>
                  <li>Bash</li>
                </div>
              </div>
              {/* <div className="box-content-column" id='skill-box'>
                <img src={jsLogo} alt="Logo" />
                <h2>Intégration d'API et gestion des données</h2>
                <p>Intégration d'API tierces et gestion des données en utilisant des outils comme Axios et Fetch pour assurer une communication fluide entre le front-end et le back-end.</p>
              </div> */}
              <div className="box-content-column" id='skill-box'>
                <img src={sqlLogo} alt="Logo" />
                <h2>Conception de bases de données</h2>
                <p>Conception et gestion de bases de données relationnelles et non relationnelles, ainsi que le développement de serveurs back-end.</p>
                <div className="box-content-row" id="skills-list">
                  <li>MySQL</li>
                  <li>SQLite</li>
                  <li>PHP</li>
                  <li>Node.js</li>
                  <li>Symfony</li>
                  <li>Odoo.sh</li>
                </div>
              </div>
              <div className="box-content-column" id="skill-box">
                <img src={figmaLogo} alt="Logo" />
                <h2>UI/UX Design</h2>
                <p>Compétences en design d'interface utilisateur et en expérience utilisateur pour créer des designs attrayants et faciles à utiliser.</p>
                <div className="box-content-row" id="skills-list">
                  <li>Figma</li>
                  <li>Canvas</li>
                  <li>Photoshop</li>
                  <li>Aseprite</li>
                </div>
              </div>
              <div className="box-content-column" id='skill-box'>
                <img src={githubLogo} alt="Logo" />
                <h2>Contrôle de version</h2>
                <p>Maîtrise de Git pour le contrôle de version, la collaboration en équipe et la gestion efficace des projets de développement.</p>
                <div className="box-content-row" id="skills-list">
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>GitLab</li>
                  <li>GitHub Desktop</li>
                </div>
              </div>
              <div className="box-content-column" id="skill-box">
                <img src={bashLogo} alt="Logo" />
                <h2>Système d'exploitation</h2>
                <p>Compétences en administration et utilisation des systèmes d'exploitation Linux et Windows, y compris la gestion des fichiers, des processus et des permissions.</p>
                <div className="box-content-row" id="skills-list">
                  <li>VirtualBox</li>
                  <li>Linux (Ubuntu)</li>
                  <li>Windows</li>
                  <li>Cmd</li>
                  <li>PowerShell</li>
                  <li>SSH</li>
                  <li>PuTTY</li>
                </div>
              </div>
              <div className="box-content-column" id='skill-box'>
                <img src={serveurLogo} alt="Logo" />
                <h2>Réseaux et Sécurité</h2>
                <p>Connaissances de base en réseaux informatiques, y compris les protocoles, la configuration et la sécurité des réseaux.</p>
                <div className="box-content-row" id="skills-list">
                  <li>Notions de base en réseaux</li>
                  <li>Notions de base en cybersécurité</li>
                  <li>Configuration de routeurs et switches</li>
                  <li>Firewall</li>
                  <li>VPN</li>
                </div>
              </div>
              <div className="box-content-column" id='skill-box'>
                <img src={office365Logo} alt="Logo" />
                <h2>Office 365</h2>
                <p>Maîtrise des outils de la suite Office 365, y compris Word, Excel, PowerPoint et Outlook pour la productivité et la collaboration.</p>
                <div className="box-content-row" id="skills-list">
                  <li>Word</li>
                  <li>Excel</li>
                  <li>PowerPoint</li>
                  <li>Outlook</li>
                  <li>OneNote</li>
                  <li>Teams</li>
                </div>
              </div>
            </div>
        </div>

        <div className="Bloc-content">
          <h1>Mes langages de </h1>
          <h1 id='Colored'>Programmation</h1>
          <ul>
            <li>HTML, CSS, JavaScript, Java</li>
            <li>Frameworks : React, Node.js, Angular</li>
            <li>C, C++, C#</li>
            <li>PHP, SQL, Bash</li>
          </ul>
          <Carrousel />
        </div>
      </section>

      <section id="parcours">
        <div className="Bloc-content">
          <h1>Mon <span id='Colored'>parcours</span></h1>
            <p>J'ai suivi un parcours académique atypique en choisissant un baccalauréat général avec les spécialités NSI, LLCER Anglais et SES.
              L'informatique et l'anglais ont toujours occupé une place importante dans mon quotidien, que ce soit à travers les jeux vidéo ou l'univers musical anglophone. Ce qui me passionne avant tout, c'est la compréhension et la logique derrière les choses. Ces disciplines se sont donc imposées naturellement comme mes matières de prédilection. Le choix de la SES, quant à lui, relevait davantage d'une stratégie afin d'acquérir une vision plus large du monde professionnel.              J'ai ensuite poursuivi mes études avec une Licence Sciences du Numérique, formation pluridisciplinaire qui m'a permis d'explorer différents domaines et langages de programmation. Ce choix s'est révélé pertinent, car il m'a offert une vue d'ensemble sur les divers métiers du numérique et leurs réalités professionnelles.
              Aujourd'hui, je poursuis mon parcours en MBA Développeur Full Stack. Au fil de ma licence, j'ai découvert un véritable intérêt pour la création numérique (programmation, développement web, UI/UX). Ce qui me motive particulièrement, c'est la satisfaction de partir d'une idée, de la concrétiser en un programme, un site ou même un jeu, et d'obtenir un résultat fonctionnel et abouti.
              À terme, j'ambitionne de m'orienter vers un métier dans la création numérique, voire d'évoluer vers un projet entrepreneurial autour d'une application à forte valeur et popularité.</p>
        </div>
      </section>
    </>
  );
}

export default Accueil;