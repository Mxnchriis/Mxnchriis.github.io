import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Accueil from './Accueil.jsx'
import Projets from './Projects.jsx'
import Contact from './Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/'>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
        {/* Optionnel : page d'accueil par défaut */}
        <Route path="*" element={<Accueil />} />
      </Routes>
      <App/>
    </BrowserRouter>
  </StrictMode>,
)
