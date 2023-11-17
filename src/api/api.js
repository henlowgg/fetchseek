const handleApiError = (error) => {
  console.error('Error in API call:', error);
  throw error; // Rethrow the error for further handling
};

const getAuthToken = () => {
  // Retrieve the authentication token from localStorage
  return localStorage.getItem('authToken');
};

const apiBaseUrl = 'https://frontend-take-home-service.fetch.com';

const apiFetch = async (url, options) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    handleApiError(error);
  }
};

// POST/auth/login
export const login = async (name, email) => {
  try {
    const response = await apiFetch(`${apiBaseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      // Extract the token from the response headers
      const authToken = response.headers.get('fetch-access-token');
      
      // Store the token securely (for simplicity, using localStorage here)
      localStorage.setItem('authToken', authToken);
    } else {
      handleApiError(response);
    }
  } catch (error) {
    handleApiError(error);
  }
};

// POST/auth/logout
export const logout = async () => {
  try {
    await apiFetch(`${apiBaseUrl}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`,
      },
    });

    // Clear the stored token on successful logout
    localStorage.removeItem('authToken');
  } catch (error) {
    handleApiError(error);
  }
};

// GET/dogs/breeds
export const getDogBreeds = async () => {
  try {
    const response = await apiFetch(`${apiBaseUrl}/dogs/breeds`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
      },
    });

    return response;
  } catch (error) {
    handleApiError(error);
  }
};

// GET/dogs/search
export const searchDogs = async (filterParams) => {
  try {
    const response = await apiFetch(`${apiBaseUrl}/dogs/search`, {
      method: 'GET', // Change the method to 'GET' since it's a search operation
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`,
      },
      // Use URLSearchParams to handle query parameters
      params: new URLSearchParams(filterParams),
    });

    return response;
  } catch (error) {
    handleApiError(error);
  }
};

// POST/dogs
export const fetchDogs = async (dogIds) => {
  try {
    const response = await apiFetch(`${apiBaseUrl}/dogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`,
      },
      body: JSON.stringify(dogIds),
    });

    return response;
  } catch (error) {
    handleApiError(error);
  }
};

// POST/dogs/match
export const fetchDogMatch = async (dogIds) => {
  try {
    const response = await apiFetch(`${apiBaseUrl}/dogs/match`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`,
      },
      body: JSON.stringify(dogIds),
    });

    return response;
  } catch (error) {
    handleApiError(error);
  }
};

// POST/locations
export const fetchLocations = async (zipCodes) => {
  try {
    const response = await apiFetch(`${apiBaseUrl}/locations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`,
      },
      body: JSON.stringify({ zipCodes }),
    });

    return response;
  } catch (error) {
    handleApiError(error);
  }
};

// POST/locations/search
export const searchLocations = async (searchParams) => {
  try {
    const response = await apiFetch(`${apiBaseUrl}/locations/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`,
      },
      body: JSON.stringify(searchParams),
    });

    return response;
  } catch (error) {
    handleApiError(error);
  }
};