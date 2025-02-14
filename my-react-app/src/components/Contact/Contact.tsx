import "./Contact.css";
import back from "./assets/Rectangle 39000.jpg";
// import { CiUser, CiMail } from "react-icons/ci";
import { useState } from "react";
import api from "../../lib/api";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import sendIcon from "@/assets/icons/icon-send.png";

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
        setStatusMessage(
          "Une erreur est survenue lors de l'envoi de votre message."
        );
        setIsSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setStatusMessage(
        "Une erreur est survenue lors de l'envoi de votre message."
      );
      setIsSuccess(false);
    }
  };

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
            <FiPhoneCall className="social-icon" />
            <p>(+216) 71 941 436 / 22 344 976</p>
          </div>
          <div className="contact-item">
            <IoLocationOutline className="social-icon" />
            <p>Rue de l’argent - Zone industrielle el bosten Soukra - Ariana</p>
          </div>
          <div className="contact-item">
            <MdOutlineMail className="social-icon" />
            <p>multilab@planet.tn</p>
          </div>
        </div>

        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-box">
                <label htmlFor="fullName">Nom et Prénom</label>

                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="input-box">
                <label htmlFor="companyName">Nom de l'entreprise</label>
                <input
                  type="text"
                  id="company_name"
                  className="input-field"
                  value={formData.company_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="input-box">
                <label htmlFor="fullName">Numéro de téléphone</label>

                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="input-box">
                <label htmlFor="companyName">E-mail</label>

                <input
                  type="email"
                  id="email"
                  className="input-field"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-box">
              <label>Objet du message</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Objet du message"
              />
            </div>
            <div className="input-box">
              <label>Message</label>
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
            <button type="submit" className="submit-btn">
              Envoyer
              <img
                src={sendIcon}
                alt=""
                className="social-icon"
                style={{ marginLeft: "16px" }}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
