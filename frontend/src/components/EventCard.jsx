import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, User, Tag } from 'lucide-react';
import './EventCard.css';

const EventCard = ({ event }) => {
  const {
    id,
    title,
    description,
    date,
    time,
    venue,
    category,
    speaker,
    capacity,
    registeredCount,
  } = event;
  const isFull = registeredCount >= capacity;
  const seatsLeft = capacity - registeredCount;

  return (
    <div className="card event-card">
      <div className="event-card-header">
        <span className="event-category">
          <Tag size={14} className="icon" /> {category}
        </span>
        <span className={`event-status ${isFull ? 'status-full' : 'status-open'}`}>
          {isFull ? 'Sold Out' : `${seatsLeft} seats left`}
        </span>
      </div>

      <h3 className="event-title">{title}</h3>
      <p className="event-description">{description.substring(0, 100)}...</p>

      <div className="event-details">
        <div className="detail-item">
          <Calendar size={16} className="icon" />
          <span>{date}</span>
        </div>
        <div className="detail-item">
          <Clock size={16} className="icon" />
          <span>{time}</span>
        </div>
        <div className="detail-item">
          <MapPin size={16} className="icon" />
          <span>{venue}</span>
        </div>
        <div className="detail-item">
          <User size={16} className="icon" />
          <span>{speaker}</span>
        </div>
      </div>

      <div className="event-card-actions">
        <Link to={`/events/${id}`} className="btn-secondary view-details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
