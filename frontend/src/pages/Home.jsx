import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import LoadingState from '../components/LoadingState';
import ErrorState from '../components/ErrorState';
import { getEvents } from '../services/api';
import './Home.css';

const CATEGORIES = [
  'All',
  'Open Source',
  'AI / ML',
  'Web Development',
  'Cloud',
  'Cybersecurity',
  'App Development',
  'DevOps',
  'Blockchain',
];

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getEvents();
      setEvents(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch events');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.speaker.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="home">
      <Hero />

      <section id="events" className="events-section">
        <div className="events-header">
          <h2>Upcoming Events</h2>
          <p>Find the perfect event to enhance your skills and network.</p>
        </div>

        <div className="events-controls">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CategoryFilter
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {loading && <LoadingState />}

        {!loading && error && <ErrorState message={error} onRetry={fetchEvents} />}

        {!loading && !error && (
          <>
            {filteredEvents.length === 0 ? (
              <div className="no-results">
                <h3>No events found</h3>
                <p>Try adjusting your search or filters.</p>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  style={{ marginTop: '1rem' }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="events-grid">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
