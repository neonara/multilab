import { useState } from "react";
import "../App.css";
import logo from "../assets/logo.png";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';

interface NavBarProps {
  navItems: { name: string; subItems?: string[] }[];
}

function NavBar({ navItems }: NavBarProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    // Add logic to handle language change, e.g., updating the app's locale
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
      <div className="container-fluid d-flex align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="#">
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className={`nav-item ${item.subItems ? "dropdown" : ""}`}
                onClick={() => setSelectedIndex(index)}
              >
                {item.subItems ? (
                  <>
                    <a
                      className={`nav-link dropdown-toggle ${
                        selectedIndex === index ? "fw-bold" : ""
                      }`}
                      href="#"
                      id={`navbarDropdown${index}`}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        color: selectedIndex === index ? "#0056b3" : "#000000",
                        fontSize: "16px",
                      }}
                    >
                      {item.name}
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby={`navbarDropdown${index}`}
                    >
                      {item.subItems.map((subItem) => (
                        <li key={subItem}>
                          <a className="dropdown-item" href="#">
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    className={`nav-link ${
                      selectedIndex === index ? "fw-bold" : ""
                    }`}
                    href="#"
                    style={{
                      color: selectedIndex === index ? "#0056b3" : "#000000",
                      fontSize: "16px",
                    }}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
 <li className="nav-item">
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link dropdown-toggle'>
                  Prestations
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>analyses</MDBDropdownItem>
                  <MDBDropdownItem link>Assistance et audit</MDBDropdownItem>
                  <MDBDropdownItem link>Formations</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </li>
            {/* Language Selector with Icons */}
            <li className="nav-item ms-3">
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link dropdown-toggle'>
                  <i className="bi bi-globe"></i> {selectedLanguage}
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link onClick={() => handleLanguageChange("En")}>
                    <i className="bi bi-flag-us"></i> English
                  </MDBDropdownItem>
                  <MDBDropdownItem link onClick={() => handleLanguageChange("Fr")}>
                    <i className="bi bi-flag-fr"></i> French
                  </MDBDropdownItem>
                  {/* Add more language options with icons here */}
                </MDBDropdownMenu>
              </MDBDropdown>
            </li>

            {/* MDB Dropdown Example */}
           
          </ul>

          <form className="d-flex ms-3">
            <button className="btn btn-outline-secondary" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
