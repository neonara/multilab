import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/home/Home";
import Apropos from "./components/apropos/apropos"; // Import the Apropos component
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Make sure you have Bootstrap Icons
import "./App.css";
import Contact from "./components/Contact/Contact";
import Formation from "./components/formation/Formation";
import Poste from "./components/Poste/poste";
import Analyses from "./components/Analyses/Analyses";
import Test from "./components/analyse/test";
import Condidature from "./components/Contact/Condidatures";
import Article from "./components/Article/Article";
import Assistance from "./components/Assistance/Assistance";
import Physicochimiques from "./components/Parametres/Physicochimiques";
import Microbiologie from "./components/Parametres/Microbiologie";
import Paramanalyse from "./components/Parametres/ParametreAnalyses";

import Video from "./components/home/Video";
import Login from "./components/Login/Login";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";

function App() {
  const [showButton, setShowButton] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="d-flex flex-column min-vh-100 w-[100vw]">
      <NavBar />
      <button
        className={`scroll-to-top ${showButton ? "show center" : ""}`}
        onClick={scrollToTop}
      >
        {/* <FontAwesomeIcon icon={faArrowUp} /> */}
        <IoIosArrowUp className="icon" />
      </button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/apropos" element={<Apropos />}></Route> // Add the route
          for the Apropos component
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/Formation" element={<Formation />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Poste" element={<Poste />}></Route>
          <Route path="/Analyse" element={<Analyses />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/condidature" element={<Condidature />}></Route>
          <Route path="/article" element={<Article />}></Route>
          <Route path="/assistance" element={<Assistance />}></Route>
          <Route path="/parametre" element={<Physicochimiques />}></Route>
          <Route path="/Physicochimiques" element={<Microbiologie />}></Route>
          <Route path="/Video" element={<Video />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/param-danalyse" element={<Paramanalyse />}></Route>
        </Routes>
      </BrowserRouter>
      {/* Other content can go here */}
      <Footer />
    </div>
  );
}

export default App;
