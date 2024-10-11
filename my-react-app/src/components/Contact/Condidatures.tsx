// src/pages/contact.tsx
import React, { useState } from 'react';
import './contact.css';
import back from "./assets/Rectangle 3901.jpg"
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { CiUser, CiTrash } from 'react-icons/ci';
import { FaDownload } from 'react-icons/fa'; // Importing FontAwesome download icon



    


type UploadedFile = File & {
    isLoading: boolean;
    
  };

const Condidatures = () => {
    
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type === "application/pdf") {
            const newFile: UploadedFile = { ...file, isLoading: true };
            setUploadedFiles([...uploadedFiles, newFile]);
            setTimeout(() => {
                setUploadedFiles((files) =>
                    files.map((f) => (f === newFile ? { ...f, isLoading: false } : f))
                );
            }, 2000);
        }
    };

    const handleDelete = (index: number) => {
        const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
        setUploadedFiles(updatedFiles);
    };
    return (
  <div className="header">
    <div className="background-image-contact" style={{ backgroundImage: `url(${back})` }} 
 >
                <div className="overlay-content">
                    <h1>Candidatures Spontanées</h1>
                </div>
            </div>
      <div className="container">
        <div className="row">
       <div className="contact col">
       <div className="contact-card">

        <h2>Contact</h2>
      <div className="contact-item">
        <FaPhone className="icon" />
        <span>(+216) 71 941 436 / 22 344 976</span>
      </div>
      <div className="contact-item">
        <FaMapMarkerAlt className="icon" />
        <span>Rue de l’argent -Zone industrielle el bosten Soukra -Ariana</span>
      </div>
      <div className="contact-item">
        <FaEnvelope className="icon" />
        <span>multilab@planet.tn</span>
      </div>
                  </div>
                  </div>

        <div className="contact-container col">
           
            <form className="contact-form">
            <div className="form-group">
                    <label>Nom et prénom </label>
                    <input type="text" placeholder="" />
                </div>
         <div className="row">
                <div className="form-group col">
                <label htmlFor="fullName">Numéro de téléphone</label> {/* Label for the first input */}
                        <div className="input-container">
                            <CiUser className="input-icon" />
                            <input type="text" id="fullName" className="input-field" />
                        </div>
                        
                </div>
                <div className="form-group col">
                        <label htmlFor="companyName">E-mail</label> {/* Label for the second input */}
                        <div className="input-container">
                            <CiUser className="input-icon" />
                            <input type="text" id="companyName" className="input-field" />
                        </div>
                    </div>
         </div>
         <div className="form-group">
                    <label>Objet </label>
                    <input type="text" placeholder="Objet du message" />
                </div>
                <div className="form-group">
                    <label className="file-upload-label">Ajouter un CV</label>
                    <div className="file-drop-zone">
                        <input 
                            type="file" 
                            id="cv" 
                            accept=".pdf" 
                            className="file-input" 
                            onChange={handleFileChange}
                        />
                        <p>Déposez vos fichiers ou cliquez pour télécharger</p>
                        <p className="supported-files">Types de fichiers pris en charge: <strong>PDF</strong></p>
                        <button type="button" className="browse-button">Parcourir</button>
                    </div>
                </div>

                {/* File Preview Section */}
                {uploadedFiles.length > 0 && (
                    <div className="uploaded-files">
                        {uploadedFiles.map((file, index) => (
                            <div key={index} className="file-preview">
                               {file.isLoading ? (
   <div className="file-loading">Téléchargement en cours...</div>
) : (
   // Show file details

                                    <>
                                        <div className="file-info">
                                            <img src="/pdf-icon.png" alt="PDF Icon" className="file-icon" />
                                            <div>
                                                <p className="file-name">{file.name}</p>
                                                <p className="file-details">{new Date().toLocaleDateString()} . {file.size / 1000}KB</p>
                                            </div>
                                        </div>
                                        <div className="file-actions">
                                            <CiTrash className="action-icon delete" onClick={() => handleDelete(index)} />
                                            <a href={URL.createObjectURL(file)} download={file.name}>
                                                <FaDownload className="action-icon download" /> {/* Updated download icon */}
                                            </a>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                )}




                <button type="submit">Envoyer</button>

            </form>

        </div>
        </div>
        </div>
        </div>  
    );
}

export default Condidatures;
