import React from 'react';

const Single = ({ title, author, description, image, country, source }) => {
  return (
    <div className='single__card'>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>{author}</h3>
        <h2>Source : {source}</h2>
      </div>
      <div>
        <img width='500px' src={image} alt='news' />
      </div>
    </div>
  );
};

export default Single;
