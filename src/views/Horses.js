import React, { useContext, useEffect } from 'react';
import { menuContext } from '../helpers/context';

function Horses() {
  const menu = useContext(menuContext);
  useEffect(() => {
    menu.currentPage('Horses');
  }, []);
  return <h3>You are on horse page</h3>;
}

export default Horses;
