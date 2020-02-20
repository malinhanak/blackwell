import React, { forwardRef } from 'react';
import { InputError } from '../lib/helpers';
import { InputStyle, InputWrapper, Datalist } from '../lib/styles';

export const InputWithDatalist = forwardRef((props, ref) => {
  const { label, error, width, name, listArray } = props;
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
      <InputStyle
        id={name}
        className={`${error && 'error'}`}
        list='input-list'
        ref={ref}
        {...props}
      />
      <Datalist id='input-list'>
        {listArray.map((item) => (
          <option key={item} value={item} />
        ))}
      </Datalist>
      <InputError error={error} />
    </InputWrapper>
  );
});
