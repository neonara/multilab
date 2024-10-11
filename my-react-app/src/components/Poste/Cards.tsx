// components/Card.tsx
import React from 'react';
import './Poste.css'; 

interface CardProps {
  title: string;
  contractType: string;
  experience: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, contractType, experience, description }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src="/path-to-icon.png" alt="Icon" />
        <h2>{title}</h2>
        <p>{contractType}</p>
      </div>
      <div className="card-body">
        <p>{description}</p>
        <div className="card-info">
          <span>{contractType}</span>
          <span>{experience}</span>
        </div>
        <button className="btn-apply">Postuler</button>
      </div>
    </div>
  );
};

export default Card;
