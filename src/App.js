import React, { useState, useContext, useCallback, useEffect } from 'react';
import { firebase, db } from './firebase';

import { ButtonWithIcon } from './lib/styles';
import { SignInForm, CreateAccountForm } from './components/login';

const AuthContext = React.createContext({
  currentUser: null,
});
const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  return <Provider value={{ user }}>{children}</Provider>;
};

export const App = () => {
  const signInWithGoogle = () => {
    return firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        // In memory persistence will be applied to the signed in Google user
        // even though the persistence was set to 'none' and a page redirect
        // occurred.
        return firebase
          .auth()
          .signInWithPopup(googleProvider)
          .then(function(result) {
            db.collection('users')
              .doc(credentials.user.uid)
              .set({
                charName: credentials.user.displayName,
              });

            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // The email of the user's account used.
            //const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            //const credential = error.credential;
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const createAcccountWithEmailAndPassword = (loginCredentials) => {
    console.log(loginCredentials.email, loginCredentials.password);
    return firebase
      .auth()
      .createUserWithEmailAndPassword(loginCredentials.email, loginCredentials.password)
      .then((credentials) => {
        console.log(credentials);
        db.collection('users')
          .doc(credentials.user.uid)
          .set({
            charName: credentials.user.displayName,
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const signInWithEmailAndPassword = (loginCredentials) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(loginCredentials.email, loginCredentials.password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Hello DiceTrax!</h1>
      <ButtonWithIcon iconType='fab' icon='google' onClick={signInWithGoogle}>
        Sign in with Google
      </ButtonWithIcon>
      <SignInForm submitHandler={signInWithEmailAndPassword} />
      <CreateAccountForm submitHandler={createAcccountWithEmailAndPassword} />
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};
