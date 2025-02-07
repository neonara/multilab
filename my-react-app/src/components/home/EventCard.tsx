import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import calendarIcon from "@/assets/icons/icon-calendar.svg";

interface EventCardProps {
    imgSrc: string;
    date: string;
    description: string;
    id?: number;
}

export const EventCard: FC<EventCardProps> = ({ imgSrc, date, description, id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (id) {
            navigate(`/article/${id}`);
        }
    };

    return (
        <div className="project-card">
            <img
                src={imgSrc}
                alt={description}
                className="project-image"
            />
            <div className="project-info">
                <div className="project-content">
                    <div className="project-date">
                        <img src={calendarIcon} alt="Calendar Icon" /> {date}
                    </div>
                    <p className="project-description">{description}</p>
                    <p 
                        onClick={handleClick}
                        className="project-link"
                    >
                        Lire la suite
                    </p>
                </div>
            </div>
        </div>
    );
};