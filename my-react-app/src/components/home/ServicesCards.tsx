import React from 'react';
import './home.css';

interface ServiceCardProps {
  imageSrc: string;
  logoSrc: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, logoSrc, title, description, link }) => {
  return (
    <div className="card-container">
      {/* Top Image */}
      <img src={imageSrc} alt={title} className="card-image" />

      {/* Logo with dark blue background */}
      <div className="card-logo-containers">
        <img src={logoSrc} alt={`${title} Logo`} className="card-logos" />
      </div>

      {/* Paragraph */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={link} className="card-link">En savoir plus</a>
      </div>
    </div>
  );
}

export default ServiceCard;
