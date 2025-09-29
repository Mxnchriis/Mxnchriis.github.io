import './Body.css'; 

function Contact() {
    return (
        <section id="contact">
            <div className="Bloc-content">
                <h1>Me</h1>
                <h1 id='Colored'>Contacter</h1>
                <div className="image-wrapper">
                    <img src="https://www.univ-smb.fr/scem/wp-content/uploads/sites/82/2022/03/contact-750x300.jpg" alt="" className='mainimg'/>
                </div>
                <p>Nom/prénom: AGOT Manchris</p>
                <p>Âge: 21 ans</p>
                <p>Cursus: MBA Développeur Full Stack</p>
                <p>Statut: En recherche d'alternance</p>
                <p>Localisation: 29 Rue de la Garenne, Le Crès 34920</p>
                <a href="https://www.linkedin.com/in/manchris-a-144b79272/">LinkedIn</a>
                <p>
                    Vous pouvez me contacter par email à <a href="mailto:manchrisagot@gmail.com">manchrisagot@gmail.com</a> ou par téléphone au <a href="tel:+33743607709">07 43 60 77 09</a>.
                </p>
            </div>
        </section>
    );
}

export default Contact;