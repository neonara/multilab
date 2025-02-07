import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import BannerImageParam from "./BannerImageParam";
import "../Parametres/Parametres.css";
import api from "../../lib/api";

// Import background images
import api from "../../lib/api";

// Import background images
import back1 from "@/assets/images/57.png";
import back2 from "@/assets/images/58.jpg";
import back3 from "@/assets/images/59.jpg";
import back4 from "@/assets/images/60.jpg";
import back5 from "@/assets/images/62.jpg";

// Import types
import {
  Analysesmicrobiologiquesproduitsalimentaires,
  AnalyseMicrobiologieProduitsEaux,
  TypeAnalysesAlimentationAnimale,
  TypeAnalysesPhysicochimiquesProduitsEaux,
  TypeAnalysesProduitCosmetique
} from "../../types/types";

// API endpoint mapping
const apiEndpoints: { [key: string]: string } = {
  microbiologiques: '/micro-alimentaires',
  microbiologiquesEaux: '/micro-eaux',
  physicochimiquesEaux: '/physico-eaux',
  alimentsAnimaux: '/aliments-animaux',
  cosmetiquesHygiene: '/cosmetiques-hygiene'
};

// Static analysis data (keep for initial rendering)
const analysesData: {
  [key: string]: {
    title: string;
    description: string;
    back: string;
  };
} = {
  microbiologiques: {
    title: "Analyses microbiologiques des Produits Alimentaires",
    description: "Notre laboratoire offre une vaste gamme d'analyses microbiologiques...",
    back: back1,
  },
  microbiologiquesEaux: {
    title: "Analyse Microbiologiques des Eaux",
    description: "MULTILAB réalise pour le compte de ses clients...",
    description: "MULTILAB réalise pour le compte de ses clients...",
    back: back2,
  },
  physicochimiquesEaux: {
    title: "Analyses Physicochimiques des Eaux",
    description: "MULTILAB réalise des analyses permettant...",
    description: "MULTILAB réalise des analyses permettant...",
    back: back3,
  },
  alimentsAnimaux: {
    title: "Analyses des aliments des animaux",
    description: "MULTILAB propose une gamme complète...",
    description: "MULTILAB propose une gamme complète...",
    back: back4,
  },
  cosmetiquesHygiene: {
    title: "Microbiologie des produits cosmétiques et d'hygiène",
    description: "Le laboratoire accompagne l'industrie...",
    title: "Microbiologie des produits cosmétiques et d'hygiène",
    description: "Le laboratoire accompagne l'industrie...",
    back: back5,
  }
};

const chunkArray = (array: string[], chunkSize: number) => {
  const results = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }
  return results;
};

// Card component for displaying parameters
const ParameterCard = ({ items }: { items: string[] }) => (
  <div className="param-card">
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const ParametreAnalyses = () => {
  const { id } = useParams<{ id: string }>();
  
  // State for parameters
  const [parameters, setParameters] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get static analysis information
  const analysis = id ? analysesData[id] : undefined;

  // Fetch parameters from API
  const fetchParameters = async () => {
    if (!id) {
      setError("No analysis ID provided");
      setIsLoading(false);
      return;
    }

    // Get the correct API endpoint
    const endpoint = apiEndpoints[id];
    if (!endpoint) {
      setError("Invalid analysis type");
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const response = await api.get(endpoint);
      
      // Dynamic parameter extraction based on analysis type
      let extractedParameters: string[] = [];
      switch(id) {
        case 'microbiologiques':
          extractedParameters = (response.data as Analysesmicrobiologiquesproduitsalimentaires[])
            .map(item => item.type_analyses_microbiologiques_produits_alimentaires)
            .filter(Boolean);
          break;
        case 'microbiologiquesEaux':
          extractedParameters = (response.data as AnalyseMicrobiologieProduitsEaux[])
            .map(item => item.type_analyse_microbiologie_produits_eaux)
            .filter(Boolean);
          break;
        case 'physicochimiquesEaux':
          extractedParameters = (response.data as TypeAnalysesPhysicochimiquesProduitsEaux[])
            .map(item => item.type_analyses_physicochimiques_produits_eaux)
            .filter(Boolean);
          break;
        case 'alimentsAnimaux':
          extractedParameters = (response.data as TypeAnalysesAlimentationAnimale[])
            .map(item => item.type_alimentation_animale)
            .filter(Boolean);
          break;
        case 'cosmetiquesHygiene':
          extractedParameters = (response.data as TypeAnalysesProduitCosmetique[])
            .map(item => item.type_analyses_microbiologiques_produits_cosmetique)
            .filter(Boolean);
          break;
        default:
          extractedParameters = [];
      }

      setParameters(extractedParameters);
      setIsLoading(false);
    } catch (err) {
      console.error('Error fetching parameters:', err);
      setError('Failed to fetch parameters');
      setIsLoading(false);
    }
  };

  // Fetch parameters when component mounts or id changes
  useEffect(() => {
    fetchParameters();
  }, [id]);

  // Chunk parameters into groups of 8
  const chunkedParameters = chunkArray(parameters, 8);

  // Helper function to modify title
  function removeAnalysePrefix(title: string): string {
    return title.startsWith("A") ? title.replace("A", "d'a") : title;
  }

  // Render loading state
  if (isLoading) {
    return <div>Chargement...</div>;
  }

  // Render error state
  if (error) {
    return <div>Erreur : {error}</div>;
  }

  // Render not found state
  // Render loading state
  if (isLoading) {
    return <div>Chargement...</div>;
  }

  // Render error state
  if (error) {
    return <div>Erreur : {error}</div>;
  }

  // Render not found state
  if (!analysis) {
    return <div>Analyse non trouvée</div>;
  }

  return (
    <div>
      <BannerImageParam back={analysis.back} title={analysis.title} />
      <div className="param-container">
        <div className="param-text">
          <h2>{analysis.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: analysis.description }}></p>
        </div>
        <h1>Paramètre {removeAnalysePrefix(analysis.title)}</h1>
        <div className="grid-container">
          {chunkedParameters.map((chunk, index) => (
            <ParameterCard key={index} items={chunk} />
          {chunkedParameters.map((chunk, index) => (
            <ParameterCard key={index} items={chunk} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParametreAnalyses;