import home1 from "../home/assets/home 1.png";
import fiabilite from "../home/assets/Fiabilité.png";
import expertise from "../home/assets/Expertise.png";

import reactivite from "../home/assets/Réactivité.png";
import proximite from "../home/assets/Proximité.png";
import first from "../home/assets/first.png";
import second from "../home/assets/second.png";
import third from "../home/assets/third.png";
import logo1 from "../home/assets/2.png";
import logo2 from "../home/assets/1.png";
import logo3 from "../home/assets/3.png";
import event1 from "../home/assets/WhatsApp Image 2024-04-04 at 1.21.41 PM.jpeg";
import event2 from "../home/assets/Actualité 1.jpg";
import event3 from "../home/assets/event 27.png";
import bg from "../home/assets/7534029.jpg";
import log from "../home/assets/log.png";
import AnalysesCard from "./AnalysesCard";

import "./Home.css";
import ServicesCards from "./ServicesCards";
import VideoSection from "./Video";
function HomePage() {
  return (
    <div className="toppp">
      <VideoSection />

      {/* Hero Section */}
      {/* <div className="container-fluid bg-light text-center py-5">
        <h1 className="display-4">Welcome to Multilab</h1>
        <p className="lead">We provide the best agro-food and environmental analysis.</p>
        <button className="btn btn-primary btn-lg">Learn More</button>
      </div> */}

      <div className="home-container">
        <div className="text-section">
          <h1>Qui sommes nous ?</h1>
          <p>
            <strong>MULTILAB s.a</strong>, laboratoire Tunisien accrédité{" "}
            <strong>ISO/IEC 17025</strong>, est spécialisé dans l'analyse
            agroalimentaire, l'alimentation animale, les eaux et les produits
            d’hygiène et de cosmétique.
          </p>
          <p>
            Nous proposons des services d'analyses microbiologiques et
            physicochimiques visant à garantir la sécurité sanitaire et la
            qualité de vos produits. Notre équipe d'experts vous accompagne de
            manière personnalisée en vous offrant des solutions sur mesure,
            telles que la traçabilité, les audits qualité et des conseils en
            hygiène. Grâce à notre réactivité et notre fiabilité, nous vous
            aidons à assurer la conformité de vos processus et à renforcer la
            confiance de vos clients. Grâce à sa plateforme analytique de plus
            de 1400 m² située à la Soukra Gouvernorat de l’ARIANA, ses hautes
            technologies et son savoir-faire, <strong>MULTILAB s.a</strong>{" "}
            répond à tous vos projets.
          </p>
          <p className="top-paragraph">
            « Bien plus qu’un laboratoire agroalimentaire, un véritable
            partenaire. »
          </p>
          <button className="cta-button">Découvrez-nous</button>
        </div>

        <div className="image-section">
          <img src={home1} alt="Laboratory" className="lab-image" />
        </div>
      </div>

      <div className="values-section">
        <h2 className="">Nos valeurs</h2>
        <div className="values-grid">
          <div className="value-item">
            <img src={fiabilite} alt="Fiabilité" />
            <h3>Fiabilité</h3>
            <p>
              Accrédité <strong>ISO/IEC 17025</strong> pour une qualité
              supérieure
            </p>
          </div>
          <div className="value-item">
            <img src={expertise} alt="Expertise" />
            <h3>Expertise</h3>
            <p>Des spécialistes qualifiés pour des analyses précises.</p>
          </div>
          <div className="value-item">
            <img src={reactivite} alt="Réactivité" />
            <h3>Réactivité</h3>
            <p>Résultats rapides et délais optimisés.</p>
          </div>
          <div className="value-item">
            <img src={proximite} alt="Proximité" />
            <h3>Proximité</h3>
            <p>
              Présent sur tout le territoire tunisien pour un service
              personnalisé.
            </p>
          </div>
        </div>
      </div>

      <section className="prestations-section">
        <h2 className="home-title">Nos prestations</h2>
        <p className="home-description-prestation">
          Nous vous offrons une gamme complète de services sur-mesure pour
          répondre à tous vos besoins{" "}
        </p>
        <div className="services-section">
          <div className="prestations-grid">
            <ServicesCards
              imageSrc={first}
              logoSrc={logo1}
              title="Analyses"
              description="MULTILAB s.a fournit des solutions innovantes et écologiques pour les enjeux de sécurité alimentaire et environnementale."
              link="analyse"
            />
            <ServicesCards
              imageSrc={second}
              logoSrc={logo2}
              title="Formation"
              description="MULTILAB s.a propose des formations actualisées et pertinentes en analyse, sécurité alimentaire, hygiène et qualité."
              link="formation"
            />
            <ServicesCards
              imageSrc={third}
              logoSrc={logo3}
              title="Assistance et Audit"
              description="MULTILAB s.a accompagne ses clients de manière personnalisée pour assurer la qualité et la sécurité des aliments."
              link="Assistance"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      {/* <section className="prestations-section">
     
      <div className="prestations-grid">
        <div className="prestation-item">
          <img src={first} alt="Prestation 1" className="prestation-image" />
          <div className="prestation-details">
            <img src={logo1} alt="Logo 1" className="prestation-logo" /> 
            <h3>Analyses</h3>
            <p>MULTILAB s.a fournit des solutions innovantes et écologiques pour les enjeux de sécurité alimentaire et environnementale.</p>
          </div>
        </div>
        <div className="prestation-item">
          <img src={second} alt="Prestation 2" className="prestation-image" />
          <div className="prestation-details">
            <img src="path/to/logo2.png" alt="Logo 2" className="prestation-logo" /> 
            <h3>Formation</h3>
            <p>MULTILAB s.a propose des formations actualisées et pertinentes en analyse, sécurité alimentaire, hygiène et qualité.</p>
          </div>
        </div>
        <div className="prestation-item">
          <img src={third} alt="Prestation 3" className="prestation-image" />
          <div className="prestation-details">
            <img src="path/to/logo3.png" alt="Logo 3" className="prestation-logo" /> 
            <h3>Assistance et Audit</h3>
            <p>MULTILAB s.a accompagne ses clients de manière personnalisée pour assurer la qualité et la sécurité des aliments.</p>
          </div>
        </div>
      </div>
    </section> */}

      <div className="home-containers-analyse">
        <h2 className="home-title">Nos analyses</h2>
        <p className="home-description">
          Le laboratoire MULTILAB s.a développe une gamme d'analyses complète et
          diversifiée, utilisant des technologies modernes et des méthodes
          avancées pour répondre aux besoins variés de ses clients.
        </p>
        <AnalysesCard />
      </div>

      <div className="stats-section">
        <div className="stats-item">
          <h2>+500</h2>
          <p>Clients</p>
        </div>
        <div className="stats-item">
          <h2>+50 000</h2>
          <p>Échantillons traités par an</p>
        </div>
        <div className="stats-item">
          <h2>+25 ans</h2>
          <p>d'expérience</p>
        </div>
      </div>

      <div className="reconnaissance">
        <h2>Notre reconnaissance qualité</h2>

        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "20px",
            borderRadius: "10px",
            margin: "20px auto",
            marginRight: "20px",
            maxWidth: "1500px",
            height: "308px",
          }}
        >
          <div
            style={{
              padding: "20px",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1 1 60%", padding: "10px" }}>
              <h3
                style={{
                  color: "#003A79",
                  fontSize: "24px",
                  marginBottom: "10px",
                }}
              >
                Nos accréditations
              </h3>
              <p style={{ color: "#003A79", fontSize: "18px" }}>
                Depuis 2012, <strong>MULTILAB s.a</strong> est accrédité par le{" "}
                <strong>TUNAC</strong> en microbiologie alimentaire,
                microbiologie des eaux et physicochimie des aliments. Nous avons
                élargi notre champ d'accréditation, passant de 6 à 28 méthodes
                d'analyse.
              </p>
              <button
                style={{
                  alignContent: "left",
                  backgroundColor: "transparent",
                  color: "#003A79",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  fontSize: "16px",
                  marginTop: "20px",
                  cursor: "pointer",
                }}
              >
                En apprendre plus
              </button>
            </div>

            <div
              style={{
                flex: "1 1 30%",
                textAlign: "center",
                padding: "10px",
                height: "208px",
              }}
            >
              <img
                src={log}
                alt="TUNAC Accreditation"
                style={{
                  maxWidth: "100%",
                  borderRadius: "10px",
                  height: "225px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <section className="projects-section">
        <h2 className="projects-title">Actualités et événements</h2>
        <p className="projects-subtitle">
          Soyez les premiers à connaître nos événements et formations à venir
        </p>

        <div className="projects-cards">
          <div className="project-card">
            <div className="project-image-wrapper">
              <img src={event1} alt="Project 1" className="project-image" />
              <div className="project-info">
                <div className="project-date">17/01/2024</div>
                <p className="project-description">
                  Le maintien de l'accréditation ISO/IEC 17025 des laboratoires
                  de Microbiologie et de Physicochimie de MULTILAB s.a
                </p>
                <a href="/link-to-project1" className="project-link">
                  Lire la suite
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={event2} alt="Project 2" className="project-image" />
            <div className="project-info">
              <div className="project-date">21/02/2024</div>
              <p className="project-description">
                Participation active de MULTILAB s.a à la première journée de
                l'Association Tunisienne de l'Aviculture (TPA)
              </p>
              <a href="/link-to-project2" className="project-link">
                Lire la suite
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={event3} alt="Project 3" className="project-image" />
            <div className="project-info">
              <div className="project-date">27/02/2024</div>
              <p className="project-description">
                Evènement :Thème "Risques des Mycotoxines dans l'alimentation
                animale"
              </p>
              <a href="/link-to-project3" className="project-link">
                Lire la suite
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
    </div>
  );
}

export default HomePage;
