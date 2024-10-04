import React from 'react';
import './Reviews.css';

const reviews = [
  {
    name: 'John Doe',
    location: 'Los Angeles, USA',
    rating: 5,
    comment: 'Amazing experience! The booking process was smooth, and the destination was breathtaking.',
    img: './images/johndoe.jpg',
  },
  {
    name: 'Maria Smith',
    location: 'London, UK',
    rating: 4,
    comment: 'Great service and wonderful places. I will definitely use it again!',
    img: './images/mariasmith.jpg',
  },
  {
    name: 'Ali Khan',
    location: 'Dubai, UAE',
    rating: 5,
    comment: 'Fantastic! Everything was well-organized and exceeded my expectations.',
    img: './images/alikhan.jpg',
  },
  // Add more reviews as needed
];

const Reviews = () => {
  return (
    <section id="reviews">
      <h2>User Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.img} alt={review.name} className="reviewer-img" />
            <h3>{review.name}</h3>
            <p className="location">{review.location}</p>
            <div className="rating">{'⭐'.repeat(review.rating)}</div>
            <p className="comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
