import React, { useContext, useEffect } from 'react';
import { FirebaseContext, menuContext } from '../helpers/context';

function Home() {
  const { user } = useContext(FirebaseContext);
  const menu = useContext(menuContext);
  useEffect(() => {
    menu.currentPage('Wessex Royal');
  }, []);
  return <h1 data-testid='headline'>Welcome!</h1>;
}

export default Home;
