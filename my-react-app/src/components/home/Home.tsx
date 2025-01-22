import home1 from "../home/assets/home 1.png";
import expertise from "@/assets/icons/icon-expertise.svg";
import fiabilite from "@/assets/icons/icon-fiabilité.svg";

import reactivite from "@/assets/icons/icon-réactivité.svg";
import proximite from "@/assets/icons/icon-proximité.svg";
import first from "../home/assets/first.png";
import second from "../home/assets/second.png";
import third from "../home/assets/third.png";
import logo1 from "@/assets/icons/icon-analyses.svg";
import logo2 from "@/assets/icons/icon-formation.svg";
import logo3 from "@/assets/icons/icon-assistance.svg";
import event1 from "../home/assets/WhatsApp Image 2024-04-04 at 1.21.41 PM.jpeg";
import event2 from "../home/assets/Actualité 1.jpg";
import event3 from "../home/assets/event 27.png";
import calendarIcon from "@/assets/icons/icon-calendar.svg";
import log from "../home/assets/log.png";
import AnalysesCard from "./AnalysesCard";


import "./home.css";

import ServicesCards from "./ServicesCards";
import VideoSection from "./Video";
import StatsSection from "./StatsSection";
function HomePage() {
  const services = [
    {
      imageSrc: first,
      logoSrc: logo1,
      title: "Analyses",
      description:
        "<strong>MULTILAB s.a</strong> propose une large gamme d’analyses précises et fiables pour répondre aux enjeux de la sécurité alimentaire, de la qualité des produits et de la protection de l'environnement.",
      link: "analyse",
    },
    {
      imageSrc: second,
      logoSrc: logo2,
      title: "Formation",
      description:
        "<strong>MULTILAB s.a</strong>  propose des formations actualisées et pertinentes en analyse, sécurité alimentaire, hygiène et qualité et selon le besoin des clients",
      link: "formation",
    },
    {
      imageSrc: third,
      logoSrc: logo3,
      title: "Assistance et Audit",
      description:
        "<strong>MULTILAB s.a</strong> accompagne ses clients de manière personnalisée pour assurer la qualité et la sécurité de leurs produits.",
      link: "Assistance",
    },
  ];

  const projects = [
    {
      imgSrc: event1,
      date: "17/01/2024",
      description:
        "Le maintien de l'accréditation ISO/IEC 17025 des laboratoires de Microbiologie et de Physicochimie de MULTILAB s.a",
      link: "/link-to-project1",
    },
    {
      imgSrc: event2,
      date: "21/02/2024",
      description:
        "Participation active de MULTILAB s.a à la première journée de l'Association Tunisienne de l'Aviculture (TPA)",
      link: "/link-to-project2",
    },
    {
      imgSrc: event3,
      date: "27/02/2024",
      description:
        'Evènement :Thème "Risques des Mycotoxines dans l\'alimentation animale".',
      link: "/link-to-project3",
    },
  ];
  return (
    <div className="toppp">
      <VideoSection />

      <div className="home-container">
        <div className="text-section">
          <h1>Qui sommes nous ?</h1>
          <div className="img-mobile">
            <img src={home1} alt="Laboratory" className="lab-image" />
          </div>
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
        <h1 className="">Nos valeurs</h1>
        <div className="values-grid">
          <div className="value-item">
            <div className="img-container">
              <img src={fiabilite} alt="Fiabilité" />
            </div>
            <h3>Fiabilité</h3>
            <p>
              Accrédité <strong>ISO/IEC 17025</strong> pour une qualité
              supérieure
            </p>
          </div>

          <div className="value-item">
            <div className="img-container">
              <img src={expertise} alt="Expertise" />
            </div>

            <h3>Expertise</h3>
            <p>Des spécialistes qualifiés pour des analyses précises.</p>
          </div>

          <div className="value-item">
            <div className="img-container">
              <img src={reactivite} alt="Réactivité" />
            </div>
            <h3>Réactivité</h3>
            <p>Résultats rapides et délais optimisés.</p>
          </div>

          <div className="value-item">
            <div className="img-container">
              <img src={proximite} alt="Proximité" />
            </div>
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

        <div className="prestations-grid">
          {services.map((service, index) => (
            <ServicesCards
              key={index}
              imageSrc={service.imageSrc}
              logoSrc={service.logoSrc}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </section>

      <div className="home-containers-analyse">
        <h2 className="home-title">Nos analyses</h2>
        <p className="home-description">
          Le laboratoire propose une gamme complète et diversifiée d'analyses,
          en s'appuyant sur des technologies modernes et des méthodes avancées
          pour répondre aux besoins variés de ses clients.
        </p>
        <AnalysesCard />
      </div>

      {/* <div className="stats-section">
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
      </div> */}

      <StatsSection />

      <div className="reconnaissance">
        <h2>Notre reconnaissance qualité</h2>

        <div className="reconnaissance-grid">
          {/* paragraph */}
          <div style={{ flex: "1 1 60%" }}>
            <h3 className="reconnaissance-title">Nos accréditations</h3>

            <div className="reconnaissance-img-mobile">
              <img
                src={log}
                alt="TUNAC Accreditation"
                style={{
                  maxWidth: "100%",
                  borderRadius: "10px",
                  height: "225px",
                  objectFit: "cover",
                }}
              />
            </div>

            <p style={{ fontSize: "18px", textAlign: "justify" }}>
              Depuis 2012, le laboratoire est{" "}
              <strong>accrédité ISO/IEC 17025</strong> par le TUNAC.
              <div>
                L’accréditation de <strong>MULTILAB s.a</strong> couvre les
                domaines de la microbiologie alimentaire, microbiologie des eaux
                et Physicochimie des aliments avec une extension régulière et
                Continue du champs d’accréditation.
              </div>
            </p>

            <button className="reconnaissance-button">En apprendre plus</button>
          </div>

          {/* img */}
          <div className="reconnaissance-img-desk">
            <img
              src={log}
              alt="TUNAC Accreditation"
              style={{
                maxWidth: "100%",
                borderRadius: "10px",
                height: "225px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      <section className="projects-section">
        <h2 className="projects-title">Actualités et événements</h2>
        <p className="projects-subtitle">
          Soyez les premiers à connaître nos événements et formations à venir
        </p>

        <div className="projects-cards">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.imgSrc}
                alt={`Project ${index + 1}`}
                className="project-image"
              />
              <div className="project-info">
                <div className="project-content">
                  <div className="project-date">
                    <img src={calendarIcon} alt="Calendar Icon" />{" "}
                    {project.date}
                  </div>
                  <p className="project-description">{project.description}</p>
                  <a href={project.link} className="project-link">
                    Lire la suite
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials Section */}
    </div>
  );
}

export default HomePage;
