import "../App.css";
import logo from "../assets/logo VF.png";

function Footer() {
  return (
    <footer className="text-dark py-4 mt-auto">
      <div className="container-f">
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src={logo}
              alt="Multilab Logo"
              className="d-inline-block align-center"
            />
            <p>Laboratoire d'analyse agroalimentaire et environnement.</p>
            <p>
              <strong>Nous sommes ouverts :</strong>
            </p>
            <p>Du lundi au vendredi de 08h00 à 17h00</p>
            <p>Samedi de 08h00 à 13h00</p>
          </div>

          {/* Menu en trois colonnes */}
          <div className="col-md-4 mb-3">
            <h5>Menu</h5>
            <div className="menu-container">
              <div className="menu-column">
                <ul className="list-unstyled">
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
                <ul className="list-unstyled">
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
              <div className="menu-column">
                <ul className="list-unstyled"></ul>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>
              <i className="bi bi-telephone-fill"></i> (+216) 71 941 436 / 22
              344 976
            </p>
            <p>
              <i className="bi bi-geo-alt-fill"></i> Rue de l’argent, Zone
              industrielle el bosten, Soukra - Ariana
            </p>
            <p>
              <i className="bi bi-envelope-fill"></i> multilab@planet.tn
            </p>
            <h5>Suivez-nous</h5>
            <a href="https://facebook.com" className="me-3 text-dark">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://linkedin.com" className="text-dark">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
