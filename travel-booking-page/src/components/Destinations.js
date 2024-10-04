import React from 'react';
import './Destinations.css';

const destinations = [
    {
      title: 'Bali, Indonesia',
      img: './images/bali.jpeg',
      description: 'Beautiful beaches and vibrant culture.',
    },
    {
      title: 'Paris, France',
      img: './images/paris.jpg',
      description: 'The city of love with stunning architecture.',
    },
    {
      title: 'New York, USA',
      img: './images/nyc.jpeg',
      description: 'The city that never sleeps with endless activities.',
    },
    {
      title: 'Tokyo, Japan',
      img: './images/tokyo.jpg',
      description: 'A blend of traditional and modern experiences.',
    },
    {
      title: 'Sydney, Australia',
      img: './images/sydney.jpg',
      description: 'Famous for its Sydney Opera House and stunning harbor.',
    },
    {
      title: 'Rome, Italy',
      img: './images/rome.jpeg',
      description: 'Rich history and delicious cuisine.',
    },
    {
      title: 'Cape Town, South Africa',
      img: './images/capetown.jpeg',
      description: 'Beautiful landscapes and vibrant culture.',
    },
    {
      title: 'London, UK',
      img: './images/london.jpg',
      description: 'A city rich in history and modern attractions.',
    },
    {
      title: 'Istanbul, Turkey',
      img: './images/istanbul.jpeg',
      description: 'A city that bridges Europe and Asia with unique charm.',
    },
    {
      title: 'Bangkok, Thailand',
      img: './images/bangkok.jpg',
      description: 'Known for its ornate shrines and vibrant street life.',
    },
    {
      title: 'Santorini, Greece',
      img: './images/santorini.jpg',
      description: 'Famous for its stunning sunsets and whitewashed buildings.',
    },
    {
      title: 'Dubai, UAE',
      img: './images/dubai.jpg',
      description: 'Known for luxury shopping and ultramodern architecture.',
    }
  ];
  

const Destinations = () => {
  return (
    <section id="destinations">
      <h2>Popular Destinations</h2>
      <div className="destinations-container">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.img} alt={destination.title} />
            <h3>{destination.title}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
