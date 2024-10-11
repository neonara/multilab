import React, { useState } from 'react';
import './Article.css'; // You can add the styles to your CSS file
import test from "../home/assets/2654.png"
import test1 from "../home/assets/Actualité 1.jpg"

const Article: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState('path-to-large-image1');

  return (
    <div className="article-container">
      <h1 className="article-title">Nom d'article</h1>
      <p className="article-date">Date</p>

      <div className="main-image-container">
        <img src={selectedImage} alt="Main" className="main-image" />
      </div>

      <div className="thumbnail-container">
        <img
          src={test}
          alt="Thumbnail 1"
          className={`thumbnail ${selectedImage === 'path-to-large-image1' ? 'active' : ''}`}
          onClick={() => setSelectedImage(test)}
        />
        <img
          src={test1}
          alt="Thumbnail 2"
          className={`thumbnail ${selectedImage === 'path-to-large-image2' ? 'active' : ''}`}
          onClick={() => setSelectedImage('path-to-large-image2')}
        />
      </div>
    </div>
  );
};

export default Article;
