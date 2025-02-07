import React, { useState } from "react";
import "./Contact.css";
import back from "./assets/Rectangle 39000.jpg";
import { CiUser, CiMail } from "react-icons/ci";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import api from "../../lib/api";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    company_name: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage(""); // Reset status message

    try {
      const response = await api.post("contact/", formData);
      if (response.status === 200) {
        setStatusMessage("Votre message a été envoyé avec succès!");
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          company_name: "",
        });
      } else {
        setStatusMessage("Une erreur est survenue lors de l'envoi de votre message.");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("Une erreur est survenue lors de l'envoi de votre message.");
      setIsSuccess(false);
    }
  };

  return (
    <div className="header">
      <div className="back">
        <div
          className="background-image-contact"
          style={{ backgroundImage: `url(${back})` }}
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

          <div className="contact-container col shadow-contact">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group">
                  <label htmlFor="name">Nom et Prénom</label>
                  <div className="input-container">
                    <CiUser className="input-icon" />
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="company_name">Nom de l'entreprise</label>
                  <div className="input-container">
                    <CiUser className="input-icon" />
                    <input
                      type="text"
                      id="company_name"
                      className="input-field"
                      value={formData.company_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group">
                  <label htmlFor="phone">Numéro de téléphone</label>
                  <div className="input-container">
                    <FaPhoneAlt className="input-icon" />
                    <input
                      type="text"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <div className="input-container">
                    <CiMail className="input-icon" />
                    <input
                      type="email"
                      id="email"
                      className="input-field"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Objet du message</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Objet du message"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Écrivez votre message ici..."
                ></textarea>
              </div>
              {statusMessage && (
                <div
                  className={`text-center font-ebGaramond text-sm sm:text-xl font-bold mt-3 ${
                    isSuccess ? "text-burlywood" : "text-red-500"
                  }`}
                >
                  {statusMessage}
                </div>
              )}
              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
