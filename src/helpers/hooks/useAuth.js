import { useState, useEffect } from 'react';
import { firebase } from '../../firebase';

export const useAuth = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const unsubcribeFirebaseAuth = firebase.auth.onAuthStateChanged((user) => {
      if (user) return setAuth(user);
      setAuth(null);
    });

    return () => unsubcribeFirebaseAuth();
  }, []);

  return auth;
};
