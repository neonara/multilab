import "../Parametres/Parametres.css";

const New = () => {
  return (
    <div className="container">
      <h2>Paramètre d’analyses Physicochimiques des Produits d’Eaux</h2>
      
      <div className="grid-container">
        <div className="card">
          <ul>
            <li>pH</li>
            <li>Conductivité</li>
            <li>Dureté TH</li>
            <li>Sulfates</li>
            <li>Magnésium</li>
            <li>Chlorure</li>
            <li>Calcium</li>
            <li>Phosphore</li>
          </ul>
          <ul>
             <li>Titre Alcalimétrique TA</li>
            <li>Titre Alcalimétrique Complet TAC</li>
            <li>Résidu Sec</li>
            <li>Nitrates</li>
            <li>Nitrites</li>
            <li>MES</li>
            <li>Fluorures</li>
            <li>Turbidité</li>
          </ul>
        </div>

        <div className="card">
          <ul>
            <li>Titre Alcalimétrique TA</li>
            <li>Titre Alcalimétrique Complet TAC</li>
            <li>Résidu Sec</li>
            <li>Nitrates</li>
            <li>Nitrites</li>
            <li>MES</li>
            <li>Fluorures</li>
            <li>Turbidité</li>
          </ul>
        </div>

        <div className="card">
          <ul>
            <li>Chlore Libre et du chlore Total</li>
            <li>Degré chlorométrique (Eau de javel)</li>
            <li>Matières décantables</li>
            <li>Sels dissouts TDS</li>
            <li>Azote ammoniacal</li>
            <li>Couleur, odeur, Saveur</li>
            <li>Indice de permanganate</li>
            <li>Matières organiques (Résidus calcinés)</li>
          </ul>
        </div>

        <div className="card">
          <ul>
            <li>Cuivre</li>
            <li>Fer</li>
            <li>Plomb</li>
            <li>Mercure</li>
            <li>Cadmium</li>
            <li>Cobalt</li>
            <li>Manganèse</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default New;
