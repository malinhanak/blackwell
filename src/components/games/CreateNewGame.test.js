import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'test-utils';
import { CreateNewGame } from './CreateNewGame';

afterEach(cleanup);

describe('Testing form functions', () => {
  it('All inputs should initially be empty strings', async () => {
    const { getByLabelText } = render(<CreateNewGame />);
    // Arrange
    const inputTitle = await waitForElement(() => getByLabelText('Titel'));
    const inputGame = await waitForElement(() => getByLabelText('Ange spel'));
    const inputDiceNo = await waitForElement(() => getByLabelText('Antal tärningar'));
    // Act

    // Assert
    expect(inputTitle.value).toBe('');
    expect(inputGame.value).toBe('');
    expect(inputDiceNo.value).toBe('');
  });

  it.skip('onChange should trigger value change in input "Title"', async () => {
    const { getByLabelText } = render(<CreateNewGame />);
    // Arrange
    const inputTitle = await waitForElement(() => getByLabelText('Titel'));
    const inputGame = await waitForElement(() => getByLabelText('Ange spel'));
    const inputDiceNo = await waitForElement(() => getByLabelText('Antal tärningar'));
    // Act

    // Assert
    expect(inputTitle.value).toBe('');
    expect(inputGame.value).toBe('');
    expect(inputDiceNo.value).toBe('');
  });

  it.skip('onChange should trigger value change in input "Ange spel"', async () => {
    const { getByLabelText } = render(<CreateNewGame />);
    // Arrange
    const inputTitle = await waitForElement(() => getByLabelText('Titel'));
    const inputGame = await waitForElement(() => getByLabelText('Ange spel'));
    const inputDiceNo = await waitForElement(() => getByLabelText('Antal tärningar'));
    // Act

    // Assert
    expect(inputTitle.value).toBe('');
    expect(inputGame.value).toBe('');
    expect(inputDiceNo.value).toBe('');
  });

  it.skip('onChange should trigger value change in input "Antal tärningar"', async () => {
    const { getByLabelText } = render(<CreateNewGame />);
    // Arrange
    const inputTitle = await waitForElement(() => getByLabelText('Titel'));
    const inputGame = await waitForElement(() => getByLabelText('Ange spel'));
    const inputDiceNo = await waitForElement(() => getByLabelText('Antal tärningar'));
    // Act

    // Assert
    expect(inputTitle.value).toBe('');
    expect(inputGame.value).toBe('');
    expect(inputDiceNo.value).toBe('');
  });

  it.skip('onSubmit to have been called', async () => {
    //const onClick = jest.fn();
    const { getByLabelText } = render(<CreateNewGame />);
    // Arrange
    const inputTitle = await waitForElement(() => getByLabelText('Titel'));
    const inputGame = await waitForElement(() => getByLabelText('Ange spel'));
    const inputDiceNo = await waitForElement(() => getByLabelText('Antal tärningar'));
    // Act

    // Assert
    expect(inputTitle.value).toBe('');
    expect(inputGame.value).toBe('');
    expect(inputDiceNo.value).toBe('');
    // fireEvent.click(getByText('Sign-in'));
    // expect(onClick).toHaveBeenCalled();
  });
});
