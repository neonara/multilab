import React, { useState } from 'react';
import './Apropos.css';
import aprop from '../apropos/asssets/apropos1.png';
import lab from '../apropos/asssets/lab.png';
import { FaLock,  FaCheckCircle } from 'react-icons/fa';
import { FaShield } from 'react-icons/fa6';
import laitImage from '../apropos/asssets/img1.jpg'
import viandeImage from '../apropos/asssets/img2.jpeg'
import hotelImage from '../apropos/asssets/img3.png'
import pecheImage from '../apropos/asssets/img4.jpg'
import img5 from '../apropos/asssets/img5.jpg'
import img6 from '../apropos/asssets/img6.jpg'
import img7 from '../apropos/asssets/img7.jpg'
import img8 from '../apropos/asssets/img8.jpg'
import img9 from '../apropos/asssets/img9.jpg'
import img10 from '../apropos/asssets/img10.jpg'
import img11 from '../apropos/asssets/img11.jpg'
import img12 from '../apropos/asssets/img12.jpg'
import bannerImage from '../apropos/asssets/apropos.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// const cards = [
//   { imageSrc: 'image1.jpg', title: 'Conditionnement des produits alimentaires' },
//   { imageSrc: 'image2.jpg', title: 'Pâtisserie confiserie' },
//   { imageSrc: 'image3.jpg', title: 'La grande distribution' },
//   { imageSrc: 'image4.jpg', title: 'Services d’hygiènes' },
//   { imageSrc: 'image5.jpg', title: 'Another Card' },
//   { imageSrc: 'image6.jpg', title: 'And Another' },
// ];

