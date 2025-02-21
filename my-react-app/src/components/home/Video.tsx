import React, { useRef, useEffect } from "react";
import "./home.css";
import vid from "@/assets/Multilab-hero.mp4";
import undervid from "@/assets/undervid1.jpg";
import undervid2 from "./assets/under-vid2.jpeg";
import undervid3 from "./assets/under-vid3.jpeg";

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = videoContainerRef.current;
    if (!video || !container) return;

    // Set video source properly after component mounts
    video.src = vid;
    
    // 1. Disable right-click on video
    const preventContextMenu = (e: Event) => {
      e.preventDefault();
      return false;
    };
    video.addEventListener('contextmenu', preventContextMenu);
    
  
    
    // 3. Disable keyboard shortcuts
    const preventSaveShortcuts = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && 
          (e.key === 's' || e.key === 'S' || e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
      }
    };
    
    document.addEventListener('keydown', preventSaveShortcuts);
    
    // 4. Prevent drag and drop of video
    const preventDrag = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };
    video.addEventListener('dragstart', preventDrag as any);
    
    // 5. Monitor for DevTools opening
    const checkDevTools = () => {
      const threshold = 160;
      if (window.outerWidth - window.innerWidth > threshold || 
          window.outerHeight - window.innerHeight > threshold) {
        // Apply blur to video if DevTools is likely open
       
      } else {
        video.style.filter = '';
      }
    };
    
    window.addEventListener('resize', checkDevTools);
    const intervalCheck = setInterval(checkDevTools, 1000);
    
    // Clean up event listeners
    return () => {
      video.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('keydown', preventSaveShortcuts);
      video.removeEventListener('dragstart', preventDrag as any);
      window.removeEventListener('resize', checkDevTools);
      clearInterval(intervalCheck);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="video-container" ref={videoContainerRef}>
        <div className="video-protection-wrapper">
          {/* Video with no initial src - we'll set it via JavaScript */}
          <video 
            className="video" 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            controlsList="nodownload nofullscreen"
            disablePictureInPicture
          />
          {/* Overlay to prevent direct interaction */}
          <div className="video-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>
            Engagés pour la sécurité alimentaire et la protection de
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