import React, { useEffect, useContext } from 'react';
import { menuContext } from '../helpers/context';

function About() {
  const menu = useContext(menuContext);
  useEffect(() => {
    menu.currentPage('About');
  }, []);
  return <h3 data-testid='about-page'>You are on about page</h3>;
}

export default About;
