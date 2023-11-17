import React, { useState, useEffect } from "react";
import { fetchDogsByIds, fetchLocations, getDogBreeds, matchDogs, searchDogs, searchLocations } from './api';

const HomePage = () => {
  const [breeds, setBreeds] = useState([]);
  const [searchResult, setSearchResult] = useState({});
  const [dogDetails, setDogDetails] = useState({});
  const [matchedDog, setMatchedDog] = useState({});
  const [locations, setLocations] = useState([]);
  const [searchLocationResult, setSearchLocationResult] = useState({});

  useEffect(() => {
    // Fetch dog breeds
    getDogBreeds().then((breeds) => setBreeds(breeds));

    // Search dogs
    const searchParams = {
      breeds: ["Labrador Retriever"],
      zipCodes: ["12345"],
      ageMin: 2,
      ageMax: 5,
      size: 10,
    };
    searchDogs(searchParams).then((result) => setSearchResult(result));

    // Fetch dog details by ID
    const dogId = "abc123";
    fetchDogsByIds([dogId]).then((dogDetails) => setDogDetails(dogDetails[0]));

    // Fetch dogs by IDs
    const dogIds = ["abc123", "def456"];
    fetchDogsByIds(dogIds).then((dogs) => console.log("Dogs by IDs:", dogs));

    // Match dogs
    const dogsToMatch = ["abc123", "def456"];
    matchDogs(dogsToMatch).then((matchResult) => setMatchedDog(matchResult));

    // Fetch locations
    const zipCodes = ["54321", "67890"];
    fetchLocations(zipCodes).then((locations) => setLocations(locations));

    // Search locations
    const searchLocationParams = {
      city: "New York",
      states: ["NY"],
      size: 5,
    };
    searchLocations(searchLocationParams).then((searchResult) =>
      setSearchLocationResult(searchResult)
    );
  }, []);

  return (
    <div>
      <h1>Dog Adoption App</h1>

      <div>
        <h2>Dog Breeds</h2>
        <pre>{JSON.stringify(breeds, null, 2)}</pre>
      </div>

      <div>
        <h2>Search Dogs Result</h2>
        <pre>{JSON.stringify(searchResult, null, 2)}</pre>
      </div>

      <div>
        <h2>Dog Details</h2>
        <pre>{JSON.stringify(dogDetails, null, 2)}</pre>
      </div>

      <div>
        <h2>Matched Dog</h2>
        <pre>{JSON.stringify(matchedDog, null, 2)}</pre>
      </div>

      <div>
        <h2>Locations</h2>
        <pre>{JSON.stringify(locations, null, 2)}</pre>
      </div>

      <div>
        <h2>Search Locations Result</h2>
        <pre>{JSON.stringify(searchLocationResult, null, 2)}</pre>
      </div>
    </div>
  );
};

export default HomePage;
