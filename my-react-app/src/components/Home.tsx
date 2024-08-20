import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { IoIosArrowUp } from "react-icons/io";

import home1 from "../assets/home 1.png";
import cap from "../assets/test.png"
import reaction from "../assets/reaction.png"
import map from "../assets/map.png"
import first from "../assets/first.png"
import second from "../assets/second.png"
import third from "../assets/third.png"
import card from "../assets/card1.png"
import tt from "../assets/tt.png"
import phy from "../assets/phy.png"
import './Home.css'; 
function HomePage() {
  const [showButton, setShowButton] = React.useState(false);
  const cardsData = [
    {
      title: 'Analyses',
      image: first, // Replace with your image path
      description: 'MULTILAB s.a fournit des solutions innovantes et écologiques pour les enjeux de sécurité alimentaire et environnementale.',
      buttonLabel: 'En savoir plus',
    },
    {
      title: 'Formation',
      image: '/path/to/your/image2.jpg',
      description: 'MULTILAB s.a propose des formations actualisées et pertinentes en analyse, sécurité alimentaire, hygiène et qualité.',
      buttonLabel: 'En savoir plus',
    },
    {
      title: 'Assistance et Audit',
      image: '/path/to/your/image3.jpg',
      description: 'MULTILAB s.a accompagne ses clients de manière personnalisée pour assurer la qualité et la sécurité des aliments.',
      buttonLabel: 'En savoir plus',
    },
  ];

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    
    <div>
      {/* Hero Section */}
      <div className="container-fluid bg-light text-center py-5">
        <h1 className="display-4">Welcome to Multilab</h1>
        <p className="lead">We provide the best agro-food and environmental analysis.</p>
        <button className="btn btn-primary btn-lg">Learn More</button>
      </div>
    
      <div className="home-container">
      <div className="text-section">
        <h1>Qui sommes nous ?</h1>
        <p>
          MULTILAB s.a, laboratoire Tunisien accrédité <strong>ISO/IEC 17025</strong>, est spécialisé dans
          l'analyse agroalimentaire, l'alimentation animale et les eaux. Nous offrons des services d'analyses
          microbiologiques et physicochimiques pour garantir la sécurité sanitaire et la qualité des produits.
          Nos experts fournissent un accompagnement de proximité avec des solutions adaptées, incluant la
          traçabilité, les audits qualité, et des conseils en hygiène, assurant ainsi la réactivité et la fiabilité.
        </p>
        <button className="cta-button">Découvrez-nous</button>
      </div>
    
      <div className="image-section">
        <img src={home1} alt="Laboratory" className="lab-image"/>
      </div>
    </div>
    <div className="values-section">
        <h2>Nos valeurs</h2>
        <div className="values-grid">
          <div className="value-item">
            <img src={cap}  alt="Fiabilité" />
            <h3>Fiabilité</h3>
            <p>Accrédité <strong>ISO/IEC 17025</strong> pour une qualité supérieure</p>
          </div>
          <div className="value-item">
            <img src={cap} alt="Expertise" />
            <h3>Expertise</h3>
            <p>Des spécialistes qualifiés pour des analyses précises.</p>
          </div>
          <div className="value-item">
            <img src={reaction} alt="Réactivité" />
            <h3>Réactivité</h3>
            <p>Résultats rapides et délais optimisés.</p>
          </div>
          <div className="value-item">
            <img src={  map} alt="Proximité" />
            <h3>Proximité</h3>
            <p>Présent sur tout le territoire tunisien pour un service personnalisé.</p>
          </div>
        </div>
      </div>
      <div className="home-container">
      <h2>Nos prestations</h2>
      <p>Nous vous offrons une gamme complète de services sur-mesure pour répondre à tous vos besoins</p>
    </div>

      <div >
      {/* Existing content */}

      {/* Scroll to top button */}
      <button
        className={`scroll-to-top ${showButton ? 'show' : ''}`}
        onClick={scrollToTop}
      >
        {/* <FontAwesomeIcon icon={faArrowUp} /> */}
        <IoIosArrowUp className='m-auto'/>

      </button>
    </div>
    <div>
      
    </div>
      {/* Content Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <img src={first} className="card-img-top" alt="Service 1" />
              <div className="card-body">
                <h5 className="card-title">Analyses</h5>
                <p className="card-text">
      MULTILAB s.a fournit des solutions innovantes et écologiques pour les enjeux de sécurité alimentaire et environnementale

                </p>
                <a href="#" className="btn btn-outline-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img src= {second} className="card-img-top" alt="Service 2" />
              <div className="card-body">
              <i className="fa fa-check-circle"></i>
                <h5 className="card-title">Formation</h5>
                <p className="card-text">MULTILAB s.a propose des formations actualisées et pertinentes en analyse, sécurité alimentaire, hygiène et qualité</p>
                <a href="#" className="btn btn-outline-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img src= {third} className="card-img-top" alt="Service 3" />
              <div className="card-body">
                <h5 className="card-title">Assistance et Audit</h5>
                <p className="card-text">MULTILAB s.a accompagne ses clients de manière personnalisée pour assurer la qualité et la sécurité des aliments</p>
                <a href="#" className="btn btn-outline-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    <div className="home">
      <section className="analyses">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={card} className="card-img-top" alt="Microbiologie des Produits Alimentaires" />
              <div className="card-body">
                <h5 className="card-title">Microbiologie des Produits Alimentaires</h5>
                <p className="card-text">En savoir plus </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={tt} className="card-img-top" alt="Microbiologie des Eaux" />
              <div className="card-body">
                <h5 className="card-title">Microbiologie des Eaux</h5>
                <p className="card-text">En savoir plus </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={phy} className="card-img-top" alt="Physicochimies des Produits Alimentaires" />
              <div className="card-body">
                <h5 className="card-title">Physicochimies des Produits Alimentaires</h5>
                <p className="card-text">En savoir plus </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

      {/* Testimonials Section */}
      
    </div>
  );
}

export default HomePage;
