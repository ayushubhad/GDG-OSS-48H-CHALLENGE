import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, User, Users, Tag } from 'lucide-react';
import { getEventById } from '../services/api';
import LoadingState from '../components/LoadingState';
import ErrorState from '../components/ErrorState';
import RegistrationForm from '../components/RegistrationForm';
import './EventPage.css';

const EventPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const LOADER_DELAY = import.meta.env.MODE === 'test' ? 0 : 1000;
  const fetchEvent = async (showLoading = true) => {
    try {
      if (showLoading) setLoading(true);
      setError(null);
      const [data] = await Promise.all([
        getEventById(id),
        showLoading ? new Promise((resolve) => setTimeout(resolve, LOADER_DELAY)) : Promise.resolve(),
      ]);
      setEvent(data);
    } catch (err) {
      setError(err.response?.status === 404 ? 'Event not found' : 'Failed to load event details');
    } finally {
      if (showLoading) setLoading(false);
    }
  };
  useEffect(() => {
    fetchEvent(true);
  }, [id]);

  if (loading) return <LoadingState />;

  if (error)
    return (
      <div className="event-page-error">
        <ErrorState message={error} />
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link to="/" className="btn-primary">
            Return to Events
          </Link>
        </div>
      </div>
    );

  if (!event) return null;

  const isFull = event.registeredCount >= event.capacity;
  const seatsLeft = event.capacity - event.registeredCount;

  return (
    <div className="event-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        Back to Events
      </Link>

      <div className="event-layout">
        <div className="event-main-details">
          <div className="event-badge">
            <Tag size={16} /> {event.category}
          </div>

          <h1 className="event-page-title">{event.title}</h1>

          <div className="event-meta-grid">
            <div className="meta-item">
              <Calendar className="icon" />
              <div>
                <strong>Date</strong>
                <p>{event.date}</p>
              </div>
            </div>
            <div className="meta-item">
              <Clock className="icon" />
              <div>
                <strong>Time</strong>
                <p>{event.time}</p>
              </div>
            </div>
            <div className="meta-item">
              <MapPin className="icon" />
              <div>
                <strong>Venue</strong>
                <p>{event.venue}</p>
              </div>
            </div>
            <div className="meta-item">
              <User className="icon" />
              <div>
                <strong>Speaker</strong>
                <p>{event.speaker}</p>
              </div>
            </div>
            <div className="meta-item">
              <Users className="icon" />
              <div>
                <strong>Capacity</strong>
                <p>
                  {event.registeredCount} / {event.capacity} registered
                </p>
              </div>
            </div>
          </div>

          <div className="event-description-box">
            <h2>About this Event</h2>
            <p>{event.description}</p>
          </div>
        </div>

        <div className="event-sidebar">
          <div className="card registration-card">
            {isFull ? (
              <div className="sold-out-message">
                <h3>Sold Out</h3>
                <p>This event has reached its maximum capacity of {event.capacity} attendees.</p>
              </div>
            ) : (
              <>
                <div className="availability">
                  <span className="seats-badge">{seatsLeft} seats left</span>
                </div>
                <RegistrationForm
                  eventId={event.id}
                  onSuccess={() => {
                    fetchEvent(false);
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
