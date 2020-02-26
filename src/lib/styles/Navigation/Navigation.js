import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuContext, FirebaseContext } from '../../../helpers/context';

export const NavComponent = ({ className, children }) => {
  const { user, firebase } = useContext(FirebaseContext);
  const menu = useContext(MenuContext);
  const handleLogOut = async () => {
    await firebase.logout();
    menu.closeMenu();
  };
  return (
    <section className={`${className} ${menu.isOpen && 'isOpen'}`}>
      <nav>
        <Link to='/' onClick={menu.closeMenu}>
          Home
        </Link>
        <Link to='/about' onClick={menu.closeMenu}>
          About
        </Link>
        <Link to='/horses' onClick={menu.closeMenu}>
          Horses
        </Link>
        {!user && (
          <Link to='/login' onClick={menu.closeMenu}>
            Login
          </Link>
        )}
        {user && (
          <Link to='/' onClick={handleLogOut}>
            Logout
          </Link>
        )}
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

  nav > a:last-of-type {
    font-size: 0.7rem;
    margin-top: 2rem;
  }
`;
