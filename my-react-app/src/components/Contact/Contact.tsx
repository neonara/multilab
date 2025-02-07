import "./Contact.css";
import back from "./assets/Rectangle 39000.jpg";
// import { CiUser, CiMail } from "react-icons/ci";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"; // FontAwesome icons

const Contact = () => {
  return (
    <div className="header">
      <div className="contact-image-container">
        <img src={back} alt="Lab Worker" className="banner-image" />
        <div className="text-container">
          <h1 className="header-text">Contactez-nous</h1>
        </div>
      </div>
      <div className="contact-cont-container">
        <div className="contact-card">
          <h2>Contact</h2>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <p>(+216) 71 941 436 / 22 344 976</p>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>Rue de l’argent - Zone industrielle el bosten Soukra - Ariana</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>multilab@planet.tn</p>
          </div>
        </div>

        <div className="contact-container">
          <form className="contact-form">
            <div className="form-row">
              <div className="input-box">
                <label htmlFor="fullName">Nom et Prénom</label>

                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Votre nom complet"
                  value=""
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="companyName">Nom de l'entreprise</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre email"
                  value=""
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="input-box">
                <label htmlFor="fullName">Numéro de téléphone</label>

                <input
                  type="tel"
                  id="ville"
                  name="ville"
                  placeholder="Votre adresse"
                  value=""
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="companyName">E-mail</label>
                <input
                  type="email"
                  id="ville"
                  name="ville"
                  placeholder="Votre adresse"
                  value=""
                  required
                />
              </div>
            </div>
            <div className="input-box">
              <label>Objet du message</label>
              <input
                type="tel"
                id="numero_telephone"
                name="numero_telephone"
                placeholder="Votre numéro de téléphone"
                value=""
                required
              />
            </div>
            <div className="input-box">
              <label>Message</label>
              <textarea placeholder="Message"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
