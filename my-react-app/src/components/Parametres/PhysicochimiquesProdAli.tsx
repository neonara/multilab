import BannerImageParam from "./BannerImageParam";
import back from "@/assets/images/61.jpg";
import "../Parametres/Parametres.css";
import {useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";
import api from "../../lib/api";
import {
  ANALYSESPHYSICOCHIMIQUESVIANDESDERIVES,
  ANALYSESPHYSICOCHIMIQUESHUILESPRODUITSGRAS,
  ANALYSESPHYSICOCHIMIQUESMIEL,
  ANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERS,
  ANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERSBRUER,
  ANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERSFROMAGE,
  ANALYSESPHYSICOCHIMIQUESPRODUITSPECHE
}
from "../../types/types";

import { useParams } from "react-router-dom";
const analysis = {
  title: "Analyses physicochimiques des produits alimentaires",
  description:
    "<strong>MULTILAB</strong>, nous réalisons des analyses physicochimiques variées dans le cadre de l’évaluation de la qualité et de la sécurité des aliments telles que : la détermination des composés chimiques, l'analyse des contaminants, et le contrôle des paramètres essentiels à la conformité réglementaire et aux normes nationales et internationales.",
  back: back,
};
// API endpoint mapping
const apiEndpoints: { [key: string]: string } = {
  Analysesphysicochimiquesviandesetderives: '/viandes/',
  Analysesphysicochimiqueshuilesproduitsgras: '/huiles/',
  Analysesphysicochimiquesmiel: '/miel/',
  Analysesphysicochimiquesdesproduitsdelapeche: '/physico-peche',
  Analysesphysicochimiquesproduitslaitiers: '/produits-laitiers',
  Analysesphysicochimiquesproduitslaitiersbruer: '/produits-laitiers-beurre',
  Analysesphysicochimiquesproduitslaitiersfromage: '/produits-laitiers-fromage',
};
const analysesData :{
  [key: string]: {
    title: string;  
  };
} = {
  Analysesphysicochimiquesviandesetderives :{
    title: "Analyses physicochimiques des viandes et derives"
    
  },
  Analysesphysicochimiqueshuilesproduitsgras :{
    title : "Analyses physicochimiques huiles et produits gras"
  
},
Analysesphysicochimiquesdesproduitsdelapeche:{
title: "Analyses physicochimiques des produits de la pêche"
  },
  Analysesphysicochimiquesmiel :{
    title: "Analyses physicochimiques du miel"
  },
  Analysesphysicochimiquesproduitslaitiers :{
    title: "Analyses physicochimiques des produits laitiers"
  },
  Analysesphysicochimiquesproduitslaitiersbruer :{
    title: "Analyses physicochimiques des produits laitiers (brueer)"
  },
  Analysesphysicochimiquesproduitslaitiersfromage :{
    title: "Analyses physicochimiques des produits laitiers (formage)"
  },

};
interface AnalyseItemProps {
  elements: string[];
  isLoading: boolean;
  error: string | null;
}

const AnalyseItem: React.FC<AnalyseItemProps> = ({ elements, isLoading, error }) => {
  const { id } = useParams<{ id: string }>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Transform analysesData into an array format with IDs
  const analyses = Object.entries(analysesData).map(([key, value], index) => ({
    id: index + 1,
    key: key,
    title: value.title,
  }));

  // Automatically expand the analysis item when the id changes
  useEffect(() => {
    if (id) {
      const selectedAnalysis = analyses.find((analyse) => analyse.key === id);
      if (selectedAnalysis) {
        setOpenIndex(selectedAnalysis.id);
      }
    }
  }, [id, analyses]);

  const analyses1 = analyses.slice(0, Math.ceil(analyses.length / 2));
  const analyses2 = analyses.slice(Math.ceil(analyses.length / 2));

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  console.log("id from URL:", id);
console.log("openIndex:", openIndex);

  const renderAnalyseList = (analysesList: typeof analyses) => (
    <div className="analyses-container">
      {analysesList.map((analyse) => {
        const isCurrentAnalysis = analyse.key === id;
        const shouldShowElements = isCurrentAnalysis && openIndex === analyse.id;

        return (
          <div
            key={analyse.id}
            className={`analyse-item ${openIndex === analyse.id ? "analyse-item-on" : ""}`}
          >
            <div className="analyse-title" onClick={() => toggleFAQ(analyse.id)}>
              <div className="title-wrapper">
                <p>{analyse.title}</p>
              </div>
              <div className="expand-btn">
                <FiMinus className="expand-icon" />
                <FiMinus
                  className={`expand-icon-rotate ${openIndex === analyse.id ? "expand-icon-on" : ""}`}
                />
              </div>
            </div>
            <div
              className={`analyse-details ${openIndex === analyse.id ? "analyse-details-on" : ""}`}
            >
              {shouldShowElements ? (
                isLoading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>Error: {error}</p>
                ) : (
                  <ul>
                    {elements.map((element, index) => (
                      <li key={index}>{element}</li>
                    ))}
                  </ul>
                )
              ) : (
                <p>Please select this analysis type to view its elements</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="param-analyse-container">
      {renderAnalyseList(analyses1)}
      {renderAnalyseList(analyses2)}
    </div>
  );
};


export default function PhysicochimiquesProdAli() {
  const { id } = useParams<{ id: string }>();
  const [elements, setElements] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const analysisdata = id ? analysesData[id] : undefined;
    // Fetch parameters from API
 
    useEffect(() => {
      const fetchParameters = async () => {
        if (!id) {
          setError("No analysis ID provided");
          setIsLoading(false);
          return;
        }
        const endpoint = apiEndpoints[id];
        if (!endpoint) {
          setError("Invalid analysis type");
          setIsLoading(false);
          return;
        }
        try {
          setIsLoading(true);
          const response = await api.get(endpoint);
          console.log("Fetched data:", response.data);
  
          let extractedParameters: string[] = [];
          switch (id) {
            case 'Analysesphysicochimiquesviandesetderives':
              extractedParameters = response.data.map((item: ANALYSESPHYSICOCHIMIQUESVIANDESDERIVES) => item.type_analyses_physicochimiques_viandes_et_derives);
              break;
            case 'Analysesphysicochimiqueshuilesproduitsgras':
              extractedParameters = response.data.map((item: ANALYSESPHYSICOCHIMIQUESHUILESPRODUITSGRAS) => item.type_analyses_physicochimiques_huiles_et_produits_gras);
              break;
            case 'Analysesphysicochimiquesmiel':
              extractedParameters = response.data.map((item: ANALYSESPHYSICOCHIMIQUESMIEL) => item.type_analyses_physicochimiques_miel);
              break;
            case 'Analysesphysicochimiquesdesproduitsdelapeche':
              extractedParameters = response.data.map((item: ANALYSESPHYSICOCHIMIQUESPRODUITSPECHE) => item.type_analyses_physicochimiques_produit_peche);
              break;
            case 'Analysesphysicochimiquesproduitslaitiers':
              extractedParameters = response.data.map((item: ANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERS) => item.type_analyses_physicochimiques_produits_laitiers);
              break;
            case 'Analysesphysicochimiquesproduitslaitiersbruer':
              extractedParameters = response.data.map((item: ANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERSBRUER) => item.type_beurre);
              break;
            case 'Analysesphysicochimiquesproduitslaitiersfromage':
              extractedParameters = response.data.map((item: ANALYSESPHYSICOCHIMIQUESPRODUITSLAITIERSFROMAGE) => item.type_fromage);
              break;
            default:
              setError("No valid data found");
              setIsLoading(false);
              return;
          }
  
          setElements(extractedParameters.filter(Boolean));
        } catch (err) {
          console.error("Error fetching parameters:", err);
          setError("Failed to fetch parameters");
        } finally {
          setIsLoading(false);
        }
      };
      fetchParameters();
    }, [id]);
  console.log("id from useParams:", id);
console.log("Available analysesData keys:", Object.keys(analysesData));


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
        <AnalyseItem 
  elements={elements} 
  isLoading={isLoading}
  error={error}
/>

      </div>
    </div>
  );
}
