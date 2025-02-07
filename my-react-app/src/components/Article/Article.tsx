import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EventMULTILAB } from "../../types/types";
import api from "../../lib/api";
import { formatDate } from "../../utils/dateFormatter";
import "./EventDetail.css";

const Article: React.FC = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<EventMULTILAB | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchEventDetail = async () => {
      try {
        const response = await api.get(`/events/${id}`);
        setEvent(response.data);
        // Set the main event image as the initial selected image
        setSelectedImage(response.data.image);
      } catch (error) {
        console.error("Error fetching event detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetail();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!event) {
    return <div className="error">Event not found</div>;
  }

  // Gather all available images for the gallery
  const allImages = [
    event.image,
    ...(event.articles?.flatMap(article => 
      [article.image1, article.image2, article.image3].filter(Boolean) as string[]
    ) ?? [])
  ];

  return (
    <div className="event-detail-container">
      <h1 className="event-title">{event.title}</h1>
      <p className="event-date">{formatDate(event.date_event)}</p>

      <div className="gallery-container">
        <div className="main-image-container">
          <img 
            src={selectedImage || event.image} 
            alt={event.title}
            className="main-image" 
          />
        </div>

        {allImages.length > 1 && (
          <div className="thumbnail-container">
            {allImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${event.title} - Image ${index + 1}`}
                className={`thumbnail ${selectedImage === image ? "active" : ""}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="event-content">
        <p className="event-description">{event.description}</p>

        {event.articles && event.articles.length > 0 && (
          <div className="event-articles">
            <h2>Articles liés à l'événement</h2>
            {event.articles.map((article, index) => (
              <div key={index} className="article-container">
                <p className="article-description">{article.description}</p>
                <p className="article-date">
                  Publié le {formatDate(article.created_at)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;