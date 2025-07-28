import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header">
        <div className="headertxt">
          <h1>AGOT Manchris - Portfolio</h1>
          <h2>Bienvenue sur le Portfolio comprennant les projets de Mr.AGOT Manchris</h2>
        </div>
        <div className="navbar">
          <nav>
            <Link to="/">Accueil</Link>
            <Link to="/projets">Projets</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;