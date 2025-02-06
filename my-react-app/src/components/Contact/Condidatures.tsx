import React, { useState } from "react";
import "./Contact.css";
import back from "./assets/Rectangle 3901.jpg";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaDownload,
} from "react-icons/fa";
import { CiUser, CiTrash } from "react-icons/ci";
import { CandidatesSimplifyForm } from "../../types/types";
import api from "../../lib/api";

type UploadedFile = File & { 
  isLoading: boolean;
};

const Condidatures = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [formData, setFormData] = useState<CandidatesSimplifyForm>({
    fullname: "",
    email: "",
    file1: null,
    description: "",
    phone_number: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        setFormData((prev) => ({
            ...prev,
            file1: file, // Ensure this key matches the backend field name
        }));
    }
};

  const handleDelete = () => {
    setUploadedFiles([]);
    setFormData((prev) => ({ ...prev, file1: null }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.file1) {
      setError("Veuillez télécharger un fichier avant de soumettre.");
      return;
  }
    try {
      const formDataWithFiles = new FormData();
      formDataWithFiles.append("fullname", formData.fullname);
      formDataWithFiles.append("email", formData.email);
      formDataWithFiles.append("phone_number", formData.phone_number);
      formDataWithFiles.append("description", formData.description);

      if (formData.file1) {
          formDataWithFiles.append("file1", formData.file1);
      }
      Object.keys(formData).forEach((key) => {
        if (formData[key as keyof CandidatesSimplifyForm] !== null) {
          formDataWithFiles.append(key, formData[key as keyof CandidatesSimplifyForm] as string);
        }
      });

      await api.post("/candidates-simplify/", formDataWithFiles, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Votre candidature a été envoyée avec succès!");
      setFormData({
        fullname: "",
        email: "",
        file1: null,
        description: "",
        phone_number: "",
      });
      setUploadedFiles([]);
    } catch (error) {
      console.error(error);
      setError("Une erreur s'est produite lors de l'envoi de la candidature.");
    }
  };

  return (
    <div className="header">
      <div className="background-image-contact" style={{ backgroundImage: `url(${back})` }}>
        <h1>Candidatures Spontanées</h1>
      </div>
      <div className="contact">
        <div className="contact-card">
          <h2>Contact</h2>
          <div className="contact-item">
            <FaPhone className="icon" />
            <span>(+216) 71 941 436 / 22 344 976</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Rue de l'argent - Zone industrielle el bosten Soukra - Ariana</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>multilab@planet.tn</span>
          </div>
        </div>

        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-group name">
              <label htmlFor="fullname">Nom et prénom</label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row">
              <div className="form-group col">
                <label htmlFor="phone_number">Numéro de téléphone</label>
                <div className="input-container">
                  <CiUser className="input-icon" />
                  <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group col">
                <label htmlFor="email">E-mail</label>
                <div className="input-container">
                  <CiUser className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Objet</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
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
                <p className="dep">Déposez vos fichiers ou cliquez pour télécharger</p>
                <p className="supported-files">Types de fichiers pris en charge: PDF</p>
                <button type="button" className="browse-button">Parcourir</button>
              </div>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="uploaded-files">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="file-preview">
                    {file.isLoading ? (
                      <div className="file-loading">Téléchargement en cours...</div>
                    ) : (
                      <>
                        <div className="file-info">
                          <img src="/pdf-icon.png" alt="PDF Icon" className="file-icon" />
                          <div>
                            <p className="file-name">{file.name}</p>
                            <p className="file-details">{(file.size / 1000).toFixed(2)} KB</p>
                          </div>
                        </div>
                        <div className="file-actions">
                          <CiTrash className="action-icon delete" onClick={handleDelete} />
                          <a 
                            href={window.URL.createObjectURL(file)} 
                            download={file.name}
                          >
                            <FaDownload className="action-icon download" />
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}

            {error && (
              <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>
                {error}
              </div>
            )}

            <button type="submit" className="submit-btn">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Condidatures;