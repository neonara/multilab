import "../Parametres/Parametres.css";

const microbiologieParameters = [
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

const Card = ({ items }: { items: string[] }) => (
  <div className="card">
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Microbiologie = () => {
  return (
    <div className="container">
      <h2>Paramètre d’analyses Physicochimiques des Produits d’Eaux</h2>
      <div className="grid-container">
        {microbiologieParameters.map((items, index) => (
          <Card key={index} items={items} />
        ))}
      </div>
    </div>
  );
};

export default Microbiologie;
