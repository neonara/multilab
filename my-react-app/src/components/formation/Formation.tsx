import "./formation.css"; // Create a CSS file to style your page
import im from "./assets/1.jpg";
import Sciences from "./assets/2.jpg";
import Sécurité from "./assets/3.jpg";
import Management from "./assets/4.jpg";
import Sécurité5 from "./assets/5.jpg";
import Prélèvement from "./assets/6.jpg";
import back from "./assets/Subtract2.jpg";
import logo1 from "./assets/logo1.jpeg";
import logo2 from "./assets/right.jpg";

import { Link } from "react-router-dom";

const Formation = () => {
  return (
    <div className="formation-container">
      <div className="image-container">
        <img src={back} alt="Lab Worker" className="background-image" />
        <div className="text-container">
          <p className="line1">MULTILAB s.a</p>
          <p className="line2">ASSISTANCE ET AUDIT </p>
        </div>
      </div>
      <div className="a3">
        <h1>Nos thèmes de formation</h1>
        <div className="themes-grid3">
          <div className="theme">
            <img
              src={im}
              alt="Bonne pratiques d'hygiene"
              className="theme-image"
            />
            <p>Bonne pratiques d'hygiene</p>
          </div>
          <div className="theme">
            <img
              src={Sciences}
              alt="Sciences Analytiques"
              className="theme-image"
            />
            <p>Sciences Analytiques</p>
          </div>
          <div className="theme">
            <img
              src={Sécurité}
              alt="Sécurité des Aliments"
              className="theme-image"
            />
            <p>Sécurité des Aliments</p>
          </div>
          <div className="theme">
            <img
              src={Management}
              alt="Management de la Qualité"
              className="theme-image"
            />
            <p>Management de la Qualité</p>
          </div>
          <div className="theme">
            <img
              src={Sécurité5}
              alt="Sécurité des Eaux"
              className="theme-image"
            />
            <p>Sécurité des Eaux</p>
          </div>
          <div className="theme">
            <img
              src={Prélèvement}
              alt="Bonnes Pratiques de Prélèvement"
              className="theme-image"
            />
            <p>Bonnes Pratiques de Prélèvement</p>
          </div>
        </div>
      </div>
      <div className="formation-containers">
        <div className="formation-card">
          <img
            src={logo1}
            alt="Formation sur mesure"
            className="formation-image"
          />
          <h3>Formations sur mesure</h3>
          <p>
            Des programmes de formation adaptés aux besoins spécifiques, aux
            niveaux de compétences et aux rythmes d'apprentissage de chaque
            participant.
          </p>
        </div>
        <div className="formation-card">
          <img
            src={logo2}
            alt="Formations Collaboratives"
            className="formation-image"
          />
          <h3>Formations Collaboratives</h3>
          <p>
            Favoriser le partage de connaissances et de bonnes pratiques, la
            mutualisation des compétences et la participation active à des mises
            en situation interactives pour une expérience d'apprentissage
            enrichissante.
          </p>
        </div>
      </div>

      <div className="custom-formation-container">
        <h2 className="custom-formation-heading">
          Vous ne trouvez pas la formation
        </h2>
        <h2 className="custom-formation-heading">dont vous avez besoin ?</h2>
        <Link to="/Contact">
          <button className="custom-formation-button">
            Demander une formation personnalisée
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Formation;
