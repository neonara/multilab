import React, { useState ,useEffect} from "react";
import { IoClose } from "react-icons/io5";
import {  FaFileUpload } from "react-icons/fa";
import { JobtShow,ApplicationForm } from "../../types/types";
import "./Poste.css";
import api from "../../lib/api";

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    job: JobtShow | null;
  }
  const ApplicationModal: React.FC<ApplicationModalProps> = ({
    isOpen,
    onClose,
    job
  }) => {
      const [formData, setFormData] = useState<ApplicationForm>({
        titre: job?.id ? String(job.id) : "", // ✅ Use job.id instead
        fullname: "",
        email: "",
        numero_telephone: "",
        ville: "",
        transport: "",
        cvfile: null,
  });

  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
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
      setFormData(prev => ({
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
    formDataToSend.append("transport", formData.transport);
  
    if (formData.cvfile) {
      formDataToSend.append("cvfile", formData.cvfile);
    }
    try {
        const response = await api.post("/ApplicationEmploi/", formDataToSend, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log("Application submitted successfully:", response.data);
      console.log("Submitting application:", { jobId: job?.id, formData });
      // Add your API call here
      setFormData({
        titre: job?.id ? String(job.id) : "",
        fullname: "",
        email: "",
        numero_telephone: "",
        ville: "",
        transport: "",
        cvfile: null,
      });
      onClose();
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  useEffect(() => {
    if (job?.id) {
      setFormData(prev => ({ ...prev, titre: String(job.id) })); // ✅ Ensure ID is used
    }
  }, [job]);
  if (!isOpen) return null;


  return (
     <div className="modal-overlay" onClick={onClose}>
         <div className="modal-content" onClick={e => e.stopPropagation()}>
           <div className="modal-header">
             <h2 className="text-xl font-semibold text-black text-center mb-4">Postuler pour: {job?.titre}</h2>
             <button 
               className="modal-close"
               onClick={onClose}
               aria-label="Close modal"
             >
               <IoClose size={24} />
             </button>
           </div>

           <form onSubmit={handleSubmit} className="application-form">
           <input type="hidden" name="titre" id="titre" value={formData.titre} />


<div className="row">
             <div className="form-group">
               <div className="input-icon-wrapper">
                
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
             </div>
   
             <div className="form-group">
               <div className="input-icon-wrapper">
               
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
             </div>
             <div className="row">
             <div className="form-group">
               <div className="input-icon-wrapper">
                
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
             </div>
   
             <div className="form-group">
               <div className="input-icon-wrapper">
                
                 <select
                   name="transport"
                   id="transport"
                   value={formData.transport}
                   onChange={handleInputChange}
                   required
                   className="input-field" 
                 >
                   <option value="">Êtes-vous motorisé ?</option>
                   <option value="1">Oui</option>
                   <option value="2">Non</option>
                 </select>
               </div>
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
               className={`file-upload-area ${isDragging ? 'dragging' : ''}`}
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

export default ApplicationModal;