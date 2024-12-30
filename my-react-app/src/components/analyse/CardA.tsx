import React from "react";
import "./analyse.css";

interface CardProps {
  title: string;
  imageSrc: string;
  altText: string;
  link: string;
}

const CardA: React.FC<CardProps> = ({ title, imageSrc, altText, link }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={altText} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <a href={link} className="card-link">
          En savoir plus
        </a>
      </div>
    </div>
  );
};

export default CardA;
