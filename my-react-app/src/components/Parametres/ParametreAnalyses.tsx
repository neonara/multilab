import  { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import BannerImageParam from "./BannerImageParam";
import "../Parametres/Parametres.css";
import api from "../../lib/api";

// Import background images
import back1 from "@/assets/images/57.png";
import back2 from "@/assets/images/58.jpg";
import back3 from "@/assets/images/59.jpg";
import back4 from "@/assets/images/60.jpg";
import back5 from "@/assets/images/61.jpg";

// Import types
import {
  Analysesmicrobiologiquesproduitsalimentaires,
  AnalyseMicrobiologieProduitsEaux,
  TypeAnalysesAlimentationAnimale,
  TypeAnalysesPhysicochimiquesProduitsEaux,
  TypeAnalysesProduitCosmetique,
} from "../../types/types";

// API endpoint mapping
const apiEndpoints: { [key: string]: string } = {
  microbiologiques: '/micro-alimentaires',
  microbiologiquesEaux: '/micro-eaux/',
  physicochimiquesEaux: '/physico-eaux',
  alimentsAnimaux: '/aliments-animaux/',
  cosmetiquesHygiene: '/cosmetiques-hygiene/'
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
    description:
      "Notre laboratoire offre une vaste gamme d’analyses microbiologiques pour garantir la sécurité et la qualité des produits alimentaires. Notre expertise vise à accompagner les industriels de l'agroalimentaire, les distributeurs et les acteurs de la chaîne alimentaire dans leurs démarches de conformité réglementaire et de maîtrise des risques sanitaires.",
    back: back1,
  },
  microbiologiquesEaux: {
    title: "Analyse Microbiologiques des Eaux",
    description: "MULTILAB réalise pour le compte de ses clients une panoplie d’analyses microbiologiques dans les eaux qui permettent de détecter et de quantifier les micro-organismes pathogènes ou indicateurs de contamination. Elles sont essentielles pour évaluer la qualité de l'eau destinée à la consommation humaine, aux usages industriels ou encore à des fins environnementales.",
    back: back2,
  },
  physicochimiquesEaux: {
    title: "Analyses Physicochimiques des Eaux",
    description: "MULTILAB réalise des analyses permettant de déterminer la qualité de l’eau en évaluant divers paramètres essentiels. Ces prestations sont adaptées aux exigences des industries, des collectivités et des particuliers soucieux de la qualité de l’eau utilisée ou rejetée.",
    back: back3,
  },
  alimentsAnimaux: {
    title: "Analyses des aliments des animaux",
    description: "MULTILAB propose une gamme complète d’analyses physicochimiques pour les aliments pour animaux, répondant aux besoins des professionnels du secteur. Ces analyses permettent de déterminer la qualité nutritionnelle, la composition chimique et la conformité des matières premières et des produits finis aux normes en vigueur.",
    back: back4,
  },
  cosmetiquesHygiene: {
    title: "Microbiologie des produits cosmétiques et d'hygiène",
    description: "Le laboratoire accompagne l’industrie des cosmétiques ainsi que celle des produits d’hygiène, de nettoyage et de désinfection, en assurant la qualité et la sécurité des produits formulés et de leurs ingrédients par le dénombrement et la détection de différents microorganismes. Il évalue également leur stabilité et leur efficacité à travers une série de tests rigoureux, en conformité avec les normes en vigueur.",
    back: back5,
  },
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
      console.log(error);
      
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
      switch (id) {
        case "microbiologiques":
          extractedParameters = (
            response.data as Analysesmicrobiologiquesproduitsalimentaires[]
          )
            .map(
              (item) =>
                item.type_analyses_microbiologiques_produits_alimentaires
            )
            .filter(Boolean);
          break;
        case "microbiologiquesEaux":
          extractedParameters = (
            response.data as AnalyseMicrobiologieProduitsEaux[]
          )
            .map((item) => item.type_analyse_microbiologie_produits_eaux)
            .filter(Boolean);
          break;
        case "physicochimiquesEaux":
          extractedParameters = (
            response.data as TypeAnalysesPhysicochimiquesProduitsEaux[]
          )
            .map((item) => item.type_analyses_physicochimiques_produits_eaux)
            .filter(Boolean);
          break;
        case "alimentsAnimaux":
          extractedParameters = (
            response.data as TypeAnalysesAlimentationAnimale[]
          )
            .map((item) => item.type_alimentation_animale)
            .filter(Boolean);
          break;
        case "cosmetiquesHygiene":
          extractedParameters = (
            response.data as TypeAnalysesProduitCosmetique[]
          )
            .map(
              (item) => item.type_analyses_microbiologiques_produits_cosmetique
            )
            .filter(Boolean);
          break;
        default:
          extractedParameters = [];
      }

      setParameters(extractedParameters);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching parameters:", err);
      setError("Failed to fetch parameters");
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParametreAnalyses;
