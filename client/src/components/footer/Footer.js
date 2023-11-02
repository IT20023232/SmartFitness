// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="blue-footer">
      <div className="social-links">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <p>&copy; 2023 Smart Fitness</p>
      <p className="footer-description">
        This is a demo React application with a blue-colored footer. You can customize this as needed.
      </p>
    </footer>
  );
};

export default Footer;