const Apropos: React.FC = () => {
    const cards = [
      { id: 1, image: laitImage, label: 'Lait et dérivés' },
      { id: 2, image: viandeImage, label: 'Viande de boucherie et volailles' },
      { id: 3, image: pecheImage, label: 'La pêche' },
      { id: 4, image: hotelImage, label: 'Hôtellerie, restauration et cliniques' },
      { id: 5, image: img5, label: 'Autres viandes' },
      { id: 6, image: img6, label: 'Services de soins' },
      { id: 7, image: img7, label: 'Produits laitiers' },
      { id: 8, image: img8, label: 'Fruits de mer' },
      { id: 9, image: img9, label: 'Fruits de mer' },
      { id: 10, image: img10, label: 'Fruits de mer' },
      { id: 11, image: img11, label: 'Fruits de mer' },
      { id: 12, image: img12, label: 'Fruits de mer' },

    ];

  const [startIndex, setStartIndex] = useState(0);

  // Handle next click to shift by one card
  const handleNext = () => {
    if (startIndex + 1 + 4 <= cards.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0); // Loop back to the start
    }
  };

  // Handle previous click to shift by one card
  const handlePrev = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(cards.length - 4); // Loop to the last set of 4 cards
    }
  };

  // Get the visible cards, ensuring only 4 are visible at any given time
  const visibleCards = cards.slice(startIndex, startIndex + 4);


  return (
    
    
      <div className="apropos-container">
         <div className="apropos-">
      {/* Banner Image */}
      <div className="banner-container">
  <img src={bannerImage} alt="À propos banner" className="banner-image" />
  <div className="banner-text">À propos</div>
</div>


     
    </div>
         <div className='Accreditation'>
      <h1>Pourquoi choisir MULTILAB ?</h1>
      <p> Choisir<span className="dark-background">MULTILAB s.a </span>  , c'est opter pour l'expertise et la fiabilité d'un laboratoire accrédité, capable de réaliser des analyses précises et rapides. Grâce à notre présence
      sur tout le territoire tunisien, nous offrons un service de proximité, adapté aux besoins spécifiques de chaque client. Notre engagement envers la qualité et la sécurité
      sanitaire garantit des résultats conformes aux normes les plus strictes. Avec une gamme étendue de méthodes d'analyse, <span className="dark-background">MULTILAB s.a </span> est votre partenaire de 
      confiance pour assurer la sécurité et la qualité de vos produits. </p>
    </div>
      <div className="apropos-content">
        <h1>MULTILAB votre solution optimale pour vos analyses</h1>
        <div className="apropos-body">
          <img src={aprop} alt="MULTILAB" className="apropos-image" />
          <div className='par-text'>         
                <p><span className="dark-background">MULTILAB s.a </span> est votre partenaire de confiance pour tous vos besoins en analyses. 
            Notre laboratoire ultramoderne et notre équipe d'experts hautement qualifiés 
            garantissent des résultats précis et fiables dans les meilleurs délais.</p>
            <div>
              <p><span className="dark-background">MULTILAB s.a </span> assure :</p>
 <div className='icons'>
      <FaLock style={{ color: 'rgb(0, 160, 216, 1)',display: 'inline-block', marginRight: '10px' }} /> La confidentialité des résultats d'analyses.<br/>
      <FaShield style={{color: 'rgb(0, 160, 216, 1)',display: 'inline-block', marginRight: '10px' }} /> La sécurité des données.<br/>
      <FaCheckCircle style={{ color: 'rgb(0, 160, 216, 1)',display: 'inline-block', marginRight: '10px' }} /> La satisfaction des attentes des clients.<br/>
      </div>
    </div>
            <div className="apropos-text">
          
          <p>Contactez nous pour fixer un rendez-vous</p>

       
        </div>
            </div>
        
        </div>
       
      </div>
     



    <div className="apropos-container">
      <h2 className="title">Nos clients</h2>
      <p className="description">
        MULTILAB s.a assure le traitement d'environ 50 000 prélèvements par an, dont environ 44 000 échantillons analysés au laboratoire de microbiologie et 6 000 échantillons analysés au laboratoire de physicochimie, pour plus de 170 types d'essais.
      </p>

      <div className="carousel">
        <div className="cards-container">
          {visibleCards.map((card) => (
            <div key={card.id} className="cardd">
              <img src={card.image} alt={card.label} />
              <p>{card.label}</p>
            </div>
          ))}
        </div>

        {/* Arrow buttons placed below the cards */}
        <div className="arrow-buttons">
          <button className="arrow-button left" onClick={handlePrev}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="arrow-button right" onClick={handleNext}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
    <section className="research-section">
      <div className="research-content">
        <div className="text-content">
          <h2 className="research-title">Recherche et Développement MULTILAB</h2>
          <p className="research-description">
            L'innovation est au cœur de <strong>MULTILAB s.a</strong>, qui investit massivement dans son département Recherche & Développement. 
            Composé de plusieurs équipes scientifiques spécialisées, ce département est l'un des piliers de notre laboratoire. 
            Nos experts développent continuellement de nouvelles méthodes d'analyse pour répondre aux besoins évolutifs de nos clients et garantir des résultats précis et fiables.
            <br />
            Choisir <strong>MULTILAB s.a</strong>, c'est bénéficier de l'expertise, de la fiabilité, de la réactivité et de la proximité d'un leader de l'analyse agroalimentaire et environnementale en Tunisie.
          </p>
        </div>
        <div className="image-content">
          <img src={lab} alt="Laboratoire MULTILAB" className="lab-image" />
        </div>
      </div>
    </section>
    <div className='Accreditation'>
      <h1>Accreditation</h1>
      <p> <span className="dark-background">MULTILAB s.a </span>  est fier d'être accrédité par le  <span className="dark-background">TUNAC </span> depuis 2012 dans les domaines de la microbiologie alimentaire, de la microbiologie des eaux et de la</p>
      <p>physicochimie des aliments. Au fil des années, nous avons élargi notre champ d'accréditation, passant de <span className="dark-background">6 à 28 méthodes </span>d'analyse accréditées.</p>
      <p>Cette reconnaissance atteste de notre engagement envers la qualité et la fiabilité de nos services, garantissant ainsi la confiance de nos clients.</p>
    </div>
    </div>

    
  );
};

export default Apropos;
