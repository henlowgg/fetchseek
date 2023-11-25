// Import necessary dependencies for testing
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios'; // Mocking axios

// Import the api module
import api from '../api';

jest.mock('axios');

describe('api', () => {
  test('LoginReq - successful login', async () => {
    // Mocking a successful API response
    axios.post.mockResolvedValueOnce({ data: 'some data' });

    // Test the login function
    const response = await api.LoginReq('John Doe', 'john@example.com');

    // Assert that the API request was made with the correct data
    expect(axios.post).toHaveBeenCalledWith(ENDPOINT.login, {
      name: 'John Doe',
      email: 'john@example.com',
    });

    // Assert that the function returns the expected data
    expect(response).toEqual('some data');
  });

  test('LoginReq - login failure', async () => {
    // Mocking a failed API response
    axios.post.mockRejectedValueOnce({ response: { status: 500 } });

    // Mock the showToast function to track if it was called
    const showToastMock = jest.spyOn(api, 'showToast');

    // Test the login function
    await expect(api.LoginReq('John Doe', 'john@example.com')).rejects.toEqual('Login failed');

    // Assert that the showToast function was called with the correct message
    expect(showToastMock).toHaveBeenCalledWith('Login failed');
  });

  test('LogoutReq - successful logout', async () => {
    // Mocking a successful API response
    axios.post.mockResolvedValueOnce({ data: 'some data' });

    // Test the logout function
    const response = await api.LogoutReq();

    // Assert that the API request was made with the correct data
    expect(axios.post).toHaveBeenCalledWith(ENDPOINT.logout, {});

    // Assert that the function returns the expected data
    expect(response).toEqual('some data');
  });

  test('LogoutReq - logout failure', async () => {
    // Mocking a failed API response
    axios.post.mockRejectedValueOnce({ response: { status: 500 } });

    // Mock the showToast function to track if it was called
    const showToastMock = jest.spyOn(api, 'showToast');

    // Test the logout function
    await expect(api.LogoutReq()).rejects.toEqual('Logout failed');

    // Assert that the showToast function was called with the correct message
    expect(showToastMock).toHaveBeenCalledWith('Logout failed');
  });
});
