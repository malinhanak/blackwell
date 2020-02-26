import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuContext } from '../helpers/context';

function Horses(props) {
  const menu = useContext(MenuContext);
  useEffect(() => {
    menu.currentPage('Horses');
  }, []);
  return (
    <section>
      <h3>You are on horse page</h3>
      <Link to={`/horse/1`}>Wessex Knight</Link>
    </section>
  );
}

export default Horses;
