import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Make sure you have Bootstrap Icons
import imagePath from "./assets/logo.png";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import Product from "./components/product";

function App() {
    const items = [
    { name: "Accueil", href: "/"},
    { name: "À propos" },
    { name: "Product", subItems: ["Sub Product 1", "Sub Product 2"] },
      
    { name: "Prestations" , href:"/product" },
    { name: "Carrière" },
    { name: "Accès client" },
    { name: "Contact" },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar 
        navItems={items}
      />
      <BrowserRouter>
      <Routes>
      <Route path ="/" element={<HomePage />}></Route>
      <Route path ="/product" element={<Product />}></Route>

      </Routes>
      </BrowserRouter>
      {/* Other content can go here */}
      <Footer />
    </div>
  );
}

export default App;
