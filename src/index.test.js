import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'test-utils';

import App from './App';

describe('test app', () => {
  test('test', async () => {
    const { debug, getByText } = render(<App />);

    //debug();
    const h1Element = await waitForElement(() => getByText(/Hello DiceTrax!/i));
    expect(h1Element).toBeInTheDocument();
  });
});
