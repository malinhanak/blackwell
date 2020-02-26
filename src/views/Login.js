import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MenuContext, FirebaseContext } from '../helpers/context';
import { Input } from '../components/shared';
import { emailPattern } from '../assets/patterns';
import { GeneralButton } from '../lib/styles';

function Login() {
  const { register, handleSubmit, triggerValidation, errors } = useForm();
  const menu = useContext(MenuContext);
  const { user, firebase } = useContext(FirebaseContext);
  console.log(user, firebase);
  useEffect(() => {
    menu.currentPage('Login');
  }, []);

  const authenticate = async (credentials) => {
    try {
      await firebase.login(credentials.email, credentials.password);
    } catch (err) {
      console.error('Authentication Error: ', err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(authenticate)}>
      <Input
        label='Username'
        name='email'
        ref={register({ required: true, pattern: emailPattern })}
      />
      <Input label='Password' type='password' name='password' ref={register({ required: true })} />
      <GeneralButton>Login</GeneralButton>
    </form>
  );
}

export default Login;
