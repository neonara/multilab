import React, { useState } from "react";
import "./Contact.css";
import back from "./assets/Rectangle 3901.jpg";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaDownload,
} from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
import { CandidatesSimplifyForm } from "../../types/types";
import api from "../../lib/api";


const Candidatures = () => {
  const [formData, setFormData] = useState<CandidatesSimplifyForm>({
    fullname: "",
    email: "",
    phone_number: "",
    description: "",
    file1: null,
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setError("Veuillez télécharger uniquement des fichiers PDF.");
        return;
      }
      setFormData(prev => ({ ...prev, file1: file }));
      setError(null);
    }
  };

  const handleDelete = () => {
    setFormData(prev => ({ ...prev, file1: null }));
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    
    if (!formData.file1) {
      setError("Veuillez télécharger un CV avant de soumettre.");
      return;
    }

    try {
      setIsSubmitting(true);
      const formDataToSend = new FormData();
      
      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          formDataToSend.append(key, value);
        }
      });

      await api.post("/candidates-simplify/", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Reset form after successful submission
      setFormData({
        fullname: "",
        email: "",
        phone_number: "",
        description: "",
        file1: null,
      });
      alert("Votre candidature a été envoyée avec succès!");
      
    } catch (error) {
      console.error(error);
      setError("Une erreur s'est produite lors de l'envoi de la candidature.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="header">
      <div
        className="background-image-contact"
        style={{ backgroundImage: `url(${back})` }}      >
        <h1>Candidatures Spontanées</h1>
      </div>
      
      <div className="contact-cont-container">
        <div className="contact-card">
          <h2>Contact</h2>
          <div className="contact-item">
            <FaPhone className="icon" />
            <span>(+216) 71 941 436 / 22 344 976</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>
              Rue de l'argent - Zone industrielle el bosten Soukra - Ariana
            </span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>multilab@planet.tn</span>
          </div>
        </div>

        <div className="contact-container">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="input-box">
              <label htmlFor="fullname">Nom et Prénom</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Votre nom complet"
                required
              />
            </div>

            <div className="form-row">
              <div className="input-box">
                <label htmlFor="phone_number">Numéro de téléphone</label>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="Votre numéro de téléphone"
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre adresse email"
                  required
                />
              </div>
            </div>

            <div className="input-box">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Message"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="file-drop">
              <label className="file-upload-label">Ajouter un CV</label>
              <div className="file-drop-zone">
                <input
                  type="file"
                  name="file1"
                  accept=".pdf"
                  className="file-input"
                  onChange={handleFileChange}
                />
                <p className="dep">
                  Déposez vos fichiers ou cliquez pour télécharger
                </p>
                <p className="supported-files">
                  Types de fichiers pris en charge: PDF
                </p>
                <button type="button" className="browse-button">
                  Parcourir
                </button>
              </div>
            </div>

            {formData.file1 && (
              <div className="uploaded-files">
                <div className="file-preview">
                  <div className="file-info">
                    <img
                      src="/pdf-icon.png"
                      alt="PDF Icon"
                      className="file-icon"
                    />
                    <div>
                      <p className="file-name">{formData.file1.name}</p>
                      <p className="file-details">
                        {(formData.file1.size / 1000).toFixed(2)} KB
                      </p>
                    </div>
                  </div>
                  <div className="file-actions">
                    <CiTrash
                      className="action-icon delete"
                      onClick={handleDelete}
                    />
                    <a
                      href={window.URL.createObjectURL(formData.file1)}
                      download={formData.file1.name}
                    >
                      <FaDownload className="action-icon download" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="error-message" style={{ color: "red", marginBottom: "10px" }}>
                {error}
              </div>
            )}

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Candidatures;