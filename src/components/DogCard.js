import React from 'react';

const DogCard = ({ dog }) => {
  // Destructure the 'dog' object to get the properties
  const { name, breed, age, image } = dog;

  return (
    <div>
      <h2>{name}</h2>
      <p>Breed: {breed}</p>
      <p>Age: {age}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default DogCard;
