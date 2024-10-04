import React from 'react';
import './TravelGuides.css';

const guides = [
    {
      title: 'Ultimate Travel Guide to Europe',
      img: './images/europe-guide.jpg',
      description: 'Plan your European adventure with tips, itineraries, and travel hacks.',
    },
    {
      title: 'Exploring Southeast Asia',
      img: './images/asia-guide.jpg',
      description: 'A complete guide to Southeast Asia, from Thailand to Vietnam.',
    },
    {
      title: 'Backpacking in South America',
      img: './images/south-america-guide.jpg',
      description: 'Everything you need to know about backpacking through South America.',
    }
  ];
  
  const TravelGuides = () => {
    return (
      <section id="guides">
        <h2>Travel Guides</h2>
        <div className="guides-container">
          {guides.map((guide, index) => (
            <div key={index} className="guide-card">
              <img src={guide.img} alt={guide.title} />
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TravelGuides;
  
