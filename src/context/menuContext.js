import React from 'react';
import { useMenu } from '../hooks/useMenu';

export const menuContext = React.createContext({
  isOpen: false,
  toggleMenu: () => {},
  closeMenu: () => {},
});

const { Provider } = menuContext;

export const MenuProvider = ({ children }) => {
  const [isOpen, toggleMenu, closeMenu] = useMenu();
  return <Provider value={{ isOpen, toggleMenu, closeMenu }}>{children}</Provider>;
};
