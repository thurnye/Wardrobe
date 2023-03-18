import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Closet from './Closet';

describe('<Closet />', () => {
  test('it should mount', () => {
    render(<Closet />);
    
    const closet = screen.getByTestId('Closet');

    expect(closet).toBeInTheDocument();
  });
});