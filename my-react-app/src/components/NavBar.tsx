import { useState } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import logo from "../assets/logo.png";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

function NavBar() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language); // Change language across the entire app
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow ">
      <div className="container-fluid d-flex align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={logo}
            alt="Multilab Logo"
            width="150"
            height="auto"
            className="d-inline-block align-center"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                {t("Accueil")} {/* Translated Home */}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/apropos">
                {t("À propos")} {/* Translated About */}
              </a>
            </li>

            {/* Prestations Dropdown */}
            <li className="nav-item">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link dropdown-toggle">
                  {t("Prestations")}
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href="/analyse">
                    {t("Analyses")}
                  </MDBDropdownItem>
                  <MDBDropdownItem link href="/assistance">
                    {t("Assistance et audit")}
                  </MDBDropdownItem>
                  <MDBDropdownItem link href="/formation">
                    {t("Formations")}
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </li>

            {/* Carrière Dropdown */}
            <li className="nav-item">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link dropdown-toggle">
                  {t("Carrière")}
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href="/poste ">
                    {t("Les offres d'emploi")}
                  </MDBDropdownItem>
                  <MDBDropdownItem link href="/condidature">
                    {t("Candidatures spontanées")}
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/login">
                {t("Accès client")} {/* Translated Client Access */}
              </a>
            </li>
            <li className="nav-item">
              <a className  ="nav-link" href="/contact">
                {t("Contact")} {/* Translated Contact */}
              </a>
            </li>

            {/* Language Selector */}
            <li className="nav-item ms-3">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link dropdown-toggle">
                  <i className="bi bi-globe"></i> {selectedLanguage}
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link onClick={() => handleLanguageChange("en")}>
                    <i className="bi bi-flag-us"></i> English
                  </MDBDropdownItem>
                  <MDBDropdownItem link onClick={() => handleLanguageChange("fr")}>
                    <i className="bi bi-flag-fr"></i> Français
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

