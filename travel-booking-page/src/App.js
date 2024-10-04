import React from 'react';
import './App.css';
import Header from './components/Header';
import Destinations from './components/Destinations';
import FeaturedDeals from './components/FeaturedDeals';
import PopularActivities from './components/PopularActivities';
import TravelGuides from './components/TravelGuides';
import BookingForm from './components/BookingForm';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Destinations />
      <FeaturedDeals />
      <PopularActivities />
      <TravelGuides />
      <BookingForm />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
