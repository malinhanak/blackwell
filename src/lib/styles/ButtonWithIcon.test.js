import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import { ButtonWithIcon } from './ButtonWithIcon';

afterEach(cleanup);
describe('Testing ButtonWitchIcon', () => {
  test('onClick to have been called', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ButtonWithIcon iconType='fab' icon='google' onClick={onClick}>
        Sign-in
      </ButtonWithIcon>
    );

    fireEvent.click(getByText('Sign-in'));
    expect(onClick).toHaveBeenCalled();
  });
});
