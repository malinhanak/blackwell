import React, { useContext, useEffect } from 'react';
import { FirebaseContext, MenuContext } from '../helpers/context';
//import { knight } from '../assets/img';

function Horse() {
  const { user } = useContext(FirebaseContext);
  const menu = useContext(MenuContext);
  useEffect(() => {
    menu.currentPage('Wessex Knight');
  }, []);
  return (
    <section>
      <h1 data-testid='horse-name'>Wessex Knight</h1>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <article>text</article>
      </section>
    </section>
  );
}

export default Horse;
