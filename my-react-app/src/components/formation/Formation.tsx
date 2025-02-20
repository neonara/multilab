import "./Formation.css";
import im from "./assets/1.jpg";
import Sciences from "./assets/2.jpg";
import Sécurité from "./assets/3.jpg";
import Management from "./assets/4.jpg";
import Sécurité5 from "./assets/5.jpg";
import Prélèvement from "./assets/6.jpg";
import backimg from "./assets/Subtract2.jpg";
import logo1 from "@/assets/icons/icon-group.svg";
import logo2 from "@/assets/icons/icon-collaborative.svg";

import { Link } from "react-router-dom";
import BannerImage from "../Analyses/BannerImage";

const Formation = () => {
  return (
    <div>
      <div className="mobile-banner">
        <BannerImage backimg={backimg} title="FORMATION" />
      </div>
      <div className="formation-containerr">
        <div className="desktop-banner">
          <BannerImage backimg={backimg} title="FORMATION" />
        </div>
        <p className="formation-para">
          <strong>MULTILAB s.a</strong> propose à ses clients des formations
          ciblées et approfondies en hygiène et sécurité alimentaire, ainsi que
          sur diverses méthodes et techniques d'analyse. Nos programmes de
          formation incluent des études de cas pratiques, des simulations et des
          ateliers interactifs, permettant à vos équipes d'appliquer
          immédiatement les connaissances acquises. Nous nous engageons à
          adapter nos formations aux besoins spécifiques de chaque entreprise,
          afin de maximiser leur impact et leur efficacité. Choisir{" "}
          <strong>MULTILAB s.a</strong>. pour vos formations, c'est investir
          dans l'excellence opérationnelle et la sécurité de vos produits.
        </p>

        <div className="themes-section">
          <h1 className="themes-title">Nos thèmes de formation</h1>
          <div className="themes-grid">
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
              <p>
                Sciences <br /> Analytiques
              </p>
            </div>
            <div className="theme">
              <img
                src={Sécurité}
                alt="Sécurité des Aliments"
                className="theme-image"
              />
              <p>
                Sécurité <br /> des Aliments
              </p>
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
              <p>
                Sécurité <br /> des Eaux
              </p>
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

        <h2 className="section-title">Nos méthodes pédagogiques</h2>
        <div className="formation-containers">
          <div className="formation-card">
            <img
              src={logo1}
              alt="Formation sur mesure"
              className="formation-image"
            />
            <div className="formation-text">
              <h3>Formations sur mesure</h3>
              <p>
                Des programmes de formation adaptés aux besoins spécifiques, aux
                niveaux de compétences et aux rythmes d'apprentissage de chaque
                participant.{" "}
              </p>
            </div>
          </div>
          <div className="formation-card">
            <img
              src={logo2}
              alt="Formations Collaboratives"
              className="formation-image"
            />
            <div className="formation-text">
              <h3>Formations Collaboratives</h3>
              <p>
                Favoriser le partage de connaissances et de bonnes pratiques, la
                mutualisation des compétences et la participation active à des
                mises en situation interactives pour une expérience
                d'apprentissage.
              </p>
            </div>
          </div>
        </div>

        <div className="custom-formation-container">
          <h2 className="custom-formation-heading">
            Vous ne trouvez pas la formation dont vous avez besoin ?
          </h2>
          <div className="link">
            <Link to="/Contact">
              <button className="custom-formation-button">
                Demander une formation personnalisée
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formation;
