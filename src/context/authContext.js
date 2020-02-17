import React, { useState, useEffect } from 'react';
import { onAuthStateChange } from '../helpers/firebase-utils/firebaseAuthManagement';

export const AuthContext = React.createContext({
  currentUser: null,
});

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuthStateChange = onAuthStateChange(setUser);
    return () => {
      unsubscribeFromAuthStateChange();
    };
  }, []);

  return <Provider value={{ user }}>{children}</Provider>;
};
