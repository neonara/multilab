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
    <div className="assistance-container">
      {/* Section 1 */}
      {/* <div className="image-container">
        <img src={back} alt="Lab Worker" className="background-image" />
        <div className="text-container">
          <p className="line1">MULTILAB s.a</p>
          <p className="line2">ASSISTANCE ET AUDIT </p>
        </div>
      </div> */}
      <BannerImage backimg={backimg} title="ASSISTANCE ET CONSEIL" />
      <div className="containers">
        <div className="text-left animation-class">
          <h2 className="test">Une offre adaptée à tous vos besoins</h2>
          <p>
            Le service Audit Conseil de MULTILAB s'engage à accompagner ses
            clients de manière personnalisée pour garantir la maîtrise de la
            qualité et de la sécurité des aliments. À travers des prestations
            d'audit et de conseil, notre équipe travaille en étroite
            collaboration avec vous pour atteindre vos objectifs d'amélioration
            continue, en respectant les normes réglementaires et en conjuguant
            expertise et proximité. Notre mission est de vous fournir un
            accompagnement global, en analysant les résultats des audits, en
            identifiant les causes des problèmes et en proposant des solutions
            efficaces pour optimiser vos plans d'action.
          </p>
        </div>
        <img
          src={assistanceImage}
          className="image-right animation-class"
          alt="Image 1"
        />
      </div>

      {/* Section 2 */}
      <div className="containers">
        <img
          src={newImage}
          className="image-left  animation-class"
          alt="Image 3"
        />

        <div className="text-right animation-class">
          <h2 className="test">Another Section Title</h2>
          <p>
            Chez MULTILAB, nous adoptons une approche intégrée qui se concentre
            sur la satisfaction client, le respect de l'humain, l'innovation et
            la protection. Nous nous engageons à vous offrir un service de
            qualité exceptionnel, en prenant en compte vos besoins spécifiques
            et en apportant des solutions sur mesure. Notre objectif est de
            garantir votre satisfaction à travers une écoute attentive, une
            grande réactivité et une expertise reconnue, tout en innovant
            constamment pour rester à la pointe des évolutions technologiques et
            réglementaires, et en intégrant des pratiques respectueuses de
            l'environnement pour protéger notre planète.{" "}
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="containers">
        <div className="text-left animation-class">
          <h2 className="test">Une offre adaptée à tous vos besoins</h2>
          <p>
            MULTILAB s.a s’engage à vous fournir un service de qualité, en
            tenant compte de vos besoins spécifiques et en proposant des
            solutions sur mesure, telles que la validation de vos processus de
            fabrication et la vérification de la stabilité de vos produits dans
            le temps. Notre objectif est de garantir votre satisfaction par une
            écoute attentive, une grande réactivité et une expertise reconnue.
            Nous innovons constamment pour rester à la pointe des évolutions
            technologiques et réglementaires, tout en intégrant des pratiques
            respectueuses de l'environnement pour protéger notre planète.
          </p>
        </div>
        <img src={img3} className="image-right animation-class" alt="Image 3" />
      </div>

      {/* Section 4 */}
      <div className="containers">
        <img src={img4} className="image-left animation-class" alt="Image 4" />

        <div className="text-right animation-class ">
          <h2 className="test">Assistance et conseil technique :</h2>
          <p>
            Nos équipes de Docteurs, ingénieurs et techniciens assurent un rôle
            de conseiller, et vous apportent leurs expertises et conseils pour
            anticiper les défis, promouvoir les bonnes pratiques et procédures,
            et optimiser les actions correctives à la suite des audits ou des
            réclamations{" "}
          </p>
        </div>
      </div>
      <div className="link">
        <Link to="/Contact">
          <button className="custom-formation-button">Contacter-nous</button>
        </Link>
      </div>
    </div>
  );
};

export default Assistance;
