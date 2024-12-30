// components/Sidebar.tsx
import React from "react";
import "./Poste.css";

const Sideb: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="filter-group">
        <h3>Type de contrat</h3>
        <label>
          <input type="checkbox" /> CIVP
        </label>
        <label>
          <input type="checkbox" /> Karama
        </label>
        <label>
          <input type="checkbox" /> CDD
        </label>
        <label>
          <input type="checkbox" /> CDI
        </label>
      </div>
      <div className="filter-group">
        <h3>Durée d'expérience</h3>
        <label>
          <input type="checkbox" /> Nouveau diplômé
        </label>
        <label>
          <input type="checkbox" /> 1-2 ans
        </label>
        <label>
          <input type="checkbox" /> 3-5 ans
        </label>
        <label>
          <input type="checkbox" /> 9+ ans
        </label>
      </div>
    </div>
  );
};

export default Sideb;
