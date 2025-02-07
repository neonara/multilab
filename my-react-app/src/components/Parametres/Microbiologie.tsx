import "../Parametres/Parametres.css";
import api from "../../lib/api";
import { useEffect, useState } from "react";
import { AnalyseMicrobiologieProduitsEaux } from "../../types/types";
// const MICROBIOLOGIE_PARAMETERS = [
//   [
//     "Micro-organismes revivifiables à 36 °C (FT)",
//     "Micro-organismes revivifiables à 22 °C (FT)",
//     "Dénombrement des Coliformes totaux à 37°C (CT)",
//     "Dénombrement des Coliformes totaux à 36°C (CT)",
//     "Dénombrement des Coliformes thermotolérants à 44°C (CF)",
//     "Dénombrement des Escherichia coli à 44 °C (Ec)",
//     "Dénombrement des Escherichia coli à 36 °C (Ec)",
//     "Dénombrement des Entérocoques Intestinaux à 36°C(Entéroc)",
//   ],
//   [
//     "Dénombrement des Sprores d’Anaerobies sulfito réducteurs à 37°C /(SASR)",
//     "Dénombrement des Streptocoques fécaux à 37 °C (SF)",
//     "Dénombrement des Staphylococcus aureus à 37°C(Staph)",
//     "Recherche des Pseudomonas aeruginosa (Pseudo)",
//     "Dénombrement des Levures et Moisissures à 25 °C (LM)",
//     "Recherche et Dénombrement des Vibrio parahaemolyticus",
//     "Recherche de salmonella spp (Salm)",
//     "Recherche et dénombrement de Légionella pneumophila à 36°C",
//   ],
// ];
const chunkArray = (
  array: AnalyseMicrobiologieProduitsEaux[],
  size: number
) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};
const Card = ({ items }: { items: AnalyseMicrobiologieProduitsEaux[] }) => (
  <div className="card">
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="text-sm text-gray-700 hover:bg-gray-50 p-2 rounded transition-colors"
        >
          {item.type_analyse_microbiologie_produits_eaux}
        </li>
      ))}
    </ul>
  </div>
);

const Microbiologie = () => {
  const [analyses, setAnalyses] = useState<AnalyseMicrobiologieProduitsEaux[]>(
    []
  );
  const getAnalyses = async () => {
    try {
      const response = await api.get("/micro-eaux");
      setAnalyses(response.data);
    } catch (error) {
      console.error("Error Fetching  data", error);
      console.log("Failed to fetch ");
    }
  };

  useEffect(() => {
    getAnalyses();
  }, []);
  const chunkedAnalyses = chunkArray(analyses, 8);
  return (
    <div className="container">
      <h2>Paramètre d’analyses Microbiologie des Eaux</h2>
      <div className="grid-container">
        {chunkedAnalyses.map((chunk, index) => (
          <Card key={index} items={chunk} />
        ))}
      </div>
    </div>
  );
};

export default Microbiologie;