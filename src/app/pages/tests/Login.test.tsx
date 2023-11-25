import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../Login.jsx'

// TESTS FOR JSX, BUT WRITTEN IN TSX, AS PER INSTRUCTED
// only a couple, but just wanted to make sure to stick to the script

// Mock the api module
jest.mock('../utils/api', () => ({
  LoginReq: jest.fn(() => Promise.resolve(true)), // Resolve the promise for successful login
}));

describe('Login component', () => {
  it('renders the component correctly', () => {
    const { getByText, getByLabelText } = render(<Login setUser={() => {}} />);
    
    expect(getByText('rescue.io')).toBeInTheDocument();
    expect(getByLabelText('name')).toBeInTheDocument();
    expect(getByLabelText('email')).toBeInTheDocument();
  });

  it('submits the form successfully', async () => {
    const setUserMock = jest.fn();
    const { getByLabelText, getByText } = render(<Login setUser={setUserMock} />);

    fireEvent.change(getByLabelText('name'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('email'), { target: { value: 'john@example.com' } });

    fireEvent.submit(getByText('Sign In'));

    await waitFor(() => {
      expect(setUserMock).toHaveBeenCalledWith({ name: 'John', email: 'john@example.com' });
    });
  });
});