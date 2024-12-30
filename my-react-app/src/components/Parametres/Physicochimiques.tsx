import "../Parametres/Parametres.css";

const parameters = [
  [
    "pH",
    "Conductivité",
    "Dureté TH",
    "Sulfates",
    "Magnésium",
    "Chlorure",
    "Calcium",
    "Phosphore",
  ],
  [
    "Titre Alcalimétrique TA",
    "Titre Alcalimétrique Complet TAC",
    "Résidu Sec",
    "Nitrates",
    "Nitrites",
    "MES",
    "Fluorures",
    "Turbidité",
  ],
  [
    "Chlore Libre et du chlore Total",
    "Degré chlorométrique (Eau de javel)",
    "Matières décantables",
    "Sels dissouts TDS",
    "Azote ammoniacal",
    "Couleur, odeur, Saveur",
    "Indice de permanganate",
    "Matières organiques (Résidus calcinés)",
  ],
  ["Cuivre", "Fer", "Plomb", "Mercure", "Cadmium", "Cobalt", "Manganèse"],
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

const New = () => {
  return (
    <div className="container">
      <h2>Paramètre d’analyses Physicochimiques des Produits d’Eaux</h2>
      <div className="grid-container">
        {parameters.map((items, index) => (
          <Card key={index} items={items} />
        ))}
      </div>
    </div>
  );
};

export default New;
