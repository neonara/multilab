import React, { useState } from "react";
import "./Poste.css";
import back from "@/assets/images/53.jpg";
import linkedin from "./assets/linkedin.jpg";
import offre from "@/assets/icons/icon-offre.svg";
import contrat from "@/assets/icons/icon-contrat.svg";
import experiencee from "@/assets/icons/icon-experience.svg";
import { IoMdSearch } from "react-icons/io";
import arrowDown from "@/assets/icons/icon-arrow-down.svg"; // Add this line

const Poste = () => {
  // State for filters
  const [unite, setUnite] = useState("Tous les unités d’affectation");
  const [emploi, setEmploi] = useState("Emploi");

  const handleUniteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnite(e.target.value);
  };

  const handleEmploiChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEmploi(e.target.value);
  };

  const handleSearch = () => {
    // Handle search logic here
    console.log("Search for:", unite, emploi);
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

  const postsNum = 4; // Number of posts
  const jobs = [
    {
      title: "Développeur Full Stack",
      time: "Full-time",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio. lorem ipsum dolor sit amet, consectetur elit.",
      contract: "CIVP",
      experience: "3 ans",
    },
    {
      title: "Développeur Full Stack",
      time: "Part-time",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio. lorem ipsum dolor sit amet, consectetur elit.",
      contract: "CIVP",
      experience: "3 ans",
    },
    {
      title: "Développeur Full Stack",
      time: "Part-time",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio. lorem ipsum dolor sit amet, consectetur elit.",
      contract: "CIVP",
      experience: "3 ans",
    },
    {
      title: "Développeur Full Stack",
      time: "Part-time",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio. lorem ipsum dolor sit amet, consectetur elit.",
      contract: "CIVP",
      experience: "3 ans",
    },
  ];

  interface Job {
    title: string;
    time: string;
    description: string;
    contract: string;
    experience: string;
  }

  function Card(job: Job) {
    return (
      <div className="job-card">
        <div className="job-icon">
          <img src={offre} alt="" />
        </div>
        <h2>{job.title}</h2>
        <h3>{job.time}</h3>
        <p>{job.description}</p>
        <div className="job-details">
          <div className="job-detail">
            <img src={contrat} alt="" />
            <p>{job.contract}</p>
          </div>
          <div className="job-detail">
            <img src={experiencee} alt="" />
            <p>{job.experience}</p>
          </div>
        </div>
        <button className="postuler-button">Postuler</button>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="poste-container">
        <div className="banner-container">
          <img src={back} alt="À propos banner" className="banner-image" />
        </div>
        <h2 className="poste-title">MULTILAB sa recrute</h2>

        <div className="search-bar">
          <div className="search-input-container">
            <IoMdSearch className="search-icon" />
            <input
              type="text"
              placeholder="Titre du poste ou mot-clé"
              className="search-input input-item"
            />
          </div>
          <div className="separator"></div> {/* Add this line */}
          <select
            className="dropdown input-item"
            value={unite}
            onChange={handleUniteChange}
            style={{ backgroundImage: `url(${arrowDown})` }} // Add this line
          >
            <option value="Administration">Administration</option>
            <option value="Finance">Finance</option>
            <option value="Comptabilité">Comptabilité</option>
            <option value="Analyse">Analyse</option>
          </select>
          <div className="separator"></div> {/* Add this line */}
          <select
            className="dropdown input-item"
            value={emploi}
            onChange={handleEmploiChange}
            style={{ backgroundImage: `url(${arrowDown})` }} // Add this line
          >
            <option value="Emploi">Emploi</option>
            <option value="Stage">Stage</option>
          </select>
          <div className="separator"></div> {/* Add this line */}
          <button
            className="reset-button"
            onClick={() => {
              setUnite("");
              setEmploi("");
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
            <div className="filter-option">
              <input
                type="checkbox"
                name="CIVP"
                checked={contractType.CIVP}
                onChange={handleContractChange}
              />
              <label htmlFor="CIVP">CIVP</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                name="Karama"
                checked={contractType.Karama}
                onChange={handleContractChange}
              />
              <label htmlFor="Karama">Karama</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                name="CDD"
                checked={contractType.CDD}
                onChange={handleContractChange}
              />
              <label htmlFor="CDD">CDD</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                name="CDI"
                checked={contractType.CDI}
                onChange={handleContractChange}
              />
              <label htmlFor="CDI">CDI</label>
            </div>

            <h3>Durée d'expérience</h3>
            <div className="filter-option">
              <input
                type="checkbox"
                name="nouveau"
                checked={experience.nouveau}
                onChange={handleExperienceChange}
              />
              <label htmlFor="nouveau">Nouveau diplômé</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                name="oneToTwo"
                checked={experience.oneToTwo}
                onChange={handleExperienceChange}
              />
              <label htmlFor="oneToTwo">1-2 ans</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                name="threeToFive"
                checked={experience.threeToFive}
                onChange={handleExperienceChange}
              />
              <label htmlFor="threeToFive">3-5 ans</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                name="ninePlus"
                checked={experience.ninePlus}
                onChange={handleExperienceChange}
              />
              <label htmlFor="ninePlus">9+ ans</label>
            </div>
          </div>

          {/* Job Cards Section */}
          <span className="job-cards-container">
            <h2 className="post-num">{postsNum} Postes Disponible</h2>
            <div className="job-cardss">
              {jobs.map((job) => (
                <Card {...job} />
              ))}
            </div>
          </span>
        </div>
      </div>

      <div
        className="linkedin-section"
        style={{
          backgroundImage: `url(${linkedin})`,
          backgroundSize: "100%", // Ensures the image covers the div
          backgroundPosition: "center", // Adjust to show a part of the image, e.g., 'top', 'center', 'bottom', etc.
          height: "300px", // Set the height you want for the visible section
          width: "100%", // Set the width (could be 100% of the container or fixed)
          // Needed for absolute positioning of content
          overflow: "hidden", // Hide parts of the image outside the container
          borderRadius: "17px", // Optional: round the corners of the div
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
    </div>
  );
};

export default Poste;
