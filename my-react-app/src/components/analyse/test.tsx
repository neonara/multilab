import React, { useState } from "react";
import back from "../Parametres/assets/bg-1.png";
import "./analyse.css";

const Parametres: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="image-container-test">
        <img src={back} alt="Lab Worker" className="background-image" />
        <div className="text-container">
          <p className="line1">MULTILAB s.a</p>
          <p className="line2">ANALYSE </p>
        </div>
      </div>

      <div style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", color: "#1a3d91" }}>
          Paramètre d’analyses microbiologiques des produits alimentaires
        </h2>
        <p style={{ textAlign: "center" }}>
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          {/* Left Column */}
          <div style={{ flex: 1, marginRight: "10px" }}>
            <div
              onClick={() => toggleOpen(1)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              <span>Analyses physicochimiques des viandes et dérives</span>
              <span>{openIndex === 1 ? "−" : "+"}</span>
            </div>
            {openIndex === 1 && (
              <div
                style={{
                  padding: "10px 20px",
                  borderLeft: "2px solid #1a3d91",
                  marginBottom: "10px",
                }}
              >
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                  <li>pH</li>
                  <li>Chlorures</li>
                  <li>Azote total</li>
                  <li>Matière grasse totale</li>
                  <li>Amidon</li>
                  <li>Nitrites</li>
                  <li>Phosphore Total</li>
                  <li>Matières sèches</li>
                  <li>Activité de l’eau Aw</li>
                  <li>Acides gras Saturés, Mono Insaturés, Poly Insaturés</li>
                </ul>
              </div>
            )}
            <div
              onClick={() => toggleOpen(2)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              <span>Analyses physicochimiques huiles et produits gras</span>
              <span>{openIndex === 1 ? "−" : "+"}</span>
            </div>
            {openIndex === 2 && (
              <div
                style={{
                  padding: "10px 20px",
                  borderLeft: "2px solid #1a3d91",
                  marginBottom: "10px",
                }}
              >
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                  <li> Indice de saponification</li>
                  <li> Indice d’iode</li>
                  <li> Indice de peroxyde</li>
                  <li> Acidité de l’huile (indice d’acide)</li>
                  <li> Densité</li>
                  <li> Acidité</li>
                  <li> (Graines oléagineuses)</li>
                  <li> Teneur en eau (Graines oléagineuses)</li>
                  <li>
                    {" "}
                    Teneur en eau (Graines oléagineuses colza, lin, moutarde,
                    navettes, soja, tournesol)
                  </li>
                  <li> Teneur en huiles (Graines oléagineuses)</li>
                  <li> Acides gras Saturés, Mono Insaturés, Poly Insaturés</li>
                </ul>
              </div>
            )}
            <div
              onClick={() => toggleOpen(3)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              <span>Analyses physicochimiques du miel</span>
              <span>{openIndex === 2 ? "−" : "+"}</span>
            </div>
            {openIndex === 3 && (
              <div
                style={{
                  padding: "10px 20px",
                  borderLeft: "2px solid #1a3d91",
                  marginBottom: "10px",
                }}
              >
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                  <li>Acidité (meq acide/Kg)</li>
                  <li>pH</li>
                  <li>Cendre</li>
                  <li>Conductivité</li>
                  <li>Humidité</li>
                  <li>Indice de Réfraction</li>
                  <li>Sucres réducteurs</li>
                  <li>Saccharose apparent</li>
                  <li>Matières Minérales</li>
                  <li>Hydroxy méthyl furfural HMF</li>
                  <li>Plomb</li>
                  <li>Cadmium</li>
                </ul>
              </div>
            )}
            <div
              onClick={() => toggleOpen(4)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              <span>
                Analyses physicochimiques des produits laitiers (Lait)
              </span>
              <span>{openIndex === 3 ? "−" : "+"}</span>
            </div>
            {openIndex === 4 && (
              <div
                style={{
                  padding: "10px 20px",
                  borderLeft: "2px solid #1a3d91",
                  marginBottom: "10px",
                }}
              >
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                  <li>Détermination du pH</li>
                  <li>Densité</li>
                  <li>Matières sèches</li>
                  <li>Azote total</li>
                  <li>Azote non protéique</li>
                  <li>Lactose</li>
                  <li>Recherche d’Amidon</li>
                  <li>Matières Grasses</li>
                  <li>Matières Grasses</li>
                  <li>Cendres</li>
                  <li>Acidité  Dornic</li>
                  <li>Test d’alcool</li>
                  <li>Test Réductase</li>
                  <li>Chlorures</li>
                  <li>Sodium</li>
                  <li>Magnésium</li>
                  <li>Phosphore</li>
                  <li>Calcium</li>
                  <li>Calcium</li>
                  <li>Fer</li>
                  <li>Valeur énergétique</li>
                </ul>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div style={{ flex: 1, marginLeft: "10px" }}>
            <div
              onClick={() => toggleOpen(5)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              <span>Fromage</span>
              <span>{openIndex === 4 ? "−" : "+"}</span>
            </div>
            {openIndex === 5 && (
              <div
                style={{
                  padding: "10px 20px",
                  borderLeft: "2px solid #1a3d91",
                  marginBottom: "10px",
                }}
              >
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                  <li>Détermination du pH</li>
                  <li>Acidité titrable</li>
                  <li>Teneur en eau</li>
                  <li>Azote total</li>
                  <li>Azote non protéique</li>
                  <li>Lactose</li>
                  <li>Amidon</li>
                  <li>Matières Grasses</li>
                  <li>Matières Grasses</li>
                  <li>Cendres</li>
                  <li>Chlorures</li>
                  <li>Sodium</li>
                  <li>Magnésium</li>
                  <li>Phosphore</li>
                  <li>Calcium</li>
                  <li>Fer</li>
                  <li>Calcium</li>
                  <li>Valeur énergétique</li>
                </ul>
              </div>
            )}
            <div
              onClick={() => toggleOpen(6)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              <span>Beurre</span>
              <span>{openIndex === 5 ? "−" : "+"}</span>
            </div>
            {openIndex === 6 && (
              <div
                style={{
                  padding: "10px 20px",
                  borderLeft: "2px solid #1a3d91",
                  marginBottom: "10px",
                }}
              >
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                  <li>Détermination du pH de la phase aqueuse</li>
                  <li>Matières sèches</li>
                  <li>Azote total</li>
                  <li>Matières Grasses</li>
                  <li>Matières Grasses</li>
                  <li>Cendres</li>
                  <li>Chlorures</li>
                  <li>Indice d’acide</li>
                  <li>Valeur énergétique</li>
                </ul>
              </div>
            )}
            <div
              onClick={() => toggleOpen(7)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              <span>Analyses physicochimiques des produits de la pêche</span>
              <span>{openIndex === 6 ? "−" : "+"}</span>
            </div>
            {openIndex === 7 && (
              <div
                style={{
                  padding: "10px 20px",
                  borderLeft: "2px solid #1a3d91",
                  marginBottom: "10px",
                }}
              >
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                  <li>ABVT</li>
                  <li>Dioxyde de soufre SO2</li>
                  <li>Activité de l’eau Aw</li>
                  <li>Chlorures</li>
                  <li>Histamine</li>
                  <li>Histamine</li>
                  <li>TMA</li>
                  <li>DMA</li>
                  <li>Mercure</li>
                  <li>Plomb</li>
                  <li>Cadmium</li>
                  <li>pH</li>
                  <li>Stabilité des conserves</li>
                  <li>Sorbates</li>
                  <li>Acide sorbique</li>
                  <li>Benzoates</li>
                  <li>Acide benzoïque </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parametres;
