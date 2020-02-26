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
    expect(firstPage).toHaveTextContent('Welcome!');

    // Act
    fireEvent.click(getByText('About'));

    // Arrange
    const aboutpage = await waitForElement(() => getByTestId('about-page'));

    // Assert
    expect(aboutpage).toHaveTextContent('You are on about page');
  });
});
