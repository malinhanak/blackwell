import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'test-utils';
import { act } from 'react-dom/test-utils';
import { CreateNewGame } from './CreateNewGame';

describe('Testing form functions', () => {
  afterEach(cleanup);
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
    await act(async () => {
      fireEvent.change(inputTitle, { target: { value: 'Awesome Game' } });
    });

    // Assert
    expect(inputTitle.value).toBe('Awesome Game');
  });

  it('onChange should trigger value change in input "Ange spel"', async () => {
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

  it('onChange should trigger value change in input "Antal tärningar"', async () => {
    const { getByLabelText } = render(<CreateNewGame />);
    // Arrange
    const inputDiceNo = await waitForElement(() => getByLabelText('Antal tärningar'));

    await act(async () => {
      fireEvent.input(inputDiceNo, { target: { value: '2' } });
    });

    // Assert
    expect(inputDiceNo.value).toBe('2');
  });

  it('should validate value', async () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<CreateNewGame submitHandler={onSubmit} />);

    // Arrange
    const inputDiceNo = await waitForElement(() => getByLabelText('Antal tärningar'));
    const button = await waitForElement(() => getByText('Starta spel'));

    // Act
    fireEvent.change(inputDiceNo, { target: { value: 'a' } });
    await act(async () => {
      fireEvent.click(button);
    });

    // Assert
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('onSubmit should not call if inputs are empty strings', async () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<CreateNewGame submitHandler={onSubmit} />);

    // Arrange
    const button = await waitForElement(() => getByText('Starta spel'));
    const inputTitle = await waitForElement(() => getByLabelText('Titel'));
    const inputGame = await waitForElement(() => getByLabelText('Ange spel'));
    const inputDiceNo = await waitForElement(() => getByLabelText('Antal tärningar'));

    // Act
    fireEvent.change(inputTitle, { target: { value: '' } });
    fireEvent.input(inputGame, { target: { value: '' } });
    fireEvent.input(inputDiceNo, { target: { value: '' } });

    await act(async () => {
      fireEvent.click(button);
    });

    // Assert
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('onSubmit should not call if inputs are filled it but has wrong value type', async () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<CreateNewGame submitHandler={onSubmit} />);

    // Arrange
    const button = await waitForElement(() => getByText('Starta spel'));
    const inputTitle = await waitForElement(() => getByLabelText('Titel'));
    const inputGame = await waitForElement(() => getByLabelText('Ange spel'));
    const inputDiceNo = await waitForElement(() => getByLabelText('Antal tärningar'));

    // Act
    fireEvent.change(inputTitle, { target: { value: 'New Game' } });
    fireEvent.input(inputGame, { target: { value: 'Settlers of Cata' } });
    fireEvent.input(inputDiceNo, { target: { value: 'a' } });

    await act(async () => {
      fireEvent.click(button);
    });

    // Assert
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('onSubmit to have been called', async () => {
    const onSubmit = jest.fn();
    const { getByText, getByLabelText } = render(<CreateNewGame submitHandler={onSubmit} />);

    // Arrange
    const button = await waitForElement(() => getByText('Starta spel'));
    const inputTitle = await waitForElement(() => getByLabelText('Titel'));
    const inputGame = await waitForElement(() => getByLabelText('Ange spel'));
    const inputDiceNo = await waitForElement(() => getByLabelText('Antal tärningar'));

    // Act

    fireEvent.change(inputTitle, { target: { value: 'Awesome Game' } });
    fireEvent.input(inputGame, { target: { value: 'Settlers of Cata' } });
    fireEvent.input(inputDiceNo, { target: { value: '2' } });

    await act(async () => {
      fireEvent.click(button);
    });

    // Assert
    expect(onSubmit).toHaveBeenCalled();
  });
});
