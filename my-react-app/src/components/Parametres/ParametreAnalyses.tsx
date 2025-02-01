import { useParams } from "react-router-dom";
import BannerImageParam from "./BannerImageParam";
import "../Parametres/Parametres.css";
import back1 from "@/assets/images/57.png";
import back2 from "@/assets/images/58.jpg";
import back3 from "@/assets/images/59.jpg";
import back4 from "@/assets/images/60.jpg";
import back5 from "@/assets/images/61.jpg";

const analysesData: {
  [key: string]: {
    title: string;
    description: string;
    back: string;
    parameters: string[][];
  };
} = {
  microbiologiques: {
    title: "Analyses microbiologiques des Produits Alimentaires",
    description:
      "Notre laboratoire offre une vaste gamme d’analyses microbiologiques pour garantir la sécurité et la qualité des produits alimentaires. Notre expertise vise à accompagner les industriels de l'agroalimentaire, les distributeurs et les acteurs de la chaîne alimentaire dans leurs démarches de conformité réglementaire et de maîtrise des risques sanitaires.",
    back: back1,
    parameters: [
      [
        "Dénombrement des micro-organismes à 30 °C",
        "Dénombrement des coliformes à 30°C",
        "Dénombrement des coliformes thermo tolérants à 44°C",
        "Dénombrement des Escherichia coli ß glucuronidase+ à 44 °C",
        "Dénombrement des Staphylocoques coagulase+ à 37°C",
      ],
      [
        "Dénombrement des Clostridium perfringens à 37°C",
        "Dénombrement des Levures et Moisissures à 25 °C",
        "Dénombrement des Anaerobies Sulfito Réducteurs à 37°C",
        "Recherche des Salmonella spp",
        "Recherche des Salmonella typhi ou paratyphi",
      ],
      [
        "Recherche Listeria spp",
        "Recherche Listeria monocytogenes",
        "Dénombrement de Listeria monocytogenes à 37°C",
        "Dénombrement des Bactéries lactiques à 30°",
        "Dénombrements des microorganismes psychrotrophes à 6,5°C",
      ],
    ],
  },
  microbiologiquesEaux: {
    title: "Analyse Microbiologiques des Eaux",
    description:
      "<strong>MULTILAB</strong> réalise pour le compte de ses clients une panoplie d’analyses microbiologiques dans les eaux qui permettent de détecter et de quantifier les micro-organismes pathogènes ou indicateurs de contamination. Elles sont essentielles pour évaluer la qualité de l'eau destinée à la consommation humaine, aux usages industriels ou encore à des fins environnementales.",
    back: back2,
    parameters: [
      [
        "Dénombrement des bactéries hétérotrophes à 22°C",
        "Dénombrement des bactéries hétérotrophes à 37°C",
        "Recherche des coliformes totaux",
        "Recherche des coliformes fécaux",
        "Recherche des streptocoques fécaux",
      ],
      [
        "Recherche des Pseudomonas aeruginosa",
        "Recherche des Legionella",
        "Recherche des Salmonella spp",
        "Recherche des Vibrio cholerae",
        "Recherche des Shigella",
      ],
    ],
  },
  physicochimiquesEaux: {
    title: "Analyses Physicochimiques des Eaux",
    description:
      "<strong>MULTILAB</strong> réalise des analyses permettant de déterminer la qualité de l’eau en évaluant divers paramètres essentiels. Ces prestations sont adaptées aux exigences des industries, des collectivités et des particuliers soucieux de la qualité de l’eau utilisée ou rejetée.",
    back: back3,
    parameters: [
      ["pH", "Conductivité", "Turbidité", "Dureté", "Chlorures"],
      ["Sulfates", "Nitrates", "Nitrites", "Ammonium", "Phosphates"],
    ],
  },
  alimentsAnimaux: {
    title: "Analyses des aliments des animaux",
    description:
      "<strong>MULTILAB</strong> propose une gamme complète d’analyses physicochimiques pour les aliments pour animaux, répondant aux besoins des professionnels du secteur. Ces analyses permettent de déterminer la qualité nutritionnelle, la composition chimique et la conformité des matières premières et des produits finis aux normes en vigueur.",
    back: back4,
    parameters: [
      [
        "Protéines brutes",
        "Matières grasses brutes",
        "Cellulose brute",
        "Cendres brutes",
        "Humidité",
      ],
      ["Énergie métabolisable", "Calcium", "Phosphore", "Sodium", "Potassium"],
    ],
  },
  cosmetiquesHygiene: {
    title: "Microbiologie des produits cosmétiques et d’hygiène",
    description:
      "Le laboratoire accompagne l’industrie des cosmétiques ainsi que celle des produits d’hygiène, de nettoyage et de désinfection, en assurant la qualité et la sécurité des produits formulés et de leurs ingrédients par le dénombrement et la détection de différents microorganismes. Il évalue également leur stabilité et leur efficacité à travers une série de tests rigoureux, en conformité avec les normes en vigueur.",
    back: back5,
    parameters: [
      [
        "Dénombrement des bactéries aérobies mésophiles",
        "Dénombrement des levures et moisissures",
        "Recherche des Staphylococcus aureus",
        "Recherche des Pseudomonas aeruginosa",
        "Recherche des Candida albicans",
      ],
    ],
  },
};

const Card = ({ items }: { items: string[] }) => (
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
  const analysis = id ? analysesData[id] : undefined;

  function removeAnalysePrefix(title: string): string {
    return title.startsWith("A") ? title.replace("A", "d'a") : title;
  }

  if (!analysis) {
    return <div>Analysis not found</div>;
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
          {analysis.parameters.map((items, index) => (
            <Card key={index} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParametreAnalyses;
