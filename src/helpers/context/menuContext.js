import React from 'react';
import { useMenu } from '../hooks';

export const MenuContext = React.createContext({
  isOpen: false,
  pageTitle: 'Wessex Royal',
  toggleMenu: () => {},
  closeMenu: () => {},
  currentPage: () => {},
});

const { Provider } = MenuContext;

export const MenuProvider = ({ children }) => {
  const [isOpen, pageTitle, toggleMenu, closeMenu, currentPage] = useMenu();
  return (
    <Provider value={{ isOpen, pageTitle, toggleMenu, closeMenu, currentPage }}>
      {children}
    </Provider>
  );
};
