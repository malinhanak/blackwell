import React, { useContext } from 'react';
import styled from 'styled-components';
import { Crown } from '../../../components';
import { MenuContext } from '../../../helpers/context';

const MenuElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;

  h1 {
    margin-top: -1rem;
    margin-left: -0.5rem;
    color: white;
    font-family: 'Almendra Display';
    font-size: 3.5rem;
  }

  a {
    margin: auto 1rem;
    text-decoration: none;
    color: white;
  }
`;

const MenuComponent = ({ className, children, letter }) => {
  const menu = useContext(MenuContext);
  return (
    <section className={className}>
      <MenuElement>
        <Crown width='50%' height='50%' fill='white' />
        <h1>{letter}</h1>
      </MenuElement>
      <button
        className={`hamburger hamburger--collapse ${menu.isOpen && 'is-active'}`}
        onClick={() => menu.toggleMenu()}
      >
        <span className='hamburger-box'>
          <span className='hamburger-inner'></span>
        </span>
      </button>
    </section>
  );
};

export const Menu = styled(MenuComponent)`
  width: 120px;
  min-height: 155px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(90, 49, 53, 0.98);

  button {
    width: 100%;
    padding: 0.5rem 1rem;
    background: #beada4;
    border: none;
    font-family: 'Montserrat';
    font-weight: 100;
    color: white;
  }
`;
