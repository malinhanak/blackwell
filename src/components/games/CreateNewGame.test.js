import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'test-utils';
import { act } from 'react-dom/test-utils';
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

  it('onChange should trigger value change in input "Title"', async () => {
    const { getByLabelText } = render(<CreateNewGame />);
    // Arrange
    const inputTitle = await waitForElement(() => getByLabelText('Titel'));
    // Act
    fireEvent.change(inputTitle, { target: { value: 'Awesome Game' } });

    // Assert
    expect(inputTitle.value).toBe('Awesome Game');
  });

  it('onChange should trigger value change in input "Ange spel"', async () => {
    const { getByLabelText } = render(<CreateNewGame />);
    // Arrange
    const inputGame = await waitForElement(() => getByLabelText('Ange spel'));
    // Act
    fireEvent.change(inputGame, { target: { value: 'Settlers of Cata' } });

    // Assert
    expect(inputGame.value).toBe('Settlers of Cata');
  });

  it('onChange should trigger value change in input "Antal tärningar"', async () => {
    const { getByLabelText } = render(<CreateNewGame />);
    // Arrange
    const inputDiceNo = await waitForElement(() => getByLabelText('Antal tärningar'));

    fireEvent.change(inputDiceNo, { target: { value: '2' } });

    // Assert
    expect(inputDiceNo.value).toBe('2');
  });

  it.skip('should validate value', async () => {
    const { getByLabelText } = render(<CreateNewGame />);
    // Arrange
    const inputDiceNo = await waitForElement(() => getByLabelText('Antal tärningar'));

    fireEvent.change(inputDiceNo, { target: { value: 'a' } });

    // Assert
    expect(inputDiceNo.value).toBe('2');
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
    // fireEvent.click(getByText('Starta spel'));
    // expect(onClick).toHaveBeenCalled();
  });
});
