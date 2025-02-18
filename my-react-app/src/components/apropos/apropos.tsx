import "swiper/swiper-bundle.css";

import React from "react";
import { useNavigate } from "react-router-dom";

import "./apropos.css";
import aprop from "@/assets/images/18.jpg";
import lab from "@/assets/images/34.jpg";
// import laitImage from "@/assets/images/19.jpg";
// import viandeImage from "@/assets/images/20.jpg";
// import pecheImage from "@/assets/images/21.png";
// import hotelImage from "@/assets/images/22-1.jpg";
// import Conditionnement from "@/assets/images/19.jpg";
// import Pâtisserie from "@/assets/images/23.jpg";
// import distribution from "@/assets/images/24.jpg";
// import ServHygiènes from "@/assets/images/25.jpg";
// import Eaux from "@/assets/images/26.jpg";
// import Nutrition from "@/assets/images/64.png";
// import Fruits from "@/assets/images/28.jpg";
// import gras from "@/assets/images/29.jpg";
// import pharmaceutiques from "@/assets/images/30.jpg";
// import cosmétiques from "@/assets/images/31.jpg";
// import Laboratoires from "@/assets/images/32.jpg";
// import conseil from "@/assets/images/33.jpg";

import bannerImage from "@/assets/images/17.jpg";

