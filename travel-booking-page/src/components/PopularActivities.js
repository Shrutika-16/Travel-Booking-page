import React from 'react';
import './PopularActivities.css';

const activities = [
    {
      title: 'Scuba Diving in Bali',
      img: './images/scuba.jpg',
      description: 'Explore the underwater world with expert divers in Bali.',
    },
    {
      title: 'Safari in Kenya',
      img: './images/safari.jpg',
      description: 'Witness the Big Five on a thrilling safari adventure in Kenya.',
    },
    {
      title: 'Hot Air Balloon Ride in Cappadocia',
      img: './images/balloon.jpg',
      description: 'Soar over the unique landscape of Cappadocia in a hot air balloon.',
    }
  ];

const PopularActivities = () => {
  return (
    <section id="activities">
      <h2>Popular Activities</h2>
      <div className="activities-container">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <img src={activity.img} alt={activity.title} />
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularActivities;
