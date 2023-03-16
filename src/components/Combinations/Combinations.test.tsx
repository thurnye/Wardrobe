import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Combinations from './Combinations';

describe('<Combinations />', () => {
  test('it should mount', (props:any) => {
    render(<Combinations data={props.data}/>);
    
    const combinations = screen.getByTestId('Combinations');

    expect(combinations).toBeInTheDocument();
  });
});