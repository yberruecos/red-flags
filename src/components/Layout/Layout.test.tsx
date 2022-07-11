import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Layout from './Layout';
import {goodThings,badThings} from '../../dataGame'

test('Play game', () => {
  const { container } = render(<Layout/>);
  const button = screen.getByRole('button')
  fireEvent.click(button)
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const cardRed=container.getElementsByClassName('red-flag');
  expect(cardRed.length).toBe(1);
  let indexThing=badThings.find((item)=>item===cardRed[0].textContent)
  expect(indexThing).toBe(cardRed[0].textContent);
  //eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const cardDefault=container.getElementsByClassName('default-flag');
  expect(cardDefault.length).toBe(2);
  indexThing=goodThings.find((item)=>item===cardDefault[0].textContent)
  expect(indexThing).toBe(cardDefault[0].textContent);
  indexThing=goodThings.find((item)=>item===cardDefault[1].textContent)
  expect(indexThing).toBe(cardDefault[1].textContent);
});
