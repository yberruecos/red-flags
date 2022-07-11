import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders bad thing red flag', () => {
  const { container } = render(<Card type={'red'} text={'something bad'}/>);
  const linkElement = screen.getByText(/something bad/i);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const cardElement=container.getElementsByClassName('red-flag');
  expect(cardElement.length).toBe(1);
  expect(linkElement).toBeInTheDocument();
});

test('renders good thing', () => {
    const { container } = render(<Card type={'default'} text={'something good'}/>);
    const linkElement = screen.getByText(/something good/i);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const cardElement=container.getElementsByClassName('default-flag');
    expect(cardElement.length).toBe(1);
    expect(linkElement).toBeInTheDocument();
});
