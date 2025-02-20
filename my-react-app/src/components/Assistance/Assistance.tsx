import { useEffect } from "react";
import "./Assistance.css";
import assistanceImage from "../Assistance/assets/Rectangle 16.jpg";
import newImage from "../Assistance/assets/Rectangle 17.jpg";
import img3 from "../Assistance/assets/Rectangle 392674.jpg";
import img4 from "../Assistance/assets/Rectangle 39267.jpg";
import backimg from "@/assets/images/40-blue.png";
import { Link } from "react-router-dom";
import BannerImage from "../Analyses/BannerImage";

const Assistance = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animation-class");

    const handleScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isInView) {
          el.classList.add("in-view");
        } else {
          el.classList.remove("in-view");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll(); // Trigger scroll on load to check if any element is already in view

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="mobile-banner">
        <BannerImage backimg={backimg} title="ASSISTANCE <br/> ET CONSEIL" />
      </div>
      <div className="assistance-container">
        <div className="desktop-banner">
          <BannerImage backimg={backimg} title="ASSISTANCE ET CONSEIL" />
        </div>

        {/* Section 1 */}
        <div className="containers desktop-only">
          <div className="text-left animation-class">
            <h2 className="test">Nos Services d'Audit et Conseil</h2>
            <p>
              Le service d'Assistance et de Conseil de{" "}
              <strong>MULTILAB s.a</strong> s'engage à accompagner ses clients
              de manière personnalisée pour garantir la maîtrise de la qualité
              et de la sécurité des produits. Grâce à des prestations
              d'assistance et de conseil, notre équipe collabore étroitement
              avec vous pour atteindre vos objectifs d'amélioration continue,
              tout en respectant les normes réglementaires et en alliant
              expertise et proximité. Notre mission est de vous fournir un
              accompagnement global, en analysant les résultats de vos analyses
              et de vos audits, en identifiant les causes des problèmes et en
              proposant des solutions efficaces pour optimiser vos plans
              d'action.
            </p>
          </div>
          <img
            src={assistanceImage}
            className="image-right animation-class"
            alt="Image 1"
          />
        </div>

        <div className="containers mobile-only">
          <div className="text-left">
            <h2 className="test">Nos Services d'Audit et Conseil</h2>
          </div>
          <img src={assistanceImage} className="image-right" alt="Image 1" />
          <div className="text-left">
            <p>
              Le service d'Assistance et de Conseil de{" "}
              <strong>MULTILAB s.a</strong> s'engage à accompagner ses clients
              de manière personnalisée pour garantir la maîtrise de la qualité
              et de la sécurité des produits. Grâce à des prestations
              d'assistance et de conseil, notre équipe collabore étroitement
              avec vous pour atteindre vos objectifs d'amélioration continue,
              tout en respectant les normes réglementaires et en alliant
              expertise et proximité. Notre mission est de vous fournir un
              accompagnement global, en analysant les résultats de vos analyses
              et de vos audits, en identifiant les causes des problèmes et en
              proposant des solutions efficaces pour optimiser vos plans
              d'action.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="containers desktop-only">
          <img
            src={newImage}
            className="image-left animation-class"
            alt="Image 3"
          />
          <div className="text-right animation-class">
            <h2 className="test">Une offre adaptée à tous vos besoins</h2>
            <p>
              <strong>MULTILAB s.a</strong> s’engage à vous fournir un service
              de qualité, en tenant compte de vos besoins spécifiques et en
              proposant des solutions sur mesure, telles que la validation de
              vos processus de fabrication et la vérification de la stabilité de
              vos produits dans le temps. Notre objectif est de garantir votre
              satisfaction par une écoute attentive, une grande réactivité et
              une expertise reconnue. Nous innovons constamment pour rester à la
              pointe des évolutions technologiques et réglementaires, tout en
              intégrant des pratiques respectueuses de l'environnement pour
              protéger notre planète.
            </p>
          </div>
        </div>

        <div className="containers mobile-only">
          <div className="text-right">
            <h2 className="test">Une offre adaptée à tous vos besoins</h2>
          </div>
          <img src={newImage} className="image-left" alt="Image 3" />
          <div className="text-right">
            <p>
              <strong>MULTILAB s.a</strong> s’engage à vous fournir un service
              de qualité, en tenant compte de vos besoins spécifiques et en
              proposant des solutions sur mesure, telles que la validation de
              vos processus de fabrication et la vérification de la stabilité de
              vos produits dans le temps. Notre objectif est de garantir votre
              satisfaction par une écoute attentive, une grande réactivité et
              une expertise reconnue. Nous innovons constamment pour rester à la
              pointe des évolutions technologiques et réglementaires, tout en
              intégrant des pratiques respectueuses de l'environnement pour
              protéger notre planète.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="containers desktop-only">
          <div className="text-left animation-class">
            <h2 className="test">Audit qualité et Hygiène</h2>
            <p>
              Les experts de <strong>MULTILAB s.a.</strong> réalisent des audits
              d'hygiène approfondis pour le compte de ses clients, garantissant
              des normes sanitaires optimales et assurant la sécurité
              alimentaire. Nous intervenons dans divers secteurs, tels que
              l'industrie et la distribution alimentaires, la restauration et
              l'hôtellerie... Notre objectif est d'aider nos clients à maintenir
              des standards élevés en matière d'hygiène et de sécurité, tout en
              respectant les réglementations en vigueur et en intégrant les
              meilleures pratiques de protection de l'environnement.
            </p>
          </div>
          <img
            src={img4}
            className="image-right animation-class"
            alt="Image 3"
          />
        </div>

        <div className="containers mobile-only">
          <div className="text-left">
            <h2 className="test">Audit qualité et Hygiène</h2>
          </div>
          <img src={img4} className="image-right" alt="Image 3" />
          <div className="text-left">
            <p>
              Les experts <strong>MULTILAB s.a.</strong> réalisent des audits
              d'hygiène approfondis pour le compte de ses clients, garantissant
              des normes sanitaires optimales et assurant la sécurité
              alimentaire. Nous intervenons dans divers secteurs, tels que
              l'industrie et la distribution alimentaires, la restauration et
              l'hôtellerie... Notre objectif est d'aider nos clients à maintenir
              des standards élevés en matière d'hygiène et de sécurité, tout en
              respectant les réglementations en vigueur et en intégrant les
              meilleures pratiques de protection de l'environnement.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="containers desktop-only">
          <img
            src={img3}
            className="image-left animation-class"
            alt="Image 4"
          />
          <div className="text-right animation-class">
            <h2 className="test">Assistance et Conseil Technique</h2>
            <p>
              Nos équipes de Docteurs, ingénieurs et techniciens assurent un
              rôle de conseiller, et vous apportent leurs expertises et conseils
              pour anticiper les défis, promouvoir les bonnes pratiques et
              procédures, et optimiser les actions correctives à la suite des
              audits ou des réclamations.
            </p>
          </div>
        </div>

        <div className="containers mobile-only">
          <div className="text-right">
            <h2 className="test">Assistance et Conseil Technique</h2>
          </div>
          <img src={img3} className="image-left" alt="Image 4" />
          <div className="text-right">
            <p>
              Nos équipes de Docteurs, ingénieurs et techniciens assurent un
              rôle de conseiller, et vous apportent leurs expertises et conseils
              pour anticiper les défis, promouvoir les bonnes pratiques et
              procédures, et optimiser les actions correctives à la suite des
              audits ou des réclamations.
            </p>
          </div>
        </div>

        <div className="link">
          <Link to="/Contact">
            <button className="custom-formation-button">Contacter-nous</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Assistance;
