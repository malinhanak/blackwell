import React, { useContext } from 'react';

import { AuthContext } from './context/authContext';
import {
  createAcccountWithEmailAndPassword,
  signInWithGoogle,
  signInWithEmailAndPassword,
  signOutFirebaseApps,
} from './helpers/firebase-utils/firebaseAuthManagement';
import { ButtonWithIcon } from './lib/styles';
import { SignInForm, CreateAccountForm } from './components/login';

export const App = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <h1>DiceTrax</h1>
      {auth.user ? <p>Welcome!</p> : null}
      <ButtonWithIcon iconType='fab' icon='google' onClick={() => signInWithGoogle()}>
        Sign in with Google
      </ButtonWithIcon>
      <SignInForm
        submitHandler={(loginCredentials) => signInWithEmailAndPassword(loginCredentials)}
      />
      <CreateAccountForm submitHandler={() => createAcccountWithEmailAndPassword()} />
      <button onClick={() => signOutFirebaseApps()}>Sign out</button>
    </div>
  );
};
