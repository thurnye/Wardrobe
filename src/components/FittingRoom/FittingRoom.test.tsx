import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FittingRoom from './FittingRoom';

describe('<FittingRoom />', () => {
  test('it should mount', () => {
    render(<FittingRoom />);
    
    const fittingRoom = screen.getByTestId('FittingRoom');

    expect(fittingRoom).toBeInTheDocument();
  });
});