import React, { useState } from 'react';
import './Poste.css';
import back from "./assets/Subtracts.jpg"
import linkedin from "./assets/linkedin.jpg"
import doc from './assets/document.png'


const Poste = () => {
  // State for filters
  const [unite, setUnite] = useState('Tous les unités d’affectation');
  const [emploi, setEmploi] = useState('Emploi');

  const handleUniteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnite(e.target.value);
  };

  const handleEmploiChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEmploi(e.target.value);
  };

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search for:', unite, emploi);
  };

  const [contractType, setContractType] = useState({
    CIVP: true,
    Karama: false,
    CDD: false,
    CDI: false
  });

  const [experience, setExperience] = useState({
    nouveau: false,
    oneToTwo: false,
    threeToFive: false,
    ninePlus: false
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

  return (
    <div className='page-container'>
    <div className="poste-container">
       <div className="banner-container">
        <img src={back} alt="À propos banner" className="banner-image" />
      </div>
      <h2 className="poste-title">MULTILAB sa recrute</h2>
      <div className="search-bar">
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Titre du poste ou mot-clé" 
            className="search-input"
          />
          <select 
            className="dropdown" 
            value={unite} 
            onChange={handleUniteChange}
          >
            <option value="Administration">Administration</option>
            <option value="Finance">Finance</option>
            <option value="Comptabilité">Comptabilité</option>
            <option value="Analyse">Analyse</option>
          </select>
          <select 
            className="dropdown" 
            value={emploi} 
            onChange={handleEmploiChange}
          >
            <option value="Emploi">Emploi</option>
            <option value="Stage">Stage</option>
          </select>
          <button className="reset-button" onClick={() => { setUnite(''); setEmploi(''); }}>Réinitialiser</button>
          <button className="search-button" onClick={handleSearch}>Chercher</button>
        </div>
      </div>
      <div className="content-wrapper">
        {/* Filters Section */}
        <div className="filters">
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
        <div className="job-cards">
          {/* Map over a list of job offers to generate cards dynamically */}
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="job-card">
              <div className="job-card-header">
                <div className='card-logo-container'>
                <img src={doc} alt="job icon" className="job-icon" />
                </div>
                <div className="job-details">
                  <h4>Désignation de l’offre</h4>
                  <p>Temps plein</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="job-card-footer">
                <div className="job-info">
                  <p><i className="fas fa-briefcase"></i> CDD</p>
                  <p><i className="fas fa-calendar-alt"></i> 4 ans</p>
                </div>
                <button className="apply-button">Postuler</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div
      className="linkedin-section"
      style={{
        backgroundImage: `url(${linkedin})`,
        backgroundSize: '100%',       // Ensures the image covers the div
        backgroundPosition: 'center',  // Adjust to show a part of the image, e.g., 'top', 'center', 'bottom', etc.
        height: '300px',               // Set the height you want for the visible section
        width: '100%',                 // Set the width (could be 100% of the container or fixed)
        position: 'relative',          // Needed for absolute positioning of content
        overflow: 'hidden',            // Hide parts of the image outside the container
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