import icon1 from "@/assets/icons/icon-politique.svg";
import icon2 from "@/assets/icons/icon-protection.svg";
import icon3 from "@/assets/icons/icon-satisfaction.svg";
import CarouselClients from "./carouselClients";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Apropos: React.FC = () => {
  // const clients = [
  //   { image: laitImage, label: "Lait et dérivés" },
  //   { image: viandeImage, label: "Viande de boucherie et volailles" },
  //   { image: pecheImage, label: "La pêche" },
  //   {
  //     image: hotelImage,
  //     label: "Hôtellerie, restauration et cliniques",
  //   },
  //   {
  //     image: Conditionnement,
  //     label: "Conditionnement des produits alimentaires  ",
  //   },
  //   { image: Pâtisserie, label: "Pâtisserie confiserie" },
  //   { image: distribution, label: "La grande distribution" },
  //   { image: ServHygiènes, label: "Services d’hygiène" },
  //   { image: Eaux, label: "Eaux" },
  //   { image: Nutrition, label: "Nutrition animale" },
  //   { image: Fruits, label: "Fruits et Légumes" },
  //   { image: gras, label: "Produits gras" },
  //   {
  //     image: pharmaceutiques,
  //     label: "Produits pharmaceutiques et Parapharmaceutiques",
  //   },
  //   { image: cosmétiques, label: "Produits hygiènes & cosmétiques" },
  //   { image: Laboratoires, label: "Laboratoires" },
  //   { image: conseil, label: "Bureaux de conseil" },
  // ];

  // const [startIndex, setStartIndex] = useState(0);

  // // Handle next click to shift by one card
  // const handleNext = () => {
  //   if (startIndex + 1 + 4 <= clients.length) {
  //     setStartIndex(startIndex + 1);
  //   } else {
  //     setStartIndex(0); // Loop back to the start
  //   }
  // };

  // // Handle previous click to shift by one card
  // const handlePrev = () => {
  //   if (startIndex - 1 >= 0) {
  //     setStartIndex(startIndex - 1);
  //   } else {
  //     setStartIndex(clients.length - 4); // Loop to the last set of 4 cards
  //   }
  // };

  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="apropos-container">
      {/* Banner Image */}
      <div className="apropos-">
        <div className="apropos-banner-container">
          <img
            src={bannerImage}
            alt="À propos banner"
            className="banner-apropos"
          />
          <div className="banner-text">
            <h2>À propos</h2>
          </div>
        </div>
      </div>

      <div className="Accreditation">
        <h1>Pourquoi choisir MULTILAB s.a ?</h1>
        <p>
          Choisir notre laboratoire, c'est opter pour l'expertise et la
          fiabilité d'un établissement accrédité, capable de réaliser des
          analyses précises et rapides.Grâce à notre présence sur tout le
          territoire tunisien, nous proposons un service de proximité adapté aux
          besoins spécifiques de chaque client. Notre engagement envers la
          qualité et la sécurité sanitaire assure des résultats conformes aux
          normes les plus strictes. Avec une vaste gamme de méthodes d'analyse,
          notre laboratoire se positionne comme votre partenaire de confiance
          pour garantir la sécurité et la qualité de vos produits.
        </p>
      </div>

      <div className="apropos-content">
        <h1>MULTILAB s.a votre solution optimale pour vos analyses</h1>
        <div className="apropos-body">
          <img src={aprop} alt="MULTILAB" className="apropos-image" />
          <div className="par-text">
            <p className="para">
              <strong>MULTILAB s.a</strong> est votre partenaire de confiance
              pour tous vos besoins en analyses. Doté d'équipements de haute
              performance et d'une équipe d'experts hautement qualifiés, nous
              garantissons des résultats précis et fiables dans les meilleurs
              délais.
            </p>
            <div className="icons-container">
              <p>
                <strong>MULTILAB s.a</strong> assure :
              </p>
              <ul className="icons">
                <li>
                  <img src={icon1} alt="politique" className="icon" />
                  La garantie de la confidentialité <br /> et l’impartialité.
                </li>
                <li>
                  <img src={icon2} alt="protection" className="icon" />
                  La sécurité des données.
                </li>
                <li>
                  <img src={icon3} alt="satisfaction" className="icon" />
                  La satisfaction des attentes des clients.
                </li>
              </ul>
            </div>
            <button className="apropos-text" onClick={navigateToContact}>
              Contactez nous pour fixer un rendez-vous
            </button>
          </div>
        </div>
      </div>

      <div className="clients-container">
        <h1 className="title">Nos clients</h1>
        <p className="description">
          <strong>MULTILAB s.a</strong> traite environ{" "}
          <strong>60 000 prélèvements par an</strong>, dont près de 44 000
          échantillons sont analysés dans notre laboratoire de microbiologie et
          6 000 échantillons dans notre laboratoire de physicochimie. Nous
          proposons plus de <strong>170 types d'essais</strong>, garantissant
          ainsi une large gamme de services adaptés aux besoins de nos clients.
        </p>

        <CarouselClients />
      </div>

      <section className="research-section">
        <div className="text-content">
          <h1 className="research-title">
            MULTILAB s.a. Recherche et Développement
          </h1>
          <div className="image-content-mobile">
            <img src={lab} alt="Laboratoire MULTILAB" className="lab-image" />
          </div>
          <p className="research-description">
            L'innovation est au cœur de <strong>MULTILAB s.a</strong>, qui
            investit massivement dans son département Recherche & Développement.
            Composé de plusieurs équipes scientifiques spécialisées, ce
            département est l'un des piliers de notre laboratoire. Nos experts
            développent continuellement de nouvelles méthodes d'analyse pour
            répondre aux besoins évolutifs de nos clients et garantir des
            résultats précis et fiables.
            <br />
            Choisir <strong>MULTILAB s.a</strong>, c'est bénéficier de
            l'expertise, de la fiabilité, de la réactivité et de la proximité
            d'un leader de l'analyse agroalimentaire et environnementale en
            Tunisie.
          </p>
        </div>

        <div className="image-content">
          <img src={lab} alt="Laboratoire MULTILAB" className="lab-image" />
        </div>
      </section>

      <div className="Accreditation">
        <h1>Accréditation</h1>
        <p>
          Depuis sa première accréditation obtenue en 2012,{" "}
          <strong>MULTILAB</strong> n'a cessé d'élargir son champ d'expertise,
          démontrant ainsi sa volonté constante d'innover et de répondre aux
          besoins de ses clients.
        </p>
      </div>
    </div>
  );
};

export default Apropos;
