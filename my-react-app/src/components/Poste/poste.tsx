import React, { useState, useEffect } from "react";
import "./Poste.css";
import back from "@/assets/images/53.jpg";
import linkedin from "./assets/linkedin.jpg";
import offre from "@/assets/icons/icon-offre.svg";
import contrat from "@/assets/icons/icon-contrat.svg";
import experiencee from "@/assets/icons/icon-experience.svg";
import { IoMdSearch } from "react-icons/io";
import arrowDown from "@/assets/icons/icon-arrow-down.svg";
import api from "../../lib/api";
import { JobtShow } from "../../types/types";
import ApplicationModal from "./Application";

import { useNavigate } from "react-router";
const Poste = () => {
  const navigate = useNavigate();
 
  // State for filters
  const [unite, setUnite] = useState("Tous les unités d'affectation");
  const [emploi, setEmploi] = useState("Emploi");
  const [emploiDescriptions, setEmploiDescriptions] =  useState<JobtShow[]>([]);
  const [selectedJob, setSelectedJob] = useState<JobtShow | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const getEmploi = async () => {
    try {
      const response = await api.get('/emploi');
      const publicEmploi = response.data.filter(
        (emploi: JobtShow) => emploi.status === "approved"
      );
      setEmploiDescriptions(publicEmploi);
    } catch (error) {
      console.error('Error Fetching emploi data:', error);
    }
  };

  useEffect(() => {
    getEmploi();
  }, []);

  const handleUniteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnite(e.target.value);
  };

  const handleEmploiChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEmploi(e.target.value);
    const selectedValue = e.target.value;

    if (selectedValue === "Emploi") {
      navigate("/poste"); // Navigate to the Emploi page
    } else if (selectedValue === "Stage") {
      navigate("/stage"); // Navigate to the Stage page
    }
  };

  const handleSearch = () => {
    // Handle search logic here
    console.log("Search for:", { unite, emploi, searchTerm });
  };

  const [contractType, setContractType] = useState({
    CIVP: true,
    Karama: false,
    CDD: false,
    CDI: false,
  });

  const [experience, setExperience] = useState({
    nouveau: false,
    oneToTwo: false,
    threeToFive: false,
    ninePlus: false,
  });

  const handleContractChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContractType({
      ...contractType,
      [e.target.name]: e.target.checked,
    });
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.checked,
    });
  };

  // Fallback data if API fails
  const fallbackJobs: JobtShow[] = [
    {
      id: 1,
      titre: "MULTILAB position",
      temps: "Full-time",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio. lorem ipsum dolor sit amet, consectetur elit.",
      contrat: "CIVP",
      departement: "MULTILAB Departement",
      experience: "3 ans",
      status: "approved",
      created_at: new Date(),
    },
    // ... other fallback jobs
  ];

  const jobs = emploiDescriptions.length > 0 ? emploiDescriptions : fallbackJobs;
  const postsNum = jobs.length; // Dynamically calculate number of posts

  const JobCard = ({ job }: { job: JobtShow }) => (
    <div className="job-card" key={job.id}>
      <div className="job-icon">
        <img src={offre} alt="" />
      </div>
      <h2>{job.titre}</h2>
      <p>Unité:{job.departement}</p>
      <h3>{job.temps ==="1"? "Temps plein" : "Partiel"}</h3>
      <p>{job.description}</p>
      <div className="job-details">
        <div className="job-detail">
          <img src={contrat} alt="" />
          <p>{job.contrat}</p>
        </div>
        <div className="job-detail">
          <img src={experiencee} alt="" />
          <p>{job.experience}</p>
        </div>
       
      </div>
      <button onClick={() => {
          setSelectedJob(job);
          setIsModalOpen(true);
        }} className="postuler-button">Postuler</button>
    </div>
  );



  return (
    <div className="page-container">
      <div className="poste-container">
        <div className="banner-container">
          <img src={back} alt="À propos banner" className="banner-poste" />
        </div>
        <h2 className="poste-title">MULTILAB sa recrute</h2>

        <div className="search-bar">
          <div className="search-input-container">
            <IoMdSearch className="search-icon" />
            <input
              type="text"
              placeholder="Titre du poste ou mot-clé"
              className="search-input input-item"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="separator" />
          <select
            className="dropdown input-item"
            value={unite}
            onChange={handleUniteChange}
            style={{ backgroundImage: `url(${arrowDown})` }}
          >
            <option value="Administration">Administration</option>
            <option value="Finance">Finance</option>
            <option value="Comptabilité">Comptabilité</option>
            <option value="Analyse">Analyse</option>
          </select>
          <div className="separator" />
          <select
            className="dropdown input-item"
            value={emploi}
            onChange={handleEmploiChange}
            style={{ backgroundImage: `url(${arrowDown})` }}
          >
            <option value="Emploi">Emploi</option>
            <option value="Stage">Stage</option>
          </select>
          <div className="separator" />
          <button
            className="reset-button"
            onClick={() => {
              setUnite("Tous les unités d'affectation");
              setEmploi("Emploi");
              setSearchTerm("");
            }}
          >
            Réinitialiser
          </button>
          <button className="search-button" onClick={handleSearch}>
            Chercher
          </button>
        </div>

        <div className="job-section">
          {/* Filters Section */}
          <div className="filters">
            <h2>Filtrer</h2>
            <h3>Type de contrat</h3>
            {Object.entries(contractType).map(([key, value]) => (
              <div className="filter-option" key={key}>
                <input
                  type="checkbox"
                  name={key}
                  checked={value}
                  onChange={handleContractChange}
                />
                <label htmlFor={key}>{key}</label>
              </div>
            ))}

            <h3>Durée d'expérience</h3>
            {Object.entries(experience).map(([key, value]) => (
              <div className="filter-option" key={key}>
                <input
                  type="checkbox"
                  name={key}
                  checked={value}
                  onChange={handleExperienceChange}
                />
                <label htmlFor={key}>
                  {key === "nouveau"
                    ? "Nouveau diplômé"
                    : key === "oneToTwo"
                    ? "1-2 ans"
                    : key === "threeToFive"
                    ? "3-5 ans"
                    : "9+ ans"}
                </label>
              </div>
            ))}
          </div>

          {/* Job Cards Section */}
          <span className="job-cards-container">
            <h2 className="post-num">{postsNum} Postes Disponible</h2>
            <div className="job-cardss">
              {jobs.map((job) => (
                <JobCard job={job} key={job.id} />
              ))}
            </div>
          </span>
        </div>
      </div>

      <div
        className="linkedin-section"
        style={{
          backgroundImage: `url(${linkedin})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          height: "300px",
          width: "100%",
          overflow: "hidden",
          borderRadius: "17px",
        }}
      >
        <div className="content">
          <h2>Notre page LinkedIn</h2>
          <a
            href="https://tn.linkedin.com/in/multilab-s-a-b1978870"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="linkedin-button">Suivez-nous</button>
          </a>
        </div>
      </div>
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        job={selectedJob}
      />

    </div>
  );
};

export default Poste;