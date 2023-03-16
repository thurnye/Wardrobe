import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Wardrobe from './Wardrobe';

describe('<Wardrobe />', () => {
  test('it should mount', () => {
    render(<Wardrobe />);
    
    const wardrobe = screen.getByTestId('Wardrobe');

    expect(wardrobe).toBeInTheDocument();
  });
});