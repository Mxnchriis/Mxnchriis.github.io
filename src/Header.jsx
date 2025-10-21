import React, { useState, useEffect } from 'react';
import './Header.css';
import selfie2 from './assets/img/Selfie2.jpeg';
import lune from './assets/img/lune.png';
import soleil from './assets/img/soleil.png'; // Ajoute une icône soleil dans ton dossier assets
// import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Applique la classe dark/light au body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header>
      <div className="header">
        {/* <div className="header-title">
          <h1>AGOT Manchris - Portfolio</h1>
          <h2>Bienvenue sur le Portfolio comprennant les projets de Mr.AGOT Manchris</h2>
        </div> */}
              {/* Hamburger pour mobile */}
        <button
        className="hamburger"
        aria-label="Menu"
        onClick={() => setMenuOpen((open) => !open)}
        >
        <span />
        </button>
        <div className={`navbar${menuOpen ? " open" : ""}`}>
          {/* Switch nuit/jour */}
          <img
            src={darkMode ? soleil : lune}
            alt={darkMode ? "Mode jour" : "Mode nuit"}
            className="toggle-icon"
            onClick={() => setDarkMode((mode) => !mode)}
            title={darkMode ? "Passer en mode jour" : "Passer en mode nuit"}
          />
          <nav>
            <button onClick={() => scrollToSection("accueil")}>Accueil</button>
            <button onClick={() => scrollToSection("apropos")}>À propos</button>
            <button onClick={() => scrollToSection("parcours")}>Parcours</button>
            <button onClick={() => scrollToSection("skills")}>Skills</button>
            <button onClick={() => scrollToSection("projets")}>Projets</button>
            {/* <button onClick={() => scrollToSection("contact")}>Contact</button> */}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;