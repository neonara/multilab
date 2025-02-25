import laitImage from "@/assets/images/19.jpg";
import viandeImage from "@/assets/images/20.jpg";
import pecheImage from "@/assets/images/21.png";
import hotelImage from "@/assets/images/22.jpg";
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
import { useState, useRef, useCallback } from "react";

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
      label: "Conditionnement des produits alimentaires  ",
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideToIndex = useCallback(
    (index: number) => {
      if (!sliderRef.current) return;

      const sliderWidth = sliderRef.current.offsetWidth;
      const slidesVisible = sliderWidth / 355;
      const maxIndex = clients.length - slidesVisible;
      const newIndex = Math.max(0, Math.min(index, maxIndex));

      setCurrentIndex(newIndex);

      sliderRef.current.style.transform = `translateX(-${newIndex * 355}px)`;
      sliderRef.current.style.transition = "transform 0.3s ease-out";
    },
    [clients.length]
  );

  const slidePrev = useCallback(() => {
    slideToIndex(currentIndex - 1);
  }, [currentIndex, slideToIndex]);

  const slideNext = useCallback(() => {
    slideToIndex(currentIndex + 1);
  }, [currentIndex, slideToIndex]);

  return (
    <div className="carousel-container">
      <div className="clients-grid" id="carousel" ref={sliderRef}>
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
          onClick={slidePrev}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          className="arrow-button right swiper-but-next"
          onClick={slideNext}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
