import styled from 'styled-components';

export const GeneralButton = styled.button`
  width: ${(props) => props.width || '100%'};
  border: none;
  padding: 1rem 1rem;
  margin: 1rem 0 0 0;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  font-family: 'Montserrat';
  text-align: center;
  background: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.font};
`;
