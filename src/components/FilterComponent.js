import React, { useState, useEffect } from "react";

const FilterComponent = ({ onFilterChange }) => {
  const [breeds, setBreeds] = useState([]);
  const [zipCodes, setZipCodes] = useState("");
  const [ageMin, setAgeMin] = useState("");
  const [ageMax, setAgeMax] = useState("");
  const [size, setSize] = useState(25);
  const [sort, setSort] = useState("breed:asc");

  useEffect(() => {
    // Fetch dog breeds and update the state when the component mounts
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://frontend-take-home-service.fetch.com/dogs/breeds', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
        });

        if (response.ok) {
          const breeds = await response.json();
          setBreeds(breeds);
        } else {
          console.error('Failed to fetch breeds:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error during fetchBreeds:', error);
      }
    };

    fetchBreeds();
  }, []); // Empty dependency array to fetch breeds only once when the component mounts

  const handleFilterChange = () => {
    const newFilterParams = {
      breeds: breeds ? breeds.split(",") : [],
      zipCodes: zipCodes ? zipCodes.split(",") : [],
      ageMin: ageMin ? parseInt(ageMin, 10) : null,
      ageMax: ageMax ? parseInt(ageMax, 10) : null,
      size: parseInt(size, 10),
      sort,
    };

    onFilterChange(newFilterParams);
  };

  return (
    <div>
      <h3>Filter Dogs</h3>
      <div>
        <label htmlFor="breeds">Breeds:</label>
        <select
          id="breeds"
          value={breeds}
          onChange={(e) => setBreeds(e.target.value)}
        >
          <option value="">-- Select Breed --</option>
          {breeds.map((breed) => (
            <option key={breed.id} value={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="zipCodes">Zip Codes (comma-separated):</label>
        <input
          type="text"
          id="zipCodes"
          value={zipCodes}
          onChange={(e) => setZipCodes(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="ageMin">Minimum Age:</label>
        <input
          type="number"
          id="ageMin"
          value={ageMin}
          onChange={(e) => setAgeMin(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="ageMax">Maximum Age:</label>
        <input
          type="number"
          id="ageMax"
          value={ageMax}
          onChange={(e) => setAgeMax(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="size">Results Size:</label>
        <input
          type="number"
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="sort">Sort Order:</label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="breed:asc">Breed (Ascending)</option>
          <option value="breed:desc">Breed (Descending)</option>
        </select>
      </div>

      {/* Added a button to trigger the filter change */}
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default FilterComponent;
