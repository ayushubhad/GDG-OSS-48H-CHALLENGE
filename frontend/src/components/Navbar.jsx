import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoOrHomeClick = (e) => {
    e.preventDefault();
    // Navigate to Home, trigger reset of search/filters, and smooth scroll to top
    navigate('/', {
      state: { resetToInitial: true, refresh: Date.now() },
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEventsClick = (e) => {
    e.preventDefault();
    navigate('/', {
      state: { scrollToEvents: true, refresh: Date.now() },
    });

    if (location.pathname === '/') {
      const eventsSection = document.getElementById('events');
      if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" onClick={handleLogoOrHomeClick} className="navbar-logo">
          <span className="logo-text">Event Hub</span>
        </Link>
        <div className="nav-links">
          <Link to="/" onClick={handleLogoOrHomeClick} className="nav-link">
            Home
          </Link>
          <a href="#events" onClick={handleEventsClick} className="nav-link">
            Events
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;