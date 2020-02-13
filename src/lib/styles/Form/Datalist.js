import styled from 'styled-components';

export const Datalist = styled.datalist`
  border-radius: none;
  border: none;
  :hover,
  :active {
    background: ${(props) => props.theme.colors.accent};
  }
`;
