
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
      <div className="logo"><h1>GlobeTrek</h1></div>
      <nav>
        <ul className="nav-links">
          <li><a href="#destinations" className={activeLink === 'destinations' ? 'active' : ''} onClick={() => handleSetActive('destinations')}>Destinations</a></li>
          <li><a href="#booking" className={activeLink === 'booking' ? 'active' : ''} onClick={() => handleSetActive('booking')}>Book Now</a></li>
          <li><a href="#deals" className={activeLink === 'deals' ? 'active' : ''} onClick={() => handleSetActive('deals')}>Deals</a></li>
          <li><a href="#activities" className={activeLink === 'activities' ? 'active' : ''} onClick={() => handleSetActive('activities')}>Activities</a></li>
          <li><a href="#guides" className={activeLink === 'guides' ? 'active' : ''} onClick={() => handleSetActive('guides')}>Guides</a></li>
          <li><a href="#reviews" className={activeLink === 'reviews' ? 'active' : ''} onClick={() => handleSetActive('reviews')}>Reviews</a></li>
      </ul>
      </nav>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">Search</button>
      </div>
    </header>
  );
};

export default Header;

