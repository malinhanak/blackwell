import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ className, onClick, icon, label, activeClass }) => {
  return (
    <DiceContainer>
      <DiceLabel>{label}</DiceLabel>
      <button className={className} onClick={onClick}>
        <FontAwesomeIcon className={activeClass ? 'chosen' : ''} icon={icon} size='10x' />
      </button>
    </DiceContainer>
  );
};

const DiceContainer = styled.article`
  min-width: 100px;
  max-width: 117px !important;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
`;

const DiceLabel = styled.label`
  font-size: 1.375rem;
  color: ${(props) => props.color || props.theme.colors.main};
  margin-bottom: 0;
  display: flex;
`;

export const DiceButton = styled(Button)`
  background: transparent;
  color: ${(props) => props.theme.colors.main};
  padding: 0;
  margin: 0;
  border: none;

  .chosen {
    color: ${(props) => props.theme.colors.accent};
  }
`;
