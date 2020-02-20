import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'test-utils';
import { act } from 'react-dom/test-utils';
import CreateNewGame from './CreateNewGame';
import * as m from '../../helpers/firebase-utils/submitHandler';

jest.mock('../../helpers/firebase-utils/submitHandler', () => ({
  submitHandler: jest.fn(),
}));

describe('Testing the form functions and methods of CreatNewGame component which returns a form.', () => {
  afterEach(cleanup);
  it('is expected that all input values on render are empty string', async () => {
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

  it('should trigger onChange when typing in input "Title" to update input value', async () => {
    const { getByLabelText } = render(<CreateNewGame />);
    // Arrange
    const inputTitle = await waitForElement(() => getByLabelText('Titel'));

    // Act
    await act(async () => {
      fireEvent.change(inputTitle, { target: { value: 'Awesome Game' } });
    });

    // Assert
    expect(inputTitle.value).toBe('Awesome Game');
  });

  it('should trigger onChange when typing in input "Ange spel" to update input value', async () => {
    const { getByLabelText } = render(<CreateNewGame />);
    // Arrange
    const inputGame = await waitForElement(() => getByLabelText('Ange spel'));

    // Act
    await act(async () => {
      fireEvent.input(inputGame, { target: { value: 'Settlers of Cata' } });
    });

    // Assert
    expect(inputGame.value).toBe('Settlers of Cata');
  });

  it('should trigger onChange when typing in input "Antal tärningar" to update input value', async () => {
    const { getByLabelText } = render(<CreateNewGame />);
    // Arrange
    const inputDiceNo = await waitForElement(() => getByLabelText('Antal tärningar'));

    await act(async () => {
      fireEvent.input(inputDiceNo, { target: { value: '2' } });
    });

    // Assert
    expect(inputDiceNo.value).toBe('2');
  });

  it('should not call onSubmit if validation returned false', async () => {
    const { getByLabelText, getByText } = render(<CreateNewGame />);

    // Arrange
    const inputDiceNo = await waitForElement(() => getByLabelText('Antal tärningar'));
    const button = await waitForElement(() => getByText('Starta spel'));

    // Act
    fireEvent.change(inputDiceNo, { target: { value: 'a' } });
    await act(async () => {
      fireEvent.click(button);
    });

    // Assert
    expect(m.submitHandler).not.toHaveBeenCalled();
  });

  it('should not call onSubmit if any input value are an empty string', async () => {
    const { getByLabelText, getByText } = render(<CreateNewGame />);

    // Arrange
    const button = await waitForElement(() => getByText('Starta spel'));
    const inputTitle = await waitForElement(() => getByLabelText('Titel'));
    const inputGame = await waitForElement(() => getByLabelText('Ange spel'));
    const inputDiceNo = await waitForElement(() => getByLabelText('Antal tärningar'));

    // Act
    fireEvent.input(inputTitle, { target: { value: '' } });
    fireEvent.input(inputGame, { target: { value: '' } });
    fireEvent.input(inputDiceNo, { target: { value: '' } });

    await act(async () => {
      fireEvent.click(button);
    });

    // Assert
    expect(m.submitHandler).not.toHaveBeenCalled();
  });

  it('should not call onSubmit if any input value is an empty string or incorrect.', async () => {
    const { getByLabelText, getByText } = render(<CreateNewGame />);

    // Arrange
    const button = await waitForElement(() => getByText('Starta spel'));
    const inputTitle = await waitForElement(() => getByLabelText('Titel'));
    const inputGame = await waitForElement(() => getByLabelText('Ange spel'));
    const inputDiceNo = await waitForElement(() => getByLabelText('Antal tärningar'));

    // Act
    fireEvent.input(inputTitle, { target: { value: 'New Game' } });
    fireEvent.input(inputGame, { target: { value: 'Settlers of Cata' } });
    fireEvent.input(inputDiceNo, { target: { value: 'a' } });

    await act(async () => {
      fireEvent.click(button);
    });

    // Assert
    expect(m.submitHandler).not.toHaveBeenCalled();
  });

  it('should call onSubmit form method when submit button is clicked and all inputs are validated true.', async () => {
    const { getByText, getByLabelText } = render(<CreateNewGame />);

    // Arrange
    const button = await waitForElement(() => getByText('Starta spel'));
    const inputTitle = await waitForElement(() => getByLabelText('Titel'));
    const inputGame = await waitForElement(() => getByLabelText('Ange spel'));
    const inputDiceNo = await waitForElement(() => getByLabelText('Antal tärningar'));

    // Act
    fireEvent.input(inputTitle, { target: { value: 'Awesome Game' } });
    fireEvent.input(inputGame, { target: { value: 'Settlers of Cata' } });
    fireEvent.input(inputDiceNo, { target: { value: '2' } });

    await act(async () => {
      fireEvent.click(button);
    });

    // Assert
    expect(m.submitHandler).toHaveBeenCalled();
  });
});
