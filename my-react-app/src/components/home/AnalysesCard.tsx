import card from "../home/assets/first.png";
import tt from "../home/assets/tt.png";
import phy from "../home/assets/phy.png";
import img4 from "@/assets/images/64.png";
import img6 from "@/assets/analyse6.jpg";
import img5 from "../home/assets/img5.png";
import { GoChevronRight } from "react-icons/go";
import "./home.css";

function AnalysesCard() {
  const analyses = [
    {
      title: "Microbiologie des Produits <br/>Alimentaires",
      image: card, // Replace with your image path
      link: "/parametre/microbiologiques",
    },
    {
      title: "Microbiologie <br> des Eaux",
      image: tt, // Replace with your image path
      link: "/parametre/microbiologiquesEaux",
    },
    {
      title: "Physicochimies des Produits <br/>Alimentaires",
      image: phy, // Replace with your image path
      link: "/parametre/physicochimiesProduitsAlimentaires",
    },
    {
      title: "Physicochimie des aliments <br/>pour animaux",
      image: img4, // Replace with your image path
      link: "/parametre/alimentsAnimaux",
    },
    {
      title: "Physicochimie <br/> des Eaux",
      image: img5, // Replace with your image path
      link: "/parametre/physicochimiquesEaux",
    },

    {
      title: "Microbiologie des produits <br/>cosmétiques et d’hygiène",
      image: img6, // Replace with your image path
      link: "/parametre/cosmetiquesHygiene",
    },
  ];

  return (
    <div className="analysis-grid">
      {analyses.map((analysis, index) => (
        <div key={index} className="analysis-card">
          <div className="image-wrapper">
            <img
              src={analysis.image}
              alt={analysis.title}
              className="analysis-image"
            />
          </div>

          <div className="analysis-content">
            <h3
              className="analysis-title"
              dangerouslySetInnerHTML={{ __html: analysis.title }}
            ></h3>
            <a href={analysis.link} className="analysis-link">
              En savoir plus <GoChevronRight className="icon" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnalysesCard;
