import BannerImageParam from "./BannerImageParam";
import back from "@/assets/images/61.jpg";
import "../Parametres/Parametres.css";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";

const analysis = {
  title: "Analyses microbiologiques des Produits Alimentaires",
  description:
    "<strong>MULTILAB</strong>, nous réalisons des analyses physicochimiques variées dans le cadre de l’évaluation de la qualité et de la sécurité des aliments telles que : la détermination des composés chimiques, l'analyse des contaminants, et le contrôle des paramètres essentiels à la conformité réglementaire et aux normes nationales et internationales.",
  back: back,
};

const AnalyseItem = () => {
  const analyses = [
    {
      id: 1,
      title: "Analyses physicochimiques",
      elements: [
        "pH",
        "Chlorures",
        "Chlorures",
        "Azote total",
        "Matière grasse totale",
        "Amidon",
        "Nitrites",
        "Phosphore Total",
        "Matières sèches",
        "Activité de l’eau Aw",
        "Acides gras Saturés, Mono Insaturés, Poly Insaturés",
      ],
    },
    {
      id: 2,
      title: "Analyses microbiologiques",
      elements: [
        "Salmonella",
        "Listeria monocytogenes",
        "Escherichia coli",
        "Staphylococcus aureus",
        "Bacillus cereus",
        "Campylobacter",
        "Clostridium perfringens",
        "Enterobacteriaceae",
        "Levures et moisissures",
        "Coliformes",
      ],
    },
    {
      id: 3,
      title: "Analyses des contaminants",
      elements: [
        "Métaux lourds",
        "Pesticides",
        "Mycotoxines",
        "Dioxines",
        "PCB",
        "HAP",
        "Résidus de médicaments vétérinaires",
        "Nitrosamines",
        "Histamine",
        "Aflatoxines",
      ],
    },
    {
      id: 4,
      title: "Analyses nutritionnelles",
      elements: [
        "Protéines",
        "Glucides",
        "Lipides",
        "Fibres alimentaires",
        "Vitamines",
        "Minéraux",
        "Calories",
        "Sucres",
        "Sodium",
        "Cholestérol",
      ],
    },
    {
      id: 5,
      title: "Analyses organoleptiques",
      elements: [
        "Goût",
        "Odeur",
        "Texture",
        "Apparence",
        "Couleur",
        "Saveur",
        "Croustillant",
        "Moelleux",
        "Jutosité",
        "Tendreté",
      ],
    },
    {
      id: 6,
      title: "Analyses des additifs alimentaires",
      elements: [
        "Conservateurs",
        "Colorants",
        "Émulsifiants",
        "Épaississants",
        "Stabilisants",
        "Antioxydants",
        "Acidifiants",
        "Exhausteurs de goût",
        "Agents de texture",
        "Agents de charge",
      ],
    },
  ];
  const analyses1 = analyses.slice(0, Math.ceil(analyses.length / 2));
  const analyses2 = analyses.slice(Math.ceil(analyses.length / 2));

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="param-analyse-container">
      <div className="analyses-container">
        {analyses1.map((analyse) => (
          <div
            key={analyse.id}
            className={`analyse-item ${
              openIndex === analyse.id ? "analyse-item-on" : ""
            }`}
          >
            <div
              className="analyse-title"
              onClick={() => toggleFAQ(analyse.id)}
            >
              <div className="title-wrapper">
                <p>{analyse.title}</p>
              </div>
              <div className={`expand-btn `}>
                <FiMinus className={`expand-icon `} />
                <FiMinus
                  className={`expand-icon-rotate ${
                    openIndex === analyse.id ? "expand-icon-on" : ""
                  }`}
                />
              </div>
            </div>
            <div
              className={`analyse-details ${
                openIndex === analyse.id ? "analyse-details-on" : ""
              }`}
            >
              <ul>
                {analyse.elements.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="analyses-container">
        {analyses2.map((analyse) => (
          <div
            key={analyse.id}
            className={`analyse-item ${
              openIndex === analyse.id ? "analyse-item-on" : ""
            }`}
          >
            <div
              className="analyse-title"
              onClick={() => toggleFAQ(analyse.id)}
            >
              <div className="title-wrapper">
                <p>{analyse.title}</p>
              </div>
              <div className={`expand-btn `}>
                <FiMinus className={`expand-icon `} />
                <FiMinus
                  className={`expand-icon-rotate ${
                    openIndex === analyse.id ? "expand-icon-on" : ""
                  }`}
                />
              </div>
            </div>
            <div
              className={`analyse-details ${
                openIndex === analyse.id ? "analyse-details-on" : ""
              }`}
            >
              <ul>
                {analyse.elements.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function PhysicochimiquesProdAli() {
  function removeAnalysePrefix(title: string): string {
    return title.startsWith("A") ? title.replace("A", "d'a") : title;
  }

  return (
    <div>
      <BannerImageParam
        back={analysis.back}
        title={analysis.title}
        backPosition={"bottom"}
      />

      <div className="param-container">
        <div className="param-text">
          <h2>{analysis.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: analysis.description }}></p>
        </div>
        <h1>Paramètre {removeAnalysePrefix(analysis.title)}</h1>
        <AnalyseItem />
      </div>
    </div>
  );
}
