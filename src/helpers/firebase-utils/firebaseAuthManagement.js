import { firebase, db } from '../../firebase';

export const signInWithGoogle = () => {
  return firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      const googleProvider = new firebase.auth.GoogleAuthProvider();

      return firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
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
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const createAcccountWithEmailAndPassword = (loginCredentials) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(loginCredentials.email, loginCredentials.password)
    .then((credentials) => {
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

export const signInWithEmailAndPassword = (loginCredentials) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(loginCredentials.email, loginCredentials.password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const signOutFirebaseApps = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('User is logged out');
    })
    .catch((error) => {
      console.log(error);
    });
};

export const onAuthStateChange = (setUser) => firebase.auth().onAuthStateChanged(setUser);
