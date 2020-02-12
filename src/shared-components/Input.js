/* This file is a near copy of Input.js the difference is this is a quick fix with 
forwarding ref to fix a input problem. That occurred on two minor forms with input, and 
instead of changing every form an input in the application this quick fix was put in place 
the styles are imported from Input.js to minimize double code */

import React from 'react';
import { InputError } from '../lib/helpers';
import { Input, InputWrapper } from '../lib/styles';

export const Input = React.forwardRef((props, ref) => {
  const { label, error, width, name } = props;
  return (
    <InputWrapper
      className='input-wrapper'
      width={width || '100%'}
      noMargin={props.noMargin ? true : false}
      noMarginBottom={props.noMarginBottom ? true : false}
    >
      {label && (
        <label htmlFor={name} className='label'>
          {label} {error && error.type === 'required' && <span className='required'>*</span>}
        </label>
      )}
      <Input className={error && 'error'} ref={ref} {...props} />
      <InputError error={error} />
    </InputWrapper>
  );
});
