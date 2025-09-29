import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Accueil from './Accueil.jsx'
import Contenu from './NewContenu.jsx'
import Projets from './Projects.jsx'
import Contact from './Contact.jsx'

if (sessionStorage.redirect) {
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  window.history.replaceState(null, '', redirect);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/'>
      <Header />
      <Accueil />
      <Contenu />
      <Projets />
      <Contact />
      {/* <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contenu" element={<Contenu />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Accueil />} />
      </Routes> */}
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
