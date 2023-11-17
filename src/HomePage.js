import React, { useState, useEffect } from 'react';
import { searchDogs, getDogBreeds } from './api'; // Importing API functions
import DogCard from './DogCard';

const HomePage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');

  // Fetch all possible dog breeds when the component mounts
  useEffect(() => {
    const fetchBreeds = async () => {
      const breedData = await getDogBreeds();
      if (breedData) {
        setBreeds(breedData);
      }
    };

    fetchBreeds();
  }, []);

  const handleSearch = async () => {
    // Prepare query parameters based on selected breed
    const queryParams = selectedBreed ? `?breeds=${selectedBreed}` : '';

    const searchData = await searchDogs(queryParams);
    if (searchData) {
      setSearchResults(searchData.resultIds);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h2>Welcome to the Dog Adoption Search!</h2>
      <label>
        Select Breed:
        <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
          <option value="">All Breeds</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleSearch} style={{ marginLeft: '10px', padding: '8px' }}>
        Search
      </button>
      <div style={{ marginTop: '20px' }}>
        {searchResults.map((dogId) => (
          <DogCard key={dogId} dogId={dogId} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
