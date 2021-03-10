import React from 'react';
import './Landing.css';
const LandingCard = ({ title, description, image, source, country }) => {
  return (
    <div className='card'>
      <div>
        <img width='280px' src={image} alt='news card' />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LandingCard;
