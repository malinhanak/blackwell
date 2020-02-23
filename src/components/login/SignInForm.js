import React from 'react';
import { useForm } from 'react-hook-form';

export const SignInForm = ({ submitHandler }) => {
  const { handleSubmit, register, error, reset } = useForm();

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input type='email' name='email' ref={register({ required: true })} />
      <input type='password' name='password' ref={register({ required: true })} />
      <button type='submit'>Sign in</button>
    </form>
  );
};
