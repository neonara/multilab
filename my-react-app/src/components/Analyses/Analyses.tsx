import im1 from "@/assets/images/20.jpg";
import im2 from "@/assets/images/29.jpg";
import im3 from "@/assets/images/37.jpg";
import im4 from "@/assets/images/36.jpg";
import im5 from "@/assets/images/64-vertical.png";
import im6 from "@/assets/images/38.jpg";
import im7 from "@/assets/images/23.jpg";
import im8 from "@/assets/images/21.jpg";
import vid from "@/assets/0702vd page analyse Multilab.mp4";

import "./Analyses.css";
import groupe from "@/assets/Group 1000002140.jpg";
import AnalysesCard from "../home/AnalysesCard";
import backimg from "@/assets/Subtract.jpg";
import { useEffect, useRef } from "react";
import BannerImage from "./BannerImage";

const Analyses: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current) {
              videoRef.current.play(); // Play the video when it's visible
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause(); // Pause the video when it leaves the viewport
            }
          }
        });
      },
      {
        threshold: 0.5, // Adjust threshold (when 50% of the video is visible)
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current); // Start observing the video element
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current); // Clean up observer when component unmounts
      }
    };
  }, []);

  return (
    <div>
      <div className="mobile-banner">
        <BannerImage backimg={backimg} title="ANALYSE" />
      </div>

      <div className="analyse-container">
        <div className="desktop-banner">
          <BannerImage backimg={backimg} title="ANALYSE" />
        </div>
        <div className="video-section">
          <div className="textContainer">
            <h2 className="titles">L'Approche Innovante de MULTILAB s.a</h2>
            <p className="paragraph">
              <strong>MULTILAB s.a.</strong> est bien plus qu'un simple
              laboratoire d'analyses, c'est un projet technologique{" "}
              <br className="et-back-to-line" /> et humain engagé dans les
              enjeux sociétaux de la sécurité alimentaire et environnementale.
              Grâce à notre approche axée sur la proximité, l'expertise, la
              réactivité et la fiabilité, nous proposons des solutions
              innovantes et respectueuses de l'environnement, garantissant ainsi
              une expertise de premier plan. L'anticipation est au cœur de notre
              démarche, car nous nous efforçons de maintenir notre avance
              technologique pour répondre aux besoins futurs de nos clients.
            </p>
          </div>
          <div className="videoContainer">
            <video src={vid} className="video" autoPlay muted loop playsInline>
              <source src="your-video-file.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="home-containers">
          <h2 className="home-title">Nos analyses</h2>

          <AnalysesCard />
        </div>

        <div className="themes-section">
          <h1 className="themes-title">Produits analysés</h1>
          <div className="themes-grid">
            <div className="theme">
              <img
                src={im1}
                alt="Bonne pratiques d'hygiene"
                className="theme-image"
              />
              <p>
                Viandes <br /> et dérivés
              </p>
            </div>
            <div className="theme">
              <img
                src={im2}
                alt="Sciences Analytiques"
                className="theme-image"
              />
              <p>
                Huile <br /> et produits gras
              </p>
            </div>
            <div className="theme">
              <img
                src={im3}
                alt="Sécurité des Aliments"
                className="theme-image"
              />
              <p>Miel</p>
            </div>
            <div className="theme">
              <img
                src={im4}
                alt="Management de la Qualité"
                className="theme-image"
              />
              <p>
                Produit <br /> laitiers
              </p>
            </div>
            <div className="theme">
              <img src={im5} alt="Sécurité des Eaux" className="theme-image" />
              <p>
                Aliments des <br /> animaux
              </p>
            </div>
            <div className="theme">
              <img
                src={im6}
                alt="Bonnes Pratiques de Prélèvement"
                className="theme-image"
              />
              <p>
                Produits hygiène <br /> et cosmétiques
              </p>
            </div>
            <div className="theme">
              <img src={im7} alt="Sécurité des Eaux" className="theme-image" />
              <p>
                Pâtisserie <br /> confiserie
              </p>
            </div>
            <div className="theme">
              <img
                src={im8}
                alt="Bonnes Pratiques de Prélèvement"
                className="theme-image"
              />
              <p>
                Produit de la <br /> pêche{" "}
              </p>
            </div>
          </div>
        </div>

        <section className="logistics-section">
          <div className="logistics-content">
            <h1>
              Nos Logistique de Pointe : Des Solutions Intégrées par MULTILAB
              s.a
            </h1>
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
            <img src={groupe} alt="Logistics illustration" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Analyses;
