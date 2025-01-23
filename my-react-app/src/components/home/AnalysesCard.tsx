import card from "../home/assets/first.png";
import tt from "../home/assets/tt.png";
import phy from "../home/assets/phy.png";
import img4 from "../home/assets/Rectangle 3898.png";
import img6 from "@/assets/analyse6.jpg";
import img5 from "../home/assets/img5.png";
import { GoChevronRight } from "react-icons/go";
import "./home.css";


function AnalysesCard() {
  const analyses = [
    {
      title: "Microbiologie des Produits Alimentaires",
      image: card, // Replace with your image path
      link: "/param-danalyse",
    },
    {
      title: "Microbiologie des Eaux",
      image: tt, // Replace with your image path
      link: "/Physicochimiques",
    },
    {
      title: "Physicochimies des Produits Alimentaires",
      image: phy, // Replace with your image path
      link: "/parametre",
    },
    {
      title: "Physicochimie des aliments pour animaux",
      image: img4, // Replace with your image path
      link: "/physicochimie-aliments-animaux",
    },
    {
      title: "Physicochimie des Eaux",
      image: img5, // Replace with your image path
      link: "/physicochimie-eaux",
    },
    {
      title: "Microbiologie des produits cosmétiques et d’hygiène",
      image: img6, // Replace with your image path
      link: "/microbiologie-cosmetiques-hygiene",
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
            <h3 className="analysis-title">{analysis.title}</h3>
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
