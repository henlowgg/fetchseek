import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DogCard from '../Card';

const mockDog: DogCard = {
  id: 1,
  name: '',
  age: 2,
  breed: 'Golden Retriever',
  zip_code: '',
  img: '',
};

describe('DogCard component', () => {
  it('renders the component correctly', () => {
    const { getByText, getByAltText } = render(
      <DogCard dog={mockDog} selected={[]} setSelectedDogs={() => {}} />
    );

    expect(getByText('Buddy, 2')).toBeInTheDocument();
    expect(getByText('Golden Retriever, zip_code')).toBeInTheDocument();
    expect(getByAltText('dog photo')).toBeInTheDocument();
  });

  it('handles favorite button click correctly', async () => {
    const setSelectedDogsMock = jest.fn();
    const { getByText } = render(
      <DogCard dog={mockDog} selected={[]} setSelectedDogs={setSelectedDogsMock} />
    );

    fireEvent.click(getByText('Favorite'));

    await waitFor(() => {
      expect(setSelectedDogsMock).toHaveBeenCalledWith([mockDog.id]);
      expect(getByText('Added to Favorites!')).toBeInTheDocument();
    });

    // Click again to test removing from favorites
    fireEvent.click(getByText('Favorite'));

    await waitFor(() => {
      expect(setSelectedDogsMock).toHaveBeenCalledWith([]);
      expect(getByText('Removed from favorites :(')).toBeInTheDocument();
    });
  });
});
