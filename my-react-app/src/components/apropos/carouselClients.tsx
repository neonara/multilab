import laitImage from "@/assets/images/19.jpg";
import viandeImage from "@/assets/images/20.jpg";
import pecheImage from "@/assets/images/21.png";
import hotelImage from "@/assets/images/22-1.jpg";
import Conditionnement from "@/assets/images/19-1.jpg";
import Pâtisserie from "@/assets/images/23.jpg";
import distribution from "@/assets/images/24.jpg";
import ServHygiènes from "@/assets/images/25.jpg";
import Eaux from "@/assets/images/26.jpg";
import Nutrition from "@/assets/images/64.png";
import Fruits from "@/assets/images/28.jpg";
import gras from "@/assets/images/29.jpg";
import pharmaceutiques from "@/assets/images/30.jpg";
import cosmétiques from "@/assets/images/31.jpg";
import Laboratoires from "@/assets/images/32.jpg";
import conseil from "@/assets/images/33.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

export default function CarouselClients() {
  const clients = [
    { image: laitImage, label: "Lait et dérivés" },
    { image: viandeImage, label: "Viande de boucherie <br> et volailles" },
    { image: pecheImage, label: "La pêche" },
    {
      image: hotelImage,
      label: "Hôtellerie, restauration <br> et cliniques",
    },
    {
      image: Conditionnement,
      label: "Lait et conditionnement des produits alimentaires  ",
    },
    { image: Pâtisserie, label: "Pâtisserie confiserie" },
    { image: distribution, label: "La grande distribution" },
    { image: ServHygiènes, label: "Services d’hygiène" },
    { image: Eaux, label: "Eaux" },
    { image: Nutrition, label: "Nutrition animale" },
    { image: Fruits, label: "Fruits et Légumes" },
    { image: gras, label: "Produits gras" },
    {
      image: pharmaceutiques,
      label: "Produits pharmaceutiques <br> et Parapharmaceutiques",
    },
    { image: cosmétiques, label: "Produits hygiènes & cosmétiques" },
    { image: Laboratoires, label: "Laboratoires" },
    { image: conseil, label: "Bureaux de conseil" },
  ];

  const [index, setIndex] = useState(0);
  const scrollAmount = 310;
  const visibleImages = 4;
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollPrev = () => {
    const carousel = carouselRef.current;
    if (index >= 0) {
      setIndex(index - 1);
      if (carousel) {
        carousel.style.transform = `translateX(${-index * scrollAmount}px)`;
      }
    }
  };

  const scrollNext = () => {
    const carousel = carouselRef.current;
    const images = carousel ? carousel.children.length : 0;
    if (index <= images - visibleImages) {
      setIndex(index + 1);
      if (carousel) {
        carousel.style.transform = `translateX(${-index * scrollAmount}px)`;
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const carousel = carouselRef.current;
    if (carousel) {
      isDragging.current = true;
      startX.current = e.pageX - carousel.offsetLeft;
      scrollLeft.current = carousel.scrollLeft;
      carousel.classList.add("active");
    }
  };

  const handleMouseLeave = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      isDragging.current = false;
      carousel.classList.remove("active");
    }
  };

  const handleMouseUp = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      isDragging.current = false;
      carousel.classList.remove("active");
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const carousel = carouselRef.current;
    if (!isDragging.current || !carousel) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX.current) * 2; //scroll-fast
    carousel.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="carousel-container">
      <div
        className="clients-grid"
        id="carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {clients.map((client, index) => (
          <div key={index} className="clients-card">
            <div className="image-wrapper">
              <img
                src={client.image}
                alt={client.label}
                className="clients-image"
              />
            </div>
            <div className="clients-content">
              <h3
                className="clients-title"
                dangerouslySetInnerHTML={{ __html: client.label }}
              ></h3>
            </div>
          </div>
        ))}
      </div>

      <div className="arrow-buttons">
        <button
          className="arrow-button left swiper-but-prev"
          onClick={scrollPrev}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          className="arrow-button right swiper-but-next"
          onClick={scrollNext}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
