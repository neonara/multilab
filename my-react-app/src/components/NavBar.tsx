import { useState } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import logo from "../assets/logo.png";
import { IoMdSearch, IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md"; // Import expand icon
import "../App.css";
import arrowDown from "@/assets/icons/icon-arrow-down.svg";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

function NavBar() {
  const { t, i18n } = useTranslation();
  console.log(i18n);

  // const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search popup
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null); // State for accordion

  // const handleLanguageChange = (language: string) => {
  //   setSelectedLanguage(language);
  //   i18n.changeLanguage(language);
  //   console.log(selectedLanguage);
  //   // Change language across the entire app
  // };

  const getNavLinkClass = (path: string) => {
    return window.location.pathname === path ? "nav-link active" : "nav-link";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm ">
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
          <div className="d-flex gap-2">
            <button
              className="search-btn-mobile"
              onClick={() => setIsSearchOpen(true)}
            >
              <IoMdSearch className="search-icon" />
            </button>
            <button
              className="menu-toggler"
              type="button"
              onClick={toggleMobileMenu}
            >
              <FiMenu className="menu-toggler-icon" />
            </button>
          </div>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={getNavLinkClass("/")} href="/">
                  {t("Accueil")} {/* Translated Home */}
                </a>
              </li>
              <li className="nav-item">
                <a className={getNavLinkClass("/apropos")} href="/apropos">
                  {t("À propos")} {/* Translated About */}
                </a>
              </li>

              {/* Prestations Dropdown */}
              <li className="nav-item">
                <MDBDropdown>
                  <MDBDropdownToggle
                    tag="a"
                    className="nav-link d-flex align-items-center"
                  >
                    {t("Prestations")}
                    <img
                      src={arrowDown}
                      alt="Arrow Down"
                      className="dropdown-arrow"
                    />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link href="/analyse">
                      {t("Analyses")}
                    </MDBDropdownItem>
                    <MDBDropdownItem link href="/assistance">
                      {t("Assistance et conseil")}
                    </MDBDropdownItem>
                    <MDBDropdownItem link href="/formation">
                      {t("Formation")}
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </li>

              {/* Carrière Dropdown */}
              <li className="nav-item">
                <MDBDropdown>
                  <MDBDropdownToggle
                    tag="a"
                    className="nav-link d-flex align-items-center"
                  >
                    {t("Carrière")}
                    <img
                      src={arrowDown}
                      alt="Arrow Down"
                      className="dropdown-arrow"
                    />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link href="/poste ">
                      {t("Les offres d'emploi")}
                    </MDBDropdownItem>
                    <MDBDropdownItem link href="/candidature">
                      {t("Candidatures spontanées")}
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </li>

              <li className="nav-item">
                <a
                  className={getNavLinkClass("/login")}
                  href="https://multilab-tunisia.com.tn/MULTILAB/login_view"
                >
                  {t("Accès client")} {/* Translated Client Access */}
                </a>
              </li>
              <li className="nav-item">
                <a className={getNavLinkClass("/contact")} href="/contact">
                  {t("Contact")} {/* Translated Contact */}
                </a>
              </li>

              {/* Language Selector */}
              {/* <li className="nav-item">
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link">
                    <i className="bi bi-globe"></i> {selectedLanguage}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem
                      link
                      onClick={() => handleLanguageChange("en")}
                    >
                      <i className="bi bi-flag-us"></i> English
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      link
                      onClick={() => handleLanguageChange("fr")}
                    >
                      <i className="bi bi-flag-fr"></i> Français
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </li> */}
              <li
                className="search-btn ms-2"
                onClick={() => setIsSearchOpen(true)}
              >
                <IoMdSearch className="search-icon" />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mobile-menu shadow-sm">
          <a href="/" onClick={toggleMobileMenu}>
            {t("Accueil")}
          </a>
          <a href="/apropos" onClick={toggleMobileMenu}>
            {t("À propos")}
          </a>

          {/* Prestations Accordion */}
          <div className="accordion1">
            <div className="accordion-item">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion("prestations")}
              >
                {t("Prestations")}
                <MdExpandMore
                  className={`expand-icon ${
                    activeAccordion === "prestations" ? "rotate" : ""
                  }`}
                />
              </div>
              <div
                className={`accordion-content ${
                  activeAccordion === "prestations" ? "show" : ""
                }`}
              >
                <a href="/analyse" onClick={toggleMobileMenu}>
                  {t("Analyses")}
                </a>
                <a href="/assistance" onClick={toggleMobileMenu}>
                  {t("Assistance et conseil")}
                </a>
                <a href="/formation" onClick={toggleMobileMenu}>
                  {t("Formations")}
                </a>
              </div>
            </div>
          </div>

          {/* Carrière Accordion */}
          <div className="accordion1">
            <div className="accordion-item">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion("carriere")}
              >
                {t("Carrière")}
                <MdExpandMore
                  className={`expand-icon ${
                    activeAccordion === "carriere" ? "rotate" : ""
                  }`}
                />
              </div>
              <div
                className={`accordion-content ${
                  activeAccordion === "carriere" ? "show" : ""
                }`}
              >
                <a href="/poste" onClick={toggleMobileMenu}>
                  {t("Les offres d'emploi")}
                </a>
                <a href="/candidature" onClick={toggleMobileMenu}>
                  {t("Candidatures spontanées")}
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://multilab-tunisia.com.tn/MULTILAB/login_view"
            onClick={toggleMobileMenu}
          >
            {t("Accès client")}
          </a>
          <a href="/contact" onClick={toggleMobileMenu}>
            {t("Contact")}
          </a>

          {/* Language Selector */}

          {/* <div className="accordion1">
            <div className="accordion-item">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion("langue")}
              >
                {t("Langue")}
                <MdExpandMore
                  className={`expand-icon ${
                    activeAccordion === "langue" ? "rotate" : ""
                  }`}
                />
              </div>
              <div
                className={`accordion-content ${
                  activeAccordion === "langue" ? "show" : ""
                }`}
              >
                <a
                  onClick={() => {
                    handleLanguageChange("en");
                    toggleMobileMenu();
                  }}
                >
                  English
                </a>
                <a
                  onClick={() => {
                    handleLanguageChange("fr");
                    toggleMobileMenu();
                  }}
                >
                  Français
                </a>
              </div>
            </div>
          </div> */}
        </div>
      )}

      {isSearchOpen && (
        <div className="search-popup">
          <div className="search-popup-content">
            <IoMdSearch className="search-icon" />
            <input type="text" placeholder={t("Rechercher ...")} />
            <IoMdClose
              className="search-icon"
              onClick={() => setIsSearchOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
