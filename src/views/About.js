import React, { useEffect } from 'react';
import { setTimeout } from 'core-js';

function About() {
  useEffect(() => {
    setTimeout(() => {
      console.log('loaded');
    }, 15000);

    return () => clearTimeout();
  }, []);
  return <h3>You are on about page</h3>;
}

export default About;
