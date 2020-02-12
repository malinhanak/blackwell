import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { App } from './App';

describe('test app', () => {
  test('test', () => {
    const { debug, getByText } = render(<App />);

    debug();
    const h1Element = getByText(/Hello DiceTrax!/i);
    expect(h1Element).toBeInTheDocument();
  });
});
