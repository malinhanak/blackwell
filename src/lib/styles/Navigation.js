import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuContext } from '../../context';

export const NavComponent = ({ className, children }) => {
  const menu = useContext(menuContext);
  return (
    <section className={`${className} ${menu.isOpen && 'isOpen'}`}>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/horses'>Horses</Link>
      </nav>
    </section>
  );
};

export const Navigation = styled(NavComponent)`
  height: 100%;
  width: 100%;

  position: fixed;
  z-index: 800;
  bottom: 0;
  right: 0;

  background-color: rgba(56, 25, 20, 0.7);

  transform: translateY(100%);
  transition: transform 0.5s linear;

  &.isOpen {
    transform: translateY(0);
  }

  nav {
    width: 80%;
    height: 100%;
    margin: 0 0 0 30%;
    padding: 20% 2rem;
    display: flex;
    flex-direction: column;
  }

  nav > a {
    text-decoration: none;
    color: white;
    font-family: 'Montserrat';
    font-weight: 100;
    font-size: 2rem;
  }
`;
