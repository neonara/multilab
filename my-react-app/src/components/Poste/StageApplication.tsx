import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaFileUpload } from "react-icons/fa";
import { OffreStageShow, OffreStageForm } from "../../types/types";
import "./Poste.css";
import api from "../../lib/api";

interface StageApplicationProps {
  isOpen: boolean;
  onClose: () => void;
  job: OffreStageShow | null;
}

const StageApplication: React.FC<StageApplicationProps> = ({ isOpen, onClose, job }) => {
  const [formData, setFormData] = useState<OffreStageForm>({
    titre: "",
    fullname: "",
    email: "",
    numero_telephone: "",
    ville: "",
    type_stage: "",
    cvfile: null,
  });

  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState("");

  // Update formData when job changes
  useEffect(() => {
    if (job) {
      setFormData((prev) => ({
        ...prev,
        titre: String(job.id), // Ensure job ID is used correctly
        type_stage: String(job.type_stage), // Convert type_stage to a string
      }));
    }
  }, [job]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        cvfile: file,
      }));
      setFileName(file.name);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === "application/pdf") {
      setFormData((prev) => ({
        ...prev,
        cvfile: file,
      }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.titre) {
      console.error("Titre is missing!");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("titre", formData.titre);
    formDataToSend.append("fullname", formData.fullname);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("numero_telephone", formData.numero_telephone);
    formDataToSend.append("ville", formData.ville);
    formDataToSend.append("type_stage", formData.type_stage);

    if (formData.cvfile) {
      formDataToSend.append("cvfile", formData.cvfile);
    }

    try {
      const response = await api.post("/ApplicationStageur/", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Application submitted successfully:", response.data);

      // Reset form
      setFormData({
        titre: job?.id ? String(job.id) : "",
        fullname: "",
        email: "",
        numero_telephone: "",
        ville: "",
        type_stage: job?.type_stage ? String(job.type_stage) : "",
        cvfile: null,
      });
      onClose();
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="text-xl font-semibold text-black text-center mb-4">
            Postuler pour: {job?.titre}
          </h2>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <IoClose size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="application-form">
          <input type="hidden" name="titre" id="titre" value={formData.titre} />

          <div className="row">
            <div className="form-group">
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Votre nom complet"
                value={formData.fullname}
                onChange={handleInputChange}
                required
                className="input-field"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <input
                type="text"
                id="ville"
                name="ville"
                placeholder="Votre adresse"
                value={formData.ville}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <select
                name="type_stage"
                id="type_stage"
                value={formData.type_stage}
                onChange={handleInputChange}
                required
                className="input-field"
              >
                <option value="">Sélectionner</option>
                <option value="1">PFE</option>
                <option value="2">Stage Mémoire</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <input
              type="tel"
              id="numero_telephone"
              name="numero_telephone"
              placeholder="Votre numéro de téléphone"
              value={formData.numero_telephone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div
            className={`file-upload-area ${isDragging ? "dragging" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <FaFileUpload className="upload-icon" />
            <div className="upload-text">
              <p>Glissez votre CV ici ou</p>
              <label htmlFor="cvfile" className="file-upload-button">
                Parcourir
                <input
                  type="file"
                  id="cvfile"
                  name="cvfile"
                  onChange={handleFileChange}
                  accept=".pdf"
                  required
                  hidden
                />
              </label>
            </div>
            {fileName && <p className="file-name">{fileName}</p>}
          </div>

          <button type="submit" className="submit-button">
            Envoyer ma candidature
          </button>
        </form>
      </div>
    </div>
  );
};

export default StageApplication;