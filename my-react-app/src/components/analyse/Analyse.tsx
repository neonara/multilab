import React from 'react';

import group from "./assets/Group 1000002140.jpg"
import './analyse.css';
const Analyse: React.FC = () => {
 

  return (
    <div className='test'>
    {/* <div className="analyse">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageSrc={card.imageSrc}
          altText={card.altText}
          link={card.link}
        />
      ))}
      </div> */}
     {/* <div className='a'>
            <h1>Nos thèmes de formation</h1>
            <div className="themes-grid">
                <div className="theme">
                    <img src={im1} alt="Bonne pratiques d'hygiene" className="theme-image"/>
                    <p>Bonne pratiques d'hygiene</p>
                </div>
                <div className="theme">
                    <img src={im1} alt="Sciences Analytiques" className="theme-image"/>
                    <p>Sciences Analytiques</p>
                </div>
                <div className="theme">
                    <img src={im1} alt="Sécurité des Aliments" className="theme-image"/>
                    <p>Sécurité des Aliments</p>
                </div>
                <div className="theme">
                    <img src={im1} alt="Management de la Qualité" className="theme-image"/>
                    <p>Management de la Qualité</p>
                </div>
                <div className="theme">
                    <img src={im1} alt="Sécurité des Eaux" className="theme-image"/>
                    <p>Sécurité des Eaux</p>
                </div>
                <div className="theme">
                    <img src={im1} alt="Bonnes Pratiques de Prélèvement" className="theme-image"/>
                    <p>Bonnes Pratiques de Prélèvement</p>
                </div>
                <div className="theme">
                    <img src={im1} alt="Sécurité des Eaux" className="theme-image"/>
                    <p>Sécurité des Eaux</p>
                </div>
                <div className="theme">
                    <img src={im1} alt="Bonnes Pratiques de Prélèvement" className="theme-image"/>
                    <p>Bonnes Pratiques de Prélèvement</p>
                </div>
            </div>
            </div> */}


       <section className="logistics-section">
      <div className="logistics-content">
        <h2>Nos Logistique de Pointe : Des Solutions Intégrées par MULTILAB s.a</h2>
        <p><strong>MULTILAB s.a</strong> met en place une solution intégrée pour simplifier le processus d’acheminement des échantillons pour nos clients.</p>
        <p>Une équipe de techniciens-préleveurs dédiés, compétents et qualifiés, opère à travers tout le territoire pour collecter, échantillonner ou prélever les échantillons directement sur site, chaque jour.</p>
        <p>Équipés de véhicules respectant les normes en vigueur, nos techniciens-préleveurs contribuent à une réactivité optimale, une traçabilité renforcée et une parfaite maîtrise de la chaîne du froid.</p>
      </div>
      <div className="logistics-image">
        <img src={group} alt="Logistics illustration" />
      </div>
    </section>
    
</div>    
  );
};

export default Analyse;
