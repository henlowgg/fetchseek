import React, { useState, useEffect, lazy, Suspense } from "react";
import { isAuthenticated, fetchLocations, getDogBreeds, searchDogs } from '../api/api';

// Import FilterComponent dynamically using lazy
const FilterComponent = lazy(() => import('./FilterComponent'));

const HomePage = ({ isLoggedIn }) => {
  const [breeds, setBreeds] = useState([]);
  const [searchResult, setSearchResult] = useState({});
  const [dogDetails, setDogDetails] = useState({});
  const [matchedDog, setMatchedDog] = useState({});
  const [locations, setLocations] = useState([]);
  const [searchLocationResult, setSearchLocationResult] = useState({});
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
        <pre>{JSON.stringify(breeds, null, 2)}</pre>
      </div>

      {isLoggedIn && (
        <div>
          <h2>Search Dogs Result</h2>
          <pre>{JSON.stringify(searchResult, null, 2)}</pre>
        </div>
      )}

      <div>
        <h2>Locations</h2>
        <pre>{JSON.stringify(locations, null, 2)}</pre>
      </div>
    </div>
  );
};

export default HomePage;
