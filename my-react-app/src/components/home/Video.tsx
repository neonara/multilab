import React, { useState } from "react";
import "./home.css"; // Create a CSS file for custom styles
import vid from "./assets/WhatsApp Vidéo 2024-09-24 à 16.11.34_ea417abf.mp4";
import undervid from "./assets/under-vid1.jpeg";
import undervid2 from "./assets/under-vid2.jpeg";

import undervid3 from "./assets/under-vid3.jpeg";

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="section-container">
      <div className="video-container">
        <video
          className="video"
          src={vid}
          poster="your-image-poster-url.jpg"
          autoPlay
          muted
          loop // optional: loops the video
          playsInline // allows playback inline on mobile devices
        />
      </div>
      <div className="values-section-vid">
        <div className="values-grid-vid">
          <div className="vid-item-one">
            <img src={undervid} alt="Fiabilité" />
            <div className="info-content">
              <h3 className="transformable">Analyses</h3>
              <p className="hidden-desc">Nos analyses </p>
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
