import React from "react";
import "./home.css";
import vid from "@/assets/Multilab-hero.mp4";
import undervid from "@/assets/undervid1.jpg";
import undervid2 from "./assets/under-vid2.jpeg";
import undervid3 from "./assets/under-vid3.jpeg";

const VideoSection: React.FC = () => {
  return (
    <div className="section-container">
      <div className="video-container">
        <video className="video" src={vid} autoPlay muted loop playsInline />
        <div className="hero-content">
          <h1>
            Engagés pour la sécurité alimentaire et La protection de
            l'environnement
          </h1>
          <div className="title-bg"></div>
        </div>
      </div>

      <div className="values-section-vid">
        <div className="values-grid-vid">
          <div className="vid-item-one">
            <img src={undervid} alt="Fiabilité" />
            <div className="info-content">
              <h3 className="transformable">Analyses</h3>
              <p className="hidden-desc">Nos analyses</p>
            </div>
          </div>
          <div className="vid-item">
            <img src={undervid2} alt="Expertise" />
            <div className="info-content">
              <h3 className="transformable">Formation</h3>
              <p className="hidden-desc">Centre de formation</p>
            </div>
          </div>
          <div className="vid-item">
            <img src={undervid3} alt="Réactivité" />
            <div className="info-content">
              <h3 className="transformable">Assistance et conseil</h3>
              <p className="hidden-desc">Assistance et conseil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
