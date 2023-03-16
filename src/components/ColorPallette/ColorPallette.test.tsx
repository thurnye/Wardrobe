import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ColorPallette from './ColorPallette';

describe('<ColorPallette />', () => {
  test('it should mount', () => {
    render(<ColorPallette />);
    
    const colorPallette = screen.getByTestId('ColorPallette');

    expect(colorPallette).toBeInTheDocument();
  });
});