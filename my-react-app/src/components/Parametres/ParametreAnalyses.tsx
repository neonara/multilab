import "../Parametres/Parametres.css";
import api from "../../lib/api";
import { useEffect, useState } from "react";
import {Analysesmicrobiologiquesproduitsalimentaires} from "../../types/types";
const MICROBIOLOGIE_PARAMETERS = [
  [
    "Dénombrement des micro-organismes à 30 °C",
    "Dénombrement des micro-organismes à 30 °C",
    "Dénombrement des coliformes à 30°C",
    "Dénombrement des coliformes thermo tolérants à 44°C",
    "Dénombrement des Escherichia coli ß glucuronidase+ à 44 °C",
    "Dénombrement des Escherichia coli ß glucuronidase+ à 44 °C",
    "Dénombrement des Staphylocoques coagulase+ à 37°C",
    "Dénombrement des Staphylocoques coagulase+ à 37°C",
  ],
  [
    "Dénombrement des Clostridium perfringens à 37°C",
    "Dénombrement des Levures et Moisissures à 25 °C",
    "Dénombrement des Anaerobies Sulfito Réducteurs à 37°C",
    "Recherche des Salmonella spp",
    "Recherche des Salmonella spp",
    "Recherche des Salmonella typhi ou paratyphi",
    "Dénombrement des Enterobacteriaceae à 37°C ou à 30°C",
    "Recherche Listeria spp",
  ],
  [
    "Recherche Listeria monocytogenes",
    "Dénombrement de Listeria monocytogenes à 37°C",
    "Dénombrement des Bactéries lactiques à 30°",
    "Dénombrements des microorganismes psychrotrophes à 6,5°C",
    "Dénombrement de Bacillus cereus à 30°C",
    "Dénombrement des Pseudomonas spp à 22°C",
  ],
];
// Helper function to chunk array into groups
const chunkArray = (array: Analysesmicrobiologiquesproduitsalimentaires[], size: number) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};
const Card = ({ items }: { items: Analysesmicrobiologiquesproduitsalimentaires[] }) => (
  <div className="card">
   <ul className="space-y-2">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="text-sm text-gray-700 hover:bg-gray-50 p-2 rounded transition-colors"
          >
            {item.type_analyses_microbiologiques_produits_alimentaires}
          </li>
        ))}
      </ul>
  </div>
);

const Microbiologie = () => {
  const [analyses, setAnalyses] = useState<Analysesmicrobiologiquesproduitsalimentaires[]>([]);
  const getAnalyses = async() => {
   
    try {
      const response = await api.get('/micro-alimentaires');
     setAnalyses(response.data);
    } catch (error) {
      console.error('Error Fetching Perstation data', error);
      console.log('Failed to fetch perstations');
    }
  };

  useEffect(() => {
    getAnalyses();
  }, []);
  const chunkedAnalyses = chunkArray(analyses, 8);
  return (
    <div className="container">
      <h2>Paramètre d’analyses Physicochimiques des Produits Alimentaires</h2>
      <div className="grid-container">
        {chunkedAnalyses.map((chunk, index) => (
          <Card key={index} items={chunk} />
        ))}
      </div>
    </div>
  );
};

export default Microbiologie;
