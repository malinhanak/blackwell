import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'test-utils';
import App from './App';

describe('Testing the application routing', () => {
  afterEach(cleanup);
  it.only('should render full App', async () => {
    const { getByTestId, getByText } = render(<App />);
    // Arrange
    const firstPage = await waitForElement(() => getByTestId('headline'));

    // Act

    // Assert
    expect(firstPage).toHaveTextContent('Hello DiceTrax!');

    // Act
    fireEvent.click(getByText('Nytt spel'));

    // Arrange
    const NewGameForm = await waitForElement(() => getByTestId('form'));

    // Assert
    expect(NewGameForm).toHaveTextContent('Titel');
  });
});
