import React from 'react';
import './Services.css';  
import parkingImage from '../assets/parking.jpg'; 
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-left">
        <h1>SharedMiles</h1>
        <button className="ride-button">Find a ride</button>
        <button className="ride-button">Offer a ride</button>
      </div>
      <div className="services-right">
        <img src={parkingImage} alt="Parking" />
      </div>
    </div>
  );
}

export default Services;