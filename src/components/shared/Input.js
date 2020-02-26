import React, { forwardRef } from 'react';
import { InputError } from '../../lib/helpers';
import { InputStyle, InputWrapper } from '../../lib/styles';

export const Input = forwardRef((props, ref) => {
  const { label, error, width, name } = props;
  return (
    <InputWrapper
      width={width || '100%'}
      noMargin={props.noMargin ? true : false}
      noMarginBottom={props.noMarginBottom ? true : false}
    >
      {label && (
        <label htmlFor={name} className='label'>
          {label} {error && error.type === 'required' && <span className='required'>*</span>}
        </label>
      )}
      <InputStyle id={name} className={error && 'error'} ref={ref} {...props} />
      <InputError error={error} />
    </InputWrapper>
  );
});
