import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, Navigation } from '../';
import { menuContext } from '../../../helpers/context';

export const Layout = ({ className, children }) => {
  const menu = useContext(menuContext);
  return (
    <>
      <Menu letter='W' />
      <Navigation />
      <Container className={className}>
        <h2>{menu.pageTitle}</h2>
        {children}
      </Container>
    </>
  );
};

export default withRouter(Layout);

const Container = styled.section`
  width: 80%;
  position: relative;
  top: 5rem;
  left: 10rem;
  padding: 2rem 2rem;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.86);

  h2 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
`;
