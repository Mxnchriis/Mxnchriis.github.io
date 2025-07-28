import './App.css'; 

function Contact() {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <img src="https://www.univ-smb.fr/scem/wp-content/uploads/sites/82/2022/03/contact-750x300.jpg" alt=""/>
            <p>Nom/prénom: AGOT Manchris</p>
            <p>Âge: 21 ans</p>
            <p>Cursus: MBA Développeur Full Stack</p>
            <p>Statut: En recherche d'alternance</p>
            <p>Localisation: Montpellier, 34080</p>
            <a href="https://www.linkedin.com/in/manchris-a-144b79272/">LinkedIn</a>
            <p>
                Vous pouvez me contacter par email à <a href="mailto:manchrisagot@gmail.com">manchrisagot@gmail.com</a> ou par téléphone au <a href="tel:+596696374895">0696 37 48 95</a>.
            </p>
        </div>
    );
}

export default Contact;