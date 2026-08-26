import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Event Hub</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#events" className="nav-link">Events</a>
          <a href="#about" className="nav-link">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
