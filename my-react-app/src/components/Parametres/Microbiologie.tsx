import "../Parametres/Parametres.css";

const Microbiologie = () => {
  return (
    <div className="container">
      <h2>Paramètre d’analyses Physicochimiques des Produits d’Eaux</h2>
      
      <div className="grid-container">
        <div className="card">
          <ul>
          <li>Micro-organismes  revivifiables   à 36 °C (FT)</li>
          <li>Micro-organismes revivifiables à 22 °C (FT)</li>
          <li>Dénombrement des Coliformes totaux à 37°C  (CT</li>)
          <li>Dénombrement des Coliformes totaux à 36°C  (CT</li>)
          <li>Dénombrement des Coliformes thermotolérants à 44°C  (CF)</li>
          <li>Dénombrement des Escherichia coli à 44 °C (Ec)</li>
          <li>Dénombrement des Escherichia coli à 36 °C (Ec)</li>
          <li>Dénombrement des Entérocoques Intestinaux à 36°C(Entéroc)</li>
          </ul>
        </div>

        <div className="card">
          <ul>
          <li>Dénombrement des Sprores d’Anaerobies sulfito réducteurs à 37°C /(SASR)</li>
          <li>Dénombrement des Streptocoques fécaux à 37 °C (SF)</li>
          <li>Dénombrement des Staphylococcus aureus à 37°C(Staph)</li>
          <li>Recherche des Pseudomonas aeruginosa (Pseudo)</li>
          <li>Dénombrement des Levures et Moisissures à 25 °C (LM)</li>
          <li>Recherche et Dénombrement des Vibrio parahaemolyticus</li>
          <li>Recherche de salmonella spp (Salm)</li>
          <li>Recherche et dénombrement de Légionella pneumophila à 36°C</li>
          </ul>
        </div>

       
      </div>
    </div>
  );
};

export default Microbiologie;
