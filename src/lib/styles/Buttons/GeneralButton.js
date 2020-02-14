import styled from 'styled-components';

export const GeneralButton = styled.button`
  width: ${(props) => props.width || '100%'};
  border: none;
  padding: 1rem 1rem;
  margin: 1rem 0 0 0;
  font-size: 1.375rem;
  font-family: 'Quantico';
  text-align: center;
  background: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.font};
`;
