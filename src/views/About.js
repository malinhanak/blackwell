import React, { useEffect, useContext } from 'react';
import { MenuContext } from '../helpers/context';

function About() {
  const menu = useContext(MenuContext);
  useEffect(() => {
    menu.currentPage('About');
  }, []);
  return <h3 data-testid='about-page'>You are on about page</h3>;
}

export default About;
