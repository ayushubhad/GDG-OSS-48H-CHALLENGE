import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Discover what's happening in your tech community.</h1>
        <p className="hero-subtitle">
          Join workshops, seminars, and networking sessions to learn, connect, and grow.
        </p>
        <a href="#events" className="btn-primary hero-btn">
          Explore Events
        </a>
      </div>
      <div className="hero-visual">
        <div className="visual-circle circle-1"></div>
        <div className="visual-circle circle-2"></div>
        <div className="visual-circle circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;
