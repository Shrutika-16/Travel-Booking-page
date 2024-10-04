import React from 'react';
import './Footer.css'; // Custom styling for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 GlobeTrek. All rights reserved.</p>
      <p>
        Follow us on
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>, and
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>.
      </p>
    </footer>
  );
};

export default Footer;
