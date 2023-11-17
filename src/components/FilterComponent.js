import React, { useState } from "react";

const FilterComponent = ({ onFilterChange }) => {
  const [breeds, setBreeds] = useState("");
  const [zipCodes, setZipCodes] = useState("");
  const [ageMin, setAgeMin] = useState("");
  const [ageMax, setAgeMax] = useState("");
  const [size, setSize] = useState(25);
  const [sort, setSort] = useState("breed:asc");

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
        <label htmlFor="breeds">Breeds (comma-separated):</label>
        <input
          type="text"
          id="breeds"
          value={breeds}
          onChange={(e) => setBreeds(e.target.value)}
        />
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

      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default FilterComponent;