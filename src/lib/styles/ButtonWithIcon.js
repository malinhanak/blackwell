import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconicButton = ({ children, className, iconType, icon }) => {
  return (
    <button className={className}>
      {iconType ? <FontAwesomeIcon icon={[iconType, icon]} /> : <FontAwesomeIcon icon={icon} />}
      {children}
    </button>
  );
};

export const ButtonWithIcon = styled(IconicButton)`
  /* Box */
  display: flex;
  align-items: center;
  min-width: ${(props) => props.minWidth || '200px'};
  padding: 0.5rem 1rem;

  /* Shadows and colors */
  border: 1px solid lightgrey;
  -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.2);

  svg {
    margin-right: 1.5rem;
  }
`;

/* EXAMPLE USE
  import { ButtonWithIcon } from './lib/styles';

  <ButtonWithIcon iconType='fab' icon='google'>
    Sign-in with Google
  </ButtonWithIcon>
*/
