import React, { useState, useEffect, lazy, Suspense } from "react";
import { fetchLocations, getDogBreeds, searchDogs } from '../api/api';

// removing isAuthenticated for now from import, will see if it breaks after setting up the search 

// Import FilterComponent dynamically using lazy
const FilterComponent = lazy(() => import('./FilterComponent'));

const HomePage = ({ isLoggedIn }) => {
  const [breeds, setBreeds] = useState([]);
  const [searchResult, setSearchResult] = useState({});
  const [locations, setLocations] = useState([]);
  const [filterParams, setFilterParams] = useState({
    breeds: [],
    zipCodes: [],
    ageMin: null,
    ageMax: null,
    size: 25,
    sort: "breed:asc",
  });

  useEffect(() => {
    const fetchData = async () => {
      // Fetch dog breeds if the user is authenticated
      if (isLoggedIn) {
        try {
          const breeds = await getDogBreeds();
          setBreeds(breeds);

          // Fetch dogs based on filter parameters
          const result = await searchDogs(filterParams);
          setSearchResult(result);
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle error (e.g., show a message to the user)
        }
      }

      // Fetch locations if the user is authenticated
      if (isLoggedIn) {
        try {
          const zipCodes = ["54321", "67890"];
          const locations = await fetchLocations(zipCodes);
          setLocations(locations);
        } catch (error) {
          console.error('Error fetching locations:', error);
          // Handle error (e.g., show a message to the user)
        }
      }
    };

    // Call fetchData function
    fetchData();
  }, [filterParams, isLoggedIn]);

  const handleFilterChange = (newFilterParams) => {
    setFilterParams(newFilterParams);
  };

  const handlePagination = (page) => {
    // Update the 'from' parameter to fetch the next or previous page
    const newFilterParams = { ...filterParams, from: page * filterParams.size };
    setFilterParams(newFilterParams);
  };

  return (
    <div>
      <h1>Rescueeeeee Meh</h1>

      {isLoggedIn && (
        <div>
          {/* Use Suspense to dynamically load the FilterComponent */}
          <Suspense fallback={<div>Loading...</div>}>
            <FilterComponent onFilterChange={handleFilterChange} />
          </Suspense>
        </div>
      )}

      <div>
        <h2>Dog Breeds</h2>
        {/* Display breeds in a more user-friendly format */}
        <ul>
          {breeds.map((breed) => (
            <li key={breed.id}>{breed.name}</li>
          ))}
        </ul>
      </div>

      {isLoggedIn && (
        <div>
          <h2>Search Dogs Result</h2>
          {/* Display search results in card format */}
          <div>
            {searchResult.resultIds.map((dogId) => (
              <div key={dogId} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px' }}>
                {/* props from api */}
                <p>Dog ID: {dogId}</p>
                {/* props from api */}
              </div>
            ))}
          </div>
          
          {/* Pagination controls */}
          <div>
            <button onClick={() => handlePagination(searchResult.prev)}>Previous</button>
            <button onClick={() => handlePagination(searchResult.next)}>Next</button>
          </div>
        </div>
      )}

      <div>
        <h2>Locations</h2>
        {/* Display locations */}
        <ul>
          {locations.map((location) => (
            <li key={location.id}>{location.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
