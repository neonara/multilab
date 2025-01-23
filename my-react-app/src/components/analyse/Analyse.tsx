import React from "react";

import group from "./assets/Group 1000002140.jpg";
import "./analyse.css";
const Analyse: React.FC = () => {
  return (
    <div className="test">
      <section className="logistics-section">
        <div className="logistics-content">
          <h2>
            Nos Logistique de Pointe : Des Solutions Intégrées par MULTILAB s.a
          </h2>
          <p>
            <strong>MULTILAB s.a</strong> met en place une solution intégrée
            pour simplifier le processus d’acheminement des échantillons pour
            nos clients.
          </p>
          <p>
            Une équipe de techniciens-préleveurs dédiés, compétents et
            qualifiés, opère à travers tout le territoire pour collecter,
            échantillonner ou prélever les échantillons directement sur site,
            chaque jour.
          </p>
          <p>
            Équipés de véhicules respectant les normes en vigueur, nos
            techniciens-préleveurs contribuent à une réactivité optimale, une
            traçabilité renforcée et une parfaite maîtrise de la chaîne du
            froid.
          </p>
        </div>
        <div className="logistics-image">
          <img src={group} alt="Logistics illustration" />
        </div>
      </section>
    </div>
  );
};

export default Analyse;
