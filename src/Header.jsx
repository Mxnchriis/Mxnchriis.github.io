import './Header.css';
import selfie2 from './assets/img/Selfie2.jpeg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header">
        {/* <div className="header-title">
          <h1>AGOT Manchris - Portfolio</h1>
          <h2>Bienvenue sur le Portfolio comprennant les projets de Mr.AGOT Manchris</h2>
        </div> */}
        <div className="navbar">
          <img src={selfie2} alt="Selfie" className="Photo" />
          <nav>
            <Link to="/">Accueil</Link>
            <Link to="/contenu">À propos</Link>
            <Link to="/contenu">Compétences</Link>
            <Link to="/contenu">Formation</Link>
            <Link to="/projets">Projets</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;