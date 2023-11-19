import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  // State for search criteria
  const [breed, setBreed] = useState("");
  const [ageMin, setAgeMin] = useState("");
  const [ageMax, setAgeMax] = useState("");
  const [zipCode, setZipCode] = useState("");

  // State for search results
  const [results, setResults] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // ascending by default
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);


  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the API to fetch search results based on the input criteria
    fetchSearchResults();
  };

  // Function to fetch search results from the API
  const fetchSearchResults = () => {
    // Make API request to the /dogs/search endpoint with the search criteria
    // Use the breed, ageMin, ageMax, and zipCode values in the request
    // Pass sortOrder as a query parameter to specify the sort order
    // Update the results state with the received data
  };

// Function to handle pagination
const handlePageChange = (page) => {
    setCurrentPage(page);
    // Call the API to fetch search results for the selected page
    fetchSearchResults();
  };



  // Function to handle sorting
  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    // Call the API to fetch search results with the updated sort order
    fetchSearchResults();
  };

  useEffect(() => {
    // Call the API to fetch initial search results when component mounts
    fetchSearchResults();
  }, []);

  return (
    <div>
      <h1>Search Dogs</h1>
      <form onSubmit={handleSubmit}>
        {/* Breed */}
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />

        {/* Age Range */}
        <label htmlFor="ageMin">Minimum Age:</label>
        <input
          type="number"
          id="ageMin"
          value={ageMin}
          onChange={(e) => setAgeMin(e.target.value)}
        />

        <label htmlFor="ageMax">Maximum Age:</label>
        <input
          type="number"
          id="ageMax"
          value={ageMax}
          onChange={(e) => setAgeMax(e.target.value)}
        />

        {/* Zip Code */}
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />

        {/* Submit button */}
        <button type="submit">Search</button>
      </form>

      {/* Display search results */}
      {results.map((dog) => (
        <div key={dog.id}>
          {/* Display dog information */}
          <p>Name: {dog.name}</p>
          <p>Age: {dog.age}</p>
          <p>Breed: {dog.breed}</p>
          {/* ... other fields */}
        </div>
      ))}

      {/* Sorting */}
      <button onClick={handleSort}>
        Sort by {sortOrder === "asc" ? "Ascending" : "Descending"}
      </button>

      {/* Pagination */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={page === currentPage}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Search;