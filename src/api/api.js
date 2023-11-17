// Function to set up headers with authentication token
const getHeaders = () => {
    try {
      // Check if document is defined
      if (typeof document !== 'undefined') {
        const authToken = document.cookie
          .split('; ')
          .find(row => row.startsWith('fetch-access-token='))
          ?.split('=')[1];
  
        if (authToken) {
          return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          };
        }
      }
    } catch (error) {
      console.error('Error getting headers:', error.message);
    }
  
    // Return default headers or handle the case when document is not available or token is missing
    return {
      'Content-Type': 'application/json',
    };
  };
  
  // Function to handle API errors
  const handleApiError = (error) => {
    console.error(`Error in API call: ${error.message}`);
    throw error;
  };
  
  // Base URL for the API
  const BASE_URL = "https://frontend-take-home-service.fetch.com";
  
  // Function to fetch all possible dog breeds
  export const getDogBreeds = async () => {
    try {
      const response = await fetch(`${BASE_URL}/dogs/breeds`, {
        method: 'GET',
        headers: getHeaders(),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error in getDogBreeds:', error.message);
      handleApiError(error);
    }
  };
  
  // Function to search for dogs
  export const searchDogs = async (params) => {
    try {
      const response = await fetch(`${BASE_URL}/dogs/search?${new URLSearchParams(params).toString()}`, {
        method: 'GET',
        headers: getHeaders(),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      handleApiError(error);
    }
  };
  
//   // Function to fetch dog details by ID
//   export const fetchDogDetailsById = async (dogId) => {
//     try {
//       const response = await fetch(`${BASE_URL}/dogs/${dogId}`, {
//         method: 'GET',
//         headers: getHeaders(),
//       });
  
//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }
  
//       return await response.json();
//     } catch (error) {
//       handleApiError(error);
//     }
//   };
  
//   // Function to fetch dogs by IDs
//   export const fetchDogsByIds = async (dogIds) => {
//     try {
//       const response = await fetch(`${BASE_URL}/dogs`, {
//         method: 'POST',
//         headers: getHeaders(),
//         body: JSON.stringify(dogIds),
//       });
  
//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }
  
//       return await response.json();
//     } catch (error) {
//       console.error('Error in fetchDogsByIds:', error.message);
//       handleApiError(error);
//     }
//   };
  
  // Function to match dogs
  export const matchDogs = async (dogIds) => {
    try {
      const response = await fetch(`${BASE_URL}/dogs/match`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(dogIds),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      handleApiError(error);
    }
  };
  
  // Function to fetch locations by ZIP codes
  export const fetchLocations = async (zipCodes) => {
    try {
      const response = await fetch(`${BASE_URL}/locations`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(zipCodes),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      handleApiError(error);
    }
  };
  
  // Function to search for locations
  export const searchLocations = async (params) => {
    try {
      const response = await fetch(`${BASE_URL}/locations/search`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(params),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      handleApiError(error);
    }
  };
  