// src/pages/contact.tsx
import './contact.css';
import back from "./assets/Rectangle 39000.jpg"
import { CiUser,CiMail  } from "react-icons/ci";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'; // FontAwesome icons

const Contact = () => {
    return (
  <div className="header">
    <div className='back'>
    <div className="background-image-contact" style={{ backgroundImage: `url(${back})` }} 
 >
                <div className="overlay-content">
                    <h1>Contactez-nous</h1>
                </div>
            </div>
            </div>
      <div className="container">
        <div className="row">
       <div className="contact col">
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
                  </div>

        <div className="contact-container col    shadow-contact">
            {/* <form className="contact-form"> 
                <div className="form-group">
               
                    <label>Nom et prénom</label>
                    <input type="text" /><CiUser />
                    </div>
                    <div className="form-group">

                    <label>Nom de l’entreprise</label>
                    <input type="text" placeholder="Nom de l’entreprise" />
                </div>
                <div className="form-group">
                    <label>Numéro de téléphone</label>
                    <input type="tel" placeholder="Numéro de téléphone" />
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" placeholder="E-mail" />
                </div>
                <div className="form-group">
                    <label>Objet du message</label>
                    <input type="text" placeholder="Objet du message" />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="Message"></textarea>
                </div>
                <button type="submit">Envoyer</button>
            </form>*/}
            <form className="contact-form">
                <div className="row">
                    <div className="form-group ">
                        <label htmlFor="fullName">Nom et Prénom</label> {/* Label for the first input */}
                        <div className="input-container">
                            <CiUser className="input-icon" />
                            <input type="text" id="fullName" className="input-field" />
                        </div>
                    </div>
                    <div className="form-group ">
                        <label htmlFor="companyName">Nom de l'entreprise</label> {/* Label for the second input */}
                        <div className="input-container">
                            <CiMail  className="input-icon" />
                            <input type="text" id="companyName" className="input-field" />
                        </div>
                    </div>
                </div>
         <div className="row">
                <div className="form-group">
                <label htmlFor="fullName">Numéro de téléphone</label> {/* Label for the first input */}
                        <div className="input-container">
                            <CiUser className="input-icon" />
                            <input type="text" id="fullName" className="input-field" />
                        </div>
                        
                </div>
                <div className="form-group ">
                        <label htmlFor="companyName">E-mail</label> {/* Label for the second input */}
                        <div className="input-container">
                            <CiUser className="input-icon" />
                            <input type="text" id="companyName" className="input-field" />
                        </div>
                    </div>
         </div>
         <div className="form-group">
                    <label>Objet du message</label>
                    <input type="text" placeholder="Objet du message" />
                </div>
         <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="Message"></textarea>
                </div>

                <button type="submit">Envoyer</button>

            </form>

        </div>
        </div>
        </div>
        </div>  
    );
}

export default Contact;
