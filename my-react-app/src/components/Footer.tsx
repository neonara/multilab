import "../App.css";
import logo from "../assets/logo VF.png";
import { FiPhoneCall } from "react-icons/fi";

import { MdOutlineMail } from "react-icons/md";
import fbIcon from "@/assets/icons/icon-facebook.png";
import InIcon from "@/assets/icons/icon-linkedin.png";
import { IoLocationOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-f">
        <div className="firstone">
          <img src={logo} alt="Multilab Logo" className="footer-logo" />
          <p>
            Laboratoire d'analyse agroalimentaire{" "}
            <br className="et-back-to-line2" />
            et environnement.
          </p>
          <h5 className="text">Nous sommes ouverts :</h5>
          <p>
            Du lundi au vendredi de 08h00 à 17h00{" "}
            <div>Samedi de 08h00 à 13h00</div>
          </p>
        </div>

        <div className="secondone">
          <h5>Menu</h5>
          <div className="menu-container">
            <div className="menu-column">
              <ul>
                <li>
                  <a href="/" className="text-dark">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="apropos" className="text-dark">
                    A propos
                  </a>
                </li>
                <li>
                  <a href="product" className="text-dark">
                    Prestation
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu-column">
              <ul>
                <li>
                  <a href="#" className="text-dark">
                    Carrière
                  </a>
                </li>
                <li>
                  <a href="Formation" className="text-dark">
                    Accès client
                  </a>
                </li>
                <li>
                  <a href="contact" className="text-dark">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="thirdone">
          <div className="footer-contact">
            <h5>Contact</h5>
            <p>
              <FiPhoneCall className="social-icon" /> (+216) 71 941 436 / 22 344
              976
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <IoLocationOutline
                className="social-icon"
                style={{ fontSize: "26px" }}
              />{" "}
              <p>
                Rue de l’argent, Zone industrielle el bosten, Soukra - Ariana
              </p>
            </div>

            <p>
              <MdOutlineMail className="social-icon" /> multilab@planet.tn
            </p>
          </div>
          <div className="social-icons">
            <h5>Suivez-nous</h5>
            <a
              href="https://www.facebook.com/Multilab.sa/"
              className="me-3 text-dark"
            >
              <img src={fbIcon} alt="facebook" className="social-icon" />
            </a>
            <a
              href="https://tn.linkedin.com/in/multilab-s-a-b1978870"
              className="text-dark"
            >
              <img src={InIcon} alt="facebook" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
