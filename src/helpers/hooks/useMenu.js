import { useState } from 'react';

export const useMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState('Wessex Royal');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const currentPage = (title) => setPageTitle(title);

  return [isOpen, pageTitle, toggleMenu, closeMenu, currentPage];
};
